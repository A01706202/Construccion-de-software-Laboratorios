-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-04-2021 a las 02:33:43
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `laboratorios_web`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personaje`
--

CREATE TABLE `personaje` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `videojuego` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `foto` varchar(400) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_envio` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `personaje`
--

INSERT INTO `personaje` (`id`, `nombre`, `videojuego`, `foto`, `fecha_envio`) VALUES
(1, 'Reimu Hakurei', 'Touhou Project', '2021-04-06T21-41-49.251Z-reimu.jpg', '2021-04-06 21:41:49'),
(2, 'Soma Cruz', 'Castlevania', '2021-04-07T06-02-52.300Z-Soma_Cruz_Normal.png', '2021-04-07 06:02:52'),
(3, 'Crash bandicoot', 'Crash bandicoot', 'https://www.enter.co/wp-content/uploads/2019/12/Crash-Bandicoot-N-Sane-Trilogy-1280x720-1024x768.jpg', '2021-04-07 21:38:48');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sugerencias`
--

CREATE TABLE `sugerencias` (
  `id` int(11) NOT NULL,
  `recomendacion` text COLLATE utf8_spanish2_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `sugerencias`
--

INSERT INTO `sugerencias` (`id`, `recomendacion`, `created_at`) VALUES
(1, 'Buena página', '2021-03-08 01:38:06'),
(2, 'Me gusta el estilo', '2021-03-08 07:26:08'),
(3, 'Falta agregar cosas', '2021-04-05 04:37:41'),
(4, 'Bonito fondo', '2021-04-05 22:09:31'),
(5, 'Tiene más personalidad', '2021-04-06 01:17:47'),
(6, 'Falta contenido', '2021-04-06 21:53:50'),
(7, 'No me carga', '2021-04-07 02:00:28');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `username` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `password` varchar(400) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`username`, `nombre`, `password`) VALUES
('Lucian', 'Lucian', '$2a$12$sYf9wJczk/dKb/oQS0eJue00BdT49ohRL8wcQ7iemNF821j28NCnK'),
('Lucy', 'Lucy', '$2a$12$GnYFaWQ1k4AjeHckUuYdP.JZh2.i9gclG.xEUh1IiLZmRzx8f2j/i'),
('Mich', 'Mich', '$2a$12$DX/2o5VgpVaASNpcgg3tWO9W5AmQCeaRNZuKdTIrFMDqWwJ7R3Vwq');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `personaje`
--
ALTER TABLE `personaje`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sugerencias`
--
ALTER TABLE `sugerencias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `personaje`
--
ALTER TABLE `personaje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `sugerencias`
--
ALTER TABLE `sugerencias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
