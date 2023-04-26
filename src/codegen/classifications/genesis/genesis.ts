import { Mappable, MappableSDKType } from "../mappable/mappable";
import { ParameterList, ParameterListSDKType } from "../../parameters/base/parameter_list";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Genesis {
  mappables: Mappable[];
  parameterList?: ParameterList;
}
export interface GenesisSDKType {
  mappables: MappableSDKType[];
  parameter_list?: ParameterListSDKType;
}
function createBaseGenesis(): Genesis {
  return {
    mappables: [],
    parameterList: undefined
  };
}
export const Genesis = {
  encode(message: Genesis, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mappables) {
      Mappable.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.parameterList !== undefined) {
      ParameterList.encode(message.parameterList, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Genesis {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mappables.push(Mappable.decode(reader, reader.uint32()));
          break;
        case 2:
          message.parameterList = ParameterList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Genesis {
    return {
      mappables: Array.isArray(object?.mappables) ? object.mappables.map((e: any) => Mappable.fromJSON(e)) : [],
      parameterList: isSet(object.parameterList) ? ParameterList.fromJSON(object.parameterList) : undefined
    };
  },
  toJSON(message: Genesis): unknown {
    const obj: any = {};
    if (message.mappables) {
      obj.mappables = message.mappables.map(e => e ? Mappable.toJSON(e) : undefined);
    } else {
      obj.mappables = [];
    }
    message.parameterList !== undefined && (obj.parameterList = message.parameterList ? ParameterList.toJSON(message.parameterList) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Genesis>): Genesis {
    const message = createBaseGenesis();
    message.mappables = object.mappables?.map(e => Mappable.fromPartial(e)) || [];
    message.parameterList = object.parameterList !== undefined && object.parameterList !== null ? ParameterList.fromPartial(object.parameterList) : undefined;
    return message;
  }
};