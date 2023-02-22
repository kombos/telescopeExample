import * as _30 from "../assetmantle/schema/documents/base/document.v1";
export declare const documents: {
    Document: {
        encode(message: _30.Document, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Document;
        fromJSON(object: any): _30.Document;
        toJSON(message: _30.Document): unknown;
        fromPartial(object: Partial<_30.Document>): _30.Document;
    };
};
