/*  
    Insertions sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less effective on large lists.
    Insertion sort iterates, consuming one input element at each repetition and growing a sorted output list. Each Iteration, Insertion sort removes one element from the input data, find the location it belongs within the sorted list and inserts it there.
*/  

class Insertion_Sort{

    public static void InsertionSort( int a[] ){
        
        int n = a.length;
        for( int i=1; i<n; i++ ){

            int key = a[i];
            int j = i - 1;

            while( j>=0 && a[j] > key ){
                a[ j+1 ] = a[j];
                j = j - 1; 
            }

            a[ j + 1 ] = key;
        }
    }

    public static void printArray(int arr[])
    {
        int n = arr.length;
        for (int i=0; i<n; ++i)
            System.out.print(arr[i] + " ");
 
        System.out.println();
    }

    public static void main(String[] args) {
        
        int arr[] = {12, 11, 13, 5, 6};
        InsertionSort( arr );
        printArray( arr );

    }
}