import * as _m0 from "protobufjs/minimal";
export interface Response {}
export interface ResponseSDKType {}

function createBaseResponse(): Response {
  return {};
}

export const Response = {
  encode(_: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): Response {
    return {};
  },

  toJSON(_: Response): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: Partial<Response>): Response {
    const message = createBaseResponse();
    return message;
  }

};