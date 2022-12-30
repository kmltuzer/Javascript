// ARRAYS
    // * An array allows storing duplicate elements and different data types.
    // * An array can be empty.
    // * Arrays are non-primitive.

    // How to create an empty Array ;
        // syntax :
            // const arr = Array();
            // or
            // let arr = new Array();
            // or
            // let arr = [];
            // console.log(arr);         // []

    // How to create an array with values ;
        // const numbers = [0, 3.14, 9.81, 37, 98.6, 100]                               // array of numbers
        // const fruits = ['banana', 'orange', 'mango', 'lemon']                        // array of strings, fruits
        // const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']        // array of strings, vegetables
        // const animalProducts = ['milk', 'meat', 'butter', 'yoghurt']                 // array of strings, products
        // const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']   // array of web technologies
        // const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']      // array of strings, countries
                
        // console.log('Numbers:', numbers)
        // console.log('Number of numbers:', numbers.length)
        
        // console.log('Fruits:', fruits)
        // console.log('Number of fruits:', fruits.length)
        
        // console.log('Vegetables:', vegetables)
        // console.log('Number of vegetables:', vegetables.length)
        
        // console.log('Animal products:', animalProducts)
        // console.log('Number of animal products:', animalProducts.length)
        
        // console.log('Web technologies:', webTechs)
        // console.log('Number of web technologies:', webTechs.length)
        
        // console.log('Countries:', countries)
        // console.log('Number of countries:', countries.length)

        // const arr = [                            // An array can contain different data types
        //     'Asabeneh',
        //     250,
        //     true,
        //     { country: 'Finland', city: 'Helsinki' },
        //     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
        // ];
        // console.log(arr)

    // Modifying array element ;
        // const numbers = [1, 2, 3, 4, 5];
        // numbers[0] = 10;                     // changing 1 at index 0 to 10
        // numbers[1] = 20;                     // changing  2 at index 1 to 20
        
        // console.log(numbers)                 // [10, 20, 3, 4, 5]
        
        // const countries = [
        //   'Albania',
        //   'Bolivia',
        //   'Canada',
        //   'Denmark',
        //   'Ethiopia',
        //   'Finland',
        //   'Germany',
        //   'Hungary',
        //   'Ireland',
        //   'Japan',
        //   'Kenya'
        // ];
        // countries[0] = 'Afghanistan';                 // Replacing Albania by Afghanistan
        // let lastIndex = countries.length - 1;
        // countries[lastIndex] = 'Korea';               // Replacing Kenya by Korea
        
        // console.log(countries);

    // METHODS FOR ARRAYS
        // length
        // concat()             : Concatenates just two arrays      (e.g. myArr.concat(yourArr);)
        // indexOf()            : If a particular element exists it returns the index else it returns -1
        // lastIndexOf()
        // slice()              : Cuts out items and takes two parameters ; starting and ending position. It doesn't include the ending position.
        // splice()             : Takes three parameters ; starting position, number of items to be removed and number of items to be added.    (!)
        // join()               : Converts an array into a string by separating with the separator that we've typed as string in.               (!)
        // toString()           : Converts array to string.
        // includes()
        // Array.isArray()      : Checks if the data type is an array.
        // fill()               : Fills all the array with a static value or values that are typed in as a parameter.
        // push()               : Adds one or multiple item to the end of an array.
        // pop()                : Removes the item at the end of an array and optionally returns it.
        // shift()              : Removes the item at the beginning of an array and optionally returns it.
        // unshift()            : Adds one or multiple item to the beginning of an array.
        // reverse()            : Reverses the order of an array.
        // sort()        (!)    : Sorts items in an array by alphabetically or numerically (<- Add in it an arrow function so that it works numerically)

    // Array Constructor
        // To create an array ;
            // const eightEmptyValues = Array(8);        // it creates eight empty values       (!)
            // console.log(eightEmptyValues);            // [empty x 8]

    // Creating static values with fill ;
        // const arr = Array()                          // creates an an empty array
        // console.log(arr)

        // const eightXvalues = Array(8).fill('X')      // it creates eight element values filled with 'X'
        // console.log(eightXvalues)                    // ['X', 'X','X','X','X','X','X','X']

        // const eight0values = Array(8).fill(0)        // it creates eight element values filled with '0'
        // console.log(eight0values)                    // [0, 0, 0, 0, 0, 0, 0, 0]

        // const four4values = Array(4).fill(4)         // it creates 4 element values filled with '4'
        // console.log(four4values)                     // [4, 4, 4, 4]

    // Converting an array into string by using join() method ;
        // const numbers = [1, 2, 3, 4, 5]
        // console.log(numbers.join()) // 1,2,3,4,5
        
        // const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
        
        // console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
        // console.log(names.join('')) //AsabenehMathiasEliasBrook
        // console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
        // console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
        // console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook
        
        // const webTechs = [
        //   'HTML',
        //   'CSS',
        //   'JavaScript',
        //   'React',
        //   'Redux',
        //   'Node',
        //   'MongoDB'
        // ] // List of web technologies
        
        // console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
        // console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

    // Using of slice() method :
        // const numbers = [1,2,3,4,5];

        // console.log(numbers.slice())                             // it copies all item
        // console.log(numbers.slice(0))                            // it copies all item
        // console.log(numbers.slice(0, numbers.length))            // it copies all item
        // console.log(numbers.slice(1,4))                          // [2,3,4]  // it doesn't include the ending position

    // Using of splice() method :
        // const numbers = [1, 2, 3, 4, 5]
        // numbers.splice()
        // console.log(numbers)                             // -> remove all items

        // const numbers = [1, 2, 3, 4, 5]
        // numbers.splice(0,1)
        // console.log(numbers)                             // remove the first item

        // const numbers = [1, 2, 3, 4, 5, 6]
        // numbers.splice(3, 3, 7, 8, 9)
        // console.log(numbers)                             // -> [1, 2, 3, 7, 8, 9]        //it removes three item and replace three items
  

