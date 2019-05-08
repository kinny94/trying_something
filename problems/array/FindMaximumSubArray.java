import java.util.Arrays;

class FindMaximumSubArray {

    public static int max_left = 0;
    public static int max_right = 0;        

    public static int[] findMaximumCrossingSubArray(int a[], int low, int mid, int high) {
        int left_sum = Integer.MIN_VALUE;
        int sum = 0;
        
        for (int i=mid; i>=low; --i) {
            sum = sum + a[i];
            if (sum > left_sum) {
                max_left = i;
                left_sum = sum;
            }
        }

        int right_sum = Integer.MIN_VALUE;
        sum = 0;
        for (int j=mid+1; j<=high; ++j) {
            sum = sum + a[j];
            if (sum > right_sum) {
                right_sum = sum;
                max_right = j;
            }
        }

        int total = left_sum + right_sum;
        int arr[] = { max_left, max_right, total };
        return arr;
    }

    public static int[] findMaximumSubArray(int a[], int low, int high) {

        if (high == low) {
            int arr[] = {low, high, a[low]};
            return arr;
        }

        else {
            int mid = (low + high)/2;
            int left[] = findMaximumSubArray(a, low, mid);
            int right[] = findMaximumSubArray(a, mid+1, high);
            int cross[] = findMaximumCrossingSubArray(a, low, mid, high);

            if (left[2] >= right[2] && left[2]>=cross[2]) {
                return left;
            }
            else if (right[2] >= left[2] && right[2] >= cross[2]) {
                return right;
            }
            else {
                return cross;
            }
        }
    }
    public static void main(String[] args) {
        int arr[] = { 13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7 };
        int max_sum[] = findMaximumSubArray(arr, 0, arr.length-1);
        System.out.println(Arrays.toString(max_sum));
    }
}