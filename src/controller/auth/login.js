const UserDAO = require('../../dao/UserDAO');
const Crypt = require('../../utils/crypt');

module.exports = (req, res) => {
    let data = req.body;

    if(data) {
        UserDAO.getUserByEmail(data.email).then((response) => {
            if(response._id) {
                if(Crypt.getSHA256ofJSON(data.password) == response.password) {
                    res.status(200)
                    res.send(response)
                }
            } else {
                res.status(403)
                res.send({message: 'Usuário não existe na base de dados'})
            }
        }).catch(error => {
        })
    }
}