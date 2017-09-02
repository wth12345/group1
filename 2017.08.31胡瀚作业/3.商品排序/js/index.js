var resData = null;
var xhr = new XMLHttpRequest();
xhr.open("get", "json/product.json", false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)) {
        resData = utils.toJSON(xhr.responseText)
    }
};
xhr.send(null);

var oUl = document.getElementById("block");
var str = "";
for (var i = 0; i < resData.length; i++) {
    str += "<li data-time='"+resData[i].time+"' data-price='"+resData[i].price+"' data-hot='"+resData[i].hot+"'>";
    str += "<img src ='"+resData[i].img+"'>";
    str += "<p>"+resData[i].name+"</p>";
    str += "<p>"+resData[i].time+"</p>";
    str += "<p>"+resData[i].price+"</p>";
    str += "<p>"+resData[i].hot+"</p>";
    str += "</li>"
}
oUl.innerHTML = str;

var menu = document.getElementById("menu");
var linkA = document.getElementsByTagName("a");
for (var i = 0; i < linkA.length; i++) {
    linkA[i].index = i;
    linkA[i].flag = -1;
    linkA[i].onclick = function(){
        for (var j = 0; j < linkA.length; j++) {
            linkA[j]!=this?linkA[j].flag = -1:null;
        }
        this.flag*=-1;
        listSort.call(this);
    }
}

var oLis = oUl.getElementsByTagName("li");
var ary = utils.listToArray(oLis);
function listSort(){
    var that = this;
    var dataAry = ["data-time","data-price","data-hot"];
    ary.sort(function(a,b){
        console.log(a);
        a = a.getAttribute(dataAry[that.index]);
        b = b.getAttribute(dataAry[that.index]);
        a = a.replace(/-/g,"");
        b = b.replace(/-/g,"");
        return (a-b)*that.flag;
    });
    var frg = document.createDocumentFragment();
    for (var i = 0; i < ary.length; i++) {
        frg.appendChild(ary[i]);
    }
    oUl.appendChild(frg);
}