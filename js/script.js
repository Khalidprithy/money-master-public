document.getElementById('income-input').addEventListener('mouseleave', function () {
    const incomeInput = document.getElementById('income-input');
    const currentIncomeInput = incomeInput.value;
    const currentBalance = document.getElementById('new-balance');
    const updatedBalance = parseFloat(currentBalance.innerText) + parseFloat(currentIncomeInput);
    currentBalance.innerText = updatedBalance;
    incomeInput.value = ''
});

function getExpenseValues() {
    const rentInput = document.getElementById('rent-input');
    const rentInputText = rentInput.value;
    const rentInputAmount = parseFloat(rentInputText);
    rentInput.value = '';
    return rentInputAmount;
}

document.getElementById('calc-btn').addEventListener('click', function () {
    //income input
    /*  const rentInput = document.getElementById('rent-input');
     const rentInputText = rentInput.value;
     const rentInputAmount = parseFloat(rentInputText);
     console.log(rentInputAmount);
     rentInput.value = ''; */
    const rentInputAmount = getExpenseValues();
    //food input
    const foodInput = document.getElementById('food-input');
    const foodInputText = foodInput.value;
    const foodInputAmount = parseFloat(foodInputText);
    console.log(foodInputAmount);
    foodInput.value = '';
    //food input
    const othersInput = document.getElementById('others-input');
    const othersInputText = othersInput.value;
    const othersInputAmount = parseFloat(othersInputText);
    console.log(othersInputAmount);
    othersInput.value = '';

    // update total expense
    const totalExpanseOutput = document.getElementById('total-expense');

    const newTotalExpense = rentInputAmount + foodInputAmount + othersInputAmount;
    const currentTotalExpense = parseFloat(totalExpanseOutput.innerText) + parseFloat(newTotalExpense);
    totalExpanseOutput.innerText = currentTotalExpense;

    // update balance
    const currentBalance = document.getElementById('new-balance');
    const currentBalanceText = currentBalance.innerText;

    const updatedNewBalance = parseFloat(currentBalanceText) - parseFloat(currentTotalExpense);

    currentBalance.innerText = updatedNewBalance;

});

// saving amount

document.getElementById('saving-btn').addEventListener('click', function () {
    const savingInput = document.getElementById('saving-input');
    const savingInputText = savingInput.value;
    const savingAmountNumber = parseFloat(savingInputText);

    // balance 
    const incomeInput = document.getElementById('income-input');
    const currentIncomeInput = incomeInput.value;
    const currentBalance = document.getElementById('new-balance');
    const updatedBalance = parseFloat(currentBalance.innerText) + parseFloat(currentIncomeInput);
    console.log(updatedBalance);


    const savingAmount = (updatedBalance / 100) * savingAmountNumber;


    console.log(savingAmount);
})




function updateBalance() {

}

function updateTotalExpanse() {}




// document.getElementById('calc-btn').addEventListener('click', function () {
//     const incomeInput = document.getElementById('income-input').value;
//     const currentBalance = document.getElementById('new-balance');
//     currentBalance.innerText = incomeInput;
//     const rentInput = document.getElementById('rent-input').value;
//     const foodInput = document.getElementById('food-input').value;
//     const othersInput = document.getElementById('others-input').value;
//     const previousTotalExpanse = parseFloat(rentInput) + parseFloat(foodInput) + parseFloat(othersInput);
//     const updateTotalExpanse =
//         // console.log(totalExpanse);

//         totalExpanseOutput.innerText = totalExpanse;
//     console.log(totalExpanseOutput.innerText);
//     // update balance
//     const newBalance = incomeInput - totalExpanse;
//     const updateBalance = document.getElementById('new-balance');
//     updateBalance.innerText = newBalance;

//     // clear expense inputs

// });

// // saving calculation

// document.getElementById('saving-btn').addEventListener('click', function () {
//     const incomeInput = document.getElementById('income-input').value;
//     const savingPercentage = document.getElementById('saving-input').value;
//     const savingAmount = document.getElementById('saving-amount');
//     savingAmount.innerText = (incomeInput / 100) * savingPercentage;
//     savingPercentage.value = '';

//     // remaining balance

//     const remainingBalance = document.getElementById('remaining-balance');
//     remainingBalance.innerText = newBalance - savingAmount;
// })