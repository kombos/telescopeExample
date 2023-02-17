import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../../../helpers";
export interface TestMessage {
  from: Uint8Array;
  iD: string;
}
export interface TestMessageSDKType {
  from: Uint8Array;
  i_d: string;
}

function createBaseTestMessage(): TestMessage {
  return {
    from: new Uint8Array(),
    iD: ""
  };
}

export const TestMessage = {
  encode(message: TestMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from.length !== 0) {
      writer.uint32(10).bytes(message.from);
    }

    if (message.iD !== "") {
      writer.uint32(18).string(message.iD);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TestMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.bytes();
          break;

        case 2:
          message.iD = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TestMessage {
    return {
      from: isSet(object.from) ? bytesFromBase64(object.from) : new Uint8Array(),
      iD: isSet(object.iD) ? String(object.iD) : ""
    };
  },

  toJSON(message: TestMessage): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = base64FromBytes(message.from !== undefined ? message.from : new Uint8Array()));
    message.iD !== undefined && (obj.iD = message.iD);
    return obj;
  },

  fromPartial(object: Partial<TestMessage>): TestMessage {
    const message = createBaseTestMessage();
    message.from = object.from ?? new Uint8Array();
    message.iD = object.iD ?? "";
    return message;
  }

};