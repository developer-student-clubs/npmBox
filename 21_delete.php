<?php 
$servername="localhost";
$usrnamr="root";
$password="";
$database="form";
$conn=mysqli_connect($servername,$usrnamr,$password,$database);
if($conn)
{
    echo "connection was success..<br>";
}

$sql="DELETE FROM `testform` WHERE `testform`.`Address` = 'madhepura' LIMIT 3";
// LIMIT KEYWORD used for how many rows you want to affect or you can use with SELECT KB ETC

$result=mysqli_query($conn,$sql);
if($result)
{
    echo "Your record has been deleted<br>";
}
else
{
    echo "your record can't deleted";
}
$aff=mysqli_affected_rows($conn);
echo "Total number of affted rows : $aff";

?>
