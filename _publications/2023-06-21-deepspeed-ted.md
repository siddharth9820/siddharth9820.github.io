---
title: "A Hybrid Tensor-Expert-Data Parallelism Approach to Optimize Mixture-of-Experts Training"
collection: publications
category: conferences
permalink: /publication/2023-06-21-deepspeed-ted-moe
excerpt: 'This paper is about fixing template issue #693.'
date: 2023-06-21 
venue: "ICS '23: Proceedings of the 37th International Conference on Supercomputing"
paperurl: 'https://dl.acm.org/doi/abs/10.1145/3577193.3593704'
citation: |
    @inproceedings{10.1145/3577193.3593704,
    author = {Singh, Siddharth and Ruwase, Olatunji and Awan, Ammar Ahmad and Rajbhandari, Samyam and He, Yuxiong and Bhatele, Abhinav},
    title = {A Hybrid Tensor-Expert-Data Parallelism Approach to Optimize Mixture-of-Experts Training},
    year = {2023},
    isbn = {9798400700569},
    publisher = {Association for Computing Machinery},
    address = {New York, NY, USA},
    url = {https://doi.org/10.1145/3577193.3593704},
    doi = {10.1145/3577193.3593704},
    abstract = {Mixture-of-Experts (MoE) is a neural network architecture that adds sparsely activated expert blocks to a base model, increasing the number of parameters without impacting computational costs. However, current distributed deep learning frameworks are limited in their ability to train high-quality MoE models with large base models. In this work, we present DeepSpeed-TED, a novel, three-dimensional, hybrid parallel algorithm that combines data, tensor, and expert parallelism to enable the training of MoE models with 4--8\texttimes{} larger base models than the current state-of-the-art. We also describe memory optimizations in the optimizer step, and communication optimizations that eliminate unnecessary data movement. We implement our approach in DeepSpeed and achieve speedups of 26\% over a baseline (i.e. without our communication optimizations) when training a 40 billion parameter MoE model (6.7 billion base model with 16 experts) on 128 V100 GPUs.},
    booktitle = {Proceedings of the 37th ACM International Conference on Supercomputing},
    pages = {203–214},
    numpages = {12},
    keywords = {expert parallelism, tensor parallelism, mixture-of-experts, parallel deep learning},
    location = {Orlando, FL, USA},
    series = {ICS '23}
    }
---

Lorem ipsum
