import * as _m0 from "protobufjs/minimal";
export interface TestMappable {
    iD: string;
    value: string;
}
export interface TestMappableSDKType {
    i_d: string;
    value: string;
}
export declare const TestMappable: {
    encode(message: TestMappable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TestMappable;
    fromJSON(object: any): TestMappable;
    toJSON(message: TestMappable): unknown;
    fromPartial(object: Partial<TestMappable>): TestMappable;
};
