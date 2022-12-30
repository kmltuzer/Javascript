// SET
    // * Set is a collection of elements. Set can only contains unique elements.
    // * Set is an iterable object and we can iterate through each elements.                                    (!)

    // Creating an empty set ;

        // const companies = new Set()
        // console.log(companies)                                                   // Set(0) {}

    // Creating set from array ;

        // const languages = [
        //     'English',
        //     'Finnish',
        //     'English',
        //     'French',
        //     'Spanish',
        //     'English',
        //     'French',
        //   ]
        
        //   const setOfLanguages = new Set(languages)
        //   console.log(setOfLanguages)                                            // Set(4) {"English", "Finnish", "French", "Spanish"}

        // const languages = [
        //     'English',
        //     'Finnish',
        //     'English',
        //     'French',
        //     'Spanish',
        //     'English',
        //     'French',
        //   ]
          
        //   const setOfLanguages = new Set(languages)
          
        //   for (const language of setOfLanguages) {                               // Sets are iterable objects
        //     console.log(language)
        //   }

    // Adding an element to a set :
        // * For this, we use add() method.                                                                     (!)
        // * We can't add number or string into a set manually, otherwise you get an error.                     (!)

        // const companies = new Set()                                              // creating an empty set
        // console.log(companies.size)                                              // 0 (To get the size of a Set, we use size method)         (!)
        
        // companies.add('Google')                                                  // add element to the set
        // companies.add('Facebook')
        // companies.add('Amazon')
        // companies.add('Oracle')
        // companies.add('Microsoft')
        // console.log(companies.size)                                              // There are 5 elements in the set
        // console.log(companies)                                                   // Set(5) {"Google", "Facebook", "Amazon", "Oracle", "Microsoft"}

        // const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
        // setOfCompanies = new Set()
        // for (const company of companies) {                                       // We can also use loop to add element to a set.
            // setOfCompanies.add(company)
        // }

    // Deleting an element a set :                                                                                                  (!)
        // * For this, we use delete() method.

            // console.log(companies.delete('Google'))
            // console.log(companies.size)                                          // 4 elements left in the set

    // Checking an element in the set :                                                                                             (!)
        // * For this, we use has() method.

            // console.log(companies.has('Apple'))                                  // false
            // console.log(companies.has('Facebook'))                               // true

    // Clearing the set :
        // * For this, we use clear() method.

            // companies.clear()
            // console.log(companies)                                               // Set(0) {}

    // How to use set ;

        // const languages = [
        //     'English',
        //     'Finnish',
        //     'English',
        //     'French',
        //     'Spanish',
        //     'English',
        //     'French',
        //   ]
        //   const langSet = new Set(languages)
        //   console.log(langSet)                                                   // Set(4) {"English", "Finnish", "French", "Spanish"}
        //   console.log(langSet.size)                                              // 4
        
        //   const counts = []
        //   const count = {}
        
        //   for (const l of langSet) {
        //     const filteredLang = languages.filter((lng) => lng === l)            <-- It's L
        //     console.log(filteredLang)                                            // ["English", "English", "English"]
        //     counts.push({ lang: l, count: filteredLang.length })
        //   }
        //   console.log(counts)

        // const numbers = [5, 3, 2, 5, 5, 9, 4, 5]            
        // const setOfNumbers = new Set(numbers)
        // console.log(setOfNumbers)                                                // Set(5) {5, 3, 2, 9, 4}

    // Union of sets ;
        // * To find a union to two sets can be achieved using spread operator.

            // let a = [1, 2, 3, 4, 5]                              // Lets find the union of set A and set B (A U B)
            // let b = [3, 4, 5, 6]
            // let c = [...a, ...b]

            // let A = new Set(a)
            // let B = new Set(b)
            // let C = new Set(c)

            // console.log(C)                                                       // Set(6) {1, 2, 3, 4, 5, 6}

    // Intersection of sets ;
        // * To find an intersection of two sets can be achieved using filter.

            // let a = [1, 2, 3, 4, 5]                              // Lets find the intersection of set A and set B (A ∩ B) 
            // let b = [3, 4, 5, 6]

            // let A = new Set(a)
            // let B = new Set(b)

            // let c = a.filter((num) => B.has(num))
            // let C = new Set(c)

            // console.log(C)                                                       // Set(3) {3, 4, 5}

    // Difference of sets ;
        // * To find an the difference between two sets can be achieved using filter.

            // let a = [1, 2, 3, 4, 5]                             //  Lets find the different of set A and set B (A \ B)
            // let b = [3, 4, 5, 6]
            
            // let A = new Set(a)
            // let B = new Set(b)
            
            // let c = a.filter((num) => !B.has(num))
            // let C = new Set(c)
            
            // console.log(C)

