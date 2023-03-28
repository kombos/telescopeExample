import { IdentityID, IdentityIDSDKType } from "../../../../base/ids/internal/identityID.v1";
import { PropertyList, PropertyListSDKType } from "../../../../base/lists/internal/propertyList.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../helpers";
export interface Message {
  from: string;
  fromID?: IdentityID;
  immutableMetaProperties?: PropertyList;
  immutableProperties?: PropertyList;
  mutableMetaProperties?: PropertyList;
  mutableProperties?: PropertyList;
}
export interface MessageSDKType {
  from: string;
  from_i_d?: IdentityIDSDKType;
  immutable_meta_properties?: PropertyListSDKType;
  immutable_properties?: PropertyListSDKType;
  mutable_meta_properties?: PropertyListSDKType;
  mutable_properties?: PropertyListSDKType;
}

function createBaseMessage(): Message {
  return {
    from: "",
    fromID: undefined,
    immutableMetaProperties: undefined,
    immutableProperties: undefined,
    mutableMetaProperties: undefined,
    mutableProperties: undefined
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

    if (message.immutableMetaProperties !== undefined) {
      PropertyList.encode(message.immutableMetaProperties, writer.uint32(26).fork()).ldelim();
    }

    if (message.immutableProperties !== undefined) {
      PropertyList.encode(message.immutableProperties, writer.uint32(34).fork()).ldelim();
    }

    if (message.mutableMetaProperties !== undefined) {
      PropertyList.encode(message.mutableMetaProperties, writer.uint32(42).fork()).ldelim();
    }

    if (message.mutableProperties !== undefined) {
      PropertyList.encode(message.mutableProperties, writer.uint32(50).fork()).ldelim();
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
          message.immutableMetaProperties = PropertyList.decode(reader, reader.uint32());
          break;

        case 4:
          message.immutableProperties = PropertyList.decode(reader, reader.uint32());
          break;

        case 5:
          message.mutableMetaProperties = PropertyList.decode(reader, reader.uint32());
          break;

        case 6:
          message.mutableProperties = PropertyList.decode(reader, reader.uint32());
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
      immutableMetaProperties: isSet(object.immutableMetaProperties) ? PropertyList.fromJSON(object.immutableMetaProperties) : undefined,
      immutableProperties: isSet(object.immutableProperties) ? PropertyList.fromJSON(object.immutableProperties) : undefined,
      mutableMetaProperties: isSet(object.mutableMetaProperties) ? PropertyList.fromJSON(object.mutableMetaProperties) : undefined,
      mutableProperties: isSet(object.mutableProperties) ? PropertyList.fromJSON(object.mutableProperties) : undefined
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.fromID !== undefined && (obj.fromID = message.fromID ? IdentityID.toJSON(message.fromID) : undefined);
    message.immutableMetaProperties !== undefined && (obj.immutableMetaProperties = message.immutableMetaProperties ? PropertyList.toJSON(message.immutableMetaProperties) : undefined);
    message.immutableProperties !== undefined && (obj.immutableProperties = message.immutableProperties ? PropertyList.toJSON(message.immutableProperties) : undefined);
    message.mutableMetaProperties !== undefined && (obj.mutableMetaProperties = message.mutableMetaProperties ? PropertyList.toJSON(message.mutableMetaProperties) : undefined);
    message.mutableProperties !== undefined && (obj.mutableProperties = message.mutableProperties ? PropertyList.toJSON(message.mutableProperties) : undefined);
    return obj;
  },

  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.from = object.from ?? "";
    message.fromID = object.fromID !== undefined && object.fromID !== null ? IdentityID.fromPartial(object.fromID) : undefined;
    message.immutableMetaProperties = object.immutableMetaProperties !== undefined && object.immutableMetaProperties !== null ? PropertyList.fromPartial(object.immutableMetaProperties) : undefined;
    message.immutableProperties = object.immutableProperties !== undefined && object.immutableProperties !== null ? PropertyList.fromPartial(object.immutableProperties) : undefined;
    message.mutableMetaProperties = object.mutableMetaProperties !== undefined && object.mutableMetaProperties !== null ? PropertyList.fromPartial(object.mutableMetaProperties) : undefined;
    message.mutableProperties = object.mutableProperties !== undefined && object.mutableProperties !== null ? PropertyList.fromPartial(object.mutableProperties) : undefined;
    return message;
  }

};