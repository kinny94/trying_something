/*
The selection sort algorithm sorts an array by repeatedly finding the minimum element from unsorted part and putting it in the beginning. The algorithm maintains two subarrays.
1.) The subarray which is already sorted 
2.) The subarray which needs to be sorted.
In every iterations, the minimum element from the unsorted subarray is picked and moved to the sorted subarray
*/

class Selection_Sort{
    
    public static void SelectionSort( int a[] ){
        int n = a.length;
        
        for( int i=0; i<n-1; i++ ){
            // finding the middle element in unsorted array
            int min_idx = i;    
            for( int j=i+1; j<n; j++){
                if( a[j] < a[min_idx ]){
                    min_idx = j;
                }
            }
            
            // swap the found minimum with the first element
            int temp = a[ min_idx ];
            a[ min_idx ] = a[i];
            a[i] = temp;                                
        }
    }
    
    // Prints the array
    public static void printArray(int arr[])
    {
        int n = arr.length;
        for (int i=0; i<n; ++i)
        System.out.print(arr[i]+" ");
        System.out.println();
    }
    
    // Driver code to test above
    public static void main(String args[])
    {
        int arr[] = {64,25,12,22,11};
        SelectionSort( arr );
        System.out.println("Sorted array");
        printArray( arr );
    }
}