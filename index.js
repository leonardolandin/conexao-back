const app = require('./src/config');
const MongoDB = require('./src/database');
require('dotenv');

app.listen(process.env.PORT || 3000, () => {
    MongoDB.connect().then(db => {
        if(db) {
            process.on('SIGINT', function() {
                MongoDB.disconnect();
                process.exit(0);
            });
        }
    })
})