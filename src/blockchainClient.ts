import { json } from "body-parser";

const yaml = require('js-yaml');
const { FileSystemWallet, Gateway } = require('fabric-network');
const fs = require('fs');

// A wallet stores a collection of identities for use
const wallet = new FileSystemWallet('/usr/src/app/IBP');


export module BlockChainModule {

  export class BlockchainClient {
    async connectToNetwork() {

      const gateway = new Gateway();

      try {
        console.log('connecting to Fabric network...')

        const identityLabel = 'isabella';
        let connectionProfile = JSON.parse(fs.readFileSync('/usr/src/app/networkConnection.json', 'utf8'));

        let connectionOptions = {
          identity: identityLabel,
          wallet: wallet,
          discovery: {
            asLocalHost: false,
            enabled: true 
          }
        };

        // Connect to gateway using network.yaml file and our certificates in _idwallet directory
        await gateway.connect(connectionProfile, connectionOptions);

        console.log('Connected to Fabric gateway.');

        // Connect to our local fabric
        const network = await gateway.getNetwork('mychannel');

        console.log('Connected to mychannel. ');

        // Get the contract we have installed on the peer
        const contract = await network.getContract('papercontract', 'org.papernet.commercialpaper');


        let networkObj = {
          contract: contract,
          network: network
        };

        return networkObj;

      } catch (error) {
        console.log(`Error processing transaction. ${error}`);
        console.log(error.stack);
      } finally {
        console.log('Done connecting to network.');
        // gateway.disconnect();
      }

    }




    async issue(args: any) {

      console.log('args for issue: ')
      console.log(args)

      let response = await args.contract.submitTransaction(args.function,
        args.issuer, args.paperNumber, args.issueDateTime, args.maturityDateTime,
        args.faceValue
      );

      return response;

    }
  }
}
