// PROMISES
    // * We human give or receive a promise to do some activity at some point in time. 
    // * If we keep the promise we make others happy but if we do not keep the promise, it may lead discontentment. 
    // * Promise in JavaScript has something in common with the above examples.
    // * A Promise is a way to handle asynchronous operations in JavaScript. 
    // * It allows handlers with an asynchronous action's eventual success value or failure reason. 
    // * This lets asynchronous methods return values like synchronous methods. 
    // * Instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

    // A Promise is in one of these states :
        // -pending     : initial state, neither fulfilled nor rejected.
        // -fulfilled   : meaning that the operation completed successfully.
        // -rejected    : meaning that the operation failed.

        // * A pending promise can either be fulfilled with a value, or rejected with a reason (error).
        // * When either of these options happens, the associated handlers queued up by a promise's then method are called. 
        // * If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.
        // * As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

        // * To understand promise very well let us understand callback first. 
        // * Let's see the following callbacks. From the following code blocks. 
        // * You will notice, the difference between callback and promises.

    // Callbacks
        // * Let us see a callback function which can take two parameters.
        // * The first parameter is err and the second is result.
        // * If the err parameter is false, there will not be error otherwise it will return an error.
        // * In this case the err has a value and it will return the err block.

            // Callback

            // const doSomething = callback => {
            //     setTimeout(() => {
            //       const skills = ['HTML', 'CSS', 'JS']
            //       callback('It did not go well', skills)
            //     }, 2000)
            // }
            
            // const callback = (err, result) => {
            //     if (err) {
            //       return console.log(err)
            //     }
            //     return console.log(result)
            // }
            
            //   doSomething(callback)

        // When the err is false and it will return the else block which is the result.

            // const doSomething = callback => {     
            //     setTimeout(() => {
            //       const skills = ['HTML', 'CSS', 'JS']
            //       callback(false, skills)
            //     }, 2000)
            //   }
              
            //   doSomething((err, result) => {
            //     if (err) {
            //       return console.log(err)
            //     }
            //     return console.log(result)
            //   })

    // Promise constructor
        // * We can create a promise using the Promise constructor.
        // * We can create a new promise using the key word new followed by the word Promise with parentheses.
        // * Inside the parenthesis, it takes a callback function.
        // * The promise callback function has two parameters which are the resolve and reject functions.

            // syntax :

                // const promise = new Promise((resolve, reject) => {
                //     resolve('success')
                //     reject('failure')
                // })

            // Promise :

                // const doPromise = new Promise((resolve, reject) => {
                //     setTimeout(() => {
                //       const skills = ['HTML', 'CSS', 'JS']
                //       if (skills.length > 0) {
                //         resolve(skills)
                //       } else {
                //         reject('Something wrong has happened')
                //       }
                //     }, 2000)
                // })
                
                //   doPromise
                //     .then(result => {
                //       console.log(result)
                //     })
                //     .catch(error => console.log(error))                          // ['HTML', 'CSS', 'JS']

            // The above promise has been settled with resolve. Let us another example when the promise is settled with reject.

                // Promise : 

                    // const doPromise = new Promise((resolve, reject) => {
                    //     setTimeout(() => {
                    //       const skills = ['HTML', 'CSS', 'JS']
                    //       if (skills.includes('Node')) {
                    //         resolve('fullstack developer')
                    //       } else {
                    //         reject('Something wrong has happened')
                    //       }
                    //     }, 2000)
                    // })
                    
                    //   doPromise
                    //     .then(result => {
                    //       console.log(result)
                    //     })
                    //     .catch(error => console.error(error))                    // Something wrong has happened

    // Fetch API
        // * The Fetch API provides an interface for fetching resources (including across the network).
        // * It will seem familiar to anyone who has used XMLHttpRequest.
        // * But the new API provides a more powerful and flexible feature set.
        // * Here, we will use fetch to request url and APIS.
        // * In addition to that let us see demonstrate use case of promises in accessing network resources using the fetch API.

            // syntax : 

                // const url = 'https://restcountries.com/v2/all'                               // countries api
                // fetch(url)
                // .then(response => response.json() )                                          // accessing the API data as JSON
                // .then(data => {
                //      // getting the data
                //      console.log(data)
                // })
                // .catch(error => console.error(error))                        // handling error if something wrong happens

    // Async and Await
        // * Async and await is an elegant way to handle promises.

        // const square = async function (n) {
        //     return n * n
        // }
        // console.log(square(2))                                                 // Promise {<resolved>: 4}

        // * The word async in front of a function means that function will return a promise. 
        // * The above square function instead of a value it returns a promise.

        // How do we access the value from the promise?                                                                 (!)
            // * To access the value from the promise, we will use the keyword "await".

                // const square = async function (n) {
                //     return n * n
                // }
                // const value = await square(2)
                // console.log(value)                   // 4  // Async and await go together, the one cannot exist without the other.

        // Using fetch API data using both promise method and async and await method.

            // With promise ;

                // const url = 'https://restcountries.com/v2/all'
                // fetch(url)
                // .then(response => response.json())
                //     .then(data => {
                //     console.log(data)
                // })
                // .catch(error => console.error(error))

            // With async and await ;

                // const fetchData = async () => {
                //     try {
                //         const response = await fetch(url)
                //         const countries = await response.json()
                //         console.log(countries)
                //     } catch (err) {
                //         console.error(err)
                //         }
                //     }
                // console.log('===== async and await')
                // fetchData()

