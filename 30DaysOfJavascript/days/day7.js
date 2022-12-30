// FUNCTIONS
    // * Parameters which functions take is called 'argument' in js.
    // * A function can also take a default parameter.
    // * Function makes code   :
            // -clean and easy to read
            // -reusable
            // -easy to test

    // Function Types :                                         (!)
        // -Declaration function
        // -Expression function
        // -Anonymous function
        // -Arrow function

        // Function Declaration
            // syntax :
                // function functionName() {                    <--  declared a function without a parameter
                //     // code goes here
                //     // code goes here
                //     // code goes here
                // }
                // functionName()                               <--  calling function by its name and with parentheses

            // Examples :

                // function square() {                          <-- function without parameter,  a function which make a number square
                //     let num = 2
                //     let sq = num * num
                //     console.log(sq)
                //   }
                //   square()                                   // 4
                
                //   function addTwoNumbers() {                 <-- function without parameter
                //     let numOne = 10
                //     let numTwo = 20
                //     let sum = numOne + numTwo
                
                //     console.log(sum)
                //   }
                //   addTwoNumbers()                            <-- a function has to be called by its name to be executed

                // function printFullName (){
                //     let firstName = 'Asabeneh'
                //     let lastName = 'Yetayeh'
                //     let space = ' '
                //     let fullName = firstName + space + lastName
                //     console.log(fullName)
                // }
                // printFullName()                              <-- calling a function

        // Function Returning Value :                                                                           (!)
            // * Function can also return values instead of showing something on console.
            // * If a function does not return values the value of the function is undefined.
                // function printFullName (){
                //     let firstName = 'Asabeneh'
                //     let lastName = 'Yetayeh'
                //     let space = ' '
                //     let fullName = firstName + space + lastName
                //     return fullName
                // }
                // console.log(printFullName())

                // function addTwoNumbers() {
                //     let numOne = 2
                //     let numTwo = 3
                //     let total = numOne + numTwo
                //     return total
                // }
                // console.log(addTwoNumbers())

        // Function With A Parameter :
            // * In a function we can pass different data types(number, string, boolean, object, function) as a parameter.
                // syntax :
                    // function functionName(parm1) {         
                    //     //code goes here
                    //     //code goes here
                    //     //code goes here
                    // }
                    // functionName(parm1)                          // during calling or invoking one argument needed

                // Examples :
                    // function areaOfCircle(r) {
                    //     let area = Math.PI * r * r
                    //     return area
                    // }
                    // console.log(areaOfCircle(10))                // should be called with one argument
                    
                    // function square(number) {
                    //     return number * number
                    // }
                    // console.log(square(10))

        // Function With Two Parameters :
            // syntax :
                // function functionName(parm1, parm2) {
                //     //code goes here
                //     //code goes here
                //     //code goes here
                // }

            // Examples : 
                // function functionName(parm1, parm2) {
                //     //code goes here
                //     //code goes here
                //     //code goes here
                // }  
                // functionName(parm1, parm2) 

                //   function sumTwoNumbers(numOne, numTwo) {
                //     let sum = numOne + numTwo
                //     console.log(sum)
                //   }
                //   sumTwoNumbers(10, 20)                                      <-- calling functions
                
                //   function sumTwoNumbers(numOne, numTwo) {
                //     let sum = numOne + numTwo
                //     return sum
                //   }
                //   console.log(sumTwoNumbers(10, 20))

                //   function printFullName(firstName, lastName) {
                //     return `${firstName} ${lastName}`
                //   }
                //   console.log(printFullName('Asabeneh', 'Yetayeh'))

        // Function With Many Parameters :
            // syntax :
                // function functionName(parm1, parm2, parm3,...){
                //     //code goes here
                //     //code goes here
                //     //code goes here
                // }
                // functionName(parm1,parm2,parm3,...);

            // Examples :
                // function sumArrayValues(arr) {
                //     let sum = 0;
                //     for (let i = 0; i < arr.length; i++) {
                //         sum = sum + arr[i];
                //     }
                //     return sum;
                // }
                // const numbers = [1, 2, 3, 4, 5];
                // console.log(sumArrayValues(numbers));                        <-- calling a function

    // Arrow Function :
        // * Arrow function is an alternative to write a function.
        // * However function declaration and arrow function have some minor differences.
        // * Arrow function uses an arrow instead of the keyword 'function' to declare a function.

        // Let us see both function declaration and arrow function ;

            // function square(n) {                                    <-- function deceration      
            //     return n * n
            // }
            // console.log(square(2))                                  // 4
            
            // const square = n => {                                   <-- arrow function  
            //     return n * n
            // }
            // console.log(square(2))                                  // 4
            
            // If we have only one line in the code block, it can be written as follows.                   (!)

                // const square = n => n * n
                // console.log(square(2))                               // 4           

        // Example :
            // const areaOfCircle = (radius) => {                    
                // let area = Math.PI * radius * radius;
                // return area;
            // }
            // console.log(areaOfCircle(10))

            // const changeToUpperCase = arr => {
            //     const newArr = []
            //     for (const element of arr) {
            //       newArr.push(element.toUpperCase())
            //     }
            //     return newArr
            // }
            // const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
            // console.log(changeToUpperCase(countries))                                    // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

            // const printFullName = (firstName, lastName) => {             <-- The function has only the return statement.
            //     return `${firstName} ${lastName}`
            // }
            // console.log(printFullName('Asabeneh', 'Yetayeh'))

            // The above function has only the return statement, therefore, we can explicitly return it as follows.

                // const printFullName = (firstName, lastName) => `${firstName} ${lastName}`
                // console.log(printFullName('Asabeneh', 'Yetayeh'))                            // Asabeneh Yetayeh

