import { StringID, StringIDSDKType } from "./stringID.v1";
import { HashID, HashIDSDKType } from "./hashID.v1";
import * as _m0 from "protobufjs/minimal";
export interface DataID {
    typeID?: StringID;
    hashID?: HashID;
}
export interface DataIDSDKType {
    type_i_d?: StringIDSDKType;
    hash_i_d?: HashIDSDKType;
}
export declare const DataID: {
    encode(message: DataID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataID;
    fromJSON(object: any): DataID;
    toJSON(message: DataID): unknown;
    fromPartial(object: Partial<DataID>): DataID;
};
