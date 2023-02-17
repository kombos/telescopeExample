import { IdentityID, IdentityIDSDKType } from "../../../../../schema/ids/base/identityID.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../../helpers";
export interface QueryRequest {
  identityID?: IdentityID;
}
export interface QueryRequestSDKType {
  identity_i_d?: IdentityIDSDKType;
}

function createBaseQueryRequest(): QueryRequest {
  return {
    identityID: undefined
  };
}

export const QueryRequest = {
  encode(message: QueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identityID !== undefined) {
      IdentityID.encode(message.identityID, writer.uint32(10).fork()).ldelim();
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
          message.identityID = IdentityID.decode(reader, reader.uint32());
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
      identityID: isSet(object.identityID) ? IdentityID.fromJSON(object.identityID) : undefined
    };
  },

  toJSON(message: QueryRequest): unknown {
    const obj: any = {};
    message.identityID !== undefined && (obj.identityID = message.identityID ? IdentityID.toJSON(message.identityID) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryRequest>): QueryRequest {
    const message = createBaseQueryRequest();
    message.identityID = object.identityID !== undefined && object.identityID !== null ? IdentityID.fromPartial(object.identityID) : undefined;
    return message;
  }

};