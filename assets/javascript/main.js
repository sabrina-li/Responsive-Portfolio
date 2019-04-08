$(document).ready(function(){

    $("#contactbutton").on('click',contactClicked)
    $(".square").mousemove(function(event){
        $($("#clipping-1").children("circle")).attr("cx",event.offsetX);
        $($("#clipping-1").children("circle")).attr("cy",event.offsetY);
    })
    $(".square").mouseover(function(event){
        // $($(this).children("a")[0]).children("img").css({"clip-path": ""})
        $(this).children("img").addClass("svgclipping")
    })
    $(".square").mouseout(function(event){
        // $($(this).children("a")[0]).children("img").css({"clip-path": ""})
        $(this).children("img").removeClass("svgclipping")
    })

    $("#verticalNav").on('click',showVerticalNav);
    $(".square").on('click',function(e){
        //TODO:detect touch screen
        // if ($(this).attr("data-lifted")){
            var win = window.open("https://sabrina-li.github.io/Word-Guess-Game", '_blank');
            win.focus();
        // }else{
        //     $(this).attr("data-lifted",true);
        // }
    })
})


function contactClicked(){
    $("main").empty();
    let contact = $("<div>").addClass("maindiv");
    contact.load("contact.html"); 
    $("main").append(contact);
}

function showVerticalNav() {
    $("#h1header").toggleClass("responsive");
    $("#mynav").toggleClass("responsive");
    // if (x.className === "nav") {
    // x.className += " responsive";
    // } else {
    // x.className = "nav";
    // }
}