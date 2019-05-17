import java.util.Arrays;

class HeapSort {
    
    public void heapsort(int[] a){
        int n = a.length; 
  
        // Build heap (rearrange array) 
        for (int i = n / 2 - 1; i >= 0; i--) 
            heapify(a, n, i); 
  
        // One by one extract an element from heap 
        for (int i=n-1; i>=0; i--) 
        { 
            // Move current root to end 
            int temp = a[0]; 
            a[0] = a[i]; 
            a[i] = temp; 
  
            // call max heapify on the reduced heap 
            heapify(a, i, 0); 
        } 
    }

    public void heapify(int[] a, int n, int i) {
        int largest = i; // Initialize largest as root 
        int l = 2*i + 1; // left = 2*i + 1 
        int r = 2*i + 2; // right = 2*i + 2 
  
        // If left child is larger than root 
        if (l < n && a[l] > a[largest]) 
            largest = l; 
  
        // If right child is larger than largest so far 
        if (r < n && a[r] > a[largest]) 
            largest = r; 
  
        // If largest is not root 
        if (largest != i) 
        { 
            int swap = a[i]; 
            a[i] = a[largest]; 
            a[largest] = swap; 
  
            // Recursively heapify the affected sub-tree 
            heapify(a, n, largest); 
        } 
    }
    public static void main(String[] args) {
        int arr[] = {12, 11, 13, 5, 6, 7}; 
        int n = arr.length; 
        HeapSort ob = new HeapSort(); 
        ob.heapsort(arr); 
        System.out.println(Arrays.toString(arr)); 
    }
}