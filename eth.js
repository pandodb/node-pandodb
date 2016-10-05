
var Web3 = require('web3');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
console.log(web3.eth.coinbase);

//0x0352c614ee641a3a0cd1752027c035f75di

var contract = pandoContract.new(
   _databaseName,
   {
     from: web3.eth.accounts[0], 
     data: '606060405260405161055b38038061055b833981016040528080518201919060200150505b8060016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10607157805160ff1916838001178555609f565b82800160010185558215609f579182015b82811115609e5782518260005055916020019190600101906082565b5b50905060c6919060aa565b8082111560c2576000818150600090555060010160aa565b5090565b50505b50610483806100d86000396000f360606040526000357c010000000000000000000000000000000000000000000000000000000090048063342cf89a1461005d5780637480ea83146100b85780637fffb7bd14610138578063c623674f146101b857610058565b610002565b34610002576100b66004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091905050610238565b005b34610002576100ca60048050506102e9565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561012a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b346100025761014a600480505061038a565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101aa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34610002576101ca60048050506103e2565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561022a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b8060006000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061028757805160ff19168380011785556102b8565b828001600101855582156102b8579182015b828111156102b7578251826000505591602001919060010190610299565b5b5090506102e391906102c5565b808211156102df57600081815060009055506001016102c5565b5090565b50505b50565b60016000508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103825780601f1061035757610100808354040283529160200191610382565b820191906000526020600020905b81548152906001019060200180831161036557829003601f168201915b505050505081565b6020604051908101604052806000815260200150604060405190810160405280601d81526020017f48656c6c6f205369642c20686f772061726520796f7520746f6461793f00000081526020015090506103df565b90565b60006000508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561047b5780601f106104505761010080835404028352916020019161047b565b820191906000526020600020905b81548152906001019060200180831161045e57829003601f168201915b50505050508156', 
     gas: 4700000
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
