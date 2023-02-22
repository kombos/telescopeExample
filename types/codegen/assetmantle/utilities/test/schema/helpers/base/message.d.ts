import * as _m0 from "protobufjs/minimal";
export interface TestMessage {
    from: Uint8Array;
    iD: string;
}
export interface TestMessageSDKType {
    from: Uint8Array;
    i_d: string;
}
export declare const TestMessage: {
    encode(message: TestMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TestMessage;
    fromJSON(object: any): TestMessage;
    toJSON(message: TestMessage): unknown;
    fromPartial(object: Partial<TestMessage>): TestMessage;
};
