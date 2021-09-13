const mongoDB = require('../database');

const dataSchema = new mongoDB.MongoDB.Schema({
    title: String,
    description: String,
    type: {
        type: String,
        enum : ['ACCOMMODATION','QUADRICYCLE', 'BANANABOAT', 'BOAT', '4X4', 'RAPEL' ,'CAPITOLIO']
    },
    image: {
        path: String || null,
        name: String || null
    },
    active: Boolean,
    created: Date,
    modificated: Date || null
})

module.exports = mongoDB.MongoDB.model('info', dataSchema, 'infos')