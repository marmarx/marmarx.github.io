<?php
echo '#slider{width:' . sizeof($post_slide)*100 . '%}';

for($i=0;$i<sizeof($post_slide);$i++){
$si = $img_path . $post_slide[$i] . '/pimg_602.jpg';
echo '.si' . $i . '{background-image:url("' . $si . '")}';
}
?>