// MAP

    // Creating an empty Map :

        // const map = new Map()
        // console.log(map)                                                            // Map(0) {}

    // Creating an Map from array :

        // const countries = [
        //     ['Finland', 'Helsinki'],
        //     ['Sweden', 'Stockholm'],
        //     ['Norway', 'Oslo'],
        //   ];
        //   const map = new Map(countries)
        //   console.log(map)                                          // Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
        //   console.log(map.size)                                     // 3

    // Adding values to the Map :
        // * For this, we use set() method.                                                                     (!)

            // const countriesMap = new Map()
            // console.log(countriesMap.size)                           // 0
            // countriesMap.set('Finland', 'Helsinki')
            // countriesMap.set('Sweden', 'Stockholm')
            // countriesMap.set('Norway', 'Oslo')
            // console.log(countriesMap)                                // Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
            // console.log(countriesMap.size)                           // 3
            
    // Getting a value from Map :
        // * For this, we use get() method.                                                                     (!)

        // console.log(countriesMap.get('Finland'))                     // Helsinki

    // Checking key in Map :
        // * For this, we use has() method. It returns true or false.                                                                     (!)

        // console.log(countriesMap.has('Finland'))                     // true

    // Getting all values from map using loop :                         // It returns an array for each map element                 (!)

        // for (const country of countriesMap) {
        //   console.log(country)
        // }                                                            // (2) ["Finland", "Helsinki"]
                                                                        // (2) ["Sweden", "Stockholm"]
                                                                        // (2) ["Norway", "Oslo"]

        // for (const [country, city] of countriesMap){
        //     console.log(country, city)
        //    }                                                         // Finland Helsinki
                                                                        // Sweden Stockholm
                                                                        // Norway Oslo


// EXERCISE  1 : Easy works with Sets & Maps & their methods

// const emptySet = new Set();
// console.log(emptySet);

/* const zeroToTen = new Set();
for (let i = 0; i <= 10; i++) {
    zeroToTen.add(i);
    zeroToTen.add(i);
}
zeroToTen.delete(5);
zeroToTen.delete(8);
zeroToTen.clear();
console.log(zeroToTen); */

/* const arr = ["A", 2, "B", 11, "A", "C", "R", 2, 8, 19, "B", 7, 9, 15, "BC"];
const newSet = new Set();
for (let x of arr) {
    if (typeof x === "string" ) newSet.add(x);
};
console.log(newSet); */

/* const newMap = new Map();
const countries = ["Finland", "England", "Estonia", "Germany", "India", "Turkey"];

for (let country of countries) {
    newMap.set(country,country.length);
};
console.log(newMap); */

// const a = [1,2,3,4,5,6,7,8,9];
// const b = [1,2,3,6,7,8,9,10,11,12];
// const c = new Set([...a, ...b]);
// // console.log(c);
// // console.log(c);

/* const a = [1,2,3,4,5,6,7,8,9,55];
const b = [1,2,3,6,9,10,11,12];
let c = a.filter( (element) => b.includes(element) );
c = new Set(c);
console.log(c); */

// import { langs } from "../others/languages.js";

// EXERCISES WITH CALLBACKS (!)

// let val;                                                                             // callback

// function multiplyByTwo (a,b,c, callback) {
//     let tempArr = []
//     for (let i = 0; i < 3; i++) {
//         tempArr[i] = addOne(arguments[i]*2)
//     }
//     return tempArr;
// }

// val = multiplyByTwo(5,10,15);

// function addOne (a) {
//     return a + 1
// }

// console.log(val);

/*function main (callback, ...args) {                                                       // callback
    let arr = [];
    for (let x of args) {
        let temp = callback(x * 2);
        arr.push(temp);
    }
    return arr;
}
function addTen(numb) {
    return numb + 10;
}

console.log(main(addTen,0,1,2,3,4,5,6,7,8));
*/

/* function main (callback, n) {                                                                 // callback
    return `Hi ${callback(n)}`;
};

console.log( main( n => n + n, 24) )
*/

// EXERCISES WITH CALLBACKS   : Add 's' plural suffix at the end of plural ones

/* function main (callback, ...words) {
    let arr = []
    for (let x of words) {
        if (x.startsWith("a ") || x.startsWith("an ")) {
            x = x.replace("a ", "")
            x = x.replace("an ", "")
            x = callback(x)
            arr.push(x)
        }
    }
    return arr;
}
const addS =  function (w) {
    return w + "s";
}

console.log(main( (w) => w + "s", "a banana", "2 apples", "an orange", "two banana", "an apple")); */

// EXERCISES WITH CALLBACKS   : Returning the result of some operations executing in a callback

/* function map (callback, ...numbs) {
    let result = [];
    for (let x of numbs) {
        result.push(callback(x) + 5)
    }
    return result
}
console.log(map(n => n * 3, 1,2,3,4,5 )) */

/* function forEvery (array, callback) {
    for (let letter of array) {
        callback(letter)
    }
}
let temp = "";
const letters = ["a", "b", "c", "d", "e", "f"]; 

forEvery(letters, (letter) => {temp += letter} )
console.log(temp) */

/* function forEvery (callback, array) {
    for (let x of array) {
        callback(x)
    }
}
const result = []
forEvery( n => result.push(n + 2), [1,2,3] )
console.log(result); */

/* function reduce (callback, arr, initialV) {
    let sum = initialV;
    for (let x of arr) {
        sum = callback(sum,x)
    }
    return sum;
}
// const result = reduce( (a,b) => a + b,[1,2,3,4,5], 0 )
const result = reduce( (a,b) => a + b, ["a", "B", "c", "D", "e"], "" )
console.log(result); */

// import { langs } from "../others/languages.js";

// let temp = [];
// let myArr = [];
// for (let a of langs) {
//     let valueA = +Object.values(a);

//     for (let b of langs) {
//         let valueB = +Object.values(b);

//         if ( (valueA - valueB) > 0) {
//             myArr.unshift(a);
//             break;
//         } else {
//             myArr.unshift(b)
//             break;
//         }
//     }
// }
// console.log(myArr)
// OK....


// let arr = [4, 32, 73,2, 5,3, 8];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//   }
// }

// let arr = langs;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (+Object.values(arr[i]) < +Object.values(arr[j])) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//   }
// }

// console.log(arr);



































