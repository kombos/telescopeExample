import { AnyID, AnyIDSDKType } from "../../ids/base/anyID.v1";
import * as _m0 from "protobufjs/minimal";
export interface IDList {
    iDList: AnyID[];
}
export interface IDListSDKType {
    i_d_list: AnyIDSDKType[];
}
export declare const IDList: {
    encode(message: IDList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDList;
    fromJSON(object: any): IDList;
    toJSON(message: IDList): unknown;
    fromPartial(object: Partial<IDList>): IDList;
};
