const dices = {'d20':'<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="550pt" height="550pt" viewBox="0 0 550 550" preserveAspectRatio="xMidYMid meet"><g transform="translate(0,550) scale(.1,-.1)" stroke="none"><path d="M2074 5231 c-47 -35 -1864 -1855 -1888 -1891 -9 -13 -16 -38 -16 -55 0 -33 901 -2685 924 -2721 8 -11 27 -26 43 -32 44 -18 2202 -314 2238 -308 24 5 263 207 946 802 503 438 933 814 956 837 26 25 45 54 49 73 9 49 -836 2587 -875 2626 -23 24 -173 71 -1154 363 -620 184 -1141 335 -1156 335 -15 0 -46 -13 -67 -29z m1299 -891 c581 -304 1057 -556 1057 -559 0 -8 -2668 -716 -2674 -710 -2 2 91 430 207 951 l210 948 71 -38 c39 -21 547 -287 1129 -592z m87 287 l815 -242 76 -225 c42 -124 75 -227 73 -229 -2 -3 -1779 924 -1793 936 -12 9 77 -16 829 -240z m-1637 -687 c-108 -487 -197 -886 -197 -887 -1 -1 -258 54 -571 123 -314 68 -572 124 -574 124 -2 0 343 344 765 764 423 420 770 763 771 762 1 -1 -86 -400 -194 -886z m2697 -279 c0 -7 -641 -2474 -711 -2734 -6 -21 -14 -37 -18 -35 -15 5 -2001 2051 -1997 2055 6 6 2687 720 2709 722 9 0 17 -3 17 -8z m522 -1687 c-15 -12 -261 -227 -547 -477 -286 -250 -521 -451 -523 -447 -3 7 607 2359 615 2374 3 4 113 -315 244 -709 l237 -718 -26 -23z m-4017 1085 c308 -67 563 -124 566 -128 7 -6 -382 -1915 -391 -1925 -3 -3 -131 362 -284 812 -154 449 -321 940 -372 1090 -51 149 -90 272 -86 272 4 0 259 -54 567 -121z m1674 -1223 c540 -555 979 -1011 976 -1014 -6 -6 -2387 -64 -2393 -58 -6 7 422 2086 429 2084 4 -2 449 -457 988 -1012z m841 -1170 c-65 -63 -226 -196 -238 -196 -21 0 -1316 180 -1327 184 -5 3 49 5 120 6 72 1 346 8 610 14 264 7 565 14 670 14 l190 2 -25 -24z"/><path d="M2902 4413 c-31 -9 -70 -31 -94 -53 -42 -37 -43 -38 -46 -115 -6 -105 10 -169 72 -300 115 -238 237 -347 394 -347 76 0 165 29 211 68 63 52 74 144 35 283 -19 66 -83 196 -134 271 -55 82 -159 174 -216 194 -59 20 -152 19 -222 -1z m199 -140 c63 -53 165 -239 208 -377 27 -87 27 -92 -8 -127 -35 -34 -86 -39 -132 -12 -79 47 -239 364 -239 473 0 68 109 95 171 43z"/><path d="M2280 4276 c-135 -39 -190 -101 -190 -213 0 -68 16 -133 33 -133 35 0 167 35 167 44 0 6 -5 30 -10 54 -18 78 26 122 122 122 112 0 175 -119 120 -226 -11 -22 -51 -78 -88 -125 -90 -113 -117 -174 -122 -269 -4 -81 11 -160 31 -160 12 0 618 161 626 167 7 5 -54 135 -65 140 -7 2 -97 -18 -200 -46 -104 -27 -190 -48 -193 -46 -10 10 26 69 94 156 100 126 125 176 125 253 0 110 -76 218 -188 269 -58 26 -195 33 -262 13z"/></g></svg>'}

