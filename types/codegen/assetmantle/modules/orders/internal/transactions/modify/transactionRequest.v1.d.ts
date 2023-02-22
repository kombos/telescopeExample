import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../../../helpers";
export interface TransactionRequest {
    from: string;
    fromID: string;
    orderID: string;
    takerOwnableSplit: string;
    makerOwnableSplit: string;
    expiresIn: Long;
    mutableMetaProperties: string;
    mutableProperties: string;
}
export interface TransactionRequestSDKType {
    from: string;
    from_i_d: string;
    order_i_d: string;
    taker_ownable_split: string;
    maker_ownable_split: string;
    expires_in: Long;
    mutable_meta_properties: string;
    mutable_properties: string;
}
export declare const TransactionRequest: {
    encode(message: TransactionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionRequest;
    fromJSON(object: any): TransactionRequest;
    toJSON(message: TransactionRequest): unknown;
    fromPartial(object: Partial<TransactionRequest>): TransactionRequest;
};
