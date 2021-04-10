SET DATEFORMAT dmy

BULK INSERT a1706202.a1706202.[Entregan]
   FROM 'e:\wwwroot\rcortese\entregan.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
		 
      )

SELECT  * FROM Entregan