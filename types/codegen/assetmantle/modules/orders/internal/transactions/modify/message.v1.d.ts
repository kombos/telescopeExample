import { IdentityID, IdentityIDSDKType } from "../../../../../schema/ids/base/identityID.v1";
import { OrderID, OrderIDSDKType } from "../../../../../schema/ids/base/orderID.v1";
import { Height, HeightSDKType } from "../../../../../schema/types/base/height.v1";
import { PropertyList, PropertyListSDKType } from "../../../../../schema/lists/base/propertyList.v1";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    fromID?: IdentityID;
    orderID?: OrderID;
    makerOwnableSplit: string;
    takerOwnableSplit: string;
    expiresIn?: Height;
    mutableMetaProperties?: PropertyList;
    mutableProperties?: PropertyList;
}
export interface MessageSDKType {
    from: string;
    from_i_d?: IdentityIDSDKType;
    order_i_d?: OrderIDSDKType;
    maker_ownable_split: string;
    taker_ownable_split: string;
    expires_in?: HeightSDKType;
    mutable_meta_properties?: PropertyListSDKType;
    mutable_properties?: PropertyListSDKType;
}
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: Partial<Message>): Message;
};
