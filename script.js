document.addEventListener("DOMContentLoaded", function() {
    // Step 1: Calculate Monthly Income
    const calculateMonthlyIncomeBtn = document.getElementById("calculateMonthlyIncome");
    calculateMonthlyIncomeBtn.addEventListener("click", function() {
        const annualIncome = parseFloat(document.getElementById("annualIncome").value);
        if (!isNaN(annualIncome)) {
            const monthlyIncome = calculateMonthlyIncome(annualIncome);
            document.getElementById("monthlyIncomeResult").textContent = `Estimated Monthly Income: £${monthlyIncome.toFixed(2)}`;
        } else {
            document.getElementById("monthlyIncomeResult").textContent = "Please enter a valid annual income.";
        }
    });

    // Function to calculate monthly income after tax
    function calculateMonthlyIncome(annualIncome) {
        // Income tax bands and rates
        const taxBands = [
            { threshold: 12570, rate: 0 },
            { threshold: 50270, rate: 20 },
            { threshold: 125140, rate: 40 },
            { threshold: Infinity, rate: 45 }
        ];
        let remainingIncome = annualIncome;
        let taxAmount = 0;
        // Calculate tax
        for (const band of taxBands) {
            if (remainingIncome <= 0) {
                break;
            }
            const taxableAmount = Math.min(remainingIncome, band.threshold);
            taxAmount += (taxableAmount * band.rate) / 100;
            remainingIncome -= taxableAmount;
        }
        return (annualIncome - taxAmount) / 12; // Divide by 12 for monthly income
    }

    // Step 2: Monthly Expenses
    const addExpenseBtn = document.getElementById("addExpense");
    const calculateTotalExpensesBtn = document.getElementById("calculateTotalExpenses");
    const expensesDiv = document.getElementById("expenses");
    const totalExpensesResult = document.getElementById("totalExpensesResult");

    addExpenseBtn.addEventListener("click", function() {
        const div = document.createElement("div");
        div.innerHTML = `<input type="text" placeholder="Expense Name"> <input type="number" placeholder="Expense Amount (£)">`;
        expensesDiv.appendChild(div);
    });

    calculateTotalExpensesBtn.addEventListener("click", function() {
        const expenseInputs = expensesDiv.querySelectorAll("input[type='number']");
        let totalExpenses = 0;
        expenseInputs.forEach(input => {
            if (!isNaN(parseFloat(input.value))) {
                totalExpenses += parseFloat(input.value);
            }
        });
        totalExpensesResult.textContent = `Total Monthly Expenses: £${totalExpenses.toFixed(2)}`;
    });

    // Step 3: What You're Left With
    const calculateSavingsBtn = document.getElementById("calculateSavings");
    const leftoverResult = document.getElementById("leftoverResult");
    const savingsPercentageInput = document.getElementById("savingsPercentage");
    const totalSavingsResult = document.getElementById("totalSavingsResult");

    calculateSavingsBtn.addEventListener("click", function() {
        const monthlyIncome = parseFloat(document.getElementById("monthlyIncomeResult").textContent.split("£")[1]);
        const totalExpenses = parseFloat(document.getElementById("totalExpensesResult").textContent.split("£")[1]);
        const savingsPercentage = parseFloat(savingsPercentageInput.value);
        if (!isNaN(monthlyIncome) && !isNaN(totalExpenses) && !isNaN(savingsPercentage)) {
            const leftover = monthlyIncome - totalExpenses;
            leftoverResult.textContent = `What You're Left With: £${leftover.toFixed(2)}`;
            const totalSavings = (leftover * savingsPercentage) / 100;
            totalSavingsResult.textContent = `Total Savings: £${totalSavings.toFixed(2)}`;
        } else {
            leftoverResult.textContent = "Please enter valid values.";
            totalSavingsResult.textContent = "";
        }
    });

    // Step 4: Calculate Your Savings Target
    const calculateTimeToSaveBtn = document.getElementById("calculateTimeToSave");
    const timeToSaveResult = document.getElementById("timeToSaveResult");

    calculateTimeToSaveBtn.addEventListener("click", function() {
        const monthlySavingsTarget = parseFloat(document.getElementById("monthlySavingsTarget").value);
        const propertyCost = parseFloat(document.getElementById("propertyCost").value);
        if (!isNaN(monthlySavingsTarget) && !isNaN(propertyCost)) {
            const residentialDeposit = propertyCost * 0.1;
            const buyToLetDeposit = propertyCost * 0.2;
            let depositAmount;
            const isResidential = confirm("Are you buying the property to live in?");
            if (isResidential) {
                depositAmount = residentialDeposit;
            } else {
                const isBuyToLet = confirm("Are you buying the property to rent out?");
                depositAmount = isBuyToLet ? buyToLetDeposit : 0;
            }
            if (depositAmount > 0) {
                const monthsToSave = Math.ceil(depositAmount / monthlySavingsTarget);
                timeToSaveResult.textContent = `Months to Save for Deposit: ${monthsToSave}`;
            } else {
                timeToSaveResult.textContent = "Please provide valid property cost.";
            }
        } else {
            timeToSaveResult.textContent = "Please enter valid values.";
        }
    });

    // Step 5: Savings Budget Tool
    const calculateBucketBtn = document.getElementById("calculateBucket");
    const bucketStatus = document.getElementById("bucketStatus");

    calculateBucketBtn.addEventListener("click", function() {
        const propertyCost = parseFloat(document.getElementById("propertyCost").value);
        const savingsTable = document.getElementById("savingsTable");
        const inputs = savingsTable.querySelectorAll("input[type='number']");
        let totalSaved = 0;
        inputs.forEach(input => {
            if (!isNaN(parseFloat(input.value))) {
                totalSaved += parseFloat(input.value);
            }
        });
        const bucketFillPercentage = (totalSaved / propertyCost) * 100;
        bucketStatus.textContent = `Bucket filled: ${bucketFillPercentage.toFixed(2)}%`;
    });
});

