const User = require('../model/auth/UserModel');

const UserDAO = {
    getUserByEmail: (email) => {
        return User.findOne({'email': email}, (err, result) => {
            return new Promise((resolve, reject) => {
                resolve(result)
            })
        })
    }
}



module.exports = UserDAO;