import { AssetID, AssetIDSDKType } from "./assetID.v1";
import { CoinID, CoinIDSDKType } from "./coinID.v1";
import * as _m0 from "protobufjs/minimal";
export interface AnyOwnableID {
    assetID?: AssetID;
    coinID?: CoinID;
}
export interface AnyOwnableIDSDKType {
    asset_i_d?: AssetIDSDKType;
    coin_i_d?: CoinIDSDKType;
}
export declare const AnyOwnableID: {
    encode(message: AnyOwnableID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AnyOwnableID;
    fromJSON(object: any): AnyOwnableID;
    toJSON(message: AnyOwnableID): unknown;
    fromPartial(object: Partial<AnyOwnableID>): AnyOwnableID;
};
