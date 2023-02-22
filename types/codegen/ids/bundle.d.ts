import * as _31 from "../assetmantle/schema/ids/base/anyID.v1";
import * as _32 from "../assetmantle/schema/ids/base/anyOwnableID.v1";
import * as _33 from "../assetmantle/schema/ids/base/assetID.v1";
import * as _34 from "../assetmantle/schema/ids/base/classificationID.v1";
import * as _35 from "../assetmantle/schema/ids/base/coinID.v1";
import * as _36 from "../assetmantle/schema/ids/base/dataID.v1";
import * as _37 from "../assetmantle/schema/ids/base/hashID.v1";
import * as _38 from "../assetmantle/schema/ids/base/identityID.v1";
import * as _39 from "../assetmantle/schema/ids/base/maintainerID.v1";
import * as _40 from "../assetmantle/schema/ids/base/orderID.v1";
import * as _41 from "../assetmantle/schema/ids/base/propertyID.v1";
import * as _42 from "../assetmantle/schema/ids/base/splitID.v1";
import * as _43 from "../assetmantle/schema/ids/base/stringID.v1";
export declare const ids: {
    StringID: {
        encode(message: _43.StringID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.StringID;
        fromJSON(object: any): _43.StringID;
        toJSON(message: _43.StringID): unknown;
        fromPartial(object: Partial<_43.StringID>): _43.StringID;
    };
    SplitID: {
        encode(message: _42.SplitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.SplitID;
        fromJSON(object: any): _42.SplitID;
        toJSON(message: _42.SplitID): unknown;
        fromPartial(object: Partial<_42.SplitID>): _42.SplitID;
    };
    PropertyID: {
        encode(message: _41.PropertyID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.PropertyID;
        fromJSON(object: any): _41.PropertyID;
        toJSON(message: _41.PropertyID): unknown;
        fromPartial(object: Partial<_41.PropertyID>): _41.PropertyID;
    };
    OrderID: {
        encode(message: _40.OrderID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.OrderID;
        fromJSON(object: any): _40.OrderID;
        toJSON(message: _40.OrderID): unknown;
        fromPartial(object: Partial<_40.OrderID>): _40.OrderID;
    };
    MaintainerID: {
        encode(message: _39.MaintainerID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.MaintainerID;
        fromJSON(object: any): _39.MaintainerID;
        toJSON(message: _39.MaintainerID): unknown;
        fromPartial(object: Partial<_39.MaintainerID>): _39.MaintainerID;
    };
    IdentityID: {
        encode(message: _38.IdentityID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.IdentityID;
        fromJSON(object: any): _38.IdentityID;
        toJSON(message: _38.IdentityID): unknown;
        fromPartial(object: Partial<_38.IdentityID>): _38.IdentityID;
    };
    HashID: {
        encode(message: _37.HashID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.HashID;
        fromJSON(object: any): _37.HashID;
        toJSON(message: _37.HashID): unknown;
        fromPartial(object: Partial<_37.HashID>): _37.HashID;
    };
    DataID: {
        encode(message: _36.DataID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DataID;
        fromJSON(object: any): _36.DataID;
        toJSON(message: _36.DataID): unknown;
        fromPartial(object: Partial<_36.DataID>): _36.DataID;
    };
    CoinID: {
        encode(message: _35.CoinID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.CoinID;
        fromJSON(object: any): _35.CoinID;
        toJSON(message: _35.CoinID): unknown;
        fromPartial(object: Partial<_35.CoinID>): _35.CoinID;
    };
    ClassificationID: {
        encode(message: _34.ClassificationID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.ClassificationID;
        fromJSON(object: any): _34.ClassificationID;
        toJSON(message: _34.ClassificationID): unknown;
        fromPartial(object: Partial<_34.ClassificationID>): _34.ClassificationID;
    };
    AssetID: {
        encode(message: _33.AssetID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.AssetID;
        fromJSON(object: any): _33.AssetID;
        toJSON(message: _33.AssetID): unknown;
        fromPartial(object: Partial<_33.AssetID>): _33.AssetID;
    };
    AnyOwnableID: {
        encode(message: _32.AnyOwnableID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.AnyOwnableID;
        fromJSON(object: any): _32.AnyOwnableID;
        toJSON(message: _32.AnyOwnableID): unknown;
        fromPartial(object: Partial<_32.AnyOwnableID>): _32.AnyOwnableID;
    };
    AnyID: {
        encode(message: _31.AnyID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.AnyID;
        fromJSON(object: any): _31.AnyID;
        toJSON(message: _31.AnyID): unknown;
        fromPartial(object: Partial<_31.AnyID>): _31.AnyID;
    };
};
