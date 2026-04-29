import java.util.Scanner;

public class SumOfNatural {
    public static void main (String[] args){

    Scanner sc = new Scanner(System.in);

    System.out.println("Enter a number: ");
    int n = sc.nextInt();

    int sum = 0;
    if(n <= 0){
        System.out.println("enter a posotive number");
    }else{

        int i =1;
        while(  i <= n){
            sum = sum + i;
            i++ ;
        }
        
        System.out.println("Sum of natural number : " + sum);
    }
    /*if(n <= 0){
        System.out.println("enter a posotive number");
    }else{
         for(int i = 1; i <= n; i++){
         sum = sum + i;

    }
    System.out.println("Sum of natural number : " + sum);
}*/
}
}