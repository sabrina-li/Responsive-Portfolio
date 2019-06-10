// /* for scroll animation */
// .blurry {
//     /* font-size: 20px; */
//     color: transparent;
//     /* text-shadow: 0 0 5px rgba(0,0,0,0.5); */
//     text-shadow: 0px 0px 5px white;
//     box-shadow: inset 0px 0px 20px 0px black;
//  }


// let count = 0;
$(document).ready(function(){
    // console.log(win)

    $(window).on("scroll",function(){
        if(window.innerWidth >=640){
            //TODO: test performance on win
            let scrollY = window.scrollY;
            let innerHeigh = window.innerHeight;

            if(scrollY<500){
                $(".mainaboutdiv").removeAttr("style");
                $(".aboutright").removeAttr("style");
                $("#bio-statement").removeAttr("style");
                $("#bio-image").removeAttr("style");
                // $("#bio-statement").css("transform","translateY("+scrollY+"px)");
                $(".mainaboutdiv").css("transform","translateY("+scrollY+"px)");
                $(".aboutright").css("transform","translateY(-"+scrollY+"px)");

            }else if(scrollY<innerHeigh+500){
                scrollY = window.scrollY-500;
                // document.querySelector('#bio-statement').style.textShadow = "0px 0px "+scrollY/10+"px white";
                $("#bio-statement").css({
                    "color":"transparent",
                    "text-shadow": "0px 0px "+scrollY/20+"px white",
                    "transform":"scale("+(1+scrollY/innerHeigh)+")",
                    "opacity":1-scrollY/innerHeigh*2.5
                });

                $("#bio-image").css({
                    "opacity":1-scrollY/innerHeigh*3,
                    // "transform":"scale("+(1+scrollY/innerHeigh)+") ",
                    "transform":"translate3d(-"+scrollY/innerHeigh*600+"px, -"+scrollY/innerHeigh*600+"px, "+scrollY/innerHeigh*30+"px)"
                });
            }

        }
    });
});