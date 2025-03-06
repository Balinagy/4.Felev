--Add meg azon dolgozók foglalkozásaik első betűjének az ASCII kódját,
--akik fizetése nagyobb, mint 2000 és a telephelyük karakterhossza nagyobb, mint 7. (ascii_code)
SELECT ASCII(SUBSTR(foglalkozas,1,1)) FROM dolgozo NATURAL JOIN osztaly WHERE fizetes > 2000 AND LENGTH(telephely) > 7;
