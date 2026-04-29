class Pen{
    String color;
    String type;

    void write() {
        System.out.println("Writing with a " + color + " " + type + " pen.");
    }
}

public class ClassDemo{
    public static void main(String args[]){

        Pen pen1 = new Pen();
        pen1.color = "blue";
        pen1.type = "gel";

        System.out.println(pen1.color + " " + pen1.type);
    }
}
