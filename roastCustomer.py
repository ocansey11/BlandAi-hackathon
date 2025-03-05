
import json
import requests
from datetime import datetime
from dotenv import load_dotenv # type: ignore
import os


# Define the path to the JSON file
file_path = os.path.join('data', 'schedule.json')

# Load the JSON data
with open(file_path, 'r') as f:
    data = json.load(f)
# Load environment variables from .env file

load_dotenv()

# Access API key
api_key = os.getenv("API_KEY")
BLANDAI_EVENT_URL = os.getenv("BLAND_EVENT_URL")  


headers = {
    "Authorization": f"{api_key}",
    "Content-Type": "application/json",
    # Replace with actual API key
}

print(f"API Key: {api_key}") 

# Send only the soonest appointment
response = requests.post(BLANDAI_EVENT_URL, headers=headers)

# Check response status
if response.status_code == 200:
    print("Event triggered successfully:", response.json())
else:
    print("Error triggering event:", response.status_code, response.text)