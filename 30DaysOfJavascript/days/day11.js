// DESTRUCTING
    // * Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

    // Destructing Arrays

            // const numbers = [1, 2, 3]
            // let [numOne, numTwo, numThree] = numbers
            // console.log(numOne, numTwo, numThree)                            // 1 2 3

            // const names = ['Asabeneh', 'Brook', 'David', 'John']
            // let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names
            // console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)             // Asabeneh Brook David John

            // const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
            // let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants
            // console.log(e,pi,gravity, bodyTemp, boilingTemp)                             // 2.72 3.14 9.81 37 100

            // const fullStack = [
            //     ['HTML', 'CSS', 'JS', 'React'],
            //     ['Node', 'Express', 'MongoDB']
            //   ]
            // const [frontEnd, backEnd] = fullStack
            // console.log(frontEnd)                                                        // ["HTML", "CSS", "JS", "React"]
            // console.log(backEnd)                                                         // ["Node", "Express", "MongoDB"]

        // * If we like to skip on of the values in the array we use additional comma.                                      (!)
        // * The comma helps to omit the value at that specific index.

            // const numbers = [1, 2, 3]
            // let [numOne, , numThree] = numbers                                           // 2 is skipped
            // console.log(numOne, numThree)                                                // 1 3

            // const names = ['Asabeneh', 'Brook', 'David', 'John']
            // let [, secondPerson, , fourthPerson] = names                                 // first and third person is omitted
            // console.log(secondPerson, fourthPerson)                                      // Brook John

        // * We can also use default value in case the value of array for that index is UNDEFINED.                      (!)

            // const names = [undefined, 'Brook', 'David']
            // let [
            //   firstPerson = 'Asabeneh',
            //   secondPerson,
            //   thirdPerson,
            //   fourthPerson = 'John'
            // ] = names
            
            // console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)            // Asabeneh Brook David John

// (!)      // * We can't assign variable to all in the array. We can destructure few of the first and we can get the remaining using this (...).  

            // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            // let [num1, num2, num3, ...rest] = nums

            // console.log(num1, num2, num3)                                                // 1 2 3
            // console.log(rest)                                                            // [4, 5, 6, 7, 8, 9, 10]       '...rest' returns an array  (!)

        // Destructuring During Iteration                                                                                       (!)

            // const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

            // for (const [country, city] of countries) {
            // console.log(country, city)                                                   // Finland Helsinki
            // }                                                                            // Sweden Stockholm
                                                                                            // Norway Oslo

            // const fullStack = [
            //     ['HTML', 'CSS', 'JS', 'React'],
            //     ['Node', 'Express', 'MongoDB']
            // ]
                
            // for(const [first, second, third] of fullStack) {
            //      console.log(first, second, third)                                       // HTML CSS JS
            // }                                                                            // Node Express MongoDB

    // Destructuring Object
        // * When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object.    (!)

            // const rectangle = {
            //     width: 20,
            //     height: 10,
            //     area: 200
            //   }
            //   let { width, height, area, perimeter } = rectangle                         // We've used the same key
            //   console.log(width, height, area, perimeter)                                // 20 10 200 undefined

        // Renaming during structuring :

            // const rectangle = {
            //   width: 20,
            //   height: 10,
            //   area: 200
            // }
            // let { width: w, height: h, area: a, perimeter: p } = rectangle
            // console.log(w, h, a, p)                                                      // 20 10 200 undefined

            // * If the key is not found in the object the variable will be assigned to undefined.
            // * Sometimes the key might not be in the object, in that case we can give a default value during declaration.

                // const rectangle = {
                //     width: 20,
                //     height: 10,
                //     area: 200
                //   }
                //   let { width, height, area, perimeter = 60 } = rectangle
                
                //   console.log(width, height, area, perimeter)                            // 20 10 200 60

                // Let us modify the object:width to 30 and perimeter to 80

                // const rectangle = {
                //     width: 30,
                //     height: 10,
                //     area: 200,
                //     perimeter: 80
                //   }
                //   let { width, height, area, perimeter = 60 } = rectangle
                //   console.log(width, height, area, perimeter)                            // 30 10 200 80

        // Object parameter without destructuring :

            // const rect = {
            //     width: 20,
            //     height: 10
            //   }
            //   const calculatePerimeter = rectangle => {
            //     return 2 * (rectangle.width + rectangle.height)
            //   }
            //   console.log(calculatePerimeter(rect))                                      // 60

            //Another Example

            // const person = {
            //     firstName: 'Asabeneh',
            //     lastName: 'Yetayeh',
            //     age: 250,
            //     country: 'Finland',
            //     job: 'Instructor and Developer',
            //     skills: [
            //       'HTML',
            //       'CSS',
            //       'JavaScript',
            //       'React',
            //       'Redux',
            //       'Node',
            //       'MongoDB',
            //       'Python',
            //       'D3.js'
            //     ],
            //     languages: ['Amharic', 'English', 'Suomi(Finnish)']
            //   }

            // Let us create a function which give information about the person object without destructuring
            
            //   const getPersonInfo = obj => {
            //         const skills = obj.skills
            //         const formattedSkills = skills.slice(0, -1).join(', ')
            //         const languages = obj.languages
            //         const formattedLanguages = languages.slice(0, -1).join(', ')
                
            //         const personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is ${obj.age} years old. He is an ${obj.job}. 
            //         He teaches ${formattedSkills} and ${skills[skills.length - 1]}. He speaks ${formattedLanguages} and a little bit of ${languages
            //         [2]}.`
                
            //         return personInfo
            // }
            
            // console.log(getPersonInfo(person))

        // Object parameter with destructuring :                                                                            (!)

            // const calculatePerimeter = ({ width, height }) => {
            //     return 2 * (width + height)
            // }
            // console.log(calculatePerimeter(rect))                                            // 60

            // Let us create a function which give information about the person object with destructuring

            // const getPersonInfo = ({
            //     firstName,
            //     lastName,
            //     age,
            //     country,
            //     job,
            //     skills,
            //     languages
            //   }) => {
            //     const formattedSkills = skills.slice(0, -1).join(', ')
            //     const formattedLanguages = languages.slice(0, -1).join(', ')
            
            //     let personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. 
            //     He teaches ${formattedSkills} and ${skills[skills.length - 1]}. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
            
            //     return personInfo
            //   }
            //   console.log(getPersonInfo(person))

        // Destructuring object during iteration :                                                              (!)

            // const todoList = [
            //     {
            //       task:'Prepare JS Test',
            //       time:'4/1/2020 8:30',
            //       completed:true
            //     },
            //     {
            //       task:'Give JS Test',
            //       time:'4/1/2020 10:00',
            //       completed:false
            //     },
            //     {
            //       task:'Assess Test Result',
            //       time:'4/1/2020 1:00',
            //       completed:false
            //     }
            // ]
                
            //     for (const {task, time, completed} of todoList){
            //       console.log(task, time, completed)                                         // Prepare JS Test 4/1/2020 8:30 true
            //     }                                                                            // Give JS Test 4/1/2020 10:00 false
                                                                                                // Assess Test Result 4/1/2020 1:00 false

