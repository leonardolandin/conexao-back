const Info = require('../model/Info');

module.exports = {
    getInfosByType: async (type) => {
        return Info.find({'type': type}, (err, result) => {
            return new Promise((resolve, reject) => {
                resolve(result)
            })
        })
    }
}