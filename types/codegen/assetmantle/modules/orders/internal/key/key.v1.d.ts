import { OrderID, OrderIDSDKType } from "../../../../schema/ids/base/orderID.v1";
import * as _m0 from "protobufjs/minimal";
export interface Key {
    orderID?: OrderID;
}
export interface KeySDKType {
    order_i_d?: OrderIDSDKType;
}
export declare const Key: {
    encode(message: Key, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Key;
    fromJSON(object: any): Key;
    toJSON(message: Key): unknown;
    fromPartial(object: Partial<Key>): Key;
};
