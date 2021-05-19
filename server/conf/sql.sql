-- SCHEMA 
CREATE SCHEMA notflix;

-- CRIAÇÃO DO DOMÍNIO TIPOCPF
CREATE DOMAIN TIPOCPF AS NUMERIC(11);

-- TABELA USUÁRIO
CREATE TABLE notflix.usuario (
	cpf TIPOCPF NOT NULL,
	p_nome VARCHAR(50) NOT NULL,
	login VARCHAR(60) NOT NULL,
	senha VARCHAR(20) NOT NULL,
	--Restrições
	CONSTRAINT pk_cpf PRIMARY KEY (cpf)
);

CREATE TABLE notflix.filme (
	id_filme SERIAL NOT NULL,
	titulo VARCHAR(50) NOT NULL,
	ano_publicacao INTEGER NOT NULL,
	autor VARCHAR(50) NOT NULL,
	capa  BYTEA,
	--Restrições
	CONSTRAINT pk_idfilme PRIMARY KEY (id_filme)
);


-- ALGUNS USUÁRIOS PARA TESTE
INSERT INTO notflix.usuario (cpf, p_nome, login, senha) VALUES ('12312312312', 'Anderson', 'anderson@hotmail.com', 'a123');
INSERT INTO notflix.usuario (cpf, p_nome, login, senha) VALUES ('12312312313', 'Micael', 'micael@hotmail.com', 'm123');
INSERT INTO notflix.usuario (cpf, p_nome, login, senha) VALUES ('12312312314', 'Vinicius', 'vinicius@hotmail.com', 'v123');
