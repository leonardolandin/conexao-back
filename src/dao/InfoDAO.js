const Info = require('../model/Info');

module.exports = {
    getInfosByType: async (type) => {
        return Info.find({'type': type}, (err, result) => {
            return new Promise((resolve, reject) => {
                resolve(result)
            })
        })
    },
    createNewInfo: async (infoModel) => {
        return Info.insertMany(infoModel, (err, result) => {
            return new Promise((resolve, reject) => {
                resolve(result)
            })
        })
    },
    editInfo: async (infoModel) => {
        return Info.updateOne({'_id': infoModel._id}, infoModel, (err, result) => {
            return new Promise((resolve, reject) => {
                resolve(result)
            })
        })
    },
    setStatus: async (infoModel) => {
        return Info.updateOne({'_id': infoModel._id}, { active: infoModel.active,  modificated: infoModel.modificated }, (err, result) => {
            return new Promise((resolve, reject) => {
                resolve(result)
            })
        })
    }
}