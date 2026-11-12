import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { modelConfig, validateImageDimensions, selectProvider } from '../src/engine.js';

test('model config pins the reviewed INT8 artifact', () => {
  assert.equal(modelConfig.bytes, 74375477);
  assert.equal(modelConfig.sha256, '4b3983dba15b8dd26db1bc94be57558ca4d783424ca6f3715676ab53450bcb6c');
  assert.match(modelConfig.url, /9e5912e04026135bc1a7c8557a2da66f521a7b8e/);
});

test('image dimensions reject unsafe inputs', () => {
  assert.deepEqual(validateImageDimensions(512, 512), { width: 512, height: 512 });
  assert.throws(() => validateImageDimensions(0, 512));
  assert.throws(() => validateImageDimensions(12001, 100));
  assert.throws(() => validateImageDimensions(5000, 5000));
});

test('provider selection can choose explicit CPU fallback', () => {
  assert.equal(selectProvider({ webgpu: true, requested: 'webgpu' }), 'webgpu');
  assert.equal(selectProvider({ webgpu: false, requested: 'webgpu' }), null);
  assert.equal(selectProvider({ webgpu: false, requested: 'wasm' }), 'wasm');
});

test('page exposes a visible CPU fallback when WebGPU is unavailable', async () => {
  const source = await readFile(new URL('../src/app.js', import.meta.url), 'utf8');
  assert.match(source, /\$\('provider'\)\.value = 'wasm'/);
  assert.match(source, /已自动切换到 CPU 兼容模式/);
});

test('page discloses preview limits, model size and local processing', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /电脑端技术预览/);
  assert.match(html, /约 74 MB/);
  assert.match(html, /照片不会上传/);
  assert.match(html, /WebGPU/);
  assert.match(html, /仅支持已裁剪、已对齐的单张人脸/);
  assert.match(html, /不用于身份核验/);
});
