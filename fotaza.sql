-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-03-2023 a las 05:52:01
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fotaza`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `idPhoto` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `description` varchar(400) NOT NULL,
  `shippingDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comment`
--

INSERT INTO `comment` (`id`, `idPhoto`, `idUser`, `description`, `shippingDate`) VALUES
(142, 215, 22, 'me gusta mucho esa foto!', '2023-03-26'),
(143, 215, 22, 'gran marca canon', '2023-03-26'),
(144, 208, 21, 'genialidad de tigre', '2023-03-26'),
(145, 208, 21, 'chulada de foto :0', '2023-03-26'),
(146, 204, 20, 'en que idioma programas?', '2023-03-26'),
(147, 204, 20, 'perfecta foto! justo ayer empeze en este mundillo', '2023-03-26'),
(148, 209, 20, 'jajajajajja que gracioso xd', '2023-03-26'),
(149, 214, 19, 'que gran foto por favor', '2023-03-26'),
(150, 214, 18, 'increible la capacidad de sacar la foto en ese preciso instante jajaja quien pudiera', '2023-03-26'),
(151, 214, 18, 'flama fotograma', '2023-03-26'),
(152, 214, 18, 'de que aerolinea sera?', '2023-03-26'),
(153, 204, 17, 'jajajaj sos puro show', '2023-03-26'),
(154, 214, 17, ':0 incredible', '2023-03-26'),
(155, 214, 16, 'pfff yo saco mejore fotox', '2023-03-26'),
(156, 214, 16, 'aca el unico que vuela es messi', '2023-03-26'),
(157, 214, 16, 'aver', '2023-03-26'),
(158, 210, 20, 'wooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooow', '2023-03-26'),
(159, 209, 20, 'si xd', '2023-03-26'),
(160, 217, 17, 'fua', '2023-03-26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `label`
--

CREATE TABLE `label` (
  `id` int(11) NOT NULL,
  `idPhoto` int(11) NOT NULL,
  `keyword` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `label`
--

INSERT INTO `label` (`id`, `idPhoto`, `keyword`) VALUES
(428, 188, 'azul'),
(429, 188, 'flor'),
(430, 188, 'fantasticas'),
(431, 189, 'jardin'),
(432, 189, 'flores'),
(433, 189, 'bonito'),
(434, 190, 'flor'),
(435, 190, 'flores'),
(436, 190, 'naturaleza'),
(437, 191, 'flor'),
(438, 191, 'bonito'),
(439, 191, 'naturaleza'),
(440, 192, 'girasol'),
(441, 192, 'flor'),
(442, 192, 'lindas'),
(443, 193, 'porche'),
(444, 193, 'autazo'),
(445, 193, 'carrera'),
(449, 195, 'auto'),
(450, 195, 'carrera'),
(451, 195, 'sport'),
(452, 196, 'auto'),
(453, 196, 'carrera'),
(454, 196, 'lluvia'),
(455, 197, 'autazo'),
(456, 197, 'carrera'),
(457, 197, 'luz'),
(458, 198, 'hermosas'),
(459, 198, 'semi permanentes'),
(460, 198, 'semis'),
(461, 199, 'diseño'),
(462, 199, 'diseñador'),
(463, 199, 'semis'),
(464, 200, 'semis'),
(465, 200, 'trend'),
(466, 200, 'ideas'),
(467, 201, 'uña'),
(468, 201, 'mujeres'),
(469, 201, 'ellas'),
(470, 202, 'semipermanentes'),
(471, 202, 'divina'),
(472, 202, 'ellas'),
(473, 203, 'programar'),
(474, 203, 'paz'),
(475, 203, 'furia'),
(476, 204, 'paz'),
(477, 204, 'flama'),
(478, 204, 'codear'),
(479, 205, 'codear'),
(480, 205, 'mio'),
(481, 205, 'tuyo'),
(482, 206, 'codear'),
(483, 206, 'compu'),
(484, 206, 'if else'),
(485, 207, 'adorable'),
(486, 207, 'naturaleza'),
(487, 207, 'lindura'),
(488, 208, 'naturaleza'),
(489, 208, 'belleza'),
(490, 208, 'arte'),
(491, 209, 'arte'),
(492, 209, 'anim'),
(493, 209, 'bellez'),
(494, 210, 'magistral'),
(495, 210, 'animales'),
(496, 210, 'lindura'),
(497, 211, 'galeria'),
(498, 211, 'iconico'),
(499, 211, 'clasicos'),
(500, 212, 'catedral'),
(501, 212, 'burgos'),
(502, 212, 'obra maestra'),
(503, 213, 'tool'),
(504, 213, 'bag'),
(505, 213, 'life'),
(506, 214, 'fotografia'),
(507, 214, 'momento'),
(508, 214, 'instante'),
(509, 215, 'arte'),
(510, 215, 'naranja'),
(511, 215, 'picture'),
(512, 216, 'arte'),
(513, 216, 'atardecer'),
(514, 216, 'naranja'),
(515, 217, 'españa'),
(516, 217, 'fotografo'),
(517, 217, 'mostrar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `description` varchar(200) NOT NULL,
  `idUserEmitting` int(11) NOT NULL,
  `idUserReceiver` int(11) NOT NULL,
  `message` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `message`
--

INSERT INTO `message` (`id`, `description`, `idUserEmitting`, `idUserReceiver`, `message`) VALUES
(37, '74076440-cb7f-11ed-8d2c-ff764fbc75d5Un fotÃ³grafo espaÃ±ol nos muestra cÃ³mo las cosas ordinarias pueden transformar una foto, y es por ello que quisimos compartirlas.jpg', 20, 16, 'mira, parece que sale de un portal jajaja!!!!!'),
(38, '42bf93d0-cb7f-11ed-8d2c-ff764fbc75d521 FotografÃ­as tomadas en el momento preciso.jpg', 20, 17, 'o.o\''),
(39, '5603fb20-cb7f-11ed-8d2c-ff764fbc75d5Crazy Camera Gear.jpg', 19, 19, 'me lo autoenvio'),
(40, '74076440-cb7f-11ed-8d2c-ff764fbc75d5Un fotÃ³grafo espaÃ±ol nos muestra cÃ³mo las cosas ordinarias pueden transformar una foto, y es por ello que quisimos compartirlas.jpg', 17, 19, 'mirap, te gusta=?????'),
(41, '664cd5b0-cb7f-11ed-8d2c-ff764fbc75d5Un fotÃ³grafo espaÃ±ol nos muestra cÃ³mo las cosas ordinarias pueden transformar una foto, y es por ello que quisimos compartirlas (1).jpg', 16, 19, 'ags que fea foto vistE?'),
(42, '42bf93d0-cb7f-11ed-8d2c-ff764fbc75d521 FotografÃ­as tomadas en el momento preciso.jpg', 19, 19, 'para ver mejor despeus'),
(43, 'c7e80bd0-cb7c-11ed-8d2c-ff764fbc75d5Coding from my studio.jpg', 18, 19, 'en que empresa trabajas estimado¿'),
(44, 'b6816530-cb7c-11ed-8d2c-ff764fbc75d5Apple 15in MacBook Pro, Retina, Touch Bar, 2_9GHz Intel Core i7 Quad Core, 16GB RAM, 512GB SSD, Space Gray, MPTT2LL_A (Renewed).jpg', 20, 19, '1000 euros ¬¬? '),
(45, 'efdfd3c0-cb7c-11ed-8d2c-ff764fbc75d5Having a 6-foot to 10-foot usb cable is very important to many people_.jpg', 21, 19, 'yo tambien tenfo una computadora tacil, son las mejores!'),
(46, 'c7e80bd0-cb7c-11ed-8d2c-ff764fbc75d5Coding from my studio.jpg', 21, 19, 'aeffgegesgwsege'),
(47, 'b6816530-cb7c-11ed-8d2c-ff764fbc75d5Apple 15in MacBook Pro, Retina, Touch Bar, 2_9GHz Intel Core i7 Quad Core, 16GB RAM, 512GB SSD, Space Gray, MPTT2LL_A (Renewed).jpg', 22, 19, 'quiero esos airpodssss');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `msgbuyphoto`
--

CREATE TABLE `msgbuyphoto` (
  `id` int(11) NOT NULL,
  `idPhoto` int(11) NOT NULL,
  `idOwner` int(11) NOT NULL,
  `description` varchar(500) NOT NULL,
  `idUserEmitting` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `msgbuyphoto`
--

INSERT INTO `msgbuyphoto` (`id`, `idPhoto`, `idOwner`, `description`, `idUserEmitting`) VALUES
(14, 205, 19, 'Me interesa mucho...', 20),
(15, 195, 17, 'que tal, me interesa!', 20),
(16, 205, 19, 'Hola que tal, me parece que esa foto la vi en otro lado... acaso fue robada? :o', 18),
(17, 205, 19, 'ajjaja ke grasiozo, lastima que tiene esa marca de agua tan molesta! te la compro.... te ofrezco 10pe', 17),
(18, 205, 19, 'me das', 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `photo`
--

CREATE TABLE `photo` (
  `id` int(11) NOT NULL,
  `idOwner` int(11) NOT NULL,
  `privacy` varchar(20) NOT NULL,
  `title` varchar(100) NOT NULL,
  `category` varchar(30) NOT NULL,
  `creationDate` date NOT NULL,
  `rightOfUse` varchar(20) NOT NULL,
  `image` varchar(200) NOT NULL,
  `imageWatermark` varchar(200) NOT NULL,
  `imageWatermarkFotaza` varchar(200) NOT NULL,
  `format` varchar(10) NOT NULL,
  `resolution` int(11) NOT NULL,
  `numberOfStars` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `photo`
--

INSERT INTO `photo` (`id`, `idOwner`, `privacy`, `title`, `category`, `creationDate`, `rightOfUse`, `image`, `imageWatermark`, `imageWatermarkFotaza`, `format`, `resolution`, `numberOfStars`) VALUES
(188, 16, 'protected', 'flor azul', 'artistica', '2023-03-26', 'Copyleft', 'acd5fda0-cb79-11ed-8d2c-ff764fbc75d5Flores azuis fantÃ¡sticas - Blog da Mari Calegari.jpg', '', '', 'image/jpeg', 53519, 5),
(189, 16, 'public', 'flores jardin', 'publicitaria', '2023-03-26', 'Copyleft', 'f2f42000-cb79-11ed-8d2c-ff764fbc75d5Flores para Jardim_ 50 EspÃ©cies e +100 Fotos para se Inspirar.jpg', '', 'f3df1c40-cb79-11ed-8d2c-ff764fbc75d5Flores para Jardim_ 50 EspÃ©cies e +100 Fotos para se Inspirar.jpg', 'image/jpeg', 84203, 0),
(190, 16, 'private', 'flores', 'artistica', '2023-03-26', 'Copyright', '13c59d40-cb7a-11ed-8d2c-ff764fbc75d517 Fondos de pantalla para celular que te conectarÃ¡n con la naturaleza.jpg', '1481e860-cb7a-11ed-8d2c-ff764fbc75d517 Fondos de pantalla para celular que te conectarÃ¡n con la naturaleza.jpg', '', 'image/jpeg', 45004, 0),
(191, 16, 'public', 'flor', 'publicitaria', '2023-03-26', 'Copyleft', '33ca54a0-cb7a-11ed-8d2c-ff764fbc75d521 Fondos de pantalla para ser toda una chica Tumblr.jpg', '', '34d730c0-cb7a-11ed-8d2c-ff764fbc75d521 Fondos de pantalla para ser toda una chica Tumblr.jpg', 'image/jpeg', 124779, 0),
(192, 16, 'private', 'flor girasol', 'artistica', '2023-03-26', 'Copyright', '43946240-cb7a-11ed-8d2c-ff764fbc75d5Campo de girassol ao pÃ´r do sol no verÃ£o _ Foto Premium.jpg', '441af760-cb7a-11ed-8d2c-ff764fbc75d5Campo de girassol ao pÃ´r do sol no verÃ£o _ Foto Premium.jpg', '', 'image/jpeg', 97562, 0),
(193, 17, 'protected', 'auto', 'accion', '2023-03-26', 'Copyleft', 'e61c33d0-cb7a-11ed-8d2c-ff764fbc75d5Pin de Crocodile en Porsche _ Autos deportivos, Bmw autos, Autos.jpg', '', '', 'image/jpeg', 124625, 5),
(195, 17, 'private', 'auto', 'accion', '2023-03-26', 'Copyright', '0b125480-cb7b-11ed-8d2c-ff764fbc75d52d509b38-625f-44bf-abea-2121d169fae4.jpg', '0bbc7730-cb7b-11ed-8d2c-ff764fbc75d52d509b38-625f-44bf-abea-2121d169fae4.jpg', '', 'image/jpeg', 117558, 0),
(196, 17, 'protected', 'salvaje auto', 'accion', '2023-03-26', 'Copyleft', '224ea9f0-cb7b-11ed-8d2c-ff764fbc75d5397c2c5d-2db1-4767-976d-c3b086c22b0b.jpg', '', '', 'image/jpeg', 128436, 0),
(197, 17, 'private', 'auto', 'accion', '2023-03-26', 'Copyright', '368e3a20-cb7b-11ed-8d2c-ff764fbc75d5Pin on Wallpapers.jpg', '37be55b0-cb7b-11ed-8d2c-ff764fbc75d5Pin on Wallpapers.jpg', '', 'image/jpeg', 47963, 0),
(198, 18, 'protected', 'uñas', 'artistica', '2023-03-26', 'Copyleft', 'bbede760-cb7b-11ed-8d2c-ff764fbc75d5UÃAS HERMOSAS.jpg', '', '', 'image/jpeg', 65434, 0),
(199, 18, 'private', 'uñas', 'artistica', '2023-03-26', 'Copyright', 'ccc19cd0-cb7b-11ed-8d2c-ff764fbc75d5ac0143ae-a564-406e-9c8b-acd7fa8472ff.jpg', 'cd889650-cb7b-11ed-8d2c-ff764fbc75d5ac0143ae-a564-406e-9c8b-acd7fa8472ff.jpg', '', 'image/jpeg', 72472, 0),
(200, 18, 'public', 'uñas trems', 'publicitaria', '2023-03-26', 'Copyleft', 'df602730-cb7b-11ed-8d2c-ff764fbc75d520 Nail Trends You Need To Try Now - Society19.jpg', '', 'e07fc800-cb7b-11ed-8d2c-ff764fbc75d520 Nail Trends You Need To Try Now - Society19.jpg', 'image/jpeg', 36597, 0),
(201, 18, 'protected', 'uña diseño', 'publicitaria', '2023-03-26', 'Copyleft', 'edc8d010-cb7b-11ed-8d2c-ff764fbc75d520 DiseÃ±os de uÃ±as con decorados de mariposas que te inspirarÃ¡n.jpg', '', '', 'image/jpeg', 67562, 3),
(202, 18, 'private', 'uñas semis', 'publicitaria', '2023-03-26', 'Copyright', 'fde9fe60-cb7b-11ed-8d2c-ff764fbc75d518 Ideas de uÃ±as para tener un pedacito de cielo en tus manos.jpg', 'ff3ae860-cb7b-11ed-8d2c-ff764fbc75d518 Ideas de uÃ±as para tener un pedacito de cielo en tus manos.jpg', '', 'image/jpeg', 247581, 0),
(203, 19, 'protected', 'programacion apple', 'retrato', '2023-03-26', 'Copyleft', 'b6816530-cb7c-11ed-8d2c-ff764fbc75d5Apple 15in MacBook Pro, Retina, Touch Bar, 2_9GHz Intel Core i7 Quad Core, 16GB RAM, 512GB SSD, Space Gray, MPTT2LL_A (Renewed).jpg', '', '', 'image/jpeg', 63403, 0),
(204, 19, 'public', 'programar', 'retrato', '2023-03-26', 'Copyleft', 'c7e80bd0-cb7c-11ed-8d2c-ff764fbc75d5Coding from my studio.jpg', '', 'c8dd1a30-cb7c-11ed-8d2c-ff764fbc75d5Coding from my studio.jpg', 'image/jpeg', 111908, 5),
(205, 19, 'private', 'programar', 'retrato', '2023-03-26', 'Copyright', 'd58f8790-cb7c-11ed-8d2c-ff764fbc75d5eeafc908-7040-4158-a75e-566053de147d.png', 'd62b7970-cb7c-11ed-8d2c-ff764fbc75d5eeafc908-7040-4158-a75e-566053de147d.png', '', 'image/png', 56586, 0),
(206, 19, 'protected', 'programar', 'retrato', '2023-03-26', 'Copyleft', 'efdfd3c0-cb7c-11ed-8d2c-ff764fbc75d5Having a 6-foot to 10-foot usb cable is very important to many people_.jpg', '', '', 'image/jpeg', 256017, 0),
(207, 20, 'protected', 'animal', 'artistica', '2023-03-26', 'Copyleft', '8145cfe0-cb7d-11ed-8d2c-ff764fbc75d516 Adorable and Ultra Fluffy Animals Will Melt Your Heart.png', '', '', 'image/png', 267965, 5),
(208, 20, 'public', 'animales', 'artistica', '2023-03-26', 'Copyleft', 'c27b6290-cb7d-11ed-8d2c-ff764fbc75d517 Inspiradores fondos de pantalla para llevar a la naturaleza contigo.png', '', 'c3639fb0-cb7d-11ed-8d2c-ff764fbc75d517 Inspiradores fondos de pantalla para llevar a la naturaleza contigo.png', 'image/png', 421923, 0),
(209, 20, 'private', 'animales', 'artistica', '2023-03-26', 'Copyright', 'db91f640-cb7d-11ed-8d2c-ff764fbc75d5882c79cd-22c3-4d1d-986d-656d6bb4f087.jpg', 'dc5a0130-cb7d-11ed-8d2c-ff764fbc75d5882c79cd-22c3-4d1d-986d-656d6bb4f087.jpg', '', 'image/jpeg', 57536, 0),
(210, 20, 'protected', 'animal', 'artistica', '2023-03-26', 'Copyleft', 'e8882360-cb7d-11ed-8d2c-ff764fbc75d5This Visual Artist Uses His Magical Skills To Raise Awareness For Engangered Species.jpg', '', '', 'image/jpeg', 185436, 0),
(211, 21, 'protected', 'arquitectura', 'artistica', '2023-03-26', 'Copyleft', '83ce0bf0-cb7e-11ed-8d2c-ff764fbc75d5GalerÃ­a de IcÃ³nicos ClÃ¡sicos de Arquitectura representados en vista axonomÃ©trica  - 9.jpg', '', '', 'image/jpeg', 181937, 0),
(212, 21, 'public', 'arquitectura catedral', 'artistica', '2023-03-26', 'Copyleft', '919bad50-cb7e-11ed-8d2c-ff764fbc75d5Catedral de Burgos_ una obra maestra de la arquitectura gÃ³tica _ EscapadaFindeSemana_org.jpg', '', '92cc3e10-cb7e-11ed-8d2c-ff764fbc75d5Catedral de Burgos_ una obra maestra de la arquitectura gÃ³tica _ EscapadaFindeSemana_org.jpg', 'image/jpeg', 188898, 0),
(213, 21, 'private', 'arquitectura', 'artistica', '2023-03-26', 'Copyright', 'a227ab60-cb7e-11ed-8d2c-ff764fbc75d5An Architect\'s tool bag _ Life of an Architect.jpg', 'a30d2960-cb7e-11ed-8d2c-ff764fbc75d5An Architect\'s tool bag _ Life of an Architect.jpg', '', 'image/jpeg', 51415, 5),
(214, 22, 'protected', 'avion', 'area', '2023-03-26', 'Copyleft', '42bf93d0-cb7f-11ed-8d2c-ff764fbc75d521 FotografÃ­as tomadas en el momento preciso.jpg', '', '', 'image/jpeg', 138500, 5),
(215, 22, 'public', 'crazy', 'artistica', '2023-03-26', 'Copyleft', '5603fb20-cb7f-11ed-8d2c-ff764fbc75d5Crazy Camera Gear.jpg', '', '57472980-cb7f-11ed-8d2c-ff764fbc75d5Crazy Camera Gear.jpg', 'image/jpeg', 90277, 5),
(216, 22, 'protected', 'atardecer', 'artistica', '2023-03-26', 'Copyleft', '664cd5b0-cb7f-11ed-8d2c-ff764fbc75d5Un fotÃ³grafo espaÃ±ol nos muestra cÃ³mo las cosas ordinarias pueden transformar una foto, y es por ello que quisimos compartirlas (1).jpg', '', '', 'image/jpeg', 92166, 4.66667),
(217, 22, 'protected', 'españa', 'artistica', '2023-03-26', 'Copyleft', '74076440-cb7f-11ed-8d2c-ff764fbc75d5Un fotÃ³grafo espaÃ±ol nos muestra cÃ³mo las cosas ordinarias pueden transformar una foto, y es por ello que quisimos compartirlas.jpg', '', '', 'image/jpeg', 80205, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `photorating`
--

CREATE TABLE `photorating` (
  `id` int(11) NOT NULL,
  `creationDate` date NOT NULL,
  `idPhoto` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `starnumber` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `photorating`
--

INSERT INTO `photorating` (`id`, `creationDate`, `idPhoto`, `idUser`, `starnumber`) VALUES
(92, '2023-03-26', 215, 22, 5),
(93, '2023-03-26', 213, 22, 5),
(94, '2023-03-26', 207, 22, 5),
(95, '2023-03-26', 193, 22, 5),
(96, '2023-03-26', 193, 21, 5),
(97, '2023-03-26', 213, 21, 5),
(98, '2023-03-26', 201, 21, 2),
(99, '2023-03-26', 193, 20, 5),
(100, '2023-03-26', 204, 20, 5),
(101, '2023-03-26', 216, 20, 4),
(102, '2023-03-26', 215, 20, 5),
(103, '2023-03-26', 213, 19, 5),
(104, '2023-03-26', 215, 19, 5),
(105, '2023-03-26', 207, 19, 5),
(106, '2023-03-26', 201, 19, 4),
(107, '2023-03-26', 216, 18, 5),
(108, '2023-03-26', 214, 17, 5),
(109, '2023-03-26', 213, 17, 5),
(110, '2023-03-26', 216, 17, 5),
(111, '2023-03-26', 188, 17, 5),
(112, '2023-03-26', 214, 16, 5),
(113, '2023-03-26', 214, 19, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `interests` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(250) NOT NULL,
  `profileImage` varchar(250) NOT NULL,
  `sessionId` varchar(250) NOT NULL,
  `githubId` varchar(250) NOT NULL,
  `googleId` varchar(250) NOT NULL,
  `tweeterId` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `name`, `surname`, `interests`, `email`, `password`, `profileImage`, `sessionId`, `githubId`, `googleId`, `tweeterId`) VALUES
(16, 'Ana', 'Lucero', '¡Hola! Soy María, una apasionada de la música, la lectura y el arte', 'ana@gmail.com', '$2b$10$0AOaKw0nCYt5gzKFWcb61OTxeDz.B1Maa7/R.AcuHuz2BZh1m4pHG', 'ec41c240-cb78-11ed-8d2c-ff764fbc75d5mujer-1.jpg', 'A4uxu-d5gbN8iLNB_6yxRTNCCAb4cXTO', '', '', ''),
(17, 'Juan', 'Garcia', '¡Hola a todos! Soy Juan, un apasionado de la tecnología y la programación', 'juan@gmail.com', '$2b$10$L05CAwaKPVsUcL91E4WwKOofl4u.oo0IPz3gpLY0nlzExbS/f.id.', '81b5fe30-cb7a-11ed-8d2c-ff764fbc75d5hombre-2.jpg', '9qNTZk1SIu5ZE49tCm93lzM9kfLqvKXF', '', '', ''),
(18, 'Carolina', 'Casas', 'Actualmente, trabajo en el sector del turismo y viajo con frecuencia para descubrir nuevos destinos y experiencias únicas', 'caro@gmail.com', '$2b$10$Jm3rd5QCsPgdLp/D1/eJmeINJZ2Ch4x7SYz.UieQJmrDoUiwJhM2K', '798aaa20-cb7b-11ed-8d2c-ff764fbc75d5mujer-3.jpg', 'GRWExsEfGW0EJv2x-bkKLAEBCu5EMdN4', '', '', ''),
(19, 'Valentin', 'Casas', '¡Hola a todos! Soy Valentin, una amante del arte y la creatividad', 'valen@gmail.com', '$2b$10$YXvLkiremgyt.hwIxjH04ur1WyglSdGDWIbuMHVj5zkmbRS6XgVK.', '535b50b0-cb7c-11ed-8d2c-ff764fbc75d5hombre-4.jpg', 'ea9Nd1KoVi2auG8we5LpIi_FWJHjke1J', '', '', ''),
(20, 'Monica', 'Benavidez', '¡Hola a todos! Soy Mónica, una amante de la naturaleza y el deporte', 'monica@gmail.com', '$2b$10$r0TfKPb5qyrBYS324vmzgeX2Qvy4vT6SZnN/U18ESymUiG6Isfi4m', '34460cf0-cb7d-11ed-8d2c-ff764fbc75d5mujer-5.jpg', '0m4drat02m1nePHbnKfRHOIplN4WjX4t', '', '', ''),
(21, 'Luis', 'Martin', '¡Hola a todos! Soy Luis, un apasionado de la tecnología y la innovación', 'luis@gmail.com', '$2b$10$TlJNOtpLKA.D0/1iGAksKOLzJnFOh1qa1InkwC8HvG1pznshNAq06', '3ad886a0-cb7e-11ed-8d2c-ff764fbc75d5hombre-4 (2).jpg', 'Ct2KAzgjlvwFQ28sQC5icQ45uQy5O-OE', '', '', ''),
(22, 'Pia', 'Barroso', '¡Hola a todos! Soy Pia, un apasionada de la tecnología y la innovación.', 'pia@gmail.com', '$2b$10$SkGL7faoLANVpy/rdF4JGu8iDgD.CEGMPioSJKt55hR9OXO20sgZG', 'e8605aa0-cb7e-11ed-8d2c-ff764fbc75d5mujer-7.jpg', '_vuMNjcc0rLtSw0PxjlOObnDLAToVFyg', '', '', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPhoto` (`idPhoto`,`idUser`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `label`
--
ALTER TABLE `label`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPhoto` (`idPhoto`);

--
-- Indices de la tabla `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUserReceptor` (`idUserReceiver`),
  ADD KEY `idUserEmisor` (`idUserEmitting`);

--
-- Indices de la tabla `msgbuyphoto`
--
ALTER TABLE `msgbuyphoto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPhoto` (`idPhoto`,`idOwner`,`idUserEmitting`),
  ADD KEY `idUserEmitting` (`idUserEmitting`),
  ADD KEY `idOwner` (`idOwner`);

--
-- Indices de la tabla `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idOwner` (`idOwner`);

--
-- Indices de la tabla `photorating`
--
ALTER TABLE `photorating`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPhoto` (`idPhoto`,`idUser`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=161;

--
-- AUTO_INCREMENT de la tabla `label`
--
ALTER TABLE `label`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=518;

--
-- AUTO_INCREMENT de la tabla `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de la tabla `msgbuyphoto`
--
ALTER TABLE `msgbuyphoto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `photo`
--
ALTER TABLE `photo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=218;

--
-- AUTO_INCREMENT de la tabla `photorating`
--
ALTER TABLE `photorating`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`idPhoto`) REFERENCES `photo` (`id`);

--
-- Filtros para la tabla `label`
--
ALTER TABLE `label`
  ADD CONSTRAINT `label_ibfk_2` FOREIGN KEY (`idPhoto`) REFERENCES `photo` (`id`);

--
-- Filtros para la tabla `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_ibfk_2` FOREIGN KEY (`idUserEmitting`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `msgbuyphoto`
--
ALTER TABLE `msgbuyphoto`
  ADD CONSTRAINT `msgbuyphoto_ibfk_1` FOREIGN KEY (`idPhoto`) REFERENCES `photo` (`id`),
  ADD CONSTRAINT `msgbuyphoto_ibfk_3` FOREIGN KEY (`idUserEmitting`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `photo`
--
ALTER TABLE `photo`
  ADD CONSTRAINT `photo_ibfk_1` FOREIGN KEY (`idOwner`) REFERENCES `user` (`id`);

--
-- Filtros para la tabla `photorating`
--
ALTER TABLE `photorating`
  ADD CONSTRAINT `photorating_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `photorating_ibfk_2` FOREIGN KEY (`idPhoto`) REFERENCES `photo` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
