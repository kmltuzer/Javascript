// WORLD COUNTRIES DATA

/*const countries = {};
const languages = {};

const getData   = async function () {                                   // Fetching countries                             
    const response = await fetch("https://restcountries.com/v2/all");
    const data  = response.json()
    return data;

};
await getData().then( function (data) {                             // Modifying fetched countries
    data.forEach(element => {
        countries[element.name] = {
            population : element.population,
            languages : []
        };
        element.languages.forEach( (lang, index) => {
            countries[element.name]["languages"].push(element.languages[index].name);
        } );
    });
} );

Array.prototype.topOnes = function (callback, top) {        // Building a method to find top ones out
    for (let i = 0; i < this.length; i++) {                 // sort() method could also be used
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

const getTopPops     = Object.keys(countries).topOnes( key => countries[key].population, 10 );      // By their populations
const topPopulations = getTopPops.map( arg => arg = {[arg] : countries[arg].population } );

for (let key in countries){                                         // Getting languages & assigning numbers
    countries[key].languages.forEach( arg => {
        if (languages.hasOwnProperty(arg)) languages[arg] += 1
        else languages[arg] = 1;
    } );
};

const getTopLangs   = Object.keys(languages).topOnes( key => languages[key], 10);
const mostSpokenL   = getTopLangs.map( arg =>  arg = {[arg] : languages[arg]} )

// Getting HTML Elements to display what i've done above

const buttons = document.querySelector('.buttons');
const popData   = document.querySelector('.populations').querySelectorAll('.data');
const langData  = document.querySelector('.languages').querySelectorAll('.data');
document.querySelector('.country-lenght').textContent = Object.keys(countries).length;

buttons.firstElementChild.firstElementChild.addEventListener('click', () => {
    langData[0].parentElement.style.display = "none";
    popData[0].parentElement.style.display = "grid";

    let index = 0;
    for (let div of popData) {
        const getKeys = Object.keys(topPopulations[index])
        div.firstElementChild.textContent = getKeys[0];
        div.lastElementChild.textContent = topPopulations[index][getKeys[0]];
        const calc = ( (100 * 100)/100 ) - ( (index*10*100)/100 );
        div.querySelector('.bar').style.width = `${calc}%`;
        console.log(calc);
        index++

        buttons.lastElementChild.textContent = "10 Most populated countries in the world";
    };
} );

buttons.firstElementChild.lastElementChild.addEventListener('click', () => {
    langData[0].parentElement.style.display = "grid";
    popData[0].parentElement.style.display = "none";

    let index = 0;
    for (let div of langData) {
        const getKeys = Object.keys(mostSpokenL[index])
        div.firstElementChild.textContent = getKeys[0];
        div.lastElementChild.textContent = mostSpokenL[index][getKeys[0]];
        const calc = ( (100 * 100)/100 ) - ( (index*10*100)/100 );
        div.querySelector('.bar').style.width = `${calc}%`;
        console.log(calc);
        index++

        buttons.lastElementChild.textContent = "10 Most spoken languages in the world";
    };
} );
*/