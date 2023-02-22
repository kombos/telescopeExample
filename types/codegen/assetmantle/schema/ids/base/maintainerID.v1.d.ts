import { HashID, HashIDSDKType } from "./hashID.v1";
import * as _m0 from "protobufjs/minimal";
export interface MaintainerID {
    hashID?: HashID;
}
export interface MaintainerIDSDKType {
    hash_i_d?: HashIDSDKType;
}
export declare const MaintainerID: {
    encode(message: MaintainerID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MaintainerID;
    fromJSON(object: any): MaintainerID;
    toJSON(message: MaintainerID): unknown;
    fromPartial(object: Partial<MaintainerID>): MaintainerID;
};
