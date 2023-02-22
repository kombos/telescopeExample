import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
export interface Height {
    value: Long;
}
export interface HeightSDKType {
    value: Long;
}
export declare const Height: {
    encode(message: Height, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Height;
    fromJSON(object: any): Height;
    toJSON(message: Height): unknown;
    fromPartial(object: Partial<Height>): Height;
};
