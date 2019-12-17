<?php
require'connection.php';

$q="SELECT * FROM tab ";
$result=mysqli_query($connect,$q);
while($row=mysqli_fetch_array($result))
{
	 ?>	
<tr >
<td><?php echo $row['loading']?></td>
<td><?php echo $row['unloading']?></td>
<td><?php echo $row['generating']?></td>
<td><?php echo $row['ckickA']?></td>
<td><?php echo $row['ckickB']?></td>
<td><?php echo $row['ckickC']?></td>
<td><?php echo $row['ckickD']?></td>
<td><?php echo $row['ckickE']?></td>
<td><?php echo $row['ckickF']?></td>
<td><?php echo $row['ckickG']?></td>
<td><?php echo $row['ckickH']?></td>
<td><?php echo $row['ckickI']?></td>
<td><?php echo $row['ckickJ']?></td>
<td><?php echo $row['ckickK']?></td>
<td><?php echo $row['ckickL']?></td>
<td><?php echo $row['ckickM']?></td>
<td><?php echo $row['ckickN']?></td>
<td><?php echo $row['ckickO']?></td>
<td><?php echo $row['ckickP']?></td>
<td><?php echo $row['ckickQ']?></td>
<td><?php echo $row['ckickR']?></td>
<td><?php echo $row['ckickS']?></td>
<td><?php echo $row['ckickT']?></td>
<td><?php echo $row['ckickU']?></td>
<td><?php echo $row['ckickV']?></td>
<td><?php echo $row['ckickW']?></td>
<td><?php echo $row['ckickX']?></td>
<td><?php echo $row['ckickY']?></td>
<td><?php echo $row['ckickZ']?></td>
</tr>
<?php
}


?>

