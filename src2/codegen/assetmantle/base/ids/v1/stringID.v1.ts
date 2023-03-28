import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
export interface StringID {
  iDString: string;
}
export interface StringIDSDKType {
  i_d_string: string;
}

function createBaseStringID(): StringID {
  return {
    iDString: ""
  };
}

export const StringID = {
  encode(message: StringID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iDString !== "") {
      writer.uint32(10).string(message.iDString);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iDString = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StringID {
    return {
      iDString: isSet(object.iDString) ? String(object.iDString) : ""
    };
  },

  toJSON(message: StringID): unknown {
    const obj: any = {};
    message.iDString !== undefined && (obj.iDString = message.iDString);
    return obj;
  },

  fromPartial(object: Partial<StringID>): StringID {
    const message = createBaseStringID();
    message.iDString = object.iDString ?? "";
    return message;
  }

};