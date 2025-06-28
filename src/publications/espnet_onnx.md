---
icon: pen-fancy
category:
  - publications
tag:
  - ESPnet
  - ONNX
  - inference
---

# ESPnet-ONNX: Bridging a Gap Between Research and Production

[arXiv](https://arxiv.org/abs/2209.09756)

## Overview

ESPnet-ONNX is a framework that enables the conversion of PyTorch-based speech models developed in ESPnet into ONNX format, making them suitable for real-world deployment. It specifically targets efficient inference on CPUs and compatibility with various runtime environments like C++.

## Motivation

Research models often prioritize accuracy and innovation, but are not optimized for practical inference. In contrast, production models need to be lightweight, fast, and portable. ESPnet-ONNX bridges this gap by providing model transformation and optimization techniques without requiring additional training.

## Approach

- **ONNX Conversion**: Converts ESPnet models into static ONNX graphs, splitting components to handle dynamic loops (e.g., autoregressive decoders).
- **Node Fusion**: Merges common subgraphs (e.g., multi-head attention and layer norm) into single operations for faster multi-threaded computation.
- **Quantization**: Applies dynamic quantization to reduce model size and memory usage while preserving accuracy.

## Results

- Achieved up to **2× inference speedup** in ASR, ST, and SLU tasks; **1.3× in TTS**.
- Maintained accuracy with minimal degradation (e.g., <0.2% WER change).
- Reduced memory usage by up to **70%**.
- Compatible with over **278 pre-trained ESPnet models**.

## Resources

- GitHub: [https://github.com/espnet/espnet_onnx](https://github.com/espnet/espnet_onnx)
- Supported tasks: ASR, TTS, ST, SLU
- No retraining required
