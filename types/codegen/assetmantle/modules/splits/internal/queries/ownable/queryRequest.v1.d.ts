import { AnyOwnableID, AnyOwnableIDSDKType } from "../../../../../schema/ids/base/anyOwnableID.v1";
import * as _m0 from "protobufjs/minimal";
export interface QueryRequest {
    ownableID?: AnyOwnableID;
}
export interface QueryRequestSDKType {
    ownable_i_d?: AnyOwnableIDSDKType;
}
export declare const QueryRequest: {
    encode(message: QueryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequest;
    fromJSON(object: any): QueryRequest;
    toJSON(message: QueryRequest): unknown;
    fromPartial(object: Partial<QueryRequest>): QueryRequest;
};