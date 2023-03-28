import { AminoMsg } from "@cosmjs/amino";
import { Message } from "./message.v1";
export interface AminoMessage extends AminoMsg {
  type: "/assetmantle.splits.v1beta1.transactions.send.Message";
  value: {
    from: string;
    from_i_d: {
      hash_i_d: {
        i_d_bytes: Uint8Array;
      };
    };
    to_i_d: {
      hash_i_d: {
        i_d_bytes: Uint8Array;
      };
    };
    ownable_i_d: {
      asset_i_d: {
        hash_i_d: {
          i_d_bytes: Uint8Array;
        };
      };
      coin_i_d: {
        string_i_d: {
          i_d_string: string;
        };
      };
    };
    value: string;
  };
}
export const AminoConverter = {
  "/assetmantle.splits.v1beta1.transactions.send.Message": {
    aminoType: "/assetmantle.splits.v1beta1.transactions.send.Message",
    toAmino: ({
      from,
      fromID,
      toID,
      ownableID,
      value
    }: Message): AminoMessage["value"] => {
      return {
        from,
        from_i_d: {
          hash_i_d: {
            i_d_bytes: fromID.hashID.iDBytes
          }
        },
        to_i_d: {
          hash_i_d: {
            i_d_bytes: toID.hashID.iDBytes
          }
        },
        ownable_i_d: {
          asset_i_d: {
            hash_i_d: {
              i_d_bytes: ownableID.assetID.hashID.iDBytes
            }
          },
          coin_i_d: {
            string_i_d: {
              i_d_string: ownableID.coinID.stringID.iDString
            }
          }
        },
        value
      };
    },
    fromAmino: ({
      from,
      from_i_d,
      to_i_d,
      ownable_i_d,
      value
    }: AminoMessage["value"]): Message => {
      return {
        from,
        fromID: {
          hashID: {
            iDBytes: from_i_d.hash_i_d.i_d_bytes
          }
        },
        toID: {
          hashID: {
            iDBytes: to_i_d.hash_i_d.i_d_bytes
          }
        },
        ownableID: {
          assetID: {
            hashID: {
              iDBytes: ownable_i_d.asset_i_d.hash_i_d.i_d_bytes
            }
          },
          coinID: {
            stringID: {
              iDString: ownable_i_d.coin_i_d.string_i_d.i_d_string
            }
          }
        },
        value
      };
    }
  }
};