// FINAL PROJECT 1

// let countries = {};                          
// async function getCountries() {                                          // GETTING NECESSARY PARTS OF COUNTRIES OBJECT
//     const response = await fetch('https://restcountries.com/v2/all');
//     let data = response.json();
//     return data;
// };
// await getCountries()
//     .then( final => {
//         const regEx = /\w+[ ]?\w+/
//         Object.values(final).forEach( elem => {
//             let newName = elem.name.match(regEx).length > 2 
//                 ? elem.name.match(regEx).join(" ") 
//                 : elem.name.match(regEx).join("");
//             newName = newName[0].toUpperCase().concat(newName.slice(1));

//             countries[newName] = {
//                 flag        : elem.flag,
//                 capital     : elem.capital,
//                 language    : elem.languages.map( lang => lang.name),
//                 population  : +elem.population  
//             };
//         });
//     } )
//     .catch( reason => console.error(reason) );

// function cBuilder (countries) {                              // Creating elements that show countries with their flags
//     Object.keys(countries).forEach( (arg, index) => {               
//         const countryContainer = document.createElement('div');
//             countryContainer.setAttribute('class', 'country-c grid');
//         const flagDiv = document.createElement('div');
//             flagDiv.setAttribute('class', 'flag flex');
//         const flagImg = document.createElement('img');
//             flagImg.setAttribute('src', `${countries[arg].flag}`);
//         const countryName = document.createElement('h3');
//             countryName.setAttribute('class', 'c-name font-yellow');
//             countryName.textContent = arg;
//         const textContainer = document.createElement('article');
//             textContainer.setAttribute('class', 'country-info');
//         const langs = document.createElement('p');
//             langs.setAttribute('class', 'langs');
//             langs.textContent = `Language : ${countries[arg].language.join(",").match(/\w+[, ]?\w+/).join("")}`;
//         const cap = document.createElement('p');
//             cap.setAttribute('class', 'capital');
//             cap.textContent = `Capital : ${countries[arg].capital}`;
//         const pop = document.createElement('p');
//             pop.setAttribute('class', 'population');
//             pop.textContent = `Population : ${countries[arg].population}`;
    
//         flagDiv.appendChild(flagImg);
//         countryContainer.appendChild(flagDiv);
//         countryContainer.appendChild(countryName);
    
//         textContainer.appendChild(langs);
//         textContainer.appendChild(cap);
//         textContainer.appendChild(pop);
//         countryContainer.appendChild(textContainer);
    
//         document.querySelector('.showcase').appendChild(countryContainer);
    
//     });    
// };
// cBuilder(countries);

// function topPops (arg) {
//     const pops = Object.keys(arg).map( elem => elem = {[elem] : arg[elem].population});
//     return pops;
// };

// function topLangs (arg) {
//     const topLangs = {}
//     Object.values(arg).forEach( elem => {
//         elem.language.forEach( lang => {
//             topLangs.hasOwnProperty(lang)
//                 ? topLangs[lang] += 1
//                 : topLangs[lang] = 1;
//         });
//     });
//     const result = Object.keys(topLangs).map( arg => arg = {[arg] : topLangs[arg]})
//     return result;
// };

// function sortBy (arr, byWhat, isLetter, rev, where = "") {
//     let [...srt] = arr;
//     srt.sort( (a,b) => {
//         if (isLetter) return b.querySelector(`${byWhat}`).textContent > a.querySelector(`${byWhat}`).textContent;
//         else return +b.querySelector(`${byWhat}`).textContent > +a.querySelector(`${byWhat}`).textContent;
//     } );
//     if (rev) srt.forEach( arg => document.querySelector(`${where}`).appendChild(arg) );
//     else srt.reverse().forEach( arg => document.querySelector(`${where}`).appendChild(arg) );
// };

// function sumOfPops (countries) {                                             // The sum of the populations
//     let worldPop = countries.reduce( (acc, curr) => acc + +Object.values(curr).population, 0);
//     return worldPop;
// };

// function classCleaner() {
//     const [...args] = arguments 
//     args.forEach( arg => arg.querySelector('i').classList = "" );
// };

// const [...countryContainers] = document.querySelectorAll('.country-c')
// const [byName,byCap,byPop] = document.querySelectorAll('.s-btn');

