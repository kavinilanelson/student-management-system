# 🎓 Student Management System

Hi! 👋

This is my first Full Stack MERN project built as part of my journey to become a Full Stack Developer.

The idea behind this project is simple: instead of maintaining student records manually, this application allows users to manage everything digitally in one place.

Through this project, I learned how the frontend, backend, and database work together in a real-world application.

---

## 🚀 What this project can do

- ➕ Add a new student
- ✏️ Edit existing student details
- 🗑️ Delete a student
- 🔍 Search students using Register Number
- 🎯 Filter students by Department and CGPA
- 📊 Sort students by Name, Age, and CGPA
- ✅ Form validation with meaningful error messages
- 💬 Success messages after Add, Update, and Delete operations

---

## 🛠️ Technologies I used

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

---

## 📂 Project Structure

```
student-management-system
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routers
│   └── server.js
│
└── README.md
```

---

## ▶️ How to Run the Project

### Clone the repository

```bash
git clone https://github.com/kavinilanelson/student-management-system.git
```

### Start the Backend

```bash
cd server
npm install
node server.js
```

### Start the Frontend

```bash
cd client
npm install
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 📌 REST API

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /students | Fetch all students |
| POST | /students | Add a new student |
| PUT | /students/:id | Update a student |
| DELETE | /students/:id | Delete a student |

---

## 💡 What I learned

Working on this project helped me understand:

- Building reusable React components
- React Hooks (`useState` and `useEffect`)
- REST API development using Express.js
- Connecting React with a backend using Axios
- MongoDB CRUD operations using Mongoose
- Git and GitHub workflow
- Project structure in a MERN application

---

## 🔮 Future Improvements

There are still many features I would like to add in the future:

- User Login & Authentication
- Dashboard with charts
- Student profile photos
- Export student data to PDF/Excel
- Pagination
- Responsive mobile design

---

## 👨‍💻 About Me

I'm currently learning Full Stack MERN Development and Data Structures & Algorithms.

This project is one of my learning milestones, and I'm continuously improving it by adding new features and following best practices.

If you have any suggestions or feedback, I'd love to hear them!

---

⭐ If you like this project, feel free to star the repository.