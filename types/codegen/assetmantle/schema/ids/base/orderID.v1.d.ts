import { HashID, HashIDSDKType } from "./hashID.v1";
import * as _m0 from "protobufjs/minimal";
export interface OrderID {
    hashID?: HashID;
}
export interface OrderIDSDKType {
    hash_i_d?: HashIDSDKType;
}
export declare const OrderID: {
    encode(message: OrderID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderID;
    fromJSON(object: any): OrderID;
    toJSON(message: OrderID): unknown;
    fromPartial(object: Partial<OrderID>): OrderID;
};
