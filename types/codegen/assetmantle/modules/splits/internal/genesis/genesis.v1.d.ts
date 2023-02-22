import { Mappable, MappableSDKType } from "../mappable/mappable.v1";
import { Parameter, ParameterSDKType } from "../../../../schema/parameters/base/parameter.v1";
import * as _m0 from "protobufjs/minimal";
export interface Genesis {
    mappables: Mappable[];
    parameters: Parameter[];
}
export interface GenesisSDKType {
    mappables: MappableSDKType[];
    parameters: ParameterSDKType[];
}
export declare const Genesis: {
    encode(message: Genesis, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Genesis;
    fromJSON(object: any): Genesis;
    toJSON(message: Genesis): unknown;
    fromPartial(object: Partial<Genesis>): Genesis;
};