// EXERCISE 1 : 

       // APIS
const countriesAPI  = 'https://restcountries.com/v2/all';
const catsAPI       = 'https://api.thecatapi.com/v1/breeds';


// Processes that take a particular time are Web API processes & they are asynchronous processes. To prevent this & to synchronize them, we use callback.

/*let surname = "";
function getName (callback) {
    setTimeout( () => {
        surname = "cevik";
        callback(surname);
    }, 2000 )
}

getName( (lastname) => console.log(lastname) );
*/
// --------------------------------------------------------------------------------------------------------------------------- 

/*let surname = "";
let lastname = "";
let age;
let nation;
function getSurname (callback) {
    setTimeout( () => {
        surname = "memduh";
        callback(surname)
    }, 1000 );
};

function getLastName (callback) {
    setTimeout( () => {
        lastname = "cevik";
        callback(lastname);
    }, 2000 )
};

function getAge (callback) {
    setTimeout( () => {
        age = 25;
        callback(age);
    }, 2500 );
};

function getNation (callback) {
    setTimeout( () => {
        nation = "Germany";
        callback(nation);
    }, 3000 );
}
getSurname( (surname) => {
    getLastName ( (lastname) => {
        getAge( () => {
            getNation( () => {
                console.log(surname, lastname, age, nation);
            } );
        } );
    } );
} );
*/
// The above one is called a callback hell.

// ---------------------------------------------------------------------------------------------------------------------

/*function getUsers (callback) {                                            // Fake Promise
    const xhr = new XMLHttpRequest();
    xhr.addEventListener( "readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            callback(undefined, data);
        } else if (xhr.readyState === 4) {
            callback("Data couldn't be reached!", undefined);
        };
    } );
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.send();
};

getUsers( (err, data) => {
    if (err) console.log(err)
    else console.log(data);
} );
*/                                       // This is an asynchronous operation and it needs to be evaluate as an asynchronous operation.

// ----------------------------------------------------------------------------------------------------------------------------------------

/*function getData (url, callback) {                                            // Fake Promise
    const xhr = new XMLHttpRequest();
    xhr.addEventListener( "readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            callback(undefined, data);
        } else if (xhr.readyState === 4) {
            callback("Data couldn't be reached!", undefined);
        };
    } );
    xhr.open("GET", url);
    xhr.send();
};

getData("https://jsonplaceholder.typicode.com/users", (err, data) => {
    if (err) {
        console.log(err)

    } else {
        console.log(data)
        getData("https://jsonplaceholder.typicode.com/posts", (err, data) => {      // We have called the function again. Extending of this to bottom,
            if (err) console.log(err)                                               // is called callback hell. To prevent this, we use Promise.
            else console.log(data);
        } );
    }
} );
*/

// ----------------------------------------------------------------------------------------------------------------------------------

