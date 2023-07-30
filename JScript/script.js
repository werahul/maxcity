const hamB = document.querySelector(".ham-icon");
const navMenu = document.querySelector(".nav-menu");

hamB.addEventListener("click", () => {
    hamB.classList.toggle("active")
    console.log("clicked")
    navMenu.classList.toggle("active")
})

const slide = document.querySelectorAll(".slide");


slide.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

let counter = 0;


// const prev = () =>{
//     counter --;
//     slideImg();

// }
// const next = () =>{
//     counter ++;
//     slideImg();
// }

const prev = () => {
    if (counter == 0) {
        counter = slide.length - 1;
        slideImg();
    } else {
        counter--;
        slideImg();
    }
}

const next = () => {
    if (counter == slide.length - 1) {
        counter = 0;
        slideImg();
    } else {
        counter++;
        slideImg();
    }
}

const slideImg = () => {
    slide.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

function swimImg() {
    let img = document.querySelector(".viweImg");
    img.setAttribute("src", "../Images/am/pool.jpg")
}
function cycleImg() {
    let img = document.querySelector(".viweImg");
    img.setAttribute("src", "../Images/am/cycle.jpg")
}
function yogaImg() {
    let img = document.querySelector(".viweImg");
    img.setAttribute("src", "../Images/am/yoga.jpg")
}
function hallImg() {
    let img = document.querySelector(".viweImg");
    img.setAttribute("src", "../Images/am/hall.jpg")
}
function clubImg() {
    let img = document.querySelector(".viweImg");
    img.setAttribute("src", "../Images/am/clubhouse.jpg")
}

let currDate = new Date().getFullYear()
document.getElementById("copyright").innerHTML = `Copyright © ${currDate} Proportunity`
// let buttons = document.querySelectorAll(".collapes-btn");
// for (let i =0; i<= buttons.length; i++){
//     buttons[i].addEventListener('click', function(){
//         let list = document.querySelector(".titleList");
//         list.classList.toggle("block")
//     })


// }
// function collapes(){



//     let list = document.querySelector(".titleList");

//     list.classList.toggle("block")





// }
let formBtn = document.getElementById("form-btn");
let form = document.querySelector(".form-pop");
function openForm() {
    form.classList.add("openPop")
}
function closeForm() {
    form.classList.remove("openPop")
}
