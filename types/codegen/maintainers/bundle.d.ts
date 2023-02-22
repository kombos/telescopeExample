import * as _10 from "../assetmantle/modules/maintainers/internal/genesis/genesis.v1";
import * as _11 from "../assetmantle/modules/maintainers/internal/key/key.v1";
import * as _12 from "../assetmantle/modules/maintainers/internal/mappable/mappable.v1";
export declare const maintainers: {
    Mappable: {
        encode(message: _12.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Mappable;
        fromJSON(object: any): _12.Mappable;
        toJSON(message: _12.Mappable): unknown;
        fromPartial(object: Partial<_12.Mappable>): _12.Mappable;
    };
    Key: {
        encode(message: _11.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Key;
        fromJSON(object: any): _11.Key;
        toJSON(message: _11.Key): unknown;
        fromPartial(object: Partial<_11.Key>): _11.Key;
    };
    Genesis: {
        encode(message: _10.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Genesis;
        fromJSON(object: any): _10.Genesis;
        toJSON(message: _10.Genesis): unknown;
        fromPartial(object: Partial<_10.Genesis>): _10.Genesis;
    };
};