// NOTE : If an arrow function has curly parentheses then we must have to use return in.

        // Function With Unlimited Number of Parameters                                             (!)
            // * It's mostly used when it's unknown how many parameters a user will pass.
            // * The way we do, it has a significant difference between a function declaration (regular function) and arrow function.

            // Unlimited parameters in regular function :
                // * A function declaration provides a function scoped arguments array like object.                                 (!)
                // * Anything we passed as argument in the function can be accessed from ARGUMENTS object inside the functions.     (!)
                
                    // function sumAllNums() {                  // Let us access the arguments object
                    //     console.log(arguments)
                    // }
                    // sumAllNums("A", 2, "ZE", "T")            // Arguments(4) [ 0: "A", 1: 2, 2: "ZE", 3: "T" callee: ƒ, Symbol(Symbol.iterator): ƒ]

                // Example :
                    // function sumAllNums() {                      
                    //   let sum = 0
                    //   for (let i of arguments) {                  // It's important to use 'arguments' for parameters (!)
                    //     sum += i
                    //   }
                    //   return sum
                    // }
                    // console.log(sumAllNums(1, 2, 3, 4))                          // 10
                    // console.log(sumAllNums(10, 20, 13, 40, 10))                  // 93
                    // console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))          // 173

            // Unlimited Number Of Parameters In Arrow Function                                         (!)
                // * Arrow function does not have the function scoped arguments object.                 (!)
                // * To implement a function which takes unlimited arguments in an arrow function we use spread operator before the name.       (!)
                // * Anything we passed as argument in the function can be accessed as ARRAY in the arrow function.         (!)

                // Example :
                    // const sumAllNums = (...args) => {                                 // Let us access the arguments object
                        // console.log(args)
                    // }
                    // sumAllNums(1, 2, 3, 4)                        // [1, 2, 3, 4]     // We used a parameter spread operator (...)

    // Anonymous Function :
        // * Functions without name are called Anonymous Function.

            // const anonymousFun = function() {
            //     console.log('I am an anonymous function and my value is stored in anonymousFun');
            //   };

    // Expression Function :
        // * Expression functions are anonymous functions.
        // * After we create a function without a name and we assign it to a variable.
        // * To return a value from the function we should call the variable.

            // const square = function(n) {
            //     return n * n
            // }
            //   console.log(square(2))                         // -> 4

    // Self Invoking Functions                                                                                  (!)
        // * Self invoking functions are anonymous functions which do not need to be called to return a value.

            // (function(n) {
            //     console.log(n * n)
            // }) (2)                       // 4                      
            
            // But instead of just printing if we want to return and store the data, we do as shown below
            
            // let squaredNum = (function(n) {
            //    return n * n
            // }) (10)                                  <-- The data is storing in the variable.
            // console.log(squaredNum)          // 100  

    // Function With Default Parameters
        // * when we invoke the function if we do not pass an argument the default value will be used. 
        // * Both function declaration and arrow function can have a default value or values.

            // syntax :
            // function functionName(param = value) {                   // Declaring a function
                // codes
                // codes
                // codes
            // }
            // functionName()                                           // Calling function without a parameter
            // functionName(arg)                                        // Calling function with a parameter

        // Examples :

            // function greetings(name = 'Peter') {
            //   let message = `${name}, welcome to 30 Days Of JavaScript!`
            //   return message
            // }
            // console.log(greetings())
            // console.log(greetings('Asabeneh'))

            // function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
            //   let space = ' '
            //   let fullName = firstName + space + lastName
            //   return fullName
            // }
            // console.log(generateFullName())
            // console.log(generateFullName('David', 'Smith'))

            // function calculateAge(birthYear, currentYear = 2019) {
            //   let age = currentYear - birthYear
            //   return age
            // }
            // console.log('Age: ', calculateAge(1819))

            // function weightOfObject(mass, gravity = 9.81) {
            //   let weight = mass * gravity + ' N'                                   <-- The value has to be changed to string first
            //   return weight
            // }
            // console.log('Weight of an object in Newton: ', weightOfObject(100))                  // 9.81 gravity at the surface of Earth
            // console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62))            // gravity at surface of Moon

        // Let us see how we write the above functions with arrow functions ;

            // syntax : 
            // const functionName = (param = value) => {                // Declaring a function
                //codes
            // }
            // functionName()                                           // Calling function with no parameter
            // functionName(arg)                                        // Calling function with a parameter

            // Example:

                // const greetings = (name = 'Peter') => {
                //   let message = name + ', welcome to 30 Days Of JavaScript!'
                //   return message
                // }
                // console.log(greetings())
                // console.log(greetings('Asabeneh'))

                // const generateFullName = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
                //   let space = ' '
                //   let fullName = firstName + space + lastName
                //   return fullName
                // }
                // console.log(generateFullName())
                // console.log(generateFullName('David', 'Smith'))

                // const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
                // console.log('Age: ', calculateAge(1819))

                // const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
                // console.log('Weight of an object in Newton: ', weightOfObject(100))                  // 9.81 gravity at the surface of Earth
                // console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62))            // gravity at surface of Moon
            
    // Function declaration versus Arrow function ;



