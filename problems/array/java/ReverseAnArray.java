import java.util.*;

public class ReverseAnArray {
    
    static int[] reveseArray(int[] array) {
        int iteration = (int) Math.ceil(array.length / 2);

        for( int i=0; i<iteration; i++) {
            int temp = array[i];
            array[i] = array[array.length - 1 - i];
            array[array.length - 1 - i] = temp;
        }

        return array;
    }
    public static void main(String[] args) {
        System.out.println(Arrays.toString(reveseArray(new int[]{ 1, 2, 3, 4, 5 })));
        System.out.println(Arrays.toString(reveseArray(new int[]{ 1, 2, 3, 4, 5, 6 })));
    }
}