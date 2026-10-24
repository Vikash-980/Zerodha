<<<<<<< HEAD
🚀 Zerodha Clone – MERN Full Stack Trading Platform
A full-stack stock trading simulation platform inspired by Zerodha’s Kite dashboard.
Built using the MERN stack with secure authentication, portfolio management, and interactive financial data visualization.

<p align="center">
  <img width="45%" alt="Screenshot 1" src="https://github.com/user-attachments/assets/9fd8bb38-a31d-48f7-b205-fbb9af8650cb" />
  <img width="45%" alt="Screenshot 2" src="https://github.com/user-attachments/assets/b94fd964-231b-4bd9-8fe2-31e22550e04d" />
</p>

## 🌐 Live Demo
| Component | Live Link |
|-----------|-----------|
| 🌐 Live | [https://zerodha-clone-frontend-s33j.onrender.com](https://zerodha-lqcrwrh9b-vikash-980s-projects.vercel.app/) |


## 🌐 Sample API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| ![POST](https://img.shields.io/badge/POST-0066cc?style=flat-square) | `/signup` | Register new user |
| ![POST](https://img.shields.io/badge/POST-0066cc?style=flat-square) | `/login` | Authenticate user |
| ![GET](https://img.shields.io/badge/GET-00cc66?style=flat-square) | `/allHoldings` | Fetch holdings |
| ![GET](https://img.shields.io/badge/GET-00cc66?style=flat-square) | `/allPositions` | Fetch positions |
| ![POST](https://img.shields.io/badge/POST-0066cc?style=flat-square) | `/newOrder` | Place order |




📌 Project Overview

This project replicates the core workflow of a stock trading platform where users can:

🔐 Register and log in securely

📈 Buy & Sell stocks (simulated)

📊 View dynamic portfolio holdings

📉 Analyze investments using Bar & Pie Charts

🖥 Experience a responsive dashboard interface

The application follows a modular full-stack architecture with separated frontend, dashboard, and backend layers.

🛠 Tech Stack
Frontend

React.js

React Router

Axios

Bootstrap

Chart.js

Backend

Node.js

Express.js

JWT Authentication

REST APIs

Database

MongoDB Atlas (Cloud Hosted)

Mongoose ODM

🏗 Project Architecture
Zerodha_Clone/
│

├── frontend/      → Landing pages + Authentication UI

├── dashboard/     → Kite-style trading dashboard

├── backend/       → Express server + APIs + MongoDB integration

🔐 Authentication Workflow

User signs up or logs in.

Credentials validated by backend.

JWT token generated upon successful authentication.

Protected routes allow access to dashboard.

Portfolio and trading operations become available.

📊 Core Features

✅ Secure JWT-based Authentication

✅ RESTful API Architecture

✅ Buy & Sell Stock Simulation

✅ Dynamic Holdings Tracking

✅ Portfolio Visualization (Bar Chart)

✅ Stock Comparison (Pie Chart)

✅ MongoDB Atlas Cloud Integration

✅ Modular Full-Stack Structure

🚀 Getting Started (Local Setup)
1️⃣ Clone the Repository

git clone https://github.com/Vikash-980/Zerodha.git

cd Zerodha_Clone

2️⃣ Setup Backend

cd backend

npm install


Create a .env file:


MONGO_URL=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key


Run backend:

npm start

3️⃣ Setup Frontend

cd frontend

npm install

npm start

4️⃣ Setup Dashboard

cd dashboard

npm install

npm start

🌐 Sample API Endpoints
Method	Endpoint	Description
POST	/signup	Register new user
POST	/login	Authenticate user
GET	/allHoldings	Fetch user holdings
GET	/allOrders	Fetch orders
POST	/newOrder	Place buy/sell order
📈 Learning Outcomes

This project strengthened my expertise in:

Designing scalable REST APIs

Implementing JWT authentication flows

MongoDB schema modeling

React state management

Frontend–backend integration

Financial data visualization

Full-stack application structuring


🛣 Future Improvements

🔄 Real-time stock price API integration

📊 Profit & Loss calculation engine

☁ Cloud deployment (Render / Vercel)

🔐 Role-based access control

⚡ Performance optimizations

👨‍💻 Author

Sonu Firasath
Full Stack Developer | MERN Stack Enthusiast

🔗 GitHub: https://github.com/Vikash-980

## 📞 Contact & Support

<div align="left">
  <p><strong>Author:</strong> Vikash Kumar</p>
  <p><strong>Institution:</strong> Jagannath University, Jaipur, Rajasthan, India</p>

  <a href="https://linkedin.com/in/vikashkr980" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://github.com/Vikash-980" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  
  
</div>

<br />

> **Note:** If you are interested in collaborating on this project or have any queries, feel free to reach out via any of the platforms above. 🚀

<div align="center"> <i>Built with ❤️ & Code. If you find this useful, please give it a ⭐!</i> </div>
