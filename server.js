const express = require('express');
const app = express();
var router = express.Router();

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/websiteme'));
// Start the app by listening on the default

//mongoose.connect('mongodb://localhost/ankushWebsite', { useNewUrlParser: true, useUnifiedTopology: true });
//mongoose.connect('mongodb+srv://username:password@cluster0-vxz1d.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
//mongoose.Promise = global.Promise;

// Heroku port
app.get('/', function(req,res) {
res.sendFile(path.join(__dirname + '/dist/websiteme/index.html'));
});


app.listen(process.env.PORT || 8080);