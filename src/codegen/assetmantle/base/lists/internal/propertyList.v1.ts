import { AnyProperty, AnyPropertySDKType } from "../../properties/internal/anyProperty.v1";
import * as _m0 from "protobufjs/minimal";
export interface PropertyList {
  propertyList: AnyProperty[];
}
export interface PropertyListSDKType {
  property_list: AnyPropertySDKType[];
}

function createBasePropertyList(): PropertyList {
  return {
    propertyList: []
  };
}

export const PropertyList = {
  encode(message: PropertyList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.propertyList) {
      AnyProperty.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PropertyList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePropertyList();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.propertyList.push(AnyProperty.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PropertyList {
    return {
      propertyList: Array.isArray(object?.propertyList) ? object.propertyList.map((e: any) => AnyProperty.fromJSON(e)) : []
    };
  },

  toJSON(message: PropertyList): unknown {
    const obj: any = {};

    if (message.propertyList) {
      obj.propertyList = message.propertyList.map(e => e ? AnyProperty.toJSON(e) : undefined);
    } else {
      obj.propertyList = [];
    }

    return obj;
  },

  fromPartial(object: Partial<PropertyList>): PropertyList {
    const message = createBasePropertyList();
    message.propertyList = object.propertyList?.map(e => AnyProperty.fromPartial(e)) || [];
    return message;
  }

};