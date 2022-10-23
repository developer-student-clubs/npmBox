import java.io.*;
// import java.util.io.*;
// import java.util.io.*;

 class Test{
    public static void main(String args[]) throws IOException
    {
        BufferedReader inp=new BufferedReader(new InputStreamReader(System.in));
        int n,i,s=0;
        System.out.println("Enter the element for n");
        n=Integer.parseInt(inp.readLine());
        for(i=1;i<n; i++)
        {
            if(n%i==0)
            {
                s=s+i;
            }
        }
        if(s==n)
        {
            System.out.println("No is perfect ");
        }
        else{
            System.out.println("No is Not perfect ");

        }
    }
}