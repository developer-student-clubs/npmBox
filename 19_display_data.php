<?php
// for connect to data base
$servername="localhost";
$username="root";
$password="";
$database="form";

$conn= mysqli_connect($servername,$username,$password,$database);
if(!$conn)
{
    echo "Unable to connect to the database";
}

//for find the data base

$sql="SELECT * FROM `testform` "; //This query show rows in a table
$result=mysqli_query($conn,$sql);
if(!$result)
{
    echo "SQL Query can't run succssfully<br>";
}

$num=mysqli_num_rows($result); //to funtion return total number of row in a table 
echo "Total number of Rows : ".$num;
echo "<br>";
#To fetch the data.
if($num>0)
{
    // for display the data in a row
    // $row=mysqli_fetch_assoc($result);
    // echo "<br>";
    // echo var_dump($row);

    // $row=mysqli_fetch_assoc($result);
    // echo "<br>";
    // echo $row['Name'];

    // The Better way is to do using loop
    $si=1;
    echo "Find The Record.<br>";
    while($row=mysqli_fetch_assoc($result))
    {
        echo $si." ". $row['Name']."     ".$row['Email']."   ".$row['Address']."<br>";
        $si++;
    }

}

?>