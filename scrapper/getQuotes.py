from flask import Flask, jsonify
from quote import quote
from flask_cors import CORS
import random
import logging

app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

SEARCH_TERMS = ['life', 'love', 'wisdom', 'happiness', 'success', 'hope']
MAX_QUOTE_LENGTH = 200

@app.route('/api/quotes/random')
def get_random_quote():
    try:
        random_term = random.choice(SEARCH_TERMS)
        logger.debug(f"Fetching quote for term: {random_term}")
        
        result = quote(random_term, limit=2)
        logger.debug(f"Quote result: {result}")
        
        if result and len(result) > 0:
             # Filter quotes by length
            filtered_quotes = [
                q for q in result
                if len(q['quote']) <= MAX_QUOTE_LENGTH
            ]

            # Take first 2 quotes that meet length criteria
            final_quotes = filtered_quotes[:2]

            if final_quotes:
                return jsonify({
                "status": "success",
                "data": final_quotes
                })
            
        return jsonify({
            "status": "error",
            "message": "No quote found"
        })
    except Exception as e:
        logger.error(f"Error fetching quote: {str(e)}")
        return jsonify({
            "status": "error",
            "message": str(e)
        })

if __name__ == '__main__':
    app.run(port=5000, debug=True)