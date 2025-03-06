-- 1. Kik azok a dolgozók, akik 1982 január 1 után léptek be a céghez?
SELECT * from dolgozo;
SELECT dnev FROM dolgozo WHERE belepes > TO_DATE('82-JAN.-01');
SELECT dnev FROM dolgozo WHERE belepes > TO_DATE('1982.01.01', 'YYYY.MM.DD');

--2. Adjuk meg azon dolgozók nevét, akik nevének a második betűje 'A'.
SELECT dnev FROM dolgozo WHERE dnev LIKE '_A%';
SELECT dnev FROM dolgozo WHERE INSTR(dnev, 'A') = 2;
SELECT dnev FROM dolgozo WHERE SUBSTR(dnev, 2, 1)='A';

--3. Adjuk meg azon dolgozók nevét, akik nevében van legalább két 'L' betű.
SELECT dnev FROM dolgozo WHERE dnev LIKE '%L%L%';
SELECT dnev FROM dolgozo WHERE INSTR(dnev, 'L', 1, 2) > 0;
SELECT dnev FROM dolgozo WHERE INSTR(dnev, 'L') <> 0 AND INSTR(SUBSTR(dnev, INSTR(dnev, 'L')+1), 'L') <> 0;
SELECT dnev FROM dolgozo WHERE LENGTH(REPLACE(dnev,'L', '')) <= LENGTH(dnev) -2;

-- 4. Listázzuk ki a dolgozók nevét és fizetését, valamint jelenítsük meg a fizetésüket
-- grafikusan is úgy, hogy a fizetést 1000-re kerekítve, minden 1000-t egy '#' jel jelöl.
SELECT dnev, fizetes, RPAD(' ',TRUNC(fizetes/1000)+1, '#') AS GRAFIKON FROM dolgozo ORDER BY 2 DESC;

--5. Adjuk meg, hogy milyen napra esett KING belépési dátuma hónapjának utolsó napja.
SELECT TO_CHAR(ROUND(belepes, 'MONTH')-1, 'DAY') nap FROM dolgozo WHERE dnev = 'KING';
SELECT TO_CHAR(LAST_DAY(belepes), 'DAY') nap FROM dolgozo WHERE dnev = 'KING';

--6. Adjuk meg azokat a név főnök párokat, ahol a két embernek a neve ugyanannyi betűből áll.
SELECT d1.dnev beosztott, d2.dnev főnök FROM dolgozo d1, dolgozo d2 WHERE LENGTH(d1.dnev) = LENGTH(d2.dnev) AND d1.fonoke = d2.dkod;


CREATE TABLE fiz_kategoria AS SELECT * FROM kotroczo.fiz_kategoria;
SELECT * FROM fiz_kategoria;

SELECT * FROM dolgozo, fiz_kategoria WHERE fizetes BETWEEN also AND felso;

SELECT * FROM dolgozo JOIN fiz_kategoria ON fizetes BETWEEN also AND felso;



