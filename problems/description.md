Heap sort is a comparison based sorting technique based on Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end. We repeat the same process for remaining element.
*A heap is an array object that we can view as a nearly complete binary tree*

There are two kinds of binary heap: 
**Max-heap**: Largest element is at the root.
**Min-heap**: Smallest element is at the root.

At each step the largest the of the element, **A[i]**, **A[LEFT(i)]** and **A[RIGHT(i)]** is determined and its idex is stored in largest.