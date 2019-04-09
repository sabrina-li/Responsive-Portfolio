// /* for scroll animation */
// .blurry {
//     /* font-size: 20px; */
//     color: transparent;
//     /* text-shadow: 0 0 5px rgba(0,0,0,0.5); */
//     text-shadow: 0px 0px 5px white;
//     box-shadow: inset 0px 0px 20px 0px black;
//  }


let count = 0;
$(document).ready(function(){
    // console.log(win)
    
    $(window).on('scroll',function(e){
        if(window.innerWidth >=640){
            //TODO: test performance
            let scrollY = window.scrollY;
            let innerHeigh = window.innerHeight;
    
            if(scrollY<50){
                $("#bio-statement").removeAttr('style');
                $("#bio-image").removeAttr('style');
                $("#bio-statement").css("transform","translateY("+scrollY+"px)");
                $("#bio-image").css("transform","translateY("+scrollY+"px)");
            }else if(scrollY>130 && scrollY<innerHeigh/2){
                scrollY = window.scrollY-120;
                // document.querySelector('#bio-statement').style.textShadow = "0px 0px "+scrollY/10+"px white";
                $("#bio-statement").css({
                    "color":"transparent",
                    "text-shadow": "0px 0px "+scrollY/20+"px white",
                    "transform":"scale("+(1+scrollY/innerHeigh)+") translateY(50px)",
                    "opacity":1-scrollY/innerHeigh*2.5
                })
                
                $("#bio-image").css({
                    "opacity":1-scrollY/innerHeigh*3,
                    "transform":"scale("+(1+scrollY/innerHeigh)+") translateY(50px)",
                })
            }
                
                
                
        
        }
    })

})