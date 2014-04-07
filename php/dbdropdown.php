<?php
// NOTE: For security purposes, the DB name, location and password were removed from this file.
// They would normally go here.
$db_location = "164.243.83.105";
$db_username = "root";
$db_password = "password";
$db_database = "CODE2014";
$db_connection = mysql_connect("$db_location","$db_username","$db_password")
        or die ("Error - Could not connect to MySQL Server");
$db = mysql_select_db($db_database,$db_connection)
        or die ("Error - Could not open database");


// Beneath is code to create a table of the SQL database and show the first 30 rows of information.
// The tabbing is a little disjointed but the data can be shown without issue.
// The Comments was removed because of the sheer size of the field and the resulting alterations
// to the table made it unreadable.

/*
$query = "SELECT * FROM InfoFull LIMIT 30";
$category = mysql_query($query) or die(mysql_error());

$numRecords = mysql_num_rows($category); 
$catCount = 0;
$currentItem = "";

echo "<table><tr><td><ul>";

echo ("IndexCounter"."&nbsp; "."RecallNum"."&nbsp; "."Year"."&nbsp; "."Manufacturer"."&nbsp; "."VehicleCategory"."&nbsp; "."VehMake"."&nbsp; "."ModelName"."&nbsp; "."ModelName"."&nbsp; "."UnitsAffected"."&nbsp; "."System"."&nbsp; "."Notification"."</br>");

for ($i = 0; $i < $numRecords; $i++) 
{
 $row = mysql_fetch_array($category);
 echo ("$row[IndexCounter]"."&nbsp; "."$row[RecallNum]"."&nbsp; "."$row[Year]"."&nbsp; "."$row[Manufacturer]"."&nbsp; "."$row[VehicleCategory]"."&nbsp; "."$row[VehMake]"."&nbsp; "."$row[ModelName]"."&nbsp; "."$row[UnitsAffected]"."&nbsp; "."$row[System]"."&nbsp; "."$row[Notification]"."</br>");
}
*/


// Below is code to create a dropdown box populated with certain pieces of information from the
// MySQL database. In this case, we can show the first 30 different manufacturers from the database in
// no distinct order.

$sql = "SELECT distinct Manufacturer FROM InfoFull LIMIT 30";
$result = mysql_query($sql) or die(mysql_error());

echo "<select name='VehMake'>";
while ($row = mysql_fetch_array($result)) {
    echo "<option value='" . $row[VehMake] . "'>" . $row[VehMake] . "</option>";
}
echo "</select>";

?>