<?php

$myFile = "mails.txt";
$fh = fopen($myFile, 'a') or die("can't open file");
$name = $_POST['name'];
$email = $_POST['email'];
$msg = $_POST['msg'];

fwrite($fh, $name."\n");
fwrite($fh, $email."\n");
fwrite($fh, $msg."\n");
fwrite($fh, "..........."."\n");
fclose($fh);

?>
