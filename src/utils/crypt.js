let crypto = require('crypto');

let Crypt = {
    getSHA1ofJSON: (input) =>{
        return crypto.createHash('sha1').update(JSON.stringify(input)).digest('hex');
    }
}


module.exports = Crypt;