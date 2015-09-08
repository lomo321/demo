/**
 * Created by jie on 2015/9/4.
 */

require.config({
    paths: {
        "jquery": "./com/jquery",
        "velocity": "./com/velocity",
        "velocity-ui": "./com/velocity.ui"
    },
    shim: {
        "velocity": {
            deps: [ "jquery" ]
        },
        "velocity-ui":{
            deps: [ "velocity" ]
        }
    }
});

require(["jquery"],function( $ ){

    var motionON = function(){
        require(["velocity","velocity-ui"],function(Velocity){
            function loadBrand(){
                var sequence = [
                    {e:$('.line-left'),p:{translateY:'-200%'},o:{durantion:500}},
                    {e:$('.line-right'),p:{translateY:'200%'},o:{durantion:500,sequenceQueue:false}},
                    {e: $('.line-top'),p:{ translateX:'100%'}, o:{duration:500,}},
                    {e: $('.line-bottom'),p:{ translateX:'-100%'}, o:{duration:500, sequenceQueue:false}},
                    {e: $('.logo'),p:{ top:'0',opacity:1}, o:{duration:200}},
                ];

                for(var i=0;i<4;i++) {
                    sequence.push( {e: $('.menu-item')[i],p:{opacity:1},o:{duration:150}} );

                }
                $.Velocity.RunSequence(sequence);
            }
            loadBrand();
        })
    };
    motionON();
});