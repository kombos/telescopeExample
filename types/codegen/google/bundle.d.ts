import * as _160 from "./api/http";
import * as _161 from "./protobuf/any";
import * as _162 from "./protobuf/descriptor";
import * as _163 from "./protobuf/duration";
import * as _164 from "./protobuf/empty";
import * as _165 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _160.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Http;
            fromJSON(object: any): _160.Http;
            toJSON(message: _160.Http): unknown;
            fromPartial(object: Partial<_160.Http>): _160.Http;
        };
        HttpRule: {
            encode(message: _160.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.HttpRule;
            fromJSON(object: any): _160.HttpRule;
            toJSON(message: _160.HttpRule): unknown;
            fromPartial(object: Partial<_160.HttpRule>): _160.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _160.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.CustomHttpPattern;
            fromJSON(object: any): _160.CustomHttpPattern;
            toJSON(message: _160.CustomHttpPattern): unknown;
            fromPartial(object: Partial<_160.CustomHttpPattern>): _160.CustomHttpPattern;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _165.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Timestamp;
            fromJSON(object: any): _165.Timestamp;
            toJSON(message: _165.Timestamp): unknown;
            fromPartial(object: Partial<_165.Timestamp>): _165.Timestamp;
        };
        Empty: {
            encode(_: _164.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.Empty;
            fromJSON(_: any): _164.Empty;
            toJSON(_: _164.Empty): unknown;
            fromPartial(_: Partial<_164.Empty>): _164.Empty;
        };
        Duration: {
            encode(message: _163.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Duration;
            fromJSON(object: any): _163.Duration;
            toJSON(message: _163.Duration): unknown;
            fromPartial(object: Partial<_163.Duration>): _163.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _162.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _162.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _162.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _162.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _162.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _162.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _162.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _162.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _162.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _162.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _162.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _162.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _162.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _162.FieldDescriptorProto_TypeSDKType;
        FieldDescriptorProto_Label: typeof _162.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _162.FieldDescriptorProto_LabelSDKType;
        FileOptions_OptimizeMode: typeof _162.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _162.FileOptions_OptimizeModeSDKType;
        FieldOptions_CType: typeof _162.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _162.FieldOptions_CTypeSDKType;
        FieldOptions_JSType: typeof _162.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _162.FieldOptions_JSTypeSDKType;
        MethodOptions_IdempotencyLevel: typeof _162.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _162.MethodOptions_IdempotencyLevelSDKType;
        FileDescriptorSet: {
            encode(message: _162.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.FileDescriptorSet;
            fromJSON(object: any): _162.FileDescriptorSet;
            toJSON(message: _162.FileDescriptorSet): unknown;
            fromPartial(object: Partial<_162.FileDescriptorSet>): _162.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _162.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.FileDescriptorProto;
            fromJSON(object: any): _162.FileDescriptorProto;
            toJSON(message: _162.FileDescriptorProto): unknown;
            fromPartial(object: Partial<_162.FileDescriptorProto>): _162.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _162.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.DescriptorProto;
            fromJSON(object: any): _162.DescriptorProto;
            toJSON(message: _162.DescriptorProto): unknown;
            fromPartial(object: Partial<_162.DescriptorProto>): _162.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _162.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.DescriptorProto_ExtensionRange;
            fromJSON(object: any): _162.DescriptorProto_ExtensionRange;
            toJSON(message: _162.DescriptorProto_ExtensionRange): unknown;
            fromPartial(object: Partial<_162.DescriptorProto_ExtensionRange>): _162.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _162.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.DescriptorProto_ReservedRange;
            fromJSON(object: any): _162.DescriptorProto_ReservedRange;
            toJSON(message: _162.DescriptorProto_ReservedRange): unknown;
            fromPartial(object: Partial<_162.DescriptorProto_ReservedRange>): _162.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _162.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ExtensionRangeOptions;
            fromJSON(object: any): _162.ExtensionRangeOptions;
            toJSON(message: _162.ExtensionRangeOptions): unknown;
            fromPartial(object: Partial<_162.ExtensionRangeOptions>): _162.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _162.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.FieldDescriptorProto;
            fromJSON(object: any): _162.FieldDescriptorProto;
            toJSON(message: _162.FieldDescriptorProto): unknown;
            fromPartial(object: Partial<_162.FieldDescriptorProto>): _162.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _162.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.OneofDescriptorProto;
            fromJSON(object: any): _162.OneofDescriptorProto;
            toJSON(message: _162.OneofDescriptorProto): unknown;
            fromPartial(object: Partial<_162.OneofDescriptorProto>): _162.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _162.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.EnumDescriptorProto;
            fromJSON(object: any): _162.EnumDescriptorProto;
            toJSON(message: _162.EnumDescriptorProto): unknown;
            fromPartial(object: Partial<_162.EnumDescriptorProto>): _162.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _162.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.EnumDescriptorProto_EnumReservedRange;
            fromJSON(object: any): _162.EnumDescriptorProto_EnumReservedRange;
            toJSON(message: _162.EnumDescriptorProto_EnumReservedRange): unknown;
            fromPartial(object: Partial<_162.EnumDescriptorProto_EnumReservedRange>): _162.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _162.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.EnumValueDescriptorProto;
            fromJSON(object: any): _162.EnumValueDescriptorProto;
            toJSON(message: _162.EnumValueDescriptorProto): unknown;
            fromPartial(object: Partial<_162.EnumValueDescriptorProto>): _162.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _162.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ServiceDescriptorProto;
            fromJSON(object: any): _162.ServiceDescriptorProto;
            toJSON(message: _162.ServiceDescriptorProto): unknown;
            fromPartial(object: Partial<_162.ServiceDescriptorProto>): _162.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _162.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MethodDescriptorProto;
            fromJSON(object: any): _162.MethodDescriptorProto;
            toJSON(message: _162.MethodDescriptorProto): unknown;
            fromPartial(object: Partial<_162.MethodDescriptorProto>): _162.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _162.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.FileOptions;
            fromJSON(object: any): _162.FileOptions;
            toJSON(message: _162.FileOptions): unknown;
            fromPartial(object: Partial<_162.FileOptions>): _162.FileOptions;
        };
        MessageOptions: {
            encode(message: _162.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MessageOptions;
            fromJSON(object: any): _162.MessageOptions;
            toJSON(message: _162.MessageOptions): unknown;
            fromPartial(object: Partial<_162.MessageOptions>): _162.MessageOptions;
        };
        FieldOptions: {
            encode(message: _162.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.FieldOptions;
            fromJSON(object: any): _162.FieldOptions;
            toJSON(message: _162.FieldOptions): unknown;
            fromPartial(object: Partial<_162.FieldOptions>): _162.FieldOptions;
        };
        OneofOptions: {
            encode(message: _162.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.OneofOptions;
            fromJSON(object: any): _162.OneofOptions;
            toJSON(message: _162.OneofOptions): unknown;
            fromPartial(object: Partial<_162.OneofOptions>): _162.OneofOptions;
        };
        EnumOptions: {
            encode(message: _162.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.EnumOptions;
            fromJSON(object: any): _162.EnumOptions;
            toJSON(message: _162.EnumOptions): unknown;
            fromPartial(object: Partial<_162.EnumOptions>): _162.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _162.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.EnumValueOptions;
            fromJSON(object: any): _162.EnumValueOptions;
            toJSON(message: _162.EnumValueOptions): unknown;
            fromPartial(object: Partial<_162.EnumValueOptions>): _162.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _162.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ServiceOptions;
            fromJSON(object: any): _162.ServiceOptions;
            toJSON(message: _162.ServiceOptions): unknown;
            fromPartial(object: Partial<_162.ServiceOptions>): _162.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _162.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.MethodOptions;
            fromJSON(object: any): _162.MethodOptions;
            toJSON(message: _162.MethodOptions): unknown;
            fromPartial(object: Partial<_162.MethodOptions>): _162.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _162.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.UninterpretedOption;
            fromJSON(object: any): _162.UninterpretedOption;
            toJSON(message: _162.UninterpretedOption): unknown;
            fromPartial(object: Partial<_162.UninterpretedOption>): _162.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _162.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.UninterpretedOption_NamePart;
            fromJSON(object: any): _162.UninterpretedOption_NamePart;
            toJSON(message: _162.UninterpretedOption_NamePart): unknown;
            fromPartial(object: Partial<_162.UninterpretedOption_NamePart>): _162.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _162.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SourceCodeInfo;
            fromJSON(object: any): _162.SourceCodeInfo;
            toJSON(message: _162.SourceCodeInfo): unknown;
            fromPartial(object: Partial<_162.SourceCodeInfo>): _162.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _162.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.SourceCodeInfo_Location;
            fromJSON(object: any): _162.SourceCodeInfo_Location;
            toJSON(message: _162.SourceCodeInfo_Location): unknown;
            fromPartial(object: Partial<_162.SourceCodeInfo_Location>): _162.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _162.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.GeneratedCodeInfo;
            fromJSON(object: any): _162.GeneratedCodeInfo;
            toJSON(message: _162.GeneratedCodeInfo): unknown;
            fromPartial(object: Partial<_162.GeneratedCodeInfo>): _162.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _162.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.GeneratedCodeInfo_Annotation;
            fromJSON(object: any): _162.GeneratedCodeInfo_Annotation;
            toJSON(message: _162.GeneratedCodeInfo_Annotation): unknown;
            fromPartial(object: Partial<_162.GeneratedCodeInfo_Annotation>): _162.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _161.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Any;
            fromJSON(object: any): _161.Any;
            toJSON(message: _161.Any): unknown;
            fromPartial(object: Partial<_161.Any>): _161.Any;
        };
    };
}