// SPREAD OR REST OPERATOR
    // * When we destructure an array we use the spread operator(...) to get the rest elements as array.
    // * In addition to that we use spread operator to spread array elements to another array.

    // * Spread operator to get the rest of array elements :

        // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // let [num1, num2, num3, ...rest] = nums
        // console.log(num1, num2, num3)                                                        // 1 2 3
        // console.log(rest)                                                                    // [4, 5, 6, 7, 8, 9, 10]

        // const countries = [
        //     'Germany',
        //     'France',
        //     'Belgium',
        //     'Finland',
        //     'Sweden',
        //     'Norway',
        //     'Denmark',
        //     'Iceland'
        // ]
        // let [gem, fra, , ...nordicCountries] = countries
        // console.log(gem)                                                                     // Germany
        // console.log(fra)                                                                     // France
        // console.log(nordicCountries)                                                         // ["Finland", "Sweden", "Norway", "Denmark", "Iceland"]

    // Spread operator to copy array :                                                                          (!)

        // const evens = [0, 2, 4, 6, 8, 10]
        // const evenNumbers = [...evens]
        
        // const odds = [1, 3, 5, 7, 9]
        // const oddNumbers = [...odds]
        
        // const wholeNumbers = [...evens, ...odds]
        
        // console.log(evenNumbers)                                                             // [0, 2, 4, 6, 8, 10]
        // console.log(oddNumbers)                                                              // [1, 3, 5, 7, 9]
        // console.log(wholeNumbers)                                                            // [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]

        // const frontEnd = ['HTML', 'CSS', 'JS', 'React']
        // const backEnd = ['Node', 'Express', 'MongoDB']
        // const fullStack = [...frontEnd, ...backEnd]

        // console.log(fullStack)                                                       // ["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"]

    // Spread operator to copy object :                                                                   (!)

        // const user = {
        //     name:'Asabeneh',
        //     title:'Programmer',
        //     country:'Finland',
        //     city:'Helsinki'
        // }
        
        // const copiedUser = {...user}
        // console.log(copiedUser)                                      // {name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}
    
        // Modifying or changing the object while copying ;                                                              (!)

            // const user = {
            //     name:'Asabeneh',
            //     title:'Programmer',
            //     country:'Finland',
            //     city:'Helsinki'
            // }
            
            // const copiedUser = {...user, title:'instructor'}
            // console.log(copiedUser)                                  // {name: "Asabeneh", title: "instructor", country: "Finland", city: "Helsinki"}

    // Spread operator with arrow function :
        // * Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator.
        // * If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.

            // const sumAllNums = (...args) => {
            //     console.log(args)
            // }
            // sumAllNums(1, 2, 3, 4, 5)                                // [1, 2, 3, 4, 5]

            // const sumAllNums = (...args) => {
            //     let sum = 0
            //     for (const num of args){
            //       sum += num
            //     }
            //     return sum
            // }
            // console.log(sumAllNums(1, 2, 3, 4, 5))

  
