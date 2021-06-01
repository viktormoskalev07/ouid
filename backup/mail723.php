<?php
if($_GET['email'])
{
        $to = $_GET['email'];
        $from = 'begettest@'.$_SERVER['HTTP_HOST'];
        $subject = 'Mail test';
        $message = 'PHP mail() on '.$_SERVER['HTTP_HOST'].' works';
        $boundary = '---';
        $headers = "From: $from\nReply-To: $from\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\n";
        $headers .= "MIME-Version: 1.0";
        $body = "--$boundary\n";
        $body .= "Content-type: text/plain; charset='utf-8'\n";
        $body .= "Content-Transfer-Encoding: quoted-printablenn";
        $body .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode($filename)."?=\n\n";
        $body .= $message."\n";
        $body .= "--$boundary\n";
        $filename = basename(__FILE__);
        $file = fopen($filename, "r"); //Открываем файл
        $text = fread($file, filesize($filename)); //Считываем весь файл
        fclose($file); //Закрываем файл
        $body .= "Content-Type: application/octet-stream; name==?utf-8?B?".base64_encode($filename)."?=\n";
        $body .= "Content-Transfer-Encoding: base64\n";
        $body .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode($filename)."?=\n\n";
        $body .= chunk_split(base64_encode($text))."\n";
        $body .= "--".$boundary ."--\n";
        if (mail($to, $subject, $body, $headers,"-f{$from}")): echo 'sent';
        else: echo 'not sent';
        endif;
}
else
{
?>
<meta charset="utf-8">
<form action="<?= basename(__FILE__) ?>">
        <input name="email" type="email" placeholder="почта"></input>
        <button type="submit">Отправить письмо</button>
</form>
<?php
}
?>