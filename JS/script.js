const menu = document.querySelector(".menu-toggle");
const navmenu = document.querySelector(".nav-menu");
const icon = menu.querySelector("i");

menu.addEventListener("click",()=>{
  
    navmenu.classList.toggle("active");
    icon.classList.toggle("open");
})