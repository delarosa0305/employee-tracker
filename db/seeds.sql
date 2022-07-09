INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal')

INSERT INTO role (title, salary, department_id)
VALUES 
    ('Salesperson', '$80,000', '1'),
    ('Sales Manager', '$190,000', '1'),
    ('Lead Engineer', '$200,000', '2'),
    ('Software Engineer', '$140,000', '2'),
    ('Accountant Manager', '$150,000', '3'),
    ('Accountant', '$100,000', '3'),
    ('Legal Team Lead', '$180,000', '4'),
    ('Lawyer', '$130,000', '4')

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('jaerin', 'kim', '1', '1'),
    ('qub', 'vud', '2', 'NULL'),
    ('tud', 'val', '3', '3'),
    ('duck', 'wellington', '4', 'NULL'),
    ('dick', 'jasom', '5', '5'),
    ('saq', 'fuol', '6', 'NULL'),
    ('tom', 'lip', '6', '7'),
    ('walter', 'shimmer', '6', 'NULL')