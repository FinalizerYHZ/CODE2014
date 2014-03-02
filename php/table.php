<?php
$db_location = "164.243.83.105"; 
$db_username = "root";
$db_password = "password";
$db_database = "CODE2014";
$db_connection = mysql_connect("$db_location","$db_username","$db_password") 
	or die ("Error - Could not connect to MySQL Server");
$db = mysql_select_db($db_database,$db_connection) 
	or die ("Error - Could not open database");

$arr="";
$sql = "SELECT * FROM InfoFull WHERE 1;";
$result = mysql_query($sql) or die(mysql_error());
$arr="<table><tr><th>Manufacturer</th><th>Vehicle Category</th><th>Model</th><th>Year</th><th>Recall Number</th><th>Unity Affected</th><th>Total Vehicles Recalled</th><th>System</th></tr>";

while ($row = mysql_fetch_array($result)) {
    $arr = $arr."<tr><td>".$row['Manufacturer']."</td><td>".$row['Vehicle_Category']."</td><td>".$row['Model']."</td><td>".$row['Year']."</td><td>".$row['Recall_Number']."</td><td>".$row['Units_Affected']."</td><td>".$row['Total_Vehicles_Recalled']."</td><td>".$row['System']."</td><td>";
}
//echo $arr;

?>