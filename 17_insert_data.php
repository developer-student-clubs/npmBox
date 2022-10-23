<!-- This tutorial is how to insert data in table in database -->

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

$name="Vivek Yadav";
$dateofbirth="2020-12-20";
$roll="200";
$mob="123456489";

// $sql="INSERT INTO `information` (`SI.No`,`Name`, `DateOfBirth`, `Roll Number`, `Phone Number`) VALUES ('9','Dines kumar', '2002-10-18', '22', '9056234578')
// ";


$sql="INSERT INTO `information` (`Name`, `DateOfBirth`, `Roll Number`, `Phone Number`) VALUES ('$name' ,'$dateofbirth', '$roll', '$mob')";

$result=mysqli_query($conn,$sql);
if(!$result)
{
    echo mysqli_error($conn); 
}
else
{
    echo "Data was successfully Enter";
}
?>
