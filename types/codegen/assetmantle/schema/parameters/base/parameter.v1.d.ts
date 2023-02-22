import { MetaProperty, MetaPropertySDKType } from "../../properties/base/metaProperty.v1";
import * as _m0 from "protobufjs/minimal";
export interface Parameter {
    metaProperty?: MetaProperty;
}
export interface ParameterSDKType {
    meta_property?: MetaPropertySDKType;
}
export declare const Parameter: {
    encode(message: Parameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Parameter;
    fromJSON(object: any): Parameter;
    toJSON(message: Parameter): unknown;
    fromPartial(object: Partial<Parameter>): Parameter;
};
