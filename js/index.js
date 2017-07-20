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
            var speed = top / 6;
            document.documentElement.scrollTop = document.body.scrollTop = top - speed;
            if (document.documentElement.scrollTop = document.body.scrollTop == 0) {
                timer = clearInterval(timer);
            }
        }, 50);
    }
}
window.onscroll = function() {
    var topScroll = document.body.scrollTop; //滚动的距离,距离顶部的距离
    var index_2 = document.getElementById("guide");
    var top = document.getElementById("top");
    if (topScroll > 610) {
        index_2.style.position = 'fixed'; //生成绝对定位元素，相对于浏览器窗口进行定位
        index_2.style.top = '0';
        index_2.style.zIndex = '1'; //设置元素堆叠顺序
    } else {
        index_2.style.position = 'static'; //元素正常出现在流中
    }
    if (topScroll != 0)
        top.style.display = 'block';
    else
        top.style.display = 'none';
}

function hightrows() {
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementsByTagName("tr")) {
        return false;
    }
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].onmouseover = function() {
            this.style.fontWeight = "bold";
        }
        rows[i].onmouseout = function() {
            this.style.fontWeight = "normal";
        }
    }
}
addLoadEvent(slide_top);
addLoadEvent(hightrows);