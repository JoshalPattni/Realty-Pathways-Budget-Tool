let annualIncome = 0;
let monthlyIncome = 0;
let savingsTarget = 0;
let propertyCost = 0;

function calculateMonthlyIncome() {
    annualIncome = parseInt(document.getElementById('annualIncome').value);
    monthlyIncome = annualIncome / 12;
    showStep(2);
}

function updateSavingsAmount() {
    document.getElementById('savingsAmount').textContent = `Savings Target: £${savingsTarget}`;
}

function calculateYearsToSave() {
    propertyCost = parseInt(document.getElementById('propertyCost').value);
    const remainingAmount = propertyCost - savingsTarget;
    const remainingMonths = Math.ceil(remainingAmount / monthlyIncome);
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
