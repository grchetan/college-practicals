import java.util.Scanner;

public class StringReplace {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

       System.out.println("String Daal pahele");
       String input = scanner.nextLine();
       StringBuffer stringBuffer = new StringBuffer(input);

       System.out.println("String replace bta");
       String oldstring = scanner.nextLine();
       System.out.println("Nya string bta");
       String newstring = scanner.nextLine();

       int start = stringBuffer.indexOf(oldstring); // Key: indexOf
        if (start != -1) {
            int end = start + oldstring.length();
            try {
                stringBuffer.replace(start, end, newstring); // Key: Replace Method
                System.out.println("Naya StringBuffer: " + stringBuffer);
            } catch (StringIndexOutOfBoundsException e) {
                System.out.println("Error: Galat indices!");
            }   
        } else {
            System.out.println("Error: '" + oldstring + "' nahi mila!");
        }
        
   
    }
}