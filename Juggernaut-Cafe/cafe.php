<?php
$insert = false;
if(isset($_POST['Name'])){
$submit = true;
$server = "localhost";
$username="root";
$password="";

$con = mysqli_connect('$server','$username','$password');
if(!$con){
    die('Connection Failed due to: '.mysquliconnect_error);
}

//echo "success connecting to the db ";

$Name = $_POST['Name'];
$People = $_POST['People'];
$date = $_POST['date'];
$Message = $_POST['Message'];
    $sql = "INSERT INTO 'juggernaut_data'.'bookings' ('Name' ,'People', 'date', 'Message') VALUES('$Name, '$People', '$date', '$Message', current_timestamp());";
    echo $sql;

    if($con->query($sql) == true){
       // echo "Successfully booked";
       $insert = true;
    }else{
        echo "ERROR : $sql <br> $con->error";
    }

    if($insert == true){
        echo "<p class= 'submitmsg'>Your table is booked, cant wait to see you !!!</p>";
    }
    $con->close();
}

?>