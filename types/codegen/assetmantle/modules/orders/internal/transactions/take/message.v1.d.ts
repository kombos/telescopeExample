import { IdentityID, IdentityIDSDKType } from "../../../../../schema/ids/base/identityID.v1";
import { OrderID, OrderIDSDKType } from "../../../../../schema/ids/base/orderID.v1";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    fromID?: IdentityID;
    takerOwnableSplit: string;
    orderID?: OrderID;
}
export interface MessageSDKType {
    from: string;
    from_i_d?: IdentityIDSDKType;
    taker_ownable_split: string;
    order_i_d?: OrderIDSDKType;
}
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: Partial<Message>): Message;
};
