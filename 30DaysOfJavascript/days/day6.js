// LOOPS
    // * They are used to deal with repeating processes.

    // For Loop Structure :
    // for(initialization, condition, increment/decrement){
        // code goes here
        // code goes here
        // code goes here
    // }

    // Example : 
    // for(let i = 0; i <= 5; i++){
    //     console.log(i)
    // }                            // 0 1 2 3 4 5

    // for(let i = 0; i <= 5; i++){
    //     console.log(`${i} * ${i} = ${i * i}`)
    // }

    // While Loop :
        // let i = 0
        // while (i <= 5) {
        //   console.log(i)
        //   i++
        // }                        // 0 1 2 3 4 5

    // Do While Loop :
        // let i = 0
        // do {
        // console.log(i)
        // i++
        // } while (i <= 5)         // 0 1 2 3 4 5

    // For Of Loop Structure :
        // for (const element of arr) {
            // code goes here
            // code goes here
            // code goes here
        // }

        // Example :
            // const numbers = [1, 2, 3, 4, 5]

            // for (const num of numbers) {
            //   console.log(num)
            // }                                    // 1 2 3 4 5

            // for (const num of numbers) {
            //   console.log(num * num)
            // }                                    // 1 4 9 16 25

            // Adding all the numbers in the array

            // let sum = 0
            // for (const num of numbers) {
            //   sum = sum + num  
            // 	// can be also shorten like this, sum += num
            //   // after this we will use the shorter synthax(+=, -=, *=, /= etc)
            // }
            // console.log(sum)                     // 15

            // const webTechs = [
            //   'HTML',
            //   'CSS',
            //   'JavaScript',
            //   'React',
            //   'Redux',
            //   'Node',
            //   'MongoDB'
            // ]

            // for (const tech of webTechs) {
            //   console.log(tech.toUpperCase())
            // }

            // HTML CSS JAVASCRIPT REACT NODE MONGODB

            // for (const tech of webTechs) {
            //   console.log(tech[0])               // get only the first letter of each element,  H C J R N M
            // }

    // Break
        // * It's used to interrupt a loop.

        //Example :
            // for(let i = 0; i <= 5; i++){
            //     if(i == 3){
            //       break
            //     }
            //     console.log(i)
            // }                                    // 0 1 2        // The loop stops if 3 found in the iteration process.

    // Continue
        // * We use the keyword continue to skip a certain iterations. It returns the top to start the next process when encounters with continue. (!)

        // Example :
            // for(let i = 0; i <= 5; i++){
            //     if(i == 3){
            //         continue
            //     }
            //     console.log(i)
            // }                                    // 0 1 2 4 5

// EXERCISE 1 :

/* let i = 1;
do {
    console.log("#".repeat(i));
    i++;
} while (i <= 7); */

// EXERCISE 2 :

/* let i = 1;
do{
    console.log(`${i} x ${i} = ${i * i}`);
    i++;
} while (i <= 10); */

/* let i = 0;
console.log("i i^2 i^3")
do{
    console.log(`${i}   ${i**2}   ${i**3}`);
    i++;
} while (i <= 10); */

// EXERCISE 3 :         Prime numbers

/* let primeNum = [];

for (let counter = 0; counter <= 100; counter++) {

    let isPrime = true;
    for (let i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            isPrime = false;
        }
    }
    if (isPrime === true) {
        primeNum.push(counter);
    }
}
primeNum.splice(0,2);
console.log(primeNum) */

// EXERCISE 4 :      Generating random number between 0-100

/* let arr = [];

for (let i = Math.floor(Math.random() * 100); i < 105; i++) {

    let rand = Math.floor(Math.random() * i) + 1;
    let randDelay = Math.floor(Math.random() * rand) + 1;

    if (!arr.includes(rand) && !arr.includes(randDelay)) {
        arr.push(rand);
    }

    if (arr.length === 5) {
        break;
    }
        
}
console.log(arr); */

// EXERCISE 4 :      Generating random letters

// let pangram          = "The quick brown fox jumps over the lazy dog";
// let alph             = pangram.split(" ").join("").toLowerCase();
// let modifyAlph       = alph.split("");
// let alphUpper        = [];

// for (let j of modifyAlph) {

