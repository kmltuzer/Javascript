const reCards = {
    AmericanExpress     : /^34|37(\d{2}[-]?)(\d{6}[-]?)(\d{5})$/,
    Visa                : /^4(\d{3})([-]?\d{4}){3}$/,
    MasterCard          : /^(5[1-5]\d{2}|222\d|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)([-]?\d{4}){3}$/,
    Discover            : /^6(0|2|4|5)\d{2}([-]?\d{4}){3}(\d{1,3})?$/,
    JCB                 : /^35[2-8]\d{1}([-]?\d{4}){3}(\d{2,3})?$/   // It can extend away downwards, i think they're enough
};
const reInputs = {
    reName            : /^[a-z]{3,16}[ ]{1}[a-z]{3,16}$/i,
    reDate            : /^(0[1-9]|1[0-2])[-/.]{1}([0-2][1-9]|3[0-1])[-./]{1}20\d{2}$/,
    reCCV             : /^\d{3}$/
};

function getValues (input, output, regex, content, isEvent) {
    if (isEvent) {
        input.addEventListener('input', (e) => {
            if ( (regex.test(e.target.value)) ) {
                output.textContent = ""

            } else if ( (e.target.value.length === 0) && !regex.test(e.target.value)) {
                output.textContent = "";

            } else {
                output.textContent = content
            };
        });
    } else {
        if (regex.test(input.value)) {
            output.textContent = ""
        } else {
            output.textContent = content
        }
    };
};
const nameContent = "Invalid name or lastname";
const dateContent = "Invalid date";
const ccvContent = "Invalid CCV";

const [firstLabel, ,thirdLabel, fourthLabel] = document.querySelectorAll('.input');
const call = [
    getValues(firstLabel, document.querySelector('.names-info'), reInputs.reName, nameContent, true),
    getValues(thirdLabel, document.querySelector('.e-date-info'), reInputs.reDate, dateContent, true),
    getValues(fourthLabel, document.querySelector('.ccv-info'), reInputs.reCCV, ccvContent, true)
];
function checkCard (arg) {
    let arr = [];
    for (let key of Object.keys(reCards)) {
        if (reCards[key].test(arg)) {
            arr[0] = true
            arr[1] = key
        };
    };
    return arr;
};

document.querySelector('#c-card').addEventListener('input', (e) => {
    const check = checkCard(e.target.value)
    if ( check[0] && (check[0] !== undefined) ) {
        document.querySelector('.validation-sign').classList.add('fa-check');
        document.querySelector('.validation-sign').classList.remove('fa-x');
        document.querySelector('.validation-sign').style.color = "rgba(0, 255, 0, 0.9)";
        document.querySelector('.img').querySelector('img').src = `./cards/${check[1]}.svg`;
        document.querySelector('.c-card-info').textContent = check[1].match(/[A-Z][a-z]+/gi).join(" ")
        document.querySelector('.c-card-info').style.color = "";
        document.querySelector('.c-card-info').style.opacity = "";
        isValid = true;

    } else {
        document.querySelector('.img').firstElementChild.src = ""
        if (e.target.value.length > 0) {
            document.querySelector('.c-card-info').textContent = "Invalid card number"
            document.querySelector('.validation-sign').classList.add('fa-x');    
        } else{
            document.querySelector('.c-card-info').textContent = ""
            document.querySelector('.validation-sign').classList.remove('fa-x');    
        }
        document.querySelector('.validation-sign').classList.remove('fa-check');
        document.querySelector('.validation-sign').style.color = "rgba(255, 0, 0, 0.9)";
        document.querySelector('.c-card-info').style.color = "#da2c38";
    }
});

document.querySelector('.submit-btn').addEventListener('click', (e) => {
    const call = [
        getValues(firstLabel, document.querySelector('.names-info'), reInputs.reName, nameContent, false),
        getValues(thirdLabel, document.querySelector('.e-date-info'), reInputs.reDate, dateContent, false),
        getValues(fourthLabel, document.querySelector('.ccv-info'), reInputs.reCCV, ccvContent, false),
    ];
    let isOK = call.every(elem => elem === true) && (checkCard()[0] === true);
    if (isOK) {
        document.querySelector('.result').textContent = "Success!"

    } else {
        call.forEach(arg => arg);
        let ccValue = document.querySelector('#c-card').value;
        document.querySelector('.c-card-info').textContent = "Invalid card number";
        document.querySelector('.c-card-info').style.color = "#da2c38";
    }
    e.preventDefault();
})