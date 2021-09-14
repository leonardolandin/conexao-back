const ValidationException = require('../../exception/ValidationException');
const Constants = require('../../utils/constants');
const InfoDAO = require('../../dao/InfoDAO');
const moment = require('moment-timezone');


module.exports = (req, res) => {
    let body = req.body;

    if(body._id) {
        body.modificated = moment(new Date()).tz("America/Sao_Paulo").format('YYYY-MM-DDTHH:mm:ss');
        InfoDAO.setStatus(body).then(data => {
            res.status(Constants.STATUS_CODE.OK);
            res.send({message: 'Status atualizado'});
        })
    } else {
        ValidationException("Ocorreu um erro ao atualizar status", Constants.STATUS_CODE.BAD_REQUEST, res);
    }
}