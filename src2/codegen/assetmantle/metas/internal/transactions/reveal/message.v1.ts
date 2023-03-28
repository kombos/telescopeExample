import { AnyData, AnyDataSDKType } from "../../../../base/data/v1/anyData.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../helpers";
export interface Message {
  from: string;
  data?: AnyData;
}
export interface MessageSDKType {
  from: string;
  data?: AnyDataSDKType;
}

function createBaseMessage(): Message {
  return {
    from: "",
    data: undefined
  };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.data !== undefined) {
      AnyData.encode(message.data, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.data = AnyData.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Message {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      data: isSet(object.data) ? AnyData.fromJSON(object.data) : undefined
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.data !== undefined && (obj.data = message.data ? AnyData.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.from = object.from ?? "";
    message.data = object.data !== undefined && object.data !== null ? AnyData.fromPartial(object.data) : undefined;
    return message;
  }

};