function calculateMonthlyIncome() {
    const annualIncome = parseFloat(document.getElementById('annualIncome').value);
    const taxBands = [
        { threshold: 12571, rate: 0 },
        { threshold: 50000, rate: 20 },
        { threshold: 150000, rate: 40 },
        { threshold: Number.POSITIVE_INFINITY, rate: 45 }
    ];

    let tax = 0;
    for (let band of taxBands) {
        if (annualIncome > band.threshold) {
            tax += (annualIncome - band.threshold) * (band.rate / 100);
            annualIncome = band.threshold;
        }
    }

    const monthlyIncome = ((annualIncome - tax) / 12).toFixed(2);
    document.getElementById('monthlyIncomeResult').innerHTML = `Estimated Monthly Income: £${monthlyIncome}`;
}

function addExpense() {
    const expenseName = document.getElementById('expenseName1').value;
    const expenseAmount = parseFloat(document.getElementById('expenseAmount1').value);
    const totalExpenses = parseFloat(document.getElementById('totalExpensesResult').textContent) || 0;
    document.getElementById('totalExpensesResult').textContent = (totalExpenses + expenseAmount).toFixed(2);
}

function calculateTotalExpenses() {
    const totalExpenses = parseFloat(document.getElementById('totalExpensesResult').textContent) || 0;
    document.getElementById('totalExpensesResult').textContent = `Total Monthly Expenses: £${totalExpenses.toFixed(2)}`;
}

function calculateSavings() {
    const totalIncome = parseFloat(document.getElementById('monthlyIncomeResult').textContent.split("£")[1]);
    const totalExpenses = parseFloat(document.getElementById('totalExpensesResult').textContent.split("£")[1]);
    const savingsPercentage = parseFloat(document.getElementById('savingsPercentage').value) / 100;

    const leftOverAmount = totalIncome - totalExpenses;
    const totalSavings = (leftOverAmount * savingsPercentage).toFixed(2);

    document.getElementById('totalSavingsResult').textContent = `You can put away up to £${totalSavings} in savings in Step 4`;
}

function calculateTimeToSave() {
    const monthlySavingsTarget = parseFloat(document.getElementById('monthlySavingsTarget').value);
    const propertyCost = parseFloat(document.getElementById('propertyCost').value);
    const depositType = document.querySelector('input[name="depositType"]:checked').value;
    const depositPercentage = parseFloat(depositType) / 100;

    const monthsToSave = Math.ceil(propertyCost * depositPercentage / monthlySavingsTarget);
    document.getElementById('timeToSaveResult').textContent = `Months to Save for Deposit: ${monthsToSave}`;
}

function calculateBucketFill() {
    const savingsTable = document.getElementById('savingsTable');
    const monthsToSave = parseInt(document.getElementById('timeToSaveResult').textContent.split(": ")[1]);
    const bucketFillResult = document.getElementById('bucketFillResult');

    const savingsPerMonth = parseFloat(document.getElementById('monthlySavingsTarget').value);
    const totalSavings = monthsToSave * savingsPerMonth;
    const bucketFill = Math.min(totalSavings, propertyCost);

    bucketFillResult.textContent = `Bucket filled: ${(bucketFill / propertyCost * 100).toFixed(2)}%`;

    // Clear table
    savingsTable.innerHTML = '';

    // Populate table
    const tableHeader = `<tr><th>Month</th><th>Savings (£)</th></tr>`;
    savingsTable.insertAdjacentHTML('beforeend', tableHeader);

    for (let i = 1; i <= monthsToSave; i++) {
        const savingsRow = `<tr><td>Month ${i}</td><td>£${savingsPerMonth}</td></tr>`;
        savingsTable.insertAdjacentHTML('beforeend', savingsRow);
    }
}
