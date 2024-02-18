// Vaibhav Guliani (101336421)

// Calling in all the required modules
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')

// Setting up the appolo server
async function startServer() {
    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({app: app})

    mongoose.set('strictQuery', true)
    await mongoose.connect('mongodb+srv://meghagangnani:<Pawpatrol7!>@users.a0h9kco.mongodb.net/?retryWrites=true&w=majority')
    console.log('Update: Database is connected to the project.')
    const port = 8000
    app.listen(port, () => console.log(`Server is up at port ${port}`))
}

// Starting the server
startServer()