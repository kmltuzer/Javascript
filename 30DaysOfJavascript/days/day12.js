// REGULAR EXPRESSION       (RegExp)
    // * A regular expression or RegExp is a small programming language that helps to find pattern in data.
    // * A RegExp can be used to check if some pattern exists in a different data types. 
    // * To use RegExp in JavaScript either we use RegExp constructor or we can declare a RegExp pattern using two forward slashes followed by a flag.

    // * We can create a pattern in two ways ;
        // -To declare a string we use a single quote, double quote or a backtick between two forward slashes.
        // And the flag could be g, i, m, s, u or y.

    // RegExp parameters ;
        // * A regular expression takes two parameters. The one required search pattern and an optional flag.

    // Pattern :
        // * A pattern could be a text or any form of pattern which some sort of similarity. 
        // * The word spam in an email could be a pattern or a phone number.

    // Flags :
        // * Flags are optional parameters in a regular expression which determine the type of searching.
            // g: a global flag which means looking for a pattern in whole text.
            // i: case insensitive flag(it searches for both lowercase and uppercase).
            // m: multiline.

    // Creating a pattern with RegExp Constructor ;                                                                     (!)

        // let pattern = 'love'                               
        // let regEx = new RegExp(pattern)                 // without flag // Declaring regular expression without global flag and case insensitive flag.

        // let pattern = 'love'
        // let flag = 'gi'
        // let regEx = new RegExp(pattern, flag)           // Declaring regular expression with global flag and case insensitive flag.

        // OR

        // let regEx = new RegExp('love','gi')
        
    // Creating a pattern without RegExp Constructor ;

        // let regEx= /love/gi;                             // This is the same as the one in RegExp the constructor above.

    // RegExpp Object Methods
        // Testing for a match ;
            // test() : Tests for a match in a string. It returns true or false. It's like the includes() method in the version of RegExp

                // const str = 'I love JavaScript';
                // const pattern = /love/
                // const result = pattern.test(str)
                // console.log(result)                       // true
                // console.log( /love/.test(str) )           // true

        // Array containing all of the match ;

            // match() : Returns an array containing all of the matches, including capturing groups, or null if no match is found. 
            // If we do NOT use a GLOBAL FLAG, it returns an array containing the pattern, index, input and group.                      (!)

                // const str = 'I love JavaScript'
                // const pattern = /love/
                // const result = str.match(pattern)
                // console.log(result)

                // const str = 'I love JavaScript'
                // const pattern = /love/g
                // const result = str.match(pattern)
                // console.log(result)

            // search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

                // const str = 'I love JavaScript'
                // const pattern = /love/g
                // const result = str.search(pattern)
                // console.log(result)                              // 2

        // Replacing a substring ;

            // replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

            // const txt = 'Python is the most beautiful language that a human begin has ever created.\
            // I recommend python for a first programming language'
            // let matchReplaced = txt.replace(/Python|python/, 'JavaScript')
            // console.log(matchReplaced)                                               // Just the first one has changed

            // const txt = 'Python is the most beautiful language that a human begin has ever created.\
            // I recommend python for a first programming language'
            // let matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
            // console.log(matchReplaced)                                               // All of them have changed

            // const txt = 'Python is the most beautiful language that a human begin has ever created.\
            // I recommend python for a first programming language'
            // let matchReplaced = txt.replace(/Python/gi, 'JavaScript')
            // console.log(matchReplaced)                                               // All of them have changed ( | means Either or)


