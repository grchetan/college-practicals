import java.util.Scanner;

public class StringConcatenation {
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Enter the first string: ");
        String str1 = scanner.nextLine();
        
        System.out.println("Enter the second string: ");
        String str2 = scanner.nextLine();
       
        System.out.println("Concatenated String: " + str1 + str2);
        System.out.println("Concatenated String with space: " + str1 + " " + str2);
        System.out.println("Concatenated String with comma and space: " + str1 + ", " + str2);
       
       
    }
}