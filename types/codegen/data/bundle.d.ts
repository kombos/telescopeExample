import * as _22 from "../assetmantle/schema/data/base/accAddressData.v1";
import * as _23 from "../assetmantle/schema/data/base/anyData.v1";
import * as _24 from "../assetmantle/schema/data/base/booleanData.v1";
import * as _25 from "../assetmantle/schema/data/base/decData.v1";
import * as _26 from "../assetmantle/schema/data/base/heightData.v1";
import * as _27 from "../assetmantle/schema/data/base/idData.v1";
import * as _28 from "../assetmantle/schema/data/base/numberData.v1";
import * as _29 from "../assetmantle/schema/data/base/stringData.v1";
export declare const data: {
    StringData: {
        encode(message: _29.StringData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.StringData;
        fromJSON(object: any): _29.StringData;
        toJSON(message: _29.StringData): unknown;
        fromPartial(object: Partial<_29.StringData>): _29.StringData;
    };
    NumberData: {
        encode(message: _28.NumberData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.NumberData;
        fromJSON(object: any): _28.NumberData;
        toJSON(message: _28.NumberData): unknown;
        fromPartial(object: Partial<_28.NumberData>): _28.NumberData;
    };
    IDData: {
        encode(message: _27.IDData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.IDData;
        fromJSON(object: any): _27.IDData;
        toJSON(message: _27.IDData): unknown;
        fromPartial(object: Partial<_27.IDData>): _27.IDData;
    };
    HeightData: {
        encode(message: _26.HeightData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.HeightData;
        fromJSON(object: any): _26.HeightData;
        toJSON(message: _26.HeightData): unknown;
        fromPartial(object: Partial<_26.HeightData>): _26.HeightData;
    };
    DecData: {
        encode(message: _25.DecData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DecData;
        fromJSON(object: any): _25.DecData;
        toJSON(message: _25.DecData): unknown;
        fromPartial(object: Partial<_25.DecData>): _25.DecData;
    };
    BooleanData: {
        encode(message: _24.BooleanData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.BooleanData;
        fromJSON(object: any): _24.BooleanData;
        toJSON(message: _24.BooleanData): unknown;
        fromPartial(object: Partial<_24.BooleanData>): _24.BooleanData;
    };
    AnyData: {
        encode(message: _23.AnyData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.AnyData;
        fromJSON(object: any): _23.AnyData;
        toJSON(message: _23.AnyData): unknown;
        fromPartial(object: Partial<_23.AnyData>): _23.AnyData;
    };
    ListData: {
        encode(message: _23.ListData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ListData;
        fromJSON(object: any): _23.ListData;
        toJSON(message: _23.ListData): unknown;
        fromPartial(object: Partial<_23.ListData>): _23.ListData;
    };
    AccAddressData: {
        encode(message: _22.AccAddressData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.AccAddressData;
        fromJSON(object: any): _22.AccAddressData;
        toJSON(message: _22.AccAddressData): unknown;
        fromPartial(object: Partial<_22.AccAddressData>): _22.AccAddressData;
    };
};
