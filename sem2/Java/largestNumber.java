import java.util.Scanner;

public class largestNumber {
    public static void main(String[] args) {
        System.out.println("Enter the number of element in the arr: ");
        Scanner s= new Scanner(System.in);
        int n= s.nextInt();
        if(n<=2){
            System.out.println("Invalid input. The number of elements must be greater than 2.");
            return;
        }
        int arr[]= new int[n];
        System.out.println("Enter the elements of the array: ");
        for(int i=0; i<n; i++){
            arr[i]= s.nextInt();
        }
        int largest= arr[0];
        for(int i=1; i<n; i++){
            if(arr[i]>largest){
                largest= arr[i];
            }
        }
        System.out.println("The largest number in the array is: " + largest);
    }
}