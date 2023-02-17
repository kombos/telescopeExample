import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../../helpers";
export interface TransactionResponse {
  success: boolean;
  /** TODO define error object */

  error: string;
}
export interface TransactionResponseSDKType {
  success: boolean;
  /** TODO define error object */

  error: string;
}

function createBaseTransactionResponse(): TransactionResponse {
  return {
    success: false,
    error: ""
  };
}

export const TransactionResponse = {
  encode(message: TransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }

    if (message.error !== "") {
      writer.uint32(18).string(message.error);
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
          message.success = reader.bool();
          break;

        case 2:
          message.error = reader.string();
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
      success: isSet(object.success) ? Boolean(object.success) : false,
      error: isSet(object.error) ? String(object.error) : ""
    };
  },

  toJSON(message: TransactionResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object: Partial<TransactionResponse>): TransactionResponse {
    const message = createBaseTransactionResponse();
    message.success = object.success ?? false;
    message.error = object.error ?? "";
    return message;
  }

};