import { PropertyList, PropertyListSDKType } from "../../lists/base/propertyList.v1";
import * as _m0 from "protobufjs/minimal";
export interface Mutables {
    propertyList?: PropertyList;
}
export interface MutablesSDKType {
    property_list?: PropertyListSDKType;
}
export declare const Mutables: {
    encode(message: Mutables, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Mutables;
    fromJSON(object: any): Mutables;
    toJSON(message: Mutables): unknown;
    fromPartial(object: Partial<Mutables>): Mutables;
};
