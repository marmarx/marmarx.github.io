function scrooling(){var e=document.documentElement.scrollTop;e>document.getElementById("text").offsetTop?(mcall.className=mcall.className.replace("mwhite","mblack"),befsty.innerHTML="#menucall:before {background:#818181;}",aftsty.innerHTML="#menucall:after {background:#818181;}"):(mcall.className=mcall.className.replace("mblack","mwhite"),befsty.innerHTML="#menucall:before {background:#fff;}",aftsty.innerHTML="#menucall:after {background:#fff;}")}var befsty=document.head.appendChild(document.createElement("style")),aftsty=document.head.appendChild(document.createElement("style"));window.onscroll=function(){0==menuopen&&scrooling()};