import { Mappable, MappableSDKType } from "../../mappable/mappable.v1";
import * as _m0 from "protobufjs/minimal";
export interface QueryResponse {
    success: boolean;
    error: string;
    list: Mappable[];
}
export interface QueryResponseSDKType {
    success: boolean;
    error: string;
    list: MappableSDKType[];
}
export declare const QueryResponse: {
    encode(message: QueryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponse;
    fromJSON(object: any): QueryResponse;
    toJSON(message: QueryResponse): unknown;
    fromPartial(object: Partial<QueryResponse>): QueryResponse;
};