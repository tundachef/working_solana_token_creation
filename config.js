const {
    Connection,
    Keypair,
} = require('@solana/web3.js')
const bs58 = require('bs58')

const PRIVATE_KEY = "5YBTXBzVivR9LiFqqiBj26LanSPjZBP2txQiGY72aYVeDviYowhokTRmXZzsimbYxA6AvBDPdHUBoEcGKhjdZHor";
const endpoint = "https://api.mainnet-beta.solana.com";
const NFT_STORAGE_TOKEN = 'd2818961.d2b6cab1527946b8ad8ab2ca5dee0649';

// Example of created token: https://solscan.io/token/Bj3EDqheEpjSVSwJxWkxYNpPHX1PWQKm7AtpQj8eCMcQ

const revokeMintBool = true
const revokeFreezeBool  = true


let tokenInfo = {
    amount: 100000000,
    decimals: 9,
    metadata: '',
    symbol: 'TPUTIN',
    tokenName: 'TRUMPPUTIN'
}


let metaDataforToken = {
    "name": tokenInfo.tokenName,
    "symbol": tokenInfo.symbol,
    "image": '',
    "description": `
        TrumpPutin Meme Coin on solana
        
        website: https://tputin.online/
        twitter: https://twitter.com/tputincoin
        telegram: https://t.me/trumpputincoin
                            `,
    "extensions": {
        "website": "https://tputin.online/",
        "twitter": "https://twitter.com/tputincoin",
        "telegram": "https://t.me/trumpputincoin"
    },
    "tags": [ "SOLANA","MEME", "PUTIN", "TRUMP", "TRUMPPUTIN"
    ],
    "creator": {
        "name": "PUTIN",
        "site": "https://tputin.online"
    }
}




// Ignore these
const connection = new Connection(endpoint); // helius
const myKeyPair = Keypair.fromSecretKey(new Uint8Array(bs58.decode(PRIVATE_KEY)));


module.exports = {
    connection,
    myKeyPair,
    NFT_STORAGE_TOKEN,
    revokeMintBool,
    revokeFreezeBool,
    tokenInfo,
    metaDataforToken
};