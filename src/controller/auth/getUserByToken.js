const jwt = require('jsonwebtoken');
const User = require('../../dao/UserDAO');
const Constants = require('../../utils/constants');

module.exports = (req, res) => {
    let data = req.body;

    if(data && data.token) {
        try {
            let validationToken = jwt.verify(data.token, process.env.JWT);

            if(validationToken.email !== undefined) {
                User.getUserByEmail(validationToken.email).then(response => {
                    if(response && response._id) {
                        res.status(Constants.STATUS_CODE.OK);
                        res.send(response);
                    }
                }).catch(error => {
                    res.status(Constants.STATUS_CODE.INTERNAL_SERVER_ERROR);
                    res.send({message: "Ocorreu um erro ao realizar conexão com banco de dados", error});
                })
            } else {
                res.status(Constants.STATUS_CODE.UNAUTHORIZED);
                res.send({message: "Token expirado!"});
            }
        } catch(e) {
            res.status(Constants.STATUS_CODE.UNAUTHORIZED);
            res.send({message: "Token expirado!", error: e});
        }
    } else {
        res.status(Constants.STATUS_CODE.BAD_REQUEST);
        res.send({message: "Token inválido!"});
    }
}