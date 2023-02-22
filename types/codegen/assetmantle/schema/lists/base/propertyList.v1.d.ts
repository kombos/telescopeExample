import { AnyProperty, AnyPropertySDKType } from "../../properties/base/anyProperty.v1";
import * as _m0 from "protobufjs/minimal";
export interface PropertyList {
    propertyList: AnyProperty[];
}
export interface PropertyListSDKType {
    property_list: AnyPropertySDKType[];
}
export declare const PropertyList: {
    encode(message: PropertyList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PropertyList;
    fromJSON(object: any): PropertyList;
    toJSON(message: PropertyList): unknown;
    fromPartial(object: Partial<PropertyList>): PropertyList;
};
