import * as _m0 from "protobufjs/minimal";
export interface TransactionResponse {
    success: boolean;
    /** TODO define error object */
    error: string;
}
export interface TransactionResponseSDKType {
    success: boolean;
    /** TODO define error object */
    error: string;
}
export declare const TransactionResponse: {
    encode(message: TransactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionResponse;
    fromJSON(object: any): TransactionResponse;
    toJSON(message: TransactionResponse): unknown;
    fromPartial(object: Partial<TransactionResponse>): TransactionResponse;
};
