<?php
/*Language: pt-br*/

$metlang = 'pt';
$title = $titlepost;
$load = 'Carregando';

/*Navigation*/
$tlh = 'Home';
$tlg = 'A Genos';
$tls = 'Nossas solu&ccedil;&otilde;es';
$tlb = 'Blog';
$tlc = 'Contato';
$tlp = 'Portfolio';

$ms4 = ' menu-slt';
$ms1 = $ms2 = $ms3 = $ms5 = $ms6 = '';

$post_apre = 'Postado por ';
$post_prep = 'em ';
$post_autor = '';
$post_data = $data;

for($i=0;$i<sizeof($autor);$i++){
      if($i<sizeof($autor)-2){$virg=', ';}
  elseif($i==sizeof($autor)-2){$virg=' e ';}
  else  {$virg=' ';}
  $post_autor .= $autor[$i] . $virg;
}
?>