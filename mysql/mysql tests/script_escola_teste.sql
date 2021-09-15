create database escola_teste;

use escola_teste;

DROP TABLE funcionarios;
CREATE TABLE IF NOT EXISTS funcionarios(
id_func INT NOT NULL AUTO_INCREMENT,
nome_func VARCHAR(50) NOT NULL,
cargo_func VARCHAR(20) NOT NULL,
PRIMARY KEY(id_func)
);

DROP TABLE turmas;
CREATE TABLE IF NOT EXISTS turmas(
id_turma INT NOT NULL AUTO_INCREMENT,
professor_turma INT NOT NULL,
sala_turma INT NOT NULL,
PRIMARY KEY(id_turma),
FOREIGN KEY(professor_turma) REFERENCES funcionarios(id_func)
);
