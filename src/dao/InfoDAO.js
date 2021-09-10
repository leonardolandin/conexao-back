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
        //console.log(infoModel)
        return Info.insertMany(infoModel, (err, result) => {
            return new Promise((resolve, reject) => {
                resolve(result)
            })
        })
    }
}