<?php
$db_location = "localhost"; 
$db_username = "root";
$db_password = "password";
$db_database = "CODE2014";
$db_connection = mysql_connect("$db_location","$db_username","$db_password") 
	or die ("Error - Could not connect to MySQL Server");
$db = mysql_select_db($db_database,$db_connection) 
	or die ("Error - Could not open database");

$arr="";
$sql = "SELECT distinct VehicleCategory FROM CODECleaned ORDER BY VehicleCategory ASC";
$result = mysql_query($sql) or die(mysql_error());
while ($row = mysql_fetch_array($result)) {
    $arr = $arr.$row[VehicleCategory].",";
}
echo $arr;

?>