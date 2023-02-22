import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
export interface NumberData {
    value: Long;
}
export interface NumberDataSDKType {
    value: Long;
}
export declare const NumberData: {
    encode(message: NumberData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NumberData;
    fromJSON(object: any): NumberData;
    toJSON(message: NumberData): unknown;
    fromPartial(object: Partial<NumberData>): NumberData;
};
