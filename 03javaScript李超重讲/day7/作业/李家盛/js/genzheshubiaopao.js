var imgs = document.getElementsByTagName("img")
var input = document.getElementsByTagName("input")
var l = true
document.onclick = function () {
    input[0].style.display = "none";
    if (l) {
        document.onmousemove = function (ev) {
            var ev = ev || window.event,
                w = imgs[0].width,
                h = imgs[0].height,
                m = w * imgs.length;

            for (var i = 0; i < imgs.length; i++) {
                imgs[i].style.top = ev.pageY + h - m + i * w + "px";
                imgs[i].style.left = ev.pageX + w - m + i * h + "px";

                if ((parseInt(imgs[i].style.left) <= 0)) {
                    ing = ((parseInt(imgs[i].style.left)));
                    imgs[i].style.left = -ing + "px";
                }
                if ((parseInt(imgs[i].style.top) <= 0)) {
                    ing = ((parseInt(imgs[i].style.top)));
                    imgs[i].style.top = -ing + "px";
                }
            }
        }
        l = false;
    } else {
        document.onmousemove = null;
        l = true;
    }
}