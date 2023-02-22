import * as _47 from "../assetmantle/schema/properties/base/anyProperty.v1";
import * as _48 from "../assetmantle/schema/properties/base/mesaProperty.v1";
import * as _49 from "../assetmantle/schema/properties/base/metaProperty.v1";
export declare const properties: {
    MetaProperty: {
        encode(message: _49.MetaProperty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MetaProperty;
        fromJSON(object: any): _49.MetaProperty;
        toJSON(message: _49.MetaProperty): unknown;
        fromPartial(object: Partial<_49.MetaProperty>): _49.MetaProperty;
    };
    MesaProperty: {
        encode(message: _48.MesaProperty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MesaProperty;
        fromJSON(object: any): _48.MesaProperty;
        toJSON(message: _48.MesaProperty): unknown;
        fromPartial(object: Partial<_48.MesaProperty>): _48.MesaProperty;
    };
    AnyProperty: {
        encode(message: _47.AnyProperty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.AnyProperty;
        fromJSON(object: any): _47.AnyProperty;
        toJSON(message: _47.AnyProperty): unknown;
        fromPartial(object: Partial<_47.AnyProperty>): _47.AnyProperty;
    };
};
