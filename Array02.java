import java.util.Scanner;
import java.util.Arrays;


public class two_dimensional_arrays{
    public static void main(String[] args){
        Scanner S =new Scanner(System.in);

        System.out.println("Enter the no. of rows : ");
        int row = S.nextInt();
        System.out.println("Enter the no. of columns : ");
        int col = S.nextInt();

        int [] [] matrix = new int [row][col];

        for(int i=0 ; i<row ; i++){
            for(int j=0 ; j<col ; j++){
                int domino = i+1;
                int swiggy = j+1;
                System.out.print("Enter the element "+ "col : " +domino +", row : "+ swiggy+ " : " );
                matrix[i][j] = S.nextInt();

            }
        }
        System.out.print(Arrays.deepToString(matrix));

    }
}