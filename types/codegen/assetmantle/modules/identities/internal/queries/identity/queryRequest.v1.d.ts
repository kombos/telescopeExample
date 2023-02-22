import { IdentityID, IdentityIDSDKType } from "../../../../../schema/ids/base/identityID.v1";
import * as _m0 from "protobufjs/minimal";
export interface QueryRequest {
    identityID?: IdentityID;
}
export interface QueryRequestSDKType {
    identity_i_d?: IdentityIDSDKType;
}
export declare const QueryRequest: {
    encode(message: QueryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequest;
    fromJSON(object: any): QueryRequest;
    toJSON(message: QueryRequest): unknown;
    fromPartial(object: Partial<QueryRequest>): QueryRequest;
};
