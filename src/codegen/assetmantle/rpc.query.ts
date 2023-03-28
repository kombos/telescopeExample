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
    assetmantle: {
      assets: {
        queries: {
          asset: (await import("./assets/internal/queries/asset/service.v1.rpc.Service")).createRpcQueryExtension(client)
        },
        transactions: {
          burn: (await import("./assets/internal/transactions/burn/service.v1.rpc.Service")).createRpcQueryExtension(client),
          define: (await import("./assets/internal/transactions/define/service.v1.rpc.Service")).createRpcQueryExtension(client),
          deputize: (await import("./assets/internal/transactions/deputize/service.v1.rpc.Service")).createRpcQueryExtension(client),
          mint: (await import("./assets/internal/transactions/mint/service.v1.rpc.Service")).createRpcQueryExtension(client),
          mutate: (await import("./assets/internal/transactions/mutate/service.v1.rpc.Service")).createRpcQueryExtension(client),
          renumerate: (await import("./assets/internal/transactions/renumerate/service.v1.rpc.Service")).createRpcQueryExtension(client),
          revoke: (await import("./assets/internal/transactions/revoke/service.v1.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      classifications: {
        queries: {
          classification: (await import("./classifications/internal/queries/classification/service.v1.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      identities: {
        queries: {
          identity: (await import("./identities/internal/queries/identity/service.v1.rpc.Service")).createRpcQueryExtension(client)
        },
        transactions: {
          define: (await import("./identities/internal/transactions/define/service.v1.rpc.Service")).createRpcQueryExtension(client),
          deputize: (await import("./identities/internal/transactions/deputize/service.v1.rpc.Service")).createRpcQueryExtension(client),
          issue: (await import("./identities/internal/transactions/issue/service.v1.rpc.Service")).createRpcQueryExtension(client),
          mutate: (await import("./identities/internal/transactions/mutate/service.v1.rpc.Service")).createRpcQueryExtension(client),
          nub: (await import("./identities/internal/transactions/nub/service.v1.rpc.Service")).createRpcQueryExtension(client),
          provision: (await import("./identities/internal/transactions/provision/service.v1.rpc.Service")).createRpcQueryExtension(client),
          quash: (await import("./identities/internal/transactions/quash/service.v1.rpc.Service")).createRpcQueryExtension(client),
          revoke: (await import("./identities/internal/transactions/revoke/service.v1.rpc.Service")).createRpcQueryExtension(client),
          unprovision: (await import("./identities/internal/transactions/unprovision/service.v1.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      maintainers: {
        queries: {
          maintainer: (await import("./maintainers/internal/queries/maintainer/service.v1.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      metas: {
        queries: {
          meta: (await import("./metas/internal/queries/meta/service.v1.rpc.Service")).createRpcQueryExtension(client)
        },
        transactions: {
          reveal: (await import("./metas/internal/transactions/reveal/service.v1.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      orders: {
        queries: {
          order: (await import("./orders/internal/queries/order/service.v1.rpc.Service")).createRpcQueryExtension(client)
        },
        transactions: {
          cancel: (await import("./orders/internal/transactions/cancel/service.v1.rpc.Service")).createRpcQueryExtension(client),
          define: (await import("./orders/internal/transactions/define/service.v1.rpc.Service")).createRpcQueryExtension(client),
          deputize: (await import("./orders/internal/transactions/deputize/service.v1.rpc.Service")).createRpcQueryExtension(client),
          immediate: (await import("./orders/internal/transactions/immediate/service.v1.rpc.Service")).createRpcQueryExtension(client),
          make: (await import("./orders/internal/transactions/make/service.v1.rpc.Service")).createRpcQueryExtension(client),
          modify: (await import("./orders/internal/transactions/modify/service.v1.rpc.Service")).createRpcQueryExtension(client),
          revoke: (await import("./orders/internal/transactions/revoke/service.v1.rpc.Service")).createRpcQueryExtension(client),
          take: (await import("./orders/internal/transactions/take/service.v1.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      splits: {
        v1beta1: {
          queries: {
            ownable: (await import("./splits/internal/queries/ownable/service.v1.rpc.Query")).createRpcQueryExtension(client),
            split: (await import("./splits/internal/queries/split/service.v1.rpc.Query")).createRpcQueryExtension(client)
          }
        }
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