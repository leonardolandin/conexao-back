const User = require('../model/auth/UserModel');

const UserDAO = {}

UserDAO.getUserByEmail = async function(email) {
    return User.findOne({'email': email, 'active': true}, (err, result) => {
        return new Promise((resolve, reject) => {
            resolve(result)
        })
    })
}

module.exports = UserDAO;