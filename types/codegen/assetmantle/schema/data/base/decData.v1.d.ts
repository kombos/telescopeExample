import * as _m0 from "protobufjs/minimal";
export interface DecData {
    value: string;
}
export interface DecDataSDKType {
    value: string;
}
export declare const DecData: {
    encode(message: DecData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DecData;
    fromJSON(object: any): DecData;
    toJSON(message: DecData): unknown;
    fromPartial(object: Partial<DecData>): DecData;
};
