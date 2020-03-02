# Object Relational Mapping (ORM)

## What is it?
>**Object Relational Mapping (ORM) is the technique of accessing a relational database using an object-oriented programming language.** Object Relational Mapping is a way for our Javascript programs to manage database data by "mapping" database tables to classes and instances of classes to rows in those tables.  
>
>The basic premise is that if you have a class `User`, you should have a table called `users` in your database. Instances of the `User` class in your program should map to rows in the `users` table in the database. Properties of an instance of a `User` in your program should map to the columns in the `users` table.  
_quoted from [Javascript Orm Intro](https://learn.co/lessons/javascript-orm-intro)_

Here is a `users` table:
```sql
CREATE TABLE users {
  id INT(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(265) NOT NULL,
  password VARCHAR(256) NOT NULL,
  firstName VARCHAR(256) NOT NULL,
  lastName VARCHAR(256) NOT NULL
  PRIMARY KEY(id)
}
```

Here is a constructor function that can instantiate `User` instances:

```js
const dbConnection = require("../connection");

// this 
function User(data) {
  this.id = data.id;
  this.username = data.username;
  this.password = data.password;
  this.firstName = data.firstName;
  this.lastName = data.lastName;
}

User.prototype.findById = function(id, cb) {
  dbConnection.query("SELECT * FROM users WHERE id = ?", [id], function(err, data){
    if(err) throw err;

    cb(err, new User(data));
  });
}

User.prototype.findByUsername = function(username, cb) {
  dbConnection.query("SELECT * FROM users WHERE username = ?", [username], function(err, data){
    if(err) throw err;

    cb(err, new User(data));
  });
}
```

Here is how ORM is useful:

```js
const User = require("../models/User");
const myUser = User.findById(265);

```

Since most objects in your application will need a lot of the same operations (remember CRUD?), ORM can be generalized for every object type in your app (see Activity `12-OrmExample`).
 