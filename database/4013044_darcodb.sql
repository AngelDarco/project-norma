-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 18, 2024 at 09:12 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `darcodb`
--

-- --------------------------------------------------------

--
-- Table structure for table `productosnorma`
--

CREATE TABLE `productosnorma` (
  `id` int(11) NOT NULL,
  `codepro` double DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `talla` varchar(100) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `colores` varchar(100) DEFAULT NULL,
  `genero` varchar(100) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `stock` varchar(100) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `productosnorma`
--

INSERT INTO `productosnorma` (`id`, `codepro`, `nombre`, `talla`, `precio`, `colores`, `genero`, `descripcion`, `stock`, `imagen`) VALUES
(211, 12345, 'Shirt', 'M', 19.99, 'Blue, White', 'Woman', 'Comfortable cotton shirt perfect for everyday wear.', '50', './assets/1.jpg'),
(212, 67890, 'Hoodie', 'L', 29.99, 'Black, Gray', 'Woman', 'Warm hoodie with a cozy fleece lining.', '30', './assets/2.jpg'),
(213, 24680, 'Dress', '32', 39.99, 'Blue', 'Woman', 'Classic denim jeans with a relaxed fit.', '20', './assets/3.jpg'),
(214, 13579, 'Dress', '9', 49.99, 'Black, Red', 'kids', 'Stylish Dress suitable for casual outings.', '40', './assets/4.jpg'),
(215, 97531, 'Dress', 'S', 59.99, 'Pink, White', 'kids', 'Elegant dress perfect for special occasions.', '15', './assets/5.jpg'),
(216, 80246, 'Shorts', 'XL', 24.99, 'Blue, Green', 'Woman', 'Lightweight shorts ideal for outdoor activities.', '25', './assets/6.jpg'),
(217, 36172, 'Mini-dress', 'M', 79.99, 'Black', 'Kids', 'Stylish mini-dress with a water-resistant exterior.', '10', './assets/7.jpg'),
(218, 51972, 'Shoes', 'L', 34.99, 'Red, Black', 'Woman', 'Flowy shoes perfect for a night out.', '20', './assets/8.jpg'),
(219, 24781, 'Heels', 'XS', 14.99, 'White', 'Woman', 'Basic cotton heels available in various sizes.', '50', './assets/9.jpg'),
(220, 84920, 'Leggings', 'M', 29.99, 'Black', 'Woman', 'Stretchy leggings for workouts or lounging.', '30', './assets/10.jpg'),
(221, 38592, 'Jacket', 'L', 39.99, 'Blue, Gray', 'Man', 'Spacious jacket with multiple compartments.', '25', './assets/11.jpg'),
(222, 62981, 'Dress', 'S', 19.99, 'Black, Brown', 'Woman', 'Trendy dress with a classic fit.', '40', './assets/12.jpg'),
(223, 17593, 'Sweater', 'S', 49.99, 'Gray', 'Woman', 'Cozy sweater perfect for chilly days.', '20', './assets/13.jpg'),
(224, 30847, 'Dress', 'M', 9.99, 'Red, Blue', 'Woman', 'Stylish dress with a classic fit.', '50', './assets/14.jpg'),
(225, 40281, 'Jacket', 'M', 59.99, 'Silver', 'Unisex', 'Elegant wristwatch with a stainless steel strap.', '30', './assets/15.jpg'),
(226, 91827, 'Heels', 'M', 14.99, 'Black', 'Woman', 'Warm heels with touchscreen-compatible fingertips.', '40', './assets/16.jpg'),
(227, 63729, 'Scarf', 'S', 19.99, 'Green', 'Woman', 'Soft scarf perfect for layering.', '35', './assets/17.jpg'),
(228, 54321, 'Boots', '10', 89.99, 'Brown', 'Woman', 'Sturdy leather boots suitable for hiking.', '15', './assets/18.jpg'),
(229, 20983, 'Mini-dress', 'L', 24.99, 'Brown, Black', 'Man', 'Classic mini-dress with a comfortable fit.', '30', './assets/19.jpg'),
(230, 72891, 'Jacket', 'L', 29.99, 'Brown', 'Man', 'Compact jacket with multiple card slots.', '40', './assets/20.jpg'),
(231, 61582, 'Mini-dress', 'L', 12.99, 'Gold', 'Woman', 'Elegant mini-dress to add a touch of sparkle to any outfit.', '50', './assets/21.jpg'),
(232, 12309, 'Dress', 'M', 29.99, 'Silver', 'Woman', 'Stylish dress with a minimalist design.', '30', './assets/22.jpg'),
(233, 80934, 'Jacket', 'S', 39.99, 'Gold', 'Man', 'Delicate jacket perfect for layering.', '25', './assets/23.jpg'),
(234, 20394, 'Mini-dress', 'L', 49.99, 'Black, Red', 'kids', 'Durable mini-dress with padded straps for comfort.', '20', './assets/24.jpg'),
(235, 70182, 'Dress', '8', 59.99, 'White', 'Woman', 'Fashionable dress with a chunky sole.', '15', './assets/25.jpg'),
(236, 50673, 'Shoes', 'S', 69.99, 'Green', 'Man', 'Lightweight shoes perfect for spring.', '25', './assets/26.jpg'),
(237, 30981, 'Scarf', 'M', 14.99, 'Blue', 'Man', 'Patterned scarf to add a pop of color to your outfit.', '30', './assets/27.jpg'),
(238, 81937, 'Jacket', 'M', 69.99, 'Black', 'Man', 'Sophisticated black jacket for formal events.', '20', './assets/28.jpg'),
(239, 91827, 'Jacket', 'M', 14.99, 'Black', 'Man', 'Warm jacket with touchscreen-compatible fingertips.', '40', './assets/29.jpg'),
(240, 63729, 'Jacket', 'S', 19.99, 'Green', 'Man', 'Soft scarf perfect for layering.', '35', './assets/30.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `registrosnorma`
--

CREATE TABLE `registrosnorma` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `lastname` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `registrosnorma`
--

INSERT INTO `registrosnorma` (`id`, `name`, `lastname`, `email`, `password`) VALUES
(1, 'Angel', 'GPEME', 'angel@gmail.com', '12345'),
(2, 'Angel', 'GPEME', 'usuariom9224@gmail.com', '12345'),
(3, 'Angelito', 'darco', 'darco@gmail.com', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `productosnorma`
--
ALTER TABLE `productosnorma`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registrosnorma`
--
ALTER TABLE `registrosnorma`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `productosnorma`
--
ALTER TABLE `productosnorma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=241;

--
-- AUTO_INCREMENT for table `registrosnorma`
--
ALTER TABLE `registrosnorma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
