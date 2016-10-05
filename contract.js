var Web3 = require('web3');
var web3 = new Web3();
var exports = module.exports = {};

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

exports.getCoinbase = function() {
    return web3.fromWei(web3.eth.getBalance(web3.eth.coinbase), "ether");
}

exports.getCoinbaseBalance = function() {
    return web3.eth.coinBase;
}

exports.unlockAccount = function () {
    web3.eth.unlockAccount(web3.eth.coinBase, "password", 5000);
    return true;
}

exports.submitContract = function() {    
	var pandoContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"HelloWorld","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[],"type":"constructor"}]);
    var pando = pandoContract.new(
    {
        from: web3.eth.accounts[0], 
        data: '60606040525b5b610114806100146000396000f360606040526000357c0100000000000000000000000000000000000000000000000000000000900480637fffb7bd1461003c57610037565b610002565b346100025761004e60048050506100bc565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156100ae5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6020604051908101604052806000815260200150604060405190810160405280601d81526020017f48656c6c6f205369642c20686f772061726520796f7520746f6461793f0000008152602001509050610111565b9056', 
        gas: 4700000
    }, function (e, contract){
        console.log(e, contract);
        if (typeof contract.address !== 'undefined') {
            console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
        }
    });
}

