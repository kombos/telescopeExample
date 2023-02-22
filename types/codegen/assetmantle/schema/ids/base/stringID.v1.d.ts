import * as _m0 from "protobufjs/minimal";
export interface StringID {
    iDString: string;
}
export interface StringIDSDKType {
    i_d_string: string;
}
export declare const StringID: {
    encode(message: StringID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringID;
    fromJSON(object: any): StringID;
    toJSON(message: StringID): unknown;
    fromPartial(object: Partial<StringID>): StringID;
};
