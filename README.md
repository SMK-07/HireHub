# HireHub - All-in-One Placement Portal

HireHub is a modern, full-stack web application designed to digitalize and streamline the campus placement process. It connects students, the college's Training & Placement Office (TPO), and company recruiters on a single, efficient platform.

## ✨ Core Features

HireHub serves three key roles with a tailored set of features for each.

### 🎓 For Students
- [x] Easy registration and dynamic profile builder.
- [x] Upload and manage multiple resumes.
- [x] Smart search and filter for job postings.
- [x] One-click apply for eligible jobs.
- [x] Real-time tracking of application status.
- [x] In-app notifications and a dedicated resource center.

### 👑 For TPO / Admin
- [x] Powerful dashboard with key placement analytics.
- [x] Manage student and company verification process.
- [x] Create and manage job postings with custom eligibility criteria.
- [x] Filter and shortlist students based on performance.
- [x] Generate insightful placement reports.
- [x] Broadcast announcements to all students.

### 🏢 For Recruiters
- [x] Simple self-service registration and company profile setup.
- [x] Post, edit, and manage their job openings.
- [x] Access a verified pool of student applicants.
- [x] View student profiles and download resumes.
- [ ] Update applicant status (Shortlisted, Rejected).
- [ ] Interview scheduling interface.

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Authentication:** JSON Web Tokens (JWT)
- **File Storage:** Cloudinary

## 🚀 Getting Started

Follow these instructions to set up the project on your local machine for development and testing.

### Prerequisites

- Node.js (v18.x or higher)
- npm or yarn
- Git

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/YOUR_USERNAME/HireHub.git](https://github.com/YOUR_USERNAME/HireHub.git)
    cd HireHub
    ```

2.  **Set up the Backend (Server):**
    ```sh
    cd server
    npm install
    ```
    - Create a `.env` file in the `server` directory and add the following environment variables. Use the `.env.example` file as a template.
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_super_secret_jwt_key
    CLOUDINARY_CLOUD_NAME=your_cloudinary_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

3.  **Set up the Frontend (Client):**
    ```sh
    cd ../client
    npm install
    ```
    - Create a `.env` file in the `client` directory and add the backend server URL.
    ```env
    VITE_API_BASE_URL=http://localhost:5000
    ```

### Running the Application

1.  **Start the Backend Server:**
    ```sh
    cd server
    npm run dev  # Or 'npm start' for production build
    ```

2.  **Start the Frontend Development Server:**
    ```sh
    cd client
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---