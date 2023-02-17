import { Document, DocumentSDKType } from "../../../../schema/documents/base/document.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../helpers";
export interface Mappable {
  classification?: Document;
}
export interface MappableSDKType {
  classification?: DocumentSDKType;
}

function createBaseMappable(): Mappable {
  return {
    classification: undefined
  };
}

export const Mappable = {
  encode(message: Mappable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classification !== undefined) {
      Document.encode(message.classification, writer.uint32(10).fork()).ldelim();
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
          message.classification = Document.decode(reader, reader.uint32());
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
      classification: isSet(object.classification) ? Document.fromJSON(object.classification) : undefined
    };
  },

  toJSON(message: Mappable): unknown {
    const obj: any = {};
    message.classification !== undefined && (obj.classification = message.classification ? Document.toJSON(message.classification) : undefined);
    return obj;
  },

  fromPartial(object: Partial<Mappable>): Mappable {
    const message = createBaseMappable();
    message.classification = object.classification !== undefined && object.classification !== null ? Document.fromPartial(object.classification) : undefined;
    return message;
  }

};