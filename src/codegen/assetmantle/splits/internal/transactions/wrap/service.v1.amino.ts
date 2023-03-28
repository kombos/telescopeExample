import { AminoMsg } from "@cosmjs/amino";
import { Message } from "./message.v1";
export interface AminoMessage extends AminoMsg {
  type: "/assetmantle.splits.v1beta1.transactions.wrap.Message";
  value: {
    from: string;
    from_i_d: {
      hash_i_d: {
        i_d_bytes: Uint8Array;
      };
    };
    coins: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/assetmantle.splits.v1beta1.transactions.wrap.Message": {
    aminoType: "/assetmantle.splits.v1beta1.transactions.wrap.Message",
    toAmino: ({
      from,
      fromID,
      coins
    }: Message): AminoMessage["value"] => {
      return {
        from,
        from_i_d: {
          hash_i_d: {
            i_d_bytes: fromID.hashID.iDBytes
          }
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      from,
      from_i_d,
      coins
    }: AminoMessage["value"]): Message => {
      return {
        from,
        fromID: {
          hashID: {
            iDBytes: from_i_d.hash_i_d.i_d_bytes
          }
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};