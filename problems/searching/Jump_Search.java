/*
    Like Binary Search, Jump Search is a searching algorithm for sorted arrays. The basic idea is to check fewer elements (than linear search)by jumping ahead by fixed steps or skipping some elements in place of searching all elements.

    Let’s consider the following array: (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610). Length of the array is 16. Jump search will find the value of 55 with the following steps assuming that the block size to be jumped is 4.
    STEP 1: Jump from index 0 to index 4;
    STEP 2: Jump from index 4 to index 8;
    STEP 3: Jump from index 8 to index 16;
    STEP 4: Since the element at index 16 is greater than 55 we will jump back a step to come to index 9.
    STEP 5: Perform linear search from index 9 to get the element 55.

*/

class Jump_Search{

    public static int JumpSearch( int a[], int x ){

        int n = a.length;

        // This is the block size to be jumped
        int step = ( int ) Math.floor( Math.sqrt( n ));

        // Finding the block where the element is present
        int prev = 0;
        while( a[ Math.min( step, n ) - 1 ] < x ){
            prev = step;
            step += ( int )Math.floor( Math.sqrt( n ));
            if( prev >= n ){
                return -1;
            }
        }

        // Doing a linear search in the block where the element is present.
        // begining with the prev element
        while( a[ prev ] < x ){
            prev++;

            // If we reached next block or end of the array, element is not present 
            if( prev == Math.min( step, n ))
                return -1;
        }

        // If element is found
        if( a[ prev ] == x ){
            return prev;
        }

        return -1;
    }

    public static void main(String[] args) {
        int[] a = { 1, 3, 5, 7, 8 };
        System.out.println( JumpSearch( a, 2 ));
        System.out.println( JumpSearch( a, 5 ));
    }
}