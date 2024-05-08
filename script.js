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
    if (totalMonthlyExpenses > totalMonthlyIncome / 2) {
        const tip1 = document.createElement('p');
        tip1.textContent = 'Consider reducing discretionary spending on non-essential items.';
        tips.appendChild(tip1);
    }
    if (remainingFunds < totalMonthlyIncome / 4) {
        const tip2 = document.createElement('p');
        tip2.textContent = 'Look for additional income sources or consider reducing fixed expenses.';
        tips.appendChild(tip2);
    }

    const pieChartCanvas = document.getElementById('pieChart');
    const pieChartData = {
        labels: ['Total Monthly Expenses', 'Remaining Funds'],
        datasets: [{
            label: 'Budget Overview',
            data: [totalMonthlyExpenses, remainingFunds],
            backgroundColor: ['#ff6384', '#36a2eb']
        }]
    };
    const pieChartOptions = {
        title: {
            display: true,
            text: 'Budget Overview'
        }
    };
    new Chart(pieChartCanvas, {
        type: 'pie',
        data: pieChartData,
        options: pieChartOptions
    });

    const monthsToSave = remainingFunds / monthlySavings;
    const yearsToSave = Math.floor(monthsToSave / 12);
    const remainingMonths = Math.round(monthsToSave % 12);
    const monthsString = yearsToSave > 0 ? `${yearsToSave} years and ${remainingMonths} months` : `${remainingMonths} months`;

    const monthsToSaveOutput = document.createElement('p');
    monthsToSaveOutput.textContent = `Months to Save for Dream Property: ${monthsString}`;
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
