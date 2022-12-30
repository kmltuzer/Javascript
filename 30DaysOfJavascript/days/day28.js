// function sendWeddingInvitation() {
//     const ms = Math.random() * 3000 + 2000;
//     return new Promise(resolve => setTimeout(resolve, ms));
// };

//  function main () {
//     const diets =  sendWeddingInvitation();
//     console.log(diets);
// };

// main();

/*import {capitalize, isEmpty} from "../modules/modules.js";


function elemBuilder (name, lastname, country_, score_) {
    const rowGrid         = document.createElement('section');
    rowGrid.setAttribute('class', "user-sec grid");
    const textDiv         = document.createElement('div');
    textDiv.setAttribute('class', 'text flex-col');
    const h3              = document.createElement('h3');
    h3.textContent        = name + " " + lastname;
    const p               = document.createElement('p');
    p.textContent         = "2020/05/14";
    textDiv.appendChild(h3);
    textDiv.appendChild(p);
    rowGrid.appendChild(textDiv);

    const country         = document.createElement('h3');
    country.textContent   = country_;
    country.setAttribute('class', 'country');
    rowGrid.appendChild(country);

    const score           = document.createElement('h3');
    score.textContent     = score_
    score.setAttribute('class', 'score');
    rowGrid.appendChild(score);

    const circleContainer       = document.createElement('div');
    circleContainer.setAttribute('class', 'circles flex');
    const circleDelBtn          = document.createElement('button');
    circleDelBtn.innerHTML      = '<i class="fa-solid fa-trash"></i>'; 
    const circleRmFiveBtn       = document.createElement('button');
    circleRmFiveBtn.textContent = "-5"; 
    const circleAddFiveBtn      = document.createElement('button');
    circleAddFiveBtn.textContent = "+5"; 
    circleDelBtn.setAttribute('class', 'circle del flex');
    circleRmFiveBtn.setAttribute('class', 'circle rm-five flex');
    circleAddFiveBtn.setAttribute('class', 'circle add-five flex');
    circleContainer.appendChild(circleDelBtn);
    circleContainer.appendChild(circleRmFiveBtn);
    circleContainer.appendChild(circleAddFiveBtn);
    rowGrid.appendChild(circleContainer);

    document.querySelector('main').appendChild(rowGrid);

    return document.querySelector('main').querySelectorAll('.user-sec');
};
function idSetter () {
    const getSections = document.querySelector('main').querySelectorAll('.user-sec');
    getSections.forEach( (elem, index) => elem.setAttribute('id', index));
    return getSections;
};

function inputChecker (firstn, lastn, country, score) {
    if ( isEmpty(firstn) || isEmpty(lastn) || isEmpty(country) || isEmpty(score) ) {
        const err = document.createElement('p');
        err.setAttribute('id', 'error');
        err.textContent = "*All fields are required";
        document.querySelector('.error').appendChild(err);
        document.querySelector('#error').replaceWith(err);
        return false;

    } else {
        document.querySelector('.error').innerHTML = "";
        return true;
    };
};

function modify(firstname, lastname, country) {

    firstname = capitalize(firstname);
    lastname = capitalize(lastname);
    country = capitalize(country);

    return [firstname, lastname, country]

};

function mainChecker () {
        if (document.querySelector('main').innerHTML.length > 0) {
            return true
        }
        else {
            return false
        }
};
function sectionControl(elems) {
    try {
        elems.forEach( (elem, index) => {
            elem.querySelector('.del').addEventListener('click', (e) => {
                elem.querySelector('.del').parentNode.parentNode.remove();
            });
            elem.querySelector('.rm-five').addEventListener('click', (e) => {
                    let scoreDown = +document.querySelector('.score').textContent - 5;
                    document.querySelector('.score').textContent  = scoreDown;   
            });
            elem.querySelector('.add-five').addEventListener('click', (e) => {
                    let scoreUp = +document.querySelector('.score').textContent + 5;
                    document.querySelector('.score').textContent = scoreUp;
            });
        } );

    } catch (err) {
        console.error(err)
    }    
    
};

function caller () {

    const inputs = document.querySelectorAll('input');
    console.log(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value)

    const inputCheck = inputChecker(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
    const modify_   = inputCheck ? modify(inputs[0].value, inputs[1].value, inputs[2].value) : false;
    const buildElem = modify_ ? elemBuilder(modify_[0], modify_[1], modify_[2], inputs[3].value) : false;
    const mainCh    = buildElem ? mainChecker()  : false;
    const setId     = mainCh ? idSetter() : false;
    const ctrl      = setId ? sectionControl(setId) : false;
    console.log(document.querySelectorAll('.user-sec').length);
    
}
document.querySelector('.btn').addEventListener('click', (e) => {
    caller();
    e.preventDefault();
});
*/

