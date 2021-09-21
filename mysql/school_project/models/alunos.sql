
/*escola*/
create database escola2;

use escola2;

drop table alunos;
create table if not exists alunos(
    id int not null primary key auto_increment,
    nome varchar(30),
    email varchar(40),
    cpf varchar(11),
    telefone varchar(11)
);

drop disciplinas;
create table if not exists disciplinas(
    id int not null primary key auto_increment,
    matematica int(30),
    portugues int(30),
    biologia int(30),
    geografia int(30)
);

drop professores;
create table if not exists professores(
    id int not null primary key auto_increment,
    nome varchar(30),
    cidade varchar(30),
    sexo varchar(30),
    idade varchar(10)
);

insert into professores(nome,cidade,sexo,idade) values('Julio','Curitiba','Masculino','28');
insert into disciplinas(matematica, portugues, biologia,geografia) values(10,9,8,9);
insert into alunos(nome,email,cpf,telefone) values('Julio','julio@gmail.com','10226515623','41876754637');
   