// (!)      // const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
            // T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
            // p%e%o%ple.\
            // I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
            // D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
            // let matches = txt.replace(/%/g, '')
            // console.log(matches)                                                     // All of % have been cleaned

        // A Set Of Characters :                                                                                                (!)
            // -[a-c] means, a or b or c
            // -[a-z] means, any letter a to z
            // -[A-Z] means, any character A to Z
            // -[0-3] means, 0 or 1 or 2 or 3
            // -[0-9] means any number 0 to 9
            // -[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9

        // Back slash (\) :                                                                                         (!)
            // * It uses to escape special characters.                                                                                 

                // \d mean: match where the string contains digits (numbers from 0-9).
                // \b: word bounder, matches with the beginning or ending of a word.
                    // {3}: Exactly 3 characters
                    // {3,}: At least 3 characters
                    // {3,8}: 3 to 8 characters

        // Period (.) : 
            // * Any character except new line character (\n).

        // Caret (^) : Starts with
            // r'^substring' eg r'^love', a sentence which starts with a word love
            // r'[^abc] mean not a, not b, not c.

        // Dollar ($) : Ends with
            // r'substring$' eg r'love$', sentence ends with a word love

        // Asteriks (*) : Zero or more times
            // r'[a]*' means an optional or it can occur many times.

        // Plus (+) : One or more times
            // r'[a]+' means at least once or more times.

        // Question (?) : Zero or one times
            // r'[a]?' means zero times or once

        // Stick (|) : Either or
            // r'apple|banana' mean either of an apple or a banana.

        // Parentheses () : Capture and group

    // Let's make some example to clarify them all.

        // Square Bracket ;

            // const pattern = '[Aa]pple'                                                   // this square bracket means either A or a      (!)
            // const txt = 'Apple and banana are fruits. An old cliche says an apple a\
            // day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
            // const matches = txt.match(pattern)
            // console.log(matches)

            // const pattern = /[Aa]pple/g                                                  // this square bracket means either A or a      (!)
            // const txt = 'Apple and banana are fruits. An old cliche says an apple a\
            // day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
            // const matches = txt.match(pattern)                                                       // ["Apple", "apple"]
            // console.log(matches)

            // const pattern = /[Aa]pple|[Bb]anana/g                                        // this square bracket mean either A or a       (!)
            // const txt = 'Apple and banana are fruits. An old cliche says an apple a\
            // day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
            // const matches = txt.match(pattern)
            // console.log(matches)                                                         // ["Apple", "banana", "apple", "banana", "Banana"]

        // Escape character(\) in RegExp ;

            // const pattern = /\d/g                                                        // d is a special character which means digits
            // const txt = 'This regular expression example was made in January 12,  2020.'
            // const matches = txt. match(pattern)
            // console.log(matches)                                                         // ["1", "2", "2", "0", "2", "0"], this is not what we want

            // One or more times (+)

                // const pattern = /\d+/g                                                           // plus means once or more times and \d means digits
                // const txt = 'This regular expression example was made in January 12,  2020.'
                // const matches = txt. match(pattern)
                // console.log(matches)                                                             // ["12", "2020"]

            // Period (.)

                // const pattern = /[a]./g                              // this square bracket means a, and . means any character except new line
                // const txt = 'Apple and banana are fruits'
                // const matches = txt.match(pattern)
                // console.log(matches)                                 // ["an", "an", "an", "a ", "ar"]

                // const pattern = /[a].+/g                             // . any character, + any character once or more times 
                // const txt = 'Apple and banana are fruits'
                // const matches = txt.match(pattern)
                // console.log(matches)                                 // ['and banana are fruits']

            // Zero or more times (*)
                // * Zero or many times. The pattern may not occur or it can occur many times.

                // const pattern = /[a].*/g                             //. any character, + any character one or more times 
                // const txt = 'Apple and banana are fruits'
                // const matches = txt.match(pattern)
                // console.log(matches)                                 // ['and banana are fruits']

            // Zero or one times (?)
                // * Zero or one times. The pattern may not occur or it may occur once.

                // const txt = 'I am not sure if there is a convention how to write the word e-mail.\
                // Some people write it email others may write it as Email or E-mail.'
                // const pattern = /[Ee]-?mail/g                                                // ? means optional
                // matches = txt.match(pattern)
                // console.log(matches)                                                         // ["e-mail", "email", "Email", "E-mail"]

        // Quantifier in RegExp ;                                                                                                               (!)
            // * We can specify the length of the substring we look for in a text, using a curly bracket.

                // const txt = 'This regular expression example was made in December 6,  2019.'
                // const pattern = /\b\w{4}\b/g                                                     //  exactly four character words
                // const matches = txt.match(pattern)
                // console.log(matches)                                                             // ['This', 'made', '2019']

                // const txt = 'This regular expression example was made in December 6,  2019.'
                // const pattern = /\b[a-zA-Z]{4}\b/g                                               //  exactly four character  words without numbers
                // const matches = txt.match(pattern)
                // console.log(matches)                                                             // ['This', 'made']

                // const txt = 'This regular expression example was made in December 6,  2019.'
                // const pattern = /\d{4}/g                                                         // a number and exactly four digits
                // const matches = txt.match(pattern)
                // console.log(matches)                                                             // ['2019']

                // const txt = 'This regular expression example was made in December 6,  2019.'
                // const pattern = /\d{1,4}/g                                                       // 1 to 4
                // const matches = txt.match(pattern)
                // console.log(matches)                                                             // ['6', '2019']

            // Caret (^) : Starts with

                // const txt = 'This regular expression example was made in December 6,  2019.'
                // const pattern = /^This/                                                          // ^ means starts with
                // const matches = txt.match(pattern)
                // console.log(matches)                                                             // ['This']

                // Negation

                // const txt = 'This regular expression example was made in December 6,  2019.'
                // const pattern = /[^A-Za-z,. ]+/g           // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
                // const matches = txt.match(pattern)
                // console.log(matches)                       // ["6", "2019"]

            // Exact match ;
                // * It should have ^ starting and $ which is an end.

                // let pattern = /^[A-Z][a-z]{3,12}$/;
                // let name = 'Asabeneh';
                // let result = pattern.test(name)
                // console.log(result)                        // true

