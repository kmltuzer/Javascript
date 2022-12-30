/* let arr = ["rock","paper", "scissors"];
let pOneChoice = prompt("Say something : ");
let comp = arr[Math.floor(Math.random() * arr.length)];
let message;

if (arr.includes(pOneChoice)){
    if (pOneChoice === "rock" && comp === "paper"){
        message = "Computer Win!";
    } else if (pOneChoice === "paper" && comp === "scissors"){
        message = "Computer Win!";
    } else if (pOneChoice === "scissors" && comp === "paper"){
        message = "Computer Win!";
    } else if (pOneChoice === comp){
        message = "Again!"
    } else{
        message = "Player One Win!";
    }
} else{
    message = "There's nothing like that in this game!"
}

console.log(message);
console.log(`Computer : ${comp}`);
console.log(`Player One : ${pOneChoice}`);
console.log(arr.includes(pOneChoice));   */


// let arr = ["rock", "paper", "scissors"];
// let comp = arr[Math.floor(Math.random() * arr.length) + 1];
// let text;
// let userChoice = prompt();

// switch (userChoice){
//     case arr[0]:
//         if (comp === arr[0]){
//             text =  "Again! Tie the game...";
//         } else if (comp === arr[1]){
//             text = "Computer Win";
//         } else{
//             text = "You Win!"
//         }
//         break;

//     case arr[1]:
//         if (comp === arr[1]){
//             text =  "Again! Tie the game...";
//         } else if (comp === arr[0]){
//             text = "You Win";
//         } else{
//             text = "Computer Win!"
//         }
//         break;

//     case arr[2]:
//         if (comp === arr[2]){
//             text =  "Again! Tie the game...";
//         } else if (comp === arr[0]){
//             text = "Computer Win";
//         } else{
//             text = "You Win!"
//         }
//         break;

//     default:
//         text = "There is something that goes wrong!";
// };

// console.log(text);

/* let arr = ["rock", "paper", "scissors"];
let usr = prompt();
let cpu = arr[Math.floor(Math.random() * arr.length) + 1];
let result = usr === cpu
            ? "Tie Game!"
            : usr === arr[0] && cpu === arr[1]
            ? "CPU Win!"
            : usr === arr[1] && cpu === arr[2]
            ? "CPU Win!"
            : usr === arr[2] && cpu === arr[0]
            ? "CPU Win!"
            : "You Win!"

console.log(result) */

/* //let usr = confirm("Are you sure to leave this page?");
let input = prompt("How old are you?");

if (input){
    console.log(input.length);
    console.log(input.trim().length);
    console.log(input.trim());
} else{
    console.log("You didn't enter your name!");
} */


//ROCK, PAPER, SCISSORS

/* let usr = confirm("Shall we play rock paper scissors?");

while (usr){
    const arr     = ["rock", "paper", "scissors"];
    const randomNumb = Math.floor(Math.random() * arr.length);
    const comp    = arr[randomNumb];
    let result;
    let usrChoice = prompt("Pick one among 'rock', 'paper' or 'scissors' ");
    let again;
        if (usrChoice){
            usrChoice = usrChoice.trim().toLowerCase();
            if (arr.includes(usrChoice)){
                result = usrChoice === comp
                    ? "Tie game!"
                    : usrChoice === arr[0] && comp === arr[1]
                    ? "Computer Win!"
                    : usrChoice === arr[1] && comp === arr[2]
                    ? "Computer Win!"
                    : usrChoice === arr[2] && comp === arr[0]
                    ? "Computer Win!"
                    : "You Win!";
                again =  confirm(`${result}\nYou : ${usrChoice}\nComputer : ${comp}\nRandom Numb : ${randomNumb}\n Do you want to play again?`);
                if (again){
                    continue;
                } else {
                    console.log("OK, Thanks for the play. Chao...");
                    break;
                }

            } else {
                console.log("It's not one of them!");
                continue;
            };

        } else if (usrChoice === ""){ 
            console.log("You didnt any value");
            continue;

        } else {
            console.log("I guess you changed your mind");
            break;
        }
};
if (!usr) {
    console.log("OK. Thanks anyway :(");
}; */

// LOOPS

/* let myNumb = Number(prompt("Type a number less than 50"));
while (myNumb <= 50) {
     console.log(myNumb);
     myNumb += 2;
}; */

