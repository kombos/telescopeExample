import * as _57 from "../confio/proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _57.HashOp;
    hashOpToJSON(object: _57.HashOp): string;
    lengthOpFromJSON(object: any): _57.LengthOp;
    lengthOpToJSON(object: _57.LengthOp): string;
    HashOp: typeof _57.HashOp;
    HashOpSDKType: typeof _57.HashOpSDKType;
    LengthOp: typeof _57.LengthOp;
    LengthOpSDKType: typeof _57.LengthOpSDKType;
    ExistenceProof: {
        encode(message: _57.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ExistenceProof;
        fromJSON(object: any): _57.ExistenceProof;
        toJSON(message: _57.ExistenceProof): unknown;
        fromPartial(object: Partial<_57.ExistenceProof>): _57.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _57.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.NonExistenceProof;
        fromJSON(object: any): _57.NonExistenceProof;
        toJSON(message: _57.NonExistenceProof): unknown;
        fromPartial(object: Partial<_57.NonExistenceProof>): _57.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _57.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.CommitmentProof;
        fromJSON(object: any): _57.CommitmentProof;
        toJSON(message: _57.CommitmentProof): unknown;
        fromPartial(object: Partial<_57.CommitmentProof>): _57.CommitmentProof;
    };
    LeafOp: {
        encode(message: _57.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.LeafOp;
        fromJSON(object: any): _57.LeafOp;
        toJSON(message: _57.LeafOp): unknown;
        fromPartial(object: Partial<_57.LeafOp>): _57.LeafOp;
    };
    InnerOp: {
        encode(message: _57.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.InnerOp;
        fromJSON(object: any): _57.InnerOp;
        toJSON(message: _57.InnerOp): unknown;
        fromPartial(object: Partial<_57.InnerOp>): _57.InnerOp;
    };
    ProofSpec: {
        encode(message: _57.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ProofSpec;
        fromJSON(object: any): _57.ProofSpec;
        toJSON(message: _57.ProofSpec): unknown;
        fromPartial(object: Partial<_57.ProofSpec>): _57.ProofSpec;
    };
    InnerSpec: {
        encode(message: _57.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.InnerSpec;
        fromJSON(object: any): _57.InnerSpec;
        toJSON(message: _57.InnerSpec): unknown;
        fromPartial(object: Partial<_57.InnerSpec>): _57.InnerSpec;
    };
    BatchProof: {
        encode(message: _57.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.BatchProof;
        fromJSON(object: any): _57.BatchProof;
        toJSON(message: _57.BatchProof): unknown;
        fromPartial(object: Partial<_57.BatchProof>): _57.BatchProof;
    };
    BatchEntry: {
        encode(message: _57.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.BatchEntry;
        fromJSON(object: any): _57.BatchEntry;
        toJSON(message: _57.BatchEntry): unknown;
        fromPartial(object: Partial<_57.BatchEntry>): _57.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _57.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.CompressedBatchProof;
        fromJSON(object: any): _57.CompressedBatchProof;
        toJSON(message: _57.CompressedBatchProof): unknown;
        fromPartial(object: Partial<_57.CompressedBatchProof>): _57.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _57.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.CompressedBatchEntry;
        fromJSON(object: any): _57.CompressedBatchEntry;
        toJSON(message: _57.CompressedBatchEntry): unknown;
        fromPartial(object: Partial<_57.CompressedBatchEntry>): _57.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _57.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.CompressedExistenceProof;
        fromJSON(object: any): _57.CompressedExistenceProof;
        toJSON(message: _57.CompressedExistenceProof): unknown;
        fromPartial(object: Partial<_57.CompressedExistenceProof>): _57.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _57.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.CompressedNonExistenceProof;
        fromJSON(object: any): _57.CompressedNonExistenceProof;
        toJSON(message: _57.CompressedNonExistenceProof): unknown;
        fromPartial(object: Partial<_57.CompressedNonExistenceProof>): _57.CompressedNonExistenceProof;
    };
};