// EXERCISE 1 : Caltulate income

/* const sentence = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
let matches = sentence.match(/\d+/g)
let sum = 0;
matches.forEach( element => sum += +element);
console.log(`Total income : ${sum}`); */

// EXERCISE 2 : Is A Variable name Valid ?

/* function isValid (word) {
    if ( word.match(/^[a-z][A-Z0-9a-z\_]{3,}$/) ) return true
      else return false
} 

console.log(isValid("javs_cript")) */

// EXERCISE 3 : Find the most frequently used words

/* const paragraph = "I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you\
all the capabilities to develop an application what else can you love. python Python python pYThOn."

import { doesInclude} from "../modules/modules.js"
import "../modules/modules.js"

let obj = {};
let temp = [];

const matches = paragraph.match(/\w+/g)
matches.forEach( (arg) =>  (arg = arg.toLowerCase()) && (obj[arg] = 0) )
matches.forEach( (arg) => (arg = arg.toLocaleLowerCase()) && (obj[arg] += 1) )

for (let x of Object.keys(obj)) {
    let tempObj = x.toString()
    temp.push({[tempObj] : obj[x]})
}

let top = temp.topOnes( (param) => Object.values(param),5 )
console.log(top); */

// EXERCISE 3 : Clean the text and get most frequent top 3 ones

/* const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering\
peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?. lovE LOvE"
const modify = sentence.replace(/[^A-Za-z .]/g, "").match(/\w+/g).map( (element) => element.toLowerCase() );
const set = new Set(modify);

const arr = [];
set.forEach( (arg) => {
    arr.push( {word : arg, count : 0} )
} )
arr.forEach( (obj) => {
    modify.forEach( (word) => {
        word = word.toLowerCase()
        if (obj.word === word) obj.count += 1
    })
} )


function mostFrequent (arr, top) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ( arr[i].count < arr[j].count ) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.slice(0, top)
}

console.log(mostFrequent(arr, 3)); */

// SOME EXERCISES WITH REGEX :

// let  creditCards = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/; 

// let americanExpress = /^36([0-9]{2})([0-9]{4}){3}$/;
// let visa = /^4(\d{3})-?(\d{4}-?){2}\d{4}$/;
// let masterCard = /^50(\d{2})-?(\d{4}-?){2}\d{4}$/;
// let discover = /^65(\d{2})-?(\d{4}-?){2}\d{4}$/;
// let jcb = /^35(\d{2})-?(\d{4}-?){2}\d{4}$/;

// let email = /^\w+[.-]?\w*@{1}\w{2,}\.{1}([a-z]{2,3}|[a-z]{2}\.{1}[a-z]{2})$/;
// let date = /^(1[0-2]{1}|0[1-9]{1})\/?(0[0-9]{1}|1[0-2]|3[0-1])\/?([0-2]{1}0[0-9]{2})$/;

// console.log(email.test("memduh_cevik@gmail.com"))

// function spaceTrimmer(word) {
//     let patt = /^\s+|\w+\s{2,}\w+|\s+$/;
//     let trimmed;
//     if (patt.test(word)) {
//         word = word.match(/\w+/gm).join(" ");
//     };
//     return word;
// };
// console.log(spaceTrimmer("   memduh        demir       "));

// let ip_ = /^([0-1][0-9]{1,2}|2[0-5]{1,2})(\.{1}[0-1][0-9]{0,2}|\.{1}2[0-5]{0,2}){3}$/
// console.log(ip_.test("192.202.250.155"))

// let url_ = /^https:\/\/(www\.)?\w+\.{1}([a-z]{3}|[a-z]{2}\.[a-z]{2})((\/{1}[A-Za-z0-9-]+)*(\.{1}[a-z]{2,4}))?$/
// // console.log(url_.test("https://mathmatch.com/memduhcevil_ile_yeni_bir_sabah/gunun_programi.html"));
// console.log(url_.test("https://www.w3resource.com/javascript-exercises/javascript-regexp-exercises.js"));