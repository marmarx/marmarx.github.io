<?php
date_default_timezone_set('America/Sao_Paulo');
function setlang($lang = "pt"){

  setcookie('language', $lang, time() + (86400 * 90), "/"); // 86400 = 1 day

}


$base = 'https://genos.eco.br';
$sitekey='6LcxRioUAAAAAK3hU5vtz8Vd6seezQZKUlYhrCsG';
$invikey='6LeHczUUAAAAAAgvlxRkTRsvH7wuro6gmGUrx_LA';
$gtpt = 'Genos Engenharia e Consultoria Ambiental';
$gten = 'Genos Enviromental Engineering and Consultant';
$gtes = 'Genos Ingenier&iacute;a y Consultor&iacute;a Ambiental';

/*indicadores homepage*/
$rea = '3154145';
$pes = '214575';
$co2 = '397412145';
$caf = '3145';

$itel = '&#43;&#53;&#53;&#32;&#49;&#54;&#32;&#51;&#50;&#48;&#49;&#32;&#50;&#56;&#54;&#52;';
$imail = '&#99;&#111;&#110;&#116;&#97;&#116;&#111;&#64;&#103;&#101;&#110;&#111;&#115;&#46;&#101;&#99;&#111;&#46;&#98;&#114;';
$tmail = '&#116;&#114;&#97;&#98;&#97;&#108;&#104;&#101;&#99;&#111;&#110;&#111;&#115;&#99;&#111;&#64;&#103;&#101;&#110;&#111;&#115;&#46;&#101;&#99;&#111;&#46;&#98;&#114;';

$iano = '2017 - 2018';
$ilk = 'https://www.linkedin.com/company/genos-consultoria-ambiental';
$ifc = 'https://www.facebook.com/genos.eco/';
$iit = 'https://www.instagram.com/genos.eco/';

$lh = $base . '/';
$lg = $base . '/genos/';
$ls = $base . '/solucoes/';
$lb = $base . '/blog/';
$lc = $base . '/contato/';
$lp = $base . '/portfolio/';

$lang = isset($_COOKIE["language"]) ? $_COOKIE["language"] : 'pt';

setlang($lang);


if($loc == 'b' || $loc == 'p') {$lang = 'pt';}
include __DIR__ . '/' . $loc . '/' . $lang . '.php';

echo '<!DOCTYPE html>
<head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-108518895-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag("js", new Date());
  gtag("config", "UA-108518895-1");
</script>
<html lang="' . $metlang . '">
<title>' . $title . '<title>
<meta name="description" content="' . $desc . '">
<meta name="keywords" content="' . $keyw . '">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta charset="utf-8"/>
<meta name="theme-color" content="#666">
<meta name="msapplication-navbutton-color" content="#666">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="author" content="Marco Martins">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="canonical" href="https://genos.eco.br/">
<link rel="alternate" type="application/rss+xml" title="Genos Engenharia e Consultoria: Artigos" href="https://genos.eco.br/rss/">
<link rel="alternate" type="text/xml" title="Genos Engenharia e Consultoria: Artigos" href="https://genos.eco.br/rss/">
<link rel="shortcut icon" type="image/ico" href="src/logo_favicon.ico"/>
<link rel="apple-touch-icon" sizes="180x180" href="src/favicon-ati.png">
<link rel="icon" type="image/png" sizes="192x192" href="/src/favicon-192x192.png">
<link rel="icon" type="image/png" sizes="48x48" href="/src/favicon-48x48.png">
<link rel="icon" type="image/png" sizes="32x32" href="/src/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/src/favicon-16x16.png">
<link rel="mask-icon" href="/src/favicon-svg.svg" color="#00aba9">
<meta name="msapplication-TileColor" content="#8E6A9B">
<link rel="stylesheet" href="src/genos.css">
<script src="src/header.js" defer></script>';
if($loc!='error'){echo '<script src="src/loader.js"></script>';}
?>