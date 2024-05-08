document.addEventListener("DOMContentLoaded", function() {
    // Step 1: Calculate Monthly Income
    const annualIncomeInput = document.getElementById("annualIncome");
    const calculateMonthlyIncomeButton = document.getElementById("calculateMonthlyIncome");
    const monthlyIncomeResult = document.getElementById("monthlyIncomeResult");

    // Step 2: Monthly Expenses
    const expensesDiv = document.getElementById("expenses");
    const addExpenseButton = document.getElementById("addExpense");
    const calculateTotalExpensesButton = document.getElementById("calculateTotalExpenses");
    const totalExpensesResult = document.getElementById("totalExpensesResult");

    // Step 3: Savings Goals
    const emergencyFundInput = document.getElementById("emergencyFund");
    const calculateTotalSavingsButton = document.getElementById("calculateTotalSavings");
    const totalSavingsResult = document.getElementById("totalSavingsResult");

    // Step 4: Calculate Savings Target
    const monthlySavingsTargetInput = document.getElementById("monthlySavingsTarget");
    const propertyCostInput = document.getElementById("propertyCost");
    const calculateTimeToSaveButton = document.getElementById("calculateTimeToSave");
    const timeToSaveResult = document.getElementById("timeToSaveResult");

    // Step 5: Savings Bucket
    const monthlySavingsInput = document.getElementById("monthlySavings");
    const fillBucketButton = document.getElementById("fillBucket");
    const bucketStatus = document.getElementById("bucketStatus");

    // Event listeners
    calculateMonthlyIncomeButton.addEventListener("click", calculateMonthlyIncome);
    addExpenseButton.addEventListener("click", addExpense);
    calculateTotalExpensesButton.addEventListener("click", calculateTotalExpenses);
    calculateTotalSavingsButton.addEventListener("click", calculateTotalSavings);
    calculateTimeToSaveButton.addEventListener("click", calculateTimeToSave);
    fillBucketButton.addEventListener("click", fillBucket);

    // Function to calculate monthly income
    function calculateMonthlyIncome() {
        const annualIncome = parseFloat(annualIncomeInput.value);
        if (!isNaN(annualIncome)) {
            const monthlyIncome = annualIncome / 12;
            monthlyIncomeResult.textContent = `Estimated Monthly Income: £${monthlyIncome.toFixed(2)}`;
        } else {
            monthlyIncomeResult.textContent = "Please enter a valid annual income.";
        }
    }

    // Function to add new expense input fields
    function addExpense() {
        const newExpenseInput = document.createElement("input");
        newExpenseInput.type = "text";
        newExpenseInput.placeholder = "Expense Name";
        expensesDiv.appendChild(newExpenseInput);

        const newAmountInput = document.createElement("input");
        newAmountInput.type = "number";
        newAmountInput.placeholder = "Expense Amount (£)";
        expensesDiv.appendChild(newAmountInput);
    }

    // Function to calculate total expenses
    function calculateTotalExpenses() {
        let totalExpenses = 0;
        const amountInputs = document.querySelectorAll("#expenses input[type='number']");
        amountInputs.forEach(input => {
            if (!isNaN(parseFloat(input.value))) {
                totalExpenses += parseFloat(input.value);
            }
        });
        totalExpensesResult.textContent = `Total Monthly Expenses: £${totalExpenses.toFixed(2)}`;
    }

    // Function to calculate total savings
    function calculateTotalSavings() {
        const emergencyFund = parseFloat(emergencyFundInput.value);
        if (!isNaN(emergencyFund)) {
            totalSavingsResult.textContent = `Total Savings Goal: £${emergencyFund.toFixed(2)}`;
        } else {
            totalSavingsResult.textContent = "Please enter a valid amount for the Emergency Fund.";
        }
    }

    // Function to calculate time to save
    function calculateTimeToSave() {
        const monthlySavingsTarget = parseFloat(monthlySavingsTargetInput.value);
        const propertyCost = parseFloat(propertyCostInput.value);
        if (!isNaN(monthlySavingsTarget) && !isNaN(propertyCost)) {
            const monthsToSave = Math.ceil(propertyCost / monthlySavingsTarget);
            timeToSaveResult.textContent = `Months to Save for Deposit: ${monthsToSave}`;
        } else {
            timeToSaveResult.textContent = "Please enter valid amounts for Monthly Savings Target and Property Cost.";
        }
    }

    // Function to fill the savings bucket
    function fillBucket() {
        const monthlySavings = parseFloat(monthlySavingsInput.value);
        if (!isNaN(monthlySavings)) {
            let bucketPercentage = parseFloat(bucketStatus.textContent);
            bucketPercentage = Math.min(bucketPercentage + (monthlySavings / 1000), 100); // Assuming the bucket represents 1000 units
            bucketStatus.textContent = `Bucket filled: ${bucketPercentage.toFixed(2)}%`;
        } else {
            alert("Please enter a valid amount for Monthly Savings.");
        }
    }
});
