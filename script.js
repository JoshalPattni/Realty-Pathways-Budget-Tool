// Step 1: Calculate Monthly Income
document.getElementById('calculateMonthlyIncome').addEventListener('click', calculateMonthlyIncome);

function calculateMonthlyIncome() {
    const annualIncome = parseFloat(document.getElementById('annualIncome').value);
    const monthlyIncome = annualIncome / 12;
    document.getElementById('monthlyIncomeResult').textContent = `Estimated Monthly Income: £${monthlyIncome.toFixed(2)}`;
}

// Step 2: Calculate Total Expenses
document.getElementById('calculateTotalExpenses').addEventListener('click', calculateTotalExpenses);
document.getElementById('addExpense').addEventListener('click', addExpense);

function addExpense() {
    const expenseName = document.getElementById('expenseName').value;
    const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);
    const expenseList = document.getElementById('expenses');

    const newRow = document.createElement('div');
    newRow.innerHTML = `
        <label>${expenseName}:</label>
        <span>£${expenseAmount.toFixed(2)}</span>
    `;
    expenseList.appendChild(newRow);
}

function calculateTotalExpenses() {
    const expenseElements = document.querySelectorAll('#expenses span');
    let totalExpenses = 0;
    expenseElements.forEach(element => {
        totalExpenses += parseFloat(element.textContent.replace('£', ''));
    });
    document.getElementById('totalExpensesResult').textContent = `Total Monthly Expenses: £${totalExpenses.toFixed(2)}`;
}

// Step 3: Calculate Total Savings
document.getElementById('calculateSavings').addEventListener('click', calculateTotalSavings);

function calculateTotalSavings() {
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncomeResult').textContent.replace('Estimated Monthly Income: £', ''));
    const totalExpenses = parseFloat(document.getElementById('totalExpensesResult').textContent.replace('Total Monthly Expenses: £', ''));
    const savingsPercentage = parseFloat(document.getElementById('savingsPercentage').value);

    const leftover = monthlyIncome - totalExpenses;
    document.getElementById('leftoverResult').textContent = `What You're Left With: £${leftover.toFixed(2)}`;

    const totalSavings = (leftover * savingsPercentage) / 100;
    document.getElementById('totalSavingsResult').textContent = `You Can Put Away Up to £${totalSavings.toFixed(2)} in Savings`;
}

// Step 4: Calculate Time to Save
document.getElementById('calculateTimeToSave').addEventListener('click', calculateTimeToSave);

function calculateTimeToSave() {
    const monthlySavingsTarget = parseFloat(document.getElementById('monthlySavingsTarget').value);
    const propertyCost = parseFloat(document.getElementById('propertyCost').value);

    const residentialDeposit = propertyCost * 0.1;
    const buyToLetDeposit = propertyCost * 0.2;

    // Assuming the user is buying the property to live in, so we calculate based on residential deposit
    const monthsToSave = residentialDeposit / monthlySavingsTarget;
    document.getElementById('timeToSaveResult').textContent = `Months to Save for Residential Deposit: ${monthsToSave.toFixed(2)}`;
}

// Step 5: Savings Budget Tool
document.getElementById('calculateBucket').addEventListener('click', calculateBucket);

function calculateBucket() {
    const savingsTable = document.getElementById('savingsTable');
    const totalSavings = parseFloat(document.getElementById('totalSavingsResult').textContent.replace('You Can Put Away Up to £', ''));
    const bucketStatus = document.getElementById('bucketStatus');

    // Calculate total saved
    let totalSaved = 0;
    for (let i = 1; i <= 12; i++) {
        const savedAmount = parseFloat(prompt(`Enter amount saved for Month ${i}:`));
        totalSaved += savedAmount;

        // Update savings table
        const row = savingsTable.insertRow(-1);
        row.insertCell(0).textContent = `Month ${i}`;
        row.insertCell(1).textContent = `£${savedAmount.toFixed(2)}`;
    }

    // Calculate bucket filled percentage
    const filledPercentage = (totalSaved / totalSavings) * 100;
    bucketStatus.textContent = `Bucket filled: ${filledPercentage.toFixed(2)}%`;
}

