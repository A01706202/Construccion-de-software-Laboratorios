			-- Ejercicio 1 --
drop TABLE Entregan
drop TABLE Materiales
drop TABLE proyectos
drop TABLE Proveedores

CREATE TABLE Materiales
(
  Clave numeric(5) not null,
  Descripcion varchar(50),
  Costo numeric (8,2)
)

CREATE TABLE Proveedores
(
  RFC char(13) not null,
  RazonSocial varchar(50)
)

CREATE TABLE Proyectos
(
  Numero numeric(5) not null,
  Denominacion varchar(50)
)

CREATE TABLE Entregan
(
  Clave numeric(5) not null,
  RFC char(13) not null,
  Numero numeric(5) not null,
  Fecha DateTime not null,
  Cantidad numeric (8,2)
)

BULK INSERT a1706202.a1706202.[Materiales]
  FROM 'e:\wwwroot\rcortese\materiales.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )
  
  BULK INSERT a1706202.a1706202.[Proyectos]
  FROM 'e:\wwwroot\rcortese\Proyectos.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

BULK INSERT a1706202.a1706202.[Proveedores]
  FROM 'e:\wwwroot\rcortese\Proveedores.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

SET DATEFORMAT dmy -- especificar formato de la fecha

BULK INSERT a1706202.a1706202.[Entregan]
  FROM 'e:\wwwroot\rcortese\Entregan.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )
 

			
			-- Ejercicio 2--
INSERT INTO Materiales values(1000, 'xxx', 1000)

Delete from Materiales where Clave = 1000 and Costo = 1000

ALTER TABLE Materiales add constraint llaveMateriales PRIMARY KEY (Clave)

INSERT INTO Materiales values(1000, 'xxx', 1000)

sp_helpconstraint materiales

ALTER TABLE Proveedores add constraint llaveProveedores PRIMARY KEY (RFC)
ALTER TABLE Proyectos add constraint llaveProyectos PRIMARY KEY (Numero)

ALTER TABLE Entregan add constraint llaveEntregan PRIMARY KEY (Clave,RFC,Numero,Fecha)
sp_helpconstraint Entregan



			-- Ejercicio 3--
SELECT  * FROM Materiales
SELECT  * FROM Proveedores
SELECT  * FROM Proyectos
SELECT  * FROM Entregan

INSERT INTO entregan values (0, 'xxx', 0, '1-jan-02', 0) ;

Delete from Entregan where Clave = 0

ALTER TABLE entregan add constraint cfentreganclave
  foreign key (clave) references materiales(clave);

ALTER TABLE entregan add constraint cfentreganrfc
  foreign key (RFC) references proveedores(RFC);

ALTER TABLE entregan add constraint cfentregannumero
  foreign key (Numero) references proyectos(Numero);

sp_helpconstraint Entregan


			-- Ejercicio 4--
INSERT INTO entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0);

Delete from Entregan where Cantidad = 0

ALTER TABLE entregan add constraint cantidad check (cantidad > 0) ;
SELECT  * FROM Entregan