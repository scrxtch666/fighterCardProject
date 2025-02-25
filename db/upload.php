<?php
include('dbconnection.php');
if(isset($_POST['submit'])){
  $Nickname = $_POST['Nickname'];
  $Belt = $_POST['Belt'];
  $Age = $_POST['Age'];
  $Weight = $_POST['Weight'];
  $Height = $_POST['Height'];
  $Bio = $_POST['Bio'];

  $query = mysqli_query($con, "Insert into stats (Nickname, Belt, Age, Weight, Height, Bio) Values('$Nickname', '$Belt', '$Age', '$Weight', '$Height', '$Bio')");
  if($query){
    echo "<script>alert(data inserted successfully)<script>";
  } else{
    echo "<script>alert(there is an error)<script>";
  }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form</title>
</head>
<body>
  <h1>Form</h1>
  
  <form method="POST">
    <label for="">Nickname</label>
    <input type="text" name="Nickname" placeholder="Nickname"><br>

    <label for="">Belt</label>
    <select name="Belt">
      <option value="white">white</option>
      <option value="yellow">yellow</option>
      <option value="green">green</option>
      <option value="blue">blue</option>
      <option value="red">red</option>
      <option value="black">black</option>
    </select><br>

    <label for="">Age</label>
    <input type="number" name="Age" placeholder="Age"><br>

    <label for="">Weight</label>
    <input type="number" name="Weight" placeholder="Weight"><br>

    <label for="">Height</label>
    <input type="number" name="Height" placeholder="Height"><br>

    <label for="">Bio</label>
    <input type="text" name="Bio" placeholder="Bio">

    <button type="submit" name="submit">Submit</button>
  </form>
</body>
</html>