---
icon: pen-fancy
category:
  - publications
tag:
  - inference
  - decode
  - AR
  - NAR
  - PAR
---

# Segment-Level Vectorized Beam Search Based on Partially Autoregressive Inference

[arXiv](https://arxiv.org/abs/2309.14922)

## Abstract

By combining the autoregressive (AR) and non-autoregressive (NAR) decoding, we achieved a partially autoregressive (PAR) decoding that can utilize the stregth of both.
As result, we achieved at around 12-13 times speedup with little accuracy degradation.
One of the merit of this PAR is that we don't have to train a new model, simply utilize the pre-trained AR model would achieve this speedup.
I added this decoding algorithm in the ESPnet: [5769](https://github.com/espnet/espnet/pull/5769)



## Details on PAR

### What is Autoregressive decoding?

For the majour decoding process in speech to text task, we have the autoregressive (AR) way of decoding, which takes the former output to infer the next token.

![Autoregressive decoding](./partially_autoregressive_inference/AR_explained.png)

In this image we estimate the string `sea_cucumber`.
For example, we compute the second `e` after we compute the first `s`, so that we could utilize the information that the first letter for this audio is `s`.
This process could achieve good accuracy, but is also very slow in inference speed since we should wait for the latter characters until the former characters are computed.


### What is Non-Autoregressive decoding?

AR has a shortage of slow inference.
To address this problem, Non-Autoregressive decoding try to compute all characters at once.

![Non-Autoregressive decoding](./partially_autoregressive_inference/NAR_explained.png)

There are several architectures for the NAR decoding. I choosed to use the Mask-CTC here, which is one of the simplest NAR structure in my opinion.
First, it use the CTC module as a NAR estimator to compute the whole characters.
Since CTC predicts tokens for each frames without depends on other frames, it is considered as non-autoregressive decoding.
However, since it does not take other frames into account, the accuracy drops compared to AR.
So in the Mask-CTC, we detect tokens with lower confidence and replace them with the decoder trained in a Masked Language Model task.

This process is faster than AR, since all characters can be predicted in parallel, but has shortage of accuracy degradation.
For example, we cannot modify the token length, even if the CTC output is longer or shorter than the actual string sequence.



### What is Partially Autoregressive decoding we propose

In our paper, we proposed to revise the low-confident tokens from CTC module, with AR.
So that only a portion of the sequence can be predicted in AR manner, reducing the number of iteration of the AR process.
This is why we call it partially autoregressive decoding.

![Partially Autoregressive decoding](./partially_autoregressive_inference/PAR_explained.png)

By revising the low-confident tokens (marked as red characters) in parallel, the number of iterations for AR process can be greatly reduced.
Note that if we try to revise the second or later part, each segment for the AR process contains the red characters.
We can wait for the first part to be predicted, but it makes the inference slower.
So in our paper we utilized the CTC output, even if it might contains wrong tokens.
based on our experiments, there is no significant difference on accuracy when we employ CTC output directly.


## Experimental Result

### AR vs PAR

For the Error, we employed the Word Error Rate (WER).

![Table 3](./partially_autoregressive_inference/table-3.png)

We can see that with the PAR process the inference speed becomes faster without sacrificing accuracy much.
Note that this speedup comes from the parallelization of AR process.
So if the audio is short, the speedup effect is not as effective as longer audio.
Conversely, the speedup effect is superior in longer audio, as we observed 89.7 times speedup at maximum.


### Trade-off

Here I created the figure on accuracy vs inference speed.
I measured by gradually changing the beam size from 1 to 20.

![Figure 4](./partially_autoregressive_inference/trade_off.png)

Compared to AR, the line of PAR is located at the left on both Librispeech-100h and Librispeech-960h dataset, indicating that the improvement on the trade-off.

### NAR vs PAR

Here are the results for the model trained and evaluated with Librispeech-100h dataset.

![Table 4](./partially_autoregressive_inference/table-4.png)

You can see that the inference speed is competitive as NAR, while the accuracy is as the same level as the AR.


## Limitation

### Accuracy

As I mentioned in the PAR section, especially for the second or later segments the tokens inside the segment can be wrong. This might have bad effect on accuracy.

### About the memory usage

Due to the parallelization, the memory usage at once would increase.
However, when refactoring the experimental code for the PR, I noticed that the memory issue was accually caused by the source-attention process where we need to compute the attention between the encoder output and the decoder input.
For example if we had 20 batches then it copies the encoder output for 20 batches, which increases the memory usage...
So I simply removed this redundant copy of tensor, and the issue fixed.
It actually speedup inference more..
