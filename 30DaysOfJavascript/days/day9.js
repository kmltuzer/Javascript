// HIGHER ORDER FUNCTION

    // -Callback Function
        // * The function passed as a parameter to other function is called callback.
        // * We don't put parentheses at the end of a callback function.                            (!)
        
        // const callback = (n) => {                                // a callback function, the name of the function could be any name of course.
        //     return n ** 2
        //   }

        //   function cube(callback, n) {                           // function that takes other function as a callback.
        //     return callback(n) * n
        //   }
        //   console.log(cube(callback, 3))

    // -Returning Function
        // * Higher order functions return function as a value .

            // const higherOrder = n => {                           // Higher order function returning an other function
            //     const doSomething = m => {
            //       const doWhatEver = t => {
            //         return 2 * n + 3 * m + t
            //       }
            //       return doWhatEver
            //     }
            //     return doSomething
            //   }
            //   console.log(higherOrder(2)(3)(10))                 <-- Attention for parentheses beside the function                       (!)

    // Where we use call back functions ? 
        // * For instance, the forEach() built-in method uses a callback function.

            // const numbers = [1, 2, 3, 4, 5]
            // const sumArray = arr => {
            //   let sum = 0
            //   const callback = function(element) {
            //     sum += element
            //   }
            //   arr.forEach(callback)
            //   return sum
            
            // }
            // console.log(sumArray(numbers))                        // 15
            
            // const numbers = [1, 2, 3, 4]
            // const sumArray = arr => {                             // More simplified
            //   let sum = 0
            //   arr.forEach(function(element) {
            //     sum += element
            //   })
            //   return sum
            // }
            // console.log(sumArray(numbers))                         // 15

    // Setting Time                                                                                         (!)
        // * We can execute some activities in a certain interval of time.
        // * We can schedule (wait) for some time to execute some activities.
        // * For them above, we use the ones below ;
            // -setInterval
            // -setTimeout

            // Setting Interval using a setInterval function :
                // * We use setInterval higher order function to do some activity continuously with in some interval of time.
                // * The setInterval global method take a callback function and a duration as a parameter.
                // * The duration is in milliseconds and the callback will be always called in that interval of time.                   (!)

                // syntax :

                    // function callback() {
                    //      code goes here
                    //      code goes here
                    //      code goes here
                    // }
                    // setInterval(callback, duration)

                // Example :

                    // function sayHello() {
                    //     console.log('Hello')
                    // }
                    // setInterval(sayHello, 1000)                      // it prints hello in every second, 1000ms is 1s.

            // Setting a time using a setTimeout :
                // * we use setTimeout higher order function to execute some action at some time in the future.
                // * The setTimeout global method take a callback function and a duration as a parameter. 
                // * The duration is in milliseconds and the callback wait for that amount of time.

                // syntax :

                    // function callback() {
                    //      code goes here
                    //      code goes here
                    //      code goes here
                    // }
                    // setTimeout(callback, duration)

                // Example :

                    // function sayHello() {
                    //     console.log('Hello')
                    // }
                    // setTimeout(sayHello, 5000)                      // it prints hello after it waits for 2 seconds.

