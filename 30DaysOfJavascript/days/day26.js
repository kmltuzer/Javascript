// import { countries } from "../others/countries.js";

// const showcase = document.querySelector('.showcase');
// for (let country of countries) {
//     country = country.toUpperCase();

//     const createDiv = document.createElement('div');
//     createDiv.setAttribute('class', 'country')

//     const createH2 = document.createElement('h2');

//     createH2.textContent = country;
//     createDiv.appendChild(createH2);
//     showcase.appendChild(createDiv);
// };
// document.querySelector('.sum').firstElementChild.textContent = countries.length;

// document.getElementById('btn-1').addEventListener('click', (e) => {

//     document.getElementById('btn-2').style.boxShadow = "inset 0 0 0 0 black";
//     document.getElementById('btn-1').style.boxShadow = "inset 0 0 2px 1px black";

//     const input  = document.querySelector('input');
//     input.addEventListener('input', (e) => {
//         let counter = 0;
//         let inputVal = e.target.value
//         for (let elem of document.querySelector('.showcase').querySelectorAll('div')) {
//             let h2Val = elem.firstElementChild.textContent.trim().toLowerCase();
//             h2Val === ""
//             if ( ( !h2Val.startsWith(inputVal) ) && (inputVal != "") ) {
//                 elem.style.display = "none";
//             } else{
//                 elem.style.display = "grid";
//                 counter += 1;
//             };
//         };
//         if (input.value == "") {
//             document.querySelector('.info').innerHTML = "";
//         } else {
//             const innerText = `Countries containing <span>${input.value}</span> are <span>${counter}</span>`;
//             document.querySelector('.info').innerHTML = innerText
//         }
//     });    
//     e.stopPropagation();
// });

// document.getElementById('btn-2').addEventListener('click', (e) => {

//     document.getElementById('btn-1').style.boxShadow = "inset 0 0 0 0 black";
//     document.getElementById('btn-2').style.boxShadow = "inset 0 0 2px 1px black";

//     const input  = document.querySelector('input');
//     input.addEventListener('input', (e) => {
//         let counter = 0;
//         let inputVal = e.target.value
//         for (let elem of showcase.querySelectorAll('div')) {
//             let h2Val = elem.firstElementChild.textContent.trim().toLowerCase();
//             h2Val === ""
//             if ( ( !h2Val.endsWith(inputVal) ) && (inputVal != "") ) {
//                 elem.style.display = "none";
//             } else{
//                 elem.style.display = "grid";
//                 counter += 1
//             };
//         };
//         if (input.value == "") {
//             document.querySelector('.info').innerHTML = "";
//         } else {
//             const innerText = `Countries containing <span>${input.value}</span> are <span>${counter}</span>`;
//             document.querySelector('.info').innerHTML = innerText;
//         }
//     });    
//     e.stopPropagation();
// });

// const countries_ = document.querySelectorAll('.country');

// document.getElementById('sort-btn').addEventListener('click', (e) => {
//     document.getElementById('btn-1').style.boxShadow = "inset 0 0 0 0 black";
//     document.getElementById('btn-2').style.boxShadow = "inset 0 0 0 0 black";
    
//     let textNodes = [];
//     for (let text of document.querySelectorAll('.country')) {
//         textNodes.push(text.textContent);
//     };
//     textNodes.reverse().forEach( (text, index) => {
//         document.querySelectorAll('.country')[index].innerHTML = `<h2>${text}</h2>`
//     })

// });