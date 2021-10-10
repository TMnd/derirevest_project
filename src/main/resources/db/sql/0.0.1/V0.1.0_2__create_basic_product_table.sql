CREATE SEQUENCE produtos_id_seq;
SELECT setval('produtos_id_seq', 3);
CREATE TABLE produtos (
  id             SERIAL PRIMARY KEY,
  nome           VARCHAR(100) NOT NULL
);
