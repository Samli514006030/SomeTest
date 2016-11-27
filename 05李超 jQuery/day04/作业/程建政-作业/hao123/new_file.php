<?php
$bg = $_REQUEST["bg"];
if($bg=="1"){
	echo "red";
}elseif ($bg=="2") {
	echo "blue";
}elseif ($bg=="3") {
	echo "purple ";
}elseif ($bg=="4") {
	echo "green";
}elseif ($bg=="5") {
	echo "white";
}elseif ($bg=="6") {
	echo "black";
}elseif ($bg=="7") {
	echo "yellow";
}elseif ($bg=="8") {
	echo "gray";
}else{
	echo "pink ";
}
  
?>