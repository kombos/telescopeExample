import * as _44 from "../assetmantle/schema/lists/base/idList.v1";
import * as _45 from "../assetmantle/schema/lists/base/propertyList.v1";
export declare const lists: {
    PropertyList: {
        encode(message: _45.PropertyList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.PropertyList;
        fromJSON(object: any): _45.PropertyList;
        toJSON(message: _45.PropertyList): unknown;
        fromPartial(object: Partial<_45.PropertyList>): _45.PropertyList;
    };
    IDList: {
        encode(message: _44.IDList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.IDList;
        fromJSON(object: any): _44.IDList;
        toJSON(message: _44.IDList): unknown;
        fromPartial(object: Partial<_44.IDList>): _44.IDList;
    };
};
