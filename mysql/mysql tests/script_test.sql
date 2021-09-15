create database tecidos_ABC;

use tecidos_ABC;

drop table materia_prima;
create table if not exists materia_prima(
    id int not null primary key auto_increment,
    nome varchar(20),
    nome_quimico varchar(40),
    estoque int
);

drop table fornecedor;
create table if not exists fornecedor(
    id int not null primary key auto_increment,
    cnpj varchar(30),
    nome varchar(30)
);

insert into fornecedor(cnpj, nome) values('27453663', 'teste');
insert into materia_prima(nome,nome_quimico) values('fentanol','728128821', 10);