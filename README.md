# Road Maintenance System

A comprehensive web application for reporting and managing road maintenance issues in your community.

## 🌟 Features

- User Authentication (Login/Signup)
- Report road maintenance issues
- Interactive Dashboard
- Real-time issue tracking
- Analytics and statistics

## 🛠️ Technology Stack

### Frontend
- React.js
- TailwindCSS
- Chart.js
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- bcrypt

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/[your-username]/majorProject.git
cd majorProject
```

2. Install Backend Dependencies
```bash
cd backend
npm install
cp .env.example .env
# Configure your .env file
```

3. Install Frontend Dependencies
```bash
cd ../roadMaintenance
npm install
```

4. Start Development Servers
```bash
# Backend (from backend directory)
npm run dev

# Frontend (from roadMaintenance directory)
npm run dev
```

## 📝 Environment Variables

Create a `.env` file in the backend directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License.

## 👤 Author

Ayush Raj
- GitHub: [@Ayushaj0](https://github.com/Ayushaj0)
