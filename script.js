function calculateMonthlyIncome() {
    const annualIncome = parseFloat(document.getElementById('annualIncome').value);
    const monthlyIncome = (annualIncome / 12).toFixed(2);
    document.getElementById('monthlyIncomeResult').innerText = `Estimated Monthly Income: £${monthlyIncome}`;
}

function addExpense() {
    const expenseInputs = document.getElementById('expenseInputs');
    const div = document.createElement('div');
    div.classList.add('expense-input');
    div.innerHTML = `<input type="text" placeholder="Expense Name">
                    <input type="number" placeholder="Expense Amount (£)">`;
    expenseInputs.appendChild(div);
}

function calculateTotalExpenses() {
    const expenseAmounts = document.querySelectorAll('.expense-input input[type="number"]');
    let totalExpenses = 0;
    expenseAmounts.forEach(input => {
        totalExpenses += parseFloat(input.value);
    });
    document.getElementById('totalExpensesResult').innerText = `Total Monthly Expenses: £${totalExpenses.toFixed(2)}`;
}

function calculateLeftover() {
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncomeResult').innerText.split('£')[1]);
    const totalExpenses = parseFloat(document.getElementById('totalExpensesResult').innerText.split('£')[1]);
    const savingsPercentage = parseFloat(document.getElementById('savingsPercentage').value);
    const savingsAmount = (monthlyIncome - totalExpenses) * (savingsPercentage / 100);
    document.getElementById('leftoverResult').innerText = `You can put away up to £${savingsAmount.toFixed(2)} in savings in Step 4`;
}

function calculateTimeToSave() {
    const monthlySavingsTarget = parseFloat(document.getElementById('monthlySavingsTarget').value);
    const propertyCost = parseFloat(document.getElementById('propertyCost').value);
    const timeToSave = (propertyCost / monthlySavingsTarget).toFixed(2);
    document.getElementById('timeToSaveResult').innerText = `It will take approximately ${timeToSave} months to save for the deposit.`;
}

function fillBucket() {
    const monthlySavingInput = parseFloat(document.getElementById('monthlySavingInput').value);
    const timeToSave = parseFloat(document.getElementById('timeToSaveResult').innerText.split(' ')[3]);
    const bucket = document.getElementById('bucket');
    const fillPercentage = (monthlySavingInput / (timeToSave * monthlySavingInput)) * 100;
    bucket.innerHTML = `<div class="fill" style="width: ${fillPercentage}%;"></div>`;
}
