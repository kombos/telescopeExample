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
      modules: {
        assets: {
          queries: {
            asset: (await import("../assets/queries/asset/service.rpc.Service")).createRpcQueryExtension(client),
            assets: (await import("../assets/queries/assets/service.rpc.Service")).createRpcQueryExtension(client)
          },
          transactions: {
            burn: (await import("../assets/transactions/burn/service.rpc.Service")).createRpcQueryExtension(client),
            define: (await import("../assets/transactions/define/service.rpc.Service")).createRpcQueryExtension(client),
            deputize: (await import("../assets/transactions/deputize/service.rpc.Service")).createRpcQueryExtension(client),
            mint: (await import("../assets/transactions/mint/service.rpc.Service")).createRpcQueryExtension(client),
            mutate: (await import("../assets/transactions/mutate/service.rpc.Service")).createRpcQueryExtension(client),
            renumerate: (await import("../assets/transactions/renumerate/service.rpc.Service")).createRpcQueryExtension(client),
            revoke: (await import("../assets/transactions/revoke/service.rpc.Service")).createRpcQueryExtension(client)
          }
        },
        classifications: {
          queries: {
            classification: (await import("../classifications/queries/classification/service.rpc.Service")).createRpcQueryExtension(client),
            classifications: (await import("../classifications/queries/classifications/service.rpc.Service")).createRpcQueryExtension(client)
          }
        },
        identities: {
          queries: {
            identities: (await import("../identities/queries/identities/service.rpc.Service")).createRpcQueryExtension(client),
            identity: (await import("../identities/queries/identity/service.rpc.Service")).createRpcQueryExtension(client)
          },
          transactions: {
            define: (await import("../identities/transactions/define/service.rpc.Service")).createRpcQueryExtension(client),
            deputize: (await import("../identities/transactions/deputize/service.rpc.Service")).createRpcQueryExtension(client),
            issue: (await import("../identities/transactions/issue/service.rpc.Service")).createRpcQueryExtension(client),
            mutate: (await import("../identities/transactions/mutate/service.rpc.Service")).createRpcQueryExtension(client),
            nub: (await import("../identities/transactions/nub/service.rpc.Service")).createRpcQueryExtension(client),
            provision: (await import("../identities/transactions/provision/service.rpc.Service")).createRpcQueryExtension(client),
            quash: (await import("../identities/transactions/quash/service.rpc.Service")).createRpcQueryExtension(client),
            revoke: (await import("../identities/transactions/revoke/service.rpc.Service")).createRpcQueryExtension(client),
            unprovision: (await import("../identities/transactions/unprovision/service.rpc.Service")).createRpcQueryExtension(client)
          }
        },
        maintainers: {
          queries: {
            maintainer: (await import("../maintainers/queries/maintainer/service.rpc.Service")).createRpcQueryExtension(client),
            maintainers: (await import("../maintainers/queries/maintainers/service.rpc.Service")).createRpcQueryExtension(client)
          }
        },
        metas: {
          queries: {
            meta: (await import("../metas/queries/meta/service.rpc.Service")).createRpcQueryExtension(client),
            metas: (await import("../metas/queries/metas/service.rpc.Service")).createRpcQueryExtension(client)
          },
          transactions: {
            reveal: (await import("../metas/transactions/reveal/service.rpc.Service")).createRpcQueryExtension(client)
          }
        },
        orders: {
          queries: {
            order: (await import("../orders/queries/order/service.rpc.Service")).createRpcQueryExtension(client),
            orders: (await import("../orders/queries/orders/service.rpc.Service")).createRpcQueryExtension(client)
          },
          transactions: {
            cancel: (await import("../orders/transactions/cancel/service.rpc.Service")).createRpcQueryExtension(client),
            define: (await import("../orders/transactions/define/service.rpc.Service")).createRpcQueryExtension(client),
            deputize: (await import("../orders/transactions/deputize/service.rpc.Service")).createRpcQueryExtension(client),
            immediate: (await import("../orders/transactions/immediate/service.rpc.Service")).createRpcQueryExtension(client),
            make: (await import("../orders/transactions/make/service.rpc.Service")).createRpcQueryExtension(client),
            modify: (await import("../orders/transactions/modify/service.rpc.Service")).createRpcQueryExtension(client),
            revoke: (await import("../orders/transactions/revoke/service.rpc.Service")).createRpcQueryExtension(client),
            take: (await import("../orders/transactions/take/service.rpc.Service")).createRpcQueryExtension(client)
          }
        },
        splits: {
          queries: {
            ownable: (await import("../splits/queries/ownable/service.rpc.Service")).createRpcQueryExtension(client),
            split: (await import("../splits/queries/split/service.rpc.Service")).createRpcQueryExtension(client),
            splits: (await import("../splits/queries/splits/service.rpc.Service")).createRpcQueryExtension(client)
          },
          transactions: {
            send: (await import("../splits/transactions/send/service.rpc.Service")).createRpcQueryExtension(client),
            unwrap: (await import("../splits/transactions/unwrap/service.rpc.Service")).createRpcQueryExtension(client),
            wrap: (await import("../splits/transactions/wrap/service.rpc.Service")).createRpcQueryExtension(client)
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