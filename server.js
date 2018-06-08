let express = require('express');
let app = express();
let server = require('http').Server(app);
let bodyParser = require('body-parser');
let cors = require('cors');
let path = require('path');
let db_tools = require('./tools/db_tools');

db_tools.DBConnectMongoose()
    .then(() => {
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(cors());        
        
        let router = require('./routes/routes');
        app.use('/api', router);
        app.use(function(err, req, res, next) {
            console.error(err.stack)
            res.status(500).send(JSON.stringify({ "message": "Something broke!" }))
        })
        
        let staticPath = path.join(__dirname, '/public');
        app.use(express.static(staticPath));
        
        let port = 3001;
        server.listen(port);
        console.log('Disc Golf Is Life is running on port ' + port);        
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    });