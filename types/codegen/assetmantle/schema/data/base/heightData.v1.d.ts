import { Height, HeightSDKType } from "../../types/base/height.v1";
import * as _m0 from "protobufjs/minimal";
export interface HeightData {
    value?: Height;
}
export interface HeightDataSDKType {
    value?: HeightSDKType;
}
export declare const HeightData: {
    encode(message: HeightData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HeightData;
    fromJSON(object: any): HeightData;
    toJSON(message: HeightData): unknown;
    fromPartial(object: Partial<HeightData>): HeightData;
};
