-- verify Foreign Key understanding holds up.

CREATE database employee_info_db;

USE employee_info_db;

CREATE TABLE department_table (
    
    id_department INT AUTO_INCREMENT,
    department_name VARCHAR(30);
    PRIMARY KEY (id_department);

);

CREATE TABLE role_table (
    
    id_role INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    PRIMARY KEY(id_role),
    FOREIGN KEY (id_department) REFERENCES department (id_department)

)


CREATE TABLE employee_table (
    
    id_employee INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    PRIMARY KEY(id_employee),
    FOREIGN KEY (id_role) REFERENCES department (id_role),
    -- questions about this manager id
    FOREIGN KEY (manager_id) REFERENCES employee_table(id_employee)

)