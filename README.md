# 🌍 Wanderers - Travel Destination Management System

A full-stack web application for managing and exploring travel destinations around the world. Built with **React.js**, **Node.js**, **Express**, and **MySQL**.

---

## 📦 Tech Stack

| Layer      | Technology                |
|------------|---------------------------|
| Frontend   | React.js (Hooks, State)   |
| Backend    | Node.js + Express         |
| Database   | MySQL                     |
| HTTP Client| Axios                     |

---

## 🚀 Features

- ✅ Dynamic single-page application (SPA) with React
- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ Real-time state management with React Hooks
- ✅ RESTful API endpoints with Express
- ✅ Filter destinations by category
- ✅ Star rating system
- ✅ Responsive design
- ✅ MySQL database with optimized queries

---

## 📁 Project Structure

```
wanderers/
├── spring-boot-wanderers.zip     # Java Spring Boot version (alternative implementation)
├── client/                       # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/          # React components
│   │   ├── services/            # API service layer
│   │   └── App.js              # Main app component
│   └── package.json
├── server/                       # Node.js backend
│   ├── config/                  # Database configuration
│   ├── controllers/             # Business logic
│   ├── routes/                  # API routes
│   ├── database.sql            # SQL schema
│   └── server.js               # Entry point
└── package.json
```

---

## ⚙️ Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/ManikandanM-7/Wanderers.git
cd Wanderers
```

### 2. Setup MySQL Database
```bash
# Login to MySQL
mysql -u root -p

# Run the schema
source server/database.sql
```

### 3. Configure Environment Variables
Update `server/.env`:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password_here
DB_NAME=wanderers_db
PORT=5000
```

### 4. Install Dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 5. Run the Application

**Option A - Run separately:**
```bash
# Terminal 1 - Start backend
cd server
npm start

# Terminal 2 - Start frontend
cd client
npm start
```

**Option B - Run concurrently:**
```bash
npm run dev
```

Frontend: `http://localhost:3000`  
Backend API: `http://localhost:5000`

---

## 🔗 API Endpoints

| Method | Endpoint                          | Description              |
|--------|-----------------------------------|--------------------------|
| GET    | `/api/destinations`               | Get all destinations     |
| GET    | `/api/destinations/:id`           | Get destination by ID    |
| GET    | `/api/destinations/category/:cat` | Filter by category       |
| POST   | `/api/destinations`               | Create new destination   |
| PUT    | `/api/destinations/:id`           | Update destination       |
| DELETE | `/api/destinations/:id`           | Delete destination       |

---

## 📊 Sample API Request (POST)

```json
{
  "name": "Santorini",
  "country": "Greece",
  "description": "Beautiful Greek island with white-washed buildings and blue-domed churches.",
  "category": "Beach",
  "rating": 4.9
}
```

---

## 🎨 Components Overview

- **App.js** - Main application with state management
- **DestinationList** - Grid display of all destinations
- **DestinationCard** - Individual destination card with edit/delete
- **DestinationForm** - Form to add new destinations
- **FilterBar** - Category filter buttons
- **API Service** - Axios HTTP client for backend communication

---

## 🛠 Alternative: Spring Boot Version

A Java Spring Boot implementation is also available:
```bash
unzip spring-boot-wanderers.zip
cd spring-boot-wanderers
mvn spring-boot:run
```

---

## 👨‍💻 Developer

**Manikandan Manickam**
- 📧 mm0059745@gmail.com
- 🔗 [LinkedIn](https://linkedin.com/in/Manikandan-M)
- 💻 [GitHub](https://github.com/ManikandanM-7)

---

## 📝 License

MIT License
