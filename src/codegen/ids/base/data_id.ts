import { StringID, StringIDSDKType } from "./string_id";
import { HashID, HashIDSDKType } from "./hash_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface DataID {
  typeID?: StringID;
  hashID?: HashID;
}
export interface DataIDSDKType {
  type_i_d?: StringIDSDKType;
  hash_i_d?: HashIDSDKType;
}
function createBaseDataID(): DataID {
  return {
    typeID: undefined,
    hashID: undefined
  };
}
export const DataID = {
  encode(message: DataID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeID !== undefined) {
      StringID.encode(message.typeID, writer.uint32(10).fork()).ldelim();
    }
    if (message.hashID !== undefined) {
      HashID.encode(message.hashID, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DataID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.typeID = StringID.decode(reader, reader.uint32());
          break;
        case 2:
          message.hashID = HashID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DataID {
    return {
      typeID: isSet(object.typeID) ? StringID.fromJSON(object.typeID) : undefined,
      hashID: isSet(object.hashID) ? HashID.fromJSON(object.hashID) : undefined
    };
  },
  toJSON(message: DataID): unknown {
    const obj: any = {};
    message.typeID !== undefined && (obj.typeID = message.typeID ? StringID.toJSON(message.typeID) : undefined);
    message.hashID !== undefined && (obj.hashID = message.hashID ? HashID.toJSON(message.hashID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<DataID>): DataID {
    const message = createBaseDataID();
    message.typeID = object.typeID !== undefined && object.typeID !== null ? StringID.fromPartial(object.typeID) : undefined;
    message.hashID = object.hashID !== undefined && object.hashID !== null ? HashID.fromPartial(object.hashID) : undefined;
    return message;
  }
};