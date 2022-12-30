// EVEN LISTENERS
    // * We can add event listener method to any DOM object.
    // * We use addEventListener() method to listen different event types on HTML elements.                                             (!)
    // * The addEventListener() method takes two arguments, an event listener and a callback function.                                  (!)
    // Common HTML events : 
        // -onclick
        // -onchange
        // -onmouseover
        // -onmouseout
        // -onkeydown
        // -onkeyup
        // -onload

    // syntax :

        // selectedElement.addEventListener('eventlistner', function(e) {
        //      the activity you want to occur after the event will be in here
        // })

        // OR

        // selectedElement.addEventListener('eventlistner', e => {
        //      the activity you want to occur after the event will be in here
        // })

    // Click
        // * To attach an event listener to an element, first we select the element then we attach the addEventListener method. 
        // * The event listener takes event type and callback functions as argument.

        // Example :

            // const button = document.querySelector('button')
            // button.addEventListener('click', e => {
            //   console.log('e gives the event listener object:', e)
            //   console.log('e.target gives the selected element: ', e.target)
            //   console.log(
            //     'e.target.textContent gives content of selected element: ',
            //     e.target.textContent
            //   )
            // })

        // * An event can be also attached directly to the HTML element as inline script.

            // Example : onclick

                // <button onclick="clickMe()">Click Me</button>
                // <script>
                //   const clickMe = () => {
                //     alert('We can attach event on HTML element')
                //   }
                // </script>

    // Double Click
        // * To attach an event listener to an element, first we select the element then we attach the addEventListener method. 
        // * The event listener takes event type and callback functions as argument.

        // Example : dblclick

            // const button = document.querySelector('button')
            // button.addEventListener('dblclick', e => {
            //   console.log('e gives the event listener object:', e)
            //   console.log('e.target gives the selected element: ', e.target)
            //   console.log(
            //     'e.target.textContent gives content of selected element: ',
            //     e.target.textContent
            //   )
            // })

    // Mouse Enter
        // * To attach an event listener to an element, first we select the element then we attach the addEventListener method. 
        // * The event listener takes event type and callback functions as argument.

        // Example : mouseenter

            // const button = document.querySelector('button')
            // button.addEventListener('mouseenter', e => {
            //   console.log('e gives the event listener object:', e)
            //   console.log('e.target gives the selected element: ', e.target)
            //   console.log(
            //     'e.target.textContent gives content of selected element: ',
            //     e.target.textContent
            //   )
            // })

    //  The most common important events list :

        // click - when the element clicked
        // dblclick - when the element double clicked
        // mouseenter - when the mouse point enter to the element
        // mouseleave - when the mouse pointer leave the element
        // mousemove - when the mouse pointer move on the element
        // mouseover - when the mouse pointer move on the element
        // mouseout -when the mouse pointer out from the element
        // input -when value enter to input field
        // change -when value change on input field
        // blur -when the element is not focused
        // keydown - when a key is down
        // keyup - when a key is up
        // keypress - when we press any key
        // onload - when the browser has finished loading a page

        // const btn = document.querySelector('.name')
        // btn.addEventListener('keypress', event => {
        //     console.log(event)
        //     console.log(event.target)
        //     console.log(event.target.textContent)
        // })

    // Getting Value From An Input Element                                                                                              (!)
        // * We usually fill forms and accept some datas.
        // * Form fields are created using input HTML element. 
        // * Let us build a small application which allow us to calculate body mas index of a person using two input fields, one button and one p tag.

        // const mass = document.querySelector('#mass')
        // const height = document.querySelector('#height')
        // const button = document.querySelector('button')
  
        // let bmi;
        // button.addEventListener('click', () => {
        //   bmi = mass.value / height.value ** 2
        //   alert(`your bmi is ${bmi.toFixed(2)}`)
        //   console.log(bmi)
        // })

        // const name_ = document.querySelector('.name').querySelector('input')
        // const lastname = document.querySelector('.lastname').querySelector('input')
        // const button = document.querySelector('.btn')

        // button.addEventListener('click', () => {
        //     let fullName = `Your fullname is ${name_.value} ${lastname.value}`;
        //     console.log(fullName)
        // })

    // Input Event and Change
        // * In the above example, we managed to get input values from two input fields by clicking button. 
        // * How about if we want to get value without click the button. 
        // * We can use the change or input event type to get data right away from the input field when the field is on focus. 
        // * Let us see how we will handle that.

            // const input = document.querySelector('input')
            // const p = document.querySelector('.output')
    
            // input.addEventListener('input', e => {
            //   p.textContent = e.target.value
            // })

    // Blur Event
        // * In contrast to input or change, the blur event occur when the input field is not on focus.

        // const input = document.querySelector('input')
        // const p = document.querySelector('p')

        // input.addEventListener('blur', (e) => {
        //     input.style.borderColor = 'red';
        // })

    // Keypress, Keydow and Keyup
        // * We can access all the key numbers of the keyboard using different event listener types. 
        // * Let us use keypress and get the keyCode of each keyboard keys.

            // document.body.addEventListener('keypress', e => {
            //     alert(e.keyCode)
            // })

