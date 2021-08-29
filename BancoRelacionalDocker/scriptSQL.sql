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
) 

-- Criando a tabela cidades
create table cidades (
)

-- Criando a tabela prefeitos
create table prefeitos (
)

-- Criando a tabela empresas
create table empresas (
)

-- Criando a tabela cidades_empresas
create table cidades_empresas (
)



-- inserção de dados
insert into estados
