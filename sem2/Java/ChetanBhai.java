import java.util.Scanner;

public class ChetanBhai {
    public static void main(String[] arg) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the first number for division: ");
        int a = scanner.nextInt();

        System.out.println("Enter the second number for division: ");
        int b = scanner.nextInt();

        try {
            int result = a / b;
            System.out.println("The result of the division is: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero is not allowed.");
        }

        scanner.close(); 
    }
}
