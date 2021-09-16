create database minha_escola;

use minha_escola;

DROP TABLE alunos;
CREATE TABLE IF NOT EXISTS alunos(
matricula_aluno VARCHAR(50) NOT NULL,
nome_aluno VARCHAR(50) NOT NULL,
turma_aluno INT NOT NULL,
PRIMARY KEY(matricula_aluno),
FOREIGN KEY(turma_aluno) REFERENCES turmas(id_turma)
);

DROP TABLE funcionarios;
CREATE TABLE IF NOT EXISTS funcionarios(
id_local INT NOT NULL,
descricao_local VARCHAR(50) NOT NULL,
responsavel_local VARCHAR(14) NOT NULL,
nome_aluno VARCHAR(50) NOT NULL,
turma_aluno INT NOT NULL,
PRIMARY KEY(matricula_aluno),
FOREIGN KEY(turma_aluno) REFERENCES turmas(id_turma)
);

DROP TABLE locais;
CREATE TABLE IF NOT EXISTS funcionarios(
id_local INT NOT NULL,
responsavel_local VARCHAR(14) NOT NULL,
descricao_local VARCHAR(50) NOT NULL,
nome_aluno VARCHAR(50) NOT NULL,
turma_aluno INT NOT NULL,
PRIMARY KEY(matricula_aluno),
FOREIGN KEY(turma_aluno) REFERENCES turmas(id_turma)
);

DROP TABLE turmas;
CREATE TABLE IF NOT EXISTS turmas(
id_turma INT NOT NULL,
professor_turma VARCHAR(14) NOT NULL,
local_turma INT NOT NULL,
PRIMARY KEY(id_turma),
FOREIGN KEY(professor_turma) REFERENCES funcionarios(id_turma)
FOREIGN KEY(local_turma) REFERENCES locais(id_local)
);

DROP TABLE notas;
CREATE TABLE IF NOT EXISTS notas(
id_notas INT NOT NULL AUTOINCREMENT,
professor_nota VARCHAR(14) NOT NULL,
aluno_nota VARCHAR(10) NOT NULL,
materia VARCHAR(20) NOT NULL,
PRIMARY KEY(id_notas),
FOREIGN KEY(professor_nota) REFERENCES funcionarios(id_turma)
FOREIGN KEY(aluno_nota) REFERENCES funcionarios(id_turma)
FOREIGN KEY(turma_nota) REFERENCES locais(id_local)
);