var res = null;
var xhr = new XMLHttpRequest();
xhr.open("get", "json/product.json", false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
        res = utils.toJSON(xhr.responseText);
    }
};
xhr.send(null);

function tian() {
    var str = "";
    var oUl = document.getElementById("ul1");
    for (var i = 0; i < res.length; i++) {
        str += "<li>";
        str += "<img src='" + res[i].img + "'>";
        str += "<p>" + res[i].title + "</p>";
        str += "<p>" + res[i].date + "</p>";
        str += "<p>" + res[i].price + "</p>";
        str += "<p>" + res[i].hot + "</p>";
        str += "</li>";
    }
    oUl.innerHTML = str;
}
tian();

var oLi1 = document.getElementById("jiage");
var oLi2 = document.getElementById("redu");
oLi1.onclick = function () {
    res.sort(function (a, b) {
        return a.price - b.price;
    });
    tian();
};
oLi2.onclick = function () {
    res.sort(function (a, b) {
        return a.hot - b.hot;
    });
    tian();
};