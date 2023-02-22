import * as _7 from "../assetmantle/modules/identities/internal/genesis/genesis.v1";
import * as _8 from "../assetmantle/modules/identities/internal/key/key.v1";
import * as _9 from "../assetmantle/modules/identities/internal/mappable/mappable.v1";
export declare const identities: {
    Mappable: {
        encode(message: _9.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Mappable;
        fromJSON(object: any): _9.Mappable;
        toJSON(message: _9.Mappable): unknown;
        fromPartial(object: Partial<_9.Mappable>): _9.Mappable;
    };
    Key: {
        encode(message: _8.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Key;
        fromJSON(object: any): _8.Key;
        toJSON(message: _8.Key): unknown;
        fromPartial(object: Partial<_8.Key>): _8.Key;
    };
    Genesis: {
        encode(message: _7.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Genesis;
        fromJSON(object: any): _7.Genesis;
        toJSON(message: _7.Genesis): unknown;
        fromPartial(object: Partial<_7.Genesis>): _7.Genesis;
    };
};
