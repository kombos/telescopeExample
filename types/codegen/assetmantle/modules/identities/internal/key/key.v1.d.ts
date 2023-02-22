import { IdentityID, IdentityIDSDKType } from "../../../../schema/ids/base/identityID.v1";
import * as _m0 from "protobufjs/minimal";
export interface Key {
    identityID?: IdentityID;
}
export interface KeySDKType {
    identity_i_d?: IdentityIDSDKType;
}
export declare const Key: {
    encode(message: Key, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Key;
    fromJSON(object: any): Key;
    toJSON(message: Key): unknown;
    fromPartial(object: Partial<Key>): Key;
};
