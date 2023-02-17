import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../../helpers";
export interface TransactionRequest {
  from: string;
  fromID: string;
  toID: string;
  ownableID: string;
  value: string;
}
export interface TransactionRequestSDKType {
  from: string;
  from_i_d: string;
  to_i_d: string;
  ownable_i_d: string;
  value: string;
}

function createBaseTransactionRequest(): TransactionRequest {
  return {
    from: "",
    fromID: "",
    toID: "",
    ownableID: "",
    value: ""
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

    if (message.toID !== "") {
      writer.uint32(26).string(message.toID);
    }

    if (message.ownableID !== "") {
      writer.uint32(34).string(message.ownableID);
    }

    if (message.value !== "") {
      writer.uint32(42).string(message.value);
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
          message.toID = reader.string();
          break;

        case 4:
          message.ownableID = reader.string();
          break;

        case 5:
          message.value = reader.string();
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
      toID: isSet(object.toID) ? String(object.toID) : "",
      ownableID: isSet(object.ownableID) ? String(object.ownableID) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: TransactionRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.fromID !== undefined && (obj.fromID = message.fromID);
    message.toID !== undefined && (obj.toID = message.toID);
    message.ownableID !== undefined && (obj.ownableID = message.ownableID);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: Partial<TransactionRequest>): TransactionRequest {
    const message = createBaseTransactionRequest();
    message.from = object.from ?? "";
    message.fromID = object.fromID ?? "";
    message.toID = object.toID ?? "";
    message.ownableID = object.ownableID ?? "";
    message.value = object.value ?? "";
    return message;
  }

};