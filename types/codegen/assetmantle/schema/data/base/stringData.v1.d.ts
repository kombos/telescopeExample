import * as _m0 from "protobufjs/minimal";
export interface StringData {
    value: string;
}
export interface StringDataSDKType {
    value: string;
}
export declare const StringData: {
    encode(message: StringData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringData;
    fromJSON(object: any): StringData;
    toJSON(message: StringData): unknown;
    fromPartial(object: Partial<StringData>): StringData;
};
