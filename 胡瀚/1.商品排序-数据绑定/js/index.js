var resData = null;
var xhr = new XMLHttpRequest();
xhr.open("get", "json/product.json", false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status))
        resData = utils.toJSON(xhr.responseText);
};
xhr.send(null);

var str = "";
var oUl = document.getElementById("block");
for (var i = 0; i < resData.length; i++) {
    str += "<li>";
    str += "<img src= '" + resData[i].img + "'>";
    str += "<p>" + resData[i].name + "</p>";
    str += "<p>" + resData[i].time + "</p>";
    str += "<p>" + resData[i].hot + "</p>";
    str += "<p>" + resData[i].price + "</p>";
    str += "</li>"
}
oUl.innerHTML = str;
