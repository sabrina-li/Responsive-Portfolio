// function protClicked(){
//     $("#bio-main").load("portfolio.html"); 
//     var x = document.getElementById("mynav");
//     x.className = "nav";
//     console.log("here")
//     $("#square").mouseover(function(event){
//         console.log(event);
//     } )
// }

function contactClicked(){
    $("#bio-main").load("contact.html"); 
    var x = document.getElementById("mynav");
    x.className = "nav";
}

function showVerticalNav() {
    var x = document.getElementById("mynav");
    if (x.className === "nav") {
    x.className += " responsive";
    } else {
    x.className = "nav";
    }
}


$(document).ready(function(){
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

})