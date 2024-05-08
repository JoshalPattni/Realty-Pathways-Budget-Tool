function calculateMonthlyIncome() {
    const annualIncome = parseFloat(document.getElementById('annualIncome').value);
    // Assuming tax rate calculation here
    const monthlyIncome = (annualIncome / 12).toFixed(2);
    document.getElementById('monthlyIncomeResult').innerText = `Estimated Monthly Income: £${monthlyIncome}`;
}

function addExpense() {
    const expenseInputs = document.getElementById('expenseInputs');
    const newExpenseInput = document.createElement('div');
    newExpenseInput.classList.add('expense-input');
    newExpenseInput.innerHTML = `
        <input type="text" placeholder="Expense Name">
        <input type="number" placeholder="Expense Amount (£)">
        <button onclick="removeExpense(this)">Remove</button>
    `;
    expenseInputs.appendChild(newExpenseInput);
}

function removeExpense(button) {
    button.parentElement.remove();
}

function calculateTotalExpenses() {
    const expenseAmounts = document.querySelectorAll('#expenseInputs input[type="number"]');
    let totalExpenses = 0;
    expenseAmounts.forEach(input => {
        totalExpenses += parseFloat(input.value);
    });
    alert(`Total Monthly Expenses: £${totalExpenses.toFixed(2)}`);
}

function calculateSavings() {
    const savingsPercentage = parseFloat(document.getElementById('savingsPercentage').value);
    const totalMonthlyIncome = parseFloat(document.getElementById('monthlyIncomeResult').innerText.split('£')[1]);
    const totalMonthlyExpenses = parseFloat(document.getElementById('totalExpenses').innerText.split('£')[1]);
    const totalSavings = (totalMonthlyIncome - totalMonthlyExpenses) * (savingsPercentage / 100);
    document.getElementById('totalSavingsResult').innerText = `Total Monthly Savings: £${totalSavings.toFixed(2)}`;
}

function calculateTimeToSave() {
    const monthlySavings = parseFloat(document.getElementById('monthlySavings').value);
    const propertyCost = parseFloat(document.getElementById('propertyCost').value);
    const timeToSave = propertyCost / monthlySavings;
    document.getElementById('timeToSaveResult').innerText = `Months to Save: ${timeToSave.toFixed(2)}`;
}

function calculateBucket() {
    // Calculate bucket progress here
    document.getElementById('bucketProgress').innerText = "Bucket progress calculated!";
}

