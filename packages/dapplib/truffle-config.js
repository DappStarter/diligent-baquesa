require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remain equip imitate private fresh secret'; 
let testAccounts = [
"0x2068c19df77eda7efb8463157c9473b02df89e9bf724fbfcb9ffca0c3b751748",
"0x021f951b1f576cc34c65306599a7066735bda10f76f9467b00105900129772fb",
"0xe0877fd2d421212462c12c7142ea97528a32f4c08c14e1b776385d560300649b",
"0x0898b7b328c388918eefa7468f0bc9d19ff05c69dfb7f251e1a934b923e6ca84",
"0xd1bcc45ccaa58d23bd58086bcce81def40a7ec9c23ff04c47b04e8d7cbfeedf2",
"0x621b31e0b21852d449c2958c1ffeb4213c4c5ccd199fcbcfd6f36ee5202a4bc9",
"0xeceab2d2ef8dbd1ed9a7c79a1537a111dd179781cb2251e0a24c6f198dab8533",
"0xfd2163270580ccfeb46ba7c3647c566c19cb4c269710464795266af3d26a406f",
"0xd91dbba6054067515c43595b08051de81eb70d84250ed970c0582089313d8ac8",
"0x422601d3fac22f0591eea4a89d3ee7c3fcac3fb727abe1a908abad45da3f23ec"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

