import * as _58 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _58.ScalarType;
    scalarTypeToJSON(object: _58.ScalarType): string;
    ScalarType: typeof _58.ScalarType;
    ScalarTypeSDKType: typeof _58.ScalarTypeSDKType;
    InterfaceDescriptor: {
        encode(message: _58.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.InterfaceDescriptor;
        fromJSON(object: any): _58.InterfaceDescriptor;
        toJSON(message: _58.InterfaceDescriptor): unknown;
        fromPartial(object: Partial<_58.InterfaceDescriptor>): _58.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _58.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.ScalarDescriptor;
        fromJSON(object: any): _58.ScalarDescriptor;
        toJSON(message: _58.ScalarDescriptor): unknown;
        fromPartial(object: Partial<_58.ScalarDescriptor>): _58.ScalarDescriptor;
    };
};
