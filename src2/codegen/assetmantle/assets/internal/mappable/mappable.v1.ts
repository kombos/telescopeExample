import { Document, DocumentSDKType } from "../../../base/documents/v1/document.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
export interface Mappable {
  asset?: Document;
}
export interface MappableSDKType {
  asset?: DocumentSDKType;
}

function createBaseMappable(): Mappable {
  return {
    asset: undefined
  };
}

export const Mappable = {
  encode(message: Mappable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== undefined) {
      Document.encode(message.asset, writer.uint32(10).fork()).ldelim();
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
          message.asset = Document.decode(reader, reader.uint32());
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
      asset: isSet(object.asset) ? Document.fromJSON(object.asset) : undefined
    };
  },

  toJSON(message: Mappable): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? Document.toJSON(message.asset) : undefined);
    return obj;
  },

  fromPartial(object: Partial<Mappable>): Mappable {
    const message = createBaseMappable();
    message.asset = object.asset !== undefined && object.asset !== null ? Document.fromPartial(object.asset) : undefined;
    return message;
  }

};