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

## 概要

ESPnet-ONNX は、ESPnet で開発された PyTorch ベースの音声処理モデルを ONNX 形式に変換し、実運用向けに最適化するフレームワークです。これにより、C++ やモバイル環境などへのデプロイが容易になります。

## 背景

研究開発ではモデルの精度や新規性が重視される一方、実運用では軽量性・高速性・移植性が求められます。ESPnet-ONNX は、この両者のギャップを埋めるため、追加学習を行うことなくモデルの変換と最適化を可能にします。

## アプローチ

- **ONNX 変換**：ESPnet のモデルを静的な ONNX グラフに変換。動的ループ（例：自己回帰デコーダ）を避けるため、モジュール単位に分割して変換。
- **ノード融合**：Attention や LayerNorm などの共通サブグラフを1つのノードに統合し、マルチスレッドで高速処理。
- **量子化**：動的量子化により、精度を保ったままモデルサイズとメモリ使用量を削減。

## 結果

- ASR・ST・SLU タスクで最大 **2倍** の推論速度向上、TTS タスクで **1.3倍** 向上。
- 精度低下はごくわずか（例：WER の変化 < 0.2%）。
- メモリ使用量を最大 **70% 削減**。
- **278以上の ESPnet 事前学習モデル** に即対応。

## リソース

- GitHub: [https://github.com/espnet/espnet_onnx](https://github.com/espnet/espnet_onnx)
- 対応タスク：ASR、TTS、ST、SLU
- 追加学習不要

## おまけ

本当はESPnetでモデル学習して、ちょちょちょいっと変換できたら楽だったんですけどね。
モデルの中には、単純にonnx変換すると全然動かないのも結構あって大変でした。

ただこの経験でOnnxruntimeをhackしてみたり、Onnx側の挙動をしっかり確認できる機会になって楽しかったです。

