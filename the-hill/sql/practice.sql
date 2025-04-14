-- Author: Masy Jordan
-- Date: 2025-09-04
-- Description: This script creates a database for an address book application.

-- Create The database
CREATE DATABASE IF NOT EXISTS address_book;
-- Use it
USE address_book;


--create the table
-- Table: utilisateurs
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    create_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- INSERT INTO in the table contacts
INSERT INTO contacts(first_name, last_name, email) VALUES('Masy','Jordan','masyjordan@gmail.com');
INSERT INTO contacts(first_name, last_name, email) VALUES('Masy','Jordan2','masyjordan2@gmail.com');
INSERT INTO contacts(first_name, last_name, email) VALUES('Masy','Jordan3','masyjordan3@gmail.com');
INSERT INTO contacts(first_name, last_name, email) VALUES('Masy','Jordan4','masyjordan4@gmail.com');



-- SELECT * FROM contacts; => affiche toutes les données de la table
SELECT * FROM contacts;

--UPDATE TABLE contacts

UPDATE contacts
SET email = "jaiChangeTonEmail@jeTaiBienEu.com"
WHERE id = 2;


UPDATE contacts
SET last_name = "Smith"
WHERE id = 3;

-- DELETE FROM contacts 
DELETE FROM contacts
WHERE last_name = "Smith";

INSERT INTO contacts(first_name, last_name, email) VALUES("Jonathan","Smith","jonathanSmith@gmail.com");

-- ALTER TABLE contacts
ALTER TABLE contacts
ADD COLUMN phone_number VARCHAR(15) AFTER email;

--Update with phone_number : 
UPDATE contacts 
SET phone_number = '123-456-7890' 
WHERE email = 'masyjordan@gmail.com';

UPDATE contacts 
SET phone_number = '234-567-8901' 
WHERE email = 'jaiChangeTonEmail@jeTaiBienEu.com ';

UPDATE contacts 
SET phone_number = '345-678-9012' 
WHERE email = 'masyjordan4@gmail.com';

UPDATE contacts 
SET phone_number = '456-789-0123' 
WHERE email = 'jonathanSmith@gmail.com';



-- library_system 

CREATE DATABASE IF NOT EXISTS library_system;
USE library_system;


--CREATE TABLE books
CREATE TABLE books(
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    author VARCHAR(100) NOT NULL,
    publication_year YEAR NOT NULL,
    genre VARCHAR(50) DEFAULT 'Unknown',
    available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--INSERT INTO books
ALTER TABLE books
MODIFY COLUMN publication_year INT;

-- Ensuite, tu peux insérer les livres comme suit :

INSERT INTO books (title, author, publication_year, genre, available)
VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Fiction', TRUE),
('To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction', TRUE),
('1984', 'George Orwell', 1949, 'Dystopian', TRUE),
('Moby-Dick', 'Herman Melville', 1851, 'Adventure', FALSE),
('Pride and Prejudice', 'Jane Austen', 1813, 'Romance', TRUE),
('The Catcher in the Rye', 'J.D. Salinger', 1951, 'Fiction', TRUE),
('Brave New World', 'Aldous Huxley', 1932, 'Dystopian', FALSE),
('The Hobbit', 'J.R.R. Tolkien', 1937, 'Fantasy', TRUE),
('The Lord of the Rings', 'J.R.R. Tolkien', 1954, 'Fantasy', FALSE),
('The Chronicles of Narnia', 'C.S. Lewis', 1950, 'Fantasy', TRUE),
('The Picture of Dorian Gray', 'Oscar Wilde', 1890, 'Gothic', TRUE),
('War and Peace', 'Leo Tolstoy', 1869, 'Historical Fiction', TRUE),
('The Odyssey', 'Homer', -800, 'Epic Poetry', TRUE),
('The Catcher in the Rye', 'J.D. Salinger', 1951, 'Fiction', FALSE),
('The Fault in Our Stars', 'John Green', 2012, 'Romance', TRUE),
('The Shining', 'Stephen King', 1977, 'Horror', TRUE),
('Crime and Punishment', 'Fyodor Dostoevsky', 1866, 'Psychological Fiction', FALSE),
('The Alchemist', 'Paulo Coelho', 1988, 'Adventure', TRUE),
('Harry Potter and the Sorcerer''s Stone', 'J.K. Rowling', 1997, 'Fantasy', TRUE),
('The Hunger Games', 'Suzanne Collins', 2008, 'Dystopian', FALSE);

--Update books
UPDATE books
SET available = FALSE
WHERE author = 'George Orwell';

--DELETE FROM books 
DELETE FROM books
WHERE publication_year < 1900;


--RE-INSERT data with year changed 
INSERT INTO books (title, author, publication_year, genre, available)
VALUES
('Moby-Dick', 'Herman Melville', 1906, 'Adventure', FALSE),
('Pride and Prejudice', 'Jane Austen', 1906, 'Romance', TRUE),
('The Picture of Dorian Gray', 'Oscar Wilde', 1906, 'Gothic', TRUE),
('War and Peace', 'Leo Tolstoy', 1906, 'Historical Fiction', TRUE),
('The Odyssey', 'Homer', 1906, 'Epic Poetry', TRUE),
('Crime and Punishment', 'Fyodor Dostoevsky', 1906, 'Psychological Fiction', FALSE)




--EXTRA 1 : 
ALTER TABLE books
ADD COLUMN price DECIMAL(10, 4) AFTER available

UPDATE books
set price = 9.99
WHERE available = TRUE

UPDATE books
set price = 9.99
WHERE available = FALSE

--  rename column 
ALTER TABLE books
RENAME COLUMN available to is_available;

-- extra 3 

CREATE TABLE authors(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

ALTER TABLE books
ADD COLUMN author_id INT AFTER genre;


UPDATE books
JOIN author AS a ON books.author = a.name
SET books.author_id = a.id;

SELECT books.author_id
FROM authors
    INNER JOIN books
        ON authors.id = books.author_id;
-- TRUNCATE TABLE nom_de_table; => efface toutes les données de la table