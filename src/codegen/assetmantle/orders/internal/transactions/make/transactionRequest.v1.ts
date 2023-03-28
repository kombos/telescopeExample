import * as _m0 from "protobufjs/minimal";
import { Long, isSet } from "../../../../../helpers";
export interface TransactionRequest {
  from: string;
  fromID: string;
  classificationID: string;
  takerID: string;
  makerOwnableID: string;
  takerOwnableID: string;
  expiresIn: Long;
  makerOwnableSplit: string;
  takerOwnableSplit: string;
  immutableMetaProperties: string;
  immutableProperties: string;
  mutableMetaProperties: string;
  mutableProperties: string;
}
export interface TransactionRequestSDKType {
  from: string;
  from_i_d: string;
  classification_i_d: string;
  taker_i_d: string;
  maker_ownable_i_d: string;
  taker_ownable_i_d: string;
  expires_in: Long;
  maker_ownable_split: string;
  taker_ownable_split: string;
  immutable_meta_properties: string;
  immutable_properties: string;
  mutable_meta_properties: string;
  mutable_properties: string;
}

function createBaseTransactionRequest(): TransactionRequest {
  return {
    from: "",
    fromID: "",
    classificationID: "",
    takerID: "",
    makerOwnableID: "",
    takerOwnableID: "",
    expiresIn: Long.ZERO,
    makerOwnableSplit: "",
    takerOwnableSplit: "",
    immutableMetaProperties: "",
    immutableProperties: "",
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

    if (message.classificationID !== "") {
      writer.uint32(26).string(message.classificationID);
    }

    if (message.takerID !== "") {
      writer.uint32(34).string(message.takerID);
    }

    if (message.makerOwnableID !== "") {
      writer.uint32(42).string(message.makerOwnableID);
    }

    if (message.takerOwnableID !== "") {
      writer.uint32(50).string(message.takerOwnableID);
    }

    if (!message.expiresIn.isZero()) {
      writer.uint32(56).int64(message.expiresIn);
    }

    if (message.makerOwnableSplit !== "") {
      writer.uint32(66).string(message.makerOwnableSplit);
    }

    if (message.takerOwnableSplit !== "") {
      writer.uint32(74).string(message.takerOwnableSplit);
    }

    if (message.immutableMetaProperties !== "") {
      writer.uint32(82).string(message.immutableMetaProperties);
    }

    if (message.immutableProperties !== "") {
      writer.uint32(90).string(message.immutableProperties);
    }

    if (message.mutableMetaProperties !== "") {
      writer.uint32(98).string(message.mutableMetaProperties);
    }

    if (message.mutableProperties !== "") {
      writer.uint32(106).string(message.mutableProperties);
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
          message.classificationID = reader.string();
          break;

        case 4:
          message.takerID = reader.string();
          break;

        case 5:
          message.makerOwnableID = reader.string();
          break;

        case 6:
          message.takerOwnableID = reader.string();
          break;

        case 7:
          message.expiresIn = (reader.int64() as Long);
          break;

        case 8:
          message.makerOwnableSplit = reader.string();
          break;

        case 9:
          message.takerOwnableSplit = reader.string();
          break;

        case 10:
          message.immutableMetaProperties = reader.string();
          break;

        case 11:
          message.immutableProperties = reader.string();
          break;

        case 12:
          message.mutableMetaProperties = reader.string();
          break;

        case 13:
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
      classificationID: isSet(object.classificationID) ? String(object.classificationID) : "",
      takerID: isSet(object.takerID) ? String(object.takerID) : "",
      makerOwnableID: isSet(object.makerOwnableID) ? String(object.makerOwnableID) : "",
      takerOwnableID: isSet(object.takerOwnableID) ? String(object.takerOwnableID) : "",
      expiresIn: isSet(object.expiresIn) ? Long.fromValue(object.expiresIn) : Long.ZERO,
      makerOwnableSplit: isSet(object.makerOwnableSplit) ? String(object.makerOwnableSplit) : "",
      takerOwnableSplit: isSet(object.takerOwnableSplit) ? String(object.takerOwnableSplit) : "",
      immutableMetaProperties: isSet(object.immutableMetaProperties) ? String(object.immutableMetaProperties) : "",
      immutableProperties: isSet(object.immutableProperties) ? String(object.immutableProperties) : "",
      mutableMetaProperties: isSet(object.mutableMetaProperties) ? String(object.mutableMetaProperties) : "",
      mutableProperties: isSet(object.mutableProperties) ? String(object.mutableProperties) : ""
    };
  },

  toJSON(message: TransactionRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.fromID !== undefined && (obj.fromID = message.fromID);
    message.classificationID !== undefined && (obj.classificationID = message.classificationID);
    message.takerID !== undefined && (obj.takerID = message.takerID);
    message.makerOwnableID !== undefined && (obj.makerOwnableID = message.makerOwnableID);
    message.takerOwnableID !== undefined && (obj.takerOwnableID = message.takerOwnableID);
    message.expiresIn !== undefined && (obj.expiresIn = (message.expiresIn || Long.ZERO).toString());
    message.makerOwnableSplit !== undefined && (obj.makerOwnableSplit = message.makerOwnableSplit);
    message.takerOwnableSplit !== undefined && (obj.takerOwnableSplit = message.takerOwnableSplit);
    message.immutableMetaProperties !== undefined && (obj.immutableMetaProperties = message.immutableMetaProperties);
    message.immutableProperties !== undefined && (obj.immutableProperties = message.immutableProperties);
    message.mutableMetaProperties !== undefined && (obj.mutableMetaProperties = message.mutableMetaProperties);
    message.mutableProperties !== undefined && (obj.mutableProperties = message.mutableProperties);
    return obj;
  },

  fromPartial(object: Partial<TransactionRequest>): TransactionRequest {
    const message = createBaseTransactionRequest();
    message.from = object.from ?? "";
    message.fromID = object.fromID ?? "";
    message.classificationID = object.classificationID ?? "";
    message.takerID = object.takerID ?? "";
    message.makerOwnableID = object.makerOwnableID ?? "";
    message.takerOwnableID = object.takerOwnableID ?? "";
    message.expiresIn = object.expiresIn !== undefined && object.expiresIn !== null ? Long.fromValue(object.expiresIn) : Long.ZERO;
    message.makerOwnableSplit = object.makerOwnableSplit ?? "";
    message.takerOwnableSplit = object.takerOwnableSplit ?? "";
    message.immutableMetaProperties = object.immutableMetaProperties ?? "";
    message.immutableProperties = object.immutableProperties ?? "";
    message.mutableMetaProperties = object.mutableMetaProperties ?? "";
    message.mutableProperties = object.mutableProperties ?? "";
    return message;
  }

};