// EXERCISE 1 : Full Name

/*function fullName (x = "John",y = "Smith") {
    return `${x} ${y}`
};
console.log(fullName("Memduh", "Celik"));       */

// EXERCISE 2 : Sum

/* const sum = (a,b) => a + b;
console.log(sum(8,5)); */

// EXERCISE 3 : The area & perimeter of a rectangle & the volume of a rectangular prism

/* const areaOfRectangle = (width, length) => width * length;
console.log(areaOfRectangle(8,5));

const perimeter = (width, length) => 2*(width + length);
console.log(perimeter(8,5));

const volumeOfRectPrism = (width, length, height) => width * length * height;
console.log(volumeOfRectPrism(8, 5, 4));

const areaOfCircle = (r, pi = 3.14) => pi * (r**2);
console.log(areaOfCircle(5));

const circumferenceOfCircle = r => 2 * 3.14 * r;
console.log(circumferenceOfCircle(5));

const density = (mass, vol) => mass/vol;
console.log(density(100, 200));

const speed = (distance, time) => (distance/time).toString().concat("km/s");
console.log(speed(100, 5));

const weight = (mass,gravity = 9.81) => mass * gravity;
console.log(weight(10));

const oC_to_oF = (oc) => oc * (9/5) + 32;
console.log(oC_to_oF(35)); */

// EXERCISE 4 : Check BMI

