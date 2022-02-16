document.getElementById('calc-btn').addEventListener('click', function () {
    const incomeInput = document.getElementById('income-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const foodInput = document.getElementById('food-input').value;
    const othersInput = document.getElementById('others-input').value;
    const totalExpanse = parseFloat(rentInput) + parseFloat(foodInput) + parseFloat(othersInput);
    console.log(totalExpanse);
});