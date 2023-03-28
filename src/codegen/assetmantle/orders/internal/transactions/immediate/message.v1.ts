import { IdentityID, IdentityIDSDKType } from "../../../../base/ids/internal/identityID.v1";
import { ClassificationID, ClassificationIDSDKType } from "../../../../base/ids/internal/classificationID.v1";
import { AnyOwnableID, AnyOwnableIDSDKType } from "../../../../base/ids/internal/anyOwnableID.v1";
import { Height, HeightSDKType } from "../../../../base/types/internal/height.v1";
import { PropertyList, PropertyListSDKType } from "../../../../base/lists/internal/propertyList.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../helpers";
export interface Message {
  from: string;
  fromID?: IdentityID;
  classificationID?: ClassificationID;
  takerID?: IdentityID;
  makerOwnableID?: AnyOwnableID;
  takerOwnableID?: AnyOwnableID;
  expiresOn?: Height;
  makerOwnableSplit: string;
  takerOwnableSplit: string;
  immutableMetaProperties?: PropertyList;
  immutableProperties?: PropertyList;
  mutableMetaProperties?: PropertyList;
  mutableProperties?: PropertyList;
}
export interface MessageSDKType {
  from: string;
  from_i_d?: IdentityIDSDKType;
  classification_i_d?: ClassificationIDSDKType;
  taker_i_d?: IdentityIDSDKType;
  maker_ownable_i_d?: AnyOwnableIDSDKType;
  taker_ownable_i_d?: AnyOwnableIDSDKType;
  expires_on?: HeightSDKType;
  maker_ownable_split: string;
  taker_ownable_split: string;
  immutable_meta_properties?: PropertyListSDKType;
  immutable_properties?: PropertyListSDKType;
  mutable_meta_properties?: PropertyListSDKType;
  mutable_properties?: PropertyListSDKType;
}

