import { MesaProperty, MesaPropertySDKType } from "./mesaProperty.v1";
import { MetaProperty, MetaPropertySDKType } from "./metaProperty.v1";
import * as _m0 from "protobufjs/minimal";
export interface AnyProperty {
    mesaProperty?: MesaProperty;
    metaProperty?: MetaProperty;
}
export interface AnyPropertySDKType {
    mesa_property?: MesaPropertySDKType;
    meta_property?: MetaPropertySDKType;
}
export declare const AnyProperty: {
    encode(message: AnyProperty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AnyProperty;
    fromJSON(object: any): AnyProperty;
    toJSON(message: AnyProperty): unknown;
    fromPartial(object: Partial<AnyProperty>): AnyProperty;
};
