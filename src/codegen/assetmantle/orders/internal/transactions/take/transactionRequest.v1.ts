import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../helpers";
export interface TransactionRequest {
  from: string;
  fromID: string;
  takerOwnableSplit: string;
  orderID: string;
}
export interface TransactionRequestSDKType {
  from: string;
  from_i_d: string;
  taker_ownable_split: string;
  order_i_d: string;
}

function createBaseTransactionRequest(): TransactionRequest {
  return {
    from: "",
    fromID: "",
    takerOwnableSplit: "",
    orderID: ""
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

    if (message.takerOwnableSplit !== "") {
      writer.uint32(26).string(message.takerOwnableSplit);
    }

    if (message.orderID !== "") {
      writer.uint32(34).string(message.orderID);
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
          message.takerOwnableSplit = reader.string();
          break;

        case 4:
          message.orderID = reader.string();
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
      takerOwnableSplit: isSet(object.takerOwnableSplit) ? String(object.takerOwnableSplit) : "",
      orderID: isSet(object.orderID) ? String(object.orderID) : ""
    };
  },

  toJSON(message: TransactionRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.fromID !== undefined && (obj.fromID = message.fromID);
    message.takerOwnableSplit !== undefined && (obj.takerOwnableSplit = message.takerOwnableSplit);
    message.orderID !== undefined && (obj.orderID = message.orderID);
    return obj;
  },

  fromPartial(object: Partial<TransactionRequest>): TransactionRequest {
    const message = createBaseTransactionRequest();
    message.from = object.from ?? "";
    message.fromID = object.fromID ?? "";
    message.takerOwnableSplit = object.takerOwnableSplit ?? "";
    message.orderID = object.orderID ?? "";
    return message;
  }

};