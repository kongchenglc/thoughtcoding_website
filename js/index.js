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

function addclass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        var newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
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

window.onscroll = function() {
    topScroll = document.body.scrollTop; //滚动的距离,距离顶部的距离
    var index_nav = document.getElementById("index_nav");
    if (topScroll >= 30) {
        addclass(index_nav, "top_nav_collapse");
    } else {
        removeclass(index_nav, "top_nav_collapse");
    }
    var top = document.getElementById("top");
    if (topScroll != 0) {
        top.style.display = 'block';
    } else {
        top.style.display = 'none';
    }

}
addLoadEvent(slide_top);