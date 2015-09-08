/**
 * Created by jie on 2015/9/7.
 */
var single = (function() {
    //对单例的引用
    var unique;
    //判断单例是否已经存在
    function getInstance() {
        if(unique===undefined) {
            unique = new Construct();
        }
        return unique;
    }
    //构造函数
    function Construct() {
        //构造函数
    }
    //返回获取单例子的方法
    return {
        getInstance:getInstance
    }
})();

var a = single.getInstance();