import { AnyData, AnyDataSDKType } from "../../../../../schema/data/base/anyData.v1";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    data?: AnyData;
}
export interface MessageSDKType {
    from: string;
    data?: AnyDataSDKType;
}
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: Partial<Message>): Message;
};
