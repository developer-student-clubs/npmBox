<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <style>
        body{
            font-family: Ubuntu;
        }
        nav{
            background-color: black;
            color: wheat;
            /* text-align:center; */
            text-decoration: none;
            padding: 10px 0px;
        }
        nav a{
            color: white;
            padding: 10px 10px;
            font-size: 20px;
            text-decoration: none;
            margin: 15px 15px;
        }
        .form-container{
            display: block;
            align-items: center;
            margin: 10px 0;
            display: flex;
            /* border: 2px solid black; */
            justify-content: center;
        }
        input{
            width: 100%;
            /* border: 2px solid yellow; */
            padding: 10px 8px;
            font-size: 1.0rem;
        }
        .tg{
            margin: 8px 0;
            /* border: 2px solid red; */
            
        }
        .sb{
            width:104%;
        }
    </style>
</head>
<body>
    <div class="nav-bar">
        <nav>
            <a href="">Home</a>
            <a href="">How to use</a>
            <a href="">Contact us</a>
            <a href="">Services</a>
        </nav>
        
    </div>
    <div class="form-container">

        <form action="/phpt/18_insert_data_form.php" method="post" class="form">
            <div class="tg">
                <h2>Contact Us for your concern</h2>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" required placeholder="Enter your name" >
            </div>

            <div class="tg">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" required placeholder="Enter your Email">
                <small>We will never share with anyone!</small>
            </div>

            <div class="tg">
                <label for="address">Address</label>
                <input type="text" name="address" id="address" required placeholder="Enter your Address">
            </div>
            <div class="tg">
              <input type="submit" value="Submit" class="sb">
            </div>
    
    
        </form>
    </div>
</body>
</html>
<?php
// connecting to database
if ($_SERVER['REQUEST_METHOD']=='POST')
{


$servername="localhost";
$usrname="root";
$password="";
$database="form";

$conn=mysqli_connect($servername,$usrname,$password,$database);
if(!$conn)
{
    echo mysqli_connect_error($conn);
}

$name=$_POST['name'];
$email=$_POST['email'];
$address=$_POST['address'];

$sql="INSERT INTO `testform` ( `Name`, `Email`, `Address`) VALUES ( '$name', '$email', '$address')";

$result=mysqli_query($conn,$sql);
if($result)
{
   echo '<p style="color: green; text-align:center;text-weight:bold; ">Your Data has been Successfully Submited!</p>';

}
else
{
    echo "we are Facing Some technical issiue can't enter your data";
}
}
?>