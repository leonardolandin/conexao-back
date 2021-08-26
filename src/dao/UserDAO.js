const User = require('../model/auth/UserModel');

const UserDAO = {
    getUserByEmail: async (email) => {
        return User.findOne({'email': email, 'active': true}, (err, result) => {
            return new Promise((resolve, reject) => {
                resolve(result)
            })
        })
    },
    createNewUser: async (object) => {
        return User.insertMany(object, (err, result) => {
            return new Promise((resolve, reject) => {
                resolve(result)
            })
        })
    }
}

module.exports = UserDAO;