import * as _50 from "../assetmantle/schema/qualified/base/immutables.v1";
import * as _51 from "../assetmantle/schema/qualified/base/mutables.v1";
export declare const qualified: {
    Mutables: {
        encode(message: _51.Mutables, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Mutables;
        fromJSON(object: any): _51.Mutables;
        toJSON(message: _51.Mutables): unknown;
        fromPartial(object: Partial<_51.Mutables>): _51.Mutables;
    };
    Immutables: {
        encode(message: _50.Immutables, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Immutables;
        fromJSON(object: any): _50.Immutables;
        toJSON(message: _50.Immutables): unknown;
        fromPartial(object: Partial<_50.Immutables>): _50.Immutables;
    };
};