// FUNCTIONAL PROGRAMMING                                                                                                           (!)
    // * Instead of writing regular loop, latest version of JavaScript introduced lots of built-in methods.
    // * All built-in methods take callback function.

        // Some of them ;

            // forEach()    : Iterate an array elements. It's only used with arrays and takes a callback function with elements, index and array itself. 
            
                // arr.forEach(function (element, index, arr) {       // The index and the array optional.
                //     console.log(index, element, arr)
                //   })
                
                //   arr.forEach((element, index, arr) => {           //   The above code can be written using arrow function
                //     console.log(index, element, arr)
                //   })

                //   arr.forEach((element, index, arr) => console.log(index, element, arr))         // Or with explicit return

                // let sum = 0;
                // const numbers = [1, 2, 3, 4, 5];
                // numbers.forEach(num => console.log(num))
                // console.log(sum)

                // let sum = 0;
                // const numbers = [1, 2, 3, 4, 5];
                // numbers.forEach(num => sum += num)
                // console.log(sum)

                // const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
                // countries.forEach( (element) => console.log( element.toUpperCase() ) )
            
            // map() : 
                // * Iterate an array elements and modify the array elements. 
                // * It takes a callback function with elements, index , array parameter and return a new array.

                // const modifiedArray = arr.map(function (element, index, arr) {
                //     return element
                //   })

                // const modifiedArray = arr.map((element,index) => element);                   // Arrow function and explicit return

                // const numbers = [1, 2, 3, 4, 5]                                              // Example
                // const numbersSquare = numbers.map((num) => num * num)
                // console.log(numbersSquare)                                                   // [1, 4, 9, 16, 25]

                // const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
                // const namesToUpperCase = names.map((name) => name.toUpperCase())
                // console.log(namesToUpperCase)                                                // ['ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK']

                // const countries = [
                //     'Albania',
                //     'Bolivia',
                //     'Canada',
                //     'Denmark',
                //     'Ethiopia',
                //     'Finland',
                //     'Germany',
                //     'Hungary',
                //     'Ireland',
                //     'Japan',
                //     'Kenya',
                //   ]
                //   const countriesToUpperCase = countries.map((country) => country.toUpperCase())
                //   console.log(countriesToUpperCase)
                  
                //   const countriesToUpperCase = countries.map((country) => {                          // Arrow function
                //     return country.toUpperCase();
                //   })
                  
                //   const countriesToUpperCase = countries.map(country => country.toUpperCase());      // Explicit return arrow function

                // const countriesFirstThreeLetters = countries.map((country) =>
                //     country.toUpperCase().slice(0, 3)
                // )

            // filter() : Filter out items which full fill filtering conditions and return a new array.

                // const countriesContainingLand = countries.filter((country) =>                        // Filter countries containing land
                    // country.includes('land')
                // )
                // console.log(countriesContainingLand)                                                 // ['Finland', 'Ireland']

                // const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
                // console.log(countriesEndsByia)                                                       // ['Albania', 'Bolivia','Ethiopia']

                // const countriesHaveFiveLetters = countries.filter(
                    // (country) => country.length === 5
                //   )
                //   console.log(countriesHaveFiveLetters)                                              // ['Japan', 'Kenya']

                // const scores = [
                //     { name: 'Asabeneh', score: 95 },
                //      { name: 'Lidiya', score: 98 },
                //     { name: 'Mathias', score: 80 },
                //     { name: 'Elias', score: 50 },
                //     { name: 'Martha', score: 85 },
                //     { name: 'John', score: 100 },
                //   ]
                  
                //   const scoresGreaterEighty = scores.filter((score) => score.score > 80)
                //   console.log(scoresGreaterEighty)

            // reduce() : 
                // * Reduce takes a callback function. 
                // * The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value.
                // * It is the BEST practice to define an initial value for the accumulator value.                  (!) (!) (!)
                // * If we do not specify this parameter, by default accumulator will get array 'first value'.
                // * If our array is an empty array, then Javascript will throw an error.

                    // arr.reduce((acc, cur) => {
                            // some operations goes here before returning a value
                            // some operations goes here before returning a value
                            // some operations goes here before returning a value
                    //    return 
                    //   }, initialValue)

                    // const numbers = [1, 2, 3, 4, 5]
                    // const sum = numbers.reduce((acc, cur) => acc + cur, 0)
                    // console.log(sum)                                                 // 15

            // every() : Check if all the elements are similar in one aspect. It returns boolean.

                // const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
                // const areAllStr = names.every((name) => typeof name === 'string')                // Are all strings?
                // console.log(areAllStr)                                                           // true

                // const bools = [true, true, true, true]
                // const areAllTrue = bools.every((b) => b === true)                                // Are all true? 
                // console.log(areAllTrue)                                                          // true

            // find() : Return the FIRST element which satisfies the condition.

                // const ages = [24, 22, 25, 32, 35, 18, 19]
                // const age = ages.find((age) => age < 20)
                // console.log(age)                                                                 // 18

                // const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook', 'Abdurrahman']
                // const result = names.find((name) => name.length > 7)                             // Asabeneh
                // console.log(result)

                // const scores = [
                //     { name: 'Asabeneh', score: 95 },
                //     { name: 'Mathias', score: 80 },
                //     { name: 'Elias', score: 50 },
                //     { name: 'Martha', score: 85 },
                //     { name: 'John', score: 100 },
                //   ]
                  
                // const score = scores.find((user) => user.score > 80)
                // console.log(score)                                                               // { name: "Asabeneh", score: 95 }

            // findIndex() : Return the position of the first element which satisfies the condition.

                // const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
                // const ages = [24, 22, 25, 32, 35, 18]
                
                // const result = names.findIndex((name) => name.length > 7)
                // console.log(result)                                                      // 0
                
                // const age = ages.findIndex((age) => age < 20)
                // console.log(age)                                                         // 5

            // some() : Unlike every(), it check if some of the elements are similar in one aspect. It returns boolean.

                // const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
                // const bools = [true, true, true, true]
                
                // const areSomeTrue = bools.some((b) =>  b === true)
                // console.log(areSomeTrue)                                                             //true

                // const areAllStr = names.some((name) => typeof name === 'number')                     // Are all strings ?
                // console.log(areAllStr)                                                               // false

            // sort() : 
                // * The sort methods arranges the array elements either ascending or descending order.
                // * By default, the sort() method sorts values as strings.
                // * This works well for string array items but not for numbers.
                // * If number values are sorted as strings and it give us wrong result.
                // * Sort method modify the original array. Therefore, it is recommended to copy the original data before you start using sort method.

                    // Sorting string Values ;

                        // const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
                        // console.log(products.sort())                             // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
                                                                                    // Now the original products array  is also sorted.

                    // Sorting Numeric Values ;
                        // * As you can see in the example below, 100 came first after sorted in ascending order.
                        // * It converts items to str, since 100 and other numbers compared, 1 which the beginning of the string 100 was the smallest.
                        // * To avoid this, we use a compare callback function inside the sort method, which return a negative, zero or positive.

                            // const numbers = [9.81, 3.14, 100, 37]        // Using sort method to sort number items provide a wrong result. see below
                            // console.log(numbers.sort())                  //[100, 3.14, 37, 9.81]

                            // numbers.sort(function (a, b) {
                            //   return a - b
                            // })
                            // console.log(numbers)                         // [3.14, 9.81, 37, 100]
                            
                            // numbers.sort(function (a, b) {
                            //   return b - a
                            // })
                            // console.log(numbers)                         //[100, 37, 9.81, 3.14]

                    // Sorting Object Arrays ; 
                        // * Whenever we sort objects in an array, we use the object key to compare.

                            // objArr.sort(function (a, b) {
                            //     if (a.key < b.key) return -1
                            //     if (a.key > b.key) return 1
                            //     return 0
                            //   })
                            
                            //   OR
                            
                            //   objArr.sort(function (a, b) {
                            //     if (a['key'] < b['key']) return -1
                            //     if (a['key'] > b['key']) return 1
                            //     return 0
                            //   })
                            
                            //   const users = [
                            //     { name: 'Asabeneh', age: 150 },
                            //     { name: 'Brook', age: 50 },
                            //     { name: 'Eyob', age: 100 },
                            //     { name: 'Elias', age: 22 },
                            //   ]
                            //   users.sort((a, b) => {
                            //     if (a.age < b.age) return -1
                            //     if (a.age > b.age) return 1
                            //     return 0
                            //   })
                            //   console.log(users)                             // sorted ascending  
                                                                                // [{…}, {…}, {…}, {…}]
                                                                                // Array(4) [ {…}, {…}, {…}, {…} ]
                                                                                // 0: Object { name: "Elias", age: 22 }
                                                                                // 1: Object { name: "Brook", age: 50 }
                                                                                // 2: Object { name: "Eyob", age: 100 }
                                                                                // 3: Object { name: "Asabeneh", age: 150 }
                                                                                // length: 4


