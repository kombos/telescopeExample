import { IdentityID, IdentityIDSDKType } from "./identityID.v1";
import { AnyOwnableID, AnyOwnableIDSDKType } from "./anyOwnableID.v1";
import * as _m0 from "protobufjs/minimal";
export interface SplitID {
    ownerID?: IdentityID;
    ownableID?: AnyOwnableID;
}
export interface SplitIDSDKType {
    owner_i_d?: IdentityIDSDKType;
    ownable_i_d?: AnyOwnableIDSDKType;
}
export declare const SplitID: {
    encode(message: SplitID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SplitID;
    fromJSON(object: any): SplitID;
    toJSON(message: SplitID): unknown;
    fromPartial(object: Partial<SplitID>): SplitID;
};
