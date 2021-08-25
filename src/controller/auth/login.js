const UserDAO = require('../../dao/UserDAO');

module.exports = (req, res) => {
    let data = req.body;

    if(data) {
        UserDAO.getUserByEmail(data.email).then((response) => {
            console.log(response)
        }).catch(error => {
        })
    }

    res.send({onj: 'kkkkk'})
}