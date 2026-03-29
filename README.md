# Framely 

Framely is a full-stack photography sharing application built with the MERN stack. Users can sign up, log in, and upload photos with a title, category, and description. The gallery displays all community photos in a responsive grid with category filtering, date sorting, and a modal preview. Each user also has a personal dashboard to view and manage their own uploads.

## Live Demo

Frontend: https://image-galleryft.vercel.app/  
Backend API: https://image-gallerybk.onrender.com

## Technologies Used

## Frontend
- React 19 — for building the user interface
- React Router DOM — for client-side navigation and protected routes
- Tailwind CSS — for styling and responsive design
- Axios — for making API requests to the backend
- React Hot Toast — for success and error notifications
- React Icons — for icons throughout the app
- Vite — as the build tool and development server

## Backend
- Node.js — as the runtime environment
- Express.js — for building the REST API
- MongoDB — as the database
- Mongoose — for schema modeling and database interaction
- Multer — for handling image file uploads
- Bcrypt — for securely hashing passwords
- JWT — for user authentication and protected routes

## Features
- User registration and login with JWT authentication
- Password hashing with bcrypt for secure storage
- Upload photos with title, category and description
- Image uploads handled via Multer
- Gallery page with responsive grid layout
- Filter images by category and sort by newest or oldest
- Click any image to open a full modal preview
- Personal dashboard to view and delete own uploads
- User avatar showing first letter of logged-in user's name
- Form validation on both frontend and backend
- Protected routes for authenticated users only
- Fully responsive design for mobile and desktop

## Folder Structure

-frontend
gallery/
├── public/
├── src/
│   ├── api/
│   │   └── api.js           # Axios API calls
│   ├── assets/              # Static assets (hero.png, svgs)
│   ├── images/              # Local image imports
│   ├── App.jsx              # Routes setup
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   ├── Nav.jsx              # Navbar with active links & logout
│   ├── Signup.jsx           # Registration page
│   ├── Login.jsx            # Login page
│   ├── Gallery.jsx          # Browse all photos
│   ├── Upload.jsx           # Upload new photo
│   └── Dashboard.jsx        # User dashboard
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
   
-backend
├── config/
│   ├── cloudinary.js
│   └── multer.js
├── controller/
│   ├── Imagecontroller.js
│   └── usercontroller.js
├── middleware/
│   └── auth.js
├── models/
│   ├── image.js
│   └── user.js
├── routes/
│   ├── imagerouter.js
│   └── userrouter.js
├── utils/
│   └── db.js
├── .env
├── index.js
└── package.json

## Setup Instructions

* **Clone Frontend**
git clone[https://github.com/shaznashafi12/Image-Galleryft]

* **Clone Backend**
git clone[https://github.com/shaznashafi12/Image-Gallerybk]

* **Backend Configuration**
  1. Navigate to the backend: cd backend
  2. Install dependencies: npm install
  3. Add `.env` file with PORT, MONGO_URI, JWT_SECRET, CLOUDINARY keys
  4. Start the server: npm start

* **Frontend Configuration**
  1. Navigate to the frontend: cd gallery
  2. Install dependencies: npm install
  3. Add `.env` file with VITE_BACKEND_URL
  4. Run the application: npm run dev