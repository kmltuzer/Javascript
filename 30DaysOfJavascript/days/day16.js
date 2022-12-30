// JASON
    // * JSON stands for JavaScript Object Notation. 
    //* The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text or string only.
    // *  JSON is a light weight data format for storing and transporting.
    // * JSON is mostly used when data is sent from a server to a client.
    // * JSON is an easier-to-use alternative to XML.

    // Example :

        // {
        //     "users":[
        //       {
        //         "firstName":"Asabeneh",
        //         "lastName":"Yetayeh",
        //         "age":250,
        //         "email":"asab@asb.com"
        //       },
        //       {
        //         "firstName":"Alex",
        //         "lastName":"James",
        //         "age":25,
        //         "email":"alex@alex.com"
        //       },
        //       {
        //       "firstName":"Lidiya",
        //       "lastName":"Tekle",
        //       "age":28,
        //       "email":"lidiya@lidiya.com"
        //       }
        //     ]
        //     }

    // * It starts with a curly bracket.
    // * Each keys has to have double quotes. 
    // * However in object, we use keys without double quotes. This is the major difference between an object and a JSON.

        // {
        //     "Alex": {
        //         "email": "alex@alex.com",
        //         "skills": [
        //             "HTML",
        //             "CSS",
        //             "JavaScript"
        //         ],
        //         "age": 20,
        //         "isLoggedIn": false,
        //         "points": 30
        //     },
        //     "Asab": {
        //         "email": "asab@asab.com",
        //         "skills": [
        //             "HTML",
        //             "CSS",
        //             "JavaScript",
        //             "Redux",
        //             "MongoDB",
        //             "Express",
        //             "React",
        //             "Node"
        //         ],
        //         "age": 25,
        //         "isLoggedIn": false,
        //         "points": 50
        //     },
        //     "Brook": {
        //         "email": "daniel@daniel.com",
        //         "skills": [
        //             "HTML",
        //             "CSS",
        //             "JavaScript",
        //             "React",
        //             "Redux"
        //         ],
        //         "age": 30,
        //         "isLoggedIn": true,
        //         "points": 50
        //     },
        //     "Daniel": {
        //         "email": "daniel@alex.com",
        //         "skills": [
        //             "HTML",
        //             "CSS",
        //             "JavaScript",
        //             "Python"
        //         ],
        //         "age": 20,
        //         "isLoggedIn": false,
        //         "points": 40
        //     },
        //     "John": {
        //         "email": "john@john.com",
        //         "skills": [
        //             "HTML",
        //             "CSS",
        //             "JavaScript",
        //             "React",
        //             "Redux",
        //             "Node.js"
        //         ],
        //         "age": 20,
        //         "isLoggedIn": true,
        //         "points": 50
        //     },
        //     "Thomas": {
        //         "email": "thomas@thomas.com",
        //         "skills": [
        //             "HTML",
        //             "CSS",
        //             "JavaScript",
        //             "React"
        //         ],
        //         "age": 20,
        //         "isLoggedIn": false,
        //         "points": 40
        //     },
        //     "Paul": {
        //         "email": "paul@paul.com",
        //         "skills": [
        //             "HTML",
        //             "CSS",
        //             "JavaScript",
        //             "MongoDB",
        //             "Express",
        //             "React",
        //             "Node"
        //         ],
        //         "age": 20,
        //         "isLoggedIn": false,
        //         "points": 40
        //     }
        // }

    // Converting JSON to JavaScript Object                                                                 (!)
        // * Mostly we fetch JSON data from HTTP response or from a file.
        // * But we can store the JSON as a string and we can change it into an Object for sake of demonstration.       (!)
        // * In JavaScript the keyword JSON has parse() and stringify() methods.
        // * When we want to change the JSON into an object, we parse the JSON using JSON.parse().
        // * When we want to change an object into JSON, we use JSON.stringify().

        // JSON.parse() :

            // syntax : 

                // JSON.parse(json[, reviver])              // json or text & the parameter reviver is an optional callback function
                /* JSON.parse(json, (key, value) => {
                
                })
                */

            // const usersText = `{
            //     "users":[
            //       {
            //         "firstName":"Asabeneh",
            //         "lastName":"Yetayeh",
            //         "age":250,
            //         "email":"asab@asb.com"
            //       },
            //       {
            //         "firstName":"Alex",
            //         "lastName":"James",
            //         "age":25,
            //         "email":"alex@alex.com"
            //       },
            //       {
            //       "firstName":"Lidiya",
            //       "lastName":"Tekle",
            //       "age":28,
            //       "email":"lidiya@lidiya.com"
            //       }
            //     ]
            //     }`
            //     const usersObj = JSON.parse(usersText, anOptionalFunc)
            //     console.log(usersObj)

            // Using a reviver function with JSON.parse() :
                // * To use the reviver function as a formatter, we put the keys we want to format first name and last name value.

                    // const usersText = `{
                    //     "users":[
                    //       {
                    //         "firstName":"Asabeneh",
                    //         "lastName":"Yetayeh",
                    //         "age":250,
                    //         "email":"asab@asb.com"
                    //       },
                    //       {
                    //         "firstName":"Alex",
                    //         "lastName":"James",
                    //         "age":25,
                    //         "email":"alex@alex.com"
                    //       },
                    //       {
                    //       "firstName":"Lidiya",
                    //       "lastName":"Tekle",
                    //       "age":28,
                    //       "email":"lidiya@lidiya.com"
                    //       }
                    //     ]
                    //     }`
                        
                    //     const usersObj = JSON.parse(usersText, (key, value) => {
                    //       let newValue =
                    //         typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
                    //       return newValue
                    //     })
                    //     console.log(usersObj)

    // Converting Object to JSON :
        // * When we want to change the object to JSON we use JSON.stringify().
        // * The stringify method takes one required parameter and two optional parameters.
        // * The replacer is used as filter and the space is an indentations.
        // * If we do not want to filter out any of the keys from the object we can just pass undefined.            (!)

        // syntax :

            // JSON.stringify(obj, replacer, space)

        // Example :

            // const users = {
            //     Alex: {
            //       email: 'alex@alex.com',
            //       skills: ['HTML', 'CSS', 'JavaScript'],
            //       age: 20,
            //       isLoggedIn: false,
            //       points: 30
            //     },
            //     Asab: {
            //       email: 'asab@asab.com',
            //       skills: [
            //         'HTML',
            //         'CSS',
            //         'JavaScript',
            //         'Redux',
            //         'MongoDB',
            //         'Express',
            //         'React',
            //         'Node'
            //       ],
            //       age: 25,
            //       isLoggedIn: false,
            //       points: 50
            //     },
            //     Brook: {
            //       email: 'daniel@daniel.com',
            //       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
            //       age: 30,
            //       isLoggedIn: true,
            //       points: 50
            //     },
            //     Daniel: {
            //       email: 'daniel@alex.com',
            //       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
            //       age: 20,
            //       isLoggedIn: false,
            //       points: 40
            //     },
            //     John: {
            //       email: 'john@john.com',
            //       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
            //       age: 20,
            //       isLoggedIn: true,
            //       points: 50
            //     },
            //     Thomas: {
            //       email: 'thomas@thomas.com',
            //       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
            //       age: 20,
            //       isLoggedIn: false,
            //       points: 40
            //     },
            //     Paul: {
            //       email: 'paul@paul.com',
            //       skills: [
            //         'HTML',
            //         'CSS',
            //         'JavaScript',
            //         'MongoDB',
            //         'Express',
            //         'React',
            //         'Node'
            //       ],
            //       age: 20,
            //       isLoggedIn: false,
            //       points: 40
            //     }
            //   }
            
            //   const txt = JSON.stringify(users, undefined, 4)
            //   console.log(txt)                                   // text means JSON- because json is a string form of an object.

        // Using a Filter Array with JSON.stringify() :
            // * The user object has long list of keys but we are interested only in few of them.
            // * We put the keys we want to keep in array as show in the example and use it the place of the replacer.

            // const user = {
            //     firstName: 'Asabeneh',
            //     lastName: 'Yetayeh',
            //     country: 'Finland',
            //     city: 'Helsinki',
            //     email: 'alex@alex.com',
            //     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
            //     age: 250,
            //     isLoggedIn: false,
            //     points: 30
            //   }
              
            //   const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
            //   console.log(txt)

// EXERCISE 1 :

// const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
// let age = 250;
// let isMarried = true
// const student = {
//   firstName:'Asabeneh',
//   lastName:'Yetayehe',
//   age:250,
//   isMarried:true,
//   skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
// }
// const txt = `{
//     "Alex": {
//         "email": "alex@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 30
//     },
//     "Asab": {
//         "email": "asab@asab.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Redux",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 25,
//         "isLoggedIn": false,
//         "points": 50
//     },
//     "Brook": {
//         "email": "daniel@daniel.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux"
//         ],
//         "age": 30,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Daniel": {
//         "email": "daniel@alex.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Python"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "John": {
//         "email": "john@john.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Redux",
//             "Node.js"
//         ],
//         "age": 20,
//         "isLoggedIn": true,
//         "points": 50
//     },
//     "Thomas": {
//         "email": "thomas@thomas.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     },
//     "Paul": {
//         "email": "paul@paul.com",
//         "skills": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node"
//         ],
//         "age": 20,
//         "isLoggedIn": false,
//         "points": 40
//     }
// }
// `
// const toJason = JSON.stringify(skills, undefined, 4);
// console.log(toJason);

    