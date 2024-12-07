document.getElementById('predict-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const stockSymbol = document.getElementById('stock-symbol').value;

    const response = await fetch('/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stock_symbol: stockSymbol })
    });

    const result = await response.json();
    document.getElementById('prediction-result').innerHTML = `
        <p>Stock: ${result.stock}</p>
        <p>Predicted Change: ${result.predicted_change}%</p>
        <p>Confidence: ${result.confidence}%</p>
    `;
});
