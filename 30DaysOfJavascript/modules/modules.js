export function capitalize (word) {                                                 // CAPITALIZES A WORD
    let modify = word[0].toUpperCase().concat(word.slice(1).toLowerCase());
    return modify;
};

export function max (arr) {                                                     // MAX | ARRAYS THAT ARE FULL OF NUMBERS
    let max = -Infinity;                                    
    for (let i = 0; i < arr.length; i++) {
        max < arr[i]
            ? max = arr[i]
            : i;
    };
    return max;
};

export function min (arr) {                                                    // MIN | ARRAYS THAT ARE FULL OF NUMBERS
    let min = Infinity;                               
    for (let i = 0; i < arr.length; i++) {
        min > arr[i]
            ? min = arr[i]
            : i;
    };
    return min;
};

export function median (arr) {                                              // MEDIAN | ARRAYS THAT ARE FULL OF NUMBERS
    let sort = arr.sort((a,b) => a - b);
    let median = parseInt((arr.length -1)/ 2);                              
    let getLength = arr.length;
    let result;                                             
        getLength % 2 === 0
        ? result = [arr[median], arr[median + 1]]
        : result = arr[median];
    return result;                                   

};

export function primeSorter (till) {                                // SORTS PRIME NUMBERS UNTIL THE PARAMETER THAT HAS BEEN SENT TO INSIDE IT
    const normal             = range(2,till)
    const reversed           = normal.reverse()     
    let primes               = []

    for (let x of reversed) {
        let isPrime  = true

        for (let y of normal) {
            (x % y === 0) && (x !== y )
                ? isPrime = false : "none";
        }
        isPrime == true
            ? primes.push(x) : "none";
    };
    return primes.reverse();
};

export const isPrime = (numb) => {
    let message;
    const primeNumbs = primeSorter(numb);
        primeNumbs.includes(numb)
            ? message = true : message = false;
    
    return message;
};

export const alphabet = (start = 0, end = 26) => {                                             // RETURNS THE ALPHABET IN LOWERCASE LETTERS
    let pangram          = "The quick brown fox jumps over the lazy dog";
    let alph             = pangram.split(" ").join("").toLowerCase();
    let modifyAlph       = alph.split("");

    for (let j of modifyAlph) {
        modifyAlph.indexOf(j) < modifyAlph.lastIndexOf(j)
        ? modifyAlph.splice(modifyAlph.indexOf(j), 1)
        : j;
    }
    modifyAlph       = modifyAlph.sort();
    return modifyAlph.slice(start, end);

};

export const range = (start = 0, end) => {                             // GENERATES NUMBERS IN RANGE BETWEEN START & END PARAMETERS
    let numbers = [];

    while (start <= end) {
        numbers.push(start);
        start++;
    };
    return numbers;
};

export const punctuations = ["&", "@", "?", "#", "%", "+", ";"];        // SOME PUNCTUATION MARKS

export const bychance = (start, till) => {                          // PRODUCES RANDOM NUMBER BETWEEN START AND END
    let rand = Math.floor(Math.random() * (till - start + 1) + start);
    
    return rand;
};

export function randomChar(counter, specials = true) {               // PRODUCES RANDOM CHARS & NUMBERS (INCLUDING ALPHABET, 1-9, SPECIAL CHARS)
    const alph              = alphabet().join("");
    const alphUpper         = alph.toUpperCase();
    const numbs             = range(0, 9);
    const marks             = punctuations;
    let randomCharGroup    = [alph,alphUpper,numbs,marks];

    specials === false                      // <-- punctuation marks
        ? randomCharGroup.splice(3,1)
        :"none";

    let randomID = []

    for (let i = 0; i < counter; i++) {
        let randomChar = randomCharGroup[bychance(0,randomCharGroup.length - 1)]
        randomChar.length === alph.length
            ? randomID[i] = randomChar[bychance(0,alph.length - 1)]
            : randomChar.length === alphUpper.length
                ? randomID[i] = randomCharGroup[bychance(0,alphUpper.length - 1)]
                : randomChar.length === numbs.length
                    ? randomID[i] = randomChar[bychance(0,numbs.length - 1)]
                    : randomChar.length === marks.length
                        ? randomID[i] = randomChar[bychance(0,marks.length - 1)]
                        :"none";
    };
    return randomID.join("");
};

export function hexGen() {                                          // GENERATES HEX COLORS
    const alph  = alphabet(0,6).join("");
    const numbs = range(0,9);
    const chars = [alph, numbs];
    let hex     = ["#"];
    
    for (let i = 0; i < 6; i++) {
        let randChar = chars[bychance(0,1)]
        if (randChar.length === alph.length) {
            hex.push(randChar[bychance(0, (alph.length - 1) )])

        } else {
            hex.push(randChar[bychance(0, (numbs.length - 1) )])
        };
    };
    return hex.join("").toUpperCase();
};

export function rgbGen () {                                         // GENERATES RGB COLORS
    let rgb = [];

    for (let i = 0; i < 3; i++) {
        const number = range(0, 255);
        rgb[i] = number[bychance(0, (number.length - 1))];
    };
    rgb = rgb.toString();
    return "rgb(".concat(rgb,")");
};

