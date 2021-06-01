<?php
$to = "neonchilkk@gmail.com";
$subject ='Заказ консультации';
$message .= "Заказ звонка с сайта \r\n";
$message .= "Тема: ".$_POST['desc']. "\r\n";
$message .= "Имя: ".$_POST['name']. "\r\n";
$message .= "Номер телефона: ".$_POST['phone']. "\r\n"; 
$headers  = 'MIME-Version: 1.0' . "\r\n"; 
  $headers .= 'Content-type: text/html; charset=utf-8'."\r\n"; 
  if (mail($to,$subject,$message,"from:hi@gm.com")) {
    echo 'good';
    echo $to,$subject,$message ;
  } else {
    echo 'error';
  }




$name = $_POST['name'];
$phone = $_POST['phone'];
$desc = $_POST['desc'];
$token = "1148349678:AAGRBVbuAZ86Bj7RmR2Sre6HFdsfTlAxwwo";
$chat_id = "-488457206";
$arr = array(
	'Заказ консультации' => " ",	
    'Тема' => $desc,
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>