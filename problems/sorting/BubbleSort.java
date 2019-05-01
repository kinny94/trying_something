import java.util.Arrays;

class BubbleSort {

    void sort(int a[]) {
        int n = a.length;
        for (int i=0; i< a.length - 1; i++) {
            for (int j=0; j<a.length - 1; j++) {
                if (a[j] > a[j+1]) {
                    int temp = a[j];
                    a[j] = a[j+1];
                    a[j+1] = temp;
                }
            }
        } 
    }

    public static void main(String[] args) {
        int array[] = { 5, 2, 4, 6, 1, 3 };
        BubbleSort obj = new BubbleSort();
        obj.sort(array);
        System.out.println(Arrays.toString(array));
    }
}