import { AssetID, AssetIDSDKType } from "./assetID.v1";
import { ClassificationID, ClassificationIDSDKType } from "./classificationID.v1";
import { DataID, DataIDSDKType } from "./dataID.v1";
import { HashID, HashIDSDKType } from "./hashID.v1";
import { IdentityID, IdentityIDSDKType } from "./identityID.v1";
import { MaintainerID, MaintainerIDSDKType } from "./maintainerID.v1";
import { OrderID, OrderIDSDKType } from "./orderID.v1";
import { AnyOwnableID, AnyOwnableIDSDKType } from "./anyOwnableID.v1";
import { PropertyID, PropertyIDSDKType } from "./propertyID.v1";
import { SplitID, SplitIDSDKType } from "./splitID.v1";
import { StringID, StringIDSDKType } from "./stringID.v1";
import * as _m0 from "protobufjs/minimal";
export interface AnyID {
    assetID?: AssetID;
    classificationID?: ClassificationID;
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
export declare const AnyID: {
    encode(message: AnyID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AnyID;
    fromJSON(object: any): AnyID;
    toJSON(message: AnyID): unknown;
    fromPartial(object: Partial<AnyID>): AnyID;
};
