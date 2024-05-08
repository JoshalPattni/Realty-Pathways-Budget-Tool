let monthlyIncome;
let monthlyExpenses;
let savingsTarget;
let propertyCost;

function calculateMonthlyIncome() {
    const annualIncome = parseFloat(document.getElementById('annualIncome').value);
    monthlyIncome = annualIncome / 12;
    showStep(2);
}

function updateSavingsAmount() {
    document.getElementById('savingsAmount').textContent = `£${savingsTarget}`;
}

function calculateYearsToSave() {
    propertyCost = parseFloat(document.getElementById('propertyCost').value);
    const remainingFunds = monthlyIncome - monthlyExpenses;
    savingsTarget = Math.min(remainingFunds, 0); // Ensure savings target does not exceed remaining funds
    updateSavingsAmount();
    showStep(4);
}

function fillBucket() {
    const monthlySavings = parseFloat(document.getElementById('monthlySavings').value);
    const remainingMonths = Math.ceil(propertyCost / monthlySavings);
    const remainingYears = Math.floor(remainingMonths / 12);
    const remainingMonthsInYear = remainingMonths % 12;

    const bucketStatus = document.getElementById('bucketStatus');
    bucketStatus.textContent = `You need to save for ${remainingYears} years and ${remainingMonthsInYear} months`;

    const water = document.getElementById('water');
    const bucketHeight = Math.min(remainingMonths / 200 * 100, 100); // Limit bucket height to 100%
    water.style.height = `${bucketHeight}%`;
}

function showStep(step) {
    const steps = document.querySelectorAll('.step');
    steps.forEach((s, index) => {
        if (index === step - 1) {
            s.style.display = 'block';
        } else {
            s.style.display = 'none';
        }
    });
}

document.getElementById('savingsTarget').addEventListener('input', () => {
    savingsTarget = parseInt(document.getElementById('savingsTarget').value);
    updateSavingsAmount();
});

