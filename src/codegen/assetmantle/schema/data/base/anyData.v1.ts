import { AccAddressData, AccAddressDataSDKType } from "./accAddressData.v1";
import { BooleanData, BooleanDataSDKType } from "./booleanData.v1";
import { DecData, DecDataSDKType } from "./decData.v1";
import { HeightData, HeightDataSDKType } from "./heightData.v1";
import { IDData, IDDataSDKType } from "./idData.v1";
import { StringData, StringDataSDKType } from "./stringData.v1";
import { NumberData, NumberDataSDKType } from "./numberData.v1";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
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

function createBaseAnyData(): AnyData {
  return {
    accAddressData: undefined,
    booleanData: undefined,
    decData: undefined,
    heightData: undefined,
    iDData: undefined,
    stringData: undefined,
    numberData: undefined,
    listData: undefined
  };
}

export const AnyData = {
  encode(message: AnyData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accAddressData !== undefined) {
      AccAddressData.encode(message.accAddressData, writer.uint32(10).fork()).ldelim();
    }

    if (message.booleanData !== undefined) {
      BooleanData.encode(message.booleanData, writer.uint32(18).fork()).ldelim();
    }

    if (message.decData !== undefined) {
      DecData.encode(message.decData, writer.uint32(26).fork()).ldelim();
    }

    if (message.heightData !== undefined) {
      HeightData.encode(message.heightData, writer.uint32(34).fork()).ldelim();
    }

    if (message.iDData !== undefined) {
      IDData.encode(message.iDData, writer.uint32(42).fork()).ldelim();
    }

    if (message.stringData !== undefined) {
      StringData.encode(message.stringData, writer.uint32(50).fork()).ldelim();
    }

    if (message.numberData !== undefined) {
      NumberData.encode(message.numberData, writer.uint32(58).fork()).ldelim();
    }

    if (message.listData !== undefined) {
      ListData.encode(message.listData, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnyData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnyData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accAddressData = AccAddressData.decode(reader, reader.uint32());
          break;

        case 2:
          message.booleanData = BooleanData.decode(reader, reader.uint32());
          break;

        case 3:
          message.decData = DecData.decode(reader, reader.uint32());
          break;

        case 4:
          message.heightData = HeightData.decode(reader, reader.uint32());
          break;

        case 5:
          message.iDData = IDData.decode(reader, reader.uint32());
          break;

        case 6:
          message.stringData = StringData.decode(reader, reader.uint32());
          break;

        case 7:
          message.numberData = NumberData.decode(reader, reader.uint32());
          break;

        case 8:
          message.listData = ListData.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AnyData {
    return {
      accAddressData: isSet(object.accAddressData) ? AccAddressData.fromJSON(object.accAddressData) : undefined,
      booleanData: isSet(object.booleanData) ? BooleanData.fromJSON(object.booleanData) : undefined,
      decData: isSet(object.decData) ? DecData.fromJSON(object.decData) : undefined,
      heightData: isSet(object.heightData) ? HeightData.fromJSON(object.heightData) : undefined,
      iDData: isSet(object.iDData) ? IDData.fromJSON(object.iDData) : undefined,
      stringData: isSet(object.stringData) ? StringData.fromJSON(object.stringData) : undefined,
      numberData: isSet(object.numberData) ? NumberData.fromJSON(object.numberData) : undefined,
      listData: isSet(object.listData) ? ListData.fromJSON(object.listData) : undefined
    };
  },

  toJSON(message: AnyData): unknown {
    const obj: any = {};
    message.accAddressData !== undefined && (obj.accAddressData = message.accAddressData ? AccAddressData.toJSON(message.accAddressData) : undefined);
    message.booleanData !== undefined && (obj.booleanData = message.booleanData ? BooleanData.toJSON(message.booleanData) : undefined);
    message.decData !== undefined && (obj.decData = message.decData ? DecData.toJSON(message.decData) : undefined);
    message.heightData !== undefined && (obj.heightData = message.heightData ? HeightData.toJSON(message.heightData) : undefined);
    message.iDData !== undefined && (obj.iDData = message.iDData ? IDData.toJSON(message.iDData) : undefined);
    message.stringData !== undefined && (obj.stringData = message.stringData ? StringData.toJSON(message.stringData) : undefined);
    message.numberData !== undefined && (obj.numberData = message.numberData ? NumberData.toJSON(message.numberData) : undefined);
    message.listData !== undefined && (obj.listData = message.listData ? ListData.toJSON(message.listData) : undefined);
    return obj;
  },

  fromPartial(object: Partial<AnyData>): AnyData {
    const message = createBaseAnyData();
    message.accAddressData = object.accAddressData !== undefined && object.accAddressData !== null ? AccAddressData.fromPartial(object.accAddressData) : undefined;
    message.booleanData = object.booleanData !== undefined && object.booleanData !== null ? BooleanData.fromPartial(object.booleanData) : undefined;
    message.decData = object.decData !== undefined && object.decData !== null ? DecData.fromPartial(object.decData) : undefined;
    message.heightData = object.heightData !== undefined && object.heightData !== null ? HeightData.fromPartial(object.heightData) : undefined;
    message.iDData = object.iDData !== undefined && object.iDData !== null ? IDData.fromPartial(object.iDData) : undefined;
    message.stringData = object.stringData !== undefined && object.stringData !== null ? StringData.fromPartial(object.stringData) : undefined;
    message.numberData = object.numberData !== undefined && object.numberData !== null ? NumberData.fromPartial(object.numberData) : undefined;
    message.listData = object.listData !== undefined && object.listData !== null ? ListData.fromPartial(object.listData) : undefined;
    return message;
  }

};

function createBaseListData(): ListData {
  return {
    dataList: []
  };
}

export const ListData = {
  encode(message: ListData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dataList) {
      AnyData.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.dataList.push(AnyData.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListData {
    return {
      dataList: Array.isArray(object?.dataList) ? object.dataList.map((e: any) => AnyData.fromJSON(e)) : []
    };
  },

  toJSON(message: ListData): unknown {
    const obj: any = {};

    if (message.dataList) {
      obj.dataList = message.dataList.map(e => e ? AnyData.toJSON(e) : undefined);
    } else {
      obj.dataList = [];
    }

    return obj;
  },

  fromPartial(object: Partial<ListData>): ListData {
    const message = createBaseListData();
    message.dataList = object.dataList?.map(e => AnyData.fromPartial(e)) || [];
    return message;
  }

};