// let click1 = 0;
// document.querySelector('.srt-by-name').addEventListener('click', (e) => {
//     click1 += 1
//     classCleaner(byCap,byPop);

//     if (click1 % 2 !== 1) {
//         byName.lastElementChild.setAttribute('class', 'fa-solid fa-arrow-up-long');
//         sortBy(countryContainers,'.c-name', true, false, '.showcase')
//     } else{
//         byName.lastElementChild.setAttribute('class', 'fa-solid fa-arrow-down-long');
//         sortBy(countryContainers,'.c-name', true, true, '.showcase');
//     };
    
// });

// let click2 = 0;
// document.querySelector('.srt-by-cap').addEventListener('click', (e) => {
//     click2 += 1;
//     classCleaner(byName,byPop);

//     if (click2 % 2 !== 1) {
//         byCap.lastElementChild.setAttribute('class', 'fa-solid fa-arrow-up-long');
//         sortBy(countryContainers,'.capital', true, false, '.showcase')
//     } else{
//         byCap.lastElementChild.setAttribute('class', 'fa-solid fa-arrow-down-long');
//         sortBy(countryContainers,'.capital', true, true, '.showcase');
//     };
// });

// let click3 = 0;
// document.querySelector('.srt-by-pop').addEventListener('click', (e) => {
//     click3 += 1;
//     classCleaner(byName,byCap);

//     if (click3 % 2 !== 1) {
//         byPop.lastElementChild.setAttribute('class', 'fa-solid fa-arrow-up-long');
//         sortBy(countryContainers,'.c-name', true, false, '.showcase')
//     } else{
//         byPop.lastElementChild.setAttribute('class', 'fa-solid fa-arrow-down-long');
//         sortBy(countryContainers,'.population', true, true, '.showcase');
//     };
// });

// const [footerBtn1,footerBtn2] = document.querySelectorAll('.f-btn');

// function footerBuilder(callback,arg) {
//     document.querySelector('.f-showcase').innerHTML = "";

//     let langs = callback(arg)
//     langs.forEach( arg => {
//         var row = document.createElement('div');
//             row.setAttribute('class', 'f-row grid');
//         const p1 = document.createElement('p');
//             p1.setAttribute('class', 'f-c-name');
//             p1.textContent = Object.keys(arg)[0];
//         const bar = document.createElement('div');
//             bar.setAttribute('class', 'f-bar bg-yellow');
//         const pop = document.createElement('p');
//             pop.setAttribute('class', 'f-numb');
//             pop.textContent = Object.values(arg)[0];
    
//         row.appendChild(p1);
//         row.appendChild(bar);
//         row.appendChild(pop);
    
//         document.querySelector('.f-showcase').appendChild(row);
//     } );
// };

// let click4 = 0;
// footerBtn1.addEventListener('click', (e) => {
//     click4 += 1
//     footerBuilder(topPops, countries)
//     const [...footerShowcase] = document.querySelectorAll('.f-row');

//     if (click4 % 2 !== 0 ) sortBy(footerShowcase, '.f-numb', false, false, '.f-showcase');
//     else sortBy(footerShowcase, '.f-numb', false, true, '.f-showcase');
// });

// let click5 = 0
// footerBtn2.addEventListener('click', (e) => {
//     click5 += 1;
//     footerBuilder(topLangs, countries)
//     const [...footerShowcase] = document.querySelectorAll('.f-row');

//     if (click5 % 2 !== 0 ) sortBy(footerShowcase, '.f-numb', false, false, '.f-showcase') 
//     else sortBy(footerShowcase, '.f-numb', false, true, '.f-showcase') 
// });

// document.querySelector('.country-length').textContent = Object.keys(countries).length;

// // A FEW SETTINGS FOR SEARCHING

// function searchByName (param) {
//     const [...names] = document.querySelectorAll('.c-name')
//     names.forEach( arg => {
//         param = param.toUpperCase();
//         let text = arg.textContent.toUpperCase();

//         if (text.includes(param)) arg.parentElement.style.display = "grid"
//         else arg.parentElement.style.display = "none";
//     });
// };
// byName.addEventListener('click', () => {
//     document.querySelector('input').addEventListener('input', (e) => {
//         searchByName(e.target.value);
//     });    
// });

