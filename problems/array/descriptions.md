You are given a one dimensional array that may contain both positive and negative integers, find the sum of contiguous subarray of numbers which has the largest sum. Using Divide and Conquer approach, we can find the maximum subarray sum in O(nLogn) time. Following is the Divide and Conquer algorithm.

*Divide* : Divide the given array in two halves.

*Return* the maximum of following three: 
* Maximum subarray sum in left half (Make a recursive call)
* Maximum subarray sum in right half (Make a recursive call)
* Maximum subarray sum such that the subarray crosses the midpoint

