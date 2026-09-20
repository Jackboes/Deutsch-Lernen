# 🇩🇪 Deutsch Lernen

**Deutsch Lernen** is a web-based German language learning platform designed to make learning German simple, interactive, and less overwhelming for beginners.

The platform provides different learning sections such as vocabulary, quizzes, flashcards, grammar, and travel-related vocabulary, with the goal of turning German learning into a more engaging and enjoyable experience.

> **Designed by Learners, Designed for Learners.**

---

## 🌐 About the Project

Learning a new language can sometimes feel difficult and repetitive, especially when learners have to switch between different resources for vocabulary, grammar, and practice.

**Deutsch Lernen** aims to bring these learning activities together in one platform.

The project currently focuses on beginner-friendly German learning content and provides a structured interface for practicing vocabulary and other language concepts.

---

## ✨ Features

* 📚 **Vocabulary Learning**

  * German vocabulary organized into different topics
  * English translations for easier understanding
  * Topic-based learning

* 🧠 **Quizzes**

  * Practice German vocabulary through interactive questions
  * Designed to reinforce previously learned words

* 🃏 **Flashcards**

  * Quick revision of German vocabulary
  * Useful for memorizing words through repetition

* 📖 **Grammar**

  * Beginner-friendly German grammar concepts
  * Structured learning sections

* 🆓 **Open Source**

  * You don't have to buy any subscription when you hit a daily limit for solving or learning !

* 📊 **Exceptions**

  * This sections has the important German Exceptions which are significant while solving Grammar related questions and also in exams

* 📱 **Responsive Design**

  * Designed to work across different screen sizes

---

## 🗂️ Vocabulary Topics
Each vocabulary card has 15 to 25 words depending upon German Levels.
The vocabulary section contains multiple topic-based categories, including:

* ✈️ Travel & Places
* 🍴 Food
* 👨‍👩‍👧 Family
* 🏠 Home
* 🎓 School & University
* 💼 Work
* 🛍️ Shopping
* 🚆 Transport
* 👤 Personal Vocabulary

The project is designed so that additional vocabulary topics and levels can be added easily in the future.

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap 5
* jQuery
* EJS

### Backend

* Node.js
* Express.js

### Development

* Git
* GitHub
* Visual Studio Code

---

## 🏗️ Project Structure

```text
Deutsch-Lernen/
│
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── ...
│
├── views/
│   ├── partials/
│   ├── index.ejs
│   ├── about.ejs
│   ├── vocabulary.ejs
│   ├── travel.ejs
│   └── ...
│
├── data/
│   ├── travel.js
│   ├── food.js
│   ├── family.js
│   ├── school.js
│   └── ...
│
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ How to Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/deutsch-lernen.git
```

### 2. Navigate to the project folder

```bash
cd deutsch-lernen
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node app.js
```

Or, if a development script is configured:

```bash
npm run dev
```

### 5. Open the application

Open your browser and visit:

```text
http://localhost:3000
```

---

## 🔌 API & Backend

The project uses **Express.js** to handle server-side routing and application logic.

Vocabulary data is stored in JavaScript data files and can be served through Express routes and API endpoints.

Example:

```javascript
app.get("/api/vocabulary", (req, res) => {
    res.json(germanData);
});
```

This allows the frontend to request German vocabulary data from the backend instead of keeping all learning logic directly inside the HTML.

---

## 🎯 Project Goals

The main goals of Deutsch Lernen are:

1. Make German learning less intimidating.
2. Provide a simple and beginner-friendly interface.
3. Organize vocabulary into useful real-world topics.
4. Make learning more interactive through quizzes and flashcards.
5. Track learning progress.
6. Build a foundation that can be expanded into a complete German learning platform.

---



## 🎨 Design Philosophy

The interface is designed around a warm, friendly and modern visual style rather than the appearance of a traditional textbook.

The idea behind the project is:

> **Learning German should feel like a hobby, not a chore.**

The design uses warm colors, interactive cards, animations and clear navigation to make the learning experience more engaging.

---

## 👨‍💻 Developer

**Arinjay Musale**

Computer Science Engineering Student

Interested in:

* Web Full-Stack Development
* Cloud Computing
* Language Technology
* German A2 Level

---

## 📌 Project Status

🚧 **Currently under development**

New features, learning content, backend functionality and improvements are being added progressively.

---

## ⭐ Support

If you find this project interesting, consider giving the repository a ⭐ on GitHub!

---

### 🇩🇪 Deutsch lernen. Schritt für Schritt.

**Learn German. One step at a time.**
