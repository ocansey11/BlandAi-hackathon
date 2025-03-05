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
book_appointment_url = os.getenv("BOOK_APPOINTMENT_URL")  

# Function to parse date and time
def get_datetime(appointment):
    return datetime.strptime(f"{appointment['scheduled_date']} {appointment['scheduled_time']}", "%Y-%m-%d %H:%M")

# Sort appointments by date and time
sorted_appointments = sorted(data["appointments"], key=get_datetime)

# Pick the soonest appointment
soonest_appointment = sorted_appointments[0] if sorted_appointments else None

# Check if there is a valid appointment
if soonest_appointment:
    # Define API endpoint and headers
    BLANDAI_EVENT_URL = f"{book_appointment_url}"  # Replace with actual URL
    headers = {
        "Authorization": f"{api_key}",
        "Content-Type": "application/json",
          # Replace with actual API key
    }

    print(f"API Key: {api_key}") 

    # Send only the soonest appointment
    response = requests.post(BLANDAI_EVENT_URL, headers=headers, data=json.dumps(soonest_appointment))

    # Check response status
    if response.status_code == 200:
        print("Event triggered successfully:", response.json())
    else:
        print("Error triggering event:", response.status_code, response.text)
else:
    print("No upcoming appointments found.")