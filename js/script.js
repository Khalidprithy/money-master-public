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

document.getElementById('income-input').addEventListener('mouseleave', function () {
    //update balance
    const currentIncomeInput = currentBalance();
    if (currentIncomeInput > 0) {
        const currentBalance = document.getElementById('new-balance');
        currentBalance.innerText = currentIncomeInput;
        // incomeInput.value = ''

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
    const totalExpanseOutput = document.getElementById('total-expense');
    const newTotalExpense = rentInputAmount + foodInputAmount + othersInputAmount;
    if (currentBalanceText > newTotalExpense) {
        const currentTotalExpense = parseFloat(totalExpanseOutput.innerText) + parseFloat(newTotalExpense);
        totalExpanseOutput.innerText = currentTotalExpense;
        // update balance

        const updatedNewBalance = parseFloat(currentBalanceText) - newTotalExpense;

        currentBalance.innerText = updatedNewBalance;
    }

});

// saving amount

document.getElementById('saving-btn').addEventListener('click', function updateSaving() {
    const savingInput = document.getElementById('saving-input');
    const savingInputText = savingInput.value;
    const savingAmountNumber = parseFloat(savingInputText);

    const currentBalance = document.getElementById('new-balance');
    const currentBalanceText = currentBalance.innerText;

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
    }

});