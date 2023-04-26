import {
  assetmantle,
  cosmos,
  getSigningAssetmantleClient,
  getSigningCosmosClient,
} from "./codegen";

export * from "./codegen";
// fake variables
const rpcEndpoint = "";
let signer;
let address,
  assetID,
  pagination,
  amount,
  fromAddress,
  toAddress,
  from,
  fromID,
  signerAddress,
  fee,
  memo;

// Querying clients
const mantleClient = await assetmantle.ClientFactory.createRPCQueryClient({
  rpcEndpoint,
});

const cosmosClient = await cosmos.ClientFactory.createRPCQueryClient({
  rpcEndpoint,
});

// Transaction Signing Client
const signingAssetMantleClient = await getSigningAssetmantleClient({
  rpcEndpoint,
  signer,
});

const signingCosmosClient = await getSigningCosmosClient({
  rpcEndpoint,
  signer,
});

// Querying Cosmos Modules
const { balances } = await cosmosClient.cosmos.bank.v1beta1.allBalances({
  address,
  pagination,
});

// Querying Assetmantle modules
const { list } =
  await mantleClient.assetmantle.modules.assets.queries.asset.handle({
    assetID,
  });

// Transactions on Cosmos Modules
const msgCosmos = cosmos.bank.v1beta1.MessageComposer.withTypeUrl.send({
  amount,
  fromAddress,
  toAddress,
});

await signingCosmosClient.signAndBroadcast(
  signerAddress,
  [msgCosmos],
  fee,
  memo
);

// Transactions on Assetmantle Modules
const msgMantle =
  assetmantle.modules.assets.transactions.burn.MessageComposer.withTypeUrl.handle(
    { from, assetID, fromID }
  );

await signingAssetMantleClient.signAndBroadcast(
  signerAddress,
  [msgMantle],
  fee,
  memo
);
const uint8val;
const assetId = assetmantle.schema.documents.base.Document.encode();
