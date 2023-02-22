import * as _13 from "../assetmantle/modules/metas/internal/genesis/genesis.v1";
import * as _14 from "../assetmantle/modules/metas/internal/key/key.v1";
import * as _15 from "../assetmantle/modules/metas/internal/mappable/mappable.v1";
export declare const metas: {
    Mappable: {
        encode(message: _15.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Mappable;
        fromJSON(object: any): _15.Mappable;
        toJSON(message: _15.Mappable): unknown;
        fromPartial(object: Partial<_15.Mappable>): _15.Mappable;
    };
    Key: {
        encode(message: _14.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Key;
        fromJSON(object: any): _14.Key;
        toJSON(message: _14.Key): unknown;
        fromPartial(object: Partial<_14.Key>): _14.Key;
    };
    Genesis: {
        encode(message: _13.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Genesis;
        fromJSON(object: any): _13.Genesis;
        toJSON(message: _13.Genesis): unknown;
        fromPartial(object: Partial<_13.Genesis>): _13.Genesis;
    };
};
