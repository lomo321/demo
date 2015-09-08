
/**
 * Created by jie on 2015/9/6.
 */
function check() {
    var x2,y2;
    for(var x1=0;x1<5;x1++){
        for(var y1=0;y1<6;y1++) {
            x2=13-x1;
            y2=5-y1;
            for(var k=0;k<101;k++) {
                var n1=4-x1;
                if(k%n1==0){
                    var k2=k/n1;
                    var n2=9-x1;
                    for(var j=0;j<x1+1;j++){
                        if(n2%j==0) {
                            var j2=n2/j;
                            if(4==k-j*y1&&4==k2+j2-y2) {
                                console.log(x1+','+x2+','+k+','+j+','+y1+','+k2+','+j2+','+y2)
                            }
                        }
                    }
                }
            }
        }
    }
}

function grayCode(n) {
    if(n<1) return;
    if(n==1) return [0,1];
    var array = grayCode(n-1);
    var newArray =[];
    var a=0;
    for(var i=0;i<array.length;i++) {

        var k1 = (array[i]<<1)|a;
        if(a==1) {
            a=0;
        } else {
            a=1;
        }
        var k2 = (array[i]<<1)|(a);
        newArray.push(k1);
        newArray.push(k2);
    }
    return newArray;
}
for(var i=0;i<grayCode(4).length;i++){
    parseInt(grayCode[i]).toString(2);
}