/* let names = ["John", "Memduh", "Murtaza", "Daniel", "Carolin", "Janet"]
let counter = 0;

while (counter < names.length){
    if (names[counter] == "Carolin") {
        console.log(`Yep! ${names[counter]} Found`);
        break;
    } else {
        counter ++;
    };
}; */

// FUNCTIONS

/* function sum(numb1, opr, numb2){
    let result;
    while ( true ){
        if ( numb1 && opr && numb2) {
            result = opr === "+" 
                ? numb1 + numb2
                : opr == "-"
                ? numb1 - numb2
                : opr == "/"
                ? numb1 / numb2
                : opr == "*"
                ? numb1 * numb2
                : "You didn't type an operator!\nCancelled...";
            break;
        } else {
            result = "It's ridiculous!";
            break;
        }
    }

    return result;
}
let usr1 = Number(prompt("First Value"));
let operator = prompt("Operator").toString();
let usr2 = Number(prompt("Second Value"));

console.log(sum(usr1, operator, usr2)); */ // Calculator


/* const capitalize = (usrName) => {
    return usrName.charAt(0).toUpperCase() + usrName.slice(1).toLowerCase();
}

console.log(capitalize("MEmDuH")); */

//SCOPES

/* var x = "x function";
let y = "y function";
const z = "z global";

{
    var x = "x local";
    let y = "y local";
    const z = "z local";

    console.log(x);
    console.log(y);
    console.log(z);
}

console.log(x);
console.log(y);
console.log(z); */

/* var     x = "x";
let     y = "y";
const   z = "z";

console.log(`global ${x}`);
console.log(`global ${y}`);
console.log(`global ${z}`);

function showMe(){
    console.log(`function ${x}`);
    console.log(`function ${y}`);
    console.log(`function ${z}`);
        
    {
        console.log(`block ${x}`);
        console.log(`block ${y}`);
        console.log(`block ${z}`);
        
    };
};

showMe(); */

/* let x = 0;
const y = 1;        // 'const' doesnt accept a reassignment

x = "let variable";
y = "const variable";

console.log(x);
console.log(y); */

/* let myArr = ["A", "B", "C", "D"];

// myArr[0] = "Dave";
// myArr[1] = false;
// myArr[2] = null;
// myArr[3] = 12;
// myArr[4] = undefined;
// myArr[5] = {type : '500'};

// console.log(myArr);
// console.log(myArr[myArr.length -1]);

let newArr = "Dave-Toty-Foty-Moty".split("-");

console.log(newArr); */

// RPS WITH FUNCTIONS

/* const initGame = () => {
    const startGame = confirm("Shall we play a RPS Game?");
    startGame ? playGame() : alert("OK. Maybe next time..");
};

const rpsArr = ["rock", "paper", "scissors"];


const playGame = () => {
    
    while (true){
        let playerChoice = getPlayerChoice();
        playerChoice = modifyChoice(playerChoice);

        if (playerChoice === ""){
            invalidChoice();
            continue;

        } else if (!playerChoice) {
            decidedNotToPlay();
            break;

        } else {

            playerChoice = evaluatePlayerChoice(playerChoice);
            if (playerChoice !== false){
                const cpuChoice = getCpuChoice();
                determineWinner(playerChoice, cpuChoice);
                if (askToPlay()){
                    continue;
        
                } else {
                    thanks();
                    break;
                };

            } else {
                invalidChoice();
                continue;
            };
        };

    };

};

const getPlayerChoice = () => {
    return prompt("Type rock, paper or scissors");
}
const modifyChoice = (pChoice) => {
    if (pChoice === null){
        return false;
    } else{
        return pChoice.trim().toLowerCase();
    }
}
const invalidChoice = () => {
    alert("You didin't rock, paper or scissors!")
}
const decidedNotToPlay = () => {
    return alert("I think, you changed your mind, see you ...");
}
const evaluatePlayerChoice = (evaluate) => {
    if (rpsArr.includes(evaluate)) {
        return evaluate;

    } else {
        return false;
    };
};

const getCpuChoice = () => {
    const randomNumb =  Math.floor(Math.random() * rpsArr.length);
    return rpsArr[randomNumb];
};

const determineWinner = (player, cpu) => {
    let result = (
        player === rpsArr[0] && cpu === rpsArr[1]) || (player === rpsArr[1] && cpu === rpsArr[2]) || (player === rpsArr[2] && cpu === rpsArr[0]
            )
            ? "Computer Win!"
            : player === cpu
            ? "Tie Game!"
            : "You Win!";

    alert(`${result}\nYou : ${player}\nComputer : ${cpu}`);
};

const askToPlay = () => {
    return confirm("\nDo you wanna play again?");
};

const thanks = () => {
    alert("OK. Thank for the game. See ya!")
};

initGame(); */

