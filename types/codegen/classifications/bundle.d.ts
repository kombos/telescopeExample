import * as _4 from "../assetmantle/modules/classifications/internal/genesis/genesis.v1";
import * as _5 from "../assetmantle/modules/classifications/internal/key/key.v1";
import * as _6 from "../assetmantle/modules/classifications/internal/mappable/mappable.v1";
export declare const classifications: {
    Mappable: {
        encode(message: _6.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.Mappable;
        fromJSON(object: any): _6.Mappable;
        toJSON(message: _6.Mappable): unknown;
        fromPartial(object: Partial<_6.Mappable>): _6.Mappable;
    };
    Key: {
        encode(message: _5.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Key;
        fromJSON(object: any): _5.Key;
        toJSON(message: _5.Key): unknown;
        fromPartial(object: Partial<_5.Key>): _5.Key;
    };
    Genesis: {
        encode(message: _4.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Genesis;
        fromJSON(object: any): _4.Genesis;
        toJSON(message: _4.Genesis): unknown;
        fromPartial(object: Partial<_4.Genesis>): _4.Genesis;
    };
};
