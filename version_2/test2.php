<?php
require'connection.php';
if(isset($_POST['val']))
{
$result=json_decode($_POST['val']);
 $q="insert into tab values('$result->load','$result->unload','$result->generate','$result->clickA','$result->clickB','$result->clickC','$result->clickD','$result->clickE','$result->clickF','$result->clickG'
 ,'$result->clickH','$result->clickI','$result->clickJ','$result->clickK','$result->clickL','$result->clickM','$result->clickN','$result->clickO','$result->clickP','$result->clickQ','$result->clickR'
 ,'$result->clickS','$result->clickT','$result->clickU','$result->clickV','$result->clickW','$result->clickX','$result->clickY','$result->clickZ'
 )";
$result=mysqli_query($connect,$q);
if($result)
{
	echo'inserted sucessfully in tab';
	
}
else{
	echo'can\'t insert items into tab';
}
}

?>

