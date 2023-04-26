import { Mappable, MappableSDKType } from "../../mappable/mappable";
import * as _m0 from "protobufjs/minimal";
export interface QueryResponse {
  list: Mappable[];
}
export interface QueryResponseSDKType {
  list: MappableSDKType[];
}
function createBaseQueryResponse(): QueryResponse {
  return {
    list: []
  };
}
export const QueryResponse = {
  encode(message: QueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.list) {
      Mappable.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.list.push(Mappable.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryResponse {
    return {
      list: Array.isArray(object?.list) ? object.list.map((e: any) => Mappable.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryResponse): unknown {
    const obj: any = {};
    if (message.list) {
      obj.list = message.list.map(e => e ? Mappable.toJSON(e) : undefined);
    } else {
      obj.list = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryResponse>): QueryResponse {
    const message = createBaseQueryResponse();
    message.list = object.list?.map(e => Mappable.fromPartial(e)) || [];
    return message;
  }
};