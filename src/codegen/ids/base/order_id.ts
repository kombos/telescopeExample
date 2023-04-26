import { HashID, HashIDSDKType } from "./hash_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface OrderID {
  hashID?: HashID;
}
export interface OrderIDSDKType {
  hash_i_d?: HashIDSDKType;
}
function createBaseOrderID(): OrderID {
  return {
    hashID: undefined
  };
}
export const OrderID = {
  encode(message: OrderID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hashID !== undefined) {
      HashID.encode(message.hashID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OrderID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hashID = HashID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OrderID {
    return {
      hashID: isSet(object.hashID) ? HashID.fromJSON(object.hashID) : undefined
    };
  },
  toJSON(message: OrderID): unknown {
    const obj: any = {};
    message.hashID !== undefined && (obj.hashID = message.hashID ? HashID.toJSON(message.hashID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<OrderID>): OrderID {
    const message = createBaseOrderID();
    message.hashID = object.hashID !== undefined && object.hashID !== null ? HashID.fromPartial(object.hashID) : undefined;
    return message;
  }
};