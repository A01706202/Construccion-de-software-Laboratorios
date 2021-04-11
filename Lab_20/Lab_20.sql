/*	Consulta de una tabla	*/
SELECT * from Materiales



/*	Selección	*/
select * from Materiales
where clave=1000



/*	Proyección	*/
select clave,rfc,fecha from Entregan



/*	Reunión natural	*/
select * from Materiales, Entregan
where Materiales.clave = Entregan.clave

--    Si algún material no ha se ha entregado ¿Aparecería en el resultado de esta consulta? 
-- No, porque en la instrucción con el "=" indica que solo se seleccionaran donde salgan las claves en entregan y en materiales



/*	Reunión con criterio específico	*/
select * from Entregan, Proyectos
where Entregan.numero <= Proyectos.numero



/*	Unión (se ilustra junto con selección)	*/
(select * from Entregan where clave=1450) union (select * from Entregan where clave=1300)

-- ¿Cuál sería una consulta que obtuviera el mismo resultado sin usar el operador Unión? Compruébalo.
select * from Entregan 
where clave=1450 or clave=1300



/*	Intersección (se ilustra junto con selección y proyección)	*/
(select clave from Entregan where numero=5001) intersect (select clave from Entregan where numero=5018)



/*	Diferencia (se ilustra con selección)	*/
-- "minus" es una palabra reservada que no está definida en SQL Server, define una consulta que regrese el mismo resultado.
select * from Entregan 
except
(select * from Entregan where clave=1000)



/*	Producto cartesiano	*/
select * from Entregan, Materiales

-- ¿Cómo está definido el número de tuplas de este resultado en términos del número de tuplas de entregan y de materiales?
--    Son el resultado del punto cartesiano entre la tabla Entregan y Materiales.



/*	Construcción de consultas a partir de una especificación	*/
-- Plantea ahora una consulta para obtener las descripciones de los materiales entregados en el año 2000.

/* Para SQL Server */
set dateformat dmy

select descripcion
from Entregan, Materiales
where fecha>='01/01/00'
AND fecha<'01/01/01'

/* Para MySQL */
select descripcion from Entregan, Materiales where fecha>='2000/01/01' AND fecha<'2001/01/01'

-- ¿Por qué aparecen varias veces algunas descripciones de material?
--    Por el producto cartesiano que se produce al seleccionar las dos tablas.




/*	Uso del calificador distinct	*/
set dateformat dmy

select distinct descripcion
from Entregan, Materiales
where fecha>='01/01/00'
AND fecha<'01/01/01'

-- ¿Qué resultado obtienes en esta ocasión?
--    Ya no se repiten las descripciones



/*	Ordenamientos	*/

--  Obten los números y denominaciones de los proyectos con las fechas y cantidades de sus entregas,
--	ordenadas por número de proyecto, presentando las fechas de la más reciente a la más antigua.
select Proyectos.Numero, denominacion, fecha, Cantidad
from Entregan, Proyectos
order by fecha desc



/*	Operadores de cadena	*/

SELECT * FROM Materiales 
where Descripcion LIKE 'Si%'

-- ¿Qué resultado obtienes?
--    Las descripciones que empiezen con las letras "Si".

-- Explica que hace el símbolo '%'.
--    Indica que hay más palabras y letras a parte de las primeras, haciendo que busque las descripciones que tengan "Si" en el principio.

-- ¿Qué sucede si la consulta fuera : LIKE 'Si' ?
--    Tendráa que devolver las descripciones que sean iguales a "Si".

-- ¿Qué resultado obtienes?
--    Ninguno.

-- Explica a qué se debe este comportamiento.
--    Porque no existen las descripciones que digan "Si".

DECLARE @foo varchar(40);
DECLARE @bar varchar(40);
SET @foo = '¿Que resultado';
SET @bar = ' ¿¿¿??? '
SET @foo += ' obtienes?';
PRINT @foo + @bar;

-- ¿Qué resultado obtienes de ejecutar el siguiente código?
--    La frase "¿Qué resultado obtienes? ¿¿¿???"

-- ¿Para qué sirve DECLARE?
--    Para declarar variables.

-- ¿Cuál es la función de @foo?
--    Es una variable de caracteres.

-- ¿Qué realiza el operador SET?
--    Le agrega valores a las variables


-- Ahora explica el comportamiento, función y resultado de cada una de las siguientes consultas:

SELECT RFC FROM Entregan WHERE RFC LIKE '[A-D]%';
-- Se muestra las RFC que tengan letras de entre A y D específicamente.

SELECT RFC FROM Entregan WHERE RFC LIKE '[^A]%';
-- Devuelve todas las RFC que no contengan A en ninguna parte.

SELECT Numero FROM Entregan WHERE Numero LIKE '___6';
-- Devuelve los numeros que terminan en 6 y que tengan tres caracteres de n�meros antes del 6, los cuales se indican con "_".



/*	Operadores lógicos	*/

SELECT Clave,RFC,Numero,Fecha,Cantidad
FROM Entregan
WHERE Numero Between 5000 and 5010;

