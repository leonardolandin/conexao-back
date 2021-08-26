let crypto = require('crypto');

let Crypt = {
    getSHA256ofJSON: (input) =>{
        return crypto.createHash('sha1').update(JSON.stringify(input)).digest('hex')
    }
}


module.exports = Crypt;