/*let noProblem = false;
function getData () {
    return new Promise((resolve, reject) => {
        if (noProblem) {
            resolve("Data is ready")
        } else {
            reject("There is a problem!")
        };
    });
};

getData()
    .then( (data) => {
        if (data === "Data is ready") {
            return data
        } else {
            return "unknown";
        };
    } )
    .then ( (data) => {
        console.log(data)
    } )
    .catch ( (err) => {
        console.log(err);
    } );
*/
/*function gtData (url) {
    return new Promise( (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                resolve(data);
            } else if (xhr.readyState === 4) {
                reject("ERRORRRRR")
            };
        } );
        xhr.open("GET", url);
        xhr.send();
    } );
};

gtData("../json/example.json")
    .then( (user) => {
        console.log(user);
        return gtData("../json/posts.json");             // It returns a promise object because it re-calls the function above. So, we must re-use "then". 
    } )
    .then( (post) => {
        console.log(post);
    } )
    .catch( (err) => {
        console.log(err);
    } );
*/
// -------------------------------------------------------------------------------------------------------------------------------

/* fetch("../json/posts.json")         // It is also a window method therefore asynchronous, so we need to make it synchronous. It returns a Promise object.
    .then( response => response.json() )        // .json() method also returns a promise, so we need to use a "then" more.
    .then (data => console.log(data) )
    .catch( err => console.error(err) );
*/
// ---------------------------------------------------------------------------------------------------------------------------

/*const getData = async (url) => {
    const response = await fetch(url);
    const data     = await response.json();             // We use "await" because both fetch() and json() are using a Promise object inside.
    console.log(response);                              // Wen can regard the "await" keyword just as "then" method. 
};

getData("../json/example.json");
*/
// OR

/*const gtData = async (url) => {
    const response = await fetch(url);
    const data     = await response.json();             
    return data;                                    // Returning a promise object.
};

gtData("../json/example.json")
    .then( (data) => console.log(data) )            // We can also use "then" when we want to send the data out of the function. And we can catch the eror.
    .catch( (err) => console.log(err) )
*/

// Error handling

/*const getData = async (url) => {
    const response = await fetch(url);
    if (response.status !== 200) throw new Error("Data couldn't be got")
    try {
        const data = await response.json();                                 // There might be a problem on parsing of json.
        return data;    
    } catch (err) {
        return new Promise( (resolve, reject) => reject(err) )
    }
}

getData("../json/example.json")
    .then( data => console.log(data) )
    .catch( err => console.log(err) )
*/

// EXERCISE 1 : Call a function that runs the functions inside in order

// async function inOrder (callback, cback) {
//     const one = await callback();
//     const two = await cback();
// }

// let one = () => {
//     return new Promise( (res, rej) => {
//         setTimeout( () => {
//             console.log("one")
//             res("ok");
//         }, 1000 );
//     } );
// };

// let two = () => {
//     return new Promise( (res, rej) => {
//         setTimeout( () => {
//             console.log("two");
//             res("ok");
//         },500 );
//     } );
// };

// inOrder(one, two);

/* async function inOrder (callback, cback) {
    console.time("inOrder")

    const pAll = await Promise.all([callback(), cback()])
    console.log(pAll[0])
    console.log(pAll[1])

    console.timeEnd("inOrder")
}
function one () {
    return new Promise( (res, rej) => {
        setTimeout( () => {
            res("one");
        }, 3000 )
    } )
}
function two () {
    return new Promise( (res, rej) => {
        setTimeout( () => {
            res("two")
        }, 500 )
    } )
}

inOrder(one, two);
*/

/*function inOrder (callback, cback) {
    return new Promise( (res, rej) => {
        const pAll = Promise.all([callback(), cback()])
        res(pAll);
    } )
}
function one () {
    return new Promise( (res, rej) => {
        setTimeout( () => {
            res("one");
        }, 3000 )
    } )
}
function two () {
    return new Promise( (res, rej) => {
        setTimeout( () => {
            res("two")
        }, 500 )
    } )
}

inOrder(one, two)
    .then( arr => {
        console.log(arr[0])
        console.log(arr[1])
    } );
*/

// EXERCISE 2 : 

// function job() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => resolve("hellow world"), 2000 )
//     } )
// }

// job()
//     .then(arg => console.log(arg) )

/*function job(data) {
    return new Promise( (resolve, reject) => {
        if (isNaN(data)) {
            reject("It's not a number");

        } else if (data % 2 === 0) {
            setTimeout( () => reject("Even number"), 2000 )
        } else {
            setTimeout( () => resolve("Odd number!"), 1000 )
        };
    } );
};

job("sadas")
    .then( arg => console.log(arg) )
    .catch( err => console.error(err) );
*/
    
function printHello() {
    console.log("Hello");
  }
  setTimeout(printHello, 0);
  console.log("Me first!");
  