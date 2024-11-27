<?php
$cookie_value = isset($_POST['lang']) ? $_POST['lang'] : 'pt';
setcookie('language', $cookie_value, time() + (86400 * 90), "/");
header('Location: ' . $_SERVER['HTTP_REFERER']);
exit();
?>