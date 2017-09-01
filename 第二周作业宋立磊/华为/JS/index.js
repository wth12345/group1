var objs=null;
var xhr= new XMLHttpRequest();
xhr.open("get","JSON/data.json",false);
xhr.onreadystatechange=function(){
    if (xhr.readyState==4&&/^2\d{2}$/.test(xhr.status)){
        objs=utils.toJsonParse(xhr.responseText);
    }
};
xhr.send(null);
var oUl=document.getElementById('list');
var str='';
for (var i = 0; i < objs.length; i++) {
    str+="<li> ";
    str+="<img src='"+objs[i].img+"' >";
    str+="<p>"+objs[i].title+"</p>";
    str+="<p>"+objs[i].time+"</p>";
    str+="<p>"+objs[i].hot+"</p>";
    str+="<p>"+objs[i].price+"</p>";
    str+="</li>"
}
oUl.innerHTML=str;