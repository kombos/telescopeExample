import * as _16 from "../assetmantle/modules/orders/internal/genesis/genesis.v1";
import * as _17 from "../assetmantle/modules/orders/internal/key/key.v1";
import * as _18 from "../assetmantle/modules/orders/internal/mappable/mappable.v1";
export declare const orders: {
    Mappable: {
        encode(message: _18.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Mappable;
        fromJSON(object: any): _18.Mappable;
        toJSON(message: _18.Mappable): unknown;
        fromPartial(object: Partial<_18.Mappable>): _18.Mappable;
    };
    Key: {
        encode(message: _17.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Key;
        fromJSON(object: any): _17.Key;
        toJSON(message: _17.Key): unknown;
        fromPartial(object: Partial<_17.Key>): _17.Key;
    };
    Genesis: {
        encode(message: _16.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Genesis;
        fromJSON(object: any): _16.Genesis;
        toJSON(message: _16.Genesis): unknown;
        fromPartial(object: Partial<_16.Genesis>): _16.Genesis;
    };
};
