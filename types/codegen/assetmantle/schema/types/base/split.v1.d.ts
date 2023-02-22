import { IdentityID, IdentityIDSDKType } from "../../ids/base/identityID.v1";
import { AnyOwnableID, AnyOwnableIDSDKType } from "../../ids/base/anyOwnableID.v1";
import * as _m0 from "protobufjs/minimal";
export interface Split {
    ownerID?: IdentityID;
    ownableID?: AnyOwnableID;
    value: string;
}
export interface SplitSDKType {
    owner_i_d?: IdentityIDSDKType;
    ownable_i_d?: AnyOwnableIDSDKType;
    value: string;
}
export declare const Split: {
    encode(message: Split, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Split;
    fromJSON(object: any): Split;
    toJSON(message: Split): unknown;
    fromPartial(object: Partial<Split>): Split;
};
