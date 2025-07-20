CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);
INSERT INTO users (firstname, lastname, email, password)
VALUES ('john', 'doe', 'john@gmail.com', 123),
  ('mona', 'doe', 'mona@gmail.com', 456),
  ('soona', 'doe', 'soona@gmail.com', 678);
select *
from users;