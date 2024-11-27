<?php
echo '<div id="slider">';

for($i=0;$i<sizeof($post_slide);$i++){
  $sl = $post_slide[$i] . '/';
  echo '<a href="' . $sl . '" class="slide si' . $i . '"></a>';
}

echo '<div class="navpanelout">';

for($i=0;$i<sizeof($post_slide);$i++){
  $sl = $post_slide[$i] . '/';
  include $php_path . $post_slide[$i] . '/text.php';
  $st = $titulo;
  echo '<div class="navpanelin"><a class="txt-nodeco" href="' . $sl . '"><h2 class="navtxt navtxtvis">' . $st . '</h2></a></div>';
}

echo '</div></div><div class="navarrow left" onclick="slide(-1)"><p class="fa">v</p></div><div class="navarrow right" onclick="slide(1)"><p class="fa">v</p></div><div class="cirpanel">';

for($i=0;$i<sizeof($post_slide);$i++){
  echo '<div class="navcircle" onclick="slideb(' . $i . ')"></div>';
}

echo '</div>';
?>