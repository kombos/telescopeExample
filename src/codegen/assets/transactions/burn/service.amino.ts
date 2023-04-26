import { AminoMsg } from "@cosmjs/amino";
import { Message } from "./message";
export interface MessageAminoType extends AminoMsg {
  type: "/assetmantle.modules.assets.transactions.burn.Message";
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
  "/assetmantle.modules.assets.transactions.burn.Message": {
    aminoType: "/assetmantle.modules.assets.transactions.burn.Message",
    toAmino: ({
      from,
      fromID,
      assetID
    }: Message): MessageAminoType["value"] => {
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
    }: MessageAminoType["value"]): Message => {
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