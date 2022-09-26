---
layout: archive
#title: "Projects"
permalink: /talks/
author_profile: true
---

{% include base_path %}

Optimizing GEMM/GEMV on x86 CPUs and NVIDIA GPUs
======
Mainly focusing on low-level performance optimization for math libraries, my PhD research is rooted in highly efficient hand-tuned GEMM/GEMV. Here I disassembled some common strategies that close-source commercial libraries ([Intel oneMKL](https://www.intel.com/content/www/us/en/developer/tools/oneapi/onemkl.html), [NVIDIA cuBLAS](https://docs.nvidia.com/cuda/cublas/index.html)) adopt for GEMM/GEMV optimizations.

* On NVIDIA GPUs (tested on RTX 2080 Super, TU102)
  * SGEMM (tiling, warp-level tiling, register blocking, prefetching, double buffer). [\[code\]](https://github.com/yzhaiustc/Optimizing-SGEMM-on-NVIDIA-Turing-GPUs) [\[tutorial\]](https://github.com/yzhaiustc/Optimizing-SGEMM-on-NVIDIA-Turing-GPUs/blob/main/README.md)
  * SGEMV (register blocking, vectorization). [\[code\]](https://github.com/yzhaiustc/Optimizing-SGEMV-on-NVIDIA-GPUs)

* On Intel CPUs (tested on Xeon Gold W2255, Cascade Lake)
  * DGEMM (register blocking, cache blocking, packing, SIMD, prefetching). [\[code\]](https://github.com/yzhaiustc/Optimizing-DGEMM-on-Intel-CPUs-with-AVX512F) [\[tutorial\]](https://github.com/yzhaiustc/Optimizing-DGEMM-on-Intel-CPUs-with-AVX512F/blob/master/README.md)
  * DGEMV (register blocking, SIMD, OpenMP multithreading). [\[code\]](https://github.com/yzhaiustc/Optimizing-DGEMV-on-Intel-CPUs)

Accelerating Homomorphic Encryption on Intel GPUs [\[paper\]](https://arxiv.org/pdf/2109.14704.pdf)
======
* The first-ever SYCL-based GPU backend for Microsoft SEAL APIs.
* The first HE library based on the CKKS scheme optimized for Intel GPUs
* Optimizating from instruction level, algorithmic level and application level to accelerate our HE library.
* Our NTT implementations reaches up to 85.7% of the theoretical peak performance on latest Intel GPUs.

FT-BLAS: A High-Performance BLAS Implementation With Online Fault Tolerance [\[paper\]](https://dl.acm.org/doi/pdf/10.1145/3447818.3460364)
======
* Brand new BLAS implementation (Level-1/2/3) featuring Intel AVX512 instructions. Comparable/faster than state-of-the-art BLAS libraries on latest Intel CPUs.
* Encoded fault tolerant codes into assembly kernels with negligible overhead (0.5% - 3%) added to the baseline.
* The fault tolerant library remains comparable/faster than commercial libraries (MKL/OpenBLAS/BLIS) with/without runtime computing errors injected.