export function hexToRgb (hex) {
    hex = hex.toUpperCase()
    const hexDict = {
        A : 10,
        B : 11,
        C : 12,
        D : 13,
        E : 14,
        F : 15
    };
    let hex_ = hex.slice(1).split("");
    hex[0] !== "#"
        ? hex_ = hex.slice(0).split("")
        : "none";

    for (let i = 0; i < hex_.length; i++) {
        if ( Object.keys(hexDict).includes(hex_[i]) ) {
            hex_[i] = hexDict[hex_[i]];

        } else {
            hex_[i] = +hex_[i];
        };
    }

    const rgb = [];
    for (let i = 0;i < hex_.length; i) {
        rgb.push((hex_[i] * 16) + hex_[i + 1]);
        i += 2;
    }
    return "rgb(".concat(rgb.toString(), ")");
}

export function rgbToHex (rgb) {
    const hexDict = {
        10 : "A",
        11 : "B",
        12 : "C",
        13 : "D",
        14 : "E",
        15 : "F"
    };
    let modify = rgb.replaceAll("rgb(", "").replaceAll(" ","");
        modify = modify.slice(0, -1);
        modify = modify.split(",");
        for (let m = 0; m < modify.length; m++) {
            modify[m] = +modify[m];
        };

        let range_ = range(0,15);
        let hexx = [];
        for (let x of modify) {
            let div = parseInt(x/16); 
            let left = parseInt(x%16);
            hexx.push(div); 
            hexx.push(left);
        };
        for (let i = 0; i < hexx.length; i++) {
            hexx[i] = hexx[i].toString();
            Object.keys(hexDict).includes(hexx[i])
                ? hexx[i] = hexDict[hexx[i]]
                : "none";
        }
        let result = hexx.join("");
    return "#".concat(result);
};

export function colorGen (amount, base = "hexa") {

    let colorList = [];

    for (let i = 0; i < amount; i++) {
        base === "rgb"
            ? colorList.push(rgbGen())
            : colorList.push(hexGen());
    }

    return colorList;
}

export function shuffle (arr) {

    let shuffled = Array(arr.length);

    for ( let i = 0; i < arr.length; i) {
        
        let randomIndex = bychance(arr.length - 1);

        randomIndex !== -1
            ? shuffled[arr.length - 1] = arr.splice(randomIndex, 1)[0]
            : "none";
    }
  
    return shuffled;
};

export const factorial = (numb) => {
    let factorial = 1;
    for (let i = 1; i <= numb; i++) {
        factorial *= i
    }
    return factorial;
}

export const isEmpty = (arg) => {
    let empty;
    (arg == "") || (arg === null) || (arg === undefined) || (arg == " ") || (arg == [])
        ? empty = true
        : empty = false;
    return empty;
};

export const isUnique = (arr) => {
    let message;
    for (let i of arr) {
        arr.indexOf(i) < arr.lastIndexOf(i)
            ? message = "Nope!" : message = "Yep!";
    };
    return message;
};

export const compareWith = (callback, a,b) => {
    let same = false
        if ( callback(a,b) ) {
            same = true
            }
    return same;
};

export function uniqueNumbGen (till, length) {
    let arr = [];

    switch (true) {
        case till < length :
            return "Impossible!"
            break;
        default : 
            let isEmpty = true
            while (isEmpty){
                let numb = bychance(till)
                if (!arr.includes(numb)) {
                    arr.push(numb)
                };
                if (arr.length == length) {
                    isEmpty = false
                };
            };    
    }       return arr;
};

export function NaN_detector (arr) {
    let count = 0;
    for (let element of arr) {
        if ( ((typeof element) === "number") && (element.toString().length === 3) && (element.toString() === "NaN") ) count++;
    }
    return count;
}
export function NaN_cleaner (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if ( ((typeof arr[i]) === "number") && (arr[i].toString() === "NaN") ) arr[i] = "";
        if (arr[i] !== "") newArr.push(arr[i]);
    }
    return newArr;
}

Array.prototype.topOnes = function (callback, top) {
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if ( callback(this[i]) < callback(this[j])) {
                let temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            };
        };
    };
    return this.slice(0, top);
};

export function doesInclude (callback, arr, obj) {
    let result = false
    for (let x of arr) {
        if (callback(obj, x)) {
            result = true;
            break;
        }
    };
    return result;
};

// ------------------------------------------------------------------------------------------------------------------
import { countries } from "../others/countries.js";                 // THE LIST WHERE SOME COUNTRIES EXIST

export function countryGen (till) {                                 // SELECTS COUNTRIES RANDOMLY HOWEVER MANY USER WANTS

    const alph          = alphabet().join("").toUpperCase();
    const country       = {};
    const randCountries = [];

    for (let i = 0; i < till; i++) {
        country[alph[i]] = [];

        for (let j of countries) {
            if (j.startsWith(alph[i])){
                country[alph[i]].push(j);
            };
        };
        let result = country[                                       // Object --> Key --> Random Value
            alph[i]
        ] 
            [
                bychance(0, country[alph[i]].length - 1) 
            ];                        
                                
        randCountries.push(result);
    };
    return randCountries;
}

// function downloader(content, filename, contentType) {                      JSON Downloader
//     var a = document.createElement("a");
//     var file = new Blob([content], {type: contentType});
//     a.href = URL.createObjectURL(file);
//     a.download = filename;
//     a.click();
// }
// download(JSON.stringify(countries, null, 4), 'countries.json', 'text/plain');