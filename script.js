document.getElementById('calculate').addEventListener('click', calculateBMI);
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') calculateBMI();
});

function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (weight > 0 && height > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        let category = getBMICategory(bmi);
        let quote = getBMIQuote(bmi);
        
        document.getElementById('bmi-value').innerHTML = `Your BMI: <strong>${bmi}</strong>`;
        document.getElementById('bmi-category').innerHTML = `Category: <strong>${category}</strong>`;
        document.getElementById('bmi-quote').innerHTML = `💡 ${quote}`;

        document.querySelector('.result').classList.add('show');
    } else {
        document.getElementById('bmi-value').innerHTML = "Please enter valid numbers!";
        document.getElementById('bmi-category').innerHTML = "";
        document.getElementById('bmi-quote').innerHTML = "";
        document.querySelector('.result').classList.add('show');
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return "Underweight 🟡";
    if (bmi < 24.9) return "Normal Weight ✅";
    if (bmi < 29.9) return "Overweight 🟠";
    return "Obese 🔴";
}

function getBMIQuote(bmi) {
    if (bmi < 18.5) return "Stay strong! A balanced diet and strength training can help you gain healthy weight. 💪";
    if (bmi < 24.9) return "Great job! Keep up your healthy lifestyle and stay active. 🌟";
    if (bmi < 29.9) return "A little effort goes a long way! Small steps towards a healthier diet and exercise will help. 🚀";
    return "Your health matters! Regular exercise and mindful eating can make a big difference. ❤️";
}
