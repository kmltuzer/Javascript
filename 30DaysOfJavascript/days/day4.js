// CONDITIONALS : Statements in JavaScript script executed sequentially from top to bottom.
    // IF syntax   :
        // if (condition) {
                //this part of code runs for truthy condition
        // }

            // let isRaining = true
            // if (isRaining) {
            //   console.log('Remember to take your rain coat.')
            // }                                      

    // IF ELSE syntax   :
        // if (condition) {
        //     // this part of code runs for truthy condition
        // } else {
        //     // this part of code runs for false condition
        // }
            
            // num = -3
            // if (num > 0) {
            // console.log(`${num} is a positive number`)

            // } else {
            // console.log(`${num} is a negative number`)       // -3 is a negative number

    // ELSE IF syntax   :
        // syntax
            // if (condition) {
            //     // code
            // } else if (condition) {
            //   // code
            // } else {
            //    //  code

            // }

                // let weather = 'sunny'
                // if (weather === 'rainy') {
                //   console.log('You need a rain coat.')
                // } else if (weather === 'cloudy') {
                //   console.log('It might be cold, you need a jacket.')
                // } else if (weather === 'sunny') {
                //   console.log('Go out freely.')
                // } else {
                //   console.log('No need for rain coat.')
                // }

                // let a = 0
                // if (a > 0) {
                //   console.log(`${a} is a positive number`)
                // } else if (a < 0) {
                //   console.log(`${a} is a negative number`)
                // } else if (a == 0) {
                //   console.log(`${a} is zero`)
                // } else {
                //   console.log(`${a} is not a number`)
                // }
                                                                                        // Using of one-line if, else if, else structure       (!) 
                // const aLetter = "R";                                                         

                // if (aLetter === "A")         console.log("Yep! It's A")
                // else if (aLetter === "R")    console.log("Yep! It's R")              // Yep! It's R     
                // else                         console.log("Nope!")

            // SWITCH
                // * Switch is an alternative for if else if else else. 
                // * The switch statement starts with a switch keyword followed by a parenthesis and code block.
                // * Inside the code block we will have different cases.
                // * Case block runs if the value in the switch statement parenthesis matches with the case value.
                // * The BREAK statement is to terminate execution so the code execution does not go down after the condition is satisfied.
                // * The DEFAULT block runs if all the cases don't satisfy the condition.

                // Syntax :
                    // switch(caseValue){
                    // case 1:
                        // code
                    //   break
                    // case 2:
                        // code
                    //  break
                    // case 3:
                        // code
                    //  break
                    // default:
                        // code
                //   }                  // BREAK isn't needed in the DEFAULT

                // let weather = 'cloudy'
                // switch (weather) {
                //   case 'rainy':
                //     console.log('You need a rain coat.')
                //     break
                //   case 'cloudy':
                //     console.log('It might be cold, you need a jacket.')
                //     break
                //   case 'sunny':
                //     console.log('Go out freely.')
                //     break
                //   default:
                //     console.log(' No need for rain coat.')
                // }
                
                // Switch More Examples
                    // let dayUserInput = prompt('What day is today ?')
                    // let day = dayUserInput.toLowerCase()
                    
                    // switch (day) {
                    //   case 'monday':
                    //     console.log('Today is Monday')
                    //     break
                    //   case 'tuesday':
                    //     console.log('Today is Tuesday')
                    //     break
                    //   case 'wednesday':
                    //     console.log('Today is Wednesday')
                    //     break
                    //   case 'thursday':
                    //     console.log('Today is Thursday')
                    //     break
                    //   case 'friday':
                    //     console.log('Today is Friday')
                    //     break
                    //   case 'saturday':
                    //     console.log('Today is Saturday')
                    //     break
                    //   case 'sunday':
                    //     console.log('Today is Sunday')
                    //     break
                    //   default:
                    //     console.log('It is not a week day.')
                    // }

                    // Some Examples About The Switch :

                        // let num = prompt('Enter number');
                        // switch (true) {
                        //   case num > 0:
                        //     console.log('Number is positive');
                        //     break;
                        //   case num == 0:
                        //     console.log('Numbers is zero');
                        //     break;
                        //   case num < 0:
                        //     console.log('Number is negative');
                        //     break;
                        //   default:
                        //     console.log('Entered value was not a number');
                        // }

            // TERNARY OPERATORS
                // * Another way to create conditional statement is Ternary Operators.

                // let isRaining = true;
                // isRaining
                //   ? console.log('You need a rain coat.')
                //   : console.log('No need for a rain coat.');

// EXERCISE 1 :
/*    let usr = prompt("Type a number : ");
    let check = (usr % 2) === 0
        ? "It's an even number"
        : "It's an odd number";

    console.log(check); */
       
// EXERCISE 2 :

/*    let usr = +prompt("Type your point : ");
    switch (true){
        case (usr >= 90) && (usr <= 100):
            console.log("A")
            break;
        case (usr >= 70) && (usr < 90):
            console.log("B")
            break;
        case (usr >= 55) && (usr < 70):
            console.log("C")
            break;
        case (usr >= 45) && (usr < 55):
            console.log("D")
            break;
        default:
            console.log("You don't have enough point to pass the exam :(");
    }; */

// EXERCISE 3 :

/* let seasons = {
        1       : "january",
        2       : "february",
        3       : "march",
        4       : "april",
        5       : "may",
        6       : "june",
        7       : "july",
        8       : "august",
        9       : "september",
        10      : "october",
        11      : "november",
        12      : "december" 
};

let usr = +prompt("Type the number of a month : ");

switch (true) {
    case (1 <= usr) && (usr <= 3) :
        console.log(`The month is ${seasons[usr]} and we are in winter.`)
        break;

    case (4 <= usr) && (usr <= 6) :
        console.log(`The month is ${seasons[usr]} and we are in spring.`)
        break;

    case (7 <= usr) && (usr <= 9 ):
        console.log(`The month is ${seasons[usr]} and we are in summer.`)
        break;

    case (10 <= usr) && (usr <= 12) :
        console.log(`The month is ${seasons[usr]} and we are in autumn.`)
        break;

    default:
        console.log("It's not a month!");
};  */

// EXERCISE 4 :


/* let usr = prompt("What's today ?");
let modify = usr.toLowerCase().slice(0,3);

switch (true) {
    case ["sat", "sun"].includes(modify)  :
        console.log(`${usr} is weekend day.`)
        break;

    case ["mon", "tue", "thu", "fri", "wed"].includes(modify)   :
        console.log(`${usr} is working day.`)
        break;

    default:
        console.log("It's not a day!");
}; */

// EXERCISE 5 :     Get the number of the days in a month with leap year

/*let usr = prompt("Type the month : ");
let usrModify = usr.toLowerCase();

let year = new Date().getFullYear();

switch (true) {
    case ["january", "march", "may", "july", "august", "october", "december"].includes(usrModify) :
        console.log(`${usr} has 31 days`)
        break;

    case ["april", "june", "september","november"].includes(usrModify) :
        console.log(`${usr} has 30 days.`)
        break;

    case (usrModify === "february") :
        (Math.abs(2020 - year) === 4)
        ? console.log(`${usr} has 29 days`)
        : console.log(`${usr} has 28 days`)
        break;

    default :
        console.log("It's not a month!");

}; */