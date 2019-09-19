import java.util.Random;

public class ReservoirSampling {
    
    private Random random;

    ReservoirSampling() {
        this.random = new Random();
    }

    public void reservoirSamplingAlgo(int[] array, int k) {
        //create a new array for k items
        int[] reservoir = new int[k];
        
        // copy the first k items from the original array
        for(int i=0; i<reservoir.length; i++) {
            reservoir[i] = array[i];
        }

        // we consider the items from the original array
        // k+1 because we have already copied the first k items
        // the i-th item is chosen to be included in the reservoir with probability k/i
        for(int i=k+1; i<array.length; i++) {
            int j = random.nextInt(i) + 1;
            if (j<k) {
                reservoir[j] = array[i];
            }
        }

        for (int i=0; i<reservoir.length; i++) {
            System.out.println(reservoir[i] + " ");
        }
    }
    public static void main(String[] args) {
        ReservoirSampling obj = new ReservoirSampling();
        obj.reservoirSamplingAlgo(new int[]{13, 65, 46, 11, 71, 50, 12, 5, 81, 97, 28, 74, 87, 68, 42, 31, 40, 37, 43, 25}, 5);
    }
}