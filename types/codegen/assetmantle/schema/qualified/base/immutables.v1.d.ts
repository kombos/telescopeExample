import { PropertyList, PropertyListSDKType } from "../../lists/base/propertyList.v1";
import * as _m0 from "protobufjs/minimal";
export interface Immutables {
    propertyList?: PropertyList;
}
export interface ImmutablesSDKType {
    property_list?: PropertyListSDKType;
}
export declare const Immutables: {
    encode(message: Immutables, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Immutables;
    fromJSON(object: any): Immutables;
    toJSON(message: Immutables): unknown;
    fromPartial(object: Partial<Immutables>): Immutables;
};
