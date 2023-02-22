import { HashID, HashIDSDKType } from "./hashID.v1";
import * as _m0 from "protobufjs/minimal";
export interface AssetID {
    hashID?: HashID;
}
export interface AssetIDSDKType {
    hash_i_d?: HashIDSDKType;
}
export declare const AssetID: {
    encode(message: AssetID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetID;
    fromJSON(object: any): AssetID;
    toJSON(message: AssetID): unknown;
    fromPartial(object: Partial<AssetID>): AssetID;
};
