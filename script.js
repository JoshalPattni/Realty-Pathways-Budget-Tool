document.addEventListener("DOMContentLoaded", function() {
    const addExpenseButton = document.getElementById("addExpense");
    const calculateExpensesButton = document.getElementById("calculateExpenses");
    const calculateSavingsButton = document.getElementById("calculateSavings");
    const calculateTimeButton = document.getElementById("calculateTime");
    const fillBucketButton = document.getElementById("fillBucket");
    const expensesContainer = document.getElementById("expenses");
    const bucketPercentage = document.getElementById("bucketPercentage");

    addExpenseButton.addEventListener("click", addExpense);
    calculateExpensesButton.addEventListener("click", calculateTotalExpenses);
    calculateSavingsButton.addEventListener("click", calculateTotalSavings);
    calculateTimeButton.addEventListener("click", calculateTimeToSave);
    fillBucketButton.addEventListener("click", fillBucket);

    function addExpense() {
        const expenseDiv = document.createElement("div");
        expenseDiv.classList.add("expense");
        expenseDiv.innerHTML = `
            <input type="text" placeholder="Expense Name">
            <input type="number" placeholder="Expense Amount (£)">
            <button class="removeExpense">Remove</button>
        `;
        expensesContainer.appendChild(expenseDiv);

        const removeButtons = document.querySelectorAll(".removeExpense");
        removeButtons.forEach(button => {
            button.addEventListener("click", () => {
                button.parentElement.remove();
            });
        });
    }

    function calculateTotalExpenses() {
        const expenseInputs = document.querySelectorAll("#expenses input[type='number']");
        let totalExpenses = 0;
        expenseInputs.forEach(input => {
            totalExpenses += parseFloat(input.value);
        });
        alert(`Total Monthly Expenses: £${totalExpenses.toFixed(2)}`);
    }

    function calculateTotalSavings() {
        const emergencyFund = parseFloat(document.getElementById("emergencyFund").value);
        alert(`Total Savings: £${emergencyFund.toFixed(2)}`);
    }

    function calculateTimeToSave() {
        const monthlySavings = parseFloat(document.getElementById("monthlySavings").value);
        const propertyCost = parseFloat(document.getElementById("propertyCost").value);
        const propertyType = document.getElementById("propertyType").value;
        const depositPercentage = propertyType === "residential" ? 0.1 : 0.2;
        const depositAmount = propertyCost * depositPercentage;
        const monthsToSave = depositAmount / monthlySavings;
        const yearsToSave = monthsToSave / 12;
        alert(`Months to Save for Deposit: ${monthsToSave.toFixed(2)} (${yearsToSave.toFixed(2)} years)`);
    }

    function fillBucket() {
        const monthlySavingsBucket = parseFloat(document.getElementById("monthlySavingsBucket").value);
        if (monthlySavingsBucket >= 0 && monthlySavingsBucket <= 100) {
            bucketPercentage.textContent = `${monthlySavingsBucket.toFixed(2)}%`;
        } else {
            alert("Please enter a value between 0 and 100 for Monthly Savings.");
        }
    }
});
