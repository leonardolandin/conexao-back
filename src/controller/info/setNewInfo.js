const InfoUtils = require('../../utils/info');
const InfoDAO = require('../../dao/InfoDAO');
const ValidationException = require('../../exception/ValidationException');
const Constants = require('../../utils/constants');
const axios = require('../../config/axios');
const moment = require('moment-timezone');

module.exports = (req, res) => {
    let body = req.body;
    let validate = InfoUtils.validateData(body);

    if(validate == true) {
        if(body.image && body.image.path) {
            let imgurImage = {
                image: InfoUtils.replaceBase64(body.image.path),
                name: body.image.name,
                title: body.title,
                description: body.description,
                type: InfoUtils.getMiMeTypeBase64(body.image.path)
            }

            axios.post(Constants.IMGUR.UPLOAD_ENDPOINT, imgurImage, { headers: { 'Authorization': `Client-ID ${process.env.IMGUR_CLIENT_ID}` } }).then(response => {
                if(response.data.success) {
                    let imgurResponse = response.data.data;
                    body.image.path = imgurResponse.link;
                    body.active = true;
                    body.created = moment(new Date()).tz("America/Sao_Paulo").format('YYYY-MM-DDTHH:mm:ss');
            
                    InfoDAO.createNewInfo(body).then(data => {
                        let send = {
                            message: 'Informação criada com sucesso'
                        }
            
                        res.status(Constants.STATUS_CODE.CREATED);
                        res.send(send);
                    }).catch(error => {
                        ValidationException("Ocorreu um erro ao criar informação", Constants.STATUS_CODE.INTERNAL_SERVER_ERROR, res)
                    })
                }
            }).catch(error => {
                console.log(error)
            })
        } else {
            body.image = { path: null, name: null }
        }
    } else {
        ValidationException(validate.error, Constants.STATUS_CODE.BAD_REQUEST, res);
    }
}