// CONSOLE

/*  console.log("First Day Of JS");                      // <-- 1 Argument
    console.log("First", "Day", "Of", "JS");            // <-- Multiple Argument
        // Some arithmetical processes on the console
    console.log(2 + 3)                                  // Addition
    console.log(3 - 2)                                  // Subtraction
    console.log(2 * 3)                                  // Multiplication
    console.log(3 / 2)                                  // Division
    console.log(3 % 2)                                  // Modulus - finding remainder
    console.log(3 ** 2)  */                             // Exponentiation 3 ** 2 == 3 * 3

// SYNTAX
        // Syntax is like the order where people are using words in their own languages to communicate to each other.
    // Some Syntax Errors
    // invalid or unexpected token      :    related to quotes or backtick
    // missing ) after argument list    :    related to paranthesis
    // The process of identifying and removing errors from a program is called debugging.

// ADDING JS INTO HTML FILE
    // JavaScript can be added to a web page in three different ways:
        // <button onclick="alert('Hello World')"> BUTTON </button>     <-- Inline Script
        // <script> Some JS Codes in HTML Page </script>                <-- Internal Script (To use in <body> element is the most preferred option)
        // <script src="./jsFile.js"></script>                          <-- External Script (Mostly in <body> element.)
// NOTE : Main.js should be below them all (!)

//DATA TYPES
    // String, Number, Boolean, undefined, Null, and Symbol                 <-- They're called primitive data types
        // Numbers      : -3, -2.1, -0.28, 0, 0.54, 3, 4.12, 7.05, ...
        // Strings      : "Strings are textes between quotes"
        // Boolean      : A boolean value is either True or False
        // Undefined    :  Variables that are assigned nothing, or functions that aren't returning anything are undefined. (e.g. let firstName;)
        // Null         : Empty value.  (e.g. let emptyValue = null)
    // typeof keyword is used to check data types

// VARIABLES
    // const, let, var  : They're used to define a variable
        // let     : It is used for a variable that changes at a different time.
        // const   : It is used for a variable that won't change at all. Datas in a variable made with const can never be changed.
        // var     : It isn't preferred much because has some issues.
    // Some ways to produce a variable name :
        // 1-) A JavaScript variable name should not begin with a number.
        // 2-) A JavaScript variable name does not allow special characters except dollar ($) sign and underscore (_).
        // 3-) A JavaScript variable name follows a camelCase convention.
        // 4-) A JavaScript variable name should not have space between words.
    // Some examples of variable names :
        // firstName        <-- camelWithOneHump    (CamelWithTwoHump is generally used to define a class name)
        // lastName         <-- camelWithOneHump
        // country
        // city
        // capitalCity
        // age
        // isMarried
        // first_name
        // last_name
        // is_married
        // capital_city
        // num1
        // num_1s
        // _num_1
        // $num1
        // year2020
        // year_2020

    //Some examples of declared variables
/*      let firstName = 'Asabeneh' // first name of a person
        let lastName = 'Yetayeh' // last name of a person
        let country = 'Finland' // country
        let city = 'Helsinki' // capital city
        let age = 100 // age in years
        let isMarried = true

        console.log(firstName, lastName, country, city, age, isMarried); 

        const gravity = 9.81 // earth gravity  in m/s2
        const boilingPoint = 100 // water boiling point, temperature in °C
        const PI = 3.14 // geometrical constant
        console.log(gravity, boilingPoint, PI)

    // Variables can also be declared in one line
        let name = "John",
            lastname = "Johnson",
            age = 26;
*/ 