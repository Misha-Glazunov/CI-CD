public class Main {
    public static void recursiveFunction(int number) {
        System.out.println(number);
        if (number > 2) {
            recursiveFunction(number / 2);
            recursiveFunction(number / 3);
        }
    }

    public static void main(String[] args) {
        recursiveFunction(9);
    }
}
