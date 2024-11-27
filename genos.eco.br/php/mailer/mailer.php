<?php
date_default_timezone_set('America/Sao_Paulo');

/* Random set */
$emails = array(
'johndoe@genos.eco.br',
'janesmith@genos.eco.br',
'richardroe@genos.eco.br',
'maryjohnson@genos.eco.br',
'davidbrown@genos.eco.br',
'lisadavis@genos.eco.br',
'michaelclark@genos.eco.br',
'emilywhite@genos.eco.br',
'robertlee@genos.eco.br',
'sarahtaylor@genos.eco.br',
'jamesmiller@genos.eco.br',
'annawilson@genos.eco.br'
);

$user_mail = $emails[rand(0,15)];

/* Email Details */
  $mail_to = $user_mail;
  $from_mail = "contato@genos.eco.br";
  $from_name = "Genos Engenharia e Consultoria";
  $reply_to = "contato@genos.eco.br";
  $subject = "Subject Brisa";
  $message_body = "o ousado chegou !!! kkkk";
  $message_body .= "\r\n";
 
/* Attachment File */
    // Attachment location
    $file_name = "attach.jpg";
    $path = __DIR__ . "/";
     
    // Read the file content
    $file = $path.$file_name;
    $file_size = filesize($file);
    $handle = fopen($file, "r");
    $content = fread($handle, $file_size);
    fclose($handle);
    $content = chunk_split(base64_encode($content));
     
/* Set the email header */
    // Generate a boundary
    $boundary = md5(uniqid(time()));
     
    // Email header
    $header = "From: ".$from_name." <".$from_mail."> \r\n";
    $header .= "Reply-To: ".$reply_to."\r\n";
    $header .= "MIME-Version: 1.0\r\n";
     
    // Multipart wraps the Email Content and Attachment
    $header .= "Content-Type: multipart/mixed;\r\n";
    $header .= " boundary=\"".$boundary."\"";
 
    $message .= "This is a multi-part message in MIME format.\r\n\r\n";
    $message .= "--".$boundary."\r\n";
     
    // Email content
    // Content-type can be text/plain or text/html
    $message .= "Content-Type: text/plain; charset=\"iso-8859-1\"\r\n";
    $message .= "Content-Transfer-Encoding: 7bit\r\n";
    $message .= "\r\n";
    $message .= "$message_body\r\n";
    $message .= "--".$boundary."\r\n";
     
    // Attachment
    // Edit content type for different file extensions
    $message .= "Content-Type: application/xml;\r\n";
    $message .= " name=\"".$file_name."\"\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n";
    $message .= "Content-Disposition: attachment;\r\n";
    $message .= " filename=\"".$file_name."\"\r\n";
    $message .= "\r\n".$content."\r\n";
    $message .= "--".$boundary."--\r\n";
     
    // Send email
    if (mail($mail_to, $subject, $message, $header)) {
        echo "Sent";
    } else {
        echo "Error";
    }
?>