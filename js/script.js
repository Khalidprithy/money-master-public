document.getElementById('income-input').addEventListener('mouseleave', function () {
    const incomeInput = document.getElementById('income-input');
    const currentIncomeInput = incomeInput.value;
    if (currentIncomeInput > 0) {
        const currentBalance = document.getElementById('new-balance');
        currentBalance.innerText = currentIncomeInput;
        // incomeInput.value = ''
    }

});

// getting expense function 

function getExpenseValues(inputId) {
    const expenseInput = document.getElementById(inputId);
    const expenseInputText = expenseInput.value;
    const expenseInputAmount = parseFloat(expenseInputText);
    expenseInput.value = '';
    return expenseInputAmount;
}


document.getElementById('calc-btn').addEventListener('click', function () {
    //rent input
    const rentInputAmount = getExpenseValues('rent-input');

    //food input
    const foodInputAmount = getExpenseValues('food-input');

    //others input
    const othersInputAmount = getExpenseValues('others-input');

    // update total expense
    const totalExpanseOutput = document.getElementById('total-expense');

    const newTotalExpense = rentInputAmount + foodInputAmount + othersInputAmount;
    const currentTotalExpense = parseFloat(totalExpanseOutput.innerText) + parseFloat(newTotalExpense);
    totalExpanseOutput.innerText = currentTotalExpense;

    // update balance
    const currentBalance = document.getElementById('new-balance');
    const currentBalanceText = currentBalance.innerText;
    // const currentBalanceText = updateBalance();
    console.log(currentTotalExpense);

    const updatedNewBalance = parseFloat(currentBalanceText) - newTotalExpense;

    currentBalance.innerText = updatedNewBalance;

});

// saving amount

document.getElementById('saving-btn').addEventListener('click', function updateSaving() {
    const savingInput = document.getElementById('saving-input');
    const savingInputText = savingInput.value;
    const savingAmountNumber = parseFloat(savingInputText);

    // balance 
    const incomeInput = document.getElementById('income-input');
    const currentIncomeInput = incomeInput.value
    // saving calculation 
    const savingAmount = parseFloat((currentIncomeInput) / 100) * savingAmountNumber;
    const savingAmountOutput = document.getElementById('saving-amount');
    savingAmountOutput.innerText = savingAmount;

    // updating currentBalance
    const currentBalance = document.getElementById('new-balance');
    const currentBalanceText = currentBalance.innerText;
    const remainingBalanceOutput = document.getElementById('remaining-balance');
    const remainingBalance = parseFloat(currentBalanceText) - parseFloat(savingAmount);
    remainingBalanceOutput.innerText = remainingBalance;
});