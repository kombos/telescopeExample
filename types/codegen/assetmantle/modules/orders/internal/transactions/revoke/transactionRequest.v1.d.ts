import * as _m0 from "protobufjs/minimal";
export interface TransactionRequest {
    from: string;
    fromID: string;
    toID: string;
    classificationID: string;
}
export interface TransactionRequestSDKType {
    from: string;
    from_i_d: string;
    to_i_d: string;
    classification_i_d: string;
}
export declare const TransactionRequest: {
    encode(message: TransactionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionRequest;
    fromJSON(object: any): TransactionRequest;
    toJSON(message: TransactionRequest): unknown;
    fromPartial(object: Partial<TransactionRequest>): TransactionRequest;
};
