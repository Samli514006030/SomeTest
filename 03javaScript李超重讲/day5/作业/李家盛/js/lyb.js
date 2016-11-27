

var t1 = document.getElementById("t1");
var d2 = document.getElementById("d2");
var d3 = document.getElementById("d3");
var btn = document.getElementById("btn");
var btn1 = document.getElementById("btn1");
var imgs = d3.getElementsByTagName("img")

t1.focus();
btn.onclick = function () {
    if (t1.value == "") {
        alert("回复不能为空")
        return false;
    }
    i++
    var p = document.createElement('p');
    p.innerHTML += "<p style='margin-bottom: 20px'>" + i + "楼" + t1.value + "</p>"
    p.style.borderBottom = "black dashed 1px"
    p.style.margin = "10px"
    d2.appendChild(p);
    t1.value = ""
}

btn.onmouseover = function () {
    this.style.background = "white"
};
btn.onmouseout = function () {
    this.style.background = "orchid"

};

btn1.onclick = function () {
    if (d3.style.display == "none") {
        d3.style.display = "block";
    }
    else {
        d3.style.display = "none";
    }
}
btn1.onmouseover = function () {
    this.style.background = "white"
};
btn1.onmouseout = function () {
    this.style.background = "orchid"

};
for (i in imgs) {
    imgs[i].onclick = function () {
        t1.value += "<img src='../img/" + this.title + ".jpg'>";
        d3.style.display = "none";
        t1.focus();
    }
}
for (var i = 0; i < aSpan.length; i++) {
    aSpan[i].innerHTML = i + 1 + "楼" + "&nbsp";
    console.log(ta);
}