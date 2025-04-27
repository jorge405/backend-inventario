create database db_inventario_farm;
use db_inventario_farm;

create table usuario(
cod_usuario int primary key auto_increment not null,
usuario char(50) null,
pass char(50) null,
estado_int int
);


create table laboratorio(
cod_laboratorio int primary key auto_increment not null,
laboratorio varchar(100) null,
estado_int int
);

create table presentacion(
cod_presentacion int primary key auto_increment not null,
presentacion varchar(100) null,
estado_int int
);

create table uso(
cod_uso int primary key auto_increment not null,
uso varchar(150) null,
estado_int int
);

create table producto_medicamento(
cod_producto int primary key auto_increment not null,
nombre_cientifico varchar(150) null,
nombre_comercial varchar(160) null,
contenido varchar(100) null,
medicion char(50) null,
fecha_vencimiento date,
precio_unit decimal(10,2),
cod_laboratorio int,
foreign key (cod_laboratorio) references laboratorio(cod_laboratorio),
cod_presentacion int,
foreign key (cod_presentacion) references presentacion(cod_presentacion),
cod_uso int,
foreign key (cod_uso) references uso(cod_uso),
estado_int char(50)
);

create table producto_vencidos(
cod_productven int primary key auto_increment not null,
cod_producto int,
foreign key (cod_producto) references producto_medicamento(cod_producto)
);

create table stock_producto(
cod_stokproducto int primary key auto_increment not null,
cod_producto int ,
foreign key (cod_producto) references producto_medicamento(cod_producto),
cantidad_inicial int,
cantidad int
);

create table detalle_compra(
cod_detcompra int primary key auto_increment not null,
cod_producto int,
foreign key (cod_producto) references producto_medicamento(cod_producto),
subtotal decimal(10,2),
cantidad int
);

create table proveedor(
cod_proveedor int primary key auto_increment not null,
nombre_proveedor varchar(150) null,
direccion varchar(200) null,
celular char(9)
);

create table compra(
cod_compra int primary key auto_increment not null,
cod_proveedor int,
foreign key (cod_proveedor) references proveedor(cod_proveedor),
fecha_compra date,
cod_detcompra int,
foreign key (cod_detcompra) references detalle_compra(cod_detcompra)
);

create table detalle_venta(
cod_detventa int primary key auto_increment not null,
fecha_venta date,
precio_venta decimal(10,2),
subtotal decimal(10,2),
cantidad int,
cod_producto int,
foreign key (cod_producto) references producto_medicamento(cod_producto),
cod_productven int,
foreign key (cod_productven) references producto_vencidos(cod_productven)
);