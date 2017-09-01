var utils = function () {
    function toJSON(str) {
        var obj = null;
        try{
            obj = JSON.parse(str);
        }catch (e){
            obj = eval("("+str+")");
        }
        return obj;
    }
    return {
        toJSON:toJSON
    }
}();