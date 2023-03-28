import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
export interface StringData {
  value: string;
}
export interface StringDataSDKType {
  value: string;
}

function createBaseStringData(): StringData {
  return {
    value: ""
  };
}

export const StringData = {
  encode(message: StringData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringData();

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

  fromJSON(object: any): StringData {
    return {
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: StringData): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: Partial<StringData>): StringData {
    const message = createBaseStringData();
    message.value = object.value ?? "";
    return message;
  }

};