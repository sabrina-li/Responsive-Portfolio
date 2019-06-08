var isTouch=false;
$(document).ready(function(){
    //responsive nav
    $("#verticalNav").on('click',showVerticalNav);

    //links navigation on the site
    $("#contactbutton").on('click',contactClicked);
    $("#contactbutton").on('click',aboutClicked);
    $(document).on('click',".githubbutton",function(){
        var win = window.open("https://github.com/sabrina-li", '_blank');
        // win.focus();
    })
    $(document).on('click','.linkedninbutton',function(){
        var win = window.open("https://www.linkedin.com/in/sabrina-jingyue-li-1551708b/", '_blank');
        // win.focus();
    })
    $(document).on('click','.emailbutton',function(){
        var win = window.open('mailto:sabrinali0312@gmail.com', '_blank');
        // win.focus();
    })
    $("#resume").on('click',function(){
        var win = window.open("../assets/document/SabrinaLi.pdf", '_blank');
        // win.focus();
    })
    $('.openapp').click(function(e){
        var win = window.open($(this).attr("data"), '_blank');
        // win.focus();
    })

    $(window).on('touchstart',function(e){
        isTouch=true;
    })
    
    //go to the git hub repo when clicking on the square other than the open app
    $(".square").on('click',function(e){
        //if not hovering over the open app button
        if ($(this).find(".openapp:hover").length == 0){
            var win = window.open($(this).attr("data"), '_blank');
            // win.focus();
        }
    })


    //Hoever revewal animation
    //updating the c,y on mouse move over the squares
    $(".square").mousemove(function(event){
        $($("#clipping-1").children("circle")).attr("cx",event.offsetX);
        $($("#clipping-1").children("circle")).attr("cy",event.offsetY);
    })
    $(".square").mouseover(function(event){
        //if not hovering over the open app button
        if ($(this).find(".openapp:hover").length == 0){
            $(this).children("img").addClass("svgclipping");
        }
    })
    $(".square").mouseout(function(event){
        $(this).children("img").removeClass("svgclipping")
    })

    
})


function contactClicked(){
    $("main").empty();
    let contact = $("<div>").addClass("maindiv");
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