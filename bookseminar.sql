-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 19 Des 2018 pada 17.05
-- Versi Server: 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookseminar`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `daftar_seminar`
--

CREATE TABLE `daftar_seminar` (
  `id_mahasiswa` int(100) NOT NULL,
  `id_seminar` int(100) NOT NULL,
  `id_dosen` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `dosen`
--

CREATE TABLE `dosen` (
  `id_dosen` int(100) NOT NULL,
  `NIDN` varchar(100) NOT NULL,
  `Nama` varchar(100) NOT NULL,
  `Jabatan` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `dosen`
--

INSERT INTO `dosen` (`id_dosen`, `NIDN`, `Nama`, `Jabatan`) VALUES
(1, '194405012014044444', 'Dr. Iman S.pd M.pd', 'ketua jurusan'),
(2, '194405012014044445', 'Prof budiman s.pd m.pd', 'dekan'),
(3, '194405012014044446', 'Dr. Ari S.kom M.kom', 'sekertaris jurusan'),
(4, '194405012014044447', 'Dr. Arina S.pd M.pd', 'sekertaris dekan'),
(5, '194405012014044442', 'Dr. imanah S.kom M.kom', 'kepala lab');

-- --------------------------------------------------------

--
-- Struktur dari tabel `keilmuan`
--

CREATE TABLE `keilmuan` (
  `Kode_keilmuan` int(100) NOT NULL,
  `Bidang_keilmuan` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `keilmuan`
--

INSERT INTO `keilmuan` (`Kode_keilmuan`, `Bidang_keilmuan`) VALUES
(9, 'kelautan'),
(78, 'keteknikan'),
(456, 'perencanaan'),
(678, 'ekonomi dan manajemen'),
(897, 'hewan dan tumbuhan');

-- --------------------------------------------------------

--
-- Struktur dari tabel `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `id_mahasiswa` int(100) NOT NULL,
  `NIM` varchar(100) NOT NULL,
  `Nama` varchar(100) NOT NULL,
  `Fakultas` varchar(100) NOT NULL,
  `Jurusan` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `mahasiswa`
--

INSERT INTO `mahasiswa` (`id_mahasiswa`, `NIM`, `Nama`, `Fakultas`, `Jurusan`) VALUES
(1, 'G651180401', 'Global Ilham Sampurno', 'Mipa', 'Ilmu komputer'),
(2, 'G651180200', 'muhammad dhani', 'mipa', 'ilmu komputer'),
(3, 'A651180888', 'ahmad budi', 'ekonomi', 'ekonomi pertanian'),
(4, 'B651180221', 'budianti', 'kedokteran', 'dokter hewan'),
(5, 'G451180800', 'andini', 'mipa', 'biologi');

-- --------------------------------------------------------

--
-- Struktur dari tabel `ruangan`
--

CREATE TABLE `ruangan` (
  `Kode_ruangan` int(100) NOT NULL,
  `Lokasi_ruangan` varchar(100) NOT NULL,
  `Kuota` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `ruangan`
--

INSERT INTO `ruangan` (`Kode_ruangan`, `Lokasi_ruangan`, `Kuota`) VALUES
(101, 'lantai 1', 40),
(102, 'lantai 1', 40),
(201, 'lantai 2', 29),
(202, 'lantai 2', 27),
(402, 'lantai 4', 25);

-- --------------------------------------------------------

--
-- Struktur dari tabel `seminar`
--

CREATE TABLE `seminar` (
  `id_seminar` int(100) NOT NULL,
  `id_dosen` int(100) NOT NULL,
  `Kode_ruangan` int(100) NOT NULL,
  `Kode_keilmuan` int(100) NOT NULL,
  `Waktu` varchar(100) NOT NULL,
  `Ruangan` varchar(100) NOT NULL,
  `Judul` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `daftar_seminar`
--
ALTER TABLE `daftar_seminar`
  ADD KEY `mahasiswa_daftar_seminar_fk` (`id_mahasiswa`);

--
-- Indexes for table `dosen`
--
ALTER TABLE `dosen`
  ADD PRIMARY KEY (`id_dosen`);

--
-- Indexes for table `keilmuan`
--
ALTER TABLE `keilmuan`
  ADD PRIMARY KEY (`Kode_keilmuan`);

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`id_mahasiswa`);

--
-- Indexes for table `ruangan`
--
ALTER TABLE `ruangan`
  ADD PRIMARY KEY (`Kode_ruangan`);

--
-- Indexes for table `seminar`
--
ALTER TABLE `seminar`
  ADD PRIMARY KEY (`id_seminar`),
  ADD KEY `keilmuan_seminar_fk` (`Kode_keilmuan`),
  ADD KEY `ruangan_seminar_fk` (`Kode_ruangan`),
  ADD KEY `dosen_seminar_fk` (`id_dosen`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dosen`
--
ALTER TABLE `dosen`
  MODIFY `id_dosen` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  MODIFY `id_mahasiswa` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `daftar_seminar`
--
ALTER TABLE `daftar_seminar`
  ADD CONSTRAINT `mahasiswa_daftar_seminar_fk` FOREIGN KEY (`id_mahasiswa`) REFERENCES `mahasiswa` (`id_mahasiswa`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Ketidakleluasaan untuk tabel `seminar`
--
ALTER TABLE `seminar`
  ADD CONSTRAINT `dosen_seminar_fk` FOREIGN KEY (`id_dosen`) REFERENCES `dosen` (`id_dosen`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `keilmuan_seminar_fk` FOREIGN KEY (`Kode_keilmuan`) REFERENCES `keilmuan` (`Kode_keilmuan`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `ruangan_seminar_fk` FOREIGN KEY (`Kode_ruangan`) REFERENCES `ruangan` (`Kode_ruangan`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
