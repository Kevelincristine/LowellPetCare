const menu = document.querySelector(".menu-toggle");
const navmenu = document.querySelector(".nav-menu");
const icon = menu.querySelector("i");

menu.addEventListener("click",()=>{
  
    navmenu.classList.toggle("active");
    icon.classList.toggle("open");
})



const imagens =[
    "../IMG/img-aboutOne.png",
    "../IMG/img-aboutTwo.png",
    "../IMG/img-aboutThree.png"
];
let currentIndex = 0;

const imgElement = document.querySelector(".slider-image");
const LeftArrow = document.querySelector(".left");
const RightArrow = document.querySelector(".rigth");

RightArrow.addEventListener("click",()=>{
    currentIndex++;
 if ( currentIndex >=imagens.length){
    currentIndex = 0
 }  
imgElement.src = imagens[currentIndex];
});
LeftArrow.addEventListener("click",()=>{
    currentIndex--;

if(currentIndex< 0){
    currentIndex = imagens.length -1;

}
imgElement.src = imagens[currentIndex]
});

const comments = document.querySelectorAll(".comments");
let  current = 0;
function showNextComment(){
  

    comments[current].classList.remove('active');

    current = ( current + 1) % comments.length;
    
    comments[current].classList.add('active');
}
setInterval(showNextComment, 4000);