function createBaseMessage(): Message {
  return {
    from: "",
    fromID: undefined,
    classificationID: undefined,
    takerID: undefined,
    makerOwnableID: undefined,
    takerOwnableID: undefined,
    expiresOn: undefined,
    makerOwnableSplit: "",
    takerOwnableSplit: "",
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

    if (message.classificationID !== undefined) {
      ClassificationID.encode(message.classificationID, writer.uint32(26).fork()).ldelim();
    }

    if (message.takerID !== undefined) {
      IdentityID.encode(message.takerID, writer.uint32(34).fork()).ldelim();
    }

    if (message.makerOwnableID !== undefined) {
      AnyOwnableID.encode(message.makerOwnableID, writer.uint32(42).fork()).ldelim();
    }

    if (message.takerOwnableID !== undefined) {
      AnyOwnableID.encode(message.takerOwnableID, writer.uint32(50).fork()).ldelim();
    }

    if (message.expiresOn !== undefined) {
      Height.encode(message.expiresOn, writer.uint32(58).fork()).ldelim();
    }

    if (message.makerOwnableSplit !== "") {
      writer.uint32(66).string(message.makerOwnableSplit);
    }

    if (message.takerOwnableSplit !== "") {
      writer.uint32(74).string(message.takerOwnableSplit);
    }

    if (message.immutableMetaProperties !== undefined) {
      PropertyList.encode(message.immutableMetaProperties, writer.uint32(82).fork()).ldelim();
    }

    if (message.immutableProperties !== undefined) {
      PropertyList.encode(message.immutableProperties, writer.uint32(90).fork()).ldelim();
    }

    if (message.mutableMetaProperties !== undefined) {
      PropertyList.encode(message.mutableMetaProperties, writer.uint32(98).fork()).ldelim();
    }

    if (message.mutableProperties !== undefined) {
      PropertyList.encode(message.mutableProperties, writer.uint32(106).fork()).ldelim();
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
          message.classificationID = ClassificationID.decode(reader, reader.uint32());
          break;

        case 4:
          message.takerID = IdentityID.decode(reader, reader.uint32());
          break;

        case 5:
          message.makerOwnableID = AnyOwnableID.decode(reader, reader.uint32());
          break;

        case 6:
          message.takerOwnableID = AnyOwnableID.decode(reader, reader.uint32());
          break;

        case 7:
          message.expiresOn = Height.decode(reader, reader.uint32());
          break;

        case 8:
          message.makerOwnableSplit = reader.string();
          break;

        case 9:
          message.takerOwnableSplit = reader.string();
          break;

        case 10:
          message.immutableMetaProperties = PropertyList.decode(reader, reader.uint32());
          break;

        case 11:
          message.immutableProperties = PropertyList.decode(reader, reader.uint32());
          break;

        case 12:
          message.mutableMetaProperties = PropertyList.decode(reader, reader.uint32());
          break;

        case 13:
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
      classificationID: isSet(object.classificationID) ? ClassificationID.fromJSON(object.classificationID) : undefined,
      takerID: isSet(object.takerID) ? IdentityID.fromJSON(object.takerID) : undefined,
      makerOwnableID: isSet(object.makerOwnableID) ? AnyOwnableID.fromJSON(object.makerOwnableID) : undefined,
      takerOwnableID: isSet(object.takerOwnableID) ? AnyOwnableID.fromJSON(object.takerOwnableID) : undefined,
      expiresOn: isSet(object.expiresOn) ? Height.fromJSON(object.expiresOn) : undefined,
      makerOwnableSplit: isSet(object.makerOwnableSplit) ? String(object.makerOwnableSplit) : "",
      takerOwnableSplit: isSet(object.takerOwnableSplit) ? String(object.takerOwnableSplit) : "",
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
    message.classificationID !== undefined && (obj.classificationID = message.classificationID ? ClassificationID.toJSON(message.classificationID) : undefined);
    message.takerID !== undefined && (obj.takerID = message.takerID ? IdentityID.toJSON(message.takerID) : undefined);
    message.makerOwnableID !== undefined && (obj.makerOwnableID = message.makerOwnableID ? AnyOwnableID.toJSON(message.makerOwnableID) : undefined);
    message.takerOwnableID !== undefined && (obj.takerOwnableID = message.takerOwnableID ? AnyOwnableID.toJSON(message.takerOwnableID) : undefined);
    message.expiresOn !== undefined && (obj.expiresOn = message.expiresOn ? Height.toJSON(message.expiresOn) : undefined);
    message.makerOwnableSplit !== undefined && (obj.makerOwnableSplit = message.makerOwnableSplit);
    message.takerOwnableSplit !== undefined && (obj.takerOwnableSplit = message.takerOwnableSplit);
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
    message.classificationID = object.classificationID !== undefined && object.classificationID !== null ? ClassificationID.fromPartial(object.classificationID) : undefined;
    message.takerID = object.takerID !== undefined && object.takerID !== null ? IdentityID.fromPartial(object.takerID) : undefined;
    message.makerOwnableID = object.makerOwnableID !== undefined && object.makerOwnableID !== null ? AnyOwnableID.fromPartial(object.makerOwnableID) : undefined;
    message.takerOwnableID = object.takerOwnableID !== undefined && object.takerOwnableID !== null ? AnyOwnableID.fromPartial(object.takerOwnableID) : undefined;
    message.expiresOn = object.expiresOn !== undefined && object.expiresOn !== null ? Height.fromPartial(object.expiresOn) : undefined;
    message.makerOwnableSplit = object.makerOwnableSplit ?? "";
    message.takerOwnableSplit = object.takerOwnableSplit ?? "";
    message.immutableMetaProperties = object.immutableMetaProperties !== undefined && object.immutableMetaProperties !== null ? PropertyList.fromPartial(object.immutableMetaProperties) : undefined;
    message.immutableProperties = object.immutableProperties !== undefined && object.immutableProperties !== null ? PropertyList.fromPartial(object.immutableProperties) : undefined;
    message.mutableMetaProperties = object.mutableMetaProperties !== undefined && object.mutableMetaProperties !== null ? PropertyList.fromPartial(object.mutableMetaProperties) : undefined;
    message.mutableProperties = object.mutableProperties !== undefined && object.mutableProperties !== null ? PropertyList.fromPartial(object.mutableProperties) : undefined;
    return message;
  }

};