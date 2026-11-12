export const modelConfig = Object.freeze({
  url: 'https://huggingface.co/Saimon8420/restoreformer-pp-web/resolve/9e5912e04026135bc1a7c8557a2da66f521a7b8e/restoreformer_pp_int8w.onnx',
  bytes: 74375477,
  sha256: '4b3983dba15b8dd26db1bc94be57558ca4d783424ca6f3715676ab53450bcb6c',
  inputSize: 512,
});

export function validateImageDimensions(width, height) {
  if (!Number.isInteger(width) || !Number.isInteger(height) || width <= 0 || height <= 0)
    throw new Error('图片尺寸无效');
  if (width > 10_000 || height > 10_000 || width * height > 16_000_000)
    throw new Error('图片尺寸过大');
  return { width, height };
}

export function selectProvider({ webgpu, requested }) {
  if (requested === 'wasm') return 'wasm';
  if (requested === 'webgpu' && webgpu) return 'webgpu';
  return null;
}

export function imageDataToTensor(rgba, width, height) {
  const output = new Float32Array(3 * width * height);
  const plane = width * height;
  for (let index = 0; index < plane; index += 1) {
    output[index] = rgba[index * 4] / 127.5 - 1;
    output[plane + index] = rgba[index * 4 + 1] / 127.5 - 1;
    output[plane * 2 + index] = rgba[index * 4 + 2] / 127.5 - 1;
  }
  return output;
}

export function tensorToImageData(values, width, height) {
  const output = new Uint8ClampedArray(width * height * 4);
  const plane = width * height;
  for (let index = 0; index < plane; index += 1) {
    output[index * 4] = Math.max(0, Math.min(255, (values[index] + 1) * 127.5));
    output[index * 4 + 1] = Math.max(0, Math.min(255, (values[plane + index] + 1) * 127.5));
    output[index * 4 + 2] = Math.max(0, Math.min(255, (values[plane * 2 + index] + 1) * 127.5));
    output[index * 4 + 3] = 255;
  }
  return output;
}
