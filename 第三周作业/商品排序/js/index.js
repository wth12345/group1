var xhr = new XMLHttpRequest();
xhr.open("get", "json/product.json", false);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
        resData = utils.toJSON(xhr.responseText)
    }
};
xhr.send(null);

var oUl = document.getElementById("list");
for (var i = 0; i < resData.length; i++) {
    str += "<li data-time='" + resData[i].time + "' data-price='" + resData[i].price + "' data-hot='" + resData[i].hot + "'>";
    str += "<img src='" + resData[i].img + "'>";
    str += "<span>" + resData[i].title + "</span>";
    str += "<span>" + resData[i].time + "</span>";
    str += "<span>" + resData[i].hot + "</span>";
    str += "<span>￥" + resData[i].price + "</span>";
    str += "</li>"
}
oUl.innerHTML = str;

var menu = document.getElementById("menu");
var linkA = menu.getElementsByTagName("a");
for (var i = 0; i < linkA.length; i++) {
    linkA[i].index = i;
    linkA[i].flag = -1;
    linkA[i].onclick = function () {
        for (var j = 0; j < linkA.length; j++) {
            linkA[j] != this ? linkA[i].flag = -1 : null;

        }
        this.flag *= -1;
        listSort(this.index, this.flag);
    }
}

var oLis = oUl.getElementsByTagName("li");
var ary = utils.listToArray(oLis);
function listSort(n, flag) {
    var dataAry = ["data-time", "data-price", "data-hot"];
    ary.sort(function (cur, next) {
        var curA = cur.getAttribute(dataAry[n]);
        var nextB = next.getAttribute(dataAry[n]);
        curA = curA.replace(/-/g, "");
        nextB = nextB.replace(/-/g, "");
        return (curA - nextB) * flag;
    });

    var frg = document.createDocumentFragment();
    for (var i = 0; i < ary.length; i++) {
        frg.appendChild(ary[i]);
    }
    oUl.appendChild(frg);
}