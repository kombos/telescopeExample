import { AnyID, AnyIDSDKType } from "../../ids/base/any_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface IDData {
  value?: AnyID;
}
export interface IDDataSDKType {
  value?: AnyIDSDKType;
}
function createBaseIDData(): IDData {
  return {
    value: undefined
  };
}
export const IDData = {
  encode(message: IDData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      AnyID.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IDData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = AnyID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IDData {
    return {
      value: isSet(object.value) ? AnyID.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: IDData): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? AnyID.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: Partial<IDData>): IDData {
    const message = createBaseIDData();
    message.value = object.value !== undefined && object.value !== null ? AnyID.fromPartial(object.value) : undefined;
    return message;
  }
};