// EXERCISE 1 : Build a webpage called number generator and style it

/*import { isPrime } from "../modules/modules.js";

const getInput = document.querySelector('.search').querySelector('input');
getInput.addEventListener('input', () => {
    const p = document.querySelector('.error');
    p.style.color = "#d62828";
    if ( isNaN(getInput.value) ) {
        p.textContent = "*The value your typed must be a number!"
    } else {
        p.textContent = "";
    }
})

const searchButton  = document.querySelector('.search-btn');
searchButton.addEventListener('click', () => {

    document.body.removeChild(document.querySelector('.box-container'));
    const newContainer = document.createElement('section');
    newContainer.setAttribute('class', 'box-container grid');
    document.body.appendChild(newContainer);

    const getInputValue = +document.querySelector('.search').querySelector('input').value;
    if (!isNaN(getInputValue)) {
        for (let i = 0; i <= getInputValue; i++) {                
            const newElem = document.createElement('div');
            newElem.textContent = i;
            newElem.style.color = 'whitesmoke'
            newElem.style.fontSize = "2rem";
            newElem.style.padding = '2rem';
            i % 2 === 0
                ? newElem.style.backgroundColor = "#6a994e"
                : (i % 2 === 1) && ( !isPrime(i) )
                    ? newElem.style.backgroundColor = "#d62828"
                    : isPrime(i)
                        ? newElem.style.backgroundColor = "#ffbd00" : 'none';
            newContainer.appendChild(newElem);
        };    

    };

} );
*/

// EXERCISE 2 : Show the keys on the browser

/*const h1 = document.querySelector('.text').querySelector('h1');
const span = document.querySelector('.text').querySelector('.key');
const setUnicode = document.querySelector('.unicode');

window.onload = () => {
    h1.textContent = "Press any key on the keyboard"
    setUnicode.style.visibility = "hidden";
}
window.addEventListener('keyup', (ev) => {
    setUnicode.style.visibility = "visible";
    h1.textContent = "You clicked"
    span.textContent = ev.key;
    setUnicode.textContent = ev.keyCode;
});
*/

// SOME CONSIDERABLE METHOD & EVENTS :

                        // Getting Elements
// console.log(document.querySelector('title').outerText);
// console.log(document.querySelector('li:nth-child(3)').textContent);
// console.log(document.querySelector('ul').firstElementChild);
// console.log(document.querySelector('ul').parentElement);
// console.log(document.querySelector('ul').children[2].nextElementSibling);
// nodeType 1 : element
// nodeType 2 : attribute
// nodeType 3 : text 
                        // Creating & Removing Elements
// .remove()
// .removeChild()
// .removeAttribute()
// .createElement()
                        // Replacing & Other Operations on Elements
// .replaceElement()
// .replaceChild(new, old)
// .replaceWith()

// .classList.add()
// .classList.remove()

// .getAttribute()
// .setAttribute()
// .hasAttribute()
// .className
                        // To Prevent <a> Tags From Directing Another Page or Refreshing the Page

// .preventDefault()                                                                                                    (!)

                        // To get the position of the mouse | Event Listeners
// event.offsetX
// event.offsetY
                        // To Deal With the Cutting or Pasting of A Text Over An Input | Event Listener 
// .addEventListener('cut', (e) => {  codes  } )
// .addEventListener('paste', (e) => {  codes  } )
// .addEventListener('select', (e) => {  codes  } )
// .addEventListener('change', (e) => {  codes  } )                         <-- When an option in a select box is changed

                        // To Prevent Event Bubling from inside to outside
// .addEventListener('click', (e) => {
//     e.stopPropagation();
// })                                                                       <-- Use it for each elements that they are have a click event
                        // Get Event Capturing from outside to inside
// .addEventListener('click', (e) => {
//     some codes here
// }, true)                                                  <-- Use it for each elements that they are have a click event

