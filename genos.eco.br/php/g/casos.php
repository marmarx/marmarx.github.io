<?php
foreach ($ncasos as $i) {
echo '<div class="slide"><div class="slcontainer"><p class="slimg">' . $icon[$i] . '</p><p class="serv">' . $caso[$i] . '</p><div class="slcontainer dflex"><div class="half"><p class="perc">' . $rnum[$i] . '</p></div><div class="half btlg"><p class="ret">' . $rtxt[$i] . '</p></div></div></div></div>';
}
?>