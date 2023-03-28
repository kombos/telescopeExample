import { AnyID, AnyIDSDKType } from "../../ids/internal/anyID.v1";
import * as _m0 from "protobufjs/minimal";
export interface IDList {
  iDList: AnyID[];
}
export interface IDListSDKType {
  i_d_list: AnyIDSDKType[];
}

function createBaseIDList(): IDList {
  return {
    iDList: []
  };
}

export const IDList = {
  encode(message: IDList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.iDList) {
      AnyID.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDList();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iDList.push(AnyID.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): IDList {
    return {
      iDList: Array.isArray(object?.iDList) ? object.iDList.map((e: any) => AnyID.fromJSON(e)) : []
    };
  },

  toJSON(message: IDList): unknown {
    const obj: any = {};

    if (message.iDList) {
      obj.iDList = message.iDList.map(e => e ? AnyID.toJSON(e) : undefined);
    } else {
      obj.iDList = [];
    }

    return obj;
  },

  fromPartial(object: Partial<IDList>): IDList {
    const message = createBaseIDList();
    message.iDList = object.iDList?.map(e => AnyID.fromPartial(e)) || [];
    return message;
  }

};