Quicksort is a really efficient algorithm which is used in most of the in-built sorting algorithms. It is based on the divide and conquer algorithm.

*Divide*: Partition the array **A[p...r]** into two sub-arrays **A[p...q-1]** and **A[q+1...r]** such that each element of **A[p...q-1]** is less than or equal to **A[q]**, which is in turn less than or equal to each element of **A[q+1...r]**.
*Conquer*: Sort the two sub-arrays **A[p...q-1]** and **A[q+1...r]** by recurrsively calls.
*Partition*: Always selects and element *x = A[r]* as a pivot around which to partition the sub-array **A[p...r]**.
*Randomized Partition*: Instead of always using **A[r]** as pivot, we will randomly select element from sub-array **A[p...r]**, we do so by first exchanging element **A[r]** with an element chosen at random from **A[p...r]**.

*Worst-case*: It occurs when the partitioning routine, produce, one sub-poblem with n-1 elements and one with 0 elements. since the recurssively call on an arry of size 0 just return O(1).

*Best-case*: When the partitioning produces two sub-problems, each of the size no more than **n/2**, since one is of size **[n/2]** and one of **[n/2 - 1]**.