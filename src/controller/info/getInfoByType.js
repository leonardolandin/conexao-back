const Constants = require('../../utils/constants');
const InfoDAO = require('../../dao/InfoDAO');

module.exports = (req, res) => {
    let type = req.params.type;

    if(type) {
        try {
            InfoDAO.getInfosByType(type).then(data => {
                if(data) {
                    res.status(Constants.STATUS_CODE.OK);
                    res.send(data);
                }
            })
        } catch(e) {
            res.status(Constants.STATUS_CODE.BAD_REQUEST);
            res.send({ message: 'Parametro inválido' }); 
        }
    } else {
        res.status(Constants.STATUS_CODE.BAD_REQUEST);
        res.send({ message: 'Parametro inválido' });  
    }
}