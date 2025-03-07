# BlandAI Property Booking System

This project is a property listing and booking system integrated with **BlandAI**. It allows users to browse properties and trigger booking events via a backend API instead of opening the phone dialer. Additionally, it includes a **contact form** where users can submit their details to receive a **roasting phone call**.

---

## 📌 Features
- Fetches property data dynamically from `properties.json`
- Displays properties in different categories (`sale`, `rent`, `apartments`)
- **"Book Now"** button triggers an API request instead of opening a phone dialer
- **Contact Form** lets users submit their details for a **roast event** (a humorous phone call)
- Uses **BlandAI** to manage and trigger events

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/ocansey11/BlandAi-hackathon.git
cd BlandAi-hackathon
```

### 2️⃣ Install Dependencies
Ensure you have **Node.js** installed, then run:
```sh
npm install
npm install dotenv
npm install requests
```

### 3️⃣ Create a `.env` File
In the root of your project, create a `.env` file and add the following environment variables:

```env
API_KEY=your_blandai_api_key
BOOK_EVENT_URL=https://your-blandai-url.com/event
BOOK_EVENT_URL_PATHWAY=https://your-blandai-pathway-url.com/book-event
ROAST_EVENT_URL=https://your-blandai-url.com/roast-event
```

---

## 📡 BlandAI and Event Triggers

### 🔹 What is BlandAI?
BlandAI is an intelligent event-driven API system that allows developers to trigger **automated events**. This project integrates with BlandAI to:
- **Trigger property booking events**
- **Schedule roast calls when users submit a contact form**


---

## 📄 Project Pages Overview

| Page          | Description |
|--------------|------------|
| `index.html` | Displays the property listings and allows users to book properties |
| `contact.html` | Contains the roast form where users submit details of their dream house to receive a roast call |
| `data/properties.json` | Contains mock property data for sale, rent, and apartments |

---

## 🏁 Running the Project

### Start the Server
```sh
node server.js
```

### Open in Browser
Go to `http://localhost:3000` and browse properties.

---

## 📌 Future Improvements
- Implement **user authentication** for booking properties
- Add **payment integration** for property reservations
- Improve **UI styling** for better user experience
- Allow users to schedule **custom roast times** instead of instant calls

---

## 📞 Contact
For issues or contributions, open a GitHub issue or reach out to the team. 🚀
