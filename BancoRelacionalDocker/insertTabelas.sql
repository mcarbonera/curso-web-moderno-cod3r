-- verificar schema
select current_schema();
show search_path
-- mudar schema default
set search_path = 'MeuSchema'

-- inserção de dados
insert into estados 
	(nome, sigla, regiao, populacao)
values 
	('Acre', 'AC', 'Norte', 0.83);

insert into estados 
	(nome, sigla, regiao, populacao)
values 
	('Bahia', 'BA', 'Nordeste', 15.34),
    ('Ceará', 'CE', 'Nordeste', 9.02),
    ('Distrito Federal', 'DF', 'Centro-Oeste', 3.04),
    ('Espírito Santo', 'ES', 'Sudeste', 4.02),
    ('Goiás', 'GO', 'Centro-Oeste', 6.78),
    ('Maranhao', 'MA', 'Nordeste', 7.00),
    ('Mato Grosso', 'MT', 'Centro-Oeste', 3.34),
    ('Mato Grosso do Sul', 'MS', 'Centro-Oeste', 2.71),
    ('Minas Gerais', 'MG', 'Sudeste', 21.12),
    ('Pará', 'PA', 'Norte', 8.36),
    ('Paraíba', 'PB', 'Nordeste', 4.03),
    ('Parana', 'PR', 'Sul', 11.22),
    ('Pernambuco', 'PE', 'Nordeste', 9.47),
    ('Piauí', 'PI', 'Nordeste', 3.22),
    ('Rio de Janeiro', 'RJ', 'Sudeste', 16.72),
    ('Rio Grande do Norte', 'RN', 'Nordeste', 3.51),
    ('Rio Grande do Sul', 'RS', 'Sul', 11.32),
    ('Rondônia', 'RO', 'Norte', 1.81),
    ('Roraima', 'RR', 'Norte', 0.52),
    ('Santa Catarina', 'SC', 'Sul', 7.01),
    ('São Paulo', 'SP', 'Sudeste', 45.10),
    ('Sergipe', 'SE', 'Nordeste', 2.29),
    ('Tocantins', 'TO', 'Norte', 1.55);
   
-- Consultas
select * from estados;

select sigla, nome as Nome_Estado
from estados;

select sigla, nome as Nome_Estado
from estados
where regiao = 'Sul';

select nome, regiao, populacao
from estados
where populacao >= 10
order by populacao desc;

-- Update em estados
update estados
set nome = 'Maranhão'
where sigla = 'MA';

select nome from estados where sigla = 'MA';

update estados
set nome = 'Paraná',
	populacao = 11.32
where sigla = 'PR';

select nome,populacao from estados where sigla = 'PR';

-- Incluir para Exclusao
insert into estados
	(id, nome, sigla, regiao, populacao)
values
	(1000, 'Novo', 'NV', 'Sul', 2.54);

insert into estados
	(nome, sigla, regiao, populacao)
values
	('Mais Novo', 'MN', 'Norte', 2.51);

select * from estados
order by id desc;

-- Exclusao
delete from estados
where sigla = 'MN';

delete from estados
where id = 1000;

-- consultar com agregação
select
	regiao as regiao,
	sum(populacao) as Total
from estados e 
group by "regiao" 
order by Total desc;

select
	sum(populacao) as Total
from estados e;

select
	avg(populacao) as Total
from estados e;

-- inserir cidades
select * from estados;
select * from estados where id=24;
select * from estados where id=18;

insert into cidades 
	(nome, area, estado_id);
values
	('Campinas', 795, 24),
	('Niterói', 133.9, 18);
	
insert into cidades 
	(nome, area, estado_id)
values  (
	'Caruaru', 
	920.6, 
	( select id from estados where sigla = 'PE')
	);
	
insert into cidades 
	(nome, area, estado_id)
values  (
	'Juazeiro do Norte', 
	248.2, 
	( select id from estados where sigla = 'CE')
	);
	
select * from cidades;

-- consultar com join
select * from estados e, cidades c; -- produto cartesiano

select * from estados e, cidades c
where e.id = c.estado_id;

select 
	e.nome as estado,
	c.nome as cidade,
	regiao as regiao
from estados e, cidades c
where e.id = c.estado_id;

select 
	e.nome as estado,
	c.nome as cidade,
	regiao as regiao
from estados e
inner join cidades c on e.id = c.estado_id;

-- inserir prefeitos
select * from cidades;

insert into prefeitos 
	(nome, cidade_id)
values
	('Rodrigo Neves', 2),
	('Raquel Lyra', 3),
	('Zenaldo Coutinho', null);
	
insert into prefeitos 
	(nome, cidade_id)
values
	('Rafael Greca', null);
	
insert into prefeitos 
	(nome, cidade_id)
values
	('Rodrigo Pinheiro', 3);
	
select * from prefeitos;

-- mais consulta com join
select * 
from cidades c
inner join prefeitos p on c.id = p.cidade_id;

select * 
from cidades c
left outer join prefeitos p on c.id = p.cidade_id;

select * 
from cidades c
right outer join prefeitos p on c.id = p.cidade_id;

select * 
from cidades c
full join prefeitos p on c.id = p.cidade_id;

-- inserir dados empresas
insert into empresas
	(nome, cnpj)
values
	('Bradesco', 95478945612354),
	('Vale', 95478945612353),
	('Cielo', 95478945612352);
	
select column_name, data_type, character_maximum_length, column_default, is_nullable
from INFORMATION_SCHEMA.COLUMNS where table_name = 'empresas';
select column_name, data_type, character_maximum_length, column_default, is_nullable
from INFORMATION_SCHEMA.COLUMNS where table_name = 'cidades';
select column_name, data_type, character_maximum_length, column_default, is_nullable
from INFORMATION_SCHEMA.COLUMNS where table_name = 'prefeitos';

select * from empresas;
select * from cidades;

insert into empresas_unidades
	(empresa_id, cidade_id, sede)
values 
	(1, 1, B'1'),
	(1, 2, B'0'),
	(2, 1, B'0'),
	(2, 2, B'1');
	
-- consultas novamente:
select e.nome empresa, c.nome cidade
from empresas e, empresas_unidades eu, cidades c 
where e.id = eu.empresa_id and c.id = eu.cidade_id
and sede = B'1';