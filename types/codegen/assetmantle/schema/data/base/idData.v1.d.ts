import { AnyID, AnyIDSDKType } from "../../ids/base/anyID.v1";
import * as _m0 from "protobufjs/minimal";
export interface IDData {
    value?: AnyID;
}
export interface IDDataSDKType {
    value?: AnyIDSDKType;
}
export declare const IDData: {
    encode(message: IDData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDData;
    fromJSON(object: any): IDData;
    toJSON(message: IDData): unknown;
    fromPartial(object: Partial<IDData>): IDData;
};
