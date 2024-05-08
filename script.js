// JavaScript for Budget Saving Tool

// Step 2: Add Expense
function addExpense() {
    const expensesList = document.getElementById('expensesList');
    const expenseItem = document.createElement('div');
    expenseItem.innerHTML = `
        <label for="expenseName">Expense Name:</label>
        <input type="text" name="expenseName">
        <label for="expenseAmount">Expense Amount (£):</label>
        <input type="number" name="expenseAmount">
    `;
    expensesList.appendChild(expenseItem);
}

// Step 2: Calculate Total Expenses
function calculateTotalExpenses() {
    const expenseInputs = document.querySelectorAll('#expensesList input[type="number"]');
    let totalExpenses = 0;
    expenseInputs.forEach(input => {
        totalExpenses += parseFloat(input.value) || 0;
    });
    alert(`Total Monthly Expenses: £${totalExpenses.toFixed(2)}`);
}

// Step 3: Calculate Total Savings
function calculateTotalSavings() {
    const emergencyFund = parseFloat(document.getElementById('emergencyFund').value) || 0;
    alert(`Total Savings Goal: £${emergencyFund.toFixed(2)}`);
}

// Step 4: Calculate Time to Save
function calculateSavingsTime() {
    const savingsTarget = parseFloat(document.getElementById('savingsTarget').value) || 0;
    const propertyCost = parseFloat(document.getElementById('propertyCost').value) || 0;
    const monthsToSave = propertyCost / savingsTarget;
    const yearsToSave = monthsToSave / 12;
    alert(`Months to Save for Dream Property: ${monthsToSave.toFixed(2)} months (${yearsToSave.toFixed(2)} years)`);
}

// Step 6: Fill Savings Bucket
function fillBucket() {
    const bucket = document.getElementById('bucket');
    const monthlySavings = parseFloat(document.getElementById('monthlySavings').value) || 0;
    let bucketFillPercentage = monthlySavings / 100;
    if (bucketFillPercentage > 1) {
        bucketFillPercentage = 1;
    }
    bucket.style.height = `${bucketFillPercentage * 100}%`;
    document.getElementById('bucketStatus').innerText = `Bucket filled: ${(bucketFillPercentage * 100).toFixed(2)}%`;
}

