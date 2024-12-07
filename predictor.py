import random

def predict_stock_price(stock_symbol):
    # Placeholder for AI stock prediction logic
    return {
        "stock": stock_symbol,
        "predicted_change": round(random.uniform(-5, 5), 2),  # Example percentage change
        "confidence": round(random.uniform(80, 100), 2)      # Confidence level
    }
