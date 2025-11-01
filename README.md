# URL-Shortener-Project

A simple URL shortener web application built using Node.js, Express.js and EJS, with a clean MVC-style structure

---

## 🚀 Project Overview

This project allows users to input a long URL and receive a shortened link. That short link redirects to the original long URL when visited. It’s a hands-on demonstration of:

- Server-side web development with Node.js and Express  
- MVC directory structure (models, controllers, views)  
- Basic URL routing, user input handling and redirection  
- Templating with EJS and static assets handling  
- Managing dependencies and project setup with `package.json`

---

## 🛠 Features

- Input a long URL, generate a unique short code  
- Visit the short code URL and redirect to original URL  
- MVC folder layout:  
  - `models/` — data-models or abstractions  
  - `controllers/` — request logic & routing handlers  
  - `views/` — EJS templates for front-end  
  - `public/` — static assets (CSS, JavaScript, images)  
- Built with:  
  - Node.js  
  - Express.js  
  - EJS (Embedded JavaScript templating)  
- Easy to extend: e.g., add user accounts, analytics, custom aliases, expiry, etc.

---

## 📁 Project Structure
URL-Shortener-Project/
│
├─ models/ # Data definitions / schemas
├─ controllers/ # Request handling logic for short-links
├─ views/ # EJS templates (front-end)
├─ public/ # Static assets (CSS, client JS, images)
├─ server.js # App entry point
├─ package.json # Project metadata & dependencies
└─ .gitignore # Files/folders to ignore in git
