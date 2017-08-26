var utils = function () {
    function toJsonParse(str) {
        var jsonObj;
        try {
            jsonObj = JSON.parse(str);
        } catch (e) {
            jsonObj = eval("(" + str + ")")
        }
        return jsonObj;
    }

    return {
        toJsonParse: toJsonParse
    };
}();
