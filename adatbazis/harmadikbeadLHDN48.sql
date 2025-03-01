SELECT * FROM dolgozo;
SELECT d2.dnev FROM dolgozo d1, dolgozo d2
WHERE d1.dkod = d2.fonoke AND d1.dnev LIKE '_O%' AND d2.dnev LIKE '_O%';