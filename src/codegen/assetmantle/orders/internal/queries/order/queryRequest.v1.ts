import { OrderID, OrderIDSDKType } from "../../../../base/ids/internal/orderID.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../helpers";
export interface QueryRequest {
  orderID?: OrderID;
}
export interface QueryRequestSDKType {
  order_i_d?: OrderIDSDKType;
}

function createBaseQueryRequest(): QueryRequest {
  return {
    orderID: undefined
  };
}

export const QueryRequest = {
  encode(message: QueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderID !== undefined) {
      OrderID.encode(message.orderID, writer.uint32(10).fork()).ldelim();
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
          message.orderID = OrderID.decode(reader, reader.uint32());
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
      orderID: isSet(object.orderID) ? OrderID.fromJSON(object.orderID) : undefined
    };
  },

  toJSON(message: QueryRequest): unknown {
    const obj: any = {};
    message.orderID !== undefined && (obj.orderID = message.orderID ? OrderID.toJSON(message.orderID) : undefined);
    return obj;
  },

  fromPartial(object: Partial<QueryRequest>): QueryRequest {
    const message = createBaseQueryRequest();
    message.orderID = object.orderID !== undefined && object.orderID !== null ? OrderID.fromPartial(object.orderID) : undefined;
    return message;
  }

};