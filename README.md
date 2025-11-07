# Student-Management-System
 Student management application

 
Student Management System
Overview
 A web-based CRUD application for managing student records (add, edit, delete, view). Built with Spring Boot, Java, JPA, and HTML. This project demonstrates full-stack web development skills, MVC architecture, and database integration.

Features:
*Add new student records
*Edit existing student details
*Delete student records
-View all student records in a tabular format
*Integrated with database using JPA for persistent storage
*MVC architecture with Spring Boot controllers, services, and repositories

Technologies Used:-
-Backend: Java, Spring Boot, JPA/Hibernate
-Frontend: HTML
-Database: H2 / MySQL (depending on configuration)
-Version Control: GitHub

Project Structure
src/main/java/net/javaguides/sms
├── controller   → Handles HTTP requests and routing
├── entity       → Defines the Student entity
├── repository   → JPA repository for database operations
├── service      → Business logic interfaces and implementation
└── StudentManagementSystemApplication.java → Main Spring Boot application

How to Run:
Clone the repository:
git clone https://github.com/Babu-Shigihalli/Student-Management-System.git
Open the project in your favorite IDE (IntelliJ IDEA, Eclipse, VS Code).
Configure database (H2 or MySQL) in application.properties.

Run the Spring Boot application:
mvn spring-boot:run

Open a web browser and go to:
http://localhost:8080/students

Future Enhancements:*
Add authentication and authorization for admin/student roles
Implement search/filter functionality
Enhance UI with CSS/Bootstrap
Add export to CSV/PDF feature
