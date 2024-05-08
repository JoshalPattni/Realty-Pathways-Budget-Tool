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
    const years = Math.floor(remainingMonths / 12);
    const months = remainingMonths % 12;
    document.getElementById('yearsToSave').textContent = `Years: ${years}, Months: ${months}`;
    showStep(4);
}

function fillBucket() {
    const monthlySavings = parseInt(document.getElementById('monthlySavings').value);
    const totalMonths = Math.ceil((propertyCost - savingsTarget) / monthlySavings);
    const fillPercentage = ((totalMonths - remainingMonths) / totalMonths) * 100;
    document.getElementById('bucket').style.height = `${fillPercentage}%`;
    document.getElementById('bucketStatus').textContent = `Bucket filled ${fillPercentage.toFixed(2)}%`;
}

function showStep(step) {
    const steps = document.querySelectorAll('.step');
    steps.forEach(s => s.style.display = 'none');
    document.getElementById(`step${step}`).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    const rangeInput = document.getElementById('savingsTarget');
    rangeInput.addEventListener('input', () => {
        savingsTarget = parseInt(rangeInput.value);
        updateSavingsAmount();
    });
    updateSavingsAmount();
});
