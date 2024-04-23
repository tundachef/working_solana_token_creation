import fs from 'fs'
import { NFTStorage, File } from 'nft.storage'
const fs = require('fs');
const { NFTStorage, Blob,File} = require ('nft.storage')

const endpoint = 'https://api.nft.storage' // the default
const token = 'd2818961.d2b6cab1527946b8ad8ab2ca5dee0649' // your API key from https://nft.storage/manage

async function main() {
  const storage = new NFTStorage({ endpoint, token })
  const metadata = await storage.store({
    name: 'nft.storage store test',
    description:
      'Using the nft.storage metadata API to create ERC-1155 compatible metadata.',
    image: new File([await fs.promises.readFile('./image.png')], 'pinpie.png', {
      type: 'image/jpg',
    }),
    properties: {
      custom:
        'Any custom data can appear in properties, files are automatically uploaded.',
      file: new File(
        [await fs.promises.readFile('./image.png')],
        'imccage.png',
        {
          type: 'image/png',
        }
      ),
    },
  })
  console.log('IPFS URL for the metadata:', metadata.url)
  console.log('metadata.json contents:\n', metadata.data)
  console.log(
    'metadata.json contents with IPFS gateway URLs:\n',
    metadata.embed()
  )
}
main()