// EXERCISE 1 : 

// import { isEmpty } from "../modules/modules.js"

/* const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'toys', price: 7 },
  { product: 'clothes', price: 2 },
  { product: 'electronic', price: 4 },
  { product: 'garniture', price: undefined },
  { product: 'paper-works', price: null },
] */

// numbers.forEach( (element) => console.log(element) )
// countries.forEach( (element) => console.log(element) )
// names.forEach( (element) => console.log(element) )

// const countryToUpper = countries.map( (element) => element.toUpperCase() )
// console.log(countryToUpper);

// const countryLength = countries.map( (element) => element.length )
// console.log(countryLength);

// const square = numbers.map( (element) => element ** 2 )
// console.log(square);

// const prices = products.map((element) => {
//     if (!isEmpty(element.price)) return element.price
//     else return "Empty";
// })
// console.log(prices);

/* const country = countries.filter( (element) => {
    if (element.match(/\land/gi)) return element;
} );
console.log(country); */

/* const country = countries.filter( (element) => {
    if (element.length === 6) return element;
} );
console.log(country); */

/* const product_ = products.filter((element) => (+element["price"] !== 0) && (+element.price <= 4) )
console.log(product_) */

// EXERCISE 2 : Get only strings from an array || Accumulate numbers & strings || Check string length with some() & every()

