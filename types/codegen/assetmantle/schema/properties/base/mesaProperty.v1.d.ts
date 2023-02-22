import { PropertyID, PropertyIDSDKType } from "../../ids/base/propertyID.v1";
import { DataID, DataIDSDKType } from "../../ids/base/dataID.v1";
import * as _m0 from "protobufjs/minimal";
export interface MesaProperty {
    iD?: PropertyID;
    dataID?: DataID;
}
export interface MesaPropertySDKType {
    i_d?: PropertyIDSDKType;
    data_i_d?: DataIDSDKType;
}
export declare const MesaProperty: {
    encode(message: MesaProperty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MesaProperty;
    fromJSON(object: any): MesaProperty;
    toJSON(message: MesaProperty): unknown;
    fromPartial(object: Partial<MesaProperty>): MesaProperty;
};
