CREATE database employee_info_db;

USE employee_info_db;

CREATE TABLE department_table (
    
    id_department INT AUTO_INCREMENT,
    department_name VARCHAR(30),
    PRIMARY KEY (id_department)
);

CREATE TABLE role_table (
    
    id_role INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    PRIMARY KEY(id_role),
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department (id_department)
);

CREATE TABLE employee_table (
    id_employee INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    PRIMARY KEY(id_employee),
    role_id INT,
    manager_id INT, 
    FOREIGN KEY (role_id) REFERENCES role_table (id_role),
    FOREIGN KEY (manager_id) REFERENCES employee_table (id_employee)
);