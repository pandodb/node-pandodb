var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended : true}));

var ipfsAPI = require('ipfs-api');
var ipfs = ipfsAPI('10.1.1.54', '5001', {protocol: 'http'});
var Readable = require('stream').Readable;

app.post('/ipfs/add', function(request, response){
    console.log(request.body);
    response.send(request.body);
    //IPFSAdd();
});

app.listen(3000, function () {
    console.log('Listening on port 3000');
});

function IPFSAdd() {
    var readableStream = new Readable();
    readableStream.push("The cow jumped over the moon.");
    readableStream.push(null);
    
    ipfs.util.addFromStream(readableStream, (err, result) => {
        if (err) {
            throw err
        }
        console.log(result)
    })    
}
