$(document).ready(function(){

    $("#contactbutton").on('click',contactClicked)
    $(".square").mousemove(function(event){
        $($("#clipping-1").children("circle")).attr("cx",event.offsetX);
        $($("#clipping-1").children("circle")).attr("cy",event.offsetY);
    })
    $(".square").mouseover(function(event){
        // $($(this).children("a")[0]).children("img").css({"clip-path": ""})
        $($(this).children("a")[0]).children("img").addClass("svgclipping")
    })
    $(".square").mouseout(function(event){
        // $($(this).children("a")[0]).children("img").css({"clip-path": ""})
        $($(this).children("a")[0]).children("img").removeClass("svgclipping")
    })

    $("#verticalNav").on('clicken',showVerticalNav);
})


function contactClicked(){
    $("main").empty();
    let contact = $("<div>").addClass("maindiv");
    contact.load("contact.html"); 
    $("main").append(contact);
}

function showVerticalNav() {
    var x = document.getElementById("mynav");
    if (x.className === "nav") {
    x.className += " responsive";
    } else {
    x.className = "nav";
    }
}