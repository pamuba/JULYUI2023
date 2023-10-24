const express = require('express')
const expressGrapHQL = require('express-graphql').graphqlHTTP
const schema = require('./schemas/schema.js');

const app = express()

app.use('/graphql', expressGrapHQL({
    schema,
    graphiql:true
}))

app.listen(4000, ()=>{
    console.log('Listening')
})