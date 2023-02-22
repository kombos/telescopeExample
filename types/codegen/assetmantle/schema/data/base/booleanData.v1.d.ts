import * as _m0 from "protobufjs/minimal";
export interface BooleanData {
    value: boolean;
}
export interface BooleanDataSDKType {
    value: boolean;
}
export declare const BooleanData: {
    encode(message: BooleanData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BooleanData;
    fromJSON(object: any): BooleanData;
    toJSON(message: BooleanData): unknown;
    fromPartial(object: Partial<BooleanData>): BooleanData;
};
