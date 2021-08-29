-- Criar banco no docker
-- docker run -p 5432:5432 -v C://zdockerDB/database:/var/lib/postgresql/data -e POSTGRES_PASSWORD=1234 -d postgres

-- mudar schema default
set search_path = 'MeuSchema';

-- enum no postgreSQL
create type REGIAO as enum ('Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul');

-- Criando a tabela estados
create table estados (
	id SERIAL not null,
	nome VARCHAR(45) not null, 
	sigla VARCHAR(2) not null,
	regiao REGIAO not null,
	populacao DECIMAL(5,2) not null,
	primary key (id),
	unique (nome),
	unique (sigla)
);

-- Criando a tabela cidades
create table if not exists cidades (
	id SERIAL not null,
	nome VARCHAR(255) not null,
	estado_id integer not null,
	area decimal(10,2),
	primary key (id),
	foreign key (estado_id) references estados (id)
);

-- Criando a tabela prefeitos
create table if not exists prefeitos (
	id SERIAL not null,
	nome varchar(255) not null,
	cidade_id integer,
	primary key (id),
	unique (cidade_id),
	foreign key (cidade_id) references cidades (id)
);

-- Criando a tabela empresas
create table if not exists empresas (
	id SERIAL not null,
	nome varchar(255) not null,
	cnpj varchar(14),
	primary key (id),
	unique (cnpj)
);

-- Criando a tabela cidades_empresas
drop table empresas_unidades;
create table if not exists empresas_unidades (
	empresa_id SERIAL not null,
	cidade_id SERIAL not null,
	sede bit(1) not null,
	primary key (empresa_id, cidade_id)
);

-- excluir tabela
create table if not exists teste (
	id SERIAL not null primary key
);

drop table if exists teste;