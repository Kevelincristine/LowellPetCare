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

let visibleCount = 1; 

function updateVisibleCount() {
  if (window.innerWidth >= 768) {
    visibleCount = 2;
  } else {
    visibleCount = 1;
  }
}

function showTestimonials() {
  comments.forEach(c => c.classList.remove("active"));

  for (let i = 0; i < visibleCount; i++) {
    const index = (currentIndex + i) % comments.length;
    comments[index].classList.add("active");
  }
}

updateVisibleCount();
showTestimonials();

window.addEventListener("resize", () => {
  updateVisibleCount();
  showTestimonials();
});

setInterval(() => {
  currentIndex = (currentIndex + visibleCount) % comments.length;
  showTestimonials();
}, 5000);
