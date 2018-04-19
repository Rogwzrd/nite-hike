require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const mongoose = require('mongoose');
const routes = require('./api/index');
const PORT = process.env.PORT || 4000;

// const typeDefs = [`
// type Query {
//   hello: String,
//   goodbye: String
//   name: String
// }
//
// type Character{
//     name: String
// }
//
// schema {
//   query: Query
// }`];
//
// const resolvers = {
//   Query: {
//     hello: () => {
//       return 'world'
//     },
//     goodbye: () => {
//         return 'cruel world'
//     },
//     name: () => {
//             return 'heeeeeey i\'m a character'
//     }
//    
// };


// instantiate express
const app = express();

// set bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//set public files
app.use(express.static(path.join(__dirname, 'client/build')));

//moving login logic to component
app.use(express.static(path.join(__dirname, 'auth/')));


// set mongoose database location
mongoose.Promise = Promise;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nightHikeDb";

// connect db
mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

// test connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('database connected')
});

// const schema = makeExecutableSchema({typeDefs, resolvers});

// set graphql
// app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
// app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}));

// set api routing
app.use('/api/users', routes.userApi);
app.use('/api/events', routes.eventApi);

//send user to client build
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// start server
app.listen(PORT, () => console.log(`Now browse to localhost:${PORT}/`));