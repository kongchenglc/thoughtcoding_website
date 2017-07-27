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
    if (topScroll != 0) {
        index_2.style.display = "block";
        index_2.style.position = 'fixed'; //生成绝对定位元素，相对于浏览器窗口进行定位
        index_2.style.top = '0';
        index_2.style.zIndex = '1'; //设置元素堆叠顺序
        top.style.display = 'block';
    } else {
        index_2.style.position = 'static'; //元素正常出现在流中
        index_2.style.display = "none";
        top.style.display = 'none';
    }
}

function onmouseactive() {
    var slides = document.getElementsByClassName("onmouse_slide");
    for (var i = 0; i < slides.length; i++) {
        slides[i].onmouseover = function() {
            var img = this.getElementsByTagName("div");
            img[0].style.WebkitFilter = "blur(20px)";
            img[0].style.filter = "blur(20px)";
            img[1].style.display = 'block';
        }
        slides[i].onmouseout = function() {
            var img = this.getElementsByTagName("div");
            img[0].style.WebkitFilter = "blur(0px)";
            img[0].style.filter = "blur(0px)";
            img[1].style.display = 'none';
        }
    }
}
addLoadEvent(slide_top);
addLoadEvent(onmouseactive);