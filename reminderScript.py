data = {
  "appointments": [
    {
      "client_id": "12345",
      "client_name": "John Doe",
      "client_phone": "+447512008804",
      "client_email": "johndoe@example.com",
      "property_id": "A101",
      "property_address": "123 Main Street, City, State",
      "scheduled_date": "2025-03-10",
      "scheduled_time": "14:00",
      "assigned_staff": "Jane Smith",
      "staff_phone": "+1987654321",
      "status": "Scheduled"
    },
    {
      "client_id": "67890",
      "client_name": "Alice Brown",
      "client_phone": "+447555670662",
      "client_email": "alicebrown@example.com",
      "property_id": "B202",
      "property_address": "456 Oak Avenue, City, State",
      "scheduled_date": "2025-03-11",
      "scheduled_time": "10:30",
      "assigned_staff": "Mark Johnson",
      "staff_phone": "+1098765432",
      "status": "Scheduled"
    },
    {
      "client_id": "24680",
      "client_name": "Michael Green",
      "client_phone": "+447555670662",
      "client_email": "michaelgreen@example.com",
      "property_id": "C303",
      "property_address": "789 Pine Lane, City, State",
      "scheduled_date": "2025-03-12",
      "scheduled_time": "16:00",
      "assigned_staff": "Lisa White",
      "staff_phone": "+1029384756",
      "status": "Scheduled"
    },
    {
      "client_id": "13579",
      "client_name": "Emily Clark",
      "client_phone": "+447555670662",
      "client_email": "emilyclark@example.com",
      "property_id": "D404",
      "property_address": "321 Birch Road, City, State",
      "scheduled_date": "2025-03-13",
      "scheduled_time": "11:45",
      "assigned_staff": "Robert Brown",
      "staff_phone": "+1902837465",
      "status": "Scheduled"
    },
    {
      "client_id": "11223",
      "client_name": "Chris Adams",
      "client_phone": "+447555670662",
      "client_email": "chrisadams@example.com",
      "property_id": "E505",
      "property_address": "654 Cedar Avenue, City, State",
      "scheduled_date": "2025-03-14",
      "scheduled_time": "13:30",
      "assigned_staff": "Emma Wilson",
      "staff_phone": "+1765432980",
      "status": "Scheduled"
    },
    {
      "client_id": "99887",
      "client_name": "Sarah Lee",
      "client_phone": "+447555670662",
      "client_email": "sarahlee@example.com",
      "property_id": "F606",
      "property_address": "987 Maple Drive, City, State",
      "scheduled_date": "2025-03-15",
      "scheduled_time": "09:00",
      "assigned_staff": "Daniel Carter",
      "staff_phone": "+1827364509",
      "status": "Scheduled"
    },
    {
      "client_id": "55443",
      "client_name": "David Martinez",
      "client_phone": "+447555670662",
      "client_email": "davidmartinez@example.com",
      "property_id": "G707",
      "property_address": "741 Oakwood Blvd, City, State",
      "scheduled_date": "2025-03-16",
      "scheduled_time": "17:15",
      "assigned_staff": "Sophia Miller",
      "staff_phone": "+1654321987",
      "status": "Scheduled"
    }
  ]
}


import json
import requests
from datetime import datetime
from dotenv import load_dotenv # type: ignore
import os

# Load environment variables from .env file
load_dotenv()

# Access API key
api_key = os.getenv("API_KEY")

# Function to parse date and time
def get_datetime(appointment):
    return datetime.strptime(f"{appointment['scheduled_date']} {appointment['scheduled_time']}", "%Y-%m-%d %H:%M")

# Sort appointments by date and time
sorted_appointments = sorted(data["appointments"], key=get_datetime)

# Pick the soonest appointment
soonest_appointment = sorted_appointments[0] if sorted_appointments else None
print(soonest_appointment)
# Check if there is a valid appointment
if soonest_appointment:
    # Define API endpoint and headers
    BLANDAI_EVENT_URL = "https://api.bland.ai/api/events/d956c237-4b9d-4923-901e-19eb3ec2edad/handler"  # Replace with actual URL
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