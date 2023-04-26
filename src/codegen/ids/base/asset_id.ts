import { HashID, HashIDSDKType } from "./hash_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface AssetID {
  hashID?: HashID;
}
export interface AssetIDSDKType {
  hash_i_d?: HashIDSDKType;
}
function createBaseAssetID(): AssetID {
  return {
    hashID: undefined
  };
}
export const AssetID = {
  encode(message: AssetID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hashID !== undefined) {
      HashID.encode(message.hashID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AssetID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetID();
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
  fromJSON(object: any): AssetID {
    return {
      hashID: isSet(object.hashID) ? HashID.fromJSON(object.hashID) : undefined
    };
  },
  toJSON(message: AssetID): unknown {
    const obj: any = {};
    message.hashID !== undefined && (obj.hashID = message.hashID ? HashID.toJSON(message.hashID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<AssetID>): AssetID {
    const message = createBaseAssetID();
    message.hashID = object.hashID !== undefined && object.hashID !== null ? HashID.fromPartial(object.hashID) : undefined;
    return message;
  }
};