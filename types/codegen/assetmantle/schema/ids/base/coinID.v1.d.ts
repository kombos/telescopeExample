import { StringID, StringIDSDKType } from "./stringID.v1";
import * as _m0 from "protobufjs/minimal";
export interface CoinID {
    stringID?: StringID;
}
export interface CoinIDSDKType {
    string_i_d?: StringIDSDKType;
}
export declare const CoinID: {
    encode(message: CoinID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CoinID;
    fromJSON(object: any): CoinID;
    toJSON(message: CoinID): unknown;
    fromPartial(object: Partial<CoinID>): CoinID;
};
