<!-- <?php

$connect = mysqli_connect("localhost","root","","rest_api")

$filename = 'https://dummyjson.com/product';

$data = file_get_contents($filename);

$array = json_decode($data, true);

foreach($array as $row)
{
	$sql = "INSERT INTO items(item_id, item_title, item_description, item_price) 
	VALUES('".$row["item_id"]."','".$row["item_title"]."','".$row["item_description"]."','".$row["item_price"]."',)"
	
	mysqli_query($connect, $sql);
}

echo "Items Data Inserted";
?> -->