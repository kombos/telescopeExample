import { HashID, HashIDSDKType } from "./hashID.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
export interface ClassificationID {
  hashID?: HashID;
}
export interface ClassificationIDSDKType {
  hash_i_d?: HashIDSDKType;
}

function createBaseClassificationID(): ClassificationID {
  return {
    hashID: undefined
  };
}

export const ClassificationID = {
  encode(message: ClassificationID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hashID !== undefined) {
      HashID.encode(message.hashID, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClassificationID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassificationID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.hashID = HashID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ClassificationID {
    return {
      hashID: isSet(object.hashID) ? HashID.fromJSON(object.hashID) : undefined
    };
  },

  toJSON(message: ClassificationID): unknown {
    const obj: any = {};
    message.hashID !== undefined && (obj.hashID = message.hashID ? HashID.toJSON(message.hashID) : undefined);
    return obj;
  },

  fromPartial(object: Partial<ClassificationID>): ClassificationID {
    const message = createBaseClassificationID();
    message.hashID = object.hashID !== undefined && object.hashID !== null ? HashID.fromPartial(object.hashID) : undefined;
    return message;
  }

};