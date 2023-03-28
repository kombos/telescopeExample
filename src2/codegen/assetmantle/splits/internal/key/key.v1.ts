import { SplitID, SplitIDSDKType } from "../../../base/ids/v1/splitID.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
export interface Key {
  splitID?: SplitID;
}
export interface KeySDKType {
  split_i_d?: SplitIDSDKType;
}

function createBaseKey(): Key {
  return {
    splitID: undefined
  };
}

export const Key = {
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.splitID !== undefined) {
      SplitID.encode(message.splitID, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Key {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKey();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.splitID = SplitID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Key {
    return {
      splitID: isSet(object.splitID) ? SplitID.fromJSON(object.splitID) : undefined
    };
  },

  toJSON(message: Key): unknown {
    const obj: any = {};
    message.splitID !== undefined && (obj.splitID = message.splitID ? SplitID.toJSON(message.splitID) : undefined);
    return obj;
  },

  fromPartial(object: Partial<Key>): Key {
    const message = createBaseKey();
    message.splitID = object.splitID !== undefined && object.splitID !== null ? SplitID.fromPartial(object.splitID) : undefined;
    return message;
  }

};