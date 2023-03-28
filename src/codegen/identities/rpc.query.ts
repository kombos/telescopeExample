import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    identities: {
      queries: {
        identity: (await import("../assetmantle/identities/internal/queries/identity/service.v1.rpc.Service")).createRpcQueryExtension(client)
      },
      transactions: {
        define: (await import("../assetmantle/identities/internal/transactions/define/service.v1.rpc.Service")).createRpcQueryExtension(client),
        deputize: (await import("../assetmantle/identities/internal/transactions/deputize/service.v1.rpc.Service")).createRpcQueryExtension(client),
        issue: (await import("../assetmantle/identities/internal/transactions/issue/service.v1.rpc.Service")).createRpcQueryExtension(client),
        mutate: (await import("../assetmantle/identities/internal/transactions/mutate/service.v1.rpc.Service")).createRpcQueryExtension(client),
        nub: (await import("../assetmantle/identities/internal/transactions/nub/service.v1.rpc.Service")).createRpcQueryExtension(client),
        provision: (await import("../assetmantle/identities/internal/transactions/provision/service.v1.rpc.Service")).createRpcQueryExtension(client),
        quash: (await import("../assetmantle/identities/internal/transactions/quash/service.v1.rpc.Service")).createRpcQueryExtension(client),
        revoke: (await import("../assetmantle/identities/internal/transactions/revoke/service.v1.rpc.Service")).createRpcQueryExtension(client),
        unprovision: (await import("../assetmantle/identities/internal/transactions/unprovision/service.v1.rpc.Service")).createRpcQueryExtension(client)
      }
    },
    cosmos: {
      app: {
        v1alpha1: (await import("../cosmos/app/v1alpha1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      base: {
        tendermint: {
          v1beta1: (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      evidence: {
        v1beta1: (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      gov: {
        v1: (await import("../cosmos/gov/v1/query.rpc.Query")).createRpcQueryExtension(client),
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      group: {
        v1: (await import("../cosmos/group/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      nft: {
        v1beta1: (await import("../cosmos/nft/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      params: {
        v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      slashing: {
        v1beta1: (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    }
  };
};