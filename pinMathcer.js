
function getPin() {
    const generateInputValue = Math.round(Math.random() * 10000);
    const pinString = generateInputValue + '';
    if (pinString.length == 4) {
        return generateInputValue;
    }
    else {
        return getPin();
    }
}

const generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', function () {
    const showPin = getPin();
    document.getElementById('generate-input').value = showPin;
});



const calAllButton = document.getElementById('cal-all-button');
calAllButton.addEventListener('click', function (event) {
    const calInput = document.getElementById('cal-input');
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number == 'C') {
            calInput.value = '';
        }
    } else {
        const previousCalValue = calInput.value;
        const newCalValue = previousCalValue + number;
        calInput.value = newCalValue;

    }

});

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function () {
    const generatePin = document.getElementById('generate-input').value;
    const calTypeNumbers = document.getElementById('cal-input').value;
    const pinMatch = document.getElementById('pin-match');
    const donotPinMatch = document.getElementById('pin-donot-match');
    if (generatePin == calTypeNumbers) {

        pinMatch.style.display = 'block';
        donotPinMatch.style.display = 'none';
        // console.log('matched');
    }
    else {

        donotPinMatch.style.display = 'block';
        pinMatch.style.display = 'none';
    }
});
