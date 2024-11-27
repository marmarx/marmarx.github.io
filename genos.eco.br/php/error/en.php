<?php
/*Language: en-us*/

$metlang = 'en';
$title = $gten;

/*Pages SEO keywords and descriptions*/
/*Blog*/
$desc = 'Genos Consultoria - Page not found - Error 404';
$keyw = 'Genos, Consultoria, Page not found, Error 404';

/*Navigation*/
$tlh = 'Home';
$tlg = 'Genos';
$tls = 'Our solutions';
$tlb = 'Blog';
$tlc = 'Contat us';

$ms1 = $ms2 = $ms3 = $ms4 = $ms5 = '';

/*Header*/
$tlang2 = 'pt';
$tlang3 = 'es';

    if($error==400){$errorh1 = 'oops... bad request';}
elseif($error==401){$errorh1 = 'oops... authorization required';}
elseif($error==403){$errorh1 = 'oops... forbidden';}
elseif($error==404){$errorh1 = 'oops... page not found';}
elseif($error==500){$errorh1 = 'oops... internal server error';}
else  {$errorh1 = 'oops... page not found';}

if($error==500){$errorh2 = 'try again later';}
else{$errorh2 = 'get back to <a href="/">home</a> or <a href="/contato/">contact us';}

?>