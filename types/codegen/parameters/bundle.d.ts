import * as _46 from "../assetmantle/schema/parameters/base/parameter.v1";
export declare const parameters: {
    Parameter: {
        encode(message: _46.Parameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.Parameter;
        fromJSON(object: any): _46.Parameter;
        toJSON(message: _46.Parameter): unknown;
        fromPartial(object: Partial<_46.Parameter>): _46.Parameter;
    };
};
