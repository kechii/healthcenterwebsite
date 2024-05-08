// script.js
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
    const bmi = weight / (height * height);
    const result = document.getElementById('bmi-result');

    if (isNaN(bmi)) {
        result.textContent = 'Please enter valid values for weight and height.';
    } else {
        let status = '';

        if (bmi < 18.5) {
            status = 'underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            status = 'normal weight';
        } else if (bmi >= 25 && bmi < 30) {
            status = 'overweight';
        } else {
            status = 'obese';
        }

        result.textContent = `Your BMI is ${bmi.toFixed(2)}. You are ${status}.`;
    }
}