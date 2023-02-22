import * as _m0 from "protobufjs/minimal";
export interface AccAddressData {
    value: Uint8Array;
}
export interface AccAddressDataSDKType {
    value: Uint8Array;
}
export declare const AccAddressData: {
    encode(message: AccAddressData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccAddressData;
    fromJSON(object: any): AccAddressData;
    toJSON(message: AccAddressData): unknown;
    fromPartial(object: Partial<AccAddressData>): AccAddressData;
};
