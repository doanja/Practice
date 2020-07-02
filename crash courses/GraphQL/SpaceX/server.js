const express = require('express');
const cors = require('cors');

// GraphQL
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

//  allow cross-origin
app.use(cors());

//  GraphQL
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
