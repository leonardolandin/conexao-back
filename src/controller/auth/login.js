const UserDAO = require('../../dao/UserDAO');
const Crypt = require('../../utils/crypt');
const Constants = require('../../utils/constants');
const JWT = require('jsonwebtoken');

module.exports = (req, res) => {
    let data = req.body;

    if(data) {
        UserDAO.getUserByEmail(data.email).then((response) => {
            if(response && response._id) {
                if(Crypt.getSHA1ofJSON(data.password) == response.password) {
                    let token = JWT.sign({ email: data.email, id: response._id }, process.env.JWT, { expiresIn: "12h" })

                    res.status(Constants.STATUS_CODE.OK);
                    res.send({token, response});
                } else {
                    res.status(Constants.STATUS_CODE.UNAUTHORIZED);
                    res.send({message: 'Usuário não existe na base de dados'})
                }
            } else {
                res.status(Constants.STATUS_CODE.UNAUTHORIZED);
                res.send({message: 'Usuário não existe na base de dados'})
            }
        }).catch(error => {
            res.status(Constants.STATUS_CODE.SERVICE_UNAVAILABLE);
            res.send(error);
        })
    }
}