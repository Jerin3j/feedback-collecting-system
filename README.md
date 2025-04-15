
# 🌟 Feedback Collection System

A full-stack feedback collection platform built using React, TypeScript, Express.js, Prisma ORM, and Supabase (PostgreSQL). Users can submit feedback with star ratings, and admins can view and manage feedback with pagination and sorting features.

---

## 🖥️ Frontend

- **Framework**: React + TypeScript (Vite)
- **Styling**: Tailwind CSS + ShadCN UI
- **Features**:
  - Form with validation (`react-hook-form` + `zod`)
  - Star-based rating system
  - Responsive design
  - Admin dashboard with pagination and sorting by newest

## ⚙️ Backend

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: Supabase PostgreSQL
- **ORM**: Prisma
- **Features**:
  - API to submit and fetch feedback
  - Pagination support
  - CORS and JSON middleware

---

## 📌 API Documentation

### `POST /submit`

Submit feedback.

**Request Body:**
```json
{
  "name": "Jerin",
  "email": "jerin@example.com",
  "phone": "9876543210",
  "rating": 4,
  "feedback": "Great platform!"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Jerin",
  "email": "jerin@example.com",
  "phone": "9876543210",
  "rating": 4,
  "feedback": "Great platform!",
  "createdAt": "2025-04-15T08:00:00Z"
}
```

---

### `GET /admin?page=1&limit=3`

Fetch paginated feedback entries.

**Response:**
```json
{
  "feedbacks": [
    {
      "id": 1,
      "name": "Jerin",
      "email": "jerin@example.com",
      "phone": "9876543210",
      "rating": 4,
      "feedback": "Great platform!",
      "createdAt": "2025-04-15T08:00:00Z"
    }
  ],
  "totalCount": 10
}
```

---

## 🗃️ Database Schema

**Table: Feedback**

| Field     | Type        | Description                     |
|-----------|-------------|---------------------------------|
| id        | Int (PK)    | Auto-increment primary key      |
| name      | String      | Name of the user                |
| email     | String      | Email of the user               |
| phone     | String      | Phone number                    |
| rating    | Int         | Star rating (1-5)               |
| feedback  | String      | Feedback text                   |
| createdAt | Timestamp   | Auto-generated timestamp        |

---

## 🔁 Data Flow Diagram

```plaintext
[User]
  |
  v
[Feedback Form - React]
  |
  v
[POST /submit - Express API]
  |
  v
[Prisma ORM] --> [Supabase Database]

[Admin Panel - React]
  |
  v
[GET /admin?page=x - Express API]
  |
  v
[Prisma ORM] --> [Supabase Database]
```

---

## 🏗️ Project Architecture

```
project-root/
├── client/
│   ├── components/
│   │   └── StarRatings.tsx
│   ├── pages/
│   │   ├── FeedbackForm.tsx
│   │   └── Admin.tsx
│   └── main.tsx
│
└── server/
    ├── index.js
    ├── routes.js
    ├── controllers/
    │   └── feedbackController.js
    └── prisma/
        ├── schema.prisma
        └── client.ts
```

---

## 🚧 Challenges & Solutions

### 1. CORS Policy Error

- **Problem**: Browser blocked requests from frontend to backend.
- **Solution**: Installed `cors` and added `app.use(cors())` before routes.

---

### 2. Database Connection Issues

- **Problem**: Prisma couldn't connect to Supabase.
- **Solution**: Fixed `.env` database URL, ran `npx prisma generate && migrate`.

---

### 3. Pagination Logic

- **Problem**: Rendering all feedbacks at once.
- **Solution**: Backend supports `page`, `limit`, `skip`. Frontend uses useEffect and states to switch pages.

---

### 4. Dynamic Star Ratings

- **Problem**: Showing numerical rating as stars.
- **Solution**: Created a reusable `StarRatings` component to render star icons dynamically.

---

### 5. Form Validation

- **Problem**: Incomplete/invalid input submission.
- **Solution**: Used `react-hook-form` with `zod` schema for proper validation with error messages.

---

## ✅ Assignment Requirements Covered

- [x] Feedback form with input validation
- [x] Star rating integration
- [x] Stores form data in Supabase DB using Prisma(PostgreSql)
- [x] Admin dashboard to view feedback
- [x] Pagination and sorting by newest
- [x] API documentation
- [x] Database schema & project structure
- [x] Data flow diagram and challenges faced

---

## 📬 Contact

Created by **Jerin Jerome Justin**  
🌍 Portfolio: jerin3j.vercel.app
🔗 GitHub: [github.com/jerinjj](https://github.com/jerin3j)
```

---
