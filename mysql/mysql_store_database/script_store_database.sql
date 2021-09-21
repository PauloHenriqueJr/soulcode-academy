create database loja;

use loja;

DROP TABLE estoque;
CREATE TABLE IF NOT EXISTS estoque(
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



