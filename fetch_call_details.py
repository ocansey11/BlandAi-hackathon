import requests
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()
# Access API key
api_key = os.getenv("API_KEY")

def get_call_id(call_id):
    
    url = f"https://api.bland.ai/v1/calls/{call_id}"

    headers = {"authorization": api_key}

    response = requests.request("GET", url, headers=headers)

    print(response.text)

