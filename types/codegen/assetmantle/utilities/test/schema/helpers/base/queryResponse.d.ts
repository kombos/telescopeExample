import * as _m0 from "protobufjs/minimal";
export interface TestQueryResponse {
    success: boolean;
    error: string;
}
export interface TestQueryResponseSDKType {
    success: boolean;
    error: string;
}
export declare const TestQueryResponse: {
    encode(message: TestQueryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TestQueryResponse;
    fromJSON(object: any): TestQueryResponse;
    toJSON(message: TestQueryResponse): unknown;
    fromPartial(object: Partial<TestQueryResponse>): TestQueryResponse;
};
