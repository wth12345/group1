var utils = (function () {
    function offset(ele){
        var l = ele.offsetLeft;
        var t = ele.offsetTop;
        var p = ele.offsetParent;
        if(navigator.userAgent.indexOf("MSIE 8.0") == -1){
            l += p.clientLeft;
            t += p.clientTop;
        }
        l += p.offsetLeft;
        t += p.offsetTop;
        p = p.offsetParent;
        return{
            l:l,
            t:t
        }
    }
    return {offset: offset}
})();
