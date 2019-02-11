function protClicked(){
    $("#bio-main").load("portfolio.html"); 
    var x = document.getElementById("mynav");
    x.className = "nav";
    
}

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