//import { isEmpty, range } from "../modules/modules.js";

/* const mixedList = ["A", true, 8, 17, "TG", "RF", "15", undefined, null, "5T", false, NaN, Infinity];

function getStrings (arr) {
    let strList = arr.filter( element => (typeof element) === (typeof "") );
    return strList;
};
console.log(getStrings(mixedList)); */

/* const numbs = [1,2,3,4,5,6];
const sum = numbs.reduce( (acc, curr) => acc + curr);
console.log(sum); */

/* let conc = countries.reduce( (acc, curr) => acc.concat(`, ${curr}`)).concat(" are north European countries");
console.log(conc); */

// let check = names.some( (name) => name.length > 7 );
// console.log(check);

// let check = countries.every( (name) => name.includes("land") );
// console.log(check);

// EXERCISE 3 : Using of find() & findIndex

// let check = countries.find( (country) => country.length > 6 )
// console.log(check);

// let check = countries.findIndex( (country) => country.length > 6 )
// console.log(check);

// let check = countries.findIndex( (country) => country === "Norway" )
// console.log(check);

// let check = countries.findIndex( (country) => country === "Russia" )
// console.log(check);                                                                     // -1

// EXERCISE 4 : Sum of prices by concatenatin a few methods || Sum of prices only by using reduce 

/* const sum = products.map( obj => obj).filter( isNumb => (typeof isNumb.price) === "number" ).reduce( (acc, curr) => acc + curr.price,0 );
console.log(sum) */

// const sum = products.reduce( (acc, curr) =>  );

import { isEmpty, NaN_cleaner, NaN_detector, alphabet } from "../modules/modules.js";
import { countries } from "../others/countries.js";

/* let countryObj = {

    endsWithLand : countries.filter( (country) => country.endsWith("land") ),
    endsWithStan : countries.filter( (country) => country.endsWith("stan") ),
    endsWithIa : countries.filter( (country) => country.endsWith("ia") ),
};
console.log(countryObj); */

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'toys', price: 7 },
    { product: 'clothes', price: 2 },
    { product: 'electronic', price: 4 },
    { product: 'garniture', price: undefined },
    { product: 'paper-works', price: null },
  ];

// EXERCISE 5 : Counting how many times a letter was used || Getting prices only by using reduce()

/* function letterCounter () {
    const alph = alphabet().join("").toUpperCase();
    const countObj = {}
    for ( let letter of alph) {
        countObj[`${letter}`] = 0;
        for (let country of countries) {
            if (country.startsWith(letter)) countObj[`${letter}`] += 1
        }
    }
    return countObj;
}
console.log(letterCounter()) */

/*console.log(products.reduce( (acc, curr) => {
    if (typeof curr.price === "number" ) {
        return acc + curr.price
        
    } else {
        curr.price = 0
        return acc + curr.price
    }
}, 0 )) */

// EXERCISE 6 : How to make your own reduce()

/* Array.prototype.myReduce = function (callback, initial=0) {
    if (!this.length && initial === undefined) {
        throw new TypeError("Initial value isn't defined or length is zero");
    };

    let accumulator = initial;
    let index = 0;

    if (initial !== undefined) {
        accumulator = this[0];
        index = 1;
    };

    for (; index < this.length; index ++) {
        accumulator = callback(accumulator, this[index], index, this)
    };

    return accumulator;
}

let getResult = [1,2,3,4,5,6,"",7,8,9].myReduce( (acc, curr) => acc + curr);

console.log(getResult); */