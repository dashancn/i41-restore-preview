# i41 Restore Preview

一次性的 RestoreFormer++ 电脑端浏览器技术预览，用于验证真实桌面 WebGPU 的模型加载、推理速度和视觉效果。

## 限制

- 不是生产工具，页面设置 `noindex,nofollow`。
- 仅接受已裁剪、已对齐的单张人脸；上传后缩放到 512×512。
- 不包含自动人脸检测、关键点对齐、多人脸处理和贴回原图。
- 模型来自第三方 ONNX 转换，仅供验证。生产版必须从官方 checkpoint 可重复转换。

## 模型

- RestoreFormer++ INT8 weight ONNX
- 固定 Hugging Face revision `9e5912e04026135bc1a7c8557a2da66f521a7b8e`
- 74,375,477 bytes
- SHA-256 `4b3983dba15b8dd26db1bc94be57558ca4d783424ca6f3715676ab53450bcb6c`

## 命令

```bash
npm test
npm run build
npm run dev
```

## License

Preview source: Apache-2.0. RestoreFormer++ is Apache-2.0; preserve its notices. ONNX Runtime Web is MIT. The preview does not redistribute the model in this repository; the browser downloads the pinned external artifact at runtime.
