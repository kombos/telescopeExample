import { PropertyID, PropertyIDSDKType } from "../../ids/v1/propertyID.v1";
import { DataID, DataIDSDKType } from "../../ids/v1/dataID.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
export interface MesaProperty {
  iD?: PropertyID;
  dataID?: DataID;
}
export interface MesaPropertySDKType {
  i_d?: PropertyIDSDKType;
  data_i_d?: DataIDSDKType;
}

function createBaseMesaProperty(): MesaProperty {
  return {
    iD: undefined,
    dataID: undefined
  };
}

export const MesaProperty = {
  encode(message: MesaProperty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iD !== undefined) {
      PropertyID.encode(message.iD, writer.uint32(10).fork()).ldelim();
    }

    if (message.dataID !== undefined) {
      DataID.encode(message.dataID, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MesaProperty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMesaProperty();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.iD = PropertyID.decode(reader, reader.uint32());
          break;

        case 2:
          message.dataID = DataID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MesaProperty {
    return {
      iD: isSet(object.iD) ? PropertyID.fromJSON(object.iD) : undefined,
      dataID: isSet(object.dataID) ? DataID.fromJSON(object.dataID) : undefined
    };
  },

  toJSON(message: MesaProperty): unknown {
    const obj: any = {};
    message.iD !== undefined && (obj.iD = message.iD ? PropertyID.toJSON(message.iD) : undefined);
    message.dataID !== undefined && (obj.dataID = message.dataID ? DataID.toJSON(message.dataID) : undefined);
    return obj;
  },

  fromPartial(object: Partial<MesaProperty>): MesaProperty {
    const message = createBaseMesaProperty();
    message.iD = object.iD !== undefined && object.iD !== null ? PropertyID.fromPartial(object.iD) : undefined;
    message.dataID = object.dataID !== undefined && object.dataID !== null ? DataID.fromPartial(object.dataID) : undefined;
    return message;
  }

};