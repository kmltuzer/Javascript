// CLASSES                                                                                                          (!)
    // * JavaScript is an object oriented programming language.
    // * Everything in JavScript is an object, with its properties and methods. 
    // * We create class to create an object.
    // * A Class is like an object constructor, or a "blueprint" for creating objects.
    // * We instantiate a class to create an object.
    // * The class defines attributes and the behavior of the object, while the object, on the other hand, represents the class.
    // * Once we create a class we can create object from it whenever we want.
    // * Creating an object from a class is called class instantiation.

    // In the object section, we saw how to create an object literal. Object literal is a singleton. 
    // If we want to get a similar object, we have to write it. 
    // However, class allows to create many objects. This helps to reduce amount of code and repetition of code.

    // Defining a class
        // * To define a class in JavaScript we need the keyword class , the name of a class in CamelCase and block code(two curly brackets).

        // syntax :

            // class ClassName {
            //      code goes here
            //      code goes here
            //      code goes here
            // }

    // Class Instantiation                                                                                  (!)
        // * Instantiation class means creating an object from a class.
        // * We need the keyword new and we call the name of the class after the word new.

            // class Person {
            //      code goes here
            //      code goes here
            //      code goes here
            // }
            // const person = new Person()
            // console.log(person)                                                  // Person {}

    // Class Constructor                                                                                                    (!)
        // * The constructor is a builtin function which allows us to create a blueprint for our object.
        // * The constructor function starts with a keyword constructor followed by a parenthesis.
        // * Inside the parenthesis we pass the properties of the object as parameter.
        // * We use the "this" keyword to attach the constructor parameters with the class.

        // The following Person class constructor has firstName and lastName property. 
        // These properties are attached to the Person class using "this" keyword. "This" refers to the class itself.

            // class Person {
            //     constructor(firstName, lastName) {
            //       console.log(this)                                              // Check the output from here
            //       this.firstName = firstName
            //       this.lastName = lastName
            //     }
            //   }
            
            //   const person = new Person("Memduh", "Cevik")
            //   console.log(person)                                                // Object { firstName: "Memduh", lastName: "Cevik" }

    // Creating multi objects using a class ;

        // class Person {
        //     constructor(firstName, lastName) {
        //       console.log(this)                                                  // Check the output from here
        //       this.firstName = firstName
        //       this.lastName = lastName
        //     }
        //   }
        
        //   const person1 = new Person('Asabeneh', 'Yetayeh')
        //   const person2 = new Person('Lidiya', 'Tekle')
        //   const person3 = new Person('Abraham', 'Yetayeh')
        
        //   console.log(person1)
        //   console.log(person2)
        //   console.log(person3)

    // Default values with constructor
        // * The constructor function properties may have a default value like other regular functions.

            // class Person {
            //   constructor(
            //     firstName = 'Asabeneh',
            //     lastName = 'Yetayeh',
            //     age = 250,
            //     country = 'Finland',
            //     city = 'Helsinki'
            //   ) {
            //     this.firstName = firstName
            //     this.lastName = lastName
            //     this.age = age
            //     this.country = country
            //     this.city = city
            //   }
            // }

            // const person1 = new Person()                                             // it will take the default values
            // const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

            // console.log(person1)
            // console.log(person2)

    // Class methods
        // * The constructor inside a class is a built-in function which allows us to create a blueprint for the object.
        // * In a class we can create class methods.
        // * Methods are JavaScript functions inside the class.

            // class Person {
            //   constructor(firstName, lastName, age, country, city) {
            //     this.firstName = firstName
            //     this.lastName = lastName
            //     this.age = age
            //     this.country = country
            //     this.city = city
            //   }
            //   getFullName() {                                            <-- DO NOT type "function" keyword before the name
            //     const fullName = this.firstName + ' ' + this.lastName
            //     return fullName
            //   }
            // }

            // const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
            // const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

            // console.log(person1.getFullName())
            // console.log(person2.getFullName())

    // Properties with initial value
        // * When we create a class for some properties we may have an initial value.
        // * For instance if you are playing a game, your starting score will be zero. So, we may have a starting score or score which is zero.
        // * In other word, we may have an initial skill and we will acquire some skill after a particular time.

            // class Person {
            //     constructor(firstName, lastName, age, country, city) {
            //       this.firstName = firstName
            //       this.lastName = lastName
            //       this.age = age
            //       this.country = country
            //       this.city = city
            //       this.score = 0
            //       this.skills = []
            //     }
            //     getFullName() {
            //       const fullName = this.firstName + ' ' + this.lastName
            //       return fullName
            //     }
            //   }
            
            //   const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
            //   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
            
            //   console.log(person1.score)
            //   console.log(person2.score)
            
            //   console.log(person1.skills)
            //   console.log(person2.skills)

            // A method could be regular method or a getter or a setter. Let us see, getter and setter.

    // getter
        // * The get method allows us to access value from the object.
        // * We write a "get" method using keyword "get" followed by a function.
        // * Instead of accessing properties directly from the object we use getter to get the value.

            // class Person {
            //   constructor(firstName, lastName, age, country, city) {
            //     this.firstName = firstName
            //     this.lastName = lastName
            //     this.age = age
            //     this.country = country
            //     this.city = city
            //     this.score = 0
            //     this.skills = []
            //   }
            //   getFullName() {
            //     const fullName = this.firstName + ' ' + this.lastName
            //     return fullName
            //   }
            //   get getScore() {
            //     return this.score
            //   }
            //   get getSkills() {
            //     return this.skills
            //   }
            // }

            // const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
            // const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

            // console.log(person1.getScore)                                // We do not need parentheses to call a getter method       (!)
            // console.log(person2.getScore)

            // console.log(person1.getSkills)
            // console.log(person2.getSkills)

    // setter                                                                                               (!)
        // * The setter method allows us to modify the value of a certain properties.
        // * We write a setter method using keyword "set" followed by a function.

            // class Person {
            //   constructor(firstName, lastName, age, country, city) {
            //     this.firstName = firstName
            //     this.lastName = lastName
            //     this.age = age
            //     this.country = country
            //     this.city = city
            //     this.score = 0
            //     this.skills = []
            //   }
            //   getFullName() {
            //     const fullName = this.firstName + ' ' + this.lastName
            //     return fullName
            //   }
            //   get getScore() {
            //     return this.score
            //   }
            //   get getSkills() {
            //     return this.skills
            //   }
            //   set setScore(score) {
            //     this.score += score
            //   }
            //   set setSkill(skill) {
            //     this.skills.push(skill)
            //   }
            // }

            // const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
            // const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

            // person1.setScore = 1
            // person1.setSkill = 'HTML'
            // person1.setSkill = 'CSS'
            // person1.setSkill = 'JavaScript'

            // person2.setScore = 1
            // person2.setSkill = 'Planning'
            // person2.setSkill = 'Managing'
            // person2.setSkill = 'Organizing'

            // console.log(person1.score)
            // console.log(person2.score)

            // console.log(person1.skills)
            // console.log(person2.skills)

            // class Person {
            //     constructor(firstName, lastName, age, country, city) {
            //       this.firstName = firstName
            //       this.lastName = lastName
            //       this.age = age
            //       this.country = country
            //       this.city = city
            //       this.score = 0
            //       this.skills = []
            //     }
            //     getFullName() {
            //       const fullName = this.firstName + ' ' + this.lastName
            //       return fullName
            //     }
            //     get getScore() {
            //       return this.score
            //     }
            //     get getSkills() {
            //       return this.skills
            //     }
            //     set setScore(score) {
            //       this.score += score
            //     }
            //     set setSkill(skill) {
            //       this.skills.push(skill)
            //     }
            //     getPersonInfo() {
            //       let fullName = this.getFullName()
            //       let skills =
            //         this.skills.length > 0 &&
            //         this.skills.slice(0, this.skills.length - 1).join(', ') +
            //           ` and ${this.skills[this.skills.length - 1]}`
            //       let formattedSkills = skills ? `He knows ${skills}` : ''
            
            //       let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
            //       return info
            //     }
            //   }
            
            //   const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
            //   const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
            //   const person3 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')
            
            //   person1.setScore = 1
            //   person1.setSkill = 'HTML'
            //   person1.setSkill = 'CSS'
            //   person1.setSkill = 'JavaScript'
            
            //   person2.setScore = 1
            //   person2.setSkill = 'Planning'
            //   person2.setSkill = 'Managing'
            //   person2.setSkill = 'Organizing'
            
            //   console.log(person1.getScore)
            //   console.log(person2.getScore)
            
            //   console.log(person1.getSkills)
            //   console.log(person2.getSkills)
            //   console.log(person3.getSkills)
            
            //   console.log(person1.getPersonInfo())
            //   console.log(person2.getPersonInfo())
            //   console.log(person3.getPersonInfo())

    // Static method
        // * The "static" keyword defines a static method for a class.
        // * Static methods are not called on instances of the class.
        // * Instead, they are called on the class itself.
        // * These are often utility functions, such as functions to create or clone objects.
        // * An example of static method is Date.now(). The now method is called directly from the class.
        // * "this" keyword NEVER works in a static method!

            // class Person {
            //   constructor(firstName, lastName, age, country, city) {
            //     this.firstName = firstName
            //     this.lastName = lastName
            //     this.age = age
            //     this.country = country
            //     this.city = city
            //     this.score = 0
            //     this.skills = []
            //   }
            //   getFullName() {
            //     const fullName = this.firstName + ' ' + this.lastName
            //     return fullName
            //   }
            //   get getScore() {
            //     return this.score
            //   }
            //   get getSkills() {
            //     return this.skills
            //   }
            //   set setScore(score) {
            //     this.score += score
            //   }
            //   set setSkill(skill) {
            //     this.skills.push(skill)
            //   }
            //   getPersonInfo() {
            //     let fullName = this.getFullName()
            //     let skills =
            //       this.skills.length > 0 &&
            //       this.skills.slice(0, this.skills.length - 1).join(', ') +
            //         ` and ${this.skills[this.skills.length - 1]}`

            //     let formattedSkills = skills ? `He knows ${skills}` : ''

            //     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
            //     return info
            //   }
            //   static favoriteSkill() {
            //     const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
            //     const index = Math.floor(Math.random() * skills.length)
            //     return skills[index]
            //   }
            //   static showDateTime() {
            //     let now = new Date()
            //     let year = now.getFullYear()
            //     let month = now.getMonth() + 1
            //     let date = now.getDate()
            //     let hours = now.getHours()
            //     let minutes = now.getMinutes()
            //     if (hours < 10) {
            //       hours = '0' + hours
            //     }
            //     if (minutes < 10) {
            //       minutes = '0' + minutes
            //     }

            //     let dateMonthYear = date + '.' + month + '.' + year
            //     let time = hours + ':' + minutes
            //     let fullTime = dateMonthYear + ' ' + time
            //     return fullTime
            //   }
            // }                                                              // The static methods are methods which can be used as utility functions.

            // console.log(Person.favoriteSkill())
            // console.log(Person.showDateTime())

    // Inheritance                                                                                                                  (!)
        // * Using inheritance we can access all the properties and the methods of the parent class.
        // * This reduces repetition of code. 
        // * If you remember, we have a Person parent class and we will create children from it. Our children class could be student, teach etc.

        // syntax :

            // class ChildClassName extends ParentClassName {
            //      code goes here
            //      code goes here
            //      code goes here
            // }

            // class Student extends Person {
            //     saySomething() {
            //       console.log('I am a child of the person class')
            //     }
            // }
              
            //   const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
            //   console.log(s1)
            //   console.log(s1.saySomething())
            //   console.log(s1.getFullName())
            //   console.log(s1.getPersonInfo())

    // Overriding methods                                                                                       (!)
        // * We can customize the parent methods, we can add additional properties to a child class.
        // * If we want to customize the methods and to add some extra properties, we need to use the constructor function in the child class too.
        // * Inside the constructor function we call the super() function to access all the properties from the parent class.
        // * The Person class didn't have gender but now let us give gender property for the child class, Student.
        // * If the same method name is used in the child class, the parent method will be overridden.

            // class Student extends Person {
            //   constructor(firstName, lastName, age, country, city, gender) {
            //     super(firstName, lastName, age, country, city)
            //     this.gender = gender
            //   }

            //   saySomething() {
            //     console.log('I am a child of the person class')
            //   }
            //   getPersonInfo() {
            //     let fullName = this.getFullName()
            //     let skills =
            //       this.skills.length > 0 &&
            //       this.skills.slice(0, this.skills.length - 1).join(', ') +
            //         ` and ${this.skills[this.skills.length - 1]}`

            //     let formattedSkills = skills ? `He knows ${skills}` : ''
            //     let pronoun = this.gender == 'Male' ? 'He' : 'She'

            //     let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
            //     return info
            //   }
            // }

            // const s1 = new Student(
            //   'Asabeneh',
            //   'Yetayeh',
            //   250,
            //   'Finland',
            //   'Helsinki',
            //   'Male'
            // )
            // const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
            // s1.setScore = 1
            // s1.setSkill = 'HTML'
            // s1.setSkill = 'CSS'
            // s1.setSkill = 'JavaScript'

            // s2.setScore = 1
            // s2.setSkill = 'Planning'
            // s2.setSkill = 'Managing'
            // s2.setSkill = 'Organizing'

            // console.log(s1)

            // console.log(s1.saySomething())
            // console.log(s1.getFullName())
            // console.log(s1.getPersonInfo())

            // console.log(s2.saySomething())
            // console.log(s2.getFullName())
            // console.log(s2.getPersonInfo())

