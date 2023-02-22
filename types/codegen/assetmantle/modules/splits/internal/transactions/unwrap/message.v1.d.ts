import { IdentityID, IdentityIDSDKType } from "../../../../../schema/ids/base/identityID.v1";
import { AnyOwnableID, AnyOwnableIDSDKType } from "../../../../../schema/ids/base/anyOwnableID.v1";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    fromID?: IdentityID;
    ownableID?: AnyOwnableID;
    value: string;
}
export interface MessageSDKType {
    from: string;
    from_i_d?: IdentityIDSDKType;
    ownable_i_d?: AnyOwnableIDSDKType;
    value: string;
}
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: Partial<Message>): Message;
};
