var utils=function(){
    function toJsonObj(str){
        var obj={};
        try{
            obj=JSON.parse(str);
        }catch (e){
            obj=eval("("+str+")")
        }
        return obj;
    }
    function toAry(arg){
        var ary=[];
        try {
            ary=[].slice.call(arg);
        }catch (e){
            for (var i = 0; i < arg.length; i++) {
                ary[i] = arg[i];
            }
        }
        return ary;
    }

    return{
        toJsonObj:toJsonObj,
        toAry:toAry
    };
}();
