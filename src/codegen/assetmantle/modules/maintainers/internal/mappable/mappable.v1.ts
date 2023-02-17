import { Document, DocumentSDKType } from "../../../../schema/documents/base/document.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../../helpers";
export interface Mappable {
  maintainer?: Document;
}
export interface MappableSDKType {
  maintainer?: DocumentSDKType;
}

function createBaseMappable(): Mappable {
  return {
    maintainer: undefined
  };
}

export const Mappable = {
  encode(message: Mappable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maintainer !== undefined) {
      Document.encode(message.maintainer, writer.uint32(10).fork()).ldelim();
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
          message.maintainer = Document.decode(reader, reader.uint32());
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
      maintainer: isSet(object.maintainer) ? Document.fromJSON(object.maintainer) : undefined
    };
  },

  toJSON(message: Mappable): unknown {
    const obj: any = {};
    message.maintainer !== undefined && (obj.maintainer = message.maintainer ? Document.toJSON(message.maintainer) : undefined);
    return obj;
  },

  fromPartial(object: Partial<Mappable>): Mappable {
    const message = createBaseMappable();
    message.maintainer = object.maintainer !== undefined && object.maintainer !== null ? Document.fromPartial(object.maintainer) : undefined;
    return message;
  }

};