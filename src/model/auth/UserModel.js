const mongoDB = require('../../database');

const schema = new mongoDB.MongoDB.Schema({
    email: String,
    password: String,
    name: String,
    superUser: Boolean,
    active: Boolean,
    created: Date,
    modificated: Date || null
})

const User = mongoDB.MongoDB.model('user', schema, 'user')

module.exports = User