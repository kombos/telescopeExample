import { PropertyID, PropertyIDSDKType } from "../../ids/internal/propertyID.v1";
import { AnyData, AnyDataSDKType } from "../../data/internal/anyData.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
export interface MetaProperty {
  iD?: PropertyID;
  data?: AnyData;
}
export interface MetaPropertySDKType {
  i_d?: PropertyIDSDKType;
  data?: AnyDataSDKType;
}

function createBaseMetaProperty(): MetaProperty {
  return {
    iD: undefined,
    data: undefined
  };
}

export const MetaProperty = {
  encode(message: MetaProperty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iD !== undefined) {
      PropertyID.encode(message.iD, writer.uint32(10).fork()).ldelim();
    }

    if (message.data !== undefined) {
      AnyData.encode(message.data, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetaProperty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetaProperty();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iD = PropertyID.decode(reader, reader.uint32());
          break;

        case 2:
          message.data = AnyData.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MetaProperty {
    return {
      iD: isSet(object.iD) ? PropertyID.fromJSON(object.iD) : undefined,
      data: isSet(object.data) ? AnyData.fromJSON(object.data) : undefined
    };
  },

  toJSON(message: MetaProperty): unknown {
    const obj: any = {};
    message.iD !== undefined && (obj.iD = message.iD ? PropertyID.toJSON(message.iD) : undefined);
    message.data !== undefined && (obj.data = message.data ? AnyData.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MetaProperty>): MetaProperty {
    const message = createBaseMetaProperty();
    message.iD = object.iD !== undefined && object.iD !== null ? PropertyID.fromPartial(object.iD) : undefined;
    message.data = object.data !== undefined && object.data !== null ? AnyData.fromPartial(object.data) : undefined;
    return message;
  }

};