//OBJECTS

/* const myObj = {
    alive       : true,
    answer      : 42,
    hobbies     : ["Eat", "Sleep", "Code"],
    beverage    : {
        morning     : "Tea",
        afternoon   : "Coffee",
    },
    action      : function(){
        return `It's time to drink ${this.beverage.afternoon}`
    },
};

console.log(myObj.action()); */

// 3 h 15 m

// DESTRACTURING        ES6


 /* // let countries = [
//     ["Finland", "Helsinki"],
//     ["US", "Los Angeles"],
//     ["Germany", "Hamburg"]
// ]

// let [first = ["UK", "Manchester"], second, third] = countries;

// console.log(countries);

function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
  
    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

console.log(add);

// SPREAD OPERATOR      ES6

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021, 
    color: 'yellow',
    model : "Fiesta"
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
console.log(myUpdatedVehicle); */

// JSON

/* const myObj = {
    name : "Memduh",
    lastname: "Demir",
    age : 41,
    hello : function () {
        console.log(`Hello ${this.name} ${this.lastname}`)
    }
};

const sendJSON = JSON.stringify(myObj);

console.log(myObj.hello());
console.log(sendJSON.name);

const receiveJSON = JSON.parse(sendJSON);

console.log(receiveJSON); */

// ERRORS

/*const error = () => {
    try{
        const name = "XXX";
        name = "YYY";
    } catch (err) {
        console.warn(err.message);
    };
};

error(); */

/* const myErr = () => {
    let i = 0;
    while (i <= 5){
        try {
            if (i % 2 === 0 ) {
                throw new Error("It's an even number!");
            };
            console.log(i);
        } catch (err) {
            console.error(err.stack);
        } finally {
            console.log("... finally");
            i++;
        };
    };
};

myErr(); */


// DOM (Document Object Model)

/* const boxCont = document.getElementById("view1");
console.log(boxCont);

const view2 = document.querySelector("header");
view2.style.backgroundColor = "hotpink";

view2.textContent = "Hi World!"

const boxes = boxCont.querySelectorAll("div:nth-of-type(2n)");
console.log(boxes[0].parentElement.childNodes);

for (let i = 0; i <= boxes.length; i++) {
    boxes[i].style.backgroundColor = "blue";
} */


// const boxCont = document.getElementById("view1");


 /* // const newDiv = (parent, iter) => {
//     const createDiv = document.createElement("div");
//     createDiv.style.backgroundColor = "blue";

//     createDiv.style.display = "flex";
//     createDiv.style.flexWrap = "wrap";
//     createDiv.style.justifyContent = "center";
//     createDiv.style.alignItems = "center";

//     createDiv.textContent = iter;
//     createDiv.style.width = "200px";
//     createDiv.style.height = "200px";

//     createDiv.style.backgroundColor = "black";

//     createDiv.style.color = "white";

//     createDiv.style.display = "flex";

//     parent.append(createDiv);
// }   

// for ( let i = 0; i <= 12; i++)  {
//     newDiv(boxCont, i);
// } */


// EVENT LISTENERS

/*const button = document.querySelector("#del-btn");
button.addEventListener("click", (event) =>{

    // console.log("clicked");
    // const _target = event.target;
    // console.log(_target);
    // console.log(event.target.id);
    // console.log(event.target.classList);
    // console.log(event.target.type);

    const boxList = document.querySelectorAll(".box");
    for (let i = 0; i <= boxList.length ; i++) {
    }
}); */

// const myArr = ["eat", "drink", "code"];

// const myObj = {
//     name : "Dave",
//     hobbies : ["eat", "drink", "code"],
//     logName : () => {
//         console.log(this.name);
//     }
// };


// sessionStorage.setItem("mySessionStore", JSON.stringify(myObj));

// const getSession = sessionStorage.getItem("mySessionStore");
// console.log(getSession);

 // 6 h 10 m

