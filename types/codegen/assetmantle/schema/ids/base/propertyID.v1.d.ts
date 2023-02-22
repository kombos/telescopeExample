import { StringID, StringIDSDKType } from "./stringID.v1";
import * as _m0 from "protobufjs/minimal";
export interface PropertyID {
    keyID?: StringID;
    typeID?: StringID;
}
export interface PropertyIDSDKType {
    key_i_d?: StringIDSDKType;
    type_i_d?: StringIDSDKType;
}
export declare const PropertyID: {
    encode(message: PropertyID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PropertyID;
    fromJSON(object: any): PropertyID;
    toJSON(message: PropertyID): unknown;
    fromPartial(object: Partial<PropertyID>): PropertyID;
};
