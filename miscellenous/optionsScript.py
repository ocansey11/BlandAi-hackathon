import json
import requests
from datetime import datetime
from dotenv import load_dotenv # type: ignore
import os


# Define the path to the JSON file
file_path = os.path.join('data', 'options.json')

# Load the JSON data
with open(file_path, 'r') as f:
    data = json.load(f)
# Load environment variables from .env file

load_dotenv()

print(data)

# Access API key
api_key = os.getenv("API_KEY")
OPTIONS_EVENT = os.getenv("OPTIONS_EVENT")  


    # Define API endpoint and headers
headers = {
    "Authorization": f"{api_key}",
    "Content-Type": "application/json",
        # Replace with actual API key
}

print(f"API Key: {api_key}") 

response = requests.post(OPTIONS_EVENT, headers=headers, data=json.dumps(data[-1]))

if response.status_code == 200:
    print("Event triggered successfully:", response.json())
else:
    print("Error triggering event:", response.status_code, response.text)
