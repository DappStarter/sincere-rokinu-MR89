require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note situate uniform harvest inhale equal gasp'; 
let testAccounts = [
"0x6602199a520c7dc8c7860c3ba0e50b15386f3bc49c898185d53c590f566a34a9",
"0x5e4ebb65de1674add9d7b331daa798648a0c41a6c9b8c3dc00d2f9bb974632fe",
"0xcf169ea26c3caaf88aeef166895c7d90844221d7a811434bc13059f8bc50d6bc",
"0x67f21c7eb65479b7e38f62e329a70354e8e8d8037481ac59f868d3fc4ef2f9ea",
"0xf7f22bfa6266c7eb1457d454361ac820fdfba346ae1be6cce9e60e8270714996",
"0x37c105e338c0fe22744627c35347a930ad76195fb0cdbc569aa6b9e0f41b1989",
"0x9e621015688857208b810da5fcb31d1af394cacf3dd1384936b77af37523c2ba",
"0x2b647199cbee53fc25e58912ac4fbf0903c25451c668d46049edf897b31675f5",
"0x6a96903a4a2f627fb5b53e82bca68e47498549c15e79c45a6df56560562c29d0",
"0xb43993fe38cc499731990bf248448b36caa349397da96033661fddfa2309f42e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

