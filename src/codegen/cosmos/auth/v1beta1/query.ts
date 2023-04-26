import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsAmino, ParamsSDKType } from "./auth";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryAccountsRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest";
  value: Uint8Array;
}
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAccountsRequestAminoMsg {
  type: "cosmos-sdk/QueryAccountsRequest";
  value: QueryAccountsRequestAmino;
}
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponse {
  /** accounts are the existing accounts */
  accounts: Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface QueryAccountsResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse";
  value: Uint8Array;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponseAmino {
  /** accounts are the existing accounts */
  accounts: AnyAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAccountsResponseAminoMsg {
  type: "cosmos-sdk/QueryAccountsResponse";
  value: QueryAccountsResponseAmino;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponseSDKType {
  accounts: AnySDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
  /** address defines the address to query for. */
  address: string;
}
export interface QueryAccountRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest";
  value: Uint8Array;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestAmino {
  /** address defines the address to query for. */
  address: string;
}
export interface QueryAccountRequestAminoMsg {
  type: "cosmos-sdk/QueryAccountRequest";
  value: QueryAccountRequestAmino;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestSDKType {
  address: string;
}
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequest {}
export interface QueryModuleAccountsRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest";
  value: Uint8Array;
}
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequestAmino {}
export interface QueryModuleAccountsRequestAminoMsg {
  type: "cosmos-sdk/QueryModuleAccountsRequest";
  value: QueryModuleAccountsRequestAmino;
}
/** QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
  /** account defines the account of the corresponding address. */
  account?: Any;
}
export interface QueryAccountResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse";
  value: Uint8Array;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseAmino {
  /** account defines the account of the corresponding address. */
  account?: AnyAmino;
}
export interface QueryAccountResponseAminoMsg {
  type: "cosmos-sdk/QueryAccountResponse";
  value: QueryAccountResponseAmino;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseSDKType {
  account?: AnySDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponse {
  accounts: Any[];
}
export interface QueryModuleAccountsResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse";
  value: Uint8Array;
}
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponseAmino {
  accounts: AnyAmino[];
}
export interface QueryModuleAccountsResponseAminoMsg {
  type: "cosmos-sdk/QueryModuleAccountsResponse";
  value: QueryModuleAccountsResponseAmino;
}
/** QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method. */
export interface QueryModuleAccountsResponseSDKType {
  accounts: AnySDKType[];
}
/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */
export interface Bech32PrefixRequest {}
export interface Bech32PrefixRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest";
  value: Uint8Array;
}
/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */
export interface Bech32PrefixRequestAmino {}
export interface Bech32PrefixRequestAminoMsg {
  type: "cosmos-sdk/Bech32PrefixRequest";
  value: Bech32PrefixRequestAmino;
}
/** Bech32PrefixRequest is the request type for Bech32Prefix rpc method */
export interface Bech32PrefixRequestSDKType {}
/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */
export interface Bech32PrefixResponse {
  bech32Prefix: string;
}
export interface Bech32PrefixResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse";
  value: Uint8Array;
}
/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */
export interface Bech32PrefixResponseAmino {
  bech32_prefix: string;
}
export interface Bech32PrefixResponseAminoMsg {
  type: "cosmos-sdk/Bech32PrefixResponse";
  value: Bech32PrefixResponseAmino;
}
/** Bech32PrefixResponse is the response type for Bech32Prefix rpc method */
export interface Bech32PrefixResponseSDKType {
  bech32_prefix: string;
}
/** AddressBytesToStringRequest is the request type for AddressString rpc method */
export interface AddressBytesToStringRequest {
  addressBytes: Uint8Array;
}
export interface AddressBytesToStringRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest";
  value: Uint8Array;
}
/** AddressBytesToStringRequest is the request type for AddressString rpc method */
export interface AddressBytesToStringRequestAmino {
  address_bytes: Uint8Array;
}
export interface AddressBytesToStringRequestAminoMsg {
  type: "cosmos-sdk/AddressBytesToStringRequest";
  value: AddressBytesToStringRequestAmino;
}
/** AddressBytesToStringRequest is the request type for AddressString rpc method */
export interface AddressBytesToStringRequestSDKType {
  address_bytes: Uint8Array;
}
/** AddressBytesToStringResponse is the response type for AddressString rpc method */
export interface AddressBytesToStringResponse {
  addressString: string;
}
export interface AddressBytesToStringResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse";
  value: Uint8Array;
}
/** AddressBytesToStringResponse is the response type for AddressString rpc method */
export interface AddressBytesToStringResponseAmino {
  address_string: string;
}
export interface AddressBytesToStringResponseAminoMsg {
  type: "cosmos-sdk/AddressBytesToStringResponse";
  value: AddressBytesToStringResponseAmino;
}
/** AddressBytesToStringResponse is the response type for AddressString rpc method */
export interface AddressBytesToStringResponseSDKType {
  address_string: string;
}
/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */
export interface AddressStringToBytesRequest {
  addressString: string;
}
export interface AddressStringToBytesRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest";
  value: Uint8Array;
}
/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */
export interface AddressStringToBytesRequestAmino {
  address_string: string;
}
export interface AddressStringToBytesRequestAminoMsg {
  type: "cosmos-sdk/AddressStringToBytesRequest";
  value: AddressStringToBytesRequestAmino;
}
/** AddressStringToBytesRequest is the request type for AccountBytes rpc method */
export interface AddressStringToBytesRequestSDKType {
  address_string: string;
}
/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */
export interface AddressStringToBytesResponse {
  addressBytes: Uint8Array;
}
export interface AddressStringToBytesResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse";
  value: Uint8Array;
}
/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */
export interface AddressStringToBytesResponseAmino {
  address_bytes: Uint8Array;
}
export interface AddressStringToBytesResponseAminoMsg {
  type: "cosmos-sdk/AddressStringToBytesResponse";
  value: AddressStringToBytesResponseAmino;
}
/** AddressStringToBytesResponse is the response type for AddressBytes rpc method */
export interface AddressStringToBytesResponseSDKType {
  address_bytes: Uint8Array;
}
function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {
    pagination: undefined
  };
}
export const QueryAccountsRequest = {
  encode(message: QueryAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAccountsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAccountsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountsRequestAmino): QueryAccountsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAccountsRequest): QueryAccountsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountsRequestAminoMsg): QueryAccountsRequest {
    return QueryAccountsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountsRequest): QueryAccountsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountsRequest",
      value: QueryAccountsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAccountsRequestProtoMsg): QueryAccountsRequest {
    return QueryAccountsRequest.decode(message.value);
  },
  toProto(message: QueryAccountsRequest): Uint8Array {
    return QueryAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsRequest): QueryAccountsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
      value: QueryAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return {
    accounts: [],
    pagination: undefined
  };
}
export const QueryAccountsResponse = {
  encode(message: QueryAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAccountsResponse>): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => Any.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountsResponseAmino): QueryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Any.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAccountsResponse): QueryAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountsResponseAminoMsg): QueryAccountsResponse {
    return QueryAccountsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountsResponse): QueryAccountsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountsResponse",
      value: QueryAccountsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAccountsResponseProtoMsg): QueryAccountsResponse {
    return QueryAccountsResponse.decode(message.value);
  },
  toProto(message: QueryAccountsResponse): Uint8Array {
    return QueryAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsResponse): QueryAccountsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
      value: QueryAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountRequest(): QueryAccountRequest {
  return {
    address: ""
  };
}
export const QueryAccountRequest = {
  encode(message: QueryAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAccountRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryAccountRequest>): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAccountRequestAmino): QueryAccountRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryAccountRequest): QueryAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountRequestAminoMsg): QueryAccountRequest {
    return QueryAccountRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountRequest): QueryAccountRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountRequest",
      value: QueryAccountRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAccountRequestProtoMsg): QueryAccountRequest {
    return QueryAccountRequest.decode(message.value);
  },
  toProto(message: QueryAccountRequest): Uint8Array {
    return QueryAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountRequest): QueryAccountRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
      value: QueryAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleAccountsRequest(): QueryModuleAccountsRequest {
  return {};
}
export const QueryModuleAccountsRequest = {
  encode(_: QueryModuleAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryModuleAccountsRequest {
    return {};
  },
  toJSON(_: QueryModuleAccountsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryModuleAccountsRequest>): QueryModuleAccountsRequest {
    const message = createBaseQueryModuleAccountsRequest();
    return message;
  },
  fromAmino(_: QueryModuleAccountsRequestAmino): QueryModuleAccountsRequest {
    return {};
  },
  toAmino(_: QueryModuleAccountsRequest): QueryModuleAccountsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleAccountsRequestAminoMsg): QueryModuleAccountsRequest {
    return QueryModuleAccountsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryModuleAccountsRequest): QueryModuleAccountsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryModuleAccountsRequest",
      value: QueryModuleAccountsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryModuleAccountsRequestProtoMsg): QueryModuleAccountsRequest {
    return QueryModuleAccountsRequest.decode(message.value);
  },
  toProto(message: QueryModuleAccountsRequest): Uint8Array {
    return QueryModuleAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountsRequest): QueryModuleAccountsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
      value: QueryModuleAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAccountResponse(): QueryAccountResponse {
  return {
    account: undefined
  };
}
export const QueryAccountResponse = {
  encode(message: QueryAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAccountResponse {
    return {
      account: isSet(object.account) ? Any.fromJSON(object.account) : undefined
    };
  },
  toJSON(message: QueryAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account ? Any.toJSON(message.account) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAccountResponse>): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountResponseAmino): QueryAccountResponse {
    return {
      account: object?.account ? Any.fromAmino(object.account) : undefined
    };
  },
  toAmino(message: QueryAccountResponse): QueryAccountResponseAmino {
    const obj: any = {};
    obj.account = message.account ? Any.toAmino(message.account) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountResponseAminoMsg): QueryAccountResponse {
    return QueryAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountResponse): QueryAccountResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountResponse",
      value: QueryAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAccountResponseProtoMsg): QueryAccountResponse {
    return QueryAccountResponse.decode(message.value);
  },
  toProto(message: QueryAccountResponse): Uint8Array {
    return QueryAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountResponse): QueryAccountResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
      value: QueryAccountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryModuleAccountsResponse(): QueryModuleAccountsResponse {
  return {
    accounts: []
  };
}
export const QueryModuleAccountsResponse = {
  encode(message: QueryModuleAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryModuleAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Any.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryModuleAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryModuleAccountsResponse>): QueryModuleAccountsResponse {
    const message = createBaseQueryModuleAccountsResponse();
    message.accounts = object.accounts?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryModuleAccountsResponseAmino): QueryModuleAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Any.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryModuleAccountsResponseAminoMsg): QueryModuleAccountsResponse {
    return QueryModuleAccountsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryModuleAccountsResponse",
      value: QueryModuleAccountsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryModuleAccountsResponseProtoMsg): QueryModuleAccountsResponse {
    return QueryModuleAccountsResponse.decode(message.value);
  },
  toProto(message: QueryModuleAccountsResponse): Uint8Array {
    return QueryModuleAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
      value: QueryModuleAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseBech32PrefixRequest(): Bech32PrefixRequest {
  return {};
}
export const Bech32PrefixRequest = {
  encode(_: Bech32PrefixRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Bech32PrefixRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): Bech32PrefixRequest {
    return {};
  },
  toJSON(_: Bech32PrefixRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<Bech32PrefixRequest>): Bech32PrefixRequest {
    const message = createBaseBech32PrefixRequest();
    return message;
  },
  fromAmino(_: Bech32PrefixRequestAmino): Bech32PrefixRequest {
    return {};
  },
  toAmino(_: Bech32PrefixRequest): Bech32PrefixRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: Bech32PrefixRequestAminoMsg): Bech32PrefixRequest {
    return Bech32PrefixRequest.fromAmino(object.value);
  },
  toAminoMsg(message: Bech32PrefixRequest): Bech32PrefixRequestAminoMsg {
    return {
      type: "cosmos-sdk/Bech32PrefixRequest",
      value: Bech32PrefixRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: Bech32PrefixRequestProtoMsg): Bech32PrefixRequest {
    return Bech32PrefixRequest.decode(message.value);
  },
  toProto(message: Bech32PrefixRequest): Uint8Array {
    return Bech32PrefixRequest.encode(message).finish();
  },
  toProtoMsg(message: Bech32PrefixRequest): Bech32PrefixRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
      value: Bech32PrefixRequest.encode(message).finish()
    };
  }
};
function createBaseBech32PrefixResponse(): Bech32PrefixResponse {
  return {
    bech32Prefix: ""
  };
}
export const Bech32PrefixResponse = {
  encode(message: Bech32PrefixResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Bech32PrefixResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32Prefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Bech32PrefixResponse {
    return {
      bech32Prefix: isSet(object.bech32Prefix) ? String(object.bech32Prefix) : ""
    };
  },
  toJSON(message: Bech32PrefixResponse): unknown {
    const obj: any = {};
    message.bech32Prefix !== undefined && (obj.bech32Prefix = message.bech32Prefix);
    return obj;
  },
  fromPartial(object: Partial<Bech32PrefixResponse>): Bech32PrefixResponse {
    const message = createBaseBech32PrefixResponse();
    message.bech32Prefix = object.bech32Prefix ?? "";
    return message;
  },
  fromAmino(object: Bech32PrefixResponseAmino): Bech32PrefixResponse {
    return {
      bech32Prefix: object.bech32_prefix
    };
  },
  toAmino(message: Bech32PrefixResponse): Bech32PrefixResponseAmino {
    const obj: any = {};
    obj.bech32_prefix = message.bech32Prefix;
    return obj;
  },
  fromAminoMsg(object: Bech32PrefixResponseAminoMsg): Bech32PrefixResponse {
    return Bech32PrefixResponse.fromAmino(object.value);
  },
  toAminoMsg(message: Bech32PrefixResponse): Bech32PrefixResponseAminoMsg {
    return {
      type: "cosmos-sdk/Bech32PrefixResponse",
      value: Bech32PrefixResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: Bech32PrefixResponseProtoMsg): Bech32PrefixResponse {
    return Bech32PrefixResponse.decode(message.value);
  },
  toProto(message: Bech32PrefixResponse): Uint8Array {
    return Bech32PrefixResponse.encode(message).finish();
  },
  toProtoMsg(message: Bech32PrefixResponse): Bech32PrefixResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
      value: Bech32PrefixResponse.encode(message).finish()
    };
  }
};
function createBaseAddressBytesToStringRequest(): AddressBytesToStringRequest {
  return {
    addressBytes: new Uint8Array()
  };
}
export const AddressBytesToStringRequest = {
  encode(message: AddressBytesToStringRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AddressBytesToStringRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AddressBytesToStringRequest {
    return {
      addressBytes: isSet(object.addressBytes) ? bytesFromBase64(object.addressBytes) : new Uint8Array()
    };
  },
  toJSON(message: AddressBytesToStringRequest): unknown {
    const obj: any = {};
    message.addressBytes !== undefined && (obj.addressBytes = base64FromBytes(message.addressBytes !== undefined ? message.addressBytes : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<AddressBytesToStringRequest>): AddressBytesToStringRequest {
    const message = createBaseAddressBytesToStringRequest();
    message.addressBytes = object.addressBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AddressBytesToStringRequestAmino): AddressBytesToStringRequest {
    return {
      addressBytes: object.address_bytes
    };
  },
  toAmino(message: AddressBytesToStringRequest): AddressBytesToStringRequestAmino {
    const obj: any = {};
    obj.address_bytes = message.addressBytes;
    return obj;
  },
  fromAminoMsg(object: AddressBytesToStringRequestAminoMsg): AddressBytesToStringRequest {
    return AddressBytesToStringRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AddressBytesToStringRequest): AddressBytesToStringRequestAminoMsg {
    return {
      type: "cosmos-sdk/AddressBytesToStringRequest",
      value: AddressBytesToStringRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: AddressBytesToStringRequestProtoMsg): AddressBytesToStringRequest {
    return AddressBytesToStringRequest.decode(message.value);
  },
  toProto(message: AddressBytesToStringRequest): Uint8Array {
    return AddressBytesToStringRequest.encode(message).finish();
  },
  toProtoMsg(message: AddressBytesToStringRequest): AddressBytesToStringRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
      value: AddressBytesToStringRequest.encode(message).finish()
    };
  }
};
function createBaseAddressBytesToStringResponse(): AddressBytesToStringResponse {
  return {
    addressString: ""
  };
}
export const AddressBytesToStringResponse = {
  encode(message: AddressBytesToStringResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AddressBytesToStringResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AddressBytesToStringResponse {
    return {
      addressString: isSet(object.addressString) ? String(object.addressString) : ""
    };
  },
  toJSON(message: AddressBytesToStringResponse): unknown {
    const obj: any = {};
    message.addressString !== undefined && (obj.addressString = message.addressString);
    return obj;
  },
  fromPartial(object: Partial<AddressBytesToStringResponse>): AddressBytesToStringResponse {
    const message = createBaseAddressBytesToStringResponse();
    message.addressString = object.addressString ?? "";
    return message;
  },
  fromAmino(object: AddressBytesToStringResponseAmino): AddressBytesToStringResponse {
    return {
      addressString: object.address_string
    };
  },
  toAmino(message: AddressBytesToStringResponse): AddressBytesToStringResponseAmino {
    const obj: any = {};
    obj.address_string = message.addressString;
    return obj;
  },
  fromAminoMsg(object: AddressBytesToStringResponseAminoMsg): AddressBytesToStringResponse {
    return AddressBytesToStringResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AddressBytesToStringResponse): AddressBytesToStringResponseAminoMsg {
    return {
      type: "cosmos-sdk/AddressBytesToStringResponse",
      value: AddressBytesToStringResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AddressBytesToStringResponseProtoMsg): AddressBytesToStringResponse {
    return AddressBytesToStringResponse.decode(message.value);
  },
  toProto(message: AddressBytesToStringResponse): Uint8Array {
    return AddressBytesToStringResponse.encode(message).finish();
  },
  toProtoMsg(message: AddressBytesToStringResponse): AddressBytesToStringResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
      value: AddressBytesToStringResponse.encode(message).finish()
    };
  }
};
function createBaseAddressStringToBytesRequest(): AddressStringToBytesRequest {
  return {
    addressString: ""
  };
}
export const AddressStringToBytesRequest = {
  encode(message: AddressStringToBytesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AddressStringToBytesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AddressStringToBytesRequest {
    return {
      addressString: isSet(object.addressString) ? String(object.addressString) : ""
    };
  },
  toJSON(message: AddressStringToBytesRequest): unknown {
    const obj: any = {};
    message.addressString !== undefined && (obj.addressString = message.addressString);
    return obj;
  },
  fromPartial(object: Partial<AddressStringToBytesRequest>): AddressStringToBytesRequest {
    const message = createBaseAddressStringToBytesRequest();
    message.addressString = object.addressString ?? "";
    return message;
  },
  fromAmino(object: AddressStringToBytesRequestAmino): AddressStringToBytesRequest {
    return {
      addressString: object.address_string
    };
  },
  toAmino(message: AddressStringToBytesRequest): AddressStringToBytesRequestAmino {
    const obj: any = {};
    obj.address_string = message.addressString;
    return obj;
  },
  fromAminoMsg(object: AddressStringToBytesRequestAminoMsg): AddressStringToBytesRequest {
    return AddressStringToBytesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AddressStringToBytesRequest): AddressStringToBytesRequestAminoMsg {
    return {
      type: "cosmos-sdk/AddressStringToBytesRequest",
      value: AddressStringToBytesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: AddressStringToBytesRequestProtoMsg): AddressStringToBytesRequest {
    return AddressStringToBytesRequest.decode(message.value);
  },
  toProto(message: AddressStringToBytesRequest): Uint8Array {
    return AddressStringToBytesRequest.encode(message).finish();
  },
  toProtoMsg(message: AddressStringToBytesRequest): AddressStringToBytesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
      value: AddressStringToBytesRequest.encode(message).finish()
    };
  }
};
function createBaseAddressStringToBytesResponse(): AddressStringToBytesResponse {
  return {
    addressBytes: new Uint8Array()
  };
}
export const AddressStringToBytesResponse = {
  encode(message: AddressStringToBytesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AddressStringToBytesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AddressStringToBytesResponse {
    return {
      addressBytes: isSet(object.addressBytes) ? bytesFromBase64(object.addressBytes) : new Uint8Array()
    };
  },
  toJSON(message: AddressStringToBytesResponse): unknown {
    const obj: any = {};
    message.addressBytes !== undefined && (obj.addressBytes = base64FromBytes(message.addressBytes !== undefined ? message.addressBytes : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<AddressStringToBytesResponse>): AddressStringToBytesResponse {
    const message = createBaseAddressStringToBytesResponse();
    message.addressBytes = object.addressBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AddressStringToBytesResponseAmino): AddressStringToBytesResponse {
    return {
      addressBytes: object.address_bytes
    };
  },
  toAmino(message: AddressStringToBytesResponse): AddressStringToBytesResponseAmino {
    const obj: any = {};
    obj.address_bytes = message.addressBytes;
    return obj;
  },
  fromAminoMsg(object: AddressStringToBytesResponseAminoMsg): AddressStringToBytesResponse {
    return AddressStringToBytesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AddressStringToBytesResponse): AddressStringToBytesResponseAminoMsg {
    return {
      type: "cosmos-sdk/AddressStringToBytesResponse",
      value: AddressStringToBytesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AddressStringToBytesResponseProtoMsg): AddressStringToBytesResponse {
    return AddressStringToBytesResponse.decode(message.value);
  },
  toProto(message: AddressStringToBytesResponse): Uint8Array {
    return AddressStringToBytesResponse.encode(message).finish();
  },
  toProtoMsg(message: AddressStringToBytesResponse): AddressStringToBytesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
      value: AddressStringToBytesResponse.encode(message).finish()
    };
  }
};