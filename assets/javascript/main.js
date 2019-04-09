$(document).ready(function(){

    $("#contactbutton").on('click',contactClicked);
    
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

    $('.openapp').mouseover(function(e){
        $(this).children("img").removeClass("svgclipping")
    })
    $('.openapp').click(function(e){
        var win = window.open($(this).attr("data"), '_blank');
        win.focus();
    })

    $("#verticalNav").on('click',showVerticalNav);
    $("#githubbutton").on('click',function(){
        var win = window.open("https://github.com/sabrina-li", '_blank');
        win.focus();
    })
    $("#linkedninbutton").on('click',function(){
        var win = window.open("https://www.linkedin.com/in/sabrina-jingyue-li-1551708b/", '_blank');
        win.focus();
    })
    $("#emailbutton").on('click',function(){
        var win = window.open('mailto:sabrinali0312@gmail.com', '_blank');
        win.focus();
    })
    $("#resume").on('click',function(){
        var win = window.open("../assets/document/SabrinaLi.pdf", '_blank');
        win.focus();
    })

    


    $(".square").on('click',function(e){
        //TODO:detect touch screen
        //if not hovering over the open app button
        if ($(this).find(".openapp:hover").length == 0){
        // if ($(this).attr("data-lifted")){
            var win = window.open($(this).attr("data"), '_blank');
            win.focus();
        // }else{
        //     $(this).attr("data-lifted",true);
        // }
        }
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
}