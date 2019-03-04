<?php
$db_name='cosmoproject';
$result_array=array();

$link = mysqli_connect('localhost', 'root', 'Spsasc1997');

mysqli_select_db($link,$db_name) or die("Impossibile connettersi al database");

$sql="SELECT t.a as pianeta,MAX(t.c) as max FROM(SELECT `arrivo` as `a`,COUNT(`arrivo`) as `c` FROM `biglietto` GROUP BY `arrivo`) as `t` GROUP BY t.a ORDER BY t.c DESC ";
if (!mysqli_query($link, $sql)) {
echo "Error: " . $sql . "<br>" . mysqli_error($link);
}
$result=mysqli_query($link,$sql);
while ($line=mysqli_fetch_array($result, MYSQLI_ASSOC)){
   array_push($result_array, $line);
}
echo json_encode($result_array);

mysqli_close($link);

 ?>
