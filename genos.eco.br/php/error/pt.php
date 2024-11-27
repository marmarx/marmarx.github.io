<?php
/*Language: pt-br*/

$metlang = 'pt';
$title = $gtpt;

/*Pages SEO keywords and descriptions*/
/*Blog*/
$desc = 'Genos Consultoria - P&aacute;gina n&atilde;o encontrada - Error 404';
$keyw = 'Genos, Consultoria, P&aacute;gina n&atilde;o encontrada, Error 404';

/*Navigation*/
$tlh = 'Home';
$tlg = 'A Genos';
$tls = 'Nossas solu&ccedil;&otilde;es';
$tlb = 'Blog';
$tlc = 'Contato';

$ms1 = $ms2 = $ms3 = $ms4 = $ms5 = '';

/*Header*/
$tlang2 = 'en';
$tlang3 = 'es';

    if($error==400){$errorh1 = 'oops... bad request';}
elseif($error==401){$errorh1 = 'oops... authorization required';}
elseif($error==403){$errorh1 = 'oops... forbidden';}
elseif($error==404){$errorh1 = 'oops... p&aacute;gina n&atilde;o encontrada';}
elseif($error==500){$errorh1 = 'oops... internal server error';}
else  {$errorh1 = 'oops... p&aacute;gina n&atilde;o encontrada';}

if($error==500){$errorh2 = 'tente novamente mais tarde';}
else{$errorh2 = 'volte para <a href="/">home</a> ou <a href="/contato/">fale conosco';}
?>