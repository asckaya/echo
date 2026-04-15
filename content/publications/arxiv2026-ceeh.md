---
id: arxiv2026-compress-explore
title: "Compress the Easy, Explore the Hard: Difficulty-Aware Entropy Regularization for Efficient LLM Reasoning"
authors: [Qin-Wen Luo, Sheng Ren, Xiang Chen, Rui Liu, Jun Fang, Naiqiang Tan, Sheng-Jun Huang]
venue: arXiv
venueType: preprint
year: 2026
status: preprint
isFirstAuthor: false
isCoFirst: false
links:
  paper: "https://arxiv.org/abs/2602.22642"
emoji: "🧠"
featuredImage: /images/publications/CEEH.png
---

Chain-of-Thought (CoT) has substantially empowered Large Language Models (LLMs) to tackle complex reasoning tasks, yet the verbose nature of explicit reasoning steps incurs prohibitive inference latency and computational costs. We identify a critical failure mode: explicitly optimizing for shorter trajectories triggers rapid entropy collapse, which prematurely shrinks the exploration space. To address this, we propose CEEH (Compress responses for Easy questions and Explore Hard ones), a difficulty-aware approach to RL-based efficient reasoning. CEEH dynamically assesses instance difficulty to apply selective entropy regularization. Across six reasoning benchmarks, CEEH consistently reduces response length while maintaining accuracy.