import * as _m0 from "protobufjs/minimal";
export interface TransactionResponse {
    nubID: string;
}
export interface TransactionResponseProtoMsg {
    typeUrl: "/assetmantle.modules.identities.transactions.nub.TransactionResponse";
    value: Uint8Array;
}
export interface TransactionResponseAmino {
    nub_i_d: string;
}
export interface TransactionResponseAminoMsg {
    type: "/assetmantle.modules.identities.transactions.nub.TransactionResponse";
    value: TransactionResponseAmino;
}
export interface TransactionResponseSDKType {
    nub_i_d: string;
}
export declare const TransactionResponse: {
    encode(message: TransactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionResponse;
    fromJSON(object: any): TransactionResponse;
    toJSON(message: TransactionResponse): unknown;
    fromPartial(object: Partial<TransactionResponse>): TransactionResponse;
    fromAmino(object: TransactionResponseAmino): TransactionResponse;
    toAmino(message: TransactionResponse): TransactionResponseAmino;
    fromAminoMsg(object: TransactionResponseAminoMsg): TransactionResponse;
    fromProtoMsg(message: TransactionResponseProtoMsg): TransactionResponse;
    toProto(message: TransactionResponse): Uint8Array;
    toProtoMsg(message: TransactionResponse): TransactionResponseProtoMsg;
};
