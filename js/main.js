function myMenuFunction(){
    var menuBth = document.getElementById("myNavMenu");

    if(menuBth.className === "nav-menu"){
        menuBth.className += "responsive";
    }
    else{
        menuBth.className = "nav-menu";
    }
}
    // dark mode
    const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");
    
    toggleSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark");
    });

var typed = new typed(".text",{
    Strings:["Frontend Developer", "Coder", "Designer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
});

// Show More
var row = document.querySelectorAll(".project-container.row");
var btn = document.querySelector(".btn");
var currentimg = 2

btn.addEventListener("click", function(){
    for(var i = currentimg; i< currentimg + 2; i++){
        if(row[i]){
            row[i].style.display = "block";
        }
    }
    currentimg += 2;

    if(currentimg >= row.length){
        event.target.style.display= "none";
    }
});