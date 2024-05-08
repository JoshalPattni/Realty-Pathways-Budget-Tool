function addExpense() {
    const expensesDiv = document.getElementById('expenses');
    const newExpense = document.createElement('div');
    newExpense.classList.add('expense');
    newExpense.innerHTML = `
        <input type="text" placeholder="Expense" class="expense-name">
        <input type="number" placeholder="Amount (£)" step="0.01" class="expense-amount">
    `;
    expensesDiv.appendChild(newExpense);
}

function calculateTotalExpenses() {
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
    if (totalMonthlyExpenses > totalMonthlyIncome) {
        const tip = document.createElement('p');
        tip.textContent = 'Your expenses exceed your income. Consider cutting back on non-essential expenses.';
        tips.appendChild(tip);
    } else {
        const tip = document.createElement('p');
        tip.textContent = 'You have a surplus in your budget. Consider allocating more towards savings or investments.';
        tips.appendChild(tip);
    }
    const chart = document.getElementById('chart');
    chart.style.display = 'block';
}

function calculateMonthsToSave() {
    const monthlySavingsTarget = parseFloat(document.getElementById('monthlySavingsTarget').value);
    const propertyCost = parseFloat(document.getElementById('propertyCost').value);
    const monthsToSave = propertyCost / monthlySavingsTarget;

    const calculatedResults = document.getElementById('calculatedResults');
    calculatedResults.innerHTML = `
        <h2>Calculated Results</h2>
        <p>Monthly Savings Needed for Property: £${monthlySavingsTarget.toFixed(2)}</p>
        <p>Months to Save for Dream Property: ${monthsToSave.toFixed(2)}</p>
    `;

    const solution = document.getElementById('solution');
    solution.style.display = 'block';
    const bucketContainer = document.getElementById('bucketContainer');
    bucketContainer.style.display = 'block';

    // Calculate remaining months
    let remainingMonths = Math.floor(monthsToSave);
    let remainingYears = Math.floor(remainingMonths / 12);
    remainingMonths = remainingMonths % 12;

    // Display results
    const monthsString = remainingMonths === 1 ? 'month' : 'months';
    const yearsString = remainingYears === 1 ? 'year' : 'years';
    const monthsToSaveOutput = document.createElement('p');
    monthsToSaveOutput.textContent = `You need to save for ${remainingYears} ${yearsString} and ${remainingMonths} ${monthsString}`;
    output.appendChild(monthsToSaveOutput);

    const savingsBucket = document.getElementById('savingsBucket');
    savingsBucket.style.display = 'block';
    const bucket = document.getElementById('bucket');
    const water = document.getElementById('water');
    const bucketStatus = document.getElementById('bucketStatus');
    const bucketCapacity = 400; // Height of the bucket container in pixels
    const savingsIncrement = remainingFunds / 2; // Half of the remaining funds

    let currentHeight = 0;
    let monthsToFillBucket = 0;

    const fillBucketInterval = setInterval(() => {
        currentHeight += savingsIncrement / 100; // Incrementally fill the bucket
        water.style.height = `${currentHeight}px`;

        if (currentHeight >= bucketCapacity) {
            clearInterval(fillBucketInterval);
            bucketStatus.textContent = 'Congratulations! Your savings bucket is full!';
        }

        monthsToFillBucket++;
    }, 500); // Adjust the interval time as needed
}
