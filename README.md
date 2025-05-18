# 🚀 Capstone Project

## 📚 Course Context
This project is my **Capstone Project** for the **Operating Systems and Architecture** course at Pace University. The goal was to create a full-stack web application, including setting up a virtual machine, configuring a relational database, creating a web server with CRUD operations, and building a dynamic frontend using React.js.

## 🔧 Features
- **Linux Virtual Machine Setup**: A VM was created either on your local machine or using AWS, with Linux installed and SSH access enabled.
- **MySQL Database**: Set up a relational database, populated with a dataset from Kaggle, and used SQL queries to demonstrate data operations.
- **Web Server**: A Node.js and Express.js web server that supports CRUD operations (GET, POST, PUT, DELETE) using the MySQL database.
- **Frontend Interface**: A React.js frontend that interacts with the backend API, allowing users to read, create, update, and delete data from the database.

## 💡 Technologies Used
- **AWS EC2**: Virtual machine setup and hosting of the database.
- **Node.js**: JavaScript runtime used to build the backend server.
- **Express.js**: Framework used for building the web server and handling routes.
- **MySQL**: Relational database used to store and manage data.
- **React.js**: Frontend framework for building the user interface.
- **Postman**: Used to test and verify API endpoints for CRUD operations.
- **GitHub**: Used for version control and hosting the project code.

## 📁 Project Structure
```bash
my-capstone-project/
│
├── backend/
│   ├── .env                  # Environment variables for the backend
│   ├── .gitkeep              # Keep empty directory in Git
│   ├── index.js              # Entry point for the backend server
│
├── frontend/
│   ├── public/               # Static assets (e.g., images, icons)
│   ├── src/                  # React.js source code
│   │   ├── components/       # Reusable UI components
│   │   ├── App.js            # Main React app component
│   │   ├── api/              # API calls to interact with the backend
│   │   └── index.js          # React entry point
│   ├── .gitignore            # Git ignore file
│   ├── .gitkeep              # Keep empty directory in Git
│   ├── README.md             # Frontend project documentation
│   ├── package-lock.json     # Dependency lock file for frontend
│   └── package.json          # Frontend dependencies
│
├── frontend.mov              # Frontend demo video
├── get-post-delete.png       # API demo image
├── README.md                 # Project documentation (this file)
└── postgresql.js             # Uses Express and PostgreSQL to manage countries via /country GET, POST, and DELETE routes.
