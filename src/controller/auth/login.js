const UserDAO = require('../../dao/UserDAO');

module.exports = (req, res) => {
    let data = req.body;

    console.log(data.email)
    if(data) {
        UserDAO.getUserByEmail(data.email).then(response => {
            console.log(response)
        })
    }

    res.send({onj: 'kkkkk'})
}