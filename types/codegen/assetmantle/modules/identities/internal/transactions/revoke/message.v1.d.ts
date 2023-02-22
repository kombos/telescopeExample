import { IdentityID, IdentityIDSDKType } from "../../../../../schema/ids/base/identityID.v1";
import { ClassificationID, ClassificationIDSDKType } from "../../../../../schema/ids/base/classificationID.v1";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    fromID?: IdentityID;
    toID?: IdentityID;
    classificationID?: ClassificationID;
}
export interface MessageSDKType {
    from: string;
    from_i_d?: IdentityIDSDKType;
    to_i_d?: IdentityIDSDKType;
    classification_i_d?: ClassificationIDSDKType;
}
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: Partial<Message>): Message;
};