-- ¿Cómo filtrarías rangos de fechas?
--    Primero se pondría el set dateformat dmy y después en el beetween ya se pondría el rango de fechas como por ejemplo 
--    "Between '01/01/2000' and '01/05/2000';"

SELECT RFC, Cantidad, Fecha, Numero 
FROM Entregan 
WHERE Numero Between 5000 and 5010 AND 
Exists ( SELECT RFC 
FROM Proveedores 
WHERE RazonSocial LIKE 'La%' and Entregan.RFC = Proveedores.RFC )

-- ¿Qué hace la consulta?
-- Muestra el RFC, cantidad, fecha y numero donde el rango del numero es 5000 y 5010 de la razon Social empieze con "La"

-- ¿Qué función tiene el paréntesis ( ) después de EXISTS?
--    Permite el espacio para hacer una subconsulta sin que haya errores de sintáxis con la consulta.

-- Tomando de base la consulta anterior del EXISTS, realiza el query que devuelva el mismo resultado, pero usando el operador IN
SELECT RFC, Cantidad, Fecha, Numero
FROM Entregan
WHERE RFC in (SELECT Entregan.RFC
FROM Entregan, Proveedores
WHERE RazonSocial LIKE 'La%' and Entregan.RFC = Proveedores.RFC)
and Numero Between 5000 and 5010

--Realiza un ejemplo donde apliques algún operador : ALL, SOME o ANY.
select Fecha
from Entregan
where Numero = any (select Numero
from Proyectos
where Denominacion like 'A%')
order by Fecha


-- ¿Qué hace la siguiente sentencia? Explica por qué.

SELECT TOP 2 * FROM Proyectos
-- Muestra las dos primeras filas de la tabla de Proyectos, porque el TOP recorre la tabla y devuelve las primeras filas que se le indican,
-- en este caso 2.

-- ¿Qué sucede con la siguiente consulta? Explica por qué.
SELECT TOP Numero FROM Proyectos

--    Marca un error de sintaxis, ya que no se le indica cuantas filas tiene que regresar, para que funcione, tendríamos que indicarlo así:
--    SELECT TOP 1 Numero FROM Proyectos



/*	Modificando la estructura de un tabla existente.	*/

ALTER TABLE materiales ADD PorcentajeImpuesto NUMERIC(6,2); 
UPDATE materiales SET PorcentajeImpuesto = 2*clave/1000;
select * from Materiales

-- ¿Qué consulta usarías para obtener el importe de las entregas es decir, el total en dinero de lo entregado, basado en la cantidad 
--de la entrega y el precio del material y el impuesto asignado?
select Descripcion, sum(cantidad*(precio+PorcentajeImpuesto)) as 'total'
from Materiales M, Entregan E
where M.Clave = E.Clave
group by Descripcion



/*	Creación de vistas	*/
-- Comprueba lo anterior, creando vistas para cinco de las consultas que planteaste anteriormente en la práctica. 
-- Posteriormente revisa cada vista creada para comprobar que devuelve el mismo resultado.

/* 1)
SELECT RFC, Cantidad, Fecha, Numero
FROM Entregan
WHERE RFC in (SELECT Entregan.RFC
FROM Entregan, Proveedores
WHERE RazonSocial LIKE 'La%' and Entregan.RFC = Proveedores.RFC)
and Numero Between 5000 and 5010
order by RFC
*/
create view Consulta1(RFC) as 
select Entregan.RFC
from Entregan, Proveedores
where RazonSocial LIKE 'La%' and Entregan.RFC = Proveedores.RFC

select distinct E.RFC, Cantidad, Fecha, Numero
from Entregan E, Consulta1 C
where E.RFC=C.RFC and Numero Between 5000 and 5010


/* 2)
select Proyectos.Numero, denominacion, fecha, Cantidad
from Entregan, Proyectos
order by fecha desc
*/
create view Consulta2(Numero, Denominacion, Fecha, Cantidad) as
select Proyectos.Numero, denominacion, fecha, Cantidad
from Entregan, Proyectos

select * from Consulta2
order by fecha desc


/* 3)
SELECT Clave,RFC,Numero,Fecha,Cantidad
FROM Entregan
WHERE Numero Between 5000 and 5010;
*/
create view Consulta3(Clave, RFC, Numero, Fecha, Cantidad) as
SELECT Clave,RFC,Numero,Fecha,Cantidad
FROM Entregan
WHERE Numero<=5010

select * from Consulta3
where Numero>=5000


/* 4)
(select clave from Entregan where numero=5001) intersect (select clave from Entregan where numero=5018)
*/
create view Consulta4(Clave) as
select clave from Entregan where numero=5001

create view Consulta5(Clave) as
select clave from Entregan where numero=5018

select distinct Consulta4.Clave
from Consulta4, Consulta5
where Consulta4.Clave = Consulta5.Clave


/* 5)
select distinct descripcion
from Entregan, Materiales
where fecha>='01/01/00'
AND fecha<'01/01/01'
*/
/* En SQL Server */
set dateformat dmy

