import { HashID, HashIDSDKType } from "./hash_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface IdentityID {
  hashID?: HashID;
}
export interface IdentityIDSDKType {
  hash_i_d?: HashIDSDKType;
}
function createBaseIdentityID(): IdentityID {
  return {
    hashID: undefined
  };
}
export const IdentityID = {
  encode(message: IdentityID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hashID !== undefined) {
      HashID.encode(message.hashID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IdentityID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentityID();
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
  fromJSON(object: any): IdentityID {
    return {
      hashID: isSet(object.hashID) ? HashID.fromJSON(object.hashID) : undefined
    };
  },
  toJSON(message: IdentityID): unknown {
    const obj: any = {};
    message.hashID !== undefined && (obj.hashID = message.hashID ? HashID.toJSON(message.hashID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<IdentityID>): IdentityID {
    const message = createBaseIdentityID();
    message.hashID = object.hashID !== undefined && object.hashID !== null ? HashID.fromPartial(object.hashID) : undefined;
    return message;
  }
};