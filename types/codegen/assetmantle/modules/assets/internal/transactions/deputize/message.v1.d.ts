import { IdentityID, IdentityIDSDKType } from "../../../../../schema/ids/base/identityID.v1";
import { ClassificationID, ClassificationIDSDKType } from "../../../../../schema/ids/base/classificationID.v1";
import { PropertyList, PropertyListSDKType } from "../../../../../schema/lists/base/propertyList.v1";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    fromID?: IdentityID;
    toID?: IdentityID;
    classificationID?: ClassificationID;
    maintainedProperties?: PropertyList;
    canMintAsset: boolean;
    canBurnAsset: boolean;
    canRenumerateAsset: boolean;
    canAddMaintainer: boolean;
    canRemoveMaintainer: boolean;
    canMutateMaintainer: boolean;
}
export interface MessageSDKType {
    from: string;
    from_i_d?: IdentityIDSDKType;
    to_i_d?: IdentityIDSDKType;
    classification_i_d?: ClassificationIDSDKType;
    maintained_properties?: PropertyListSDKType;
    can_mint_asset: boolean;
    can_burn_asset: boolean;
    can_renumerate_asset: boolean;
    can_add_maintainer: boolean;
    can_remove_maintainer: boolean;
    can_mutate_maintainer: boolean;
}
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: Partial<Message>): Message;
};
