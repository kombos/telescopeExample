import { Split, SplitSDKType } from "../../../../schema/types/base/split.v1";
import * as _m0 from "protobufjs/minimal";
export interface Mappable {
    split?: Split;
}
export interface MappableSDKType {
    split?: SplitSDKType;
}
export declare const Mappable: {
    encode(message: Mappable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Mappable;
    fromJSON(object: any): Mappable;
    toJSON(message: Mappable): unknown;
    fromPartial(object: Partial<Mappable>): Mappable;
};
