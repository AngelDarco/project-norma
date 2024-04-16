-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: fdb1034.awardspace.net
-- Generation Time: Apr 15, 2024 at 03:58 PM
-- Server version: 8.0.32
-- PHP Version: 8.1.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `4013044_darcodb`
--

-- --------------------------------------------------------

--
-- Table structure for table `productosnorma`
--

CREATE TABLE `productosnorma` (
  `id` int NOT NULL,
  `codepro` double DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `talla` varchar(100) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `colores` varchar(100) DEFAULT NULL,
  `genero` varchar(100) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `stock` varchar(100) DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `productosnorma`
--

INSERT INTO `productosnorma` (`id`, `codepro`, `nombre`, `talla`, `precio`, `colores`, `genero`, `descripcion`, `stock`, `imagen`) VALUES
(1, 50, 'polo', 's', 20, 'red,yellow,green', 'Hombre', 'polo para hombre', '3', 'imgs/46-Tmw9pyS.jpg'),
(2, 51, 'Conjunto', 'M', 0, 'orange,green,blue,yellow,white,pink,grey', 'Niño', 'Conjunto de algodón para niños', '6', 'imgs/47 - N9ZYDiC.jpg'),
(3, 52, 'Conjunto', 'm', 30, 'red', 'Niño', 'Conjunto de algodón en caja para bebes', '3', 'imgs/48 - cGcs2dI.jpg'),
(4, 49, 'Polo', '', 0, 'orange,green,red,blue,yellow,white,pink,black', 'Hombre', 'Polo manga corta para hombres', '6', 'imgs/45 - okzZmoq.jpg'),
(5, 48, 'Conjunto', '', 0, 'orange,green,red,blue,yellow,white,pink', 'Niño', 'Conjunto completo para bebes ', '6', 'imgs/44 - eEhlQYi.jpg'),
(6, 47, 'Polo', '', 0, 'orange,green,red,blue,yellow,white,black', 'Hombre', 'Polo tela simple para hombres', '6', 'imgs/43 - TGlZrCF.jpg'),
(7, 43, 'Polo', '', 0, 'red,green,blue,yellow,white,orange', 'Niño', 'Polo de el hombre araña para niño', '3', 'imgs/2 - 27dMpFf.jpg'),
(8, 44, 'Polo', '', 0, 'red,green,blue,yellow,white,orange', 'Niño', 'Polo manga corta para niños', '3', 'imgs/40 - asadSRU.jpg'),
(9, 45, 'Polo', '', 0, 'orange,green,red,blue,yellow', 'Niño', 'Polo de el hombre araña para niño', '3', 'imgs/41 - Go950Jf.jpg'),
(10, 46, 'Polo', '', 0, 'orange,green,red,blue,yellow,white,black', 'Niño', 'Polo minecraft para niño', '3', 'imgs/42 - ye120zQ.jpg'),
(11, 42, 'Polo', '', 0, 'red,green,blue,yellow', 'Niño', 'Polo manga corta para niño', '3', 'imgs/1 - 2KUmhxu.jpg'),
(12, 53, 'Conjunto', 'S', 0, 'orange,green,blue,yellow,white,pink,grey', 'Niño', 'Conjunto de algodón, en caja para bebes', '3', 'imgs/49 - 3PiZV7r.jpg'),
(13, 54, 'Conjunto', 'S', 0, 'orange,green,blue,yellow,white,pink,grey,purple', 'Niño', 'Conjunto de algodón para niñas', '3', 'imgs/50 - nJ5zgl0.jpg'),
(14, 55, 'Falda', '', 0, 'orange,green,blue,yellow,white,pink,grey', 'Mujer', 'Falda larga para mujer', '3', 'imgs/51 - IXOU5Wm.jpg'),
(15, 56, 'Ropa Interior', 'M', 0, 'orange,green,blue,yellow,white,pink,grey,red', 'Niño', 'Ropa interior para niña', '12', 'imgs/52 - BBPfzSA.jpg'),
(16, 57, 'Ropa interiror', '', 0, 'orange,green,blue,yellow,white,pink,grey,red', 'Niño', 'Ropa interior en taper para niña', '12', 'imgs/53 - Kszrs1s.jpg'),
(17, 58, 'Vestido', '', 0, 'orange,green,blue,yellow,white,pink,grey,red,purple', 'Mujer', 'Vestido cuerpo completo de mujer', '6', 'imgs/54 - SCx7lk4.jpg'),
(18, 59, 'Vestido', '', 0, 'orange,green,blue,yellow,white,pink,grey,red,purple', 'Mujer', 'Vestido tela simple para mujer', '6', 'imgs/55 - JP4dz6I.jpg'),
(19, 60, 'Sosten', '', 0, 'orange,green,blue,yellow,white,pink,grey,red,purple', 'Mujer', 'Sostenes para mujer', '12', 'imgs/56 - keUXSP8.jpg'),
(20, 61, 'Vestido', '', 0, 'orange,green,blue,yellow,white,pink,grey,red,purple', 'Mujer', 'Vestido cuerpo completo para mujer', '3', 'imgs/57 - 5ROJNLl.jpg'),
(21, 62, 'Ropa interior', '', 0, 'orange,green,blue,yellow,white,pink,grey,red,purple', 'Mujer', 'Ropa  interiror de algodón para mujer', '12', 'imgs/58 - xPpJRoW.jpg'),
(22, 63, 'Medias', '', 0, 'orange,green,blue,yellow,white,pink,grey,red,purple,black', 'Unisex', 'Medias tobilleras unisex', '12', 'imgs/60 - HJQs4zg.jpg'),
(23, 64, 'Blusa', '', 0, 'orange,green,blue,yellow,white,pink,grey,red,purple,black', 'Mujer', 'Blusa transparente para mujer', '3', 'imgs/61 - Cd5V90Q.jpg'),
(24, 65, 'Vestido', '', 0, 'orange,green,blue,yellow,white,pink,grey,red,purple,black', 'Mujer', 'Vestido cuerpo entero para mujer', '3', 'imgs/3 - RhVlcGT.jpg'),
(25, 66, 'Vestido', '', 0, 'orange,green,blue,white,pink,grey,red,purple,black', 'Mujer', 'Vestido piel de durazno para mujer', '3', 'imgs/4 - l92cb5x.jpg'),
(26, 67, 'Poncho', '', 0, 'orange,green,blue,white,pink,grey,red,purple,black,yellow', 'Niño', 'Poncho de lana para niña', '6', 'imgs/5 - nmYCmUu.jpg'),
(27, 68, 'Ropa interiro', '', 0, 'orange,green,blue,white,pink,grey,red,purple,black,yellow', 'Hombre', 'Ropa interior de algodón para hombre', '12', 'imgs/6 - o0Q83ZF.jpg'),
(28, 69, 'Ropa interior', '', 0, 'orange,green,blue,white,pink,grey,red,purple,black,yellow', 'Hombre', 'Boxer para hombres', '12', 'imgs/7 - ehbNU7t.jpg'),
(29, 70, 'Sosten', '', 0, 'green,blue,white,pink,grey,red,purple,black,yellow', 'Mujer', 'Sostenes para mujer', '12', 'imgs/8 - TEyJXuq.jpg'),
(30, 71, 'Poncho', '', 0, 'green,blue,white,pink,grey,red,purple,black,yellow,orange', 'Mujer', 'Poncho transparente para mujer', '3', 'imgs/9 - gaYdOOO.jpg'),
(31, 72, 'Poncho', '', 0, 'green,blue,white,pink,grey,red,purple,black', 'Niño', 'Poncho de lana para niña', '3', 'imgs/10 - 0YBpawy.jpg'),
(32, 73, 'Chompa', '', 0, 'green,blue,white,pink,grey,purple,black,yellow', 'Mujer', 'Chompa piel de durazno para mujer', '3', 'imgs/11 - 1WQtb1h.jpg'),
(33, 74, 'Polera', '', 0, 'green,blue,white,pink,grey,purple,black,yellow', 'Unisex', 'Poleras unisex de algodón', '6', 'imgs/12 - JO2psEO.jpg'),
(34, 75, 'Sostenes', '', 0, 'green,blue,white,pink,grey,purple,black,yellow,orange', 'Mujer', 'Sostenes de todas las tallas para mujer', '12', 'imgs/13 - tI7O8EW.jpg'),
(35, 76, 'Polo', '', 0, 'green,blue,white,pink,grey,purple,black,yellow,orange', 'Niño', 'Polo manga larga para niñas', '3', 'imgs/14 - ies7Iwu.jpg'),
(36, 77, 'Falda', '', 0, 'green,blue,white,pink,grey,purple,black,yellow,orange', 'Mujer', 'Vestido largo para mujer', '3', 'imgs/15 - 0aC7DXB.jpg'),
(37, 78, 'Ropa interior', '', 0, 'green,blue,white,pink,grey,black,yellow,orange,red', 'Hombre', 'Ropa interior para hombre, Boston, Supra, Stripper, mas', '12', 'imgs/16 - xskmkcK.jpg'),
(38, 79, 'Falda', '', 0, 'green,blue,white,pink,grey,black,yellow,orange,red', 'Mujer', 'Falda larga para mujer', '3', 'imgs/17 - STLevCZ.jpg'),
(39, 80, 'Conjunto', '', 0, 'green,blue,white,pink,grey,yellow,orange,red', 'Niño', 'Conjunto de algodón para niños', '6', 'imgs/18 - aaTnzHx.jpg'),
(40, 81, 'Polera', '', 0, 'green,blue,white,pink,grey,orange,red', 'Mujer', 'Polera piel de durazno para mujer', '3', 'imgs/19 - Y0z7YbW.jpg'),
(41, 82, 'Falda', '', 0, 'green,blue,white,pink,grey,orange,red', 'Mujer', 'Falda larga para mujer', '3', 'imgs/20 - NF2ZeEH.jpg'),
(42, 83, 'Medias', '', 0, 'green,blue,white,pink,grey,orange,red,yellow,purple', 'Niño', 'Medias para niños de lana, algodón, etc.', '12', 'imgs/21 - UvJrWhL.jpg'),
(43, 84, 'Falda', '', 0, 'green,blue,white,pink,grey,orange,red,yellow,purple', 'Mujer', 'Falda larga para mujer', '3', 'imgs/22 - m2Wzst8.jpg'),
(44, 85, 'Medias', '', 0, 'green,blue,white,pink,grey,orange,red,yellow,purple,black', 'Hombre', 'Medias de algodón para hombre', '12', 'imgs/23 - mWSDlTK.jpg'),
(45, 86, 'Polo', '', 0, 'green,blue,white,pink,grey,red,yellow,purple,black', 'Niño', 'Polo de tela para niña', '3', 'imgs/24 - JWjv84G.jpg'),
(46, 87, 'Polo', '', 0, 'green,blue,white,pink,grey,red,yellow,purple,black', 'Niño', 'Polo de algodón para niña', '3', 'imgs/25 - d6JyOHn.jpg'),
(47, 88, 'Short', '', 0, 'green,blue,pink,grey,red,yellow,purple,black', 'Hombre', 'Short para hombres', '6', 'imgs/26 - RKM9Hv3.jpg'),
(48, 89, 'Polo', '', 0, 'green,blue,pink,grey,red,yellow,purple,black,orange', 'Niño', 'Polo de algodón para niña', '6', 'imgs/27 - vrSgzKt.jpg'),
(49, 90, 'Falda', '', 0, 'green,blue,pink,grey,red,yellow,purple,black,orange', 'Mujer', 'Falda larga para mujer', '6', 'imgs/28 - NfvreyE.jpg'),
(50, 91, 'Polo', '', 0, 'green,pink,grey,red,yellow,purple,black,orange,white,blue', 'Niño', 'Polo de algodón manga larga para niña', '6', 'imgs/29 - 901XWRe.jpg'),
(51, 92, 'Polo', '', 0, 'green,pink,grey,red,yellow,purple,black,orange,white,blue', 'Niño', 'Polo de algodón para niña', '3', 'imgs/30 - lzbclId.jpg'),
(52, 93, 'polo', '', 0, 'green,pink,grey,red,yellow,purple,black,orange,white,blue', 'Niño', 'Polo de algodón para niña', '3', 'imgs/31 - IR88YXX.jpg'),
(53, 94, 'Chaleco', '', 0, 'green,pink,grey,red,yellow,purple,black,orange,white,blue', 'Mujer', 'Chaleco para dama', '3', 'imgs/32 - lYsLED8.jpg'),
(54, 95, 'Polo', '', 0, 'green,pink,grey,yellow,purple,black,orange,white,blue,red', 'Niño', 'Polo de algodón para niña', '6', 'imgs/33 - ssZKdcL.jpg'),
(55, 96, 'Polo', '', 0, 'green,pink,grey,yellow,purple,black,orange,white,blue,red', 'Niño', 'Polo tik tok para niña', '6', 'imgs/34 - ayiLJQE.jpg'),
(56, 97, 'Polo', '', 0, 'green,pink,grey,yellow,purple,black,orange,white,blue,red', 'Niño', 'Polo de tela para niña', '3', 'imgs/35 - nhTu29l.jpg'),
(57, 98, 'Polo', 's', 0, 'green,pink,grey,yellow,purple,black,orange,white,blue,red', 'Niño', 'Polo de algodón manga larga para niña', '3', 'imgs/37 - Bg3f1zq.jpg'),
(58, 99, 'Bividí', '', 0, 'green,pink,grey,yellow,purple,black,orange,white,blue,red', 'Mujer', 'Bividí de algodón para dama', '3', 'imgs/36 - KZiILA6.jpg'),
(59, 100, 'Polo', '', 0, 'green,pink,grey,yellow,purple,black,orange,white,blue,red', 'Niño', 'Polo manga larga de algodón', '3', 'imgs/38 - kbTdO9f.jpg'),
(60, 101, 'Polo', '', 0, 'green,pink,grey,purple,black,orange,white,blue,red', 'Niño', 'Polo cuello en V, de algodón para niño', '3', 'imgs/1 - 2KUmhxu.jpg'),
(61, 102, 'Polera', '', 0, 'green,pink,grey,purple,black,orange,white,blue,red,yellow', 'Unisex', 'Polera de algodón unisex', '6', 'imgs/39 - x6JZIWk.jpg'),
(62, 103, 'Polera', '', 0, 'green,pink,grey,purple,black,orange,white,blue,red,yellow', 'Unisex', 'Polera de algodón unisex', '6', 'imgs/39 - x6JZIWk.jpg'),
(63, 104, 'Pantalón', '', 0, 'green,pink,grey,purple,black,orange,white,blue,red,yellow', 'Niño', 'Pantalón de lana para niño', '6', 'imgs/62 - ln9r4Jg.jpg'),
(64, 105, 'Conjunto', '', 0, 'green,pink,grey,purple,black,blue,red,yellow', 'Niño', 'Conjunto completo de algodón para bebes', '3', 'imgs/63 - NJiUsg6.jpg'),
(65, 106, 'Pantalón', '', 0, 'green,pink,grey,purple,black,blue,red,yellow', 'Niño', 'pantalón de algodón, tik tok para niño', '6', 'imgs/64 - OtA6U10.jpg'),
(66, 107, 'Pantalón', '', 0, 'pink,grey,purple,blue,red,yellow,orange,green', 'Hombre', 'Pantalón de algodón para hombre ', '6', 'imgs/65 - czWB3Ef.jpg'),
(67, 108, 'Conjunto', '', 0, 'pink,grey,purple,blue,red,yellow,orange,green', 'Niño', 'Conjunto de algodón para niño', '6', 'imgs/66 - 4oEctVL.jpg'),
(68, 109, 'Pantalón', '', 0, 'pink,grey,purple,blue,red,yellow', 'Niño', 'Pantalón tik tok para niña', '3', 'imgs/67 - 9tEI1WZ.jpg'),
(69, 110, 'Pantalón', '', 0, 'pink,grey,purple,blue,red,yellow,black', 'Hombre', 'Pantalón corduroy para hombres', '3', 'imgs/68 - Csvkg9x.jpg'),
(70, 111, 'Pantalón', '', 0, 'pink,grey,purple,blue,red,yellow,black', 'Hombre', 'Pantalón corduroy para hombres', '3', 'imgs/68 - Csvkg9x.jpg'),
(71, 112, 'Pantalón', '', 0, 'grey,green,blue', 'Hombre', 'Pantalón de algodón para hombre', '6', 'imgs/69 - eQIplQJ.jpg'),
(72, 113, 'Pantalón', '', 0, 'grey,green,blue,red,orange', 'Niño', 'Pantalón de lana para niño', '3', 'imgs/70 - 3yoBx83.jpg'),
(73, 114, 'Pantalón', '', 0, 'grey,green,blue,red,orange,black', 'Hombre', 'Pantalón de algodón para hombre', '6', 'imgs/71 - kC3mSj0.jpg'),
(74, 115, 'Conjunto', '', 0, 'grey,green,blue,red,orange,black,pink,yellow', 'Niño', 'Conjunto de lana para bebes', '3', 'imgs/72 - Ocu8RY7.jpg'),
(75, 116, 'Pantalón', '', 0, 'green,blue,red,orange,black,pink,yellow', 'Hombre', 'Pantalón Jeans para Hombres', '6', 'imgs/73 - xGIp3Ig.jpg'),
(76, 117, 'Pantalón', '', 0, 'green,blue,red,orange,pink,yellow,grey', 'Hombre', 'Pantalón de lana para hombre', '3', 'imgs/74 - HFDwH1l.jpg'),
(77, 118, 'Pijama', '0', 0, 'green,blue,red,orange,pink,yellow,grey', 'Niño', 'Pijama de lana par niños', '3', 'imgs/75 - DuKgIdA.jpg'),
(78, 119, 'Pantalón', '', 0, 'green,blue,red,orange,pink,yellow,grey,black', 'Hombre', 'Pantalón Jeans para hombres', '6', 'imgs/76 - ELJdQ4K.jpg'),
(79, 120, 'Pantalón', '', 0, 'green,blue,red,orange,pink,yellow,grey,black,purple', 'Niño', 'Pantalón de algodón para niña', '3', 'imgs/77 - tBrMNQH.jpg'),
(80, 121, 'Pantalón', '', 0, 'green,blue,red,orange,pink,yellow,grey,black,purple,white', 'Niño', 'Pantalón de algodón para niña', '6', 'imgs/78 - fMG7H5G.jpg'),
(81, 122, 'Conjunto', '', 0, 'green,blue,red,orange,pink,yellow,grey,black,white', 'Niño', 'Conjunto de algodón', '3', 'imgs/79 - T7mzFtg.jpg'),
(82, 123, 'Conjunto', '', 0, 'green,blue,red,orange,pink,yellow,grey,black,white', 'Hombre', 'Conjunto de algodón', '3', 'imgs/80 - FER1vj9.jpg'),
(83, 124, 'Pijama', '', 0, 'green,blue,red,orange,pink,yellow,grey,black,white,purple', 'Niño', 'Pijama de lana para niños', '3', 'imgs/82 - ezm6TbJ.jpg'),
(84, 125, 'Pijama', '', 0, 'green,blue,red,orange,pink,yellow,grey,black,white,purple', 'Niño', 'Pijama de lana para niños', '3', 'imgs/83 - Djj882E.jpg'),
(85, 126, 'Polera', '', 0, 'green,blue,red,orange,pink,yellow,grey,black,purple', 'Hombre', 'Polera de algodón para hombre', '6', 'imgs/84 - n0qtyQ5.jpg'),
(86, 127, 'Conjunto', '', 0, 'green,blue,red,orange,pink,yellow,grey,purple', 'Niño', 'Conjunto de algodón para niño', '3', 'imgs/85 - QPzWJTT.jpg'),
(87, 128, 'Polera', '', 0, 'green,blue,red,orange,pink,yellow,purple,black', 'Mujer', 'Polera piel de durazno para dama', '6', 'imgs/86 - sWeek71.jpg'),
(88, 129, 'Polo', '', 0, 'green,blue,orange,pink,yellow,purple,grey,black', 'Hombre', 'polo cuello V para hombre', '6', 'imgs/87 - b6JJwiA.jpg'),
(89, 130, 'Chompa', '', 0, 'green,blue,orange,pink,yellow,purple,grey,black', 'Mujer', 'Chompa de lana para mujer', '3', 'imgs/88 - SbuFqc9.jpg'),
(90, 131, 'Polera', '', 0, 'green,blue,orange,pink,yellow,purple,grey,black', 'Hombre', 'Poleras de algodón para hombre', '3', 'imgs/89 - O0g3VEV.jpg'),
(91, 132, 'Polo', '', 0, 'green,blue,orange,pink,yellow,purple,grey,black,red', 'Hombre', 'Polo de algodón para hombre', '6', 'imgs/90 - xLvqCv1.jpg'),
(92, 133, 'Polo', '', 0, 'green,blue,orange,pink,yellow,purple,grey,black,red,white', 'Hombre', 'Polo cuello en V de algodón ', '6', 'imgs/91 - pzbHgLO.jpg'),
(93, 134, 'Polo', '', 0, 'green,blue,orange,pink,yellow,purple,grey,black,red,white', 'Hombre', 'Polo cuello en V, de algodón para hombre', '6', 'imgs/92 - PxNPC6t.jpg'),
(94, 135, 'polo', '', 0, 'green,blue,pink,yellow,purple,grey,black,red,white', 'Hombre', 'Polo cuello en V, de algodón para hombre', '6', 'imgs/93 - 1nKgzML.jpg'),
(95, 136, 'Polo', '0', 0, 'green,pink,yellow,purple,grey,black,red,white,blue', 'Hombre', 'Polo cuello en V, de algodón para hombre', '6', 'imgs/95 - IoM77LI.jpg'),
(96, 137, 'Polo', '', 0, 'green,pink,yellow,purple,grey,black,red,white,blue,orange', 'Hombre', 'Polo manga larga de algodón para hombre', '6', 'imgs/94 - FxRJBGC.jpg'),
(97, 138, 'Polo', '', 0, 'green,pink,yellow,purple,grey,black,red,white,blue,orange', 'Hombre', 'Polo de algodón para hombre', '6', 'imgs/96 - sA1wsnb.jpg'),
(98, 139, 'Casaca', '', 0, 'green,pink,yellow,purple,grey,black,red,white,blue,orange', 'Mujer', 'Casaca impermeable para damas', '6', 'imgs/97 - ehIEWXu.jpg'),
(99, 140, 'Casaca', '', 0, 'green,pink,yellow,purple,grey,black,red,white,blue,orange', 'Mujer', 'Casaca impermeable para damas', '6', 'imgs/98 - l6Ctgdg.jpg'),
(100, 141, 'Polo', '', 0, 'green,pink,yellow,purple,grey,black,red,white,blue,orange', 'Mujer', 'Polo de tela para damas', '6', 'imgs/99 - DO0gi6t.jpg'),
(101, 142, 'Polera', '', 0, 'green,pink,yellow,purple,grey,black,red,white,blue,orange', 'Mujer', 'Polera para damas', '3', 'imgs/100 - NJDzd2H.jpg'),
(102, 143, 'Polera', '', 0, 'green,pink,yellow,purple,grey,black,red,white,blue,orange', 'Mujer', 'Polera para damas', '3', 'imgs/101 - 4WjSXWa.jpg'),
(103, 144, 'Blusa', '', 0, 'green,yellow,purple,grey,black,red,white,blue,orange,pink', 'Mujer', 'Blusa para damas', '3', 'imgs/102 - 1lGPlMz.jpg'),
(104, 145, 'Polera', '', 0, 'green,yellow,purple,grey,black,red,white,blue,orange,pink', 'Mujer', 'Polera de algodón para damas', '6', 'imgs/103 - PbCZGws.jpg'),
(105, 146, 'Polo', '', 0, 'green,yellow,purple,grey,black,red,white,blue,orange,pink', 'Mujer', 'Polo de tela para damas', '6', 'imgs/104 - ysbAnFS.jpg'),
(106, 147, 'Polo', '', 0, 'yellow,purple,grey,black,pink,red,green,orange', 'Mujer', 'Polo de algodón para damas', '6', 'imgs/105 - mHwu9e5.jpg'),
(107, 148, 'Polo', '', 0, 'yellow,purple,grey,black,pink,red,green,orange,blue', 'Mujer', 'Polo de tela para damas', '3', 'imgs/106 - M271SXJ.jpg'),
(108, 149, 'Polo', '', 0, 'yellow,purple,grey,black,pink,red,green,orange,blue,white', 'Mujer', 'Polo de tela para damas', '6', 'imgs/107 - jRZvZ6e.jpg'),
(109, 150, 'Polo', '', 0, 'yellow,purple,grey,black,pink,green,orange,blue,white,red', 'Mujer', 'Polo de algodón para damas', '6', 'imgs/108 - Hm7It6e.jpg'),
(110, 151, 'Polera', '', 0, 'yellow,purple,grey,black,pink,green,orange,blue,white,red', 'Mujer', 'Polera de lana para damas', '6', 'imgs/109 - 7WVi2by.jpg'),
(111, 152, 'Polo', '', 0, 'yellow,purple,grey,black,pink,green,orange,blue,white,red', 'Mujer', 'Polo de tela para damas', '3', 'imgs/110 - FD4mDbG.jpg'),
(112, 153, 'Polo', '', 0, 'yellow,purple,grey,black,pink,green,orange,blue,white,red', 'Mujer', 'Polo de algodón, manga larga para damas', '6', 'imgs/111 - log0iji.jpg'),
(113, 154, 'Polo', '', 0, 'yellow,purple,grey,black,pink,green,orange,blue,white,red', 'Mujer', 'Polo de algodón, con cuello, para damas', '6', 'imgs/112 - ewNLlwr.jpg'),
(114, 155, 'Casaca', '', 0, 'yellow,purple,grey,black,pink,green,orange,blue,white,red', 'Mujer', 'Casaca de lana para damas', '6', 'imgs/113 - xVsKRKR.jpg'),
(115, 156, 'Casaca', '', 0, 'yellow,purple,grey,black,pink,green,orange,blue,white,red', 'Mujer', 'Casaca de tela para damas', '6', 'imgs/114 - pu1daOm.jpg'),
(116, 157, 'Polo', '', 0, 'yellow,purple,grey,black,pink,green,orange,blue,white,red', 'Mujer', 'Plo de tela, manga larga para damas', '6', 'imgs/115 - mhdSfmJ.jpg'),
(117, 158, 'Chompa', '', 0, 'yellow,purple,grey,black,pink,green,orange,blue,white,red', 'Mujer', 'Chompa de Hilo, para damas', '6', 'imgs/116 - woFUdLY.jpg'),
(118, 159, 'Polo', '', 0, 'yellow,purple,grey,black,pink,green,orange,blue,white,red', 'Mujer', 'Polo manga larga para damas', '3', 'imgs/117 - GWTA2zL.jpg'),
(119, 160, 'Casaca', '', 0, 'yellow,purple,grey,black,pink,green,orange,blue,white,red', 'Mujer', 'Casaca impermeable para damas', '6', 'imgs/118 - bYM5ngV.jpg'),
(120, 161, 'Casaca', '', 0, 'yellow,purple,grey,black,pink,green,orange,blue,red', 'Mujer', 'Casaca impermeable para damas', '6', 'imgs/119 - z8G9Ftp.jpg'),
(121, 162, 'Polo', '', 0, 'yellow,purple,grey,black,pink,green,blue,red,orange', '0', 'Polo de tela para damas', '3', 'imgs/120 - IRLEmCy.jpg'),
(122, 163, 'Polo', '', 0, 'yellow,purple,grey,black,pink,green,blue,red,orange', 'Mujer', 'Polo de tela para damas', '6', 'imgs/121 - ktzpGWi.jpg'),
(123, 164, 'Polera', '', 0, 'yellow,purple,grey,black,pink,green,blue,red,orange', 'Mujer', 'polera de algodón para damas', '6', 'imgs/122 - mmI9igu.jpg'),
(124, 165, 'Polo', '', 0, 'yellow,purple,grey,black,pink,green,blue,red,orange', 'Mujer', 'Polo de tela para damas', '6', 'imgs/123 - AJCfLfi.jpg'),
(125, 166, 'Casaca', '', 0, 'yellow,purple,grey,black,pink,green,blue,red,orange', 'Mujer', 'Casaca impermeable para damas', '6', 'imgs/124 - fincmA2.jpg'),
(126, 167, 'Vestido', '', 0, 'yellow,purple,grey,black,pink,green,blue,red,orange', 'Mujer', 'Vestido de tela para damas', '6', 'imgs/125 - PQwnrD2.jpg'),
(127, 168, 'Blusa', '', 0, 'yellow,purple,grey,black,pink,green,blue,red,orange', 'Mujer', 'Blusa de tela para damas', '6', 'imgs/126 - YH2nhDP.jpg'),
(128, 169, 'Blusa', '', 0, 'yellow,purple,grey,black,pink,green,blue,red,orange', 'Mujer', 'Blusa de tela para damas', '6', 'imgs/127 - 5WQrR3g.jpg'),
(129, 170, 'Chompa', '', 0, 'yellow,purple,grey,black,pink,green,blue,red,orange', 'Mujer', 'Chompa de lana para damas', '6', 'imgs/128 - HFaYRst.jpg'),
(130, 171, 'Poncho', '', 0, 'purple,grey,black,pink,green,blue,red,orange', 'Mujer', 'Poncho de hilo para damas', '6', 'imgs/129 - El4MXUt.jpg'),
(131, 172, 'chompa', '', 0, 'purple,grey,black,pink,green,blue,red,orange,yellow', 'Mujer', 'Chompa de lana para damas', '6', 'imgs/130 - tWNojFU.jpg'),
(132, 173, 'Polo', '', 0, 'purple,grey,black,pink,green,blue,red,orange,yellow', 'Hombre', 'Polo con cuello para hombres', '3', 'imgs/131 - i7EfIXU.jpg'),
(133, 174, 'Blusa', '', 0, 'purple,grey,black,green,blue,red,orange,yellow', '0', 'Blusa de tela para damas', '6', 'imgs/132 - ydLxGh2.jpg'),
(134, 175, 'Camisa', '', 0, 'purple,grey,black,green,blue,red,orange,yellow,white,pink', 'Mujer', 'Camisa de tela para damas', '6', 'imgs/133 - 8S68PiI.jpg'),
(135, 176, 'Polo', '', 0, 'purple,grey,black,green,blue,red,orange,yellow,white,pink', 'Hombre', 'Polo cuello en V para hombres', '6', 'imgs/134 - IBanulh.jpg'),
(136, 177, 'Polo', '', 0, 'purple,grey,black,green,blue,red,orange,yellow,white,pink', 'Mujer', 'Polo cuello en V para damas', '6', 'imgs/135 - EKi5xJx.jpg'),
(137, 178, 'Polo', '', 0, 'purple,grey,black,green,blue,red,orange,yellow,white,pink', 'Hombre', 'Polo manga larga de algodón para hombres', '6', 'imgs/136 - 45WG73o.jpg'),
(138, 179, 'Polo', '', 0, 'purple,grey,black,green,blue,red,orange,yellow,white,pink', 'Hombre', 'Polo de algodón para hombre', '9', 'imgs/137 - LO9rKQs.jpg'),
(139, 180, 'Polo', '', 0, 'purple,grey,black,green,blue,red,orange,yellow,white,pink', 'Hombre', 'Polo de algodón para hombre', '9', 'imgs/138 - Xrbq8bQ.jpg'),
(140, 181, 'Blusa', '', 0, 'purple,grey,black,green,blue,red,orange,yellow,white,pink', 'Mujer', 'Blusa de tela para damas', '6', 'imgs/139 - C6av4or.jpg'),
(141, 182, 'Polo', '', 0, 'purple,grey,black,green,blue,red,orange,yellow,white,pink', 'Mujer', 'polo biscosa nacional para damas', '6', 'imgs/140 - 06uL754.jpg'),
(142, 183, 'Polo', '', 0, 'purple,grey,black,green,blue,red,orange,yellow,white,pink', 'Mujer', 'Polo biscosa nacional para damas', '9', 'imgs/141 - obz24yA.jpg'),
(143, 184, 'Poncho', '', 0, 'purple,grey,black,green,blue,red,orange,yellow,white,pink', 'Mujer', 'Poncho de hilo para damas', '9', 'imgs/142 - J0goouu.jpg'),
(144, 185, 'Polo', '', 0, 'purple,grey,black,green,blue,red,orange,yellow,white,pink', 'Mujer', 'Polo de algodón para damas', '6', 'imgs/143 - trUMPe7.jpg'),
(145, 186, 'Camisa', '', 0, 'purple,grey,black,green,blue,red,orange,yellow,white,pink', 'Mujer', 'Camisa de tela para damas', '6', 'imgs/144 - RsbKqaW.jpg'),
(146, 187, 'Camisa', '', 0, 'purple,grey,black,green,blue,red,orange,white,pink', 'Mujer', 'Camisa de tela para damas', '6', 'imgs/145 - 8s4X35C.jpg'),
(147, 188, 'Blusa', '', 0, 'purple,grey,black,green,blue,red,orange,white,pink,yellow', 'Mujer', 'Blusa de algodón para damas', '6', 'imgs/146 - qZLTt8T.jpg'),
(148, 189, 'Blusa', '', 0, 'purple,grey,black,green,blue,red,white,pink,yellow', 'Mujer', 'Blusa de tela para damas', '6', 'imgs/147 - 1l34IJM.jpg'),
(149, 190, 'Blusa', '', 0, 'purple,grey,black,green,blue,red,white,pink,yellow,orange', 'Mujer', 'Blusa de algodón para damas', '6', 'imgs/148 - wcs6Nys.jpg'),
(150, 191, 'Pantalon', '', 0, 'purple,grey,black,green,blue,red,white,yellow,orange', 'Hombre', 'Pantalon de algodón para hombre', '6', 'imgs/81 - A9ynWPc.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `registrosnorma`
--

CREATE TABLE `registrosnorma` (
  `id` int NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `lastname` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `registrosnorma`
--

INSERT INTO `registrosnorma` (`id`, `name`, `lastname`, `email`, `password`) VALUES
(1, 'Angel', 'GPEME', 'angel@gmail.com', '12345'),
(2, 'Angel', 'GPEME', 'usuariom9224@gmail.com', '12345');

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT for table `registrosnorma`
--
ALTER TABLE `registrosnorma`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
