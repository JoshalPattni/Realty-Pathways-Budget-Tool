// JavaScript for Budget Saving Tool

// Step 1: Calculate Monthly Income
function calculateMonthlyIncome() {
    const annualIncome = parseFloat(document.getElementById('annualIncome').value) || 0;
    const monthlyIncome = annualIncome / 12;
    document.getElementById('monthlyIncome').innerText = `Monthly Income: £${monthlyIncome.toFixed(2)}`;

    // Show next step
    document.getElementById('step2').style.display = 'block';
}

// Step 2: Add Monthly Expenses
function addExpense() {
    const monthlyExpensesSection = document.getElementById('monthlyExpenses');
    const newExpenseInput = document.createElement('input');
    newExpenseInput.type = 'text';
    newExpenseInput.placeholder = 'Expense name';
    const newExpenseAmountInput = document.createElement('input');
    newExpenseAmountInput.type = 'number';
    newExpenseAmountInput.placeholder = 'Expense amount (£)';
    monthlyExpensesSection.appendChild(newExpenseInput);
    monthlyExpensesSection.appendChild(newExpenseAmountInput);
}

function calculateTotalExpenses() {
    const expenseInputs = document.querySelectorAll('#monthlyExpenses input[type="number"]');
    let totalExpenses = 0;
    expenseInputs.forEach(input => {
        totalExpenses += parseFloat(input.value) || 0;
    });
    document.getElementById('totalExpenses').innerText = `Total Monthly Expenses: £${totalExpenses.toFixed(2)}`;

    // Show next step
    document.getElementById('step3').style.display = 'block';
}

// Step 3: Calculate Savings Target
function calculateSavingsTarget() {
    const monthlySavingsTarget = parseFloat(document.getElementById('monthlySavingsTarget').value) || 0;
    document.getElementById('savingsTarget').innerText = `Monthly Savings Target: £${monthlySavingsTarget.toFixed(2)}`;

    // Show next step
    document.getElementById('step4').style.display = 'block';
}

// Step 4: Calculate Months to Save
function calculateMonthsToSave() {
    // Placeholder for Step 4 calculation
    const monthsToSave = 12; // Placeholder value
    document.getElementById('monthsToSave').innerText = `Months to Save: ${monthsToSave}`;

    // Show next step
    document.getElementById('step5').style.display = 'block';
}
