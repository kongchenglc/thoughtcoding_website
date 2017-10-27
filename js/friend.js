function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
            var load = document.getElementById("load");
            load.style.visibility = "hidden";
        }
    }
}

function slide_top() {
    if (!document.getElementById)
        return false;
    if (!document.getElementById("top"))
        return false;
    var tops = document.getElementById("top");
    var timer = null;
    tops.onclick = function() {
        timer = setInterval(function() {
            var top = document.documentElement.scrollTop = document.body.scrollTop;
            var speed = top / 4;
            document.documentElement.scrollTop = document.body.scrollTop = top - speed;
            if (document.documentElement.scrollTop = document.body.scrollTop == 0) {
                timer = clearInterval(timer);
            }
        }, 50);
    }
}

function addclass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        var allclassname = element.className.split(" ");
        for (var i = 0; i < allclassname.length; i++) {
            if (allclassname[i] == value) {
                break;
            }
        }
        if (i == allclassname.length) {
            var newClassName = element.className;
            newClassName += " ";
            newClassName += value;
            element.className = newClassName;
        }
    }
}

function removeclass(element, value) {
    if (element.className) {
        var allClassName = element.className.split(" "); //得到所有类名
        for (var i = 0; i < allClassName.length; i++) {
            if (allClassName[i] == value) {
                allClassName.splice(i, i); //删除第i位元素，删除一位
                break;
            }
        }
        var result;
        var listName = allClassName;
        for (var j = 0; j < listName.length; j++) {
            if (j == 0) {
                result = listName[j];
                result += " ";
            } else {
                result += listName[j];
                result += " ";
            }
        }
        element.className = result;
    }
}

function onscroll_a() {
    var index_nav = document.getElementById("index_nav");
    var top = document.getElementById("top");

    window.onscroll = function() {
        if (document.body.scrollTop >= 30) {
            addclass(index_nav, "top_nav_collapse");
        } else {
            removeclass(index_nav, "top_nav_collapse");
        }
        if (document.body.scrollTop != 0) {
            top.style.display = 'block';
        } else {
            top.style.display = 'none';
        }
    };
}

function picwall() {
    var blacks = document.getElementsByClassName("black");
    var blacks_1 = document.getElementsByClassName("black-1");
    var blacks_2 = document.getElementsByClassName("black-2");
    var blacks_3 = document.getElementsByClassName("black-3");
    var pic = document.getElementById("pic");
    var lis = pic.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmousemove = function a() {
            for (var j = 0; j < blacks.length; j++) {
                blacks[j].style.visibility = "visible";
            }
            for (var j = 0; j < blacks_1.length; j++) {
                blacks_1[j].style.visibility = "visible";
            }
            for (var j = 0; j < blacks_2.length; j++) {
                blacks_2[j].style.visibility = "visible";
            }
            for (var j = 0; j < blacks_3.length; j++) {
                blacks_3[j].style.visibility = "visible";
            }

        }
        lis[i].onmouseout = function b() {
            for (var j = 0; j < blacks.length; j++) {
                blacks[j].style.visibility = "hidden";
            }
            for (var j = 0; j < blacks_1.length; j++) {
                blacks_1[j].style.visibility = "hidden";
            }
            for (var j = 0; j < blacks_2.length; j++) {
                blacks_2[j].style.visibility = "hidden";
            }
            for (var j = 0; j < blacks_3.length; j++) {
                blacks_3[j].style.visibility = "hidden";
            }
        }
    }
}
addLoadEvent(slide_top);
addLoadEvent(onscroll_a);
addLoadEvent(picwall);