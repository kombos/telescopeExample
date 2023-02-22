import { StringID, StringIDSDKType } from "../../../../../schema/ids/base/stringID.v1";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    nubID?: StringID;
}
export interface MessageSDKType {
    from: string;
    nub_i_d?: StringIDSDKType;
}
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: Partial<Message>): Message;
};
