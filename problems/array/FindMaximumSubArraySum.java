class FindMaximumSubArraySum {
    
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