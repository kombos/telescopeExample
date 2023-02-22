import { ClassificationID, ClassificationIDSDKType } from "../../../../schema/ids/base/classificationID.v1";
import * as _m0 from "protobufjs/minimal";
export interface Key {
    classificationID?: ClassificationID;
}
export interface KeySDKType {
    classification_i_d?: ClassificationIDSDKType;
}
export declare const Key: {
    encode(message: Key, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Key;
    fromJSON(object: any): Key;
    toJSON(message: Key): unknown;
    fromPartial(object: Partial<Key>): Key;
};
