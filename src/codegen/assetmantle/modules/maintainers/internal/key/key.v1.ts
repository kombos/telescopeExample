import { MaintainerID, MaintainerIDSDKType } from "../../../../schema/ids/base/maintainerID.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../helpers";
export interface Key {
  maintainerID?: MaintainerID;
}
export interface KeySDKType {
  maintainer_i_d?: MaintainerIDSDKType;
}

function createBaseKey(): Key {
  return {
    maintainerID: undefined
  };
}

export const Key = {
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maintainerID !== undefined) {
      MaintainerID.encode(message.maintainerID, writer.uint32(10).fork()).ldelim();
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
          message.maintainerID = MaintainerID.decode(reader, reader.uint32());
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
      maintainerID: isSet(object.maintainerID) ? MaintainerID.fromJSON(object.maintainerID) : undefined
    };
  },

  toJSON(message: Key): unknown {
    const obj: any = {};
    message.maintainerID !== undefined && (obj.maintainerID = message.maintainerID ? MaintainerID.toJSON(message.maintainerID) : undefined);
    return obj;
  },

  fromPartial(object: Partial<Key>): Key {
    const message = createBaseKey();
    message.maintainerID = object.maintainerID !== undefined && object.maintainerID !== null ? MaintainerID.fromPartial(object.maintainerID) : undefined;
    return message;
  }

};