const mongoDB = require('../database');

const dataSchema = new mongoDB.MongoDB.Schema({
    title: String,
    description: String,
    typeAssignment: {
        type: String,
        enum : ['ACCOMMODATION','QUADRICYCLE', 'BANANABOAT', 'BOAT', '4X4', 'RAPEL' ,'CAPITOLIO']
    },
    image: Object,
    active: Boolean,
    created: Date,
    modificated: Date || null
})

module.exports = mongoDB.MongoDB.model('info', dataSchema, 'infos')