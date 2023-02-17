import { IdentityID, IdentityIDSDKType } from "../../../../../schema/ids/base/identityID.v1";
import { OrderID, OrderIDSDKType } from "../../../../../schema/ids/base/orderID.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../../helpers";
export interface Message {
  from: string;
  fromID?: IdentityID;
  takerOwnableSplit: string;
  orderID?: OrderID;
}
export interface MessageSDKType {
  from: string;
  from_i_d?: IdentityIDSDKType;
  taker_ownable_split: string;
  order_i_d?: OrderIDSDKType;
}

function createBaseMessage(): Message {
  return {
    from: "",
    fromID: undefined,
    takerOwnableSplit: "",
    orderID: undefined
  };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.fromID !== undefined) {
      IdentityID.encode(message.fromID, writer.uint32(18).fork()).ldelim();
    }

    if (message.takerOwnableSplit !== "") {
      writer.uint32(26).string(message.takerOwnableSplit);
    }

    if (message.orderID !== undefined) {
      OrderID.encode(message.orderID, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.fromID = IdentityID.decode(reader, reader.uint32());
          break;

        case 3:
          message.takerOwnableSplit = reader.string();
          break;

        case 4:
          message.orderID = OrderID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Message {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      fromID: isSet(object.fromID) ? IdentityID.fromJSON(object.fromID) : undefined,
      takerOwnableSplit: isSet(object.takerOwnableSplit) ? String(object.takerOwnableSplit) : "",
      orderID: isSet(object.orderID) ? OrderID.fromJSON(object.orderID) : undefined
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.fromID !== undefined && (obj.fromID = message.fromID ? IdentityID.toJSON(message.fromID) : undefined);
    message.takerOwnableSplit !== undefined && (obj.takerOwnableSplit = message.takerOwnableSplit);
    message.orderID !== undefined && (obj.orderID = message.orderID ? OrderID.toJSON(message.orderID) : undefined);
    return obj;
  },

  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.from = object.from ?? "";
    message.fromID = object.fromID !== undefined && object.fromID !== null ? IdentityID.fromPartial(object.fromID) : undefined;
    message.takerOwnableSplit = object.takerOwnableSplit ?? "";
    message.orderID = object.orderID !== undefined && object.orderID !== null ? OrderID.fromPartial(object.orderID) : undefined;
    return message;
  }

};