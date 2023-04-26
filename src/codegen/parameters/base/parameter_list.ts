import { Parameter, ParameterSDKType } from "./parameter";
import * as _m0 from "protobufjs/minimal";
export interface ParameterList {
  parameters: Parameter[];
}
export interface ParameterListSDKType {
  parameters: ParameterSDKType[];
}
function createBaseParameterList(): ParameterList {
  return {
    parameters: []
  };
}
export const ParameterList = {
  encode(message: ParameterList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.parameters) {
      Parameter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ParameterList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParameterList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parameters.push(Parameter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParameterList {
    return {
      parameters: Array.isArray(object?.parameters) ? object.parameters.map((e: any) => Parameter.fromJSON(e)) : []
    };
  },
  toJSON(message: ParameterList): unknown {
    const obj: any = {};
    if (message.parameters) {
      obj.parameters = message.parameters.map(e => e ? Parameter.toJSON(e) : undefined);
    } else {
      obj.parameters = [];
    }
    return obj;
  },
  fromPartial(object: Partial<ParameterList>): ParameterList {
    const message = createBaseParameterList();
    message.parameters = object.parameters?.map(e => Parameter.fromPartial(e)) || [];
    return message;
  }
};