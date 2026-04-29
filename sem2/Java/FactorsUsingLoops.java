
                                                    // GAURAV KA PPT IN OOPS IN JAVA


import java.util.Scanner; // Importing package to get input from the user

public class FactorsUsingLoops {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in); // Created an object to get input from user

        System.out.print("Enter a number to find its factors: ");
        int number = sc.nextInt();

        System.out.println("Factors of " + number + " are:");

        // Loop through all numbers from 1 to the number

        for(int i = 1; i <= number; i++) {
            if (number % i == 0) {
                System.out.print(i + " "); // Print the factor
            }
        }
    }
}
