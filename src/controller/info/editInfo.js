const ValidationException = require('../../exception/ValidationException');
const Constants = require('../../utils/constants');
const InfoUtils = require('../../utils/info');
const InfoDAO = require('../../dao/InfoDAO');
const axios = require('../../config/axios');
const moment = require('moment-timezone');


module.exports = (req, res) => {
    let body = req.body;
    let validateBody = InfoUtils.validateData(body);

    if(validateBody == true) {
        let info = {
            _id: body._id,
            title: body.title,
            description: body.description,
            modificated: moment(new Date()).tz("America/Sao_Paulo").format('YYYY-MM-DDTHH:mm:ss')
        }

        if(body.image.path !== null && !InfoUtils.containsURL(body.image.path)) {
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
                    image = {
                        path: imgurResponse.link,
                        name: body.image.name
                    }
                    info.image = image

                    InfoDAO.editInfo(info).then(data => {
                        let send = {
                            message: 'Informação criada com sucesso'
                        }
            
                        res.status(Constants.STATUS_CODE.OK);
                        res.send(send);
                    }).catch(error => {
                        ValidationException("Ocorreu um erro ao criar informação", Constants.STATUS_CODE.INTERNAL_SERVER_ERROR, res)
                    })
                }
            }).catch(error => {
                console.log(error)
            })
        } else {
            info.image = body.image

            InfoDAO.editInfo(info).then(data => {
                let send = {
                    message: 'Informação criada com sucesso'
                }
    
                res.status(Constants.STATUS_CODE.OK);
                res.send(send);
            }).catch(error => {
                ValidationException("Ocorreu um erro ao criar informação", Constants.STATUS_CODE.INTERNAL_SERVER_ERROR, res)
            })
        }
    }
}