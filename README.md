# Road Maintenance Feedback System

A web application for reporting and tracking road maintenance issues.

## Project Structure

```
majorProject/
├── backend/           # Node.js/Express backend
└── roadMaintenance/   # React frontend
```

## Features
- User Authentication (Login/Signup)
- Report Road Issues
- Dashboard with Analytics
- Issue Tracking System

## Tech Stack
- Frontend: React, TailwindCSS, Chart.js
- Backend: Node.js, Express, MongoDB
- Authentication: JWT, bcrypt

## Setup Instructions

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create .env file with:
   ```
   MONGO_URI=your_mongodb_uri_here
   PORT=5000
   JWT_SECRET=your_jwt_secret_here
   ```
4. Start server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to roadMaintenance directory:
   ```bash
   cd roadMaintenance
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```

## Author
Ayush Raj