// function searchByCapital (param) {
//     const [...capitals] = document.querySelectorAll('.capital')
//     capitals.forEach( arg => {
//         param = param.toUpperCase();
//         let text = arg.textContent.toUpperCase();

//         if (text.includes(param)) arg.parentElement.parentElement.style.display = "grid"
//         else arg.parentElement.parentElement.style.display = "none";
//     });
// };
// byCap.addEventListener('click', () => {
//     document.querySelector('input').addEventListener('input', (e) => {
//         searchByCapital(e.target.value);
//     });    
// });

// FINAL PROJECT 2

// const reNames = /^[A-Za-z][a-z]{2,16}$/
// const reEmail = /^\w+[.-_]*[@]{1}\w+[.]{1}[A-Za-z]{2,4}([.][A-Za-z]{2,3})?$/
// const rePassw = /^\w(\w|[-.+%!?@]){5,}$/
// const rePhone = /^\d{3}[-]?\d{3}([-]?\d{2}){2}$/
// const reJob = /^[a-z]{6,50}$/

// const [
//         firstname, 
//         lastname, 
//         email, 
//         password, 
//         phone,
//         job
//     ] = document.querySelectorAll('.input');        // All inputs except for btn
// const [
//         fnameInfo, 
//         lnameInfo, 
//         emailInfo, 
//         passwInfo, 
//         phoneInfo, 
//         jobInfo
//     ] = document.querySelectorAll('.info');         // infos for users

// function checkValue (input, output, regex, isEvent, content) {   
//     if (isEvent) {                      // Of course, i need to check values while user types when the page has load

//         input.addEventListener('input', e => {
//             if( regex.test(input.value)) {
//                 output.textContent = "";
//             } else{
//                 output.textContent = content;
//             };
//         });    

//     } else{
//         if( regex.test(input.value)) {
//             output.textContent = "";
//             return true
//         } else{
//             output.textContent = content;
//             return false
//         };
//     };
// };
// const fNameContent = "Firstname must be alphanumeric and contain 3-16 characters";
// const lNameContent = "Lastname must be alphanumeric and contain 3-16 characters";
// const emailContent = "Email must be valid e.g example@example.com or example@example.co.uk";
// const passwContent = "Password can contain (-.+%!?@) besides letter and digits on condition that it is between 6-20 \
// characters";
// const phoneContent = "A valid phone number must consist of 11 digits e.g 123-123-1234";
// const jobContent = "Job must be typed in lowercases on condition between 6-50";

// const call = [
//     checkValue(firstname, fnameInfo, reNames, true, fNameContent),
//     checkValue(lastname, lnameInfo, reNames, true, lNameContent),
//     checkValue(email, emailInfo, reEmail, true, emailContent),
//     checkValue(password, passwInfo, rePassw, true, passwContent),
//     checkValue(phone, phoneInfo, rePhone, true, phoneContent),
//     checkValue(job, jobInfo, reJob, true, jobContent)
// ];

// document.querySelector('#submit').addEventListener('click', (e) => {        // Lumpering with the submit button :/
//     const call_ = [
//         checkValue(firstname, fnameInfo, reNames, false, fNameContent),
//         checkValue(lastname, lnameInfo, reNames, false, lNameContent),
//         checkValue(email, emailInfo, reEmail, false, emailContent),
//         checkValue(password, passwInfo, rePassw, false, passwContent),
//         checkValue(phone, phoneInfo, rePhone, false, phoneContent),
//         checkValue(job, jobInfo, reJob, false, jobContent)
//         ];
//     if (call_.every(elem => elem === true)) document.querySelector('.result').innerHTML = "Success!";
//     else document.querySelector('.result').innerHTML = "";

//     e.preventDefault();
// });

// FINAL PROJECT 3 --> It's almost the same as the second one but i am gonna do something a little more different :))

