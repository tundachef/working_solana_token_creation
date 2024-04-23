const fs = require('fs');
const {createToken} = require('./src/create_token.js')
const { NFTStorage, Blob,File} = require ('nft.storage')


const {
    NFT_STORAGE_TOKEN,
    revokeMintBool,
    revokeFreezeBool,
    tokenInfo,
    metaDataforToken
} = require('./config.js')




async function main() {

    // uploadMetaData
    const metadata_url = await uploadMetaData()
    if (!metadata_url){
        console.log("Metadata failed")
        return;
    }
    tokenInfo.metadata = metadata_url

    // Create token
    console.log("Creating Token...")
    const mintAddress = await createToken(tokenInfo, revokeMintBool, revokeFreezeBool)
    console.log(`Mint Link: https://solscan.io/token/${mintAddress.toString()}`)


}




async function uploadMetaData() {
    // console.log('cow')
    const imageUrl = `https://algobot.cloud/image.png`
    metaDataforToken.image = imageUrl


    // // store as a json file
    // run this to generate metadata.json
    // const jsonString = JSON.stringify(metaDataforToken, null, 2);
    // const file = new File([jsonString], "metadata.json", {type: "application/json"});
    // try {
    //     const filePath = './metadata.json';
    //     fs.writeFileSync(filePath, jsonString);
    //     console.log('File saved successfully:', filePath);
    // } catch (error) {
    //     console.error('Error saving file:', error);
    // }

    const metadata_url = `https://algobot.cloud/metadata.json`
    console.log('Metadata URI: ', metadata_url)

    
    return metadata_url

  }

  main()


// Result
// For just 3.9 usd of Solana
// Token mint authority revoked
// Token freeze authority revoked
// token created


// Metadata URI:  https://algobot.cloud/metadata.json
// Creating Token...
// blockhash {
//   blockhash: 'D3LQsQJpqARLK8Y6gEfuG2QXrmqciFk6CdEvYqvGSwES',
//   lastValidBlockHeight: 241881476
// }
// Previous Error: resolved
// Token mint transaction sent. Signature: 3QWkxVQjRzeEZCkZWrmyQgkJQqFNdFK1EGyEwrV466YRcg2SJDtWLbVCsogschayq4xeLGnEt1yGf3ad5HieRMLu        
// Token Created :  {
//   amount: 100000000,
//   decimals: 9,
//   metadata: 'https://algobot.cloud/metadata.json',
//   symbol: 'TPUTIN',
//   tokenName: 'TRUMPPUTIN'
// }
// Token Mint Address : E64QSHxgEcir1cmoYgqwrqmSJj6AMjo13kHSn8PLEotP
// Mint Link: https://solscan.io/token/E64QSHxgEcir1cmoYgqwrqmSJj6AMjo13kHSn8PLEotP