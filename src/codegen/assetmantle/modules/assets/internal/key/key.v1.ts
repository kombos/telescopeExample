import { AssetID, AssetIDSDKType } from "../../../../schema/ids/base/assetID.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../helpers";
export interface Key {
  assetID?: AssetID;
}
export interface KeySDKType {
  asset_i_d?: AssetIDSDKType;
}

function createBaseKey(): Key {
  return {
    assetID: undefined
  };
}

export const Key = {
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetID !== undefined) {
      AssetID.encode(message.assetID, writer.uint32(10).fork()).ldelim();
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
          message.assetID = AssetID.decode(reader, reader.uint32());
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
      assetID: isSet(object.assetID) ? AssetID.fromJSON(object.assetID) : undefined
    };
  },

  toJSON(message: Key): unknown {
    const obj: any = {};
    message.assetID !== undefined && (obj.assetID = message.assetID ? AssetID.toJSON(message.assetID) : undefined);
    return obj;
  },

  fromPartial(object: Partial<Key>): Key {
    const message = createBaseKey();
    message.assetID = object.assetID !== undefined && object.assetID !== null ? AssetID.fromPartial(object.assetID) : undefined;
    return message;
  }

};