/* const BMI = (age, weight, height) => {

    let bmi = weight / (height * height);
        bmi = bmi.toFixed(2);

    const under     = `Your BMI : ${bmi}\nYou're under of BMI`;
    const normal    = `Your BMI : ${bmi}\nYou're normal according to your BMI`;
    const over      = `Your BMI : ${bmi}\nYou're over BMI`;
    const obese     = `Your BMI : ${bmi}\nI regret to say this, but you're unfortunately Obese :(`;


    switch (true) {
        case age >= 18 :
            switch (true) {
                case bmi < 18.5 :
                    console.log(under);
                    break;

                case (18.5 <= bmi <= 24.9) :
                    console.log(normal);
                    break;
                    
                case (25 <= bmi <= 29.9) :
                    console.log(over);
                    break;

                case bmi > 29.9 :
                    console.log(obese);
                    break;

                default :
                    console.log("There might be a problem in our system!")
            }
            break;

        default :
            console.log("You're under the age to be measured BMI.")
    }
}

BMI(19, 70, 1.8); */

// EXERCISE 5 : Season Checker

/* function seasonChecker (month) {
    const ayear = {
        summer : ["june", "july", "august"],
        spring : ["may", "april", "march"],
        winter : ["february", "january", "december"],
        autumn : ["september", "october", "november"]
    };

    for (let key of Object.keys(ayear)) {

        for (let value of ayear[key]) {

            if (ayear[key].includes(month)) {
                console.log(`The season is : ${key[0].toUpperCase().concat(key.slice(1))}`)
                break;
            };
        };
    };
};

seasonChecker("january");  */

// EXERCISE 6 : The Max & Min Finder

/* const findMax = (...args) => {
    let getMax = -Infinity;

    for (let i of args) {
        getMax < i
            ? getMax = i
            : "none";
    }

    return getMax;
}
console.log(findMax(5,85,19,22,-56,-3,88,22,-21,-10,54,103,4,-16));

const findMin = (...args) => {
    let getMin = Infinity;

    for (let i of args) {
        getMin > i
            ? getMin = i
            : "none";
    }

    return getMin;
}
console.log(findMin(5,85,19,22,-56,-3,88,22,-21,-10,54,103,4,-16)); */

// EXERCISE 7 : 

/* function linEquation (a,x,b,y,c) {
    let equation = (a * x) + (b * y) + c;
        equation = parseInt(x);
    return `X : ${equation}`;
};
console.log(linEquation(2,5,4,5,5));

function quadEquation (a,x,b,c) {
    let equation = a * (x**2) + (b * x) + c;
        equation = parseInt(equation);
    return `X : ${equation}`;
}
console.log(quadEquation(2,4,5,5)); */

// EXERCISE 8 : 

/*const printArray = arr => {
    for (let i of arr) {
        console.log(i);
    };
};
printArray([1,5,32,"A","G",true,null,NaN]); */

// EXERCISE 9 : Show time briefly

/* const showDateTime = () => {
    const date_     = new Date(2017, 5, 7, 6, 3);
    let dateArray = [
        date_.getDate(), 
        date_.getMonth(), 
        date_.getFullYear(), 
        date_.getHours(), 
        date_.getMinutes()
    ]

    for (let i = 0; i < dateArray.length; i++) {
        dateArray[i] = dateArray[i].toString();
        dateArray[i].length < 2
            ? dateArray[i] = "0".concat(dateArray[i])
            : "none";
    };
    return `${dateArray[0]}/${dateArray[1]}/${dateArray[2]} ${dateArray[3]}:${dateArray[4]}`;
}

console.log(showDateTime()); */

// EXERCISE 10 : Swap values & Reversing an array & Capitalizing an array & Adding an item & Removing an item

/* const swapValues = (x,y, which) => {

    return `x = ${y} y = ${x}`;
}
console.log(swapValues(3,4))

const reverseArr = arr => {
    let newArr = [];

    for (let i of arr) {
        newArr.unshift(i);
    };

    return newArr;
};
console.log(reverseArr([1,2,3,4,5])); 

const capitalizeArray = arr => {
    let newArr = [];
    for (let i of arr) {
        newArr.push(i[0].toUpperCase().concat(i.slice(1)));
    };
    console.log(newArr);
};
capitalizeArray(["memduh","mercan", "demir", "celik", "steel", "iron", "stove"]);   

const addItem = (...items) => {
    let arr = [];
    for (let i of items) {
        arr.push(i);
    }

    return arr;
};
console.log(addItem("falanfilan", "intermilan", "leaveThisJob"));      

const removeItem = (...items) => {
    let arr = ["falanfilan", "intermilan", "example", "foundation", true, null, 15, undefined, 0];
    for (let i of items) {
        arr.splice(arr.indexOf(i), 1);
    }

    return arr;
};
console.log(removeItem("falanfilan", "intermilan"));         */

