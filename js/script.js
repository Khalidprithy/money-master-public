function currentBalance() {
    const incomeInput = document.getElementById('income-input');
    const currentIncomeInput = incomeInput.value;
    return currentIncomeInput;
}

// getting expense function 

function getExpenseValues(inputId) {
    const expenseInput = document.getElementById(inputId);
    const expenseInputText = expenseInput.value;
    const expenseInputAmount = parseFloat(expenseInputText);
    expenseInput.value = '';
    return expenseInputAmount;

}

document.getElementById('income-input').addEventListener('blur', function () {
    const errorMessage1 = document.getElementById('wrong-input1');
    const errorMessage2 = document.getElementById('wrong-input2');
    //update balance
    const currentIncomeInput = currentBalance();
    if (isNaN(currentIncomeInput)) {
        errorMessage1.style.display = 'block';
    } else if (currentIncomeInput > 0) {
        const currentBalance = document.getElementById('new-balance');
        currentBalance.innerText = currentIncomeInput;
        // incomeInput.value = ''
        errorMessage2.style.display = 'none';
        errorMessage1.style.display = 'none';
    } else {
        errorMessage2.style.display = 'block';
        errorMessage1.style.display = 'none';
    }
});

document.getElementById('calc-btn').addEventListener('click', function () {
    //rent input
    const rentInputAmount = getExpenseValues('rent-input');

    //food input
    const foodInputAmount = getExpenseValues('food-input');

    //others input
    const othersInputAmount = getExpenseValues('others-input');

    const currentBalance = document.getElementById('new-balance');
    const currentBalanceText = currentBalance.innerText;

    // update total expense
    const errorMessage1 = document.getElementById('wrong-input1');
    const errorMessage3 = document.getElementById('wrong-input3');
    const totalExpanseOutput = document.getElementById('total-expense');
    const newTotalExpense = rentInputAmount + foodInputAmount + othersInputAmount;
    if (isNaN(newTotalExpense)) {
        errorMessage1.style.display = 'block';
    } else if (currentBalanceText > newTotalExpense) {
        const currentTotalExpense = parseFloat(totalExpanseOutput.innerText) + parseFloat(newTotalExpense);
        totalExpanseOutput.innerText = currentTotalExpense;
        // update balance
        const updatedNewBalance = parseFloat(currentBalanceText) - newTotalExpense;
        currentBalance.innerText = updatedNewBalance;
        errorMessage3.style.display = 'none';
    } else {
        errorMessage3.style.display = 'block';
    }

});

// saving amount

document.getElementById('saving-btn').addEventListener('click', function updateSaving() {
    const savingInput = document.getElementById('saving-input');
    const savingInputText = savingInput.value;
    const savingAmountNumber = parseFloat(savingInputText);

    const currentBalance = document.getElementById('new-balance');
    const currentBalanceText = currentBalance.innerText;

    const errorMessage3 = document.getElementById('wrong-input3');

    // balance 
    const incomeInput = document.getElementById('income-input');
    const currentIncomeInput = incomeInput.value;
    // saving calculation 
    const savingAmount = parseFloat((currentIncomeInput) / 100) * savingAmountNumber;
    if (currentBalanceText > savingAmount) {
        const savingAmountOutput = document.getElementById('saving-amount');
        savingAmountOutput.innerText = savingAmount;

        // updating currentBalance

        const remainingBalanceOutput = document.getElementById('remaining-balance');
        const remainingBalance = parseFloat(currentBalanceText) - parseFloat(savingAmount);
        remainingBalanceOutput.innerText = remainingBalance;
        errorMessage3.style.display = 'none';
    } else {
        errorMessage3.style.display = 'block';
    }

});