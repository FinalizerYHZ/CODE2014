<?php
$db_location = "localhost"; 
$db_username = "cs4477215";
$db_password = "finPelk2";
$db_database = "cs4477215";
$db_connection = mysql_connect("$db_location","$db_username","$db_password") 
	or die ("Error - Could not connect to MySQL Server");
$db = mysql_select_db($db_database,$db_connection) 
	or die ("Error - Could not open database");

$arr="";
$sql = "SELECT distinct VehMake FROM CODECleaned ORDER BY VehMake ASC";
$result = mysql_query($sql) or die(mysql_error());
while ($row = mysql_fetch_array($result)) {
    $arr = $arr.$row[VehMake].",";
}
echo $arr;

?>