// const reCards = {
//     AmericanExpress     : /^34|37(\d{2}[-]?)(\d{6}[-]?)(\d{5})$/,
//     Visa                : /^4(\d{3})([-]?\d{4}){3}$/,
//     MasterCard          : /^(5[1-5]\d{2}|222\d|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)([-]?\d{4}){3}$/,
//     Discover            : /^6(0|2|4|5)\d{2}([-]?\d{4}){3}(\d{1,3})?$/,
//     JCB                 : /^35[2-8]\d{1}([-]?\d{4}){3}(\d{2,3})?$/   // It can extend away downwards, i think they're enough
// };
// const reInputs = {
//     reName            : /^[a-z]{3,16}[ ]{1}[a-z]{3,16}$/i,
//     reDate            : /^(0[1-9]|1[0-2])[-/.]{1}([0-2][1-9]|3[0-1])[-./]{1}20\d{2}$/,
//     reCCV             : /^\d{3}$/
// };

// function getValues (input, output, regex, content, isEvent) {
//     if (isEvent) {
//         input.addEventListener('input', (e) => {
//             if ( (regex.test(e.target.value)) ) {
//                 output.textContent = ""

//             } else if ( (e.target.value.length === 0) && !regex.test(e.target.value)) {
//                 output.textContent = "";

//             } else {
//                 output.textContent = content
//             };
//         });
//     } else {
//         if (regex.test(input.value)) {
//             output.textContent = ""
//         } else {
//             output.textContent = content
//         }
//     };
// };
// const nameContent = "Invalid name or lastname";
// const dateContent = "Invalid date";
// const ccvContent = "Invalid CCV";

// const [firstLabel, ,thirdLabel, fourthLabel] = document.querySelectorAll('.input');
// const call = [
//     getValues(firstLabel, document.querySelector('.names-info'), reInputs.reName, nameContent, true),
//     getValues(thirdLabel, document.querySelector('.e-date-info'), reInputs.reDate, dateContent, true),
//     getValues(fourthLabel, document.querySelector('.ccv-info'), reInputs.reCCV, ccvContent, true)
// ];
// function checkCard (arg) {
//     let arr = [];
//     for (let key of Object.keys(reCards)) {
//         if (reCards[key].test(arg)) {
//             arr[0] = true
//             arr[1] = key
//         };
//     };
//     return arr;
// };

// document.querySelector('#c-card').addEventListener('input', (e) => {
//     const check = checkCard(e.target.value)
//     if ( check[0] && (check[0] !== undefined) ) {
//         document.querySelector('.validation-sign').classList.add('fa-check');
//         document.querySelector('.validation-sign').classList.remove('fa-x');
//         document.querySelector('.validation-sign').style.color = "rgba(0, 255, 0, 0.9)";
//         document.querySelector('.img').querySelector('img').src = `../images/cards/${check[1]}.svg`;
//         document.querySelector('.c-card-info').textContent = check[1].match(/[A-Z][a-z]+/gi).join(" ")
//         document.querySelector('.c-card-info').style.color = "";
//         document.querySelector('.c-card-info').style.opacity = "";
//         isValid = true;

//     } else {
//         document.querySelector('.img').firstElementChild.src = ""
//         if (e.target.value.length > 0) {
//             document.querySelector('.c-card-info').textContent = "Invalid card number"
//             document.querySelector('.validation-sign').classList.add('fa-x');    
//         } else{
//             document.querySelector('.c-card-info').textContent = ""
//             document.querySelector('.validation-sign').classList.remove('fa-x');    
//         }
//         document.querySelector('.validation-sign').classList.remove('fa-check');
//         document.querySelector('.validation-sign').style.color = "rgba(255, 0, 0, 0.9)";
//         document.querySelector('.c-card-info').style.color = "#da2c38";
//     }
// });

// document.querySelector('.submit-btn').addEventListener('click', (e) => {
//     const call = [
//         getValues(firstLabel, document.querySelector('.names-info'), reInputs.reName, nameContent, false),
//         getValues(thirdLabel, document.querySelector('.e-date-info'), reInputs.reDate, dateContent, false),
//         getValues(fourthLabel, document.querySelector('.ccv-info'), reInputs.reCCV, ccvContent, false),
//     ];
//     let isOK = call.every(elem => elem === true) && (checkCard()[0] === true);
//     if (isOK) {
//         document.querySelector('.result').textContent = "Success!"

//     } else {
//         call.forEach(arg => arg);
//         let ccValue = document.querySelector('#c-card').value;
//         document.querySelector('.c-card-info').textContent = "Invalid card number";
//         document.querySelector('.c-card-info').style.color = "#da2c38";
//     }
//     e.preventDefault();
    
// })