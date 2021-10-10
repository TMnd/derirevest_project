CREATE SEQUENCE clientes_id_seq;
SELECT setval('clientes_id_seq', 3)
CREATE TABLE clientes (
  id              SERIAL PRIMARY KEY,
  nome           VARCHAR(100) NOT NULL
);
