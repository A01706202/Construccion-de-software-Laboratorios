/*	Parte 1 - Consulta con funciones agregadas

Materiales(Clave, Descripción, Precio, PorcentajeImpuesto)
Proveedores(RFC, RazonSocial)
Proyectos(Numero, Denominacion)
Entregan(Clave, RFC, Numero, Fecha, Cantidad)
*/

/* 1) La suma de las cantidades e importe total de todas las entregas realizadas durante el 97. */

--Producto 15 pesos		impuesto 10% ->  15 + 15 * .1

select sum(Cantidad) as 'Suma de cantidades', sum(Cantidad * (Precio + Precio * PorcentajeImpuesto/100)) as 'Ingresos totales'
from Entregan E, Materiales M
where E.clave=M.clave and YEAR(E.Fecha)=1997



/* 2) Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas. */

select RazonSocial, count(*) as 'Numero de entregas', sum(Cantidad * (Precio + Precio * PorcentajeImpuesto/100)) as 'Ingresos totales'
from Proveedores P, Entregan E, Materiales M
where E.RFC=P.RFC and M.clave=E.clave
group by RazonSocial
order by 'Ingresos totales' desc



/* 3) Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, 
la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada 
sea mayor a 400. */

select M.Clave, Descripcion, sum(Cantidad) as 'Cantidad total',  min(Cantidad) as 'Cantidad mínima', max(Cantidad) as 'Cantidad máxima',
sum(Cantidad * (Precio + Precio * PorcentajeImpuesto/100)) as 'Ingresos totales'
from Materiales M, Entregan E
where M.clave=E.clave 
group by M.Clave, Descripcion
having avg(Cantidad)>400
order by Descripcion desc



/* 4) Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la 
clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500. */

select RazonSocial, AVG(Cantidad) as 'Cantidad promedio', M.Clave, Descripcion
from Entregan E, Materiales M, Proveedores P
where E.Clave=M.Clave and E.RFC=P.RFC	
group by RazonSocial, M.Clave, Descripcion
having AVG(Cantidad) > 500
order by 'Cantidad promedio' desc


/* 5) Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: 
aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada 
sea mayor a 450. */

select RazonSocial, AVG(Cantidad) as 'Cantidad promedio',  M.Clave, Descripcion
from entregan E, materiales M, Proveedores P
where E.Clave=M.Clave and E.RFC=P.RFC
group by RazonSocial, M.Clave, Descripcion
having AVG(Cantidad) not between (370) and (450)
order by 'Cantidad promedio' desc



/*	Parte 2 - Insertar valores	*/

/* 
Considerando que los valores de tipos CHAR y VARCHAR deben ir encerrados entre apóstrofes, los valores numéricos 
se escriben directamente y los de fecha, como '1-JAN-00' para 1o. de enero del 2000, inserta cinco nuevos materiales.
*/

insert into Materiales values (1440, 'Piedra', 250, 2.88);
insert into Materiales values (1450, 'Hormigón', 300, 2.9);
insert into Materiales values (1460, 'Yeso', 70, 2.92);
insert into Materiales values (1470, 'Madera', 150, 2.94);
insert into Materiales values (1480, 'Vidrio', 200, 2.96);


/*	Parte 3 - Consultas con roles y subconsultas	*/

/* 1) Clave y descripción de los materiales que nunca han sido entregados. */

select distinct M.clave, descripcion
from Materiales M, Entregan
where M.Clave not in (select Clave from Entregan)


/* 2) Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 
'Querétaro Limpio'. */

select RazonSocial
from Proveedores P, Proyectos PR, Entregan E
where E.Numero = PR.Numero and E.RFC = P.RFC
and Denominacion = 'Vamos México'


/* 3) Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'. */

SELECT DISTINCT Descripcion
FROM Materiales M, Entregan E, Proyectos P
where M.Clave = E.Clave
and P.Numero = E.Numero
and Denominacion not in (select Denominacion
from Materiales M, Entregan E, Proyectos P
where M.Clave = E.Clave
and P.Numero = E.Numero
and Denominacion = 'CIT Yucatan')


/* 4) Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor 
al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'. */


/* 5) RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades 
totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001. */