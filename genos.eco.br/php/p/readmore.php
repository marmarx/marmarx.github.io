<h4>Leia mais:</h4>
<?php $lk=$link;for($i=0;$i<sizeof($lk);$i++){
include(__DIR__.'/../../public_html/blog/'.$lk[$i].'/text.php');
echo '
<div class="container dif">
<div class="third ma">
  <a href="' . $base . '/blog/' . $lk[$i] . '/" hreflang="pt">
    <img src="' . $base . '/blog/' . $lk[$i] . '/pimg_602.jpg" title="'.$titulo.'" alt="'.$titulo.'"/ class="linki">
  </a>
</div>
<div class="twothird ma ml">
  <a href="' . $base . '/blog/' . $lk[$i] . '/" hreflang="pt">
    <p class="linkt">'.$titulo.'</p>
  </a>
  <a href="' . $base . '/blog/' . $lk[$i] . '/" hreflang="pt">
    <p class="links">'.$headline.'</p>
  </a>
</div>
</div>';
}
?>