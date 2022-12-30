// function addInto(into, howmany) {
//     for (let index = 0; index < howmany; index++) {
//         const newElem = document.createElement('div');
//         newElem.setAttribute('class', 'item');
//         const getElem = document.querySelector(`${into}`)
    
//         getElem.appendChild(newElem);
//     };
// };

// addInto('.container', 20);
/*
const langObj  = {
    PANDAS      : "blue", 
    REDUX       : "hotpink", 
    JAVASCRIPT  : "yellow", 
    REACT       : "aqua", 
    NODE        : "green", 
    MANGODB     : "green", 
    PYTHON      : "blue",
    NUMPY       : "darkblue"
};

const infoBox = document.querySelector('.info-box');
const jobList   = ["Educator", "Programmer", "Developer", "Motivator", "Content Creator"];
let emoji = ["🌱", "💻", "🌎", "🔥", "📔"]
const newP = document.createElement('p');
const newSpan = document.createElement('span');
    newSpan.style.display = "inline-block";
    newSpan.style.animation = "2s slide-right 0.3s forwards";
    newSpan.style.transform = "translateX(0%)";
let footerSpan = document.createElement('span');
let getFooterP = document.querySelector('footer').querySelector('.text');

let index = 0;
function headerChildAppender () {
    newP.textContent = emoji[index];                // header
    newSpan.textContent = jobList[index];

    newP.appendChild(newSpan);
    newP.style.fontSize = "1.3rem";
    infoBox.appendChild(newP);
    index++
    
    if (index === (jobList.length) ) {
        index = 0;
    }
    
};

let counter = 0;
let key;
function footerChildAppender () {
    key = Object.keys(langObj)[counter];
    footerSpan.textContent = key;
    footerSpan.style.display = "inline-block";
    footerSpan.style.fontSize = "2rem";
    footerSpan.style.fontWeight = "bold";
    footerSpan.style.color = `${langObj[key]}`;
    footerSpan.style.opacity = "0";
    footerSpan.style.animation = "2s fade 0.3s forwards";

    getFooterP.appendChild(footerSpan);
    counter++
    counter === Object.keys(langObj).length
    ? counter = 0
    : "";
};

setInterval( () => {
    infoBox.innerHTML = "";
    headerChildAppender();
    footerChildAppender();
}, 3000 );
*/