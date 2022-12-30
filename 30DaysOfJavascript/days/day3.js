// BOOLEANS
    // let isLightOn = true
    // let isRaining = false
    // let isHungry = false
    // let isMarried = true
    // let truValue = 4 > 3    // true
    // let falseValue = 4 < 3  // false

    // Truthy Values :
        // * All numbers(positive and negative) are truthy except zero
        // * All strings are truthy except an empty string ('')
        // * The boolean true

    // Falsy Values :
        // 0
        // 0n
        // null
        // undefined
        // NaN
        // the boolean false
        // '', "", ``, empty string

// UNDEFINED
    // * Variables that wasn't aassigned any value, and functions that don't return any value
        // let firstName;
        // console.log(firstName);           //not defined, because it is not assigned to a value yet

// NULL
    // let empty = null
    // console.log(empty)                    // -> null , means no value inside

// OPERATORS
    // Assignment Operators : Equal sign (=) is used to assign a variable.
    // | = |        | x = y |       | x = y|            | y stored in x |
    // | += |       | x += y |      | x = x + y |       | x + y result is stored in x |
    // | -= |       | x -= y |      | x = x - y |       | x - y result is stored in x |
    // | *= |       | x += y |      | x = x * y |       | x * y result is stored in x |
    // | /= |       | x /= y |      | x = x / y |       | x / y result is stored in x |
    // | %= |       | x %= y |      | x = x % y |       | x % y result is stored in x |
    // | **= |      | x **= y |     | x = x ** y |      | x ** y result is stored in x |

    // Arithmetic Operators
        // Addition (+)         : a + b
        // Subtraction (-)      : a - b
        // Multiplication (*)   : a * b
        // Division (/)         : a / b
        // Modulus (%)          : a % b
        // Exponential (**)     : a ** b

    // Comparison Operators
        // | == |       | Equal Value |                  | x == y |
        // | === |      | Equal Value & Data Type |      | x === y |         <-- It is called 'exactly equality'
        // | != |       | Not Equal Value |              | x != y |
        // | !== |      | Not Equal Value & Data Type |  | x !== y |
        // | > |        | Greater Than |                 | x > y |
        // | < |        | Less Than |                    | x < y |
        // | >= |       | Greater Than or Equal |        | x >= y |
        // | <= |       | Less Than or Equal |           | x <= y |

        // Some examples of comparison operators    
            // console.log(3 > 2)              // true, because 3 is greater than 2
            // console.log(3 >= 2)             // true, because 3 is greater than 2
            // console.log(3 < 2)              // false,  because 3 is greater than 2
            // console.log(2 < 3)              // true, because 2 is less than 3
            // console.log(2 <= 3)             // true, because 2 is less than 3
            // console.log(3 == 2)             // false, because 3 is not equal to 2
            // console.log(3 != 2)             // true, because 3 is not equal to 2
            // console.log(3 == '3')           // true, compare only value
            // console.log(3 === '3')          // false, compare both value and data type
            // console.log(3 !== '3')          // true, compare both value and data type
            // console.log(3 != 3)             // false, compare only value
            // console.log(3 !== 3)            // false, compare both value and data type
            // console.log(0 == false)         // true, equivalent
            // console.log(0 === false)        // false, not exactly the same
            // console.log(0 == '')            // true, equivalent
            // console.log(0 == ' ')           // true, equivalent
            // console.log(0 === '')           // false, not exactly the same
            // console.log(1 == true)          // true, equivalent
            // console.log(1 === true)         // false, not exactly the same
            // console.log(undefined == null)  // true                  (!)
            // console.log(undefined === null) // false

            // console.log(NaN == NaN)         // false, not equal      (!)
            // console.log(NaN === NaN)        // false                 (!)
            // console.log(typeof NaN)         // number                (!)
            
            // console.log('mango'.length == 'avocado'.length)  // false
            // console.log('mango'.length != 'avocado'.length)  // true
            // console.log('mango'.length < 'avocado'.length)   // true
            // console.log('milk'.length == 'meat'.length)      // true
            // console.log('milk'.length != 'meat'.length)      // false
            // console.log('tomato'.length == 'potato'.length)  // true
            // console.log('python'.length > 'dragon'.length)   // false

    // Logical Operators
        // Ampersand    (&&)    : Means AND
        // Pipe         (||)    : Means OR
        // Negation     (!)     : Means NOT

            // && ampersand operator example

            // const check = 4 > 3 && 10 > 5         // true && true -> true
            // const check = 4 > 3 && 10 < 5         // true && false -> false
            // const check = 4 < 3 && 10 < 5         // false && false -> false

            // // || pipe or operator, example

            // const check = 4 > 3 || 10 > 5         // true  || true -> true
            // const check = 4 > 3 || 10 < 5         // true  || false -> true
            // const check = 4 < 3 || 10 < 5         // false || false -> false

            // //! Negation examples

            // let check = 4 > 3                     // true
            // let check = !(4 > 3)                  //  false
            // let isLightOn = true
            // let isLightOff = !isLightOn           // false
            // let isMarried = !false                // true

    // Increment Operator (++)
        // Pre-increment    : ++variable;
            // let count = 0
            // console.log(++count)        // 1
            // console.log(count)          // 1

        // Post-increment    : variable++ ;
            // let count = 0
            // console.log(count++)        // 0
            // console.log(count)          // 1

    // Decrement Operator (--)
        // Pre-decrement    : --variable;
            // let count = 1
            // console.log(--count)        // 0
            // console.log(count)          // 0

        // Post-decrement    : variable-- ;
            // let count = 1
            // console.log(count--)        // 1
            // console.log(count)          // 0

    // Ternary Operators    : Ternary operator allows to write a condition. Another way to write conditionals is using ternary operators.
        // let isRaining = true
        // isRaining
        // ? console.log('You need a rain coat.')
        // : console.log('No need for a rain coat.')
            // Output : 
                // You need a rain coat.

        // isRaining = false

        // isRaining
        // ? console.log('You need a rain coat.')
        // : console.log('No need for a rain coat.')
            // Output : 
                // No need for a rain coat.

        // let number = 5
        // number > 0
        // ? console.log(`${number} is a positive number`)
        // : console.log(`${number} is a negative number`)
            // Output : 
                // `5 is a positive number`

        // number = -5
        
        // number > 0
        // ? console.log(`${number} is a positive number`)
        // : console.log(`${number} is a negative number`)
            // Output : 
                // `-5 is a negative number`

