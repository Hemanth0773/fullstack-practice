# PERN Todo App

A full-stack Todo application built with the **PERN stack**.

Users can create, view, update, complete, and delete todos through a React frontend connected to an Express API and PostgreSQL database.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL

## Features

- Create todos
- View all todos
- Update todos
- Mark todos as completed
- Delete todos
- Responsive UI

## Project Structure

```text
todo/
├── backend/
│   └── src/
│       ├── config/
│       ├── controller/
│       ├── routes/
│       └── app.js
│
└── frontend/
    └── src/
        ├── pages/
        ├── App.jsx
        └── main.jsx
```

## API Endpoints

| Method | Endpoint         | Description   |
| ------ | ---------------- | ------------- |
| POST   | `/api/todos`     | Create a todo |
| GET    | `/api/todos`     | Get all todos |
| PUT    | `/api/todos/:id` | Update a todo |
| DELETE | `/api/todos/:id` | Delete a todo |

## Getting Started

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Make sure PostgreSQL is running and the database connection is configured in the backend.

## What I Practiced

- React state and `useEffect`
- REST APIs
- Axios
- Express routing and controllers
- PostgreSQL
- CRUD operations
- Async/await
- Tailwind CSS

## Author

Hemanth A M
