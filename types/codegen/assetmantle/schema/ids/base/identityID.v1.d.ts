import { HashID, HashIDSDKType } from "./hashID.v1";
import * as _m0 from "protobufjs/minimal";
export interface IdentityID {
    hashID?: HashID;
}
export interface IdentityIDSDKType {
    hash_i_d?: HashIDSDKType;
}
export declare const IdentityID: {
    encode(message: IdentityID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdentityID;
    fromJSON(object: any): IdentityID;
    toJSON(message: IdentityID): unknown;
    fromPartial(object: Partial<IdentityID>): IdentityID;
};
