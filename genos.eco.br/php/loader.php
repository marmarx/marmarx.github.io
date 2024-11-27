<?php echo '<div id="loader" class="lalign"><div class="lball"></div><div class="lal">';
for($i=1;$i<9;$i++){
echo '<svg class="lcenter c' . $i . '"><path class="lpetal c' . $i . '" d="M 0 97.8005 L 0 75.1451 C 2.87 50.842 8.2 24.0674 34.03 1 C 36.9 6.3549 41 31.0699 41 40.1321 L 41 49.6062 C 40.59 54.1373 40.18 59.0803 39.77 64.0233 C 37.72 81.7358 30.34 99.4482 21.73 117.1606 C 18.04 124.9871 16.81 132.8135 15.17 140.6399 C 14.35 146.8187 13.94 153.4093 13.53 160 C 9.43 150.5259 0 111.8057 0 97.8005 Z"/></svg>';
}
echo '</div><p class="lload">' . $load . '<span class="lblink b1">.</span><span class="lblink b2">.</span><span class="lblink b3">.</span></p></div>';
?>