# Student Management System - ASP.NET Core Web API

A RESTful Student Management System built using **ASP.NET Core Web API** following a **Layered Architecture** with **JWT Authentication**, **SQL Server**, **Swagger**, **Global Exception Handling**, **Logging**, and a **Basic Angular Frontend**.

---

## Features

* JWT Authentication
* Get All Students
* Get Student By Id
* Add New Student
* Update Student
* Delete Student
* Global Exception Handling Middleware
* Logging
* Swagger API Documentation
* SQL Server Database
* Layered Architecture
* Basic Angular Frontend (CRUD)

---

## Technologies Used

* ASP.NET Core Web API
* Angular
* Entity Framework Core
* SQL Server
* JWT Authentication
* Swagger (OpenAPI)
* Serilog / Built-in Logging
* Visual Studio 2022
* C#

---

## Project Architecture

```
StudentManagementAPI
│
├── Controllers
├── Services
├── Repositories
├── Models
├── DTOs
├── Middleware
├── Data
├── Authentication
├── Angular Frontend
├── Program.cs
└── appsettings.json
```

---

## Database

### Student Table

| Column      | Type     |
| ----------- | -------- |
| Id          | int      |
| Name        | nvarchar |
| Email       | nvarchar |
| Age         | int      |
| Course      | nvarchar |
| CreatedDate | datetime |

---

## API Endpoints

### Authentication

| Method | Endpoint          |
| ------ | ----------------- |
| POST   | `/api/Auth/login` |

---

### Student APIs

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| GET    | `/api/Student`      | Get All Students  |
| GET    | `/api/Student/{id}` | Get Student By Id |
| POST   | `/api/Student`      | Add Student       |
| PUT    | `/api/Student/{id}` | Update Student    |
| DELETE | `/api/Student/{id}` | Delete Student    |

---

## JWT Authentication

1. Login using the Authentication API.
2. Copy the generated JWT Token.
3. Click **Authorize** in Swagger.
4. Enter:

```
Bearer YOUR_TOKEN
```

5. Access secured Student APIs.

---

## Swagger

After running the project, open:

```
https://localhost:{PORT}/swagger
```

Swagger provides interactive API documentation and testing.

---

## Global Exception Handling

The project uses custom middleware to:

* Catch unhandled exceptions
* Return standardized error responses
* Prevent application crashes

---

## Logging

Logging is implemented to record:

* API Requests
* Errors
* Exceptions
* Application Events

---

## Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/your-username/StudentManagementAPI.git
```

### 2. Open Project

Open the solution in **Visual Studio 2022**.

### 3. Configure Database

Update the connection string inside:

```
appsettings.json
```

Example:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=YOUR_SERVER;Database=StudentDB;Trusted_Connection=True;TrustServerCertificate=True;"
}
```

### 4. Apply Database

Run the following commands if using EF Core Migrations:

```powershell
Add-Migration InitialCreate
Update-Database
```

### 5. Run the Project

```bash
dotnet run
```

or press **F5** in Visual Studio.

### 6. Test APIs

Open:

```
https://localhost:{PORT}/swagger
```

---

## Expected Output

* Secure REST APIs
* JWT Protected Endpoints
* CRUD Operations
* SQL Server Integration
* Swagger Documentation
* Proper Error Responses
* Clean Layered Architecture
* Angular Frontend for Student Management

---

## Future Improvements

* Pagination
* Search & Filtering
* Role-Based Authorization
* Refresh Tokens
* Unit Tests
* Docker Deployment

---

## Author

**Danushu Garikipati**

**Skills:** ASP.NET Core Web API | Angular | C# | SQL Server | Entity Framework Core | JWT Authentication
