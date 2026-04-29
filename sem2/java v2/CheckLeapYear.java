import java.util.Scanner;
public class CheckLeapYear{
    public static void main(String[]args){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a Year");
        int year = scanner.nextInt();

        if((year %  4 == 0 && year % 100 != 0) || (year % 400 == 0)){
            System.out.println(year + ": is a leap Year");
        }else {
            System.out.println(year + ": is not a leap Year");
        }

    }

}
