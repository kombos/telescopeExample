import * as _m0 from "protobufjs/minimal";
export interface Response {
}
export interface ResponseSDKType {
}
export declare const Response: {
    encode(_: Response, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Response;
    fromJSON(_: any): Response;
    toJSON(_: Response): unknown;
    fromPartial(_: Partial<Response>): Response;
};
