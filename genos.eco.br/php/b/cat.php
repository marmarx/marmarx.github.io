<?php
$post_num = $post_load + $post_add;
for($i=0;$i<sizeof($post_cats);$i++){
$count = count($post_cats[$i]) - 2;
echo '<form action="" method="post"><input type="hidden" name="cat_select" value="' . $post_cats[$i][0] . '"><button class="btn-hid" name="show" type="submit" value="' . $post_num . '"><p class="wbm">' . $post_cats[$i][1] . ' (' . $count . ')</p></button></form>';
}
?>