
CREATE TABLE Keilmuan (
                Kode_keilmuan INT AUTO_INCREMENT NOT NULL,
                Bidang_keilmuan VARCHAR NOT NULL,
                PRIMARY KEY (Kode_keilmuan)
);


CREATE TABLE Ruangan (
                Kode_ruangan INT NOT NULL,
                Lokasi_ruangan VARCHAR NOT NULL,
                Kuota VARCHAR NOT NULL,
                PRIMARY KEY (Kode_ruangan)
);


CREATE TABLE Dosen (
                id_dosen INT AUTO_INCREMENT NOT NULL,
                NIDN VARCHAR NOT NULL,
                Nama VARCHAR NOT NULL,
                Jabatan VARCHAR NOT NULL,
                PRIMARY KEY (id_dosen)
);


CREATE TABLE Seminar (
                id_seminar INT AUTO_INCREMENT NOT NULL,
                id_doesn INT NOT NULL,
                Kode_ruangan INT NOT NULL,
                Kode_keilmuan INT NOT NULL,
                Waktu VARCHAR NOT NULL,
                Ruangan VARCHAR NOT NULL,
                Judul VARCHAR NOT NULL,
                PRIMARY KEY (id_seminar, id_doesn, Kode_ruangan, Kode_keilmuan)
);


CREATE TABLE Mahasiswa (
                id_mahasiswa INT NOT NULL,
                NIM VARCHAR NOT NULL,
                Nama VARCHAR NOT NULL,
                Fakultas VARCHAR NOT NULL,
                Jurusan VARCHAR NOT NULL,
                PRIMARY KEY (id_mahasiswa)
);


CREATE TABLE Daftar_seminar (
                id_mahasiswa INT NOT NULL,
                id_seminar INT NOT NULL,
                id_doesn INT NOT NULL,
                PRIMARY KEY (id_mahasiswa, id_seminar, id_doesn)
);


ALTER TABLE Seminar ADD CONSTRAINT keilmuan_seminar_fk
FOREIGN KEY (Kode_keilmuan)
REFERENCES Keilmuan (Kode_keilmuan)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE Seminar ADD CONSTRAINT ruangan_seminar_fk
FOREIGN KEY (Kode_ruangan)
REFERENCES Ruangan (Kode_ruangan)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE Seminar ADD CONSTRAINT dosen_seminar_fk
FOREIGN KEY (id_doesn)
REFERENCES Dosen (id_dosen)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE Daftar_seminar ADD CONSTRAINT seminar_daftar_seminar_fk
FOREIGN KEY (id_seminar, id_doesn)
REFERENCES Seminar (id_seminar, id_doesn)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE Daftar_seminar ADD CONSTRAINT mahasiswa_daftar_seminar_fk
FOREIGN KEY (id_mahasiswa)
REFERENCES Mahasiswa (id_mahasiswa)
ON DELETE NO ACTION
ON UPDATE NO ACTION;