create view Consulta6(Descripcion, Fecha) as
select distinct descripcion, Fecha
from Entregan, Materiales
where fecha>='01/01/00'

select distinct descripcion 
from Consulta6
where fecha<'01/01/01'

/* En MySQL */

create view Consulta6(Descripcion, Fecha) as
select distinct descripcion, Fecha
from Entregan, Materiales
where fecha>='00/01/01'

select distinct descripcion 
from Consulta6
where fecha<'01/01/01'


/*		Ejericios		*/

 -- Los materiales (clave y descripción) entregados al proyecto "México sin ti no estamos completos".

select Materiales.clave, Materiales.descripcion 
from Materiales, Entregan, Proyectos 
where Materiales.clave = Entregan.clave
and Entregan.numero = (select Proyectos.numero
from Proyectos
where Proyectos.denominacion = 'Mexico sin ti no estamos completos')


-- Los materiales (clave y descripción) que han sido proporcionados por el proveedor "Acme tools".

select Materiales.clave, Materiales.descripcion 
from Materiales, Entregan, Proyectos 
where Materiales.clave = Entregan.clave
and Entregan.RFC = (select Proveedores.RFC
from Proveedores
where Proveedores.razonSocial = 'Acme tools')


-- El RFC de los proveedores que durante el 2000 entregaron en promedio cuando menos 300 materiales.

select distinct P.RFC
from Entregan E, Proveedores P
where YEAR(E.fecha) = 2000 and P.RFC = E.RFC
group by P.RFC
having avg(300) >= 300


-- El Total entregado por cada material en el año 2000.

select Descripcion, sum(Precio) as 'Total entregado'
from Materiales M, Entregan E
where M.Clave = E.Clave and YEAR(E.fecha) = 2000
group by Descripcion


-- La Clave del material más vendido durante el 2001. (se recomienda usar una vista intermedia para su solución).

/* En SQL Server */
select top 1 Materiales.clave
from Materiales, Entregan
where YEAR(Entregan.Fecha) = 2001 and 
exists(select top 1 Cantidad
from Entregan
order by cantidad desc)

/* En MySQL */
select Materiales.clave 
from Materiales, Entregan 
where YEAR(Entregan.Fecha) = 2001 and 
exists(select Cantidad 
from Entregan 
order by cantidad desc 
limit 1) 
limit 1


-- Productos que contienen el patrón 'ub' en su nombre.

select * from Materiales 
where Descripcion LIKE '%ub%'


-- Denominación y suma del total a pagar para todos los proyectos.

select Denominacion, sum(Cantidad*(precio+PorcentajeImpuesto)) as 'total a pagar'
from Proyectos P, Materiales M, Entregan E
where P.Numero = E.Numero and M.Clave = E.Clave
group by Denominacion


-- Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa 
-- en acción que no se encuentran apoyando al proyecto Educando en Coahuila (Solo usando vistas).

create view Coahuila(Denominacion,RFC,RazonSocial)
as select PR.Denominacion, P.RFC, P.RazonSocial
from Proveedores P, Proyectos PR, Entregan E
where E.RFC = P.RFC and E.Numero = PR.Numero
and PR.Denominacion = 'Educando en Coahuila'

create view Televisa(Denominacion, RFC, RazonSocial)
as select PR.Denominacion, P.RFC, P.RazonSocial
from Proveedores P, Proyectos PR, Entregan E, Materiales M
where E.RFC = P.RFC and E.Numero = PR.Numero and M.Clave = E.Clave
and PR.Denominacion = 'Televisa en acción'

select T.Denominacion, T.RFC, T.RazonSocial
from Televisa T
left join Coahuila C
on T.RFC = C.RFC
where C.RFC is null


-- Denominación, RFC y RazonSocial de los proveedores que se suministran materiales al proyecto Televisa en acción 
-- que no se encuentran apoyando al proyecto Educando en Coahuila (Sin usar vistas, utiliza not in, in o exists).
 
select Denominacion, P.RFC, RazonSocial
from Proveedores P, Proyectos PR, Entregan E, Materiales M
where E.RFC = P.RFC and E.Numero = PR.Numero and M.Clave = E.Clave
and Denominacion = 'Televisa en acción'
and P.RFC not in (select P.RFC
from Proveedores P, Proyectos PR, Entregan E
where E.RFC = P.RFC and E.Numero = PR.Numero
and Denominacion = 'Educando en Coahuila')
order by RFC desc


-- Costo de los materiales y los Materiales que son entregados al proyecto Televisa en acción cuyos proveedores 
-- también suministran materiales al proyecto Educando en Coahuila.

select  M.Precio, M.Descripcion
from Proveedores P, Proyectos PR, Entregan E, Materiales M
where E.RFC = P.RFC and E.Numero = PR.Numero and M.Clave = E.Clave
and Denominacion = 'Televisa en acción'
and P.RFC in (select P.RFC
from Proveedores P, Proyectos PR, Entregan E
where E.RFC = P.RFC and E.Numero = PR.Numero
and Denominacion = 'Educando en Coahuila')
order by M.Precio desc