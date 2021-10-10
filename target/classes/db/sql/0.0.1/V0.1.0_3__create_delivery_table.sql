CREATE SEQUENCE entregas_id_seq;
SELECT setval('entregas_id_seq', 3);
CREATE TABLE entregas (
  id             SERIAL PRIMARY KEY,
  mensagem      VARCHAR(100) NOT NULL,
  data_entrega   DATE NOT NULL,
  estado         INTEGER NOT NULL,
  ref_id_clientes           INTEGER NOT NULL,
  ref_id_produtos           INTEGER NOT NULL,
  CONSTRAINT fk_clientes FOREIGN KEY(ref_id_clientes) REFERENCES clientes(id),
  CONSTRAINT fk_produtos FOREIGN KEY(ref_id_produtos) REFERENCES produtos(id)
);
