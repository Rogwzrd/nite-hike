const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const mongoose = require('mongoose');
const userRoute = require('./api/userApi');


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
app.use(express.static(path.join(__dirname, 'client/public')));


// set mongoose database loaction
mongoose.Promise = Promise;
const MONGODB_URI = process.env.MONGrsODB_URI || "mongodb://localhost/nightHikeDb";

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
app.use('/api/users', userRoute);

// start server
app.listen(4000, () => console.log('Now browse to localhost:4000/'));