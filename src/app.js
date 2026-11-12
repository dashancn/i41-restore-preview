import * as ort from 'onnxruntime-web/webgpu';
import { modelConfig, validateImageDimensions, selectProvider, imageDataToTensor, tensorToImageData } from './engine.js';

const $ = id => document.getElementById(id);
const inputCanvas = $('input');
const outputCanvas = $('output');
const inputContext = inputCanvas.getContext('2d', { willReadFrequently: true });
const outputContext = outputCanvas.getContext('2d');
let session = null;
let selectedFile = null;
let objectUrl = null;
let outputBlob = null;
let modelProvider = null;

ort.env.wasm.numThreads = Math.min(4, navigator.hardwareConcurrency || 1);
ort.env.wasm.simd = true;

function message(text, progress) {
  $('message').textContent = text;
  if (progress !== undefined) $('progress').value = progress;
}

async function detectGpu() {
  if (!navigator.gpu) {
    $('gpu-status').textContent = '不可用';
    $('provider').value = 'wasm';
    message('WebGPU 不可用，已自动切换到 CPU 兼容模式。CPU 推理可能需要几十秒或更久。', 0);
    return false;
  }
  try {
    const adapter = await navigator.gpu.requestAdapter({ powerPreference: 'high-performance' });
    if (!adapter) throw new Error('没有可用适配器');
    $('gpu-status').textContent = '可用';
    return true;
  } catch (error) {
    $('gpu-status').textContent = `不可用：${error.message}`;
    $('provider').value = 'wasm';
    message('WebGPU 不可用，已自动切换到 CPU 兼容模式。CPU 推理可能需要几十秒或更久。', 0);
    return false;
  }
}

let gpuReady = false;

$('file').addEventListener('change', async () => {
  selectedFile = $('file').files?.[0] || null;
  $('run').disabled = true;
  $('download').disabled = true;
  outputBlob = null;
  if (!selectedFile) return;
  if (selectedFile.size > 20 * 1024 * 1024) {
    message('文件超过 20 MiB，请选择更小的图片。', 0);
    return;
  }
  if (objectUrl) URL.revokeObjectURL(objectUrl);
  objectUrl = URL.createObjectURL(selectedFile);
  const image = new Image();
  image.src = objectUrl;
  try {
    await image.decode();
    validateImageDimensions(image.naturalWidth, image.naturalHeight);
    inputContext.clearRect(0, 0, 512, 512);
    inputContext.drawImage(image, 0, 0, 512, 512);
    $('run').disabled = !session;
    message(`图片已准备：${image.naturalWidth} × ${image.naturalHeight}，将缩放为 512 × 512。`, 0);
  } catch (error) {
    message(`图片读取失败：${error.message}`, 0);
  }
});

$('load').addEventListener('click', async () => {
  const requested = $('provider').value;
  const provider = selectProvider({ webgpu: gpuReady, requested });
  if (!provider) {
    message('当前浏览器无法使用 WebGPU。可手动选择 CPU 兼容模式。', 0);
    return;
  }
  $('load').disabled = true;
  $('run').disabled = true;
  $('model-status').textContent = '正在下载并初始化';
  message('正在下载约 74 MB 模型，首次使用请保持页面打开…', 10);
  try {
    const started = performance.now();
    session?.release?.();
    session = await ort.InferenceSession.create(modelConfig.url, {
      executionProviders: [provider],
      graphOptimizationLevel: 'all',
      preferredOutputLocation: provider === 'webgpu' ? 'cpu' : undefined,
    });
    modelProvider = provider;
    $('model-status').textContent = `${provider.toUpperCase()} 已就绪`;
    $('timing').textContent = `加载 ${((performance.now() - started) / 1000).toFixed(1)} 秒`;
    $('run').disabled = !selectedFile;
    message('模型已就绪。', 100);
  } catch (error) {
    session = null;
    $('model-status').textContent = '加载失败';
    message(`模型加载失败：${error.message}`, 0);
  } finally {
    $('load').disabled = false;
  }
});

$('run').addEventListener('click', async () => {
  if (!session || !selectedFile) return;
  $('run').disabled = true;
  $('download').disabled = true;
  message(`正在使用 ${modelProvider.toUpperCase()} 修复…`, 20);
  try {
    const pixels = inputContext.getImageData(0, 0, 512, 512);
    const input = new ort.Tensor('float32', imageDataToTensor(pixels.data, 512, 512), [1, 3, 512, 512]);
    const started = performance.now();
    const outputs = await session.run({ [session.inputNames[0]]: input }, [session.outputNames[0]]);
    const elapsed = performance.now() - started;
    const result = outputs[session.outputNames[0]];
    const rgba = tensorToImageData(result.data, 512, 512);
    outputContext.putImageData(new ImageData(rgba, 512, 512), 0, 0);
    outputBlob = await new Promise((resolve, reject) => outputCanvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('导出失败')), 'image/png'));
    $('timing').textContent = `推理 ${(elapsed / 1000).toFixed(1)} 秒`;
    $('download').disabled = false;
    message('修复完成。结果可能生成不存在的细节，请与原图对比。', 100);
  } catch (error) {
    message(`修复失败：${error.message}`, 0);
  } finally {
    $('run').disabled = false;
  }
});

$('download').addEventListener('click', () => {
  if (!outputBlob) return;
  const link = document.createElement('a');
  const url = URL.createObjectURL(outputBlob);
  link.href = url;
  link.download = `${selectedFile?.name.replace(/\.[^.]+$/, '') || 'face'}-restored.png`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 30_000);
});

addEventListener('pagehide', () => {
  session?.release?.();
  if (objectUrl) URL.revokeObjectURL(objectUrl);
});

detectGpu().then(value => {
  gpuReady = value;
});
