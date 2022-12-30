// SCOPE
// * Scopes can be be GLOBAL or LOCAL.
// * Variable can be declared globally or locally scope.
// * Anything declared without let, var or const is scoped at global level.                     (!)

// scope.js
// a = 'JavaScript'                 // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10                           // this is a global scope variable and found in the window object       (!)
// function letsLearnScope() {
//   console.log(a, b)
//   if (true) {
//     console.log(a, b)
//   }
// }
// console.log(a, b)                // accessible

// Global Scope :
// * A globally declared variable can be accessed everywhere in the same file.
// * But the term global is relative.
// * It can be global to the file or it can be global relative to some block of codes.

//scope.js
// let a = 'JavaScript'                 // is a global scope it will be found anywhere in this file
// let b = 10                           // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//   console.log(a, b)                  // JavaScript 10, accessible
//   if (true) {
//     let a = 'Python'
//     let b = 100
//     console.log(a, b)                // Python 100 (These a and b are different from the ones in the global scope.)
//   }
//   console.log(a, b)
// }
// letsLearnScope()
// console.log(a, b)                    // JavaScript 10, accessible (If we had called the ones in the local scopes, it would be print them.)

// Local Scope :
// * A variable declared as local can be accessed only in certain block code.
// * Local scope types : 
// -Block scope
// -Function scope

//scope.js
// let a = 'JavaScript'                     // is a global scope it will be found anywhere in this file
// let b = 10                               // is a global scope it will be found anywhere in this file

// Function scope

// function letsLearnScope() {
//   console.log(a, b)                      // JavaScript 10, accessible
//   let value = false

// Block scope

//   if (true) {                        We can access from the function and outside the function but variables declared inside - 
//                                      the 'if block' will NOT be accessed outside the 'if block'          (!)
//     let a = 'Python'
//     let b = 20
//     let c = 30
//     let d = 40
//     value = !value
//     console.log(a, b, c, value)          // Python 20 30 true
//   }
//                                          // We can NOT access the c because the scope of the c is only in the 'if block'.
//   console.log(a, b, value)               // JavaScript 10 true
// }
// letsLearnScope()
// console.log(a, b)                        // JavaScript 10, accessible

// * A variable declared with var only scoped to function.
// * Ones declared with let or const are block scope (function block, if block, loop block, etc).       (!)
// * Block in JavaScript is codes, we've typed, between two curly brackets ({}).

//scope.js
// function letsLearnScope() {
//     var gravity = 9.81
//     console.log(gravity)

//   }
//   // console.log(gravity)                // Uncaught ReferenceError: gravity is not defined

//   if (true){
//     var gravity = 9.81
//     console.log(gravity) // 9.81
//   }
//   console.log(gravity)  // 9.81

//   for(var i = 0; i < 3; i++){
//     console.log(i) // 0, 1, 2
//   }
//   console.log(i) // 3

// When we use let or const our variable is block scoped and it will NOT infect other parts of our code.

//scope.js
// function letsLearnScope() {
//     const gravity = 9.81                 // We can use let or const, but gravity is constant I prefer to use const
//     console.log(gravity)
//   }
//   console.log(gravity)                   // Uncaught ReferenceError: gravity is not defined

//   if (true){
//     const  gravity = 9.81
//     console.log(gravity) // 9.81
//   }
//   console.log(gravity)                   // Uncaught ReferenceError: gravity is not defined

//   for(let i = 0; i < 3; i++){
//     console.log(i) // 0, 1, 2
//   }
//   console.log(i)                         // Uncaught ReferenceError: i is not defined

// * The scope let and const are the same. 
// * The difference is only reassigning.                                    
// * We can not change or reassign the value of the const variable.             (!)
// * We can use ;
// let for any value which change, 
// const for any constant value, and for an array, object, arrow function and function expression.

// OBJECT
// * Everything can be an object and objects do have properties and properties have values.
// * Objects consist of the pair of key and value.

// NOTE : To define that a variable will be key in an object, we must use square brackets. (e.g. let prop = key { [prop] : 10 }) --> { key : 10 }   (!)

// Creating an empty object ;
// const obj = {}

// Creating an objecting with values ;
// * The value of properties or keys could be a string, number, boolean, an object, null, undefined or a function.
// * Each key has to have a value in the object.

