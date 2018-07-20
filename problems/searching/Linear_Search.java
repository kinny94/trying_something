/*
    Start from the leftmost element of arr[] and one by one compare x with each element of arr[]
    If x matches with an element, return the index.
    If x doesn’t match with any of elements, return -1.

*/

class Linear_Search{
    
    public static int linearSearch( int x, int a[] ){
        for( int i=0; i<a.length; i++ ){
            if( a[i] == x ){
                return i;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] a = { 1, 3, 5, 7, 8 };
        System.out.println( linearSearch( 2, a ));
        System.out.println( linearSearch( 5, a ));
    }
}