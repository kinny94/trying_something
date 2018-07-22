/*
    The Interpolation Search is an improvement over Binary Search for instances, where the values in a sorted array are uniformly distributed. Binary Search always goes to the middle element to check. On the other hand, interpolation search may go to different locations according to the value of the key being searched. For example, if the value of the key is closer to the last element, interpolation search is likely to start search toward the end side.

    // The idea of formula is to return higher value of pos
    // when element to be searched is closer to arr[hi]. And
    // smaller value when closer to arr[lo]
    pos = lo + [ (x-arr[lo])*(hi-lo) / (arr[hi]-arr[Lo]) ]

    arr[] ==> Array where elements need to be searched
    x     ==> Element to be searched
    lo    ==> Starting index in arr[]
    hi    ==> Ending index in arr[]

    Algorithm
    Rest of the Interpolation algorithm is same except the above partition logic.

    Step1: In a loop, calculate the value of pos using the probe position formula.
    Step2: If it is a match, return the index of the item, and exit.
    Step3: If the item is less than arr[pos], calculate the probe position of the left sub-array. Otherwise calculate the same in the right sub-array.
    Step4: Repeat until a match is found or the sub-array reduces to zero.
*/

class Interpolation_Search{

    public static int interpolationSearch( int a[], int x ){
        
        // Getting the indexes of two orders    
        int low = 0;
        int hi = ( a.length - 1 );

        // Since array is sorted, an element present in an array must be in range defined by the corner
        while( low <= hi && x >= a[ low ] && x <= a[ hi ]){
            // Probing the position with keeping uniform disrtribution in mind 
            int pos = low + ((( hi - low ) / ( a[ hi ] - a[low] )) * ( x - a[ low ] ));

            // condition of target found
            if( a[ pos ] == x ){
                return pos;
            }

            // If x is larger,x is in upper part
            if( a[ pos ] < x ){
                low = pos + 1;
            }

            // If x is smaller,x is in lower part
            else{
                hi = pos - 1;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] a = { 1, 3, 5, 7, 8 };
        System.out.println( interpolationSearch( a, 2 ));
        System.out.println( interpolationSearch( a, 5 ));
    }
}