// const rectangle = {
//     length: 20,
//     width: 20
//   }
//   console.log(rectangle)                             // {length: 20, width: 20}

//   const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     isMarried: true
//   }
//   console.log(person)

// Getting values from an object :                                                  
// -using . followed by key name if the key-name is a one word
// -using square bracket and a quote

//   accessing values using . (dot) ;

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     getFullName: function() {
//       return `${this.firstName}${this.lastName}`
//     },
//     'phone number': '+3584545454545'
//   }
//   console.log(person.firstName)
//   console.log(person.lastName)
//   console.log(person.age)
//   console.log(person.location)                 // undefined

//   value can be accessed using square bracket and key name ;

//   console.log(person['firstName'])
//   console.log(person['lastName'])
//   console.log(person['age'])
//   console.log(person['age'])
//   console.log(person['location'])             // undefined
//   console.log(person['phone number'])         // For instance, to access the phone number we only use the square bracket method

// Creating object methods :
// * We can call a function in an object  as a method.                      (!)
// * The 'this' key word refers to the object itself.                       (!)
// * We can use the word this to access the values of different properties of the object.

// NOTE : We CANNOT use an arrow function as object method because the word 'this' refers to the window inside an arrow function instead of the object 
// itself.                                                                          (!)
// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`
//     }
//   }
//   console.log(person.getFullName())                              // Asabeneh Yetayeh

// Setting new key for an object :
// * An object is a mutable data structure.
// * We can modify the content of an object after it gets created.

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     city: 'Helsinki',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     getFullName: function() {
//       return `${this.firstName} ${this.lastName}`
//     }
//   }
//   person.nationality = 'Ethiopian'
//   person.country = 'Finland'
//   person.title = 'teacher'
//   person.skills.push('Meteor')
//   person.skills.push('SasS')
//   person.isMarried = true

//   person.getPersonInfo = function() {
//     let skillsWithoutLastSkill = this.skills
//       .splice(0, this.skills.length - 1)
//       .join(', ')
//     let lastSkill = this.skills.splice(this.skills.length - 1)[0]

//     let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
//     let fullName = this.getFullName()
//     let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
//     return statement
//   }
//   console.log(person)
//   console.log(person.getPersonInfo())

// Object Methods
// * There are different methods to manipulate an object. Let us see some of the available methods.
// Object.assign()  : To copy an object without modifying the original object.
// Object.keys()    : To get the keys or properties of an object as an array.           (!)
// Object.values()  : To get values of an object as an array.                           (!)
// Object.entries   : To get both keys and values of an object as an array.             (!)
// hasOwnProperty() : To check if a specific key or property exist in an object.        (!)
// delete obj[key]  : A property in an object can be deleted wth this keyword           (!)

// Getting a copy of an object keys using Object.assign()
// const person = {
//     firstName: 'Asabeneh',
//     age: 250,
//     country: 'Finland',
//     city:'Helsinki',
//     skills: ['HTML', 'CSS', 'JS'],
//     title: 'teacher',
//     address: {
//       street: 'Heitamienkatu 16',
//       pobox: 2002,
//       city: 'Helsinki'
//     },
//     getPersonInfo: function() {
//       return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
//     }
//   }

//   const copyPerson = Object.assign({}, person)
//   console.log(copyPerson)

// Getting object keys using Object.keys()
// const keys = Object.keys(copyPerson)
// console.log(keys)                            //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']

// const address = Object.keys(copyPerson.address)
// console.log(address)                             //['street', 'pobox', 'city']

// Getting object values using Object.values()
// const values = Object.values(copyPerson)
// console.log(values)

// Getting object keys and values using Object.entries()                            (!)
// const entries = Object.entries(copyPerson)
// console.log(entries)

// Checking properties using hasOwnProperty()
// console.log(copyPerson.hasOwnProperty('name'))
// console.log(copyPerson.hasOwnProperty('score'))

// EXERCISE 1 : Find the person who has many more skills than the others. || Ones having 50 points or more and ones logged in.

/* import { users } from "../others/person.js";
import { countries } from "../others/countries.js";

let mostSkilled = [0, ""];                                   // mostSkilled
for (let i of Object.keys(users)) {
    users[i].skills.length > mostSkilled[0]
        ? (mostSkilled[0] = users[i].skills.length) && (mostSkilled[1] = `${i}`) : "";
};
console.log(mostSkilled); */

/* let loggedIn = []                                    // isLoggedIn ?
for (let key of Object.keys(users)) {
    users[key].isLoggedIn
        ? loggedIn.push([key, users[key].isLoggedIn]) : "";
};
console.log(loggedIn); */

/* let fiftyOrGreater = []                                    // fiftyPoint or greater than
for (let key of Object.keys(users)) {
    users[key].points >= 50
        ? fiftyOrGreater.push([key, users[key].points]) : "";
};
console.log(fiftyOrGreater); */

// EXERCISE 2 : Find MERN Stack Devs || Set the name of an object property

/* let mernDevs = {};                                             
for (let key of Object.keys(users)) {
    users[key].skills.includes("MongoDB", "Express", "Node", "React")
        ? mernDevs[key] = users[key].skills
        : "";
}
console.log(mernDevs); */

/* users["Memduh"] = users["Paul"]
delete users["Paul"]
users["Memduh"].email = "memduh@gmail.com"
console.log(users) */


/* const getAll = () => {
    let arr = [];
    for (let x = 0; x < Object.keys(users).length; x++) {
        arr[x] = [Object.keys(users)[x],[users[Object.keys(users)[x]]]]
    };
    return arr;
};
console.log(getAll()); */

// EXERCISE 3 : Generating fake country object

/* import { alphabet, bychance } from "../modules/modules.js";

let arr = [];                                                           
let country = {};
let alph = alphabet(0,10).join("").toUpperCase().split("");

for ( let i of countries ) {
    if (i.startsWith(alph[0])) {
        alph.splice(0,1)
        arr.push(i)
        country[i] = {
            lang        : i[0].concat(i[1],i[2]).toUpperCase(),
            population  : bychance(53,71).toString().concat("03050"),
            capital     : ""
        }
    }

}

console.log(arr)
console.log(country) */

// EXERCISE 4 : Creating a an amazing user object including incomes, expense accountInfo, etc...

/* let personAccount = {

    firstName: "Alex",
    lastName: "De Souza",
    incomes: 25000,
    expenses: 4000,
    totalIncome: function () { 
        let income         = this.incomes;
        let addedIncome    = this.addIncome()
        return (income + addedIncome)
    },
    totalExpense: function () { 
        let expense           = this.expenses;
        let addedExpense      = this.addExpense()
        return (expense + addedExpense)
    },
    userInfo: {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    addIncome: function (cash = 0) {
        this.userIncome !== undefined
            ? cash = this.userIncome
            : cash = cash;
        return cash;
    },
    addExpense: function (out = 0) {
        this.userExpense !== undefined
            ? out = this.userExpense
            : out = out;
        return out;
    },
    accountBalance: function () { 
        let income_ = parseInt(this.totalIncome());
        let expense_ = parseInt(this.totalExpense());
        return (income_ - expense_);
        
    },
    accountInfo : function () {
        return `Monthly Income : ${this.incomes}\nMonthly Expense : ${this.expenses}\nTotal Income : ${this.totalIncome()}\nTotal Expense : ${this.totalExpense()}\nIncome you've added : ${this.addIncome()}\nExpense you've added : ${this.addExpense()}\nAccount Balance : ${this.accountBalance()}`
    }
}
personAccount.userIncome = 7500;
personAccount.userExpense = 5300;

console.log(personAccount);
console.log(personAccount.accountInfo()); */

// EXERCISE 5 : SignUp & SignIn

/*import { users } from "../others/users.js";
import { randomChar } from "../modules/modules.js";

let usr = {

    check : function (uname, email, passw) {
        if ( (this.username_(uname)) || (this.email_(email)) ) {
            let askLogin = confirm("You've already registered.\nWould you like to log in?");
            if (askLogin) {
                if (!this.password_(passw)) {
                    return "Your password incorrect!"
    
                } else if (!this.username_(uname) || !this.email_(email)) {
                    return "Your informations to log in are incorrect!"

                } else {
                    return this.login(uname, email, passw);
                }

            } else {
                return "Maybe next time..."
            }

        } else {
            let askRegister = confirm("Would you like to register?");
            if (askRegister) {
                return this.register(uname, email, passw);

            } else {
                return "OK. Maybe nextime :)";
            };
        }     
    },
    password_ : function (passw) {
        let doesExist = false;
        for (let x of users) {
            if (passw === x.password) {
                return true;
                break;
            }
        }
        if (!doesExist) {return false}
    },
    username_ : function (uname) {
        let doesExist = false
        for (let i in users) {
            if ( users[i].username === uname ) {
                doesExist = true
                return true;
                break;
            };   
        };
        if (!doesExist) {return false}
    },
    email_ : function (email) {
        let doesExist = false
        for (let i in users) {
            if ( users[i].email === email) {
                doesExist = true
                return true;
                break;
            };
        };
        if (!doesExist) {return false}
    },
    createdAt_ : function () {
        let date    = new Date(),
        month       = +date.getMonth(),
        day         = +date.getDate(),
        year        = +date.getFullYear(),
        hour        = +date.getHours(),
        minute      = +date.getMinutes();
        let modifyDate;

        if (hour < 12 ) {
            hour -= 12,
            hour = hour.toString();
            minute = minute.toString(),
            minute = minute.concat(" AM")
            
        } else {
            hour -= 12,
            hour = hour.toString();
            minute = minute.toString(),
            minute = minute.concat(" PM")
        }
        hour < 10
            ? hour = "0".concat(hour.toString()) : "";
        day < 10
            ? day = "0".concat(day.toString()) : "";
        month < 10
            ? month = "0".concat(month.toString()) : "";
            
        return modifyDate  = `${day}/${month}/${year} ${hour}:${minute}`;
    },
    login : function (uname, email, passw) {
        for (let x of users) {
           if ( (x.username === uname && x.password === passw) || (x.email === email && x.password === passw) ) {
                this.username   = x.username;
                this.password   = x.password;
                this.email      = x.email;
                this._id        = x._id;
                this.createdAt  = x.createdAt;
                this.isLoggedIn = true;
                break;   
           }
        }
        return `You've logged in.\n\nUsername : ${this.username}\nEmail : ${this.email}\nPassword : ${this.password}\nID : ${this._id}\nCreated At : ${this.createdAt}\nLogIn Status : ${this.isLoggedIn}`;
    },
    register : function (uname, email, passw) {
        this.username   = uname;
        this.password   = passw;
        this.email      = email;
        this._id        = randomChar(6, false);
        this.createdAt  = this.createdAt_();
        this.isLoggedIn = true;

        return `You've registered.\n\nUsername : ${this.username}\nEmail : ${this.email}\nPassword : ${this.password}\nID : ${this._id}\nCreated At : ${this.createdAt}\nLogIn Status : ${this.isLoggedIn}`;
    },
};

// console.log(usr.check("asi_qiz", "asi_stayla@msn.com", "belali49yarali"));
//console.log(usr.check("Thomas", "thomas@thomas.com", "123333")); */

// EXERCISE 6 : Rate our app || Get the average of the rate

/* import {products} from "../others/products.js";
import {bychance, isEmpty, randomChar} from "../modules/modules.js";

function rateProduct (productId, usrId, rate, disOrLike) {
    let doesExist = false
    for (let x of products) {
        if (x._id === productId) {
            doesExist = true;
            x.ratings[x.ratings.length] = {userId : usrId, rate : rate};
            x.likes[x.likes.length] = usrId;
            return `Thanks for the rating of ${x.description} :)`;
            break;
        };
    }
    if (!doesExist) {
        return `Product with ID : ${productId} couldn't be located in our data base :(`;
    }
};

function getRateAverage (productId) {
    let rateCalc = [0,0];
    for (let x of products) {
        if (x._id === productId) {
            if (!isEmpty(x.ratings)) {
                for (let y of x.ratings) {
                        y.rate = +y.rate;
                        rateCalc[0] += y.rate;
                        rateCalc[1]++

                    }
                    return (rateCalc[0]/rateCalc[1]).toFixed(2);
            } else {
                return "There is no rate yet..."
            }
            break;
        }
    }
}

let randomCh = randomChar(6, false);

console.log(rateProduct("eedfcf", randomCh, 5, "like"));
console.log(products);
console.log(getRateAverage("hedfcg")); */



