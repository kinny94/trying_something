import java.util.Arrays;

class QuickSort {

    public int partition(int[] a, int p, int r) {
        int x = a[r];
        int i = p - 1;
        for(int j=p; j<=r-1; j++) {
            if(a[j] <= x) {
                i = i + 1;
                int swap = a[i];
                a[i] = a[j];
                a[j] = swap;
            }
        }
        int swap = a[i+1];
        a[i+1] = a[r];
        a[r] = swap;
        return i+1;
    }

    public void sort(int[] a, int p, int r) {
        if (p < r) {
            int q = partition(a, p, r);
            sort(a, p, q-1);
            sort(a, q+1, r);
        }
    }

    public static void main(String[] args) {
        int a[] = {38, 24, 43, 3, 9, 82, 10};
        QuickSort obj = new QuickSort();
        obj.sort(a, 0, a.length-1);
        System.out.println(Arrays.toString(a));
    }
}