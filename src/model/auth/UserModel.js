const mongoDB = require('../../database');

const dataSchema = new mongoDB.MongoDB.Schema({
    email: String,
    password: String,
    name: String,
    superUser: Boolean,
    active: Boolean,
    created: Date,
    modificated: Date || null
})
const User = mongoDB.MongoDB.model('user', dataSchema, 'users')

module.exports = User