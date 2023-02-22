import * as _m0 from "protobufjs/minimal";
export interface HashID {
    iDBytes: Uint8Array;
}
export interface HashIDSDKType {
    i_d_bytes: Uint8Array;
}
export declare const HashID: {
    encode(message: HashID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HashID;
    fromJSON(object: any): HashID;
    toJSON(message: HashID): unknown;
    fromPartial(object: Partial<HashID>): HashID;
};
