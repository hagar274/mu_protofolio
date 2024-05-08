// function myMenuFunction(){
//     var menuBth = document.getElementById("myNavMenu");

//     if(menuBth.className === "nav-menu"){
//         menuBth.className += "responsive";
//     }
//     else{
//         menuBth.className = "nav-menu";
//     }
// }
// var typed = new typed(".text",{
//     Strings:["Frontend Developer", "Coder", "Designer"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:2000,
//     loop:true,
// });

    // dark mode
    const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");
    
    toggleSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark");
    });



// Show More
var div = document.getElementById('main');
var display = 0;

function hideShow(){
    if(display == 1){
        div.style.display = "block";
        display = 0;
    }
    else{
        div.style.display = "none";
        display = 1;
    }
}
// const content = document.querySelector('.content');
// const buttonShowMore = document.querySelector('.btncontainer .show-more');
// const buttonHide = document.querySelector('.btncontainer .hide');
// const button = document.querySelector('.btncontainer');
// const arrowIcon = document.querySelector('.btncontainer .fas');

// const initial = {
//     showAllContent: true, //value is true => show content
// };

// button.addEventListener('click',()=>{
//     // console.log('clicked');
//     const defaultValue = {
//         element: arrowIcon,
//         currentIcon: 'fa-chevron-down',
//         newIcon: 'fa-chevron-up',
//     };

//     //show content
//     if(initial.showAllContent){
//         showButton(buttonHide);
//         showButton(buttonShowMore, false);

//         content.classList.remove('gradient', 'maxHeight');
//     }
//     else{
//         showButton(buttonHide, false);
//         showButton(buttonShowMore);

//         defaultValue.currentIcon = 'fa-chevron-up';
//         defaultValue.newIcon = 'fa-chevron-down';
//         content.classList.add('gradient', 'maxHeight');
//     }

//     changeIcon(defaultValue);
//     initial.showAllContent = !initial.showAllContent;
// });

// function changeIcon(value){
//     const{element, currentIcon, newIcon} = value;

//     element.classList.add(newIcon);
//     element.classList.remove(currentIcon);
// }
// function showButton(button, visible = true){
//     !visible ? button.classList.add('d-none') : button.classList.remove('d-none');
// }