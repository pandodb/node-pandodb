var rpc = require('json-rpc2');
var ipfsAPI = require('ipfs-api');
var ipfs = ipfsAPI('localhost', '5001', {protocol: 'http'});

var gethRPCClient = rpc.Client.$create(8545, 'localhost');
var eth = require("./contract.js");

var server = rpc.Server.$create({
    'websocket': true, 
    'headers': { 
        'Access-Control-Allow-Origin': '*'
    }
});

function add(args, opt, callback) {
    var stream = new Readable();
    stream.push(JSON.stringify(args["data"]));
    stream.push(null);
    
    ipfs.util.addFromStream(stream, (err, result) => {
        if (err) {
            throw err;
        }
	callback(null, result);
    })    
}

function cat(args, opt, callback) {
    ipfs.files.cat(args["hash"], function(err, result) {
        if (err) {
            throw err;
        }

	var jsonData = '';
	result.on('data', chunk => jsonData += chunk);
	result.on('end', () =>  {
      	    callback(null, jsonData);
        });	
    });
}

function getCoinbase(args, opt, callback) {
  callback(null, eth.getCoinbase());
}

function getCoinbaseBalance(args, opt, callback) {
  callback(null, eth.getCoinbaseBalance());
}

function submitContract(args, opt, callback) {
  callback(null, eth.submitContract(args["DatabaseName"]));
}

server.expose('getCoinbase', getCoinbase);
server.expose('getCoinbaseBalance', getCoinbaseBalance);
server.expose('submitContract', submitContract);
server.expose('add', add);
server.expose('cat', cat);

server.listen(8000, '10.1.2.27', function() {
    console.log("Listening on port 8000");
});
