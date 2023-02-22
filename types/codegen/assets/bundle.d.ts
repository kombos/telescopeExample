import * as _1 from "../assetmantle/modules/assets/internal/genesis/genesis.v1";
import * as _2 from "../assetmantle/modules/assets/internal/key/key.v1";
import * as _3 from "../assetmantle/modules/assets/internal/mappable/mappable.v1";
export declare const assets: {
    Mappable: {
        encode(message: _3.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Mappable;
        fromJSON(object: any): _3.Mappable;
        toJSON(message: _3.Mappable): unknown;
        fromPartial(object: Partial<_3.Mappable>): _3.Mappable;
    };
    Key: {
        encode(message: _2.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Key;
        fromJSON(object: any): _2.Key;
        toJSON(message: _2.Key): unknown;
        fromPartial(object: Partial<_2.Key>): _2.Key;
    };
    Genesis: {
        encode(message: _1.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.Genesis;
        fromJSON(object: any): _1.Genesis;
        toJSON(message: _1.Genesis): unknown;
        fromPartial(object: Partial<_1.Genesis>): _1.Genesis;
    };
};
