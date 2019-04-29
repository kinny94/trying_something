import java.util.Arrays;

class MergeSort {
    /*
        Function to merge two sub-arrays
        First sub-array = arr[l + m];
        Second sub-array = arr[m+1, r];
    */
    public void merge(int arr[], int start, int mid, int end){
        
        //create a temporary array
        int temp[] = new int[end - start + 1];
        
        int i = start, j = mid+1, k = 0;

        // traverse both the arrays in each iteration add smaller of both elementsin temp
        while(i <= mid && j <= end) {
            if(arr[i] <= arr[j]) {
                temp[k] = arr[i];   
                ++k;
                ++i;
            } else {
                temp[k] = arr[j];
                ++k;
                ++j;
            }
        }

        // add elements left in the first interval
        while(i <= mid) {
            temp[k] = arr[i];
            ++k;
            ++i;
        }

        // add elements to the left in the second interval
        while(j <= end) {
            temp[k] = arr[j];
            ++k;
            ++j;
        }

        // copy temp to the original interval
        for(i = start; i <= end; i++) {
            arr[i] = temp[i - start];
        }
    }

    // function to sort the list 
    public void mergeSort(int arr[], int start, int end){
        if(start < end) {

            int mid = (start + end)/2;

            // sort the first and second halves 
            mergeSort(arr, start, mid);
            mergeSort(arr, mid+1, end);

            // merge the two sorted halves  
            merge(arr, start, mid, end);
        }
    }

    public static void main(String[] args) {
        int array[] = {38, 24, 43, 3, 9, 82, 10};
        MergeSort obj = new MergeSort();
        obj.mergeSort(array, 0, array.length-1);
        System.out.println(Arrays.toString(array));
    }
}