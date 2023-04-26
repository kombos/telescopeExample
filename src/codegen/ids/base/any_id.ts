import { AssetID, AssetIDSDKType } from "./asset_id";
import { ClassificationID, ClassificationIDSDKType } from "./classification_id";
import { CoinID, CoinIDSDKType } from "./coin_id";
import { DataID, DataIDSDKType } from "./data_id";
import { HashID, HashIDSDKType } from "./hash_id";
import { IdentityID, IdentityIDSDKType } from "./identity_id";
import { MaintainerID, MaintainerIDSDKType } from "./maintainer_id";
import { OrderID, OrderIDSDKType } from "./order_id";
import { AnyOwnableID, AnyOwnableIDSDKType } from "./any_ownable_id";
import { PropertyID, PropertyIDSDKType } from "./property_id";
import { SplitID, SplitIDSDKType } from "./split_id";
import { StringID, StringIDSDKType } from "./string_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface AnyID {
  assetID?: AssetID;
  classificationID?: ClassificationID;
  coinID?: CoinID;
  dataID?: DataID;
  hashID?: HashID;
  identityID?: IdentityID;
  maintainerID?: MaintainerID;
  orderID?: OrderID;
  ownableID?: AnyOwnableID;
  propertyID?: PropertyID;
  splitID?: SplitID;
  stringID?: StringID;
}
export interface AnyIDSDKType {
  asset_i_d?: AssetIDSDKType;
  classification_i_d?: ClassificationIDSDKType;
  coin_i_d?: CoinIDSDKType;
  data_i_d?: DataIDSDKType;
  hash_i_d?: HashIDSDKType;
  identity_i_d?: IdentityIDSDKType;
  maintainer_i_d?: MaintainerIDSDKType;
  order_i_d?: OrderIDSDKType;
  ownable_i_d?: AnyOwnableIDSDKType;
  property_i_d?: PropertyIDSDKType;
  split_i_d?: SplitIDSDKType;
  string_i_d?: StringIDSDKType;
}
function createBaseAnyID(): AnyID {
  return {
    assetID: undefined,
    classificationID: undefined,
    coinID: undefined,
    dataID: undefined,
    hashID: undefined,
    identityID: undefined,
    maintainerID: undefined,
    orderID: undefined,
    ownableID: undefined,
    propertyID: undefined,
    splitID: undefined,
    stringID: undefined
  };
}
export const AnyID = {
  encode(message: AnyID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetID !== undefined) {
      AssetID.encode(message.assetID, writer.uint32(10).fork()).ldelim();
    }
    if (message.classificationID !== undefined) {
      ClassificationID.encode(message.classificationID, writer.uint32(18).fork()).ldelim();
    }
    if (message.coinID !== undefined) {
      CoinID.encode(message.coinID, writer.uint32(26).fork()).ldelim();
    }
    if (message.dataID !== undefined) {
      DataID.encode(message.dataID, writer.uint32(34).fork()).ldelim();
    }
    if (message.hashID !== undefined) {
      HashID.encode(message.hashID, writer.uint32(42).fork()).ldelim();
    }
    if (message.identityID !== undefined) {
      IdentityID.encode(message.identityID, writer.uint32(50).fork()).ldelim();
    }
    if (message.maintainerID !== undefined) {
      MaintainerID.encode(message.maintainerID, writer.uint32(58).fork()).ldelim();
    }
    if (message.orderID !== undefined) {
      OrderID.encode(message.orderID, writer.uint32(66).fork()).ldelim();
    }
    if (message.ownableID !== undefined) {
      AnyOwnableID.encode(message.ownableID, writer.uint32(74).fork()).ldelim();
    }
    if (message.propertyID !== undefined) {
      PropertyID.encode(message.propertyID, writer.uint32(82).fork()).ldelim();
    }
    if (message.splitID !== undefined) {
      SplitID.encode(message.splitID, writer.uint32(90).fork()).ldelim();
    }
    if (message.stringID !== undefined) {
      StringID.encode(message.stringID, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AnyID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnyID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetID = AssetID.decode(reader, reader.uint32());
          break;
        case 2:
          message.classificationID = ClassificationID.decode(reader, reader.uint32());
          break;
        case 3:
          message.coinID = CoinID.decode(reader, reader.uint32());
          break;
        case 4:
          message.dataID = DataID.decode(reader, reader.uint32());
          break;
        case 5:
          message.hashID = HashID.decode(reader, reader.uint32());
          break;
        case 6:
          message.identityID = IdentityID.decode(reader, reader.uint32());
          break;
        case 7:
          message.maintainerID = MaintainerID.decode(reader, reader.uint32());
          break;
        case 8:
          message.orderID = OrderID.decode(reader, reader.uint32());
          break;
        case 9:
          message.ownableID = AnyOwnableID.decode(reader, reader.uint32());
          break;
        case 10:
          message.propertyID = PropertyID.decode(reader, reader.uint32());
          break;
        case 11:
          message.splitID = SplitID.decode(reader, reader.uint32());
          break;
        case 12:
          message.stringID = StringID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AnyID {
    return {
      assetID: isSet(object.assetID) ? AssetID.fromJSON(object.assetID) : undefined,
      classificationID: isSet(object.classificationID) ? ClassificationID.fromJSON(object.classificationID) : undefined,
      coinID: isSet(object.coinID) ? CoinID.fromJSON(object.coinID) : undefined,
      dataID: isSet(object.dataID) ? DataID.fromJSON(object.dataID) : undefined,
      hashID: isSet(object.hashID) ? HashID.fromJSON(object.hashID) : undefined,
      identityID: isSet(object.identityID) ? IdentityID.fromJSON(object.identityID) : undefined,
      maintainerID: isSet(object.maintainerID) ? MaintainerID.fromJSON(object.maintainerID) : undefined,
      orderID: isSet(object.orderID) ? OrderID.fromJSON(object.orderID) : undefined,
      ownableID: isSet(object.ownableID) ? AnyOwnableID.fromJSON(object.ownableID) : undefined,
      propertyID: isSet(object.propertyID) ? PropertyID.fromJSON(object.propertyID) : undefined,
      splitID: isSet(object.splitID) ? SplitID.fromJSON(object.splitID) : undefined,
      stringID: isSet(object.stringID) ? StringID.fromJSON(object.stringID) : undefined
    };
  },
  toJSON(message: AnyID): unknown {
    const obj: any = {};
    message.assetID !== undefined && (obj.assetID = message.assetID ? AssetID.toJSON(message.assetID) : undefined);
    message.classificationID !== undefined && (obj.classificationID = message.classificationID ? ClassificationID.toJSON(message.classificationID) : undefined);
    message.coinID !== undefined && (obj.coinID = message.coinID ? CoinID.toJSON(message.coinID) : undefined);
    message.dataID !== undefined && (obj.dataID = message.dataID ? DataID.toJSON(message.dataID) : undefined);
    message.hashID !== undefined && (obj.hashID = message.hashID ? HashID.toJSON(message.hashID) : undefined);
    message.identityID !== undefined && (obj.identityID = message.identityID ? IdentityID.toJSON(message.identityID) : undefined);
    message.maintainerID !== undefined && (obj.maintainerID = message.maintainerID ? MaintainerID.toJSON(message.maintainerID) : undefined);
    message.orderID !== undefined && (obj.orderID = message.orderID ? OrderID.toJSON(message.orderID) : undefined);
    message.ownableID !== undefined && (obj.ownableID = message.ownableID ? AnyOwnableID.toJSON(message.ownableID) : undefined);
    message.propertyID !== undefined && (obj.propertyID = message.propertyID ? PropertyID.toJSON(message.propertyID) : undefined);
    message.splitID !== undefined && (obj.splitID = message.splitID ? SplitID.toJSON(message.splitID) : undefined);
    message.stringID !== undefined && (obj.stringID = message.stringID ? StringID.toJSON(message.stringID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<AnyID>): AnyID {
    const message = createBaseAnyID();
    message.assetID = object.assetID !== undefined && object.assetID !== null ? AssetID.fromPartial(object.assetID) : undefined;
    message.classificationID = object.classificationID !== undefined && object.classificationID !== null ? ClassificationID.fromPartial(object.classificationID) : undefined;
    message.coinID = object.coinID !== undefined && object.coinID !== null ? CoinID.fromPartial(object.coinID) : undefined;
    message.dataID = object.dataID !== undefined && object.dataID !== null ? DataID.fromPartial(object.dataID) : undefined;
    message.hashID = object.hashID !== undefined && object.hashID !== null ? HashID.fromPartial(object.hashID) : undefined;
    message.identityID = object.identityID !== undefined && object.identityID !== null ? IdentityID.fromPartial(object.identityID) : undefined;
    message.maintainerID = object.maintainerID !== undefined && object.maintainerID !== null ? MaintainerID.fromPartial(object.maintainerID) : undefined;
    message.orderID = object.orderID !== undefined && object.orderID !== null ? OrderID.fromPartial(object.orderID) : undefined;
    message.ownableID = object.ownableID !== undefined && object.ownableID !== null ? AnyOwnableID.fromPartial(object.ownableID) : undefined;
    message.propertyID = object.propertyID !== undefined && object.propertyID !== null ? PropertyID.fromPartial(object.propertyID) : undefined;
    message.splitID = object.splitID !== undefined && object.splitID !== null ? SplitID.fromPartial(object.splitID) : undefined;
    message.stringID = object.stringID !== undefined && object.stringID !== null ? StringID.fromPartial(object.stringID) : undefined;
    return message;
  }
};