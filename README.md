
 Student Management System

A web-based Student Management System developed using Spring Boot that allows users to manage student details efficiently.  
The application follows MVC architecture and uses a responsive frontend built with HTML, CSS, and JavaScript.

---

✨ Key Highlights

- Full CRUD operations on student data
- Client-side search using JavaScript
- Clean separation of layers (Controller, Service, Repository)
- Easy to run locally

---

🧩 Functionalities

- Create new student records
- Display all students in a structured view
- Update existing student details
- Delete student records
- Search students by name, email, or course

---

 🛠️ Tech Stack

Backend
- Java
- Spring Boot
- Spring Data JPA
- Hibernate

Frontend
- HTML
- CSS
- JavaScript

Database
- MySQL 

Tools
- Maven
- Git
- GitHub
- IntelliJ IDEA

---

 📁 Folder Structure

```

src/main/resources
├── templates
│   ├── students.html
│   ├── create_student.html
│   └── edit_student.html
└── static
├── css
│   └── style.css
└── js
└── script.js

````

---

▶️ How to Run the Application

1. Clone the repository
```bash
git clone https://github.com/Babu-Shigihalli/Student-Management-System.git
````

2. Open the project in IntelliJ IDEA

3. Run the application

```bash
mvn spring-boot:run
```

4. Open browser and visit

```
http://localhost:8080/students
```

---

 🔎 Search Feature

The search functionality is implemented using JavaScript.
It filters student records dynamically on the client side without refreshing the page.

---

📱 Responsive UI

* Desktop view: table-based layout
* Mobile view: card-style layout
* Implemented using CSS media queries

---

🧠 What I Learned

* Building CRUD applications using Spring Boot
* Working with JPA and database integration
* Designing responsive web pages using CSS
* Integrating frontend with backend using Thymeleaf
* Version control using Git and GitHub

---
