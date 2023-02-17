import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../../../../../helpers";
export interface TransactionRequest {
  from: string;
  fromID: string;
  orderID: string;
  takerOwnableSplit: string;
  makerOwnableSplit: string;
  expiresIn: Long;
  mutableMetaProperties: string;
  mutableProperties: string;
}
export interface TransactionRequestSDKType {
  from: string;
  from_i_d: string;
  order_i_d: string;
  taker_ownable_split: string;
  maker_ownable_split: string;
  expires_in: Long;
  mutable_meta_properties: string;
  mutable_properties: string;
}

function createBaseTransactionRequest(): TransactionRequest {
  return {
    from: "",
    fromID: "",
    orderID: "",
    takerOwnableSplit: "",
    makerOwnableSplit: "",
    expiresIn: Long.ZERO,
    mutableMetaProperties: "",
    mutableProperties: ""
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

    if (message.orderID !== "") {
      writer.uint32(26).string(message.orderID);
    }

    if (message.takerOwnableSplit !== "") {
      writer.uint32(34).string(message.takerOwnableSplit);
    }

    if (message.makerOwnableSplit !== "") {
      writer.uint32(42).string(message.makerOwnableSplit);
    }

    if (!message.expiresIn.isZero()) {
      writer.uint32(48).int64(message.expiresIn);
    }

    if (message.mutableMetaProperties !== "") {
      writer.uint32(58).string(message.mutableMetaProperties);
    }

    if (message.mutableProperties !== "") {
      writer.uint32(66).string(message.mutableProperties);
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
          message.orderID = reader.string();
          break;

        case 4:
          message.takerOwnableSplit = reader.string();
          break;

        case 5:
          message.makerOwnableSplit = reader.string();
          break;

        case 6:
          message.expiresIn = (reader.int64() as Long);
          break;

        case 7:
          message.mutableMetaProperties = reader.string();
          break;

        case 8:
          message.mutableProperties = reader.string();
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
      orderID: isSet(object.orderID) ? String(object.orderID) : "",
      takerOwnableSplit: isSet(object.takerOwnableSplit) ? String(object.takerOwnableSplit) : "",
      makerOwnableSplit: isSet(object.makerOwnableSplit) ? String(object.makerOwnableSplit) : "",
      expiresIn: isSet(object.expiresIn) ? Long.fromValue(object.expiresIn) : Long.ZERO,
      mutableMetaProperties: isSet(object.mutableMetaProperties) ? String(object.mutableMetaProperties) : "",
      mutableProperties: isSet(object.mutableProperties) ? String(object.mutableProperties) : ""
    };
  },

  toJSON(message: TransactionRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.fromID !== undefined && (obj.fromID = message.fromID);
    message.orderID !== undefined && (obj.orderID = message.orderID);
    message.takerOwnableSplit !== undefined && (obj.takerOwnableSplit = message.takerOwnableSplit);
    message.makerOwnableSplit !== undefined && (obj.makerOwnableSplit = message.makerOwnableSplit);
    message.expiresIn !== undefined && (obj.expiresIn = (message.expiresIn || Long.ZERO).toString());
    message.mutableMetaProperties !== undefined && (obj.mutableMetaProperties = message.mutableMetaProperties);
    message.mutableProperties !== undefined && (obj.mutableProperties = message.mutableProperties);
    return obj;
  },

  fromPartial(object: Partial<TransactionRequest>): TransactionRequest {
    const message = createBaseTransactionRequest();
    message.from = object.from ?? "";
    message.fromID = object.fromID ?? "";
    message.orderID = object.orderID ?? "";
    message.takerOwnableSplit = object.takerOwnableSplit ?? "";
    message.makerOwnableSplit = object.makerOwnableSplit ?? "";
    message.expiresIn = object.expiresIn !== undefined && object.expiresIn !== null ? Long.fromValue(object.expiresIn) : Long.ZERO;
    message.mutableMetaProperties = object.mutableMetaProperties ?? "";
    message.mutableProperties = object.mutableProperties ?? "";
    return message;
  }

};