import { IdentityID, IdentityIDSDKType } from "../../../../../schema/ids/base/identityID.v1";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    to: string;
    identityID?: IdentityID;
}
export interface MessageSDKType {
    from: string;
    to: string;
    identity_i_d?: IdentityIDSDKType;
}
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: Partial<Message>): Message;
};
