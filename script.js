// **************** local reviews data *******
const reviews = [
    {
        id: 1,
        name: "Nadia Ali",
        job: "Frontend Developer",
        img: 
           "./Images/pro1.webp",

        text:
           "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas tenetur eius vitae sit eos unde nihil sunt voluptatem enim consequatur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, ratione?",
    },
    {
        id: 1,
        name: "Muhammad Danish",
        job: "Backend Developer",
        img: 
           "./Images/pro2.webp",

        text:
           "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas tenetur eius vitae sit eos unde nihil sunt voluptatem enim consequatur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, ratione?",
    },
    {
        id: 3,
        name: "Muhammad Hasnain",
        job: "Full Stack Developer",
        img: 
           "./Images/pro3.webp",

        text:
           "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas tenetur eius vitae sit eos unde nihil sunt voluptatem enim consequatur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, ratione?",
    },
    {
        id: 4,
        name: "Iqra Bibi",
        job: "Web Developer",
        img: 
           "./Images/pro4.webp",

        text:
           "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas tenetur eius vitae sit eos unde nihil sunt voluptatem enim consequatur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, ratione?",
    }
]

//************* sleact img, author, job and info ************
const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

//************* sleact pre, next and hero-btn ************
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const heroBtn = document.querySelector(".hero-btn");


//*********** * set starting item **************
let currentItem = 0;

//  ************ load initial item ***********
window.addEventListener("DOMContentLoaded", ()=>{
    ShowPerson(currentItem);
})

// ************* show next person **************
nextBtn.addEventListener("click", ()=>{
    currentItem++;
    if (currentItem >reviews.length - 1){
        currentItem = 0;
    }
    ShowPerson(currentItem);
})

// ************ show previous person **************8
prevBtn.addEventListener("click", ()=>{
    currentItem--;
    if (currentItem < 0){
        currentItem = reviews.length - 1;
    }
    ShowPerson(currentItem);
})

// ************ show random person **************
heroBtn.addEventListener("click", ()=>{
    currentItem = Math.floor(Math.random() * reviews.length);
    ShowPerson(currentItem);
})

// *********** show person based on item ***************8
function ShowPerson(person){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


