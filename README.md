📚 Student Management System

A simple and efficient web-based CRUD application for managing student records.
Built using Spring Boot, Java, JPA/Hibernate, and HTML.
This project demonstrates full-stack development, MVC architecture, and database integration.

🚀 Features

➕ Add new student records

✏️ Edit existing student details

❌ Delete student records

👀 View all students in a clean table format

🗄️ JPA/Hibernate for persistent database storage

🧩 MVC architecture using Controllers, Services & Repositories

🛠️ Technologies Used

Backend

Java

Spring Boot

Spring MVC

JPA / Hibernate

Frontend

HTML (can be extended with CSS/Bootstrap)

Database

H2 (default) / MySQL (optional configuration)

Tools

Maven

Git & GitHub

📁 Project Structure
src/main/java/net/javaguides/sms
│
├── controller        # Handles HTTP requests
├── entity            # Student entity class
├── repository        # JPA repository layer
├── service           # Business logic layer
└── StudentManagementSystemApplication.java   # Main Spring Boot class

▶️ How to Run the Project
1️⃣ Clone the repository
git clone https://github.com/Babu-Shigihalli/Student-Management-System.git

2️⃣ Open in your IDE

Use IntelliJ IDEA, Eclipse, or VS Code.

3️⃣ Configure the database

Open src/main/resources/application.properties and set:

For H2 (default):

spring.datasource.url=jdbc:h2:mem:students
spring.jpa.hibernate.ddl-auto=update


For MySQL (optional):

spring.datasource.url=jdbc:mysql://localhost:3306/sms
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update

4️⃣ Run the application
mvn spring-boot:run

5️⃣ Open in browser

👉 http://localhost:8080/students

🌟 Future Enhancements

🔐 Add admin & student authentication/authorization

🔎 Search & filter functionality

🎨 Improve UI using CSS/Bootstrap

📄 Export student list to CSV/PDF

📱 Make UI mobile-responsive
