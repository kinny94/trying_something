/*
    Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.
    The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n).

    We basically ignore half of the elements just after one comparison.

    Compare x with the middle element.
    If x matches with middle element, we return the mid index.
    Else If x is greater than the mid element, then x can only lie in right half subarray after the mid element. So we recur for right half.
    Else (x is smaller) recur for the left half.

*/

class Binary_Search{

    public static int BinarySearch( int x, int start, int lastElement, int a[] ){

        if( x >= lastElement ){

            int mid = start + ( start + lastElement )/2;
            
            // if the mid element is the search element then return mid;
            if( a[mid] == x ){
                return mid;
            } 

            // if element is smaller than the mid, then it should be on the left side of the list
            if( a[ mid ] > x ){
                return BinarySearch( x, start, mid-1, a ); 
            }

            // if the element is greater than the mid, then it should be on the right hand side of the list
            return BinarySearch( x, mid+1, lastElement, a );
        }

        //else element is not in the list
        return -1;
    }

    public static void main(String[] args) {
        int[] a = { 1, 3, 5, 7, 8 };
        System.out.println( BinarySearch( 2, 0, a.length-1, a ));
        System.out.println( BinarySearch( 5, 0, a.length-1, a ));
    }
}