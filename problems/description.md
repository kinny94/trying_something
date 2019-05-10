The maximum sub-array problem is a classic divide and conquer problem. This problem is often asked in hard and medium interviews. In some of the cases you might have to calculate the change in i and i+1 element to create a new array and use that array to find the  max sub-array sum and value. This problem gives you the maximum possible sub-array with both the start and end indices along eith the sum. The problem is interesting when it contains negative values. Divide and conquer suggests that we should divide the sub-array into two sub-arrays of as equal size as possible. We find the mid-point, and consider **A[low...mid]* and *A[mid+1...high]* and *A[i...j]*. Teh solution must lie in either of the following.
   
* entirely in *A[low...high], low <= i <= j <= mid*
* entirely in *A[mid+1...high], mid < i <= j <= high*
* crossing the mid-point *A[i..j], low <= i <= mid < j <= high*

We can find find the sub-array easily if the solution lies in somewhere in the left half or in the right half, by calling the *findMaximumSubArray* function recursively. At crossing we need to combine the left and right part of the crossing.