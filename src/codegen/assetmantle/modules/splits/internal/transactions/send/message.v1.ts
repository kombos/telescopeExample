import { IdentityID, IdentityIDSDKType } from "../../../../../schema/ids/base/identityID.v1";
import { AnyOwnableID, AnyOwnableIDSDKType } from "../../../../../schema/ids/base/anyOwnableID.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../../helpers";
export interface Message {
  from: string;
  fromID?: IdentityID;
  toID?: IdentityID;
  ownableID?: AnyOwnableID;
  value: string;
}
export interface MessageSDKType {
  from: string;
  from_i_d?: IdentityIDSDKType;
  to_i_d?: IdentityIDSDKType;
  ownable_i_d?: AnyOwnableIDSDKType;
  value: string;
}

function createBaseMessage(): Message {
  return {
    from: "",
    fromID: undefined,
    toID: undefined,
    ownableID: undefined,
    value: ""
  };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.fromID !== undefined) {
      IdentityID.encode(message.fromID, writer.uint32(18).fork()).ldelim();
    }

    if (message.toID !== undefined) {
      IdentityID.encode(message.toID, writer.uint32(26).fork()).ldelim();
    }

    if (message.ownableID !== undefined) {
      AnyOwnableID.encode(message.ownableID, writer.uint32(34).fork()).ldelim();
    }

    if (message.value !== "") {
      writer.uint32(42).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.fromID = IdentityID.decode(reader, reader.uint32());
          break;

        case 3:
          message.toID = IdentityID.decode(reader, reader.uint32());
          break;

        case 4:
          message.ownableID = AnyOwnableID.decode(reader, reader.uint32());
          break;

        case 5:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Message {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      fromID: isSet(object.fromID) ? IdentityID.fromJSON(object.fromID) : undefined,
      toID: isSet(object.toID) ? IdentityID.fromJSON(object.toID) : undefined,
      ownableID: isSet(object.ownableID) ? AnyOwnableID.fromJSON(object.ownableID) : undefined,
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.fromID !== undefined && (obj.fromID = message.fromID ? IdentityID.toJSON(message.fromID) : undefined);
    message.toID !== undefined && (obj.toID = message.toID ? IdentityID.toJSON(message.toID) : undefined);
    message.ownableID !== undefined && (obj.ownableID = message.ownableID ? AnyOwnableID.toJSON(message.ownableID) : undefined);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.from = object.from ?? "";
    message.fromID = object.fromID !== undefined && object.fromID !== null ? IdentityID.fromPartial(object.fromID) : undefined;
    message.toID = object.toID !== undefined && object.toID !== null ? IdentityID.fromPartial(object.toID) : undefined;
    message.ownableID = object.ownableID !== undefined && object.ownableID !== null ? AnyOwnableID.fromPartial(object.ownableID) : undefined;
    message.value = object.value ?? "";
    return message;
  }

};