import { IdentityID, IdentityIDSDKType } from "../../../../../schema/ids/base/identityID.v1";
import { AssetID, AssetIDSDKType } from "../../../../../schema/ids/base/assetID.v1";
import { PropertyList, PropertyListSDKType } from "../../../../../schema/lists/base/propertyList.v1";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    fromID?: IdentityID;
    assetID?: AssetID;
    mutableMetaProperties?: PropertyList;
    mutableProperties?: PropertyList;
}
export interface MessageSDKType {
    from: string;
    from_i_d?: IdentityIDSDKType;
    asset_i_d?: AssetIDSDKType;
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