// EXERCISE 1 :

// const constants = [2.72, 3.14, 9.81, 37, 100];
// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60
// };
// const users = [
// {
//   name:'Brook',
//   scores:75,
//   skills:['HTM', 'CSS', 'JS'],
//   age:16
// },
// {
//   name:'Alex',
//   scores:80,
//   skills:['HTM', 'CSS', 'JS'],
//   age:18
// },
// {
//   name:'David',
//   scores:75,
//   skills:['HTM', 'CSS'],
//   age:22
// },
// {
//   name:'John',
//   scores:85,
//   skills:['HTML'],
//   age:25
// },
// {
//   name:'Sara',
//   scores:95,
//   skills:['HTM', 'CSS', 'JS'],
//   age: 26
// },
// {
//   name:'Martha',
//   scores:80,
//   skills:['HTM', 'CSS', 'JS'],
//   age:18
// },
// {
//   name:'Thomas',
//   scores:90,
//   skills:['HTM', 'CSS', 'JS'],
//   age:20
// }
// ];

/*let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e,pi,gravity,humanBodyTemp,waterBoilingTemp);

let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

let {width,height,area,perimeter} = rectangle;
console.log(width,height,area,perimeter); */

// for (let {name, scores, skills, age} of users) {
//     console.log(name,scores,skills,age);
// }

// const withTwoSkills = users.filter( (obj) => obj.skills.length <= 2 ).forEach( ({name, scores, skills, age}) => console.log(name, scores, skills, age) )

/* const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
let [name, skills, scores] = student
let [skill1, skill2, skill3] = skills
let [score1, score2, score3] = scores

console.log(`${name}, ${skill1} score : ${score1} ,${skill2} score : ${score2}, ${skill3} score : ${score3}`) */

/* function convertArrayToObject (arr) {
  let [name, skills, scores] = arr;
  let obj = {
    name : name,
    skills : skills,
    scores : scores,
  }
  return obj;

}

const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
console.log(convertArrayToObject(student)); */

// const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
// let [name_, skills_, scores] = student;
// let obj = {
//   name : name_, 
//   age : 25, 
//   skills : {
//   frontend : [
//     {skill : skills_[0], level: 10}, 
//     {skill : skills_[1], level: 8}, 
//     {skill : skills_[2], level: 8},
//     {skill : skills_[3], level: 9},
//   ],
//   backend : [
//     {skill : "Node.js", level: 7},
//     {skill : "GraphQL", level: 8},
//   ],
//   database : [
//     {skill : "MangoDB", level: 7.5}
//   ],
//   dataScience : ["Python", "R", "D3.js"]
// } };

// let {name,  age, skills} = obj                    // Naming object items

// let {frontEnd, backEnd, dataBase, dScience} = skills                // Getting elements in skills

// let [sk1, sk2, sk3, sk4, sk5 = {skill : "Bootstrap", level : 10}] = skills["frontend"]        // Adding ana item into frontend
// let newStudent = { name, age, skills } = obj              // Addigning another variable

// let spreading = [...skills.frontend, ...skills.backend, ...skills.database, ...skills.dataScience];         // Spreading skills

// skills["frontend"].push({skill : "Bootstrap", level : 5});
// skills["backend"].push({skill : "Express", level : 7});
// skills["database"].push({skill : "SQL", level : 8});
// let [sk1, sk2, sk3 = {skill : "Fatasata", level : 10}] = skills["database"];

// console.log(newStudent)

