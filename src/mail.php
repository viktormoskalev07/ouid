<?php
$to =  $_POST['emailto'];
$subject ='Ouid mailer';
$url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] ;
$url = explode('?', $url);
$url = $url[0];
  

$message .= "From: ".$url. "\r\n"; 
$message .= "Email: ".$_POST['email']. "\r\n"; 
$headers  = 'MIME-Version: 1.0' . "\r\n"; 
  $headers .= 'Content-type: text/html; charset=utf-8'."\r\n"; 
  if (mail($to,$subject,$message,"from:".$url)) {
 
   echo 'was sent to :'.$to;
  } else {
    echo 'error';
  } 
?>