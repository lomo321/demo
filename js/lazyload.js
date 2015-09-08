/**
 * Created by jie on 2015/9/8.
 */
window.onload = function() {
    //function setImg(id){
    //    var parent = document.getElementById(id);
    //    var
    //}
    function getH(obj) {
        var h = 0;
        while(obj) {
            h += obj.offsetTop;
            obj = obj.offsetParent;
        }
        console.log(h);

        return h
    }
    getH(document.getElementById('7th'));
    window.onscroll=(function() {
        var li = document.getElementById('7th');
        return function(){
            var t =document.documentElement.clientHeight + (document.documentElement.scrollTop || document.body.scrollTop);
            console.log(t);

            var h = getH(li);
            if(h<t && li.children.length == 0) {
                var src = li.getAttribute('data-src');
                var oImg = document.createElement('img');
                oImg.src = src;
                li.appendChild(oImg);
            }
        }
    })();
};