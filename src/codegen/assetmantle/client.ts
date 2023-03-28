import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as assetmantleSplitsInternalTransactionsSendServiceV1registry from "./splits/internal/transactions/send/service.v1.registry";
import * as assetmantleSplitsInternalTransactionsSendTransactionserviceV1registry from "./splits/internal/transactions/send/transactionService.v1.registry";
import * as assetmantleSplitsInternalTransactionsUnwrapServiceV1registry from "./splits/internal/transactions/unwrap/service.v1.registry";
import * as assetmantleSplitsInternalTransactionsUnwrapTransactionserviceV1registry from "./splits/internal/transactions/unwrap/transactionService.v1.registry";
import * as assetmantleSplitsInternalTransactionsWrapServiceV1registry from "./splits/internal/transactions/wrap/service.v1.registry";
import * as assetmantleSplitsInternalTransactionsWrapTransactionserviceV1registry from "./splits/internal/transactions/wrap/transactionService.v1.registry";
import * as assetmantleSplitsInternalTransactionsSendServiceV1amino from "./splits/internal/transactions/send/service.v1.amino";
import * as assetmantleSplitsInternalTransactionsSendTransactionserviceV1amino from "./splits/internal/transactions/send/transactionService.v1.amino";
import * as assetmantleSplitsInternalTransactionsUnwrapServiceV1amino from "./splits/internal/transactions/unwrap/service.v1.amino";
import * as assetmantleSplitsInternalTransactionsUnwrapTransactionserviceV1amino from "./splits/internal/transactions/unwrap/transactionService.v1.amino";
import * as assetmantleSplitsInternalTransactionsWrapServiceV1amino from "./splits/internal/transactions/wrap/service.v1.amino";
import * as assetmantleSplitsInternalTransactionsWrapTransactionserviceV1amino from "./splits/internal/transactions/wrap/transactionService.v1.amino";
export const assetmantleAminoConverters = { ...assetmantleSplitsInternalTransactionsSendServiceV1amino.AminoConverter,
  ...assetmantleSplitsInternalTransactionsSendTransactionserviceV1amino.AminoConverter,
  ...assetmantleSplitsInternalTransactionsUnwrapServiceV1amino.AminoConverter,
  ...assetmantleSplitsInternalTransactionsUnwrapTransactionserviceV1amino.AminoConverter,
  ...assetmantleSplitsInternalTransactionsWrapServiceV1amino.AminoConverter,
  ...assetmantleSplitsInternalTransactionsWrapTransactionserviceV1amino.AminoConverter
};
export const assetmantleProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...assetmantleSplitsInternalTransactionsSendServiceV1registry.registry, ...assetmantleSplitsInternalTransactionsSendTransactionserviceV1registry.registry, ...assetmantleSplitsInternalTransactionsUnwrapServiceV1registry.registry, ...assetmantleSplitsInternalTransactionsUnwrapTransactionserviceV1registry.registry, ...assetmantleSplitsInternalTransactionsWrapServiceV1registry.registry, ...assetmantleSplitsInternalTransactionsWrapTransactionserviceV1registry.registry];
export const getSigningAssetmantleClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...assetmantleProtoRegistry]);
  const aminoTypes = new AminoTypes({ ...assetmantleAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningAssetmantleClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningAssetmantleClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};