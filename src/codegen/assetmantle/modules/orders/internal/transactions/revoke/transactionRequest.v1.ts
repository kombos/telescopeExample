import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../../helpers";
export interface TransactionRequest {
  from: string;
  fromID: string;
  toID: string;
  classificationID: string;
}
export interface TransactionRequestSDKType {
  from: string;
  from_i_d: string;
  to_i_d: string;
  classification_i_d: string;
}

function createBaseTransactionRequest(): TransactionRequest {
  return {
    from: "",
    fromID: "",
    toID: "",
    classificationID: ""
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

    if (message.classificationID !== "") {
      writer.uint32(34).string(message.classificationID);
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
          message.classificationID = reader.string();
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
      classificationID: isSet(object.classificationID) ? String(object.classificationID) : ""
    };
  },

  toJSON(message: TransactionRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.fromID !== undefined && (obj.fromID = message.fromID);
    message.toID !== undefined && (obj.toID = message.toID);
    message.classificationID !== undefined && (obj.classificationID = message.classificationID);
    return obj;
  },

  fromPartial(object: Partial<TransactionRequest>): TransactionRequest {
    const message = createBaseTransactionRequest();
    message.from = object.from ?? "";
    message.fromID = object.fromID ?? "";
    message.toID = object.toID ?? "";
    message.classificationID = object.classificationID ?? "";
    return message;
  }

};