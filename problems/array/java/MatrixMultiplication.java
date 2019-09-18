import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class MatrixMultiplication {

    public static int[][] strassenMultiplipication(int[][] A, int[][] B) {
        int n = A.length;
        int[][] res = new int[n][n];

        if(n == 1) {
            res[0][0] = A[0][0] * B[0][0];
        } else {
            int[][] a = new int[n/2][n/2];
            int[][] b = new int[n/2][n/2];
            int[][] c = new int[n/2][n/2];
            int[][] d = new int[n/2][n/2];

            int[][] e =new int[n/2][n/2];
            int[][] f = new int[n/2][n/2];
            int[][] g = new int[n/2][n/2];
            int[][] h = new int[n/2][n/2];

            divideArray(A, a, 0, 0);
            divideArray(A, b, 0, n / 2);
            divideArray(A, c, n / 2, 0);
            divideArray(A, d, n / 2, n / 2);

            divideArray(B, e, 0, 0);
            divideArray(B, f, 0, n / 2);
            divideArray(B, g, n / 2, 0);
            divideArray(B, h, n / 2, n / 2);

            int[][] p1 = strassenMultiplipication(addMatrices(a, d), addMatrices(e, h));
            int[][] p2 = strassenMultiplipication(addMatrices(c,d),e);
            int[][] p3 = strassenMultiplipication(a, subMatrices(f, h));           
            int[][] p4 = strassenMultiplipication(d, subMatrices(g, e));
            int[][] p5 = strassenMultiplipication(addMatrices(a,b), h);
            int[][] p6 = strassenMultiplipication(subMatrices(c, a), addMatrices(e, f));
            int[][] p7 = strassenMultiplipication(subMatrices(b, d), addMatrices(g, h));

            int[][] C11 = addMatrices(subMatrices(addMatrices(p1, p4), p5), p7);
            int[][] C12 = addMatrices(p3, p5);
            int[][] C21 = addMatrices(p2, p4);
            int[][] C22 = addMatrices(subMatrices(addMatrices(p1, p3), p2), p6);

            copySubArray(C11, res, 0, 0);
            copySubArray(C12, res, 0, n / 2);
            copySubArray(C21, res, n / 2, 0);
            copySubArray(C22, res, n / 2, n / 2);
        }

        return res;
    }
    
    public static int[][] subMatrices(int[][] a, int[][] b) {
        int n = a.length;
        int[][] res = new int[n][n];
        for(int i=0; i<n; i++) {
            for(int j=0; j<n; j++) {
                res[i][j] = a[i][j] - b[i][j];
            }
        }
        return res;
    }

    public static int[][] addMatrices(int[][] a, int[][] b) {
        int n = a.length;
        int[][] res = new int[n][n];
        for(int i=0; i<n; i++) {
            for(int j=0; j<n; j++) {
                res[i][j] = a[i][j] + b[i][j];
            }
        }
        return res;
    }

    
    public static void joinArray(int[][] P, int[][] C, int iB, int jB) {
        for(int i1=0, i2=iB; i1<C.length; i1++, i2++) {
            for( int j1=0, j2=jB; j1<C.length; j1++, j2++) {
                C[i1][j1] = P[i2][j2];
            }
        }
    }

    public static void divideArray(int[][] C, int[][] P, int iB, int jB) {
        for(int i1=0, i2=iB; i1<C.length; i1++, i2++) {
            for(int j1=0, j2=jB; j1<C.length; j1++, j2++) {
                C[i1][j1] = P[i2][j2];
            }
        }
    }

    public static void copySubArray(int[][] C, int[][] P, int iB, int jB) 
    {
        for(int i1 = 0, i2 = iB; i1 < C.length; i1++, i2++)
            for(int j1 = 0, j2 = jB; j1 < C.length; j1++, j2++)
                P[i2][j2] = C[i1][j1];
    }  

    public static void printMatrix(int[][] a) {
        int n = a.length;
        System.out.println("Resultant Matrix ");
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(a[i][j] + "\t");
            }
            System.out.println();
        }
        System.out.println();
    }


    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        System.out.println("Enter the order of Matrices:");
        int order = Integer.parseInt(br.readLine());

        int[][] A = new int[order][order];
        int[][] B = new int[order][order];
        
        int[][] res = new int[order][order];
        
        System.out.println("Enter first matrix:");
        for (int i = 0; i < order; i++) {
            for (int j = 0; j < order; j++) {
                A[i][j] = Integer.parseInt(br.readLine());
            }
        }

        System.out.println("Enter second matrix:");
        for (int i = 0; i < order; i++) {
            for (int j = 0; j < order; j++) {
                B[i][j] = Integer.parseInt(br.readLine());
            }
        }

        res = strassenMultiplipication(A, B);
        printMatrix(res);
    }
}