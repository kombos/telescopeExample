import { AccAddressData, AccAddressDataSDKType } from "./accAddressData.v1";
import { BooleanData, BooleanDataSDKType } from "./booleanData.v1";
import { DecData, DecDataSDKType } from "./decData.v1";
import { HeightData, HeightDataSDKType } from "./heightData.v1";
import { IDData, IDDataSDKType } from "./idData.v1";
import { StringData, StringDataSDKType } from "./stringData.v1";
import { NumberData, NumberDataSDKType } from "./numberData.v1";
import * as _m0 from "protobufjs/minimal";
export interface AnyData {
    accAddressData?: AccAddressData;
    booleanData?: BooleanData;
    decData?: DecData;
    heightData?: HeightData;
    iDData?: IDData;
    stringData?: StringData;
    numberData?: NumberData;
    listData?: ListData;
}
export interface AnyDataSDKType {
    acc_address_data?: AccAddressDataSDKType;
    boolean_data?: BooleanDataSDKType;
    dec_data?: DecDataSDKType;
    height_data?: HeightDataSDKType;
    i_d_data?: IDDataSDKType;
    string_data?: StringDataSDKType;
    number_data?: NumberDataSDKType;
    list_data?: ListDataSDKType;
}
export interface ListData {
    dataList: AnyData[];
}
export interface ListDataSDKType {
    data_list: AnyDataSDKType[];
}
export declare const AnyData: {
    encode(message: AnyData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AnyData;
    fromJSON(object: any): AnyData;
    toJSON(message: AnyData): unknown;
    fromPartial(object: Partial<AnyData>): AnyData;
};
export declare const ListData: {
    encode(message: ListData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListData;
    fromJSON(object: any): ListData;
    toJSON(message: ListData): unknown;
    fromPartial(object: Partial<ListData>): ListData;
};
