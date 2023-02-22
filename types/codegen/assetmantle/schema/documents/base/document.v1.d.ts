import { ClassificationID, ClassificationIDSDKType } from "../../ids/base/classificationID.v1";
import { Immutables, ImmutablesSDKType } from "../../qualified/base/immutables.v1";
import { Mutables, MutablesSDKType } from "../../qualified/base/mutables.v1";
import * as _m0 from "protobufjs/minimal";
export interface Document {
    classificationID?: ClassificationID;
    immutables?: Immutables;
    mutables?: Mutables;
}
export interface DocumentSDKType {
    classification_i_d?: ClassificationIDSDKType;
    immutables?: ImmutablesSDKType;
    mutables?: MutablesSDKType;
}
export declare const Document: {
    encode(message: Document, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Document;
    fromJSON(object: any): Document;
    toJSON(message: Document): unknown;
    fromPartial(object: Partial<Document>): Document;
};