// NOTE : We also use "AnObject.constructor.name" to get the class name of an object whick has inherited from

// EXERCISE 1 :

// class Manager {
//     constructor (firstname, lastname, age, department, since, currSalary) {
//         this.firstname  = firstname;
//         this.lastname   = lastname;
//         this.age        = age;
//         this.department = department;
//         this.since      = since;
//         this.currSalary  = currSalary;
//     }
//     displaySalary () {
//         let display = this.currSalary;
//         try {
//             if (display === undefined) throw "You must select either your own salary or a sub-worker"
//             return display;

//         } catch (err) {
//             console.warn(err);
//         }
//     }
//     set increaseSalary (amount) {
//         try {
//             if (isNaN(amount)) throw "Manager Class doesn't have a property called workerSalary";
//             if (this.constructor.name === "Manager") throw "You cannot increase your salary!"
//             this.currSalary += amount;

//         } catch (err) {
//             console.error(err);
//         }
//     }
// }

// class Worker extends Manager {
//     // constructor (firstname, lastname, age, department, since, currSalary) {
//     //     super(firstname, lastname, age, department, since, currSalary);
//     // }
// }

// const marketingM = new Manager("Murtaza", "Bey", 52, "Marketing", 2001, 17200);
// const salesM     = new Manager("Memduh", "Demir", 47, "Sales", 2005, 15400);

// const workerCEAT    = new Worker("Cemile", "Atesh", 34, "Dying", 2015, 5200);

// workerCEAT.increaseSalary = 300;
// marketingM.increaseSalary = 5400;

// console.log(marketingM);
// console.log(workerCEAT);
// console.log(workerCEAT.displaySalary())
