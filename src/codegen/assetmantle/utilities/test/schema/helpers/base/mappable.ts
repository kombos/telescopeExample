import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../../helpers";
export interface TestMappable {
  iD: string;
  value: string;
}
export interface TestMappableSDKType {
  i_d: string;
  value: string;
}

function createBaseTestMappable(): TestMappable {
  return {
    iD: "",
    value: ""
  };
}

export const TestMappable = {
  encode(message: TestMappable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iD !== "") {
      writer.uint32(10).string(message.iD);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestMappable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestMappable();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iD = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TestMappable {
    return {
      iD: isSet(object.iD) ? String(object.iD) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: TestMappable): unknown {
    const obj: any = {};
    message.iD !== undefined && (obj.iD = message.iD);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: Partial<TestMappable>): TestMappable {
    const message = createBaseTestMappable();
    message.iD = object.iD ?? "";
    message.value = object.value ?? "";
    return message;
  }

};