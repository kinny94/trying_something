import java.util.Arrays;

public class IsAnagram {
    
    public boolean anagram(char[] input1, char[] input2) {
        if (input1.length != input2.length) { return false; }
        
        Arrays.sort(input1);
        Arrays.sort(input2);

        for(int i=0; i<input1.length; i++) {
            if(input1[i] != input2[i]) {
                return false;
            }
        }
        
        return true;
    }

    public static void main(String[] args) {
        IsAnagram obj = new IsAnagram();
        System.out.println(obj.anagram(new char[]{'h', 'e', 'l', 'l', 'o'}, new char[]{'o', 'l', 'e', 'h', 'o'}));
        System.out.println(obj.anagram(new char[]{'r', 'e', 's', 't', 'f', 'u', 'l'}, new char[]{'f', 'l', 'u', 's', 't', 'e', 'r'}));
    }
}