const magic = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 70 76" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0,76) scale(.1,-.1)" fill="#555555" stroke="none"><path d="M175 681 c-16 -10 -41 -31 -55 -47 l-25 -28 40 30 c22 17 51 38 65 47 34 23 12 21 -25 -2z"/><path d="M265 688 c-11 -7 -28 -13 -37 -13 -24 -2 -94 -52 -113 -82 -9 -13 -26 -34 -38 -46 -20 -20 -22 -32 -22 -127 0 -96 2 -109 27 -151 41 -69 118 -122 197 -135 31 -5 41 -11 41 -25 0 -23 7 -23 78 -3 168 49 242 135 242 285 0 94 -20 155 -71 213 -55 62 -112 87 -207 92 -47 2 -85 -1 -97 -8z m220 -82 c49 -38 92 -106 105 -170 15 -72 -6 -139 -65 -204 -88 -98 -189 -115 -318 -54 -78 36 -119 89 -137 178 -18 86 8 195 55 234 13 11 12 6 -4 -26 -54 -104 -42 -226 30 -308 143 -164 415 -72 414 139 -1 160 -150 261 -290 196 -69 -32 -105 -86 -105 -158 0 -78 109 -134 160 -83 31 31 25 47 -20 55 -36 6 -40 10 -40 37 0 47 48 88 103 88 145 0 173 -215 37 -287 -86 -46 -188 -18 -241 65 -25 40 -29 56 -29 117 0 64 3 77 29 112 55 76 114 104 212 100 55 -2 72 -7 104 -31z"/></g></svg>';

const backborder = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="922pt" height="852pt" viewBox="0 0 922 852"><g transform="translate(0,852) scale(.1,-.1)"><path fill="%23backborder" d="M140 7107 l0 -1412 35 -52 c19 -29 35 -57 35 -64 0 -6 -16 -29 -35 -52 l-35 -41 0 -883 0 -884 -50 -53 -51 -54 51 -42 50 -42 0 -461 0 -461 27 -28 27 -28 -37 -38 -37 -38 0 -188 0 -188 35 -59 c19 -33 35 -64 35 -69 0 -5 -16 -36 -35 -69 l-35 -59 0 -284 -1 -283 -38 -45 -39 -45 44 -47 44 -47 0 -474 0 -473 -36 -35 c-20 -18 -45 -46 -56 -61 l-19 -28 4550 0 c2503 0 4551 4 4551 8 0 5 -20 35 -45 66 l-45 58 0 823 0 823 55 41 c30 23 55 43 55 45 0 2 -25 20 -55 40 -54 35 -55 37 -55 84 l0 48 80 39 c44 21 80 44 80 50 0 5 -34 32 -75 59 l-75 48 0 119 0 118 -30 23 c-35 26 -37 38 -10 63 20 18 20 31 20 781 l0 762 52 45 53 45 -53 56 -52 55 0 585 0 586 -90 76 c-71 61 -88 80 -80 93 5 9 45 52 89 96 l81 80 0 1342 0 1343 -4440 0 -4440 0 0 -1413z"/></g></svg>';

