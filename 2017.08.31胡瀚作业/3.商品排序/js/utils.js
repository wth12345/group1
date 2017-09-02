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

    return {
        listToArray: listToArray,
        toJSON: toJSON
    }
})();
