import { IdentityID, IdentityIDSDKType } from "../../../../base/ids/internal/identityID.v1";
import { ClassificationID, ClassificationIDSDKType } from "../../../../base/ids/internal/classificationID.v1";
import { PropertyList, PropertyListSDKType } from "../../../../base/lists/internal/propertyList.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../helpers";
export interface Message {
  from: string;
  fromID?: IdentityID;
  toID?: IdentityID;
  classificationID?: ClassificationID;
  maintainedProperties?: PropertyList;
  canMintAsset: boolean;
  canBurnAsset: boolean;
  canRenumerateAsset: boolean;
  canAddMaintainer: boolean;
  canRemoveMaintainer: boolean;
  canMutateMaintainer: boolean;
}
export interface MessageSDKType {
  from: string;
  from_i_d?: IdentityIDSDKType;
  to_i_d?: IdentityIDSDKType;
  classification_i_d?: ClassificationIDSDKType;
  maintained_properties?: PropertyListSDKType;
  can_mint_asset: boolean;
  can_burn_asset: boolean;
  can_renumerate_asset: boolean;
  can_add_maintainer: boolean;
  can_remove_maintainer: boolean;
  can_mutate_maintainer: boolean;
}

function createBaseMessage(): Message {
  return {
    from: "",
    fromID: undefined,
    toID: undefined,
    classificationID: undefined,
    maintainedProperties: undefined,
    canMintAsset: false,
    canBurnAsset: false,
    canRenumerateAsset: false,
    canAddMaintainer: false,
    canRemoveMaintainer: false,
    canMutateMaintainer: false
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

    if (message.classificationID !== undefined) {
      ClassificationID.encode(message.classificationID, writer.uint32(34).fork()).ldelim();
    }

    if (message.maintainedProperties !== undefined) {
      PropertyList.encode(message.maintainedProperties, writer.uint32(42).fork()).ldelim();
    }

    if (message.canMintAsset === true) {
      writer.uint32(48).bool(message.canMintAsset);
    }

    if (message.canBurnAsset === true) {
      writer.uint32(56).bool(message.canBurnAsset);
    }

    if (message.canRenumerateAsset === true) {
      writer.uint32(64).bool(message.canRenumerateAsset);
    }

    if (message.canAddMaintainer === true) {
      writer.uint32(72).bool(message.canAddMaintainer);
    }

    if (message.canRemoveMaintainer === true) {
      writer.uint32(80).bool(message.canRemoveMaintainer);
    }

    if (message.canMutateMaintainer === true) {
      writer.uint32(88).bool(message.canMutateMaintainer);
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
          message.classificationID = ClassificationID.decode(reader, reader.uint32());
          break;

        case 5:
          message.maintainedProperties = PropertyList.decode(reader, reader.uint32());
          break;

        case 6:
          message.canMintAsset = reader.bool();
          break;

        case 7:
          message.canBurnAsset = reader.bool();
          break;

        case 8:
          message.canRenumerateAsset = reader.bool();
          break;

        case 9:
          message.canAddMaintainer = reader.bool();
          break;

        case 10:
          message.canRemoveMaintainer = reader.bool();
          break;

        case 11:
          message.canMutateMaintainer = reader.bool();
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
      classificationID: isSet(object.classificationID) ? ClassificationID.fromJSON(object.classificationID) : undefined,
      maintainedProperties: isSet(object.maintainedProperties) ? PropertyList.fromJSON(object.maintainedProperties) : undefined,
      canMintAsset: isSet(object.canMintAsset) ? Boolean(object.canMintAsset) : false,
      canBurnAsset: isSet(object.canBurnAsset) ? Boolean(object.canBurnAsset) : false,
      canRenumerateAsset: isSet(object.canRenumerateAsset) ? Boolean(object.canRenumerateAsset) : false,
      canAddMaintainer: isSet(object.canAddMaintainer) ? Boolean(object.canAddMaintainer) : false,
      canRemoveMaintainer: isSet(object.canRemoveMaintainer) ? Boolean(object.canRemoveMaintainer) : false,
      canMutateMaintainer: isSet(object.canMutateMaintainer) ? Boolean(object.canMutateMaintainer) : false
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.fromID !== undefined && (obj.fromID = message.fromID ? IdentityID.toJSON(message.fromID) : undefined);
    message.toID !== undefined && (obj.toID = message.toID ? IdentityID.toJSON(message.toID) : undefined);
    message.classificationID !== undefined && (obj.classificationID = message.classificationID ? ClassificationID.toJSON(message.classificationID) : undefined);
    message.maintainedProperties !== undefined && (obj.maintainedProperties = message.maintainedProperties ? PropertyList.toJSON(message.maintainedProperties) : undefined);
    message.canMintAsset !== undefined && (obj.canMintAsset = message.canMintAsset);
    message.canBurnAsset !== undefined && (obj.canBurnAsset = message.canBurnAsset);
    message.canRenumerateAsset !== undefined && (obj.canRenumerateAsset = message.canRenumerateAsset);
    message.canAddMaintainer !== undefined && (obj.canAddMaintainer = message.canAddMaintainer);
    message.canRemoveMaintainer !== undefined && (obj.canRemoveMaintainer = message.canRemoveMaintainer);
    message.canMutateMaintainer !== undefined && (obj.canMutateMaintainer = message.canMutateMaintainer);
    return obj;
  },

  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.from = object.from ?? "";
    message.fromID = object.fromID !== undefined && object.fromID !== null ? IdentityID.fromPartial(object.fromID) : undefined;
    message.toID = object.toID !== undefined && object.toID !== null ? IdentityID.fromPartial(object.toID) : undefined;
    message.classificationID = object.classificationID !== undefined && object.classificationID !== null ? ClassificationID.fromPartial(object.classificationID) : undefined;
    message.maintainedProperties = object.maintainedProperties !== undefined && object.maintainedProperties !== null ? PropertyList.fromPartial(object.maintainedProperties) : undefined;
    message.canMintAsset = object.canMintAsset ?? false;
    message.canBurnAsset = object.canBurnAsset ?? false;
    message.canRenumerateAsset = object.canRenumerateAsset ?? false;
    message.canAddMaintainer = object.canAddMaintainer ?? false;
    message.canRemoveMaintainer = object.canRemoveMaintainer ?? false;
    message.canMutateMaintainer = object.canMutateMaintainer ?? false;
    return message;
  }

};