/*
    Bubble sort is the simplest sort that wotrks by swapping the adjacent elements repeatedly until they are sorted.
    Worst and Average Case Time Complexity: O(n*n). Worst case occurs when array is reverse sorted.

    Best Case Time Complexity: O(n). Best case occurs when array is already sorted  

*/

class Bubble_Sort{

    public static void BubbleSort( int a[] ){
        int n = a.length;
        int i, j, temp;
        boolean swapped;

        for( i=0; i<n-1; i++ ){
            swapped = false;
            for( j=0; j<n-i-1; j++ ){
                if( a[ j ] > a[ j+1 ] ){
                    temp  = a[ j ];
                    a[ j ] = a[ j + 1 ];
                    a[ j + 1 ] = temp;
                    swapped = true; 
                }
            }

            // If no two elements were swapped in an iteration, then the list is sorted.
            if( swapped == false ){
                break;
            }
        }
    }

    // Function to print an array 
    public static void printArray(int arr[] )
    {
        int size = arr.length;
        int i;
        for (i = 0; i < size; i++)
            System.out.print(arr[i] + " ");
        System.out.println();
    }
    
    public static void main(String[] args) {
        int arr[] = { 64, 34, 25, 12, 22, 11, 90 };
        int n = arr.length;
        BubbleSort( arr );
        System.out.println("Sorted array: ");
        printArray( arr );
    }
}