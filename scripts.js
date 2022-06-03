const right_btn = document.querySelector('#right_btn');
const left_btn = document.querySelector('#left_btn');                
const img = document.querySelector('#img_container');

let pictures = ["images/certificate1.jpg", "images/certificate2.jpg", "images/certificate3.jpg"];
img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

right_btn.addEventListener("click", moveRight);
left_btn.addEventListener("click", moveLeft);


const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const menu_btn = document.querySelector(".nav_svg")
const nav_div = document.querySelector(".navigation")

menu_btn.addEventListener('click', ()=> {
  nav_div.classList.toggle("nav_active")
})