CREATE DATABASE  IF NOT EXISTS `checkout_description_db`
USE `checkout_description_db`;
DROP TABLE IF EXISTS `products`;
 
CREATE TABLE `products` (
  `id` int(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` float NOT NULL,
  `materials` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `reviews` int(11) DEFAULT NULL,
)