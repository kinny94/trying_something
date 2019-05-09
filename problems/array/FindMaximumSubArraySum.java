class FindMaximumSubArraySum {

/*
    The maximum sub-array problem is a classic divide and conquer problem. This problem is often asked in hard and medium interviews. In some of the cases you might have to calculate the change in i and i+1 element to create a new array and use that array to find the  max sub-array sum and value. This problem gives you the maximum possible sum of the sub-array. The problem is interesting when it contains negative values. Divide and conquer suggests that we should divide the sub-array into two sub-arrays of as equal size as possible. We find the mid-point, and consider *A[low...mid]* and *A[mid+1...high]* and *A[i...j]*. Teh solution must lie in either of the following.
    * entirely in *A[low...high], low <= i <= j <= mid*
    * entirely in *A[mid+1...high], mid < i <= j <= high*
    * crossing the mid-point *A[i..j], low <= i <= mid < j <= high*

    We can find find the sub-array easily if the solution lies in somewhere in the left half or in the right half, by calling the findMaximumSubArray function recursively. At crossing we need to combine the left and right part of the crossing.   
*/
    
    public static int maxCrossingSubArray(int a[], int low, int mid, int high) {
        int sum = 0;
        int left_sum = Integer.MIN_VALUE;

        for( int i=mid; i>=low; i--) {
            sum = sum + a[i];
            if(sum > left_sum) {
                left_sum = sum;
            }
        }

        sum = 0;
        int right_sum = Integer.MIN_VALUE;
        for(int i=mid+1; i<=high; i++) {
            sum = sum + a[i];
            if(sum > right_sum) {
                right_sum = sum;
            }
        }

        return right_sum + left_sum;
    }

    static int maxSubArraySum(int a[], int low, int high) {
        if(low == high) {
            return a[low];
        }

        int mid = (low + high)/2;

        return Math.max(
            Math.max(maxSubArraySum(a, low, mid),maxSubArraySum(a, mid+1, high)),
            maxCrossingSubArray(a, low, mid, high)
        );
    }

    public static void main(String[] args) {
        int arr[] = {-2, -5, 6, -2, -3, 1, 5, -6};
        int max_sum = maxSubArraySum(arr, 0, arr.length-1);
        System.out.println(max_sum);
    }
}