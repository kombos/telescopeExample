import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../../helpers";
export interface TransactionRequest {
  from: string;
  fromID: string;
  coins: string;
}
export interface TransactionRequestSDKType {
  from: string;
  from_i_d: string;
  coins: string;
}

function createBaseTransactionRequest(): TransactionRequest {
  return {
    from: "",
    fromID: "",
    coins: ""
  };
}

export const TransactionRequest = {
  encode(message: TransactionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.fromID !== "") {
      writer.uint32(18).string(message.fromID);
    }

    if (message.coins !== "") {
      writer.uint32(26).string(message.coins);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.fromID = reader.string();
          break;

        case 3:
          message.coins = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TransactionRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      fromID: isSet(object.fromID) ? String(object.fromID) : "",
      coins: isSet(object.coins) ? String(object.coins) : ""
    };
  },

  toJSON(message: TransactionRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.fromID !== undefined && (obj.fromID = message.fromID);
    message.coins !== undefined && (obj.coins = message.coins);
    return obj;
  },

  fromPartial(object: Partial<TransactionRequest>): TransactionRequest {
    const message = createBaseTransactionRequest();
    message.from = object.from ?? "";
    message.fromID = object.fromID ?? "";
    message.coins = object.coins ?? "";
    return message;
  }

};