function addExpense() {
    const expensesDiv = document.getElementById('expenses');
    const newExpenseDiv = document.createElement('div');
    newExpenseDiv.classList.add('expense');
    newExpenseDiv.innerHTML = `
        <input type="text" class="expense-description" placeholder="Expense description">
        <input type="number" class="expense-amount" placeholder="Amount">
    `;
    expensesDiv.appendChild(newExpenseDiv);
}

function calculateResults() {
    // Get user inputs and perform calculations
    const expenses = document.querySelectorAll('.expense');
    let totalMonthlyExpenses = 0;
    expenses.forEach(expense => {
        const amount = parseFloat(expense.querySelector('.expense-amount').value);
        if (!isNaN(amount)) {
            totalMonthlyExpenses += amount;
        }
    });

    const savingsTarget = parseFloat(document.getElementById('savingsTarget').value);
    const propertyCost = parseFloat(document.getElementById('propertyCost').value);
    const monthsToSave = parseFloat(document.getElementById('monthsToSave').value);

    // Calculate required monthly savings
    let monthlySavingsNeeded = 0;
    if (!isNaN(propertyCost) && !isNaN(monthsToSave)) {
        monthlySavingsNeeded = (propertyCost / monthsToSave).toFixed(2);
    }

    // Display results
    const output = document.getElementById('output');
    output.innerHTML = `
        <h2>Calculated Results</h2>
        <p>Total Monthly Expenses: £${totalMonthlyExpenses.toFixed(2)}</p>
        <p>Monthly Savings Needed for Property: £${monthlySavingsNeeded}</p>
    `;

    // Generate tips based on user inputs
    const tips = document.getElementById('tips');
    tips.innerHTML = '';
    if (totalMonthlyExpenses > savingsTarget) {
        const tip1 = document.createElement('li');
        tip1.textContent = 'Consider reducing discretionary spending on non-essential items.';
        tips.appendChild(tip1);
    }
    if (monthlySavingsNeeded < savingsTarget) {
        const tip2 = document.createElement('li');
        tip2.textContent = 'Increase your monthly savings target to achieve your property goal faster.';
        tips.appendChild(tip2);
    }
}
