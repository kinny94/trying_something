public class DuplicatesInAnArray {

    public void duplicates(int[] a) {
        for (int i=0; i<a.length; i ++) {
            a[a[i] % 10] = a[a[i] % 10] + 10; 
        }

        for (int i=0; i<a.length; i++) {
            if (a[i] > 19) {
                System.out.println("value at index " + i + " is repeating." );
            }
        }
    }

    public static void main(String[] args) {
        DuplicatesInAnArray obj = new DuplicatesInAnArray();
        obj.duplicates(new int[]{0, 4, 3, 2, 7, 8, 2, 3, 1});
    }
}