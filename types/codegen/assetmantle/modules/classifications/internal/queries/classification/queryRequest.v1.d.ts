import { ClassificationID, ClassificationIDSDKType } from "../../../../../schema/ids/base/classificationID.v1";
import * as _m0 from "protobufjs/minimal";
export interface QueryRequest {
    classificationID?: ClassificationID;
}
export interface QueryRequestSDKType {
    classification_i_d?: ClassificationIDSDKType;
}
export declare const QueryRequest: {
    encode(message: QueryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequest;
    fromJSON(object: any): QueryRequest;
    toJSON(message: QueryRequest): unknown;
    fromPartial(object: Partial<QueryRequest>): QueryRequest;
};
