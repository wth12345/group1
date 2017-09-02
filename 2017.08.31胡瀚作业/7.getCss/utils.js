var utils = (function(){
    function getCss(ele, attr) {
        var res = null;
        if (typeof getComputedStyle == "function") {
            res = window.getComputedStyle(ele, null)[attr];
        } else {
            if (attr == "opacity") {
                res = ele.currentStyle.filter;
                var reg = /^alpha\(opacity\s*=\s*(\d+(?:\.\d+)?)\)$/;
                res = reg.test(res) ? RegExp.$1 / 100 : 1;

            } else {
                res = ele.currentStyle[attr];
            }
        }
        var reg = /^[+-]?(?:\d+(?:\.\d+)?)(?:px|pt|rem|em)?$/i;
        return reg.test(res) ? parseFloat(res) : res;
    }
    return {
        getCss:getCss
    }
})();