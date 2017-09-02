var utils = (function () {
    function listToArray(arg) {
        var ary = [];
        try {
            ary = [].slice.call(arg);
        } catch (e) {
            for (var i = 0; i < arg.length; i++) {
                ary[i] = arg[i];
            }
        }
        return ary;
    }

    function toJSON(str) {
        var obj = null;
        obj = "JSON" in window ? JSON.parse(str) : eval("(" + str + ")");
        return obj;
    }

    function offset(ele) {
        var l = ele.offsetLeft;
        var t = ele.offsetTop;
        var p = ele.offsetParent;
        while (p != document.body && p) {
            if (navigator.userAgent.indexOf("MSIE 8.0" == -1)) {
                l += p.clientLeft;
                t += p.clientTop;
            }
            l += p.offsetLeft;
            t += p.offsetTop;
            p = p.offsetParent;
        }
        return {
            l: l, t: t
        }
    }
    function win(attr,value){
        if(typeof value == "undefined"){
            return document.documentElement[attr]&&document.body[attr];
        }
        document.documentElement[attr] = value;
        document.body[attr] = value;
    }
    return {
        listToArray: listToArray,
        toJSON: toJSON,
        offset: offset,
        win:win
    }
})();
