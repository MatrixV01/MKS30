DELETE FROM foobar WHERE age > 50;

UPDATE foobar SET age = age + 1 WHERE age > 40;

INSERT INTO foobar VALUES ("hello", 42), (), ()

SELECT name, age FROM foobar WHERE age > 40 OR name IS NULL
  ORDER BY age DESC, somethingElse,

CREATE DATABASE foobar;

CREATE TABLE foobar (
  id INTEGER PRIMARY KEY ASC,
  name VARCHAR(100) UNIQUE,
  age INTEGER DEFAULT 35,
  bazID INTEGER,
  FOREIGN KEY (baziD) REFERENCES baz(id)
)

INNER JOIN

SELECT * FROM a LEFT OUTER JOIN b ON a.foo = b.bar;
