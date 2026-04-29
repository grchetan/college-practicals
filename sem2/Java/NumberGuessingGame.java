import java.util.Scanner;
import java.util.Random;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random rand = new Random();

        int totalScore = 0;
        int round = 1;

        System.out.println("🎯 Welcome to the Number Guessing Game!");
        System.out.println("--------------------------------------");

        while (true) {
            int numberToGuess = rand.nextInt(100) + 1; // 1 to 100
            int attempts = 0;
            boolean guessedCorrectly = false;

            System.out.println("\n🔁 Round " + round);
            System.out.println("I have selected a number between 1 and 100.");
            System.out.println("Try to guess it in minimum attempts!");

            while (!guessedCorrectly) {
                System.out.print("Enter your guess: ");
                int userGuess;

                // Input validation
                if (sc.hasNextInt()) {
                    userGuess = sc.nextInt();
                    attempts++;
                } else {
                    System.out.println("⚠️ Please enter a valid number!");
                    sc.next(); // clear invalid input
                    continue;
                }

                if (userGuess < numberToGuess) {
                    System.out.println("Too low! Try again. ⬆️");
                } else if (userGuess > numberToGuess) {
                    System.out.println("Too high! Try again. ⬇️");
                } else {
                    System.out.println("✅ Correct! 🎉 You guessed the number in " + attempts + " attempts.");
                    int score = Math.max(100 - (attempts * 10), 10); // minimum score = 10
                    totalScore += score;
                    System.out.println("🏆 You earned " + score + " points this round.");
                    guessedCorrectly = true;
                }
            }

            System.out.print("\nDo you want to play another round? (yes/no): ");
            String playAgain = sc.next().toLowerCase();

            if (!playAgain.equals("yes") && !playAgain.equals("y")) {
                System.out.println("\n🎮 Game Over! You played " + round + " rounds.");
                System.out.println("💯 Your Total Score: " + totalScore);
                System.out.println("Thanks for playing! 🔚");
                break;
            }

            round++;
        }

        sc.close();
    }
}
