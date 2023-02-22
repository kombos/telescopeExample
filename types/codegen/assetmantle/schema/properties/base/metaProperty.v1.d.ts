import { PropertyID, PropertyIDSDKType } from "../../ids/base/propertyID.v1";
import { AnyData, AnyDataSDKType } from "../../data/base/anyData.v1";
import * as _m0 from "protobufjs/minimal";
export interface MetaProperty {
    iD?: PropertyID;
    data?: AnyData;
}
export interface MetaPropertySDKType {
    i_d?: PropertyIDSDKType;
    data?: AnyDataSDKType;
}
export declare const MetaProperty: {
    encode(message: MetaProperty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MetaProperty;
    fromJSON(object: any): MetaProperty;
    toJSON(message: MetaProperty): unknown;
    fromPartial(object: Partial<MetaProperty>): MetaProperty;
};
