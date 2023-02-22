import { HashID, HashIDSDKType } from "./hashID.v1";
import * as _m0 from "protobufjs/minimal";
export interface ClassificationID {
    hashID?: HashID;
}
export interface ClassificationIDSDKType {
    hash_i_d?: HashIDSDKType;
}
export declare const ClassificationID: {
    encode(message: ClassificationID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassificationID;
    fromJSON(object: any): ClassificationID;
    toJSON(message: ClassificationID): unknown;
    fromPartial(object: Partial<ClassificationID>): ClassificationID;
};
