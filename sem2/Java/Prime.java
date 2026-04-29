
                                                    // GAURAV KA PPT IN OOPS IN JAVA


import java.util.Scanner; // Importing package to get input from the user

public class Prime {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in); // Created an object to get input from user

        System.out.print("Enter a number: ");
        int number = sc.nextInt();

        if( number < 1) {
            System.out.println("Number must be greater than 1.");
            return; // Exit if the number is less than 2
        } else if (number == 2) {
            System.out.println("2 is a prime number.");
            return; // Exit if the number is 2
        } else if (number % 2 == 0) {
            System.out.println(number + " is not a prime number.");
            return; // Exit if the number is even and greater than 2
        } else {
            // Loop through all odd numbers from 3 to the square root of the number
            for (int i = 3; i <= Math.sqrt(number); i += 2) {
                if (number % i == 0) {
                    System.out.println(number + " is not a prime number.");
                    return; // Exit if a factor is found
                }
            }
            System.out.println(number + " is a prime number."); // If no factors found, it's prime
        }
    }
}

