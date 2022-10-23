<?php

echo "welcome to the stage where we are ready to create database<br>";

$servername="localhost";
$username="root";
$password="";

// for connection
$conn=mysqli_connect($servername,$username,$password);
if($conn)
{
    echo"connection was successfull";
}
else{
    echo "Error";
}

// for creating database

$sql="CREATE DATABASE SANDEEP65";
$result=mysqli_query($conn,$sql);
if($result)
{
    echo "<br>database created successfull";
}
else
{
    echo "<br> Not created because of this Error : ". mysqli_error($conn);
}
?>