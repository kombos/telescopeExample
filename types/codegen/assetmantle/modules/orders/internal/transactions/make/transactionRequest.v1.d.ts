import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../../../helpers";
export interface TransactionRequest {
    from: string;
    fromID: string;
    classificationID: string;
    takerID: string;
    makerOwnableID: string;
    takerOwnableID: string;
    expiresIn: Long;
    makerOwnableSplit: string;
    takerOwnableSplit: string;
    immutableMetaProperties: string;
    immutableProperties: string;
    mutableMetaProperties: string;
    mutableProperties: string;
}
export interface TransactionRequestSDKType {
    from: string;
    from_i_d: string;
    classification_i_d: string;
    taker_i_d: string;
    maker_ownable_i_d: string;
    taker_ownable_i_d: string;
    expires_in: Long;
    maker_ownable_split: string;
    taker_ownable_split: string;
    immutable_meta_properties: string;
    immutable_properties: string;
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
