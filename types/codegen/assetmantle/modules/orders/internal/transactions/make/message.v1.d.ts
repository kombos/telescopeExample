import { IdentityID, IdentityIDSDKType } from "../../../../../schema/ids/base/identityID.v1";
import { ClassificationID, ClassificationIDSDKType } from "../../../../../schema/ids/base/classificationID.v1";
import { AnyOwnableID, AnyOwnableIDSDKType } from "../../../../../schema/ids/base/anyOwnableID.v1";
import { Height, HeightSDKType } from "../../../../../schema/types/base/height.v1";
import { PropertyList, PropertyListSDKType } from "../../../../../schema/lists/base/propertyList.v1";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    fromID?: IdentityID;
    classificationID?: ClassificationID;
    takerID?: IdentityID;
    makerOwnableID?: AnyOwnableID;
    takerOwnableID?: AnyOwnableID;
    expiresOn?: Height;
    makerOwnableSplit: string;
    takerOwnableSplit: string;
    immutableMetaProperties?: PropertyList;
    immutableProperties?: PropertyList;
    mutableMetaProperties?: PropertyList;
    mutableProperties?: PropertyList;
}
export interface MessageSDKType {
    from: string;
    from_i_d?: IdentityIDSDKType;
    classification_i_d?: ClassificationIDSDKType;
    taker_i_d?: IdentityIDSDKType;
    maker_ownable_i_d?: AnyOwnableIDSDKType;
    taker_ownable_i_d?: AnyOwnableIDSDKType;
    expires_on?: HeightSDKType;
    maker_ownable_split: string;
    taker_ownable_split: string;
    immutable_meta_properties?: PropertyListSDKType;
    immutable_properties?: PropertyListSDKType;
    mutable_meta_properties?: PropertyListSDKType;
    mutable_properties?: PropertyListSDKType;
}
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: Partial<Message>): Message;
};
