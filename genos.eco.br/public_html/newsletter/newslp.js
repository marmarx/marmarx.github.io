function button() {
    1 == stat[0] && 1 == stat[1] ? document.getElementById("submit").disabled = !1 : document.getElementById("submit").disabled = !0
}
function formreset() {
    stat = [!1, !1],
    document.getElementById("newsletterform").reset(),
    document.getElementById("submit").disabled = !0
}
function checkchar(e) {
    var t = 0;
    "name" == e ? t = -1 : "email" == e && (t = -2);
    var n = document.getElementById(e)
      , z = document.getElementById("label-" + e)
      , a = n.value
      , s = ["$", "&", "+", "*", "/", "|", "\\", ".", ":", ";", ",", "=", "?", "!", "@", "#", "[", "]", "{", "}", "(", ")", "<", ">", "_", " ", "%"]
      , m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      , l = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      , o = document.getElementsByClassName("helptext");
    for (i = 0; i < s.length; i++)
        "name" == e ? (25 == i ? m[i] = -1 : m[i] = a.indexOf(s[i]),
        m[i] >= 0 && (t = 1)) : "email" == e && (24 == i || 7 == i || 14 == i ? m[i] = -1 : m[i] = a.indexOf(s[i]),
        m[i] >= 0 && (t = 2));
    if ("name" == e)
        for (i = 0; i < l.length; i++)
            numpos = a.indexOf(l[i]),
            numpos >= 0 && (t = 1);
    else
        "email" == e && "" != a && (atpos = a.indexOf("@"),
        dotpos = a.lastIndexOf("."),
        (atpos < 1 || dotpos - atpos < 2) && (t = 2));
    "" == a ? (n.className = "normal",z.className = "label empty",
    stat[-t - 1] = !1,
    o[-t - 1].className = "helptext shw",
    "name" == e ? o[-t - 1].innerHTML = '' : "email" == e && (o[-t - 1].innerHTML = '')) : t > 0 ? (n.className = "error",z.className = "label notempty",
    stat[t - 1] = !1,
    o[t - 1].className = "helptext shw",
    "name" == e ? o[t - 1].innerHTML = '' : "email" == e && (o[t - 1].innerHTML = '')) : (n.className = "success",z.className = "label notempty",
    stat[-t - 1] = !0,
    o[-t - 1].className = "helptext hid",
    o[-t - 1].innerHTML = ""),
    button()
}
function submitform() {
    "" != grecaptcha.getResponse() && "" != document.getElementById("name").value && "" != document.getElementById("email").value ? ($("#spin").removeClass("hid").addClass("shw"),
    $.ajax({
        type: "POST",
        url: "newslp.php",
        data: {
            name: $("#name").val(),
            email: $("#email").val(),
            recaptcha: grecaptcha.getResponse(),
            hrefloc: window.location.href
        },
        success: function(e) {
            alert(e)
        },
        error: function(e) {
            alert(e)
        }
    })) : (formreset(),
    alert("Preencha o formulario, por favor"))
}
var stat = [!1, !1];


function sidenav() {
    0 == menuopen ? (mcall.className = mcall.className.replace("not", "menuct"),
    window.innerWidth > 450 ? document.getElementById("mySidenav").style.width = "300px" : document.getElementById("mySidenav").style.width = "100%",
    document.getElementById("overlay").style.opacity = "1",
    document.getElementById("overlay").style.width = "100%",
    menuopen = 1) : (mcall.className = mcall.className.replace("menuct", "not"),
    document.getElementById("mySidenav").style.width = "0",
    document.getElementById("overlay").style.opacity = "0",
    document.getElementById("overlay").style.width = "0",
    menuopen = 0)
}
var menuopen = 0
  , mcall = document.getElementById("menucall");