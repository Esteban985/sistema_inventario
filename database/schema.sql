create table productos (
	producto_id serial primary key,
	codigo varchar(20) unique not null,
	nombre varchar(100) not null,
	descripcion text,
	categoria varchar(50) not null,
	marca varchar(50) not null,
	precio numeric(10,2) not null check (precio > 0),
	stock integer not null check (stock >= 0),
	estado boolean not null default true,
	fecha_creacion timestamp not null default current_timestamp
);