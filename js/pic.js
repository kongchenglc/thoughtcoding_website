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
window.onload = function b() {
    var load = document.getElementById("load");
    load.style.visibility = "hidden";
}