import { DataID, DataIDSDKType } from "../../../../../schema/ids/base/dataID.v1";
import * as _m0 from "protobufjs/minimal";
export interface QueryRequest {
    dataID?: DataID;
}
export interface QueryRequestSDKType {
    data_i_d?: DataIDSDKType;
}
export declare const QueryRequest: {
    encode(message: QueryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequest;
    fromJSON(object: any): QueryRequest;
    toJSON(message: QueryRequest): unknown;
    fromPartial(object: Partial<QueryRequest>): QueryRequest;
};
