document.addEventListener("DOMContentLoaded", function() {
    // Step 1: Calculate Monthly Income
    const calculateMonthlyIncomeButton = document.getElementById("calculateMonthlyIncome");
    const annualIncomeInput = document.getElementById("annualIncome");
    const monthlyIncomeResult = document.getElementById("monthlyIncomeResult");

    // Step 2: Monthly Expenses
    const addExpenseButton = document.getElementById("addExpense");
    const calculateTotalExpensesButton = document.getElementById("calculateTotalExpenses");
    const totalExpensesResult = document.getElementById("totalExpensesResult");

    // Step 3: What You're Left With
    const leftoverResult = document.getElementById("leftoverResult");
    const savingsPercentageInput = document.getElementById("savingsPercentage");
    const calculateSavingsButton = document.getElementById("calculateSavings");
    const totalSavingsResult = document.getElementById("totalSavingsResult");

    // Step 4: Calculate Your Savings Target
    const monthlySavingsTargetInput = document.getElementById("monthlySavingsTarget");
    const propertyCostInput = document.getElementById("propertyCost");
    const calculateTimeToSaveButton = document.getElementById("calculateTimeToSave");
    const timeToSaveResult = document.getElementById("timeToSaveResult");

    // Step 5: Savings Budget Tool
    const month1Input = document.getElementById("month1");
    const calculateBucketButton = document.getElementById("calculateBucket");
    const bucketStatus = document.getElementById("bucketStatus");
    const savingsTable = document.getElementById("savingsTable").getElementsByTagName("tbody")[0];

    // Event listeners
    calculateMonthlyIncomeButton.addEventListener("click", calculateMonthlyIncome);
    addExpenseButton.addEventListener("click", addExpense);
    calculateTotalExpensesButton.addEventListener("click", calculateTotalExpenses);
    calculateSavingsButton.addEventListener("click", calculateTotalSavings);
    calculateTimeToSaveButton.addEventListener("click", calculateTimeToSave);
    calculateBucketButton.addEventListener("click", calculateBucket);

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
        const newAmountInput = document.createElement("input");
        newAmountInput.type = "number";
        newAmountInput.placeholder = "Expense Amount (£)";
        const br = document.createElement("br");
        const expensesDiv = document.getElementById("expenses");
        expensesDiv.appendChild(newExpenseInput);
        expensesDiv.appendChild(newAmountInput);
        expensesDiv.appendChild(br);
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
        calculateLeftover();
    }

    // Function to calculate what's left after expenses
    function calculateLeftover() {
        const monthlyIncome = parseFloat(monthlyIncomeResult.textContent.split("£")[1]);
        const totalExpenses = parseFloat(totalExpensesResult.textContent.split("£")[1]);
        const leftover = monthlyIncome - totalExpenses;
        leftoverResult.textContent = `What You're Left With: £${leftover.toFixed(2)}`;
    }

    // Function to calculate total savings
    function calculateTotalSavings() {
        const savingsPercentage = parseFloat(savingsPercentageInput.value);
        const leftover = parseFloat(leftoverResult.textContent.split("£")[1]);
        if (!isNaN(savingsPercentage)) {
            const totalSavings = (savingsPercentage / 100) * leftover;
            totalSavingsResult.textContent = `Total Monthly Savings: £${totalSavings.toFixed(2)}`;
        } else {
            totalSavingsResult.textContent = "Please enter a valid savings percentage.";
        }
    }

    // Function to calculate time to save
    function calculateTimeToSave() {
        const monthlySavingsTarget = parseFloat(monthlySavingsTargetInput.value);
        const propertyCost = parseFloat(propertyCostInput.value);
        if (!isNaN(monthlySavingsTarget) && !isNaN(propertyCost)) {
            const residentialDeposit = propertyCost * 0.1;
            const buyToLetDeposit = propertyCost * 0.2;
            const depositAmount = confirm("Are you buying the property to live in?") ? residentialDeposit : buyToLetDeposit;
            const monthsToSave = Math.ceil(depositAmount / monthlySavingsTarget);
            timeToSaveResult.textContent = `Months to Save for Deposit: ${monthsToSave}`;
        } else {
            timeToSaveResult.textContent = "Please enter valid values.";
        }
    }

    // Function to calculate bucket
    function calculateBucket() {
        const month1Savings = parseFloat(month1Input.value);
        if (!isNaN(month1Savings)) {
            // Calculate total savings each month and add to table
            let totalSavings = month1Savings;
            for (let i = 1; i <= 12; i++) {
                const monthInput = document.getElementById(`month${i}`);
                if (monthInput) {
                    const savings = parseFloat(monthInput.value);
                    if (!isNaN(savings)) {
                        totalSavings += savings;
                    }
                }
            }
            // Calculate percentage of total savings
            const propertyCost = parseFloat(propertyCostInput.value);
            const residentialDeposit = propertyCost * 0.1;
            const buyToLetDeposit = propertyCost * 0.2;
            const depositAmount = confirm("Are you buying the property to live in?") ? residentialDeposit : buyToLetDeposit;
            const bucketPercentage = (totalSavings / depositAmount) * 100;
            // Display bucket status
            bucketStatus.textContent = `Bucket filled: ${bucketPercentage.toFixed(2)}%`;
        } else {
            bucketStatus.textContent = "Please enter a valid savings amount for month 1.";
        }
    }
});

