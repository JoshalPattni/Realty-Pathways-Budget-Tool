function calculateResults() {
    // Get user inputs and perform calculations
    const amount1 = parseFloat(document.getElementById('amount1').value);
    const amount2 = parseFloat(document.getElementById('amount2').value);
    const totalExpenses = amount1 + amount2; // Add more expenses if needed
    const savingsTarget = parseFloat(document.getElementById('savingsTarget').value);
    const monthsToSave = Math.ceil(savingsTarget / totalExpenses);

    // Display results
    const output = document.getElementById('output');
    output.innerHTML = `
        <h2>Calculated Results</h2>
        <p>Total Monthly Expenses: £${totalExpenses.toFixed(2)}</p>
        <p>Months to Save for Dream Property: ${monthsToSave}</p>
    `;
}
