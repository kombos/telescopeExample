import * as _54 from "../assetmantle/utilities/test/schema/helpers/base/mappable";
import * as _55 from "../assetmantle/utilities/test/schema/helpers/base/message";
import * as _56 from "../assetmantle/utilities/test/schema/helpers/base/queryResponse";
export declare const test: {
    TestQueryResponse: {
        encode(message: _56.TestQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.TestQueryResponse;
        fromJSON(object: any): _56.TestQueryResponse;
        toJSON(message: _56.TestQueryResponse): unknown;
        fromPartial(object: Partial<_56.TestQueryResponse>): _56.TestQueryResponse;
    };
    TestMessage: {
        encode(message: _55.TestMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.TestMessage;
        fromJSON(object: any): _55.TestMessage;
        toJSON(message: _55.TestMessage): unknown;
        fromPartial(object: Partial<_55.TestMessage>): _55.TestMessage;
    };
    TestMappable: {
        encode(message: _54.TestMappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.TestMappable;
        fromJSON(object: any): _54.TestMappable;
        toJSON(message: _54.TestMappable): unknown;
        fromPartial(object: Partial<_54.TestMappable>): _54.TestMappable;
    };
};
