import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface DecData {
  value: string;
}
export interface DecDataSDKType {
  value: string;
}
function createBaseDecData(): DecData {
  return {
    value: ""
  };
}
export const DecData = {
  encode(message: DecData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DecData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DecData {
    return {
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: DecData): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<DecData>): DecData {
    const message = createBaseDecData();
    message.value = object.value ?? "";
    return message;
  }
};