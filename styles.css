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

    const totalMonthlyIncome = parseFloat(document.getElementById('totalMonthlyIncome').value);
    const propertyCost = parseFloat(document.getElementById('propertyCost').value);
    const savingsTarget = parseFloat(document.getElementById('savingsTarget').value);
    const monthsToSave = parseFloat(document.getElementById('monthsToSave').value);

    // Calculate remaining funds after expenses
    const remainingFunds = totalMonthlyIncome - totalMonthlyExpenses;

    // Calculate required monthly savings
    let monthlySavingsNeeded = 0;
    let monthsNeeded = 0;
    if (!isNaN(propertyCost) && !isNaN(monthsToSave)) {
        monthlySavingsNeeded = (propertyCost / monthsToSave).toFixed(2);
        monthsNeeded = Math.ceil(propertyCost / remainingFunds);
    }

    // Display results
    const output = document.getElementById('output');
    output.innerHTML = `
        <h2>Calculated Results</h2>
        <p>Total Monthly Income: £${totalMonthlyIncome.toFixed(2)}</p>
        <p>Total Monthly Expenses: £${totalMonthlyExpenses.toFixed(2)}</p>
        <p>Remaining Funds: £${remainingFunds.toFixed(2)}</p>
        <p>Monthly Savings Needed for Property: £${monthlySavingsNeeded}</p>
        <p>Months to Save for Dream Property: ${monthsNeeded}</p>
    `;

    // Generate tips based on user inputs
    const summary = document.getElementById('summary');
    summary.style.display = 'block';
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
