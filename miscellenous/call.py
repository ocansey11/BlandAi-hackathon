import json
import requests
from datetime import datetime
from dotenv import load_dotenv # type: ignore
import os


# Define the path to the JSON file
file_path = os.path.join('data', 'contacts.json')

# Load the JSON data
with open(file_path, 'r') as f:
    data = json.load(f)
# Load environment variables from .env file

load_dotenv()

# Access API key
api_key = os.getenv("API_KEY")
CONTACT_US_EVENT = os.getenv("CONTACT_US_EVENT")  

headers = {
    "Authorization": f"{api_key}",
    "Content-Type": "application/json",
        # Replace with actual API key
}

print(f"API Key: {api_key}") 
print(data[-1])

# Send only the soonest appointment
response = requests.post(CONTACT_US_EVENT, headers=headers, data=json.dumps(data[-1]))

# Check response status
if response.status_code == 200:
    print("Event triggered successfully:", response.json())
else:
    print("Error triggering event:", response.status_code, response.text)

