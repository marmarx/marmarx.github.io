<?php
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

$thislang = isset($_COOKIE["language"]) ? $_COOKIE["language"] : 'pt';

include __DIR__ . '/' . $thislang . '.php';

$errors = '';
$captcha = '';
$cap = 'bad';
$myemail = 'contato@genos.eco.br';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if(empty($_POST["recaptcha"])){
    $errors .= $msg1;
  } else {
    $secretkey='6LeHczUUAAAAALNs3vkZ_3HjzKa8KZycb_mlHxVl';
    $captcha=$_POST["recaptcha"];
    $ip=$_SERVER['REMOTE_ADDR'];
    $hrefloc=$_POST["hrefloc"];
    $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretkey."&response=".$captcha."&remoteip=".$ip);
    $responseKeys = json_decode($response);
    if($responseKeys->success===true){$cap='good';}else{$errors.=$msg1;}
  }

  if(empty($_POST['name']) || empty($_POST['email'])) {
    $errors .= $msg2;
  } else {
    $name  = test_input($_POST['name']);
    $email = test_input($_POST['email']);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {$errors .= $msg4;}
  }

  if(empty($errors) && $cap=='good'){
    $tomail = 'newsletter@genos.eco.br';
    $email_subject = "Assinatura de Newsletter: $name";
    $email_body = "Nova assinatura de newsletter.<br>".
    "<br><b>Nome:</b> $name".
    "<br><b>E-mail:</b> $email".
    "<br><b>IP:</b> $ip".
    "<br><b>Origem:</b> $hrefloc";
    $headers = "From: $tomail\n";
    $headers .= "Reply-To: $tomail\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    mail($myemail,$email_subject,$email_body,$headers);
    //redirect to the 'thank you' page
    $errors = $msg5;
    header('');
  }
  echo $errors;
}
$_POST=array();
?>