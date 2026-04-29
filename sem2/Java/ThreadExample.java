import java.util.Scanner;

class NumberPrinter implements Runnable {
    private int start;
    private int end;
    private int delay;

    // Constructor
    public NumberPrinter(int start, int end, int delay) {
        this.start = start;
        this.end = end;
        this.delay = delay;
    }

    @Override
    public void run() {
        // Logic to print numbers from start to end with a delay
        for (int i = start; i <= end; i++) {
            // Output the current thread name and number
            System.out.println(Thread.currentThread().getName() + ": " + i);

            // Sleep for the specified delay
            try {
                Thread.sleep(delay);
        
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted.");
            }
        }
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get delay for first thread
        System.out.println("Enter delay (in milliseconds) for first thread: ");
        int delay1 = scanner.nextInt();

        // Get delay for second thread
        System.out.println("Enter delay (in milliseconds) for second thread: ");
        int delay2 = scanner.nextInt();

        // Create threads (logic to be implemented in the NumberPrinter class)
        Thread thread1 = new Thread(new NumberPrinter(1, 5, delay1), "Thread-1");
        Thread thread2 = new Thread(new NumberPrinter(6, 10, delay2), "Thread-2");

        // Start first thread
        thread1.start();
        try {
            // Ensure thread1 finishes before starting thread2
            thread1.join();
        } catch (InterruptedException e) {
            System.out.println("Thread interrupted.");
        }

        // Start second thread
        thread2.start();
    }
}
