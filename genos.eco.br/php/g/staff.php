<?php
$j=0;
foreach ($nstaff as $i) {
echo '<div class="staff st' . $i . ' light" onclick="staff(' . $j . ')"><div class="stafftext"><span class="talign">' . $st[$i] . '</span></div></div>';
$j++;
}
?>