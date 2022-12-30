// MANIPULATING DOM OBJECT

    // Creating an Element
        // document.createElement() :
            // * To create an HTML element we use tag name. 
            // * Creating an HTML element using JavaScript is very simple and straight forward. 
            // * The method takes an HTML element tag name as a string parameter.

            // syntax :

                // document.createElement('tagname')

            // Example :

                // let title = document.createElement('h1')
                // title.className = 'title'
                // title.style.fontSize = '24px'
                // title.textContent = 'Creating HTML element DOM Day 2'

                // console.log(title)

    // Creating Elements                                                                                                (!)
        // * To create multiple elements we should use loop. 
        // * Using loop we can create as many HTML elements as we want. 
        // * After we create the element we can assign value to the different properties of the HTML object.

        // let title;
        // for (let i = 0; i < 3; i++) {
        //     title = document.createElement('h1')
        //     title.className = 'title'
        //     title.style.fontSize = '24px'
        //     title.textContent = i
        //     console.log(title)
        // }

    // Appending Child To A Parent Element                                                                                  (!)
        // appendChild() :
            // * To see a created element on the HTML document we should append it to the parent as a child element. 
            // * We can access the HTML document body using document.body. 
            // * The document.body support the appendChild() method.

            // let title;
            // for (let i = 0; i < 3; i++) {                            // creating multiple elements and appending to parent element
            //     title = document.createElement('h1')
            //     title.className = 'title'
            //     title.style.fontSize = '24px'
            //     title.textContent = i
            //     document.body.appendChild(title)
            // }
            // console.log(document.querySelectorAll('.title'))

    // Removing A Child Element From A Parent Node
        // removeChild() : 
            // * After creating an HTML, we may want to remove element or elements and we can use the removeChild() method.

            // const ul = document.querySelector('ul')
            // const lists = document.querySelectorAll('li')
            // for (const list of lists) {
            //     ul.removeChild(list)
    
            // }

            // * As we have seen in the previous section, the better way is to eliminate them is using innerHTML.

// EXERCISE 1 : Create 100 elements whose backgrounds change depending on whether the number is even, odd or prime

/*import { isPrime } from "../modules/modules.js"

const boxContainer = document.querySelector('.container')
for (let i = 0; i < 100; i++) {
    let createElement = document.createElement("div");
    createElement.setAttribute('class', 'flex');
    i % 2 === 0
        ? createElement.style.backgroundColor = '#6a994e'
        : !isPrime(i) && (i % 2 === 1)
            ? createElement.style.backgroundColor = '#ffbd00'
            : isPrime(i)
                ? createElement.style.backgroundColor = '#d62828'
        :"none";

    createElement.style.display = "grid"
    createElement.style.padding = "2rem";
    createElement.textContent = i;
    boxContainer.appendChild(createElement);
}

// console.log(isPrime(43));
*/

// EXERCISE 2 : List all countries in a suitable way

// import { countries } from "../others/countries.js"

// const countriesContainer = document.querySelector('.countries');

// for (let index in countries) {
//     let country = document.createElement('div');
//     country.style.display = 'flex';
//     country.style.alignItems = 'center';
//     country.style.justifyContent = 'center';
//     country.style.border = '2px solid #ddd';
//     country.style.padding = '3rem';
//     country.style.whiteSpace = 'nowrap';
//     country.textContent = countries[index];
//     countriesContainer.appendChild(country);
// }
// document.querySelector('.sum').textContent += countries.length;

// EXERCISE 3 : 

/* import { bychance, hexGen } from "../modules/modules.js";

console.time('process')

const taskContainer = document.querySelector('.tasks').querySelectorAll('.task');                   // Dealing with tasks, wheter they are done or not
taskContainer.forEach( (task, index) => {
    let isDone = task.querySelector('.process').textContent.includes('Done');
    let onGoing = task.querySelector('.process').textContent.includes('Ongoing');
    isDone
        ? task.style.backgroundColor = '#6a994e'
        : onGoing
            ? task.style.backgroundColor = '#ffb703' 
        : (task.style.backgroundColor = '#ef233c') && ( () => {
                    let str = task.querySelector('a').textContent;
                    let createElement = document.createElement('p');
                    task.removeChild(taskContainer[index].querySelector('a'));
                    task.insertBefore(createElement, task.firstChild).textContent = str;
                
        } )();        
} )


const getDetails = document.querySelectorAll('details');
let keys = [];
getDetails.forEach( (arg) => {
    arg.querySelectorAll('p').forEach( elem => {
        keys.push(elem.textContent);
    } );
} );

let counter = 0;                                                                // Random selections on keywords
while (counter !== keys.length) {
    let randomKw = keys.splice(keys[bychance(0, keys.length-1)], 1)
    let getContainer = document.querySelector('.keys')
    let newElement = document.createElement('p');
    newElement.style.backgroundColor = hexGen();
    newElement.style.padding = "0.5rem 1rem";
    newElement.style.fontWeight = "bold";
    newElement.style.borderRadius = '1rem';
    newElement.textContent = randomKw[0];
    getContainer.appendChild(newElement)

}

setInterval( () => {
    const getYear = document.querySelector('.year')
    getYear.style.transition = "ease 0.5s"
    getYear.style.color = hexGen();

}, 1000 * 10 )

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dateElement   = document.querySelector('.date');
dateElement.style.transition = 'ease 0.2s';
dateElement.style.padding = "0.5rem";

setInterval( () => {
    dateElement.style.backgroundColor = hexGen();
    let getDate     = new Date();                                         
    let getYear     = getDate.getFullYear(); 
    let getMonth    = monthNames[getDate.getMonth()];
    let getDay      = getDate.getDay();
    let getHour     = getDate.getHours();
    let getMinutes  = getDate.getMinutes();
    let getSeconds  = getDate.getSeconds();
    let dateArr = [getMonth, getDay, getHour, getMinutes, getSeconds];
    dateArr.forEach( (arg, index) => arg < 10 ? dateArr[index] = '0' + `${arg}` : arg );

    const modifyDate = `${dateArr[0]} ${dateArr[1]}, ${getYear} ${dateArr[2]}:${dateArr[3]}:${dateArr[4]}`;      
    document.querySelector(".date").textContent = modifyDate;
    
}, 1000 )                                                                   // the end of creating & modifying Date


console.timeEnd('process')
*/