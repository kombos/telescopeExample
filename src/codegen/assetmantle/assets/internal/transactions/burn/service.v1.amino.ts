import { AminoMsg } from "@cosmjs/amino";
import { Message } from "./message.v1";
export interface AminoMessage extends AminoMsg {
  type: "/assetmantle.assets.v1beta1.transactions.burn.Message";
  value: {
    from: string;
    from_i_d: {
      hash_i_d: {
        i_d_bytes: Uint8Array;
      };
    };
    asset_i_d: {
      hash_i_d: {
        i_d_bytes: Uint8Array;
      };
    };
  };
}
export const AminoConverter = {
  "/assetmantle.assets.v1beta1.transactions.burn.Message": {
    aminoType: "/assetmantle.assets.v1beta1.transactions.burn.Message",
    toAmino: ({
      from,
      fromID,
      assetID
    }: Message): AminoMessage["value"] => {
      return {
        from,
        from_i_d: {
          hash_i_d: {
            i_d_bytes: fromID.hashID.iDBytes
          }
        },
        asset_i_d: {
          hash_i_d: {
            i_d_bytes: assetID.hashID.iDBytes
          }
        }
      };
    },
    fromAmino: ({
      from,
      from_i_d,
      asset_i_d
    }: AminoMessage["value"]): Message => {
      return {
        from,
        fromID: {
          hashID: {
            iDBytes: from_i_d.hash_i_d.i_d_bytes
          }
        },
        assetID: {
          hashID: {
            iDBytes: asset_i_d.hash_i_d.i_d_bytes
          }
        }
      };
    }
  }
};