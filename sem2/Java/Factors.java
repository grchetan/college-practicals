import java.util.Scanner;

public class Factors {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number to find its factors: ");
        int number = sc.nextInt();

        System.out.println("Factors of " + number + " are:");

        // Optimized loop — sirf square root tak
        for (int i = 1; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                System.out.print(i + " "); // pehla factor

                if (i != number / i) {
                    System.out.print((number / i) + " "); // doosra factor (pair)
                }
            }
        }

        sc.close();
    }
}

