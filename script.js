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
    const expenses = document.querySelectorAll('.expense');
    let totalMonthlyExpenses = 0;
    expenses.forEach(expense => {
        const amount = parseFloat(expense.querySelector('.expense-amount').value);
        if (!isNaN(amount)) {
            totalMonthlyExpenses += amount;
        }
    });

    const totalMonthlyIncome = parseFloat(document.getElementById('totalMonthlyIncome').value);
    const remainingFunds = totalMonthlyIncome - totalMonthlyExpenses;

    const output = document.getElementById('output');
    output.innerHTML = `
        <h2>Calculated Results</h2>
        <p>Total Monthly Income: £${totalMonthlyIncome.toFixed(2)}</p>
        <p>Total Monthly Expenses: £${totalMonthlyExpenses.toFixed(2)}</p>
        <p>Remaining Funds: £${remainingFunds.toFixed(2)}</p>
    `;

    const summary = document.getElementById('summary');
    summary.style.display = 'block';
    const tips = document.getElementById('tips');
    tips.innerHTML = '';
    if (totalMonthlyExpenses > totalMonthlyIncome / 2) {
        const tip1 = document.createElement('li');
        tip1.textContent = 'Consider reducing discretionary spending on non-essential items.';
        tips.appendChild(tip1);
    }
    if (remainingFunds < totalMonthlyIncome / 4) {
        const tip2 = document.createElement('li');
        tip2.textContent = 'Look for additional income sources or consider reducing fixed expenses.';
        tips.appendChild(tip2);
    }
}

function calculateMonthsToSave() {
    const monthlySavings = parseFloat(document.getElementById('monthlySavings').value);
    const propertyCost = parseFloat(document.getElementById('propertyCost').value);
    const monthsToSave = propertyCost / monthlySavings;

    const output = document.getElementById('output');
    output.innerHTML = `
        <h2>Calculated Results</h2>
        <p>Monthly Savings Needed for Property: £${monthlySavings.toFixed(2)}</p>
        <p>Months to Save for Dream Property: ${monthsToSave.toFixed(2)}</p>
    `;
}