// WINDOW METHOD
    // alert('message')     : Displays an alert box with a specified message and an OK button. It is preferred just to test     (built-in)
    // prompt()             : Provides user to type something. It takes two parameters and the second one is optional.
        // let number = prompt('Enter number', 'number goes here')
        // console.log(number)

    // confirm('message')   : Provides user with a confirm box that has Ok and Cancel button on. OK is true, Cancel is false.
        // const agree = confirm('Are you sure you'd like to delete? ')
        // console.log(agree)           <-- The result will be true or false based on what you click on the dialog box

// DATE OBJECT
    // * A date object values are started with a word 'get' because it provide the information.
    // getFullYear()        : Gets the year as a four digit number.                     (e.g. 2020)
    // getMonth()           : Gets the Month        (between 0-11).      (e.g. 4)
    // getDate()            : Gets the Date         (between 1-31).      (e.g. 17)
    // getHours()           : Gets the Hours        (between 0-23).      (e.g. 22)
    // getMinutes()         : Gets the Minutes      (between 0-59).      (e.g. 55)
    // getSeconds()         : Gets the Seconds      (between 0-59).      (e.g. 42)
    // getMilliSeconds()    : Gets the Milliseconds (between 0-999).     (e.g. 742)
    // getTime()            : Gets time as Milliseconds since Jan 1 1970 (e.g. 1669409094330)
    // getDay()             : Gets the day of the week  (between 0-6)    (e.g. 6)

    // Creating A Time Object :
        // const now = new Date()
        // console.log(now)                     // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)

        // console.log(now.getFullYear())       // 2020
        // console.log(now.getDate())           // 4, because the day of the month is 4th,  day (1-31)

        // const allSeconds = Date.now()
        // console.log(allSeconds)              // 1578092201341

        // const timeInSeconds = new Date().getTime()
        // console.log(allSeconds == timeInSeconds)         // true
        // console.log(allSeconds === timeInSeconds)        // true

    // How To Make It Readable ;
        // const now = new Date()
        // const year = now.getFullYear()              // return year
        // const month = now.getMonth() + 1            // return month(0 - 11)
        // const date = now.getDate()                  // return date (1 - 31)
        // const hours = now.getHours()                // return number (0 - 23)
        // const minutes = now.getMinutes()            // return number (0 -59)
        // const seconds = now.getSeconds()            // return number (0 -59)
        
        // console.log(`${date}/${month}/${year} ${hours}:${minutes}:${seconds}`) // 4/1/2020 0:56


// EXERCISE 11 ;

/* let firstName = "Murtaza";
let lastName = "Derin";

let check = firstName.length > lastName.length
            ? "Your name is longer than your family name"
            : "Your family name is longer than your name";

console.log(check); */

// EXERCISE 12 ;

/* const myAge = 30,
    yourAge = 30;

const suffix = "s";

let preCheck = myAge > yourAge
    ? `I'am ${myAge - yourAge} year older than you`
    : `You're ${yourAge - myAge} year older than me`;

let fullCheck = ((myAge - yourAge) > 1) || ((yourAge - myAge) > 1)
            ? preCheck.replace("year", "years")
            : preCheck;


console.log(fullCheck); */

// EXERCISE 13 ;        // Check the age of driver licence

/* let userAge = +prompt("Birth Year : ");
let getYear = parseInt(new Date().getFullYear());

let check =  (getYear - userAge) >= 18
    ? "You are in enough age to get a drive licence"
    : `You should wait ${18 - (getYear - userAge)} years more`;

console.log(check); */

// EXERCISE 14 ;        // Get age in seconds

/* let usr_ = [+prompt("Birth year : "), +prompt("Birth month : "), +prompt("Birth day : ")];
let date_ = new Date(usr_[0], usr_[1] - 1, usr_[2]);
let mSeconds = date_.getTime() / 1000;

let result = mSeconds < 0
    ? mSeconds * (-1)
    : mSeconds;



console.log(result); */

// EXERCISE 15 ;        // Readable time format

/* let date_ = new Date();
let year = date_.getFullYear();
let month = date_.getMonth() + 1;
let getDate = date_.getDate();
let hours = date_.getHours();
let minutes = date_.getMinutes();

let result = `Today's date is ${year}/${month}/${getDate} - ${hours}:${minutes}`;
console.log(result); */

// EXERCISE 16 ;        // Readable time format with leading Zero

/* let date_ = new Date();
let dateArr = [date_.getFullYear(), date_.getMonth() + 1, date_.getDate(), date_.getHours(), date_.getMinutes()];

for (let i = 0; i < dateArr.length; i++) {
    dateArr[i] = dateArr[i].toString();
    
    dateArr[i].length === 1
    ? dateArr[i] = `0${dateArr[i]}`
    : dateArr[i] = dateArr[i];
};

dateArr = `${dateArr[0]}/${dateArr[1]}/${dateArr[2]} ${dateArr[3]}:${dateArr[4]}`; 
console.log(dateArr); */

