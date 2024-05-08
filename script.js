let expenses = []; // Array to store expenses

// Function to calculate monthly income
function calculateMonthlyIncome() {
    const annualIncome = parseFloat(document.getElementById('annualIncome').value);
    if (!isNaN(annualIncome)) {
        const monthlyIncome = annualIncome / 12;
        document.getElementById('monthlyIncomeResult').textContent = `Estimated Monthly Income: £${monthlyIncome.toFixed(2)}`;
    } else {
        alert('Please enter a valid annual income.');
    }
}

// Function to add a new expense input field
function addExpense() {
    const expensesDiv = document.getElementById('expenses');
    const newExpenseDiv = document.createElement('div');
    newExpenseDiv.classList.add('expense');
    newExpenseDiv.innerHTML = `
        <input type="text" class="expense-name" placeholder="Expense Name">
        <input type="number" class="expense-amount" placeholder="Expense Amount (£)">
        <button onclick="removeExpense(this)">Remove</button>
    `;
    expensesDiv.appendChild(newExpenseDiv);
}

// Function to remove an expense input field
function removeExpense(button) {
    const expenseDiv = button.parentElement;
    expenseDiv.remove();
}

// Function to calculate the total expenses
function calculateTotalExpenses() {
    const expenseAmounts = document.querySelectorAll('.expense-amount');
    let totalExpenses = 0;
    expenseAmounts.forEach(amountInput => {
        if (amountInput.value.trim() !== '') {
            totalExpenses += parseFloat(amountInput.value);
        }
    });
    document.getElementById('totalExpensesResult').textContent = `Total Monthly Expenses: £${totalExpenses.toFixed(2)}`;
}

// Function to calculate total savings
function calculateSavingsTarget() {
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncomeResult').textContent.match(/\d+\.\d+/)[0]);
    const totalExpenses = parseFloat(document.getElementById('totalExpensesResult').textContent.match(/\d+\.\d+/)[0]);
    const savingsPercentage = parseInt(document.getElementById('savingsPercentage').value);
    if (!isNaN(monthlyIncome) && !isNaN(totalExpenses) && !isNaN(savingsPercentage)) {
        const monthlySavings = (monthlyIncome - totalExpenses) * (savingsPercentage / 100);
        document.getElementById('monthlySavings').textContent = `£${monthlySavings.toFixed(2)}`;
        document.getElementById('savingsTargetResult').textContent = `Monthly Savings Target (£): £${monthlySavings.toFixed(2)}`;
    } else {
        alert('Please enter valid values.');
    }
}

// Function to calculate time required to save for deposit
function calculateSavingsTime() {
    const liveInProperty = document.getElementById('liveInProperty').value;
    const propertyCost = parseFloat(document.getElementById('propertyCost').value);
    const savingsTarget = parseFloat(document.getElementById('savingsTargetResult').textContent.match(/\d+\.\d+/)[0]);
    let depositPercentage = 0;
    if (liveInProperty === 'yes') {
        depositPercentage = 0.1; // 10% deposit for residential buyers
    } else if (liveInProperty === 'no') {
        const buyToLetDeposit = 0.2; // 20% deposit for buy-to-let investors
        depositPercentage = buyToLetDeposit;
    }
    const depositAmount = propertyCost * depositPercentage;
    const monthsToSave = Math.ceil(depositAmount / savingsTarget);
    document.getElementById('savingsTimeResult').textContent = `Months to Save for Deposit: ${monthsToSave}`;
}

// Function to fill the savings bucket
function fillBucket() {
    // Add code to fill the bucket based on user inputs
    // Display progress in percentage
}
