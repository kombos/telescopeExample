import { PageRequest, PageRequestSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryRequest {
  pageRequest?: PageRequest;
}
export interface QueryRequestSDKType {
  page_request?: PageRequestSDKType;
}
function createBaseQueryRequest(): QueryRequest {
  return {
    pageRequest: undefined
  };
}
export const QueryRequest = {
  encode(message: QueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pageRequest !== undefined) {
      PageRequest.encode(message.pageRequest, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pageRequest = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRequest {
    return {
      pageRequest: isSet(object.pageRequest) ? PageRequest.fromJSON(object.pageRequest) : undefined
    };
  },
  toJSON(message: QueryRequest): unknown {
    const obj: any = {};
    message.pageRequest !== undefined && (obj.pageRequest = message.pageRequest ? PageRequest.toJSON(message.pageRequest) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryRequest>): QueryRequest {
    const message = createBaseQueryRequest();
    message.pageRequest = object.pageRequest !== undefined && object.pageRequest !== null ? PageRequest.fromPartial(object.pageRequest) : undefined;
    return message;
  }
};