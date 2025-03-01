CREATE TABLE szeret AS SELECT * FROM kotroczo.szeret;
SELECT * FROM szeret;

-- 1. Adjuk meg micimackó által szeretett gyümölcsöket (gyumolcs)
SELECT GYUMOLCS FROM szeret
WHERE nev = 'Micimackó';

-- 2. Adjuk meg azokat a gyümölcsöket amiket micimackó nem szeret
SELECT DISTINCT GYUMOLCS FROM szeret MINUS SELECT GYUMOLCS FROM szeret
WHERE nev = 'Micimackó';

-- 3. Adjuk meg azon személyek nevét akik szeretik az almát, de nem szeretik a körtét
SELECT DISTINCT NEV FROM szeret WHERE gyumolcs = 'alma' MINUS
SELECT DISTINCT NEV FROM szeret WHERE gyumolcs = 'körte';

-- ! Kik azok, akik az almát is szeretik és a körtét is?
SELECT DISTINCT nev FROM szeret WHERE gyumolcs = 'alma' INTERSECT
SELECT DISTINCT nev FROM szeret WHERE gyumolcs = 'körte';