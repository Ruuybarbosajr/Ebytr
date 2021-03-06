DROP DATABASE IF EXISTS Ebytr;

CREATE DATABASE Ebytr;

USE Ebytr;

CREATE TABLE Users (
  `id` VARCHAR(50) NOT NULL PRIMARY KEY,
  `first_name` VARCHAR(50) NOT NULL,
  `last_name` VARCHAR(50) NOT NULL,
  `admin` BOOLEAN NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(50) NOT NULL
) ENGINE=INNODB;

CREATE TABLE Tasks (
  `id` VARCHAR(50) NOT NULL PRIMARY KEY,
  `title` VARCHAR(50) NOT NULL,
  `status` INT NOT NULL,
  `user_id` VARCHAR(50) NOT NULL,
  `content` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  FOREIGN KEY (`user_id`) REFERENCES Users(`id`)
) ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;

INSERT INTO Users (`id`, `first_name`, `last_name`, `admin`, `email`, `password`)
VALUES ('IDÚNICO', 'Ruy', 'Junior', true, 'ruy.junior@mail.com', 'senhapadrao');