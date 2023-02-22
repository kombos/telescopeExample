import * as _52 from "../assetmantle/schema/types/base/height.v1";
import * as _53 from "../assetmantle/schema/types/base/split.v1";
export declare const types: {
    Split: {
        encode(message: _53.Split, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Split;
        fromJSON(object: any): _53.Split;
        toJSON(message: _53.Split): unknown;
        fromPartial(object: Partial<_53.Split>): _53.Split;
    };
    Height: {
        encode(message: _52.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Height;
        fromJSON(object: any): _52.Height;
        toJSON(message: _52.Height): unknown;
        fromPartial(object: Partial<_52.Height>): _52.Height;
    };
};
