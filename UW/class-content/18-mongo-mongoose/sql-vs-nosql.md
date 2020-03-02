# SQL vs NoSQL

- What are the advantages of using a noSQL database like MongoDB according to the MongoDB Website?

  - "Relational databases require that schemas be defined before you can add data. For example, you might want to store data about your customers such as phone numbers, first and last name, address, city and state – a SQL database needs to know what you are storing in advance."
  - "Object-oriented programming that is easy to use and flexible."

- What are the advantages of using a noSQL database like MongoDB according to the web (places like Quora)? (<http://stackoverflow.com/questions/2117372/what-are-the-advantages-of-using-a-schema-free-database-like-mongodb-compared-to>)

  - Deep query-ability. MongoDB supports dynamic queries on documents using a document-based query language that's nearly as powerful as SQL.
  - No schema migrations. Since MongoDB is schema-free, your code defines your schema.

- What are the disadvantages of using a NoSQL database like MongoDB according to the web (places like Quora)? (<http://stackoverflow.com/questions/2117372/what-are-the-advantages-of-using-a-schema-free-database-like-mongodb-compared-to>)

  - Sometimes, using joins and having strict schemas is actually preferable to MongoDB.
  - "If your database has a lot of relations and normalization, it might make little sense to use something like MongoDB. It's all about finding the right tool for the job."

- When to use SQL over NoSQL (https://www.integrant.com/when-to-use-sql-vs-nosql/)

  - You’re working with complex queries and reports. With SQL you can build one script that retrieves and presents your data. NoSQL doesn’t support relations between data types. Running queries in NoSQL is doable, but much slower.
  - You have a high transaction application. SQL databases are a better fit for heavy duty or complex transactions because it’s more stable and ensure data integrity.
  - You need to ensure ACID compliance (Atomicity, Consistency, Isolation, Durability) or defining exactly how transactions interact with a database.
  - You don’t anticipate a lot of changes or growth. If you’re not working with a large volume of data or many data types, NoSQL would be overkill.

- When to use NoSQL over SQL (https://www.integrant.com/when-to-use-sql-vs-nosql/)
  - You are constantly adding new features, functions, data types, and it’s difficult to predict how the application will grow over time.
    - Changing a data model is SQL is clunky and requires code changes. A lot of time is invested designing the data model because changes will impact all or most of the layers in the application.
    - In NoSQL, we are working with a highly flexible schema design or no predefined schema. The data modeling process is iterative and adaptive. Changing the structure or schema will not impact development cycles or create any downtime for the application.
  - You are not concerned about data consistency and 100% data integrity is not your top goal. This is related to the above SQL requirement for ACID compliance. For example, with social media platforms, it isn’t important if everyone sees your new post at the exact same time, which means data consistency is not a priority.
  - You have a lot of data, many different data types, and your data needs will only grow over time. NoSQL makes it easy to store all different types of data together and without having to invest time into defining what type of data you’re storing in advance.
  - Your data needs scale up, out, and down. As discussed above, NoSQL provides much greater flexibility and the ability to control costs as your data needs change.
