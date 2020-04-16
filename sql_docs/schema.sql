
DROP DATABASE IF EXISTS employee_info_db;
CREATE database employee_info_db;

USE employee_info_db;

CREATE TABLE department_table (
    
    id_department INT AUTO_INCREMENT,
    department_name VARCHAR(30),
    PRIMARY KEY (id_department)
);

CREATE TABLE role_table (
    
    id_role INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id_role),
    FOREIGN KEY (department_id) REFERENCES department_table (id_department)
);

CREATE TABLE employee_table (
    id_employee INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT, 
    PRIMARY KEY(id_employee),
    FOREIGN KEY (role_id) REFERENCES role_table (id_role),
    FOREIGN KEY (manager_id) REFERENCES employee_table (id_employee)
);