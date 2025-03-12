# Interview Portal API

## Description

Interview Portal API is a RESTful API built using Node.js, Express.js, and MongoDB. It provides functionalities for managing users, handling interview scheduling, and managing students. The API ensures security through authentication and authorization mechanisms.

## Features

- User Authentication & Authorization (JWT-based login & signup)
- Secure Password Hashing (bcrypt)
- User, Interview Schedule, and Student Management (CRUD operations)
- File Upload Handling (Multer for file uploads)
- PDF Parsing for document analysis
- Error Handling & Logging
- MongoDB Integration (Mongoose for data modeling)
- Populate for data relations

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (JSON Web Token) for authentication
- Bcrypt for password security
- Multer for file uploads
- PDF-Parse for document extraction
- Morgan & Debug for logging

## API Endpoints

### User Management

| Method | Endpoint    | Description    |
| ------ | ----------- | -------------- |
| POST   | /users      | Create a user  |
| GET    | /users      | Get all users  |
| GET    | /users/\:id | Get user by ID |
| PUT    | /users/\:id | Update a user  |
| DELETE | /users/\:id | Delete a user  |

### Interview Schedule Management

| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| POST   | /interviews      | Schedule an interview |
| GET    | /interviews      | Get all interviews    |
| GET    | /interviews/\:id | Get interview details |
| PUT    | /interviews/\:id | Update an interview   |
| DELETE | /interviews/\:id | Delete an interview   |

### Student Management

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | /students      | Add a student     |
| GET    | /students      | Get all students  |
| GET    | /students/\:id | Get student by ID |
| PUT    | /students/\:id | Update a student  |
| DELETE | /students/\:id | Delete a student  |

## Security Measures

- JWT Authentication for secure access.
- Bcrypt Password Hashing for storing passwords safely.
- Input Validation & Error Handling to prevent attacks.

## File Upload (Multer)

- Supports uploading various file types.
- Stores files securely with proper validation.
- Provides endpoints to manage file storage and retrieval.

## Data Population

-  Uses Mongoose populate to fetch related data efficiently.
- Ensures optimized query performance for related documents.

## Email Integration

- Sends confirmation emails on user registration.
- Notifies users about interview schedules.

---

This `README.md` provides an overview of the API's functionalities, technologies, and security measures. For detailed usage, refer to the API documentation.


## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