const icons = [
'<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m16 1c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 8c-2.7614237 0-5 2.2385763-5 5 0 2.0143973 1.2022141 3.7998876 2.9996346 4.5835001l.0003231 2.0984999-.1499943.0278452c-2.8326474.5613112-5.31897338 2.2230336-6.93575953 4.5872979 2.34343054 2.291067 5.54974273 3.7028569 9.08579613 3.7028569 3.5355506 0 6.7414538-1.4113884 9.0850203-3.701476-1.6141801-2.3628535-4.0978119-4.0247647-6.929184-4.5867938l-.1558786-.0287302.001228-2.0991413c1.7288399-.7547474 2.9066959-2.4357565 2.9936498-4.355479l.0051645-.2283797c0-2.7614237-2.2385763-5-5-5zm0-6c-7.17970175 0-13 5.82029825-13 13 0 2.9045768.95257276 5.5866683 2.56235849 7.7509147 1.42074739-1.9134907 3.33951478-3.4002416 5.53860831-4.2955956l.3480332-.1363191-.0229565-.0189706c-1.43704227-1.2411241-2.34462949-3.045583-2.42083359-5.0285539l-.00520991-.2714755c0-3.8659932 3.1340068-7 7-7s7 3.1340068 7 7c0 1.9941317-.8415062 3.8279876-2.224566 5.1193683l-.225434.2006317.0447787.0163138c2.3268368.8792152 4.3570558 2.4138611 5.8430586 4.4127726 1.6098837-2.1632453 2.5621627-4.8449575 2.5621627-7.7490864 0-7.17970175-5.8202983-13-13-13z"></path></svg>',
'<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="transform:translate(14px,13px) scale(-.07)"><path d="M76 501 c-3 -4 1 -35 9 -70 9 -46 21 -72 44 -95 35 -36 38 -48 16 -66 -12 -10 -18 -10 -30 0 -11 10 -20 6 -47 -19 l-32 -30 24 -26 24 -25 -29 -30 -29 -30 29 -30 c34 -35 54 -38 78 -10 20 24 30 25 47 5 18 -21 33 -19 60 10 14 15 21 31 17 44 -3 12 2 26 12 36 16 14 19 14 34 -3 13 -14 14 -21 5 -30 -9 -9 -5 -19 17 -42 33 -35 42 -36 67 -13 17 15 20 15 46 -10 l28 -27 32 33 c37 39 39 48 12 72 -24 21 -26 41 -5 49 23 8 18 29 -15 61 -23 22 -32 26 -43 17 -11 -9 -18 -8 -32 8 -17 18 -16 20 15 48 23 22 36 46 46 88 23 97 25 94 -53 77 -54 -11 -75 -21 -103 -48 l-34 -35 -36 35 c-27 27 -50 37 -103 48 -37 8 -69 12 -71 8z m94 -37 c27 -5 59 -31 138 -110 56 -57 102 -107 102 -112 0 -4 -5 -13 -12 -20 -10 -10 -34 10 -115 90 -56 56 -106 99 -110 95 -4 -4 39 -54 95 -110 98 -99 102 -104 84 -120 -17 -16 -23 -11 -124 91 -81 82 -109 116 -117 147 -15 56 -14 67 7 61 9 -2 33 -8 52 -12z m286 -31 c-5 -36 -15 -56 -41 -83 l-35 -34 -40 39 -40 39 32 33 c27 28 69 45 122 52 5 1 6 -20 2 -46z m-210 -252 c-18 -20 -18 -19 -58 21 -38 39 -39 41 -22 59 18 19 19 19 58 -20 39 -39 39 -41 22 -60z m-22 -74 c-10 -28 -25 -20 -91 45 -59 59 -62 63 -46 80 16 18 19 16 80 -45 46 -45 62 -68 57 -80z m256 128 c11 -13 9 -20 -11 -41 -13 -14 -42 -45 -65 -70 -41 -43 -41 -44 -59 -24 -18 20 -18 22 45 85 36 36 67 65 71 65 4 0 12 -7 19 -15z m-358 -102 c17 -15 17 -17 2 -35 -21 -22 -31 -23 -51 -3 -14 14 -14 18 2 35 22 24 24 24 47 3z m363 -43 c-19 -21 -19 -21 -39 -1 -19 20 -19 21 -1 41 l19 21 20 -20 c19 -20 19 -21 1 -41z"/></svg>',
'<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="transform:translate(-11px,-13px) scale(.08)"><path d="M364.997,167.453c-5.14,2.021-7.668,7.826-5.647,12.966c8.044,20.459,12.124,42.115,12.124,64.366 c0,96.893-78.851,175.72-175.772,175.72c-96.881,0-175.7-78.828-175.7-175.72c0-96.876,78.819-175.691,175.7-175.691 c48.879,0,94.279,19.559,127.835,55.072c3.794,4.015,10.123,4.194,14.136,0.401c4.015-3.793,4.194-10.122,0.401-14.137 c-18.107-19.164-39.48-34.245-63.525-44.826c-24.899-10.955-51.426-16.51-78.849-16.51C87.79,49.094,0,136.88,0,244.785 c0,107.92,87.79,195.72,195.7,195.72c52.297,0,101.46-20.353,138.432-57.311c36.977-36.962,57.341-86.117,57.341-138.409 c0-24.767-4.546-48.885-13.51-71.685C375.941,167.961,370.139,165.432,364.997,167.453z"/><path d="M291.622,158.77c3.808-4,3.652-10.33-0.348-14.138c-25.892-24.649-59.834-38.225-95.574-38.225 c-76.264,0-138.309,62.076-138.309,138.377c0,76.306,62.045,138.385,138.309,138.385c76.347,0,138.46-62.079,138.46-138.385 c0-14.27-2.175-28.322-6.466-41.766c-1.679-5.261-7.306-8.164-12.567-6.487c-5.262,1.679-8.165,7.306-6.487,12.567 c3.663,11.477,5.52,23.483,5.52,35.686c0,65.277-53.141,118.385-118.46,118.385c-65.236,0-118.309-53.107-118.309-118.385 c0-65.273,53.073-118.377,118.309-118.377c30.582,0,59.627,11.617,81.784,32.71C281.484,162.926,287.814,162.77,291.622,158.77z"/><path d="M195.7,180.313c12.1,0,23.862,3.345,34.034,9.683c1.606,0.996,3.128,2.047,4.525,3.123 c4.376,3.369,10.654,2.554,14.024-1.821c3.37-4.376,2.554-10.655-1.821-14.024c-1.929-1.485-4.011-2.923-6.169-4.262 c-13.33-8.307-28.75-12.698-44.594-12.698c-46.535,0-84.395,37.894-84.395,84.472c0,46.594,37.859,84.501,84.395,84.501 c46.611,0,84.532-37.907,84.532-84.501c0-3.803-0.254-7.523-0.778-11.373c-0.744-5.472-5.783-9.301-11.257-8.561 c-5.472,0.745-9.305,5.784-8.561,11.257c0.401,2.947,0.596,5.785,0.596,8.677c0,35.566-28.949,64.501-64.532,64.501 c-35.507,0-64.395-28.935-64.395-64.501C131.306,209.235,160.193,180.313,195.7,180.313z"/><path d="M475.132,119.668l-40.815-24.406l-4.888-46.804c-0.36-3.455-2.488-6.474-5.619-7.977 c-3.13-1.502-6.818-1.273-9.738,0.606l-39.283,25.28c-2.819,1.814-4.542,4.921-4.587,8.273l-0.704,51.944l-158.391,96.197 c-4.553-3.296-10.138-5.246-16.172-5.246c-15.304,0-27.754,12.442-27.754,27.735c0,15.293,12.451,27.735,27.754,27.735 c15.264,0,27.682-12.442,27.682-27.735c0-1.96-0.207-3.872-0.595-5.718l159.055-96.6l45.577,19.711 c1.272,0.55,2.623,0.821,3.969,0.821c1.886,0,3.762-0.533,5.396-1.581l39.377-25.235c2.916-1.868,4.657-5.112,4.604-8.574 C479.945,124.633,478.104,121.445,475.132,119.668z M429.708,142.194l-40.185-17.378l0.604-44.535l21.099-13.578l3.719,35.612 c0.327,3.132,2.111,5.928,4.814,7.544l31.248,18.685L429.708,142.194z"/></svg>',
'<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path style="transform:scale(.07) translate(0,-10px);fill:currentColor" d="M471.563,173.778l-145.5-20.8l-64.4-132c-8-15.4-30-12.2-35.3,0l-64.4,132l-145.6,20.8c-16.4,1-21.6,20.9-10.4,33.2 l105,102.9l-25,144.5c-2.9,17.8,16.7,27.8,28.1,20.8l129.9-68.6l129.9,67.6c13.6,7,29.8-2.8,28.1-19.7l-25-144.6l105-102.9 C494.663,193.478,485.563,175.478,471.563,173.778z M342.663,288.078c-4.2,5.2-6.2,11.4-5.2,17.7l19.7,116.4l-103.9-55.1 c-6.7-2.8-13-2.8-18.7,0l-103.9,55.1l19.7-116.4c1-7.3-1-13.5-5.2-17.7l-84.1-82.1l116.4-16.6c6.2-1,11.4-4.2,14.6-10.4l52-105 l52,105c3.1,5.2,8.3,9.4,14.6,10.4l116.2,16.6L342.663,288.078z"/></svg>',
'<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g style="transform:scale(.12) translate(-15px,-25px)"><path d="M230.879,144.952c-3.426-4.771-4.874-10.757-3.84-16.786l2.061-12.018l-8.73-8.51c-0.133-0.129-0.253-0.267-0.382-0.399 c-66.809,55.733-74.408,145.071-73.68,188.929c0.027,1.598,1.254,2.919,2.846,3.067c1.591,0.148,3.039-0.925,3.361-2.491 C170.944,206.99,205.797,164.569,230.879,144.952z"/><path d="M99.861,85.018L79.7,89.531l-7.712,19.167c-0.14,0.348-0.298,0.685-0.454,1.023c31.466,44.515,47.854,135.4,54.405,181.181 c0.154,1.074,1.111,1.846,2.193,1.773c1.082-0.073,1.925-0.968,1.934-2.052c0.797-98.746-14.309-164.631-29.555-205.773 C100.294,84.904,100.081,84.969,99.861,85.018z"/><path d="M237.742,244.904l-2.857-3.93c-2.312-3.18-3.69-6.801-4.133-10.52c-21.992,5.865-55.074,20.873-65.644,58.833 c-0.571,2.05,0.423,4.213,2.35,5.115c1.928,0.902,4.226,0.28,5.434-1.472c11.534-16.727,32.267-38.816,63.187-43.301 c0.017-0.048,0.029-0.097,0.046-0.146L237.742,244.904z"/><path d="M80.479,206.57c-2.011,2.813-4.686,5.177-7.904,6.851l-4.309,2.241l-0.597,4.82c-0.18,1.452-0.504,2.857-0.943,4.21 c18.465,20.857,32.072,49.507,40.295,70.078c0.551,1.379,2.056,2.118,3.486,1.716c1.429-0.403,2.326-1.818,2.077-3.283 C105.303,250.21,92.568,223.285,80.479,206.57z"/><path d="M250.59,109.166l-3.839,22.381c-0.153,0.89,0.213,1.79,0.944,2.321c0.413,0.3,0.903,0.453,1.395,0.453 c0.378,0,0.757-0.09,1.104-0.273l20.1-10.567l20.099,10.567c0.347,0.183,0.726,0.273,1.104,0.273c0.492,0,0.982-0.153,1.395-0.453 c0.731-0.531,1.097-1.431,0.944-2.321l-3.839-22.381l16.261-15.851c0.647-0.631,0.88-1.574,0.601-2.433 c-0.279-0.859-1.022-1.485-1.916-1.615l-22.472-3.265l-10.05-20.363c-0.4-0.81-1.225-1.323-2.128-1.323 c-0.903,0-1.728,0.513-2.128,1.323l-10.05,20.363l-22.472,3.265c-0.894,0.13-1.637,0.756-1.916,1.615 c-0.279,0.859-0.046,1.802,0.6,2.433L250.59,109.166z"/><path d="M95.493,65.501c0.882-0.197,1.575-0.878,1.788-1.756c0.213-0.878-0.09-1.8-0.783-2.38L72.588,41.36l2.925-31.037 c0.085-0.899-0.349-1.769-1.117-2.243c-0.382-0.235-0.814-0.353-1.245-0.353c-0.438,0-0.875,0.121-1.26,0.362L45.476,24.647 L16.861,12.275c-0.303-0.131-0.623-0.195-0.941-0.195c-0.553,0-1.1,0.193-1.537,0.564c-0.689,0.585-0.985,1.51-0.765,2.386 l7.585,30.238L0.593,68.658c-0.597,0.678-0.758,1.636-0.414,2.471c0.344,0.836,1.132,1.404,2.033,1.465l31.102,2.131l15.877,26.829 c0.429,0.725,1.208,1.165,2.042,1.165c0.06,0,0.12-0.002,0.181-0.007c0.901-0.068,1.684-0.642,2.022-1.48l11.637-28.921 L95.493,65.501z"/><path d="M302.251,235.51c-0.13-0.894-0.757-1.636-1.616-1.915l-14.62-4.745l-4.379-14.734c-0.257-0.866-0.984-1.511-1.874-1.663 c-0.134-0.023-0.268-0.034-0.401-0.034c-0.752,0-1.469,0.358-1.92,0.979l-9.031,12.439l-15.366-0.388 c-0.02,0-0.04-0.001-0.06-0.001c-0.88,0-1.69,0.488-2.1,1.269c-0.42,0.8-0.35,1.769,0.181,2.499l9.039,12.433l-5.118,14.495 c-0.301,0.852-0.092,1.8,0.539,2.447c0.454,0.465,1.069,0.716,1.699,0.716c0.245,0,0.493-0.038,0.734-0.116l14.618-4.755 l12.204,9.346c0.422,0.323,0.931,0.489,1.443,0.489c0.358,0,0.717-0.081,1.051-0.245c0.81-0.4,1.323-1.225,1.322-2.129 l-0.005-15.371l12.66-8.718C301.993,237.295,302.381,236.404,302.251,235.51z"/><path d="M63.347,195.678c0.801-0.417,1.297-1.252,1.278-2.156c-0.019-0.903-0.549-1.717-1.368-2.1l-13.925-6.51l-2.531-15.161 c-0.149-0.891-0.79-1.62-1.655-1.881c-0.226-0.068-0.457-0.101-0.685-0.101c-0.647,0-1.279,0.265-1.734,0.753l-10.494,11.232 l-15.202-2.278c-0.118-0.018-0.235-0.026-0.352-0.026c-0.77,0-1.501,0.375-1.948,1.019c-0.516,0.742-0.565,1.712-0.128,2.503 l7.439,13.452l-6.864,13.754c-0.403,0.808-0.313,1.775,0.233,2.495c0.454,0.598,1.156,0.938,1.89,0.938 c0.15,0,0.301-0.014,0.451-0.043l15.092-2.918l10.96,10.778c0.451,0.444,1.052,0.681,1.665,0.681c0.262,0,0.525-0.043,0.78-0.132 c0.853-0.297,1.463-1.053,1.574-1.949l1.889-15.255L63.347,195.678z"/><path d="M164.224,67.025l-1.845-4.493l-4.748-1.027c-3.545-0.767-6.747-2.343-9.427-4.526c-7.651,20.35-13.008,51.827-7.374,99.172 c0.303,2.548,4.02,2.518,4.262-0.036c2.083-21.962,7.451-57.474,21.156-85.27C165.465,69.654,164.781,68.381,164.224,67.025z"/><path d="M170.993,12.588l1.552,15.293l-11.718,9.948c-0.689,0.585-0.986,1.509-0.766,2.386c0.219,0.876,0.917,1.552,1.8,1.743 l15.024,3.25l5.84,14.219c0.343,0.836,1.131,1.404,2.032,1.466c0.055,0.004,0.109,0.006,0.163,0.006 c0.84,0,1.624-0.446,2.051-1.179l7.734-13.284l15.328-1.16c0.901-0.068,1.685-0.642,2.022-1.48c0.337-0.838,0.17-1.795-0.432-2.468 l-10.244-11.46l3.633-14.936c0.214-0.878-0.09-1.801-0.783-2.381c-0.435-0.364-0.977-0.554-1.524-0.554 c-0.324,0-0.65,0.066-0.957,0.202l-14.065,6.201L174.6,10.329c-0.382-0.236-0.814-0.353-1.246-0.353 c-0.437,0-0.875,0.121-1.26,0.362C171.329,10.817,170.902,11.689,170.993,12.588z"/></g></svg>',
'<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="fill:none;stroke:currentcolor;stroke-width:2.5"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>',
'<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="transform:scale(.074) translate(-195px,-160px)"><path d="M81 425 l-31 -27 0 -169 0 -169 235 0 235 0 0 164 c0 160 -1 166 -24 193 l-24 28 -180 3 -179 3 -32 -26z m359 -65 l0 -60 -154 0 -154 0 -4 60 -3 60 158 0 157 0 0 -60z m-340 -5 c0 -42 -3 -55 -15 -55 -19 0 -21 80 -3 98 18 18 18 17 18 -43z m390 36 c5 -11 10 -36 10 -55 0 -29 -4 -36 -20 -36 -18 0 -20 7 -20 55 0 56 11 70 30 36z m-270 -137 c0 -10 -16 -14 -60 -14 l-61 0 3 -62 3 -63 178 -3 c190 -3 179 -6 179 48 0 85 4 80 -62 80 -47 0 -60 3 -60 15 0 12 16 15 80 15 l80 0 0 -95 0 -95 -215 0 -215 0 0 94 0 95 43 3 c65 5 107 -2 107 -18z m100 -20 c0 -32 -2 -34 -35 -34 -33 0 -35 2 -35 34 0 28 4 35 23 38 36 6 47 -2 47 -38z m-97 -34 c4 -17 14 -20 61 -20 49 0 56 2 56 20 0 17 7 20 50 20 l50 0 0 -45 0 -45 -154 0 c-85 0 -157 3 -159 8 -2 4 -2 24 0 45 5 36 6 37 48 37 34 0 44 -4 48 -20z"/><path d="M270 246 c0 -8 4 -17 9 -20 10 -7 23 19 14 28 -11 11 -23 6 -23 -8z"/></svg>',
'<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="transform:scale(.07) translate(-150px,-160px)"><path d="M487.491,81.312L420.967,3.645C418.987,1.328,416.095,0,413.051,0H168.763c-4.963,0-9.234,3.496-10.217,8.358 L90.118,346.862H48.88C21.472,346.862,0,378.301,0,418.436C0,458.56,21.472,490,48.88,490h273.615 c40.821,0,77.046-31.491,88.098-76.583l79.108-322.845C490.499,87.308,489.68,83.862,487.491,81.312z M456.916,77.667h-49.608 l11.036-45.036L456.916,77.667z M282.606,469.149H48.88c-13.256,0-28.029-20.831-28.029-50.713 c0-29.892,14.773-50.722,28.029-50.722h49.766h183.961c-8.344,12.868-13.436,30.714-13.436,50.722 	C269.17,438.439,274.262,456.281,282.606,469.149z M390.342,408.448c-8.755,35.736-36.657,60.701-67.847,60.701h-6.705 c-10.715,0-22.506-16.097-25.198-40.287h61.388c5.758,0,10.426-4.663,10.426-10.426c0-40.134-20.475-71.574-46.615-71.574H111.387 L177.29,20.851h222.474l-15.867,64.762c-1.917,6.566,3.543,12.905,10.125,12.905h72.266L390.342,408.448z M290.591,408.01 c2.693-24.201,14.483-40.297,25.198-40.297c10.711,0,22.501,16.096,25.193,40.297H290.591z"/></svg>',
'<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="transform:scale(.07) translate(-150px,-160px)"><path d="M454.2,189.101l-33.6-5.7c-3.5-11.3-8-22.2-13.5-32.6l19.8-27.7c8.4-11.8,7.1-27.9-3.2-38.1l-29.8-29.8 c-5.6-5.6-13-8.7-20.9-8.7c-6.2,0-12.1,1.9-17.1,5.5l-27.8,19.8c-10.8-5.7-22.1-10.4-33.8-13.9l-5.6-33.2 c-2.4-14.3-14.7-24.7-29.2-24.7h-42.1c-14.5,0-26.8,10.4-29.2,24.7l-5.8,34c-11.2,3.5-22.1,8.1-32.5,13.7l-27.5-19.8 c-5-3.6-11-5.5-17.2-5.5c-7.9,0-15.4,3.1-20.9,8.7l-29.9,29.8c-10.2,10.2-11.6,26.3-3.2,38.1l20,28.1 c-5.5,10.5-9.9,21.4-13.3,32.7l-33.2,5.6c-14.3,2.4-24.7,14.7-24.7,29.2v42.1c0,14.5,10.4,26.8,24.7,29.2l34,5.8 c3.5,11.2,8.1,22.1,13.7,32.5l-19.7,27.4c-8.4,11.8-7.1,27.9,3.2,38.1l29.8,29.8c5.6,5.6,13,8.7,20.9,8.7c6.2,0,12.1-1.9,17.1-5.5 l28.1-20c10.1,5.3,20.7,9.6,31.6,13l5.6,33.6c2.4,14.3,14.7,24.7,29.2,24.7h42.2c14.5,0,26.8-10.4,29.2-24.7l5.7-33.6 c11.3-3.5,22.2-8,32.6-13.5l27.7,19.8c5,3.6,11,5.5,17.2,5.5l0,0c7.9,0,15.3-3.1,20.9-8.7l29.8-29.8c10.2-10.2,11.6-26.3,3.2-38.1 l-19.8-27.8c5.5-10.5,10.1-21.4,13.5-32.6l33.6-5.6c14.3-2.4,24.7-14.7,24.7-29.2v-42.1 C478.9,203.801,468.5,191.501,454.2,189.101z M451.9,260.401c0,1.3-0.9,2.4-2.2,2.6l-42,7c-5.3,0.9-9.5,4.8-10.8,9.9 c-3.8,14.7-9.6,28.8-17.4,41.9c-2.7,4.6-2.5,10.3,0.6,14.7l24.7,34.8c0.7,1,0.6,2.5-0.3,3.4l-29.8,29.8c-0.7,0.7-1.4,0.8-1.9,0.8 c-0.6,0-1.1-0.2-1.5-0.5l-34.7-24.7c-4.3-3.1-10.1-3.3-14.7-0.6c-13.1,7.8-27.2,13.6-41.9,17.4c-5.2,1.3-9.1,5.6-9.9,10.8l-7.1,42 c-0.2,1.3-1.3,2.2-2.6,2.2h-42.1c-1.3,0-2.4-0.9-2.6-2.2l-7-42c-0.9-5.3-4.8-9.5-9.9-10.8c-14.3-3.7-28.1-9.4-41-16.8 c-2.1-1.2-4.5-1.8-6.8-1.8c-2.7,0-5.5,0.8-7.8,2.5l-35,24.9c-0.5,0.3-1,0.5-1.5,0.5c-0.4,0-1.2-0.1-1.9-0.8l-29.8-29.8 c-0.9-0.9-1-2.3-0.3-3.4l24.6-34.5c3.1-4.4,3.3-10.2,0.6-14.8c-7.8-13-13.8-27.1-17.6-41.8c-1.4-5.1-5.6-9-10.8-9.9l-42.3-7.2 c-1.3-0.2-2.2-1.3-2.2-2.6v-42.1c0-1.3,0.9-2.4,2.2-2.6l41.7-7c5.3-0.9,9.6-4.8,10.9-10c3.7-14.7,9.4-28.9,17.1-42 c2.7-4.6,2.4-10.3-0.7-14.6l-24.9-35c-0.7-1-0.6-2.5,0.3-3.4l29.8-29.8c0.7-0.7,1.4-0.8,1.9-0.8c0.6,0,1.1,0.2,1.5,0.5l34.5,24.6 c4.4,3.1,10.2,3.3,14.8,0.6c13-7.8,27.1-13.8,41.8-17.6c5.1-1.4,9-5.6,9.9-10.8l7.2-42.3c0.2-1.3,1.3-2.2,2.6-2.2h42.1 c1.3,0,2.4,0.9,2.6,2.2l7,41.7c0.9,5.3,4.8,9.6,10,10.9c15.1,3.8,29.5,9.7,42.9,17.6c4.6,2.7,10.3,2.5,14.7-0.6l34.5-24.8 c0.5-0.3,1-0.5,1.5-0.5c0.4,0,1.2,0.1,1.9,0.8l29.8,29.8c0.9,0.9,1,2.3,0.3,3.4l-24.7,34.7c-3.1,4.3-3.3,10.1-0.6,14.7 c7.8,13.1,13.6,27.2,17.4,41.9c1.3,5.2,5.6,9.1,10.8,9.9l42,7.1c1.3,0.2,2.2,1.3,2.2,2.6v42.1H451.9z"/><path d="M239.4,136.001c-57,0-103.3,46.3-103.3,103.3s46.3,103.3,103.3,103.3s103.3-46.3,103.3-103.3S296.4,136.001,239.4,136.001 z M239.4,315.601c-42.1,0-76.3-34.2-76.3-76.3s34.2-76.3,76.3-76.3s76.3,34.2,76.3,76.3S281.5,315.601,239.4,315.601z"/></svg>'
];