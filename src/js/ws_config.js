var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'traaittCASH Interface';
config.appDescription = 'XTCASH wallet';
config.appSlogan = 'TRRXITTE International digital asset software distribution!';
config.appId = 'traaittCASHInterfaceXT';
config.appGitRepo = 'https://github.com/TRRXITTE/traaittCASHInterface';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 14486;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'cash';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'XTCASHservice';

// version on the bundled service (xtcash-service)
config.walletServiceBinaryVersion = "v4.5.1";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. XTCASHservice)
config.walletServiceRpcPort = 8440;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'https://interface.traaittcash.com/transaction.html?hash=[[TX_HASH]]';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'us-east.trrxitte.com';


// remote node list update url, set to null if you don't have one
// for TRTL:
// raw list: https://github.com/TRRXITTE/traaittCASHnetworkserver/blob/master/traaittcash.json
// filtered: https://cacheapi.traaittcash.com/api/getNodes
config.remoteNodeListUpdateUrl = 'https://raw.githubusercontent.com/TRRXITTE/traaittCASHnetworkserver/master/traaittcash.json';

// set to false if using raw/unfiltered node list
config.remoteNodeListFiltered = false;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  'us-east.trrxitte.com:14486',
  'us-west.trrxitte.com:14486',
  'southamerica-east.trrxitte.com:14486',
  'europe-west.trrxitte.com:14486',
  'asia-southeast.trrxitte.com:14486',
  'asia-northeast.trrxitte.com:14486',
  'asia-east.trrxitte.com:14486',
  'europe.trrxitte.com:14486',
];
config.remoteNodeCacheSupported = false;
config.remoteNodeSslSupported = false;

// your currency name
config.assetName = 'traaittCASH';
// your currency ticker
config.assetTicker = 'XTCASH';
// your currency address prefix, for address validation
config.addressPrefix = 'cash';
// standard wallet address length, for address validation
config.addressLength = 98;
// integrated wallet address length, for address validation. Added length is length of payment ID encoded in base58.
config.integratedAddressLength = config.addressLength + ((64 * 11) / 8);

// minimum fee for sending transaction
config.minimumFee = 0.00001;
// minimum amount for sending transaction
config.mininumSend = 0.0000001;
// default mixin/anonimity for transaction
config.defaultMixin = 18;
// to represent human readable value
config.decimalPlaces = 8;
// to convert from atomic unit
config.decimalDivisor = 10 ** config.decimalPlaces;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'TRRXITTE International',
    address: 'cashQmjcTGzDqRSufP74GwWTLt11E3saaeRg3LVt5AgEGAiYhpS1yTZA1ti7wVkk7vaQgvKifLvCx4SxwDqfR1EZAYL7yr4WD3',
    paymentId: '',
  }
];
// cipher config for private address book
config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;