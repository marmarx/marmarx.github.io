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
$to = 'contato@genos.eco.br';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if(empty($_POST["recaptcha"])){
    $errors .= $msg1;
  } else {
    $secretkey='6LcxRioUAAAAAALtopQm2yjoKsLIv8taQ8TPJVYO';
    $captcha=$_POST["recaptcha"];
    $ip = $_SERVER['REMOTE_ADDR'];
    $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretkey."&response=".$captcha."&remoteip=".$ip);
    $responseKeys = json_decode($response);
    if($responseKeys->success===true){$cap = 'good';}else{$errors.=$msg1;}
  }

  if(empty($_POST['name']) || empty($_POST['phone']) || empty($_POST['email']) || empty($_POST['msg']) || empty($_POST['track'])) {
    $errors .= $msg2;
  } else {
    $name  = test_input($_POST['name']);
    $phone = test_input($_POST['phone']);
    $email = test_input($_POST['email']);
    $msg   = test_input($_POST['msg']);
    $track = test_input($_POST['track']);
  }

  if(empty($errors) && $cap=='good'){
    if($track == 'Processos e produtos'){
      $to .= ',name@genos.eco.br';
      $from = 'processoseprodutos@genos.eco.br';
    } elseif($track == 'Estudos ambientais'){
      $to .= ',name@genos.eco.br,name@genos.eco.br';
      $from = 'estudosambientais@genos.eco.br';
    } elseif($track == 'Planejamento urbano'){
      $to .= ',name@genos.eco.br,name@genos.eco.br';
      $from = 'planejamentourbano@genos.eco.br';
    } elseif($track == 'Pagina Genos'){
      $from = 'paginagenos@genos.eco.br';
    } else {
      $from = 'paginacontato@genos.eco.br';
    }

    $subject = "Contact form submission: $name";
    $message = "Nova mensagem do formul�rio de contato.<br>".
      "<br><b>Nome:</b> $name".
      "<br><b>Telefone:</b> $phone".
      "<br><b>E-mail:</b> $email".
      "<br><br><b>Mensagem:</b> <br> $msg".
      "<br><br><b>IP:</b> $ip";
    $headers = "MIME-Version: 1.0" . "\r\n".
      "Content-Type: text/html; charset=UTF-8" . "\r\n".
      "From: $from" . "\r\n".
      "Reply-To: $from" . "\r\n";
    mail($to,$subject,$message,$headers);
    //redirect to the 'thank you' page
    $errors = $msg5;
    header('');
  }
  echo $errors;
}
$_POST=array();
?>