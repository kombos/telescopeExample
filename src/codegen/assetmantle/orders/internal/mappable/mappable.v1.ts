import { Document, DocumentSDKType } from "../../../base/documents/internal/document.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
export interface Mappable {
  order?: Document;
}
export interface MappableSDKType {
  order?: DocumentSDKType;
}

function createBaseMappable(): Mappable {
  return {
    order: undefined
  };
}

export const Mappable = {
  encode(message: Mappable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Document.encode(message.order, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mappable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMappable();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.order = Document.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Mappable {
    return {
      order: isSet(object.order) ? Document.fromJSON(object.order) : undefined
    };
  },

  toJSON(message: Mappable): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? Document.toJSON(message.order) : undefined);
    return obj;
  },

  fromPartial(object: Partial<Mappable>): Mappable {
    const message = createBaseMappable();
    message.order = object.order !== undefined && object.order !== null ? Document.fromPartial(object.order) : undefined;
    return message;
  }

};