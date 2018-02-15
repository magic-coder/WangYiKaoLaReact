/*为了将rem转化为px 自适应各种大小屏幕*/
(function( window, document ){

    var rem = {};

    rem.px2rem = function(px,designWidth){
        /*这个方法是在js里要使用到px时，转化为对应的rem，不过我没有用到*/
        if( !designWidth ){
            designWidth = parseInt(rem.designWidth , 10);
        }
        return parseInt(px,10)*320/designWidth/20;
    }

    rem.setSize = function (){
        var innerWidth = document.documentElement.getBoundingClientRect().width || window.innerWidth;

        if(rem.maxWidth && (innerWidth/rem.dpr > rem.maxWidth) ){
            innerWidth = rem.maxWidth*rem.dpr;
        }

        if( !innerWidth ){
            return false;
        }

        document.documentElement.style.fontSize = ( innerWidth*20/320 ) + 'px';

        rem.callback && rem.callback();

    };

    /*进入页面调用一次，设置px值*/
    rem.setSize();

    window.addEventListener('resize',function(){
        clearTimeout(rem.tid);
        rem.tid = setTimeout(rem.setSize , 33);
    } , false);
    /*绑定resize时调用*/

    window.addEventListener('load' , rem.setSize , false);
    //防止不明原因的bug，load之后再调用一次。

    setTimeout(function(){
        rem.setSize();
        //防止某些机型怪异现象，异步再调用一次
    },333);

    window.rem = rem;

}) (window , document);