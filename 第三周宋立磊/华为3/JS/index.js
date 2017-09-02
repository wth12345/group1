var xhr = new XMLHttpRequest();
var jsonObj = {};
xhr.open("get", "JSON/data.json", false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
        jsonObj = utils.toJsonObj(xhr.responseText)
    }
}
xhr.send(null);
var str = '';
var oUl = document.getElementById("list");
for (var i = 0; i < jsonObj.length; i++) {
    str += "<li data-time='" + jsonObj[i].time + "' data-price='" + jsonObj[i].price + "' data.hot='" + jsonObj[i].hot + "'>";
    str += "<img src='" + jsonObj[i].img + "' >";
    str += "<p>" + jsonObj[i].time + "</p>";
    str += "<p>" + jsonObj[i].price + "</p>";
    str += "<p>" + jsonObj[i].hot + "</p>";
    str += "</li>";
}
oUl.innerHTML = str;
var menu = document.getElementById("menu");
var aList = menu.getElementsByTagName("a");
for (var i = 0; i < aList.length; i++) {
    aList[i].index = i;
    aList[i].flag = -1;
    aList[i].onclick = function () {
        for (var j = 0; j < aList.length; j++) {
            aList[j]!=this?aList[j].flag=-1:null;
        }
        this.flag*=-1;
        liSort.call(this)
    }
}
var oLis = oUl.getElementsByTagName("li");
var liAry = utils.toAry(oLis);
var attrAry = ["data-time", "data-price", "data.hot"];
function liSort() {
    var that=this;
    liAry.sort(function (pre,next) {
        pre = pre.getAttribute(attrAry[that.index]);
        next = next.getAttribute(attrAry[that.index]);
        pre = pre.replace(/-/g,'');
        next = next.replace(/-/g,'');
        return (pre-next)*that.flag;
    });
    var frg=document.createDocumentFragment();
    for (var i = 0; i < liAry.length; i++) {
        frg.appendChild(liAry[i]);
    }
    oUl.appendChild(frg);
}

