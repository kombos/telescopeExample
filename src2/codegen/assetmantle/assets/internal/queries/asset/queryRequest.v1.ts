import { AssetID, AssetIDSDKType } from "../../../../base/ids/v1/assetID.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../helpers";
export interface QueryRequest {
  assetID?: AssetID;
}
export interface QueryRequestSDKType {
  asset_i_d?: AssetIDSDKType;
}

function createBaseQueryRequest(): QueryRequest {
  return {
    assetID: undefined
  };
}

export const QueryRequest = {
  encode(message: QueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetID !== undefined) {
      AssetID.encode(message.assetID, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequest();

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

  fromJSON(object: any): QueryRequest {
    return {
      assetID: isSet(object.assetID) ? AssetID.fromJSON(object.assetID) : undefined
    };
  },

  toJSON(message: QueryRequest): unknown {
    const obj: any = {};
    message.assetID !== undefined && (obj.assetID = message.assetID ? AssetID.toJSON(message.assetID) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryRequest>): QueryRequest {
    const message = createBaseQueryRequest();
    message.assetID = object.assetID !== undefined && object.assetID !== null ? AssetID.fromPartial(object.assetID) : undefined;
    return message;
  }

};