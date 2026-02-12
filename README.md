# 🎮 PokéContainer: The Ultimate Pokemon capturing game
<img width="1212" height="341" alt="logo" src="https://github.com/user-attachments/assets/ec846355-4169-4865-a140-fe0f05e1bf2f" />

> **Gotta Catch 'Em All!** A full-stack web application that allows users to hunt, catch, and manage their personal Pokémon collection. Built with the PERN stack and powered by the PokéAPI.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://pokemon-game-s17i.onrender.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 📖 About The Project

PokéContainer is a "Container Game" that bridges the gap between casual collecting and persistent database management. It simulates the experience of a Pokémon trainer identifying new creatures and deciding whether to add them to their Pokédex.

The core challenge of this project was to create a seamless experience for both **guest users** and **authenticated trainers**, handling state management across LocalStorage and a PostgreSQL database.

### ✨ Key Features

* **Hybrid Storage System:**
    * **Guest Mode:** Unregistered users can catch Pokémon, which are saved instantly to the browser's `localStorage`.
    * **Trainer Mode:** Once logged in, the app switches context to fetch and store data in a persistent PostgreSQL database.
* **The Hunt (API Integration):** Leverages the **PokéAPI** to fetch real-time data, stats, and sprites for thousands of Pokémon.
* **Secure Authentication:** Robust user security using **Passport.js** (Local Strategy) and **Bcrypt** for password hashing.
* **Interactive UI:** A dynamic "Search & Catch" interface where users inspect cards before deciding to add them to their stack.

---

## 📸 Screenshots & Gameplay

### 1. The Home Base (Dashboard)
*Your collection at a glance. Shows local catches for guests or DB catches for users.*
<img width="1919" height="961" alt="image" src="https://github.com/user-attachments/assets/0cb83b79-813f-4979-87b2-fe175b23b4b0" />


### 2. The Hunt (Add Pokémon)
*Search for wild Pokémon, view their stats, and choose to add them to your container.*
<img width="1919" height="961" alt="image" src="https://github.com/user-attachments/assets/17159c3d-a3b0-4769-b55e-5bf4f84e36b1" />
<img width="1919" height="961" alt="image" src="https://github.com/user-attachments/assets/f888ce1e-ea2a-453e-acea-e067d1417d08" />



### 3. Secure Gate (Login/Register)
*Secure authentication using Passport.js and Bcrypt.*
<img width="1919" height="961" alt="image" src="https://github.com/user-attachments/assets/1ce16991-caa7-411a-8a42-2a8be15187c5" />


---

## 🛠️ Built With (Tech Stack)

This project utilizes the **PERN** stack to ensure scalability and performance.

### Frontend
* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) **React.js**: For building a dynamic, component-based user interface.
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white) **CSS3**: Custom styling for cards and layouts.
* **Fetch API**: For asynchronous data retrieval from the backend and PokéAPI.

### Backend
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white) **Node.js**: The runtime environment.
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB) **Express.js**: For handling server-side routing and middleware.
* **Passport.js**: For handling authentication strategies.
* **Bcrypt**: For cryptographic salting and hashing of passwords.

### Database
* ![PostgreSQL](https://img.shields.io/badge/postgres-%23316192.svg?style=flat&logo=postgresql&logoColor=white) **PostgreSQL**: Relational database for storing user profiles and Pokémon collections.

### Deployment
* ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=flat&logo=render&logoColor=white) **Render**: Cloud hosting platform.

---


## 🧠 What I Learned

* **State Synchronization:** Learned how to handle the logic flow when a user transitions from a Guest (LocalStorage) to a Logged-in User (Database), ensuring a smooth UX.
* **Authentication Flow:** Deepened understanding of how `serializeUser` and `deserializeUser` work within Passport.js to maintain session persistence.
* **API Consumption:** Practiced handling asynchronous requests and mapping external JSON data (PokéAPI) into my own database schema.

---

## 🤝 Contact

**Sanatan** [[LinkedIn Profile Link]](https://www.linkedin.com/in/sanatan-sethi-26910b2ab/) | [[Portfolio Link]](https://sanatan-sethi.vercel.app/)
