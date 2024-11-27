<?php
$cat_select = isset($_POST["cat_select"]) ? $_POST["cat_select"] : 'todos';


for($i=0;$i<sizeof($post_cats);$i++){
  if($cat_select==$post_cats[$i][0]) {$post_list=$post_cats[$i];}
}

$post_load = isset($_POST["show"]) ? $_POST["show"] : $post_add;

$post_load = $post_load > sizeof($post_list)-2 ? sizeof($post_list)-2 : $post_load;


$ini = sizeof($post_list)-1;
$end = sizeof($post_list)-1-$post_load;

for($i=$ini;$i>$end;$i--){
$pl = $post_list[$i] . '/';
$pi = $img_path . $post_list[$i] . '/pimg_602.jpg';

include $php_path . $post_list[$i] . '/text.php';
$ph = $titulo;
$pc = $categoria;
$pd = $data;

echo '<div class="thirds"><a href=' . $pl . '><div class="box"> <img class="pimg" src="' . $pi . '" alt="' . $ph . '"><p class="phd1">' . $ph . '</p><p class="phd2">' . $pc . '</p><p class="phd3">' . $pd . '</p></div></a></div>';
}
?>