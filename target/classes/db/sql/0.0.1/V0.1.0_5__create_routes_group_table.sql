CREATE TABLE IF NOT EXISTS routes_groups(
    id serial NOT NULL,
    nome text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT routes_groups_pkey PRIMARY KEY (id)
)