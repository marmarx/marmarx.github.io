function button(){1==stat[0]&&1==stat[1]?document.getElementById("submit").disabled=!1:document.getElementById("submit").disabled=!0}function formreset(){stat=[!1,!1],$("#spin").removeClass("shw").addClass("hid"),document.getElementById("newsletterform").reset(),document.getElementById("submit").disabled=!0}function checkchar(e){var t=0;"name"==e?t=-1:"email"==e&&(t=-2);var n=document.getElementById(e),a=n.value,s=["$","&","+","*","/","|","\\",".",":",";",",","=","?","!","@","#","[","]","{","}","(",")","<",">","_"," ","%"],m=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],l=[0,1,2,3,4,5,6,7,8,9],o=document.getElementsByClassName("helptext");for(i=0;i<s.length;i++)"name"==e?(25==i?m[i]=-1:m[i]=a.indexOf(s[i]),m[i]>=0&&(t=1)):"email"==e&&(24==i||7==i||14==i?m[i]=-1:m[i]=a.indexOf(s[i]),m[i]>=0&&(t=2));if("name"==e)for(i=0;i<l.length;i++)numpos=a.indexOf(l[i]),numpos>=0&&(t=1);else"email"==e&&""!=a&&(atpos=a.indexOf("@"),dotpos=a.lastIndexOf("."),(atpos<1||dotpos-atpos<2)&&(t=2));""==a?(n.className="normal",stat[-t-1]=!1,o[-t-1].className="helptext shw","name"==e?o[-t-1].innerHTML='':"email"==e&&(o[-t-1].innerHTML='')):t>0?(n.className="error",stat[t-1]=!1,o[t-1].className="helptext shw","name"==e?o[t-1].innerHTML='':"email"==e&&(o[t-1].innerHTML='')):(n.className="success",stat[-t-1]=!0,o[-t-1].className="helptext hid",o[-t-1].innerHTML=""),button()}function submitform(){""!=grecaptcha.getResponse()&&""!=document.getElementById("name").value&&""!=document.getElementById("email").value?($("#spin").removeClass("hid").addClass("shw"),$.ajax({type:"POST",url:"news.php",data:{name:$("#name").val(),email:$("#email").val(),recaptcha:grecaptcha.getResponse(),hrefloc: window.location.href},success:function(e){subclose(),alert(e),$("#spin").removeClass("shw").addClass("hid")},error:function(e){alert(e),$("#spin").removeClass("shw").addClass("hid")}})):(formreset(),alert("Preencha o formulario, por favor"))}function subclose(){var e=document.getElementById("newsfix").offsetHeight;1==subopen?(subopen=0,document.getElementById("newsfix").style.transform="translate(0,"+e+"px)",document.getElementById("doublev").style.transform="rotate(180deg)"):(subopen=1,document.getElementById("newsfix").style.transform="translate(0,0)",document.getElementById("doublev").style.transform="rotate(0deg)")}var stat=[!1,!1];subopen=1;window.onload=function(){var sto2=setTimeout(function(){subclose()},20000)};subclose()