// EXERCISE 11 : Even & Odd Counter | Sum of the aguments

/*const evensAndOdds = (...numbs) => {
    let evenCounter = 0;
    let oddCounter  = 0;

    for (let i of numbs) {
        i % 2 === 0
            ? evenCounter++
            : oddCounter++;
    }

    console.log(`Even Numbers : ${evenCounter}\nOdd Numbers : ${oddCounter}`);
};

evensAndOdds(1,2,3,4,5,6,7,8,9,10,11,12,1,14,15,18,23,24,26,30,32,38);

const sumOfArguments = (...args) => {
    let sum = 0;
    for (let x of args) {
        sum += x;
    };
    console.log(sum);
};
sumOfArguments(1,2,3,4,5); */

// EXERCISE 12 : Random user IP & MAC address

/* import { bychance, range } from "../modules/modules.js";
const randomIP = () => {
    console.log(`Your IP : ${bychance(255)}.${bychance(255)}.${bychance(255)}.${bychance(255)}`);
};
randomIP();

const randomMac = () => {
    const letters   = ["a","b","c","d","e","f"];
    //const numbs     = [0.1,2,3,4,5,6,7,8,9];
    const numbs     = range(0,9);                               // <-- My Module where is another file whose extension is 'js'
    const group = [letters, numbs];

    let mac = [];

    for (let i = 0; i < 12; i++) {
        const randChoice1 = group[bychance(1)];
        const randChoice2 = randChoice1[bychance(randChoice1.length - 1)];
        mac.push(randChoice2);
    };
    const modify = `${mac[0]}${mac[1]}:${mac[2]}${mac[3]}:${mac[4]}${mac[5]}:${mac[6]}${mac[7]}:${mac[8]}${mac[9]}:${mac[10]}${mac[11]}`;
    return `You MAC Address : ${modify.toUpperCase()}`;

}
console.log(randomMac()); */

// EXERCISE 13 : Hex to Rgb & Vice versa

/* import { alphabet, hexGen, randomChar, rgbGen, hexToRgb, range, rgbToHex } from "../modules/modules.js";

console.log(hexGen()) 
console.log(rgbGen())

console.log(hexToRgb("#c550ac"));
console.log(rgbToHex("rgb(197,80,172)")); */

// EXERCISE 14 : Color generator

/* import { hexGen, rgbGen, colorGen } from "../modules/modules.js";

console.log(colorGen(5,"rgb")); */

// EXERCISE 15 : Shuffle an array by an amazing function

/* import { bychance, range, shuffle } from "../modules/modules.js";

console.log( shuffle([1,2,5,6,"A", "B", true, NaN, "55", 32, 21, "BC", false, "DRFT"]) ); */

// EXERCISE 16 : Factorial

/* import {factorial} from "../modules/modules.js";

console.log(factorial(7)); */

// EXERCISE 16 : Is empty ? || Sum of an array but it returns a particular message in case there is something wrong

/*import {isEmpty} from "../modules/modules.js";

let usr = prompt("OK?")
console.log(isEmpty(usr)) */

/* const sumOfArray = (arr) => {
    let sum = 0;
    for (let x of arr) {
        typeof x === typeof 0
            ? sum += x
            : sum = "There are some characters far from a number!"
    };
    return sum;
};

console.log(sumOfArray([1,2,3,4,5])); */

// EXERCISE 17 : Getting prime numbers till a particular number || Checking whether or not any number is prime || Is unique ? || Are same typeof ?

/* import {primeSorter, isPrime, isUnique, areSameType, bychance} from "../modules/modules.js";

// console.log(isPrime(47));
// console.log(isUnique(["B",2,"C","A",43,"A"]));
// console.log(areSameType(["A", true, null, undefined, "BC", "RE", 12, 21, "FD", false]))
// console.log(areSameType(["A", "BC", "AE"])) */

// EXERCISE 17 : Random Number Generator till a particular number in an array

/* import {uniqueNumbGen, isUnique} from "../modules/modules.js";

// console.log(uniqueNumbGen(8,6));
// console.log(isUnique([uniqueNumbGen(12,9)])); */









        