//     modifyAlph.indexOf(j) < modifyAlph.lastIndexOf(j)
//     ? modifyAlph.splice(modifyAlph.indexOf(j), 1)
//     : j;
// }
// modifyAlph       = modifyAlph.sort();

// console.log(modifyAlph);

// EXERCISE 5 :      #HEX & RGB Generator

//import { hexGen, rgbGen } from "../modules/modules.js";
// console.log(hexGen());
//console.log(rgbGen());

// EXERCISE 6 :

//import { alphabet, bychance, countryGen, max } from "../modules/modules.js";
//import { countries } from "../others/countries.js";

// const alph          = alphabet().join("").toUpperCase();
// const country       = {};
// const randCountries = [];

// for (let i = 0; i <= 10; i++) {
//     country[alph[i]] = [];

//     for (let j of countries) {
//         if (j.startsWith(alph[i])){
//             country[alph[i]].push(j);
//         };
//     };
//     let result = country[                                       // Object --> Key --> Random Value
//         alph[i]
//     ] 
//         [
//             bychance( country[alph[i]].length - 1 ) 
//         ];                        
                              
//     randCountries.push(result)
// };

// EXERCISE 7 :

/* const countries_ = countryGen(11);
const modify = [];

for (let i = 0; i < countries_.length; i++) {
    const j = countries_[i].toUpperCase();

    modify[i] = [j, j.slice(0,3), j.length];
};

console.log(modify); */

// EXERCISE 8 :

/* const withLand      = [];
const withoutLand   = [];
const withIa        = [];
const biggestIa     = {};
let maxIa           = [0, ""];

for (let i of countries) {
    if (i.endsWith("land")) {
        withLand.push(i);

    } else if (i.endsWith("ia")){
        withIa.push(i);
        biggestIa[i] = i.length;

        if (maxIa[0] < i.length) {

            maxIa[0] = i.length;
            maxIa[1] = i;
        }

    } else {
        withoutLand.push(i);
    };


};
console.log(withLand);
console.log(withoutLand);
console.log(withIa);
console.log(biggestIa);
console.log(maxIa); */


// EXERCISE 9 :

/* let withFiveChars = []
for (let i of countries) {
    if (i.length === 5){
        withFiveChars.push(i);
    };
};

console.log(withFiveChars); */

// EXERCISE 10 :        Longest word

//import { web_techs } from "../others/web_techs.js";

/*const longestW = [0, ""];
for (let i of web_techs) {
    if (longestW[0] < i.length) {
        longestW[0] = i.length;
        longestW[1] = i;
    };
};
console.log(longestW); */

/* const webArray = []
for (let j = 0; j < web_techs.length; j++) {
    webArray[j] = [web_techs[j].length, web_techs[j]];
}

console.log(webArray); */

// EXERCISE 10 :        An acronym of a stack app

/* let mern = [];

for (let i of web_techs) {
    
    if (i.startsWith("M") || i.startsWith("E") || i.startsWith("R") || i.startsWith("N")) {
        mern.unshift(i[0]);
    }
};
for (let i of mern) {
    if (mern.indexOf(i) != mern.lastIndexOf(i)){
        mern.splice(mern.indexOf(i), 1);
    };
}
console.log(mern.join("").toLowerCase().concat("Stack")); */

// EXERCISE 11 :        Reverse an array without using reverse() method.

/* let fruits = ['banana', 'orange', 'mango', 'lemon'];
let sort   = [];
for (let i of fruits) {
    sort.unshift(i);
}
console.log(sort); */

// EXERCISE 12 :        The highest length

// import { countries } from "../others/countries.js";
// import { capitalize } from "../modules/modules.js";

/* let highestLength = [0, ""];
for (let x of countries) {
    if (x.length > highestLength[0]) {
        highestLength[0] = x.length;
        highestLength[1] = x;
    }
};
console.log(highestLength); */

// EXERCISE 13 :        Reverse & Capitalize

/* const countries_ = [];
for (let i of countries) {
    countries_.unshift(i.toLowerCase());
};

const modify = [];

for (let x of countries_) {
    x = capitalize(x);
    modify.push(x);
    //x[0].toUpperCase().concat(x.slice(1))         <-- capitalization
}
console.log(modify); */

















