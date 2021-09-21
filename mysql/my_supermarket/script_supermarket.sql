create database supermercado
default character set utf8
default collate utf8_general_ci;

use supermercado;

DROP TABLE vendas;
DROP TABLE produtos;
DROP TABLE fornecedores;
DROP TABLE clientes;


CREATE TABLE IF NOT EXISTS clientes(
id_cliente INT NOT NULL AUTO_INCREMENT,
nome_cliente VARCHAR(50) NOT NULL,
cpf_cliente VARCHAR(12) NOT NULL,
telefone_cliente VARCHAR(20) NOT NULL,
PRIMARY KEY(id_cliente)
)default charset = utf8;


CREATE TABLE IF NOT EXISTS fornecedores(
id_fornecedor INT NOT NULL AUTO_INCREMENT,
nome_fornecedor VARCHAR(50) NOT NULL,
cnpj_fornecedor VARCHAR(20) NOT NULL,
telefone_fornecedor VARCHAR(20) NOT NULL,
PRIMARY KEY (id_fornecedor)
)default charset = utf8;


CREATE TABLE IF NOT EXISTS produtos(
id_produto INT NOT NULL AUTO_INCREMENT,
desc_produto VARCHAR(50) NOT NULL,
quant_produto INT NOT NULL,
preco_produto INT NOT NULL,
PRIMARY KEY (id_produto)
)default charset = utf8;


CREATE TABLE IF NOT EXISTS vendas(
id_venda INT NOT NULL AUTO_INCREMENT,
total_venda INT NOT NULL,
cliente_venda VARCHAR(50) NOT NULL,
cpf_venda VARCHAR(12) NOT NULL,
PRIMARY KEY (id_venda)
)default charset = utf8;


INSERT INTO fornecedores(nome_fornecedor, cnpj_fornecedor,telefone_fornecedor) values('?', '?', '?');
INSERT INTO vendas(total_venda, cliente_venda,cpf_venda) values('10', 'Paulo', '12738849876');
INSERT INTO clientes(nome_cliente,cpf_cliente,telefone_cliente) values('?', '?', '?');
INSERT INTO produtos(desc_produto,quant_produto,preco_produto) values('Feijão','2', '20');

