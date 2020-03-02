-- Drops the twotables_db if it exists currently --
DROP DATABASE IF EXISTS twotables_db;
-- Creates the "twotables_db" database --
CREATE DATABASE twotables_db;

-- Makes it so all of the following code will affect twotables_db --
USE twotables_db;

-- Creates the table "people" within twotables_db --
CREATE TABLE songs
(
    id INTEGER(100) NOT NULL
    AUTO_INCREMENT UNIQUE,
    artist VARCHAR
    (50) NOT NULL,
    song_name VARCHAR
    (50) NOT NULL,
    year INTEGER
    (4),
    num1 DECIMAL
    (10 , 4 ),
    num2 DECIMAL
    (10 , 4 ),
    num3 DECIMAL
    (10 , 4 ),
    num4 DECIMAL
    (10 , 4 ),
    num5 DECIMAL
    (10 , 4 ),
    num6 DECIMAL
    (10 , 4 ),
    PRIMARY KEY
    (id)
);

    use twotables_db;
    select *
    from songs;


    use twotables_db;
    CREATE TABLE albums
    (
        id INTEGER(100) NOT NULL
        AUTO_INCREMENT UNIQUE,
    artist VARCHAR
        (50) NOT NULL,
    album_name VARCHAR
        (50) NOT NULL,
    year INTEGER
        (4),
    num1 DECIMAL
        (10 , 4 ),
    num2 DECIMAL
        (10 , 4 ),
    num3 DECIMAL
        (10 , 4 ),
    num4 DECIMAL
        (10 , 4 ),
    num5 DECIMAL
        (10 , 4 ),
    PRIMARY KEY
        (id)
);
/*
use twotables_db;
select 
s.year as 'Year',
a.id as 'Album Position',
a.artist as 'Artist',
s.song_name as 'Song',
a.album_name as 'Album Name'
from songs as s
left join albums as a on s.artist = a.artist
where a.artist = ?
*/