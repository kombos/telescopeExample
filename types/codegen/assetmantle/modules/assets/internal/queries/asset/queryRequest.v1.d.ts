import { AssetID, AssetIDSDKType } from "../../../../../schema/ids/base/assetID.v1";
import * as _m0 from "protobufjs/minimal";
export interface QueryRequest {
    assetID?: AssetID;
}
export interface QueryRequestSDKType {
    asset_i_d?: AssetIDSDKType;
}
export declare const QueryRequest: {
    encode(message: QueryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequest;
    fromJSON(object: any): QueryRequest;
    toJSON(message: QueryRequest): unknown;
    fromPartial(object: Partial<QueryRequest>): QueryRequest;
};
