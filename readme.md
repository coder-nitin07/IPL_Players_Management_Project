IPL Player Management API Project

# Overview:
        A restful API Project to manage IPL Players data and I built with Node JS, Express JS and mongoDB. Supports CRUD operations with pagination, sorting, search, JWT authentication, role based access control etc and secure image upload via cloudinary.

# Feature: 
        - CRUD opeations (Admin only).
        - List players with pagination, sorting, seach  functionality etc.
        - View Player Details
        - Token Blacllisting with secure logout
        - Image upload via cloudinary
        - Input validation with JOI
        - Proper error handling with proper status codes

# Authentication & Authorization
        - Login / Register / Logout APIs for user authentication
        - Role-based access control (admin vs. user)
        - All player routes require authentication
        - Admin role is required for creating, updating, and deleting players

# Technologies: 
        - Node JS
        - Express JS 
        - MongoDB (Atlas)
        - Cloudinary
        - Joi
        - JWT


# Steup:
        # Install dependencies - npm install
        # Run server - npm start

# Notes:
        # Admin role requried for the Player create, update and delete APIs
        # All player routes require authentication

# Project Links:
        ## Live Server (Render Link): https://ipl-players-management-project.onrender.com/

        ## API Documentation (Swagger): https://ipl-players-management-project.onrender.com/api-docs/

        ## GitHub Repository: https://github.com/coder-nitin07/IPL_Players_Management_Project