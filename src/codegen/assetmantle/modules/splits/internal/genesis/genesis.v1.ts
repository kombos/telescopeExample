import { Mappable, MappableSDKType } from "../mappable/mappable.v1";
import { Parameter, ParameterSDKType } from "../../../../schema/parameters/base/parameter.v1";
import * as _m0 from "protobufjs/minimal";
export interface Genesis {
  mappables: Mappable[];
  parameters: Parameter[];
}
export interface GenesisSDKType {
  mappables: MappableSDKType[];
  parameters: ParameterSDKType[];
}

function createBaseGenesis(): Genesis {
  return {
    mappables: [],
    parameters: []
  };
}

export const Genesis = {
  encode(message: Genesis, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.mappables) {
      Mappable.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.parameters) {
      Parameter.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.parameters.push(Parameter.decode(reader, reader.uint32()));
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
      parameters: Array.isArray(object?.parameters) ? object.parameters.map((e: any) => Parameter.fromJSON(e)) : []
    };
  },

  toJSON(message: Genesis): unknown {
    const obj: any = {};

    if (message.mappables) {
      obj.mappables = message.mappables.map(e => e ? Mappable.toJSON(e) : undefined);
    } else {
      obj.mappables = [];
    }

    if (message.parameters) {
      obj.parameters = message.parameters.map(e => e ? Parameter.toJSON(e) : undefined);
    } else {
      obj.parameters = [];
    }

    return obj;
  },

  fromPartial(object: Partial<Genesis>): Genesis {
    const message = createBaseGenesis();
    message.mappables = object.mappables?.map(e => Mappable.fromPartial(e)) || [];
    message.parameters = object.parameters?.map(e => Parameter.fromPartial(e)) || [];
    return message;
  }

};