<!-- This tutorial is how to create table in database -->

<!-- For Connection to Database -->
<?php
$servern="localhost";
$username="root";
$password="";
$database="Student";

$conn=mysqli_connect($servern,$username,$password,$database);
if($conn)
{
    echo "connection was successfull<br>";
}
else {
        echo "because of this Error: " . mysqli_connect_error($conn);
}

$sql="CREATE TABLE `formdata2` (`SI.No` INT NOT NULL AUTO_INCREMENT , `Name` INT NOT NULL , `Email` VARCHAR(20) NOT NULL , `address` TEXT NOT NULL ,`description` TEXT NOT NULL , PRIMARY KEY (`SI.No`))
";
$result=mysqli_query($conn,$sql);
if(!$result)
{
    echo mysqli_error($conn);
}
else
{
    echo "Table was successfully created";
}
?>