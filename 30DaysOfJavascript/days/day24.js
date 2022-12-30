// MINI SOLAR PROJECT

/*console.time('process')

const gravityOfPlanets = {
    MERCURY : 0.38,
    VENUS   : 0.9,
    MOON    : 0.17,
    MARS    : 0.38,
    JUPITER : 2.53,
    SATURN  : 1.07,
    URANUS  : 0.89,
    NEPTUNE : 1.14,
    EARTH   : 9.81
};
const showcase = document.querySelector('.showcase');
const p = document.querySelector('.info');
const inputVal = document.querySelector('input');
const imgDiv = document.querySelector('.img');
    const newImg = document.createElement('img');
const newSpan = document.createElement('span');
    newSpan.setAttribute('class', 'planetUpper');
const displayNewton = document.querySelector('.newton');

document.body.onload = () => {
    imgDiv.firstElementChild.src = "../images/planets/earth.png";
}

inputVal.addEventListener('input', () => {
    if (isNaN(+inputVal.value)) {
        imgDiv.style.display = "none";
        p.parentElement.style.padding = "1rem";
        p.textContent = "*You must type it in number";

    } else {
        imgDiv.style.display = "flex";
        p.textContent = "";
        p.parentElement.style.padding = "0";
        showcase.style.display = "none";
    };
});

const button = document.querySelector('.btn');
button.addEventListener('click', (e) => {
    showcase.style.display = "flex";
    p.parentElement.style.padding = "1rem";

    const getPlanet = document.querySelector('select').value;
    imgDiv.firstElementChild.replaceWith(newImg);
    
    const inputVal = +document.querySelector('input').value
    if ( (getPlanet !== "default") && (!isNaN(inputVal) && inputVal > 0) ) {

        displayNewton.style.display = "flex";

        newImg.setAttribute('src', `../images/planets/${getPlanet}.png`);
        imgDiv.appendChild(newImg);

        p.textContent = 'The weight of the object on ';
        newSpan.textContent = getPlanet.toUpperCase();
        p.appendChild(newSpan);

        displayNewton.innerText = `${parseInt(gravityOfPlanets[getPlanet.toUpperCase()] * inputVal)} N`

    } else {
        imgDiv.style.display = "none";
        displayNewton.style.display = "none";
        p.textContent = "*You must type your weight in kilogram and select a planet"
    }
    e.preventDefault();
});
console.timeEnd('process');
*/
