/**
 * Created by jie on 2015/8/23.
 */
function fn(){setTimeout(fn1,5000);}
fn();
function fn1(){
    console.log('js1 done')
}