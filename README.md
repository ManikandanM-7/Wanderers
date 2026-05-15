# 🌍 Wanderers - Travel Destination REST API

A full-stack travel destination management app built with **Spring Boot**, **Spring REST**, **JDBC**, **MySQL**, and a **Bootstrap 5** frontend.

---

## 🛠 Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Backend    | Spring Boot 3.2.5       |
| REST API   | Spring REST (Web MVC)   |
| Database   | MySQL + Spring JDBC     |
| Build Tool | Maven                   |
| Frontend   | HTML5, CSS3, Bootstrap 5, JavaScript |

---

## 📁 Project Structure

```
wanderers/
├── src/
│   ├── main/
│   │   ├── java/com/wanderers/
│   │   │   ├── WanderersApplication.java       # Entry point
│   │   │   ├── controller/
│   │   │   │   └── DestinationController.java  # REST endpoints
│   │   │   ├── model/
│   │   │   │   └── Destination.java            # Entity class
│   │   │   ├── repository/
│   │   │   │   └── DestinationRepository.java  # JDBC queries
│   │   │   └── service/
│   │   │       └── DestinationService.java     # Business logic
│   │   └── resources/
│   │       ├── application.properties          # DB config
│   │       ├── schema.sql                      # Table creation
│   │       ├── data.sql                        # Sample data
│   │       └── static/
│   │           └── index.html                  # Bootstrap frontend
│   └── test/
│       └── java/com/wanderers/
│           └── WanderersApplicationTests.java
└── pom.xml
```

---

## ⚙️ Setup

### 1. Configure MySQL
Update `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/wanderers_db
spring.datasource.username=root
spring.datasource.password=your_password_here
```

### 2. Run the App
```bash
mvn spring-boot:run
```

### 3. Open in Browser
```
http://localhost:8080
```

---

## 🔗 REST API Endpoints

| Method | Endpoint                          | Description              |
|--------|-----------------------------------|--------------------------|
| GET    | `/api/destinations`               | Get all destinations     |
| GET    | `/api/destinations/{id}`          | Get destination by ID    |
| GET    | `/api/destinations/category/{cat}`| Filter by category       |
| POST   | `/api/destinations`               | Add new destination      |
| PUT    | `/api/destinations/{id}`          | Update destination       |
| DELETE | `/api/destinations/{id}`          | Delete destination       |

---

## 📦 Sample Request (POST)

```json
{
  "name": "Santorini",
  "country": "Greece",
  "description": "Beautiful island with white-washed buildings.",
  "category": "Beach",
  "rating": 4.9
}
```

---

## 📸 Features

- ✅ Full CRUD via REST API
- ✅ Filter destinations by category
- ✅ Star ratings display
- ✅ Bootstrap 5 responsive UI
- ✅ Spring JDBC (no ORM)
- ✅ Auto schema + seed data on startup
