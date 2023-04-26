import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface TransactionResponse {
  coinID: string;
}
export interface TransactionResponseSDKType {
  coin_i_d: string;
}
function createBaseTransactionResponse(): TransactionResponse {
  return {
    coinID: ""
  };
}
export const TransactionResponse = {
  encode(message: TransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.coinID !== "") {
      writer.uint32(10).string(message.coinID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coinID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TransactionResponse {
    return {
      coinID: isSet(object.coinID) ? String(object.coinID) : ""
    };
  },
  toJSON(message: TransactionResponse): unknown {
    const obj: any = {};
    message.coinID !== undefined && (obj.coinID = message.coinID);
    return obj;
  },
  fromPartial(object: Partial<TransactionResponse>): TransactionResponse {
    const message = createBaseTransactionResponse();
    message.coinID = object.coinID ?? "";
    return message;
  }
};