document.addEventListener("DOMContentLoaded", function() {
    // Step 1: Calculate Monthly Income
    const totalMonthlyIncomeInput = document.getElementById("totalMonthlyIncome");

    // Step 2: Monthly Expenses
    const expensesDiv = document.getElementById("expenses");
    const addExpenseButton = document.getElementById("addExpense");
    const calculateTotalExpensesButton = document.getElementById("calculateTotalExpenses");

    // Step 3: Savings Goals
    const emergencyFundInput = document.getElementById("emergencyFund");
    const calculateTotalSavingsButton = document.getElementById("calculateTotalSavings");

    // Step 4: Calculate Savings Target
    const monthlySavingsTargetInput = document.getElementById("monthlySavingsTarget");
    const propertyCostInput = document.getElementById("propertyCost");
    const calculateTimeToSaveButton = document.getElementById("calculateTimeToSave");

    // Step 5: Tips to Accelerate Savings (No JavaScript needed)

    // Step 6: Savings Bucket
    const bucketPercentageSpan = document.getElementById("bucketPercentage");
    const monthlySavingsInput = document.getElementById("monthlySavings");
    const fillBucketButton = document.getElementById("fillBucket");

    // Event listeners
    addExpenseButton.addEventListener("click", addExpense);
    calculateTotalExpensesButton.addEventListener("click", calculateTotalExpenses);
    calculateTotalSavingsButton.addEventListener("click", calculateTotalSavings);
    calculateTimeToSaveButton.addEventListener("click", calculateTimeToSave);
    fillBucketButton.addEventListener("click", fillBucket);

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
        alert(`Total Monthly Expenses: £${totalExpenses.toFixed(2)}`);
    }

    // Function to calculate total savings
    function calculateTotalSavings() {
        const emergencyFund = parseFloat(emergencyFundInput.value);
        if (!isNaN(emergencyFund)) {
            alert(`Total Savings Goal: £${emergencyFund.toFixed(2)}`);
        } else {
            alert("Please enter a valid amount for the Emergency Fund.");
        }
    }

    // Function to calculate time to save
    function calculateTimeToSave() {
        const monthlySavingsTarget = parseFloat(monthlySavingsTargetInput.value);
        const propertyCost = parseFloat(propertyCostInput.value);
        if (!isNaN(monthlySavingsTarget) && !isNaN(propertyCost)) {
            const monthsToSave = Math.ceil(propertyCost / monthlySavingsTarget);
            alert(`Months to Save for Dream Property: ${monthsToSave}`);
        } else {
            alert("Please enter valid amounts for Monthly Savings Target and Property Cost.");
        }
    }

    // Function to fill the savings bucket
    function fillBucket() {
        const monthlySavings = parseFloat(monthlySavingsInput.value);
        const bucketPercentage = parseFloat(bucketPercentageSpan.textContent);
        if (!isNaN(monthlySavings) && !isNaN(bucketPercentage)) {
            const newBucketPercentage = Math.min(bucketPercentage + monthlySavings, 100);
            bucketPercentageSpan.textContent = newBucketPercentage.toFixed(2) + "%";
        } else {
            alert("Please enter a valid amount for Monthly Savings.");
        }
    }
});
