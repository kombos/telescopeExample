import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface BooleanData {
  value: boolean;
}
export interface BooleanDataSDKType {
  value: boolean;
}
function createBaseBooleanData(): BooleanData {
  return {
    value: false
  };
}
export const BooleanData = {
  encode(message: BooleanData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BooleanData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBooleanData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BooleanData {
    return {
      value: isSet(object.value) ? Boolean(object.value) : false
    };
  },
  toJSON(message: BooleanData): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<BooleanData>): BooleanData {
    const message = createBaseBooleanData();
    message.value = object.value ?? false;
    return message;
  }
};