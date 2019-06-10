function contactClicked(){
    $("main").empty();
    const contact = $("<div>").addClass("maindiv");
    contact.load("contact.html");
    $("main").append(contact);
}
function aboutClicked(){
    window.location.href = "about.html";
}

function showVerticalNav() {
    // $("#h1header").toggleClass("responsive");
    // $("#mynav").toggleClass("responsive");
    $("#myheader").toggleClass("responsive");
}

$(document).ready(function(){
    //responsive nav
    $("#verticalNav").on("click",showVerticalNav);

    //links navigation on the site
    $("#contactbutton").on("click",contactClicked);
    $("#contactbutton").on("click",aboutClicked);
    $(document).on("click",".githubbutton",function(){
        window.open("https://github.com/sabrina-li", "_blank");
        // win.focus();
    });
    $(document).on("click",".linkedninbutton",function(){
        window.open("https://www.linkedin.com/in/sabrina-jingyue-li-1551708b/", "_blank");
        // win.focus();
    });
    $(document).on("click",".emailbutton",function(){
        window.open("mailto:sabrinali0312@gmail.com", "_blank");
        // win.focus();
    });
    $("#resume").on("click",function(){
        window.open("../assets/document/SabrinaLi.pdf", "_blank");
        // win.focus();
    });
    $(".openapp").click(function(){
        window.open($(this).attr("data"), "_blank");
        // win.focus();
    });

    // let isTouch = false;
    $(window).on("touchstart",function(){
        isTouch=true;
    });

    //go to the git hub repo when clicking on the square other than the open app
    $(".square").on("click",function(){
        //if not hovering over the open app button
        if ($(this).find(".openapp:hover").length === 0){
            window.open($(this).attr("data"), "_blank");
            // win.focus();
        }
    });

    //Hoever revewal animation
    //updating the c,y on mouse move over the squares
    $(".square").mousemove(function(event){
        $($("#clipping-1").children("circle")).attr("cx",event.offsetX);
        $($("#clipping-1").children("circle")).attr("cy",event.offsetY);
    });
    $(".square").mouseover(function(){
        //if not hovering over the open app button
        if ($(this).find(".openapp:hover").length === 0){
            $(this).children("img").addClass("svgclipping");
        }
    });
    $(".square").mouseout(function(){
        $(this).children("img").removeClass("svgclipping");
    });
});