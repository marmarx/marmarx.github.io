<?php
/*Language: es-al*/

$metlang = 'es';
$title = $gtes;

/*Pages SEO keywords and descriptions*/
/*Blog*/
$desc = 'Genos Consultoria - P&aacute;gina n&atilde;o encontrada - Error 404';
$keyw = 'Genos, Consultoria, P&aacute;gina n&atilde;o encontrada, Error 404';

/*Navigation*/
$tlh = 'Home';
$tlg = 'Genos';
$tls = 'Nuestras soluciones';
$tlb = 'Blog';
$tlc = 'Contacto';

$ms1 = $ms2 = $ms3 = $ms4 = $ms5 = '';

/*Header*/
$tlang2 = 'pt';
$tlang3 = 'en';

    if($error==400){$errorh1 = 'oops... bad request';}
elseif($error==401){$errorh1 = 'oops... authorization required';}
elseif($error==403){$errorh1 = 'oops... forbidden';}
elseif($error==404){$errorh1 = 'oops... p&aacute;gina no encontrada';}
elseif($error==500){$errorh1 = 'oops... internal server error';}
else  {$errorh1 = 'oops... p&aacute;gina no encontrada';}

if($error==500){$errorh2 = 'tente novamente mais tarde';}
else{$errorh2 = 'volver a la <a href="/">home</a> o <a href="/contato/">contacto';}

?>