CREATE TABLE dolgozo AS SELECT * FROM kotroczo.dolgozo;
CREATE TABLE osztaly AS SELECT * FROM kotroczo.osztaly;

SELECT * FROM dolgozo;
SELECT * FROM osztaly;

-- 1. kik azok a dolgozók, akik a 10-es, vagy a 20-as osztályon dolgoznak?
SELECT dnev FROM dolgozo WHERE oazon = 10 OR oazon = 20;
SELECT dnev FROM dolgozo WHERE oazon IN (10,20);

--2. kik azok a dolgozók, akiknek a jutaléka nem nagyobb, mint hatszáz?
SELECT dnev FROM dolgozo WHERE jutalek<=600 OR jutalek IS NULL;
SELECT dnev FROM dolgozo MINUS SELECT dnev FROM dolgozo WHERE jutalek>600;

--3. Adjuk meg azoknak a dolgozóknak a nevét és fizetésük kétszeresét, akik a 10-es osztályon dolgoznak!
SELECT dnev, fizetes*2 AS fiz2 FROM dolgozo WHERE oazon = 10;

SELECT * FROM szeret;
SELECT * FROM szeret sz1, szeret sz2;

--4. Kik azok, akik legalább két féle gyümölcsöt szeretnek?
SELECT DISTINCT sz1.nev FROM szeret sz1, szeret sz2 WHERE sz1.nev = sz2.nev AND sz1.gyumolcs <> sz2.gyumolcs;

--5. Kik azok, akik legalább három féle gyümölcsöt szeretnek?
SELECT DISTINCT sz1.nev FROM szeret sz1, szeret sz2, szeret sz3 
WHERE sz1.nev = sz2.nev 
AND sz1.nev = sz3.nev 
AND sz1.gyumolcs <> sz2.gyumolcs
AND sz1.gyumolcs <> sz3.gyumolcs
AND sz2.gyumolcs <> sz3.gyumolcs;

--6. Kik szeretnek legfeljebb két féle gyümölcsöt?
SELECT DISTINCT nev from szeret MINUS 
SELECT DISTINCT sz1.nev FROM szeret sz1, szeret sz2, szeret sz3 
WHERE sz1.nev = sz2.nev 
AND sz1.nev = sz3.nev 
AND sz1.gyumolcs <> sz2.gyumolcs
AND sz1.gyumolcs <> sz3.gyumolcs
AND sz2.gyumolcs <> sz3.gyumolcs;

--7. Kik azok a dolgozók, akiknek a főnöke a KING?
SELECT dnev FROM dolgozo WHERE fonoke IN (SELECT dkod from dolgozo WHERE dnev = 'KING');

SELECT d2.dnev FROM dolgozo d1, dolgozo d2
WHERE d1.dkod = d2.fonoke AND d1.dnev = 'KING';

--8. Kik azok a dolgozók, akik többet keresnek a főnöküknél?
SELECT b.dnev FROM dolgozo f, dolgozo b
WHERE f.dkod = b.fonoke AND f.fizetes < b.fizetes;

--9. Kik azok a dolgozók, akik főnökének a főnöke a KING?
SELECT b.dnev FROM dolgozo ff, dolgozo f, dolgozo b
WHERE f.dkod = b.fonoke AND f.fonoke = ff.dkod AND ff.dnev = 'KING';

-----
SELECT * FROM dolgozo;
SELECT * FROM osztaly;

SELECT * FROM dolgozo NATURAL JOIN osztaly;

--10. Kik azok a dolgozók, akiknek a telephelye Dallas, vagy Chicago?
SELECT dnev FROM dolgozo NATURAL JOIN osztaly 
WHERE telephely = 'DALLAS' OR telephely = 'CHICAGO';




