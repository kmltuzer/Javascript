// DOM (DOCUMENT OBJECT MODEL)
    // * HTML document is structured as a JavaScript Object. 
    // * Every HTML element has a different properties which can help to manipulate it. 
    // * It is possible to get, create, append or remove HTML elements using JavaScript. 
    // * Selecting HTML element using JavaScript is similar to selecting using CSS. 
    // * To select an HTML element, we use tag name, id, class name or other attributes.

    // Getting Element
        // * We can access already created element or elements using JavaScript. 
        // * To access or get elements we use different methods.

        // Getting elements by tag name
            // getElementsByTagName() : 
                // * Takes a tag name as a string parameter and this method returns an HTMLCollection object.
                // * An HTMLCollection is an array like object of HTML elements.                                        (!)
                // * The length property provides the size of the collection.
                // * Whenever we use this method we access the individual elements using index or after loop through each individual items.         
                // * An HTMLCollection does not support all array methods therefore we should use regular for loop instead of forEach.              (!)

                // syntax :

                    // document.getElementsByTagName('tagname')

                // Example : 

                    // const allTitles = document.getElementsByTagName('h1')

                    // console.log(allTitles)                               //HTMLCollections
                    // console.log(allTitles.length)                        // 4
                    
                    // for (let i = 0; i < allTitles.length; i++) {
                    //   console.log(allTitles[i])                          // prints each elements in the HTMLCollection
                    // }

        // Getting elements by class name
            // getElementsByClassName() : 
                // * This method returns an HTMLCollection object. 
                // * An HTMLCollection is an array like list of HTML elements.                                                      (!)
                // * The length property provides the size of the collection. 
                // * It is possible to loop through all the HTMLCollection elements.

                // syntax :

                    // document.getElementsByClassName('classname')

                // Example :

                    // const allTitles = document.getElementsByClassName('title')

                    // console.log(allTitles)                               //HTMLCollections
                    // console.log(allTitles.length)                        // 4
                    
                    // for (let i = 0; i < allTitles.length; i++) {
                    //   console.log(allTitles[i])                          // prints each elements in the HTMLCollection
                    // }

        // Getting elements by id
            // getElementsById() : 
                // * Targets a single HTML element. We pass the id without # as an argument.

                // syntax :

                    // document.getElementsById('id')

                // Example :

                    // const id = document.getElementsById()('title')
                    // console.log(id)                                              // <h1>First Title</h1>                           

        // Getting elements by using querySelector methods
            // document.querySelector() :
                // * The method can select an HTML or HTML elements by tag name, by id or by class name.
                // * querySelector can be used to select HTML element by its tag name, id or class. 
                // * If the tag name is used it selects only the first element.

                // let firstTitle = document.querySelector('h1')                        // select the first available h1 element
                // let firstTitle = document.querySelector('#first-title')              // select id with first-title
                // let firstTitle = document.querySelector('.title')                    // select the first available element with class title

            // querySelectorAll() : 
                // * It can be used to select html elements by its tag name or class. 
                // * It returns a nodeList which is an array like object which supports array methods. 
                // * We can use for loop or forEach to loop through each nodeList elements.

                // const allTitles = document.querySelectorAll('h1')                    // selects all the available h1 elements in the page
                // console.log(allTitles.length)                                        // 4

                // for (let i = 0; i < allTitles.length; i++) {
                //      console.log(allTitles[i])
                // }

                // allTitles.forEach(title => console.log(title))
                // const allTitles = document.querySelectorAll('.title')                // the same goes for selecting using class

        // Adding Attribute
            // * An attribute is added in the opening tag of HTML which gives additional information about the element. 
            // * Common HTML attributes: id, class, src, style, href,disabled, title, alt.

            // const titles = document.querySelectorAll('h1')
            // titles[2].className = 'titleee'
            // titles[3].id = 'fourth-title'

            // console.log(document.querySelectorAll('h1'))

        // Adding attribute using setAttribute
            // setAttribute() : 
                // * This method set any html attribute. 
                // * It takes two parameters the type of the attribute and the name of the attribute. 
                // * Let's add class and id attribute for the fourth title.

                // const titles = document.querySelectorAll('h1')
                // titles[3].setAttribute('class', 'title')
                // titles[3].setAttribute('id', 'fourth-title')

        // Adding attribute without setAttribute
            // * We can use normal object setting method to set an attribute but this can not work for all elements. 
            // * Some attributes are DOM object property and they can be set directly. For instance id and class.

            // const titles = document.querySelectorAll('h1')
            // titles[3].className = 'titleee'
            // titles[3].id = 'fourth-title'

            // console.log(titles)

        // Adding class using classList
            // * The class list method is a good method to append additional class. 
            // * It does not override the original class if a class exists rather it adds additional class for the element.

            // const titles = document.querySelectorAll('h1')
            // titles[3].classList.add('titleee', 'header-title')

            // console.log(titles)

        // Removing class using remove
            // * Similar to adding we can also remove class from an element. 
            // * We can remove a specific class from an element.

            // const titles = document.querySelectorAll('h1')
            // titles[3].classList.remove('title')

            // console.log(titles)

        // Adding Text to HTML element                                                                                  (!)
            // * An HTML is a build block of an opening tag, a closing tag and a text content.
            // * We can add a text content using the property "textContent" or "innerHTML".

            // Adding Text content using textContent ;
                // * The textContent property is used to add text to an HTML element.

                // const titles = document.querySelectorAll('h1')
                // titles[3].textContent = 'Fourth Title'

            // Adding Text Content using innerHTML ;
                // * Most people get confused between textContent and innerHTML. 
                // * textContent is meant to add text to an HTML element, however innerHTML can add a text or HTML element or elements as a child.

                // Text Content ;
                    // * We assign textContent HTML object property to a text.

                    // const titles = document.querySelectorAll('h1')
                    // titles[3].textContent = 'Fourth Title'

                // innerHTML ; 
                    // * We use innerHTML property when we like to replace or a completely new children content to a parent element. 
                    // * Its value we assign is going to be a string of HTML elements.

                        //     const lists = `
                        //     <li>30DaysOfPython Challenge Done</li>
                        //             <li>30DaysOfJavaScript Challenge Ongoing</li>
                        //             <li>30DaysOfReact Challenge Coming</li>
                        //             <li>30DaysOfFullStack Challenge Coming</li>
                        //             <li>30DaysOfDataAnalysis Challenge Coming</li>
                        //             <li>30DaysOfReactNative Challenge Coming</li>
                        //             <li>30DaysOfMachineLearning Challenge Coming</li>`
                        //   const ul = document.querySelector('ul')
                        //   ul.innerHTML = lists

                    // * The innerHTML property can allow us also to remove all the children of a parent element. 
                    // * Instead of using removeChild(), I would recommend the following method.

                        // const ul = document.querySelector('ul')
                        // ul.innerHTML = ''

        // Adding Style                                                                                                             (!)
            // * The properties in css when we use it in JavaScript is going to be a camelCase. 
            // * The following CSS properties change from background-color to backgroundColor, font-family to fontFamily, margin-bottom to marginBottom.

            // Adding Style Color ;

                // const titles = document.querySelectorAll('h1')
                // titles.forEach((title, i) => {
                //   title.style.fontSize = '24px'                                  // all titles will have 24px font size
                //   if (i % 2 === 0) {
                //     title.style.color = 'green'
                //   } else {
                //     title.style.color = 'red'
                //   }
                // })

            // Adding Style Background Color ;

                // const titles = document.querySelectorAll('h1')
                // titles.forEach((title, i) => {
                //   title.style.fontSize = '24px' // all titles will have 24px font size
                //   if (i % 2 === 0) {
                //     title.style.backgroundColor = 'green'
                //   } else {
                //     title.style.backgroundColor = 'red'
                //   }
                // })

            // Adding Style Font Size ;

                // const titles = document.querySelectorAll('h1')
                // titles.forEach((title, i) => {
                //   title.style.fontSize = '24px' // all titles will have 24px font size
                //   if (i % 2 === 0) {
                //     title.style.fontSize = '20px'
                //   } else {
                //     title.style.fontSize = '30px'
                //   }
                // })

// EXERCISE 1 : Working with attributes

/*const paragraph = document.querySelector("p").textContent;
console.log(paragraph);
*/

/*const paragraphs = document.querySelectorAll("P");
paragraphs.forEach( (tag, index) => console.log(tag.textContent) );
*/

/*const paragraphs = document.querySelectorAll("P");
paragraphs[paragraphs.length - 1].textContent = "4th paragraph";
*/

/*const paragraphs = document.querySelectorAll("P");
paragraphs.forEach( (tag, index) =>  {
    tag.setAttribute('class', 'flex-row')
    tag.setAttribute('id', 'p' + (index + 1))
} );
console.log(paragraphs);
*/

// EXERCISE 2 : Working on style

/*const setAttr = document.querySelectorAll("div")
setAttr.forEach( (tag, index) => tag.setAttribute('class', 'flex-col-' + (index + 1) ) );

setAttr.forEach( tag => {
    +tag.className[tag.className.length - 1] % 2 === 0
        ? tag.style.color = 'green'
        : tag.style.color = 'red';
} )
*/

// EXERCISE 3 : Challenges schedule with a title

/* import { rgbGen, hexGen} from "../modules/modules.js"

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dateElement   = document.querySelector('.date')                           // The start of creating & modifying Date
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

const tasks = document.querySelector('.tasks').querySelectorAll('p')            // Modifying p elements
tasks.forEach( arg => {
    arg.textContent.includes('Done')
        ? arg.style.backgroundColor = 'green' 
        : arg.textContent.includes('Ongoing')
            ? arg.style.backgroundColor = 'yellow'
        : arg.style.backgroundColor = 'red'

} )
*/

