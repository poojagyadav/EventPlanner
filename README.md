# Event Planner 

## Frontend Developer Intern Assignment

This project was developed as part of the **Frontend Developer Intern Assignment.**  
The goal of this assignment was to build a modern, scalable web application with a strong focus on frontend development while integrating a basic backend for authentication and data handling.

---

## Project Description

**Event Planner** is a full-stack web application that allows users to:

- Sign up and log in securely
- Access a protected dashboard
- Create and view events
- Log out safely

The frontend is built using **React.js** and focuses on clean UI, responsiveness, and smooth user experience.  
The backend supports authentication, API handling, and database operations.

---

## Technologies Used

### Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap (responsive UI)

### Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- JWT (JSON Web Token)
- bcryptjs

### Deployment
- Render (single deployment)
- Frontend build served from backend

---

## Features Implemented

### Authentication
- User signup and login
- JWT-based authentication
- Protected routes for dashboard
- Secure logout functionality

### Dashboard
- Access restricted to logged-in users
- Create events
- View events
- Clean and simple UI

### Backend APIs
- User authentication APIs
- Event CRUD APIs
- MongoDB integration
- Authentication middleware

---

## Security Measures

- Password hashing using bcrypt
- JWT token validation middleware
- Environment variables for sensitive data
- Protected API routes

---

## Project Structure
EventPlanner/
├── backend/
│ ├── app.js
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── public/ (React production build)
│ └── package.json
│
├── frontend/
│ ├── src/
│ ├── public/
│ └── package.json
│
├── .gitignore
└── README.md


---

## API Overview

### Authentication
- POST /api/auth/signup
- POST /api/auth/login

### Events (Protected)
- POST /api/events – Create event
- GET /api/events – Fetch events

JWT token is required in request headers for protected routes.

---

## Deployment Details

The application is deployed as **a single service** on Render.  
The frontend is built and served directly from the backend, so no separate frontend deployment is required.

---

## Scalability Notes

For production-level scaling, the following improvements can be made:
- Separate frontend and backend deployments
- Add pagination and search to events
- Improve error logging and monitoring
- Implement role-based access control
- Use caching for frequently accessed data

---

## Assignment Requirements Fulfilled

- React-based frontend with responsive UI
- JWT authentication with protected routes
- Backend APIs for authentication and CRUD operations
- MongoDB database integration
- Secure password handling
- Clean and scalable project structure
- Deployed application
- GitHub repository with complete code