// EXERCISE 1 : Get the item in the middle of an array

/* let myArr = [1, 1, 2, 3, 4, 5, "A", true, null, "SX", "B", NaN];
let midItem = myArr[(myArr.length/2)-1];
console.log(midItem); */

// EXERCISE 2 :

/* let companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
let filter    = Array();

for (let i = 0; i < companies.length; i++){
    companies[i].toLowerCase().includes("o")
       ? filter.push(companies[i])
       : filter;
};

console.log(filter); */

// EXERCISE 3 :     Importing modules

/* import {countries} from "./countries.js";
import {web_techs} from "./web_techs.js";

console.log(countries_);
console.log(web_techs);     */

// EXERCISE 3 :     Removing all the punctuations and change the string to array 

/* let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
text = text.replace(/[.,\,]/g, "");
console.log(text);

let arr = text.split(" ");

console.log(arr.indexOf("empowering"));
arr.splice(4,1);

console.log(arr.indexOf("teach"));
arr.splice(6,1);

console.log(arr); */


// EXERCISE 4 :  Shopping Card 

/* let customer        = prompt("What would you like to get with your shopping card?");
let modifyCustomer  = customer.toLowerCase();
let shoppingCard    = ["milk", "honey", "tea", "coffee", "vegetables"];
let products        = ["honey", "sugar", "milk","meat", "olive", "potato chips", "nuts", "vegetables", "beverages", "crunch", "toys", "tea", "coffee"];
let productIndex    = shoppingCard.indexOf(modifyCustomer);
let customerCredit = 7000;
let askForChanges;

switch (true){
    case shoppingCard.includes(modifyCustomer) && products.includes(modifyCustomer) :
        shoppingCard.splice(productIndex, 1)
        customerCredit -= 300;
        console.log(`Thanks for buying ${customer}`, `Your balance : ${customerCredit}`)
        break;

    case (!shoppingCard.includes(modifyCustomer)) && (products.includes(modifyCustomer)) :
        console.log(`Your shopping card doesn't support to buy ${customer}`);
        console.log(`Ones in your shopping card\n[${shoppingCard}]`);

        askForChanges = prompt("Would you like to change any products in your card?");
        productIndex = shoppingCard.indexOf(askForChanges.toLowerCase());
        askForChanges
            ? shoppingCard[productIndex] = modifyCustomer
            : console.log("OK. You didn't make any changes.");
        customerCredit -= 100 ;
        console.log(`Your balance : ${customerCredit}`);
        break;

    default : 
        console.log(`Sorry, we don't have ${customer}`);
};

console.log(shoppingCard); */


// EXERCISE 5 :  Adding or checking a country

/*let countries = [
    "germany",
    "england",
    "usa",
    "finland",
    "netherland",
    "russia",
    "estonia",
    "poland",
    "ukraine",
    "iceland",
    "new zealand",
    "norway"
]
let usr =  prompt("Check whether or not a country exists :");
let modifyUser = usr.toLowerCase();
let getIndex = countries.indexOf(usr);
let askToAdd;

switch (true) {
    case countries.includes(modifyUser) :
        console.log(countries[getIndex].toUpperCase());
        break;

    default : 
        console.log("Nope!");
        askToAdd = confirm("Would you like to add it in ?");
        askToAdd
            ? countries.push(modifyUser)
            : console.log("OK. It's your decision!");
};

console.log(countries); */

// EXERCISE 6 :

/* const web_techs = [
    "HTML",
    "CSS",
    "Javascript",
    "Python",
    "GO",
    "C",
    "PHP",
    "Node.js",
    "React.js",
    "Sass"
]

const check = web_techs.includes("Sass")
            ? "Sass is a CSS preprocess"
            : "Nope! but we added it in!" && web_techs.push("Sass");

console.log(check, web_techs); */

// EXERCISE 7 :

/* const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack); */

// EXERCISE 8 :

/* let ages = [19, 22, 19, 24, 8, 20, 25, 5, 26, 24, 25, 24, 21, 9];

ages = ages.sort((a,b) => a - b);
console.log(ages);

let min = 99999999;                                // MIN
for (let i = 0; i < ages.length; i++) {
    min > ages[i]
        ? min = ages[i]
        : i;
};
console.log(`Min Value : ${min}`);

let max = 0;                                    // MAX
for (let i = 0; i < ages.length; i++) {
    max < ages[i]
        ? max = ages[i]
        : i;
}
console.log(`Max Value : ${max}`);

let median = parseInt((ages.length -1)/ 2);                 // MEDIAN
let getLength = ages.length;
let result;                                             
    getLength % 2 === 0
    ? result = [ages[median], ages[median + 1]]
    : result = ages[median];
console.log(`Median : ${result}`);                                   

let average = Number();                                     // AVERAGE
for (let i = 0; i < ages.length; i++) {
    average += +ages[i];
};
average = parseInt(average / ages.length);
console.log(`Average : ${average}`)

console.log(`Max - Average : ${Math.abs(max - average)}`);
console.log(`Min - Average : ${Math.abs(min - average)}`); */

// EXERCISE 9 :

/* import { countries } from "./countries.js";
console.log(countries);
console.log(countries.slice(0, 10));
console.log(countries[parseInt(countries.length/2)], countries[parseInt(countries.length/2) + 1])

const firstPart = countries.slice(0,parseInt(countries.length/2) + 1);
const secondPart = countries.slice(parseInt(countries.length/2) + 1, countries.length);
console.log(firstPart);
console.log(secondPart); */