import java.util.Arrays;

class InsertionSort {
    
    // Function to sort the array using insertion sort.
    void insertionSort(int a[]) {
        for(int i=1; i<a.length; ++i){
            int j = i-1;
            int key = a[i];

            /*
                Run the loop from right to left till j = 0 and replace appropriately
            */
            while (j>=0 && a[j]>key) {
                a[j+1] = a[j];
                j = j - 1;
            }
            a[j+1] = key;
        }
    }

    public static void main(String[] args) {
        int a[] = { 5, 2, 4, 6, 1, 3 };
        InsertionSort ob = new InsertionSort(); 
        ob.insertionSort(a); 
        System.out.println(Arrays.toString(a));
    }
}