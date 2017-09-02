var utils=function(){
    function offset(ele){
        var t=ele.offsetTop;
        var l=ele.offsetLeft;
        var p=ele.offsetParent;
        while (p){
            if (window.navigator.userAgent.indexOf("MSIE 8.0")==-1){
                t+= p.clientTop;
                l+= l.clientLeft;
            }
            t+=p.offsetTop;
            l+= l.offsetLeft;
            p= p.offsetParent;
        }
        return {t:t,p:p}
    }

    function win(attr,value){
        if(typeof value=="undefined"){
            return document.documentElement[attr]||document.body[attr];
        }else {
            document.documentElement[attr]=value;
            document.body[attr]=value;
        }
    }
    return{offset:offset,win:win}
}()
