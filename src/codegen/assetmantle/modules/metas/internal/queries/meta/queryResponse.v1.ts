import { Mappable, MappableSDKType } from "../../mappable/mappable.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../../helpers";
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

function createBaseQueryResponse(): QueryResponse {
  return {
    success: false,
    error: "",
    list: []
  };
}

export const QueryResponse = {
  encode(message: QueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }

    if (message.error !== "") {
      writer.uint32(18).string(message.error);
    }

    for (const v of message.list) {
      Mappable.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.success = reader.bool();
          break;

        case 2:
          message.error = reader.string();
          break;

        case 3:
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
      success: isSet(object.success) ? Boolean(object.success) : false,
      error: isSet(object.error) ? String(object.error) : "",
      list: Array.isArray(object?.list) ? object.list.map((e: any) => Mappable.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    message.error !== undefined && (obj.error = message.error);

    if (message.list) {
      obj.list = message.list.map(e => e ? Mappable.toJSON(e) : undefined);
    } else {
      obj.list = [];
    }

    return obj;
  },

  fromPartial(object: Partial<QueryResponse>): QueryResponse {
    const message = createBaseQueryResponse();
    message.success = object.success ?? false;
    message.error = object.error ?? "";
    message.list = object.list?.map(e => Mappable.fromPartial(e)) || [];
    return message;
  }

};