import * as _19 from "../assetmantle/modules/splits/internal/genesis/genesis.v1";
import * as _20 from "../assetmantle/modules/splits/internal/key/key.v1";
import * as _21 from "../assetmantle/modules/splits/internal/mappable/mappable.v1";
export declare const splits: {
    Mappable: {
        encode(message: _21.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Mappable;
        fromJSON(object: any): _21.Mappable;
        toJSON(message: _21.Mappable): unknown;
        fromPartial(object: Partial<_21.Mappable>): _21.Mappable;
    };
    Key: {
        encode(message: _20.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Key;
        fromJSON(object: any): _20.Key;
        toJSON(message: _20.Key): unknown;
        fromPartial(object: Partial<_20.Key>): _20.Key;
    };
    Genesis: {
        encode(message: _19.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Genesis;
        fromJSON(object: any): _19.Genesis;
        toJSON(message: _19.Genesis): unknown;
        fromPartial(object: Partial<_19.Genesis>): _19.Genesis;
    };
};
