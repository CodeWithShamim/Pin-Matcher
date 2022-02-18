// generate pin using function 
function getPin() {
    const randomNumber = Math.round(Math.random() * 10000);
    pin = randomNumber + '';
    if (pin.length == 4) {
        return pin
    } else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin()
    document.getElementById('generate-field').value = pin;

}

// calculator calculate
document.getElementById('calculate-parent').addEventListener('click', function(event) {
    const captureValue = event.target.innerText;
    const calculateField = document.getElementById('calculate-field');
    if (isNaN(captureValue)) {
        if (captureValue == "C") {
            calculateField.value = "";
        }
    } else {
        calculateField.value = calculateField.value + captureValue;
    }

})

// generate matching result
document.getElementById('match-btn').addEventListener('click', function() {
    // notify item
    const wrongNotify = document.getElementById('wrong-notify');
    const correctNotify = document.getElementById('correct-notify');
    // generateField value 
    const generateField = document.getElementById('generate-field');
    generateFieldValue = generateField.value;
    // calculate value
    const calculateField = document.getElementById('calculate-field');
    calculateFieldValue = calculateField.value;
    // condition
    if (generateFieldValue == calculateFieldValue) {
        correctNotify.style.display = 'block';
        wrongNotify.style.display = 'none';
    } else {
        wrongNotify.style.display = 'block';
        correctNotify.style.display = 'none';
    }

    // remove field value 
    generateField.value = '';
    calculateField.value = '';



})