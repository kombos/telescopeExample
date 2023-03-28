import { IdentityID, IdentityIDSDKType } from "./identityID.v1";
import { AnyOwnableID, AnyOwnableIDSDKType } from "./anyOwnableID.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
export interface SplitID {
  ownerID?: IdentityID;
  ownableID?: AnyOwnableID;
}
export interface SplitIDSDKType {
  owner_i_d?: IdentityIDSDKType;
  ownable_i_d?: AnyOwnableIDSDKType;
}

function createBaseSplitID(): SplitID {
  return {
    ownerID: undefined,
    ownableID: undefined
  };
}

export const SplitID = {
  encode(message: SplitID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownerID !== undefined) {
      IdentityID.encode(message.ownerID, writer.uint32(10).fork()).ldelim();
    }

    if (message.ownableID !== undefined) {
      AnyOwnableID.encode(message.ownableID, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SplitID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSplitID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ownerID = IdentityID.decode(reader, reader.uint32());
          break;

        case 2:
          message.ownableID = AnyOwnableID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SplitID {
    return {
      ownerID: isSet(object.ownerID) ? IdentityID.fromJSON(object.ownerID) : undefined,
      ownableID: isSet(object.ownableID) ? AnyOwnableID.fromJSON(object.ownableID) : undefined
    };
  },

  toJSON(message: SplitID): unknown {
    const obj: any = {};
    message.ownerID !== undefined && (obj.ownerID = message.ownerID ? IdentityID.toJSON(message.ownerID) : undefined);
    message.ownableID !== undefined && (obj.ownableID = message.ownableID ? AnyOwnableID.toJSON(message.ownableID) : undefined);
    return obj;
  },

  fromPartial(object: Partial<SplitID>): SplitID {
    const message = createBaseSplitID();
    message.ownerID = object.ownerID !== undefined && object.ownerID !== null ? IdentityID.fromPartial(object.ownerID) : undefined;
    message.ownableID = object.ownableID !== undefined && object.ownableID !== null ? AnyOwnableID.fromPartial(object.ownableID) : undefined;
    return message;
  }

};