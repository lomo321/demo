/**
 * Created by jie on 2015/8/23.
 */
setTimeout(fn2,5000);
function fn2(){
    console.log('js2 done')
}
var script = document.createElement('script');
script.src = '../js/js3.js';
//document.getElementById("123").
document.head.appendChild(script);