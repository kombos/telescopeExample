import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Valset, ValsetAmino, ValsetSDKType, PendingIbcAutoForward, PendingIbcAutoForwardAmino, PendingIbcAutoForwardSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmAmino, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchAmino, MsgConfirmBatchSDKType, MsgConfirmLogicCall, MsgConfirmLogicCallAmino, MsgConfirmLogicCallSDKType } from "./msgs";
import { BatchFees, BatchFeesAmino, BatchFeesSDKType } from "./pool";
import { OutgoingTxBatch, OutgoingTxBatchAmino, OutgoingTxBatchSDKType, OutgoingLogicCall, OutgoingLogicCallAmino, OutgoingLogicCallSDKType, OutgoingTransferTx, OutgoingTransferTxAmino, OutgoingTransferTxSDKType } from "./batch";
import { Attestation, AttestationAmino, AttestationSDKType } from "./attestation";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/gravity.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/gravity.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
  params?: ParamsSDKType;
}
export interface QueryCurrentValsetRequest {}
export interface QueryCurrentValsetRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryCurrentValsetRequest";
  value: Uint8Array;
}
export interface QueryCurrentValsetRequestAmino {}
export interface QueryCurrentValsetRequestAminoMsg {
  type: "/gravity.v1.QueryCurrentValsetRequest";
  value: QueryCurrentValsetRequestAmino;
}
export interface QueryCurrentValsetRequestSDKType {}
export interface QueryCurrentValsetResponse {
  valset?: Valset;
}
export interface QueryCurrentValsetResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryCurrentValsetResponse";
  value: Uint8Array;
}
export interface QueryCurrentValsetResponseAmino {
  valset?: ValsetAmino;
}
export interface QueryCurrentValsetResponseAminoMsg {
  type: "/gravity.v1.QueryCurrentValsetResponse";
  value: QueryCurrentValsetResponseAmino;
}
export interface QueryCurrentValsetResponseSDKType {
  valset?: ValsetSDKType;
}
export interface QueryValsetRequestRequest {
  nonce: Long;
}
export interface QueryValsetRequestRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryValsetRequestRequest";
  value: Uint8Array;
}
export interface QueryValsetRequestRequestAmino {
  nonce: string;
}
export interface QueryValsetRequestRequestAminoMsg {
  type: "/gravity.v1.QueryValsetRequestRequest";
  value: QueryValsetRequestRequestAmino;
}
export interface QueryValsetRequestRequestSDKType {
  nonce: Long;
}
export interface QueryValsetRequestResponse {
  valset?: Valset;
}
export interface QueryValsetRequestResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryValsetRequestResponse";
  value: Uint8Array;
}
export interface QueryValsetRequestResponseAmino {
  valset?: ValsetAmino;
}
export interface QueryValsetRequestResponseAminoMsg {
  type: "/gravity.v1.QueryValsetRequestResponse";
  value: QueryValsetRequestResponseAmino;
}
export interface QueryValsetRequestResponseSDKType {
  valset?: ValsetSDKType;
}
export interface QueryValsetConfirmRequest {
  nonce: Long;
  address: string;
}
export interface QueryValsetConfirmRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryValsetConfirmRequest";
  value: Uint8Array;
}
export interface QueryValsetConfirmRequestAmino {
  nonce: string;
  address: string;
}
export interface QueryValsetConfirmRequestAminoMsg {
  type: "/gravity.v1.QueryValsetConfirmRequest";
  value: QueryValsetConfirmRequestAmino;
}
export interface QueryValsetConfirmRequestSDKType {
  nonce: Long;
  address: string;
}
export interface QueryValsetConfirmResponse {
  confirm?: MsgValsetConfirm;
}
export interface QueryValsetConfirmResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryValsetConfirmResponse";
  value: Uint8Array;
}
export interface QueryValsetConfirmResponseAmino {
  confirm?: MsgValsetConfirmAmino;
}
export interface QueryValsetConfirmResponseAminoMsg {
  type: "/gravity.v1.QueryValsetConfirmResponse";
  value: QueryValsetConfirmResponseAmino;
}
export interface QueryValsetConfirmResponseSDKType {
  confirm?: MsgValsetConfirmSDKType;
}
export interface QueryValsetConfirmsByNonceRequest {
  nonce: Long;
}
export interface QueryValsetConfirmsByNonceRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryValsetConfirmsByNonceRequest";
  value: Uint8Array;
}
export interface QueryValsetConfirmsByNonceRequestAmino {
  nonce: string;
}
export interface QueryValsetConfirmsByNonceRequestAminoMsg {
  type: "/gravity.v1.QueryValsetConfirmsByNonceRequest";
  value: QueryValsetConfirmsByNonceRequestAmino;
}
export interface QueryValsetConfirmsByNonceRequestSDKType {
  nonce: Long;
}
export interface QueryValsetConfirmsByNonceResponse {
  confirms: MsgValsetConfirm[];
}
export interface QueryValsetConfirmsByNonceResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryValsetConfirmsByNonceResponse";
  value: Uint8Array;
}
export interface QueryValsetConfirmsByNonceResponseAmino {
  confirms: MsgValsetConfirmAmino[];
}
export interface QueryValsetConfirmsByNonceResponseAminoMsg {
  type: "/gravity.v1.QueryValsetConfirmsByNonceResponse";
  value: QueryValsetConfirmsByNonceResponseAmino;
}
export interface QueryValsetConfirmsByNonceResponseSDKType {
  confirms: MsgValsetConfirmSDKType[];
}
export interface QueryLastValsetRequestsRequest {}
export interface QueryLastValsetRequestsRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryLastValsetRequestsRequest";
  value: Uint8Array;
}
export interface QueryLastValsetRequestsRequestAmino {}
export interface QueryLastValsetRequestsRequestAminoMsg {
  type: "/gravity.v1.QueryLastValsetRequestsRequest";
  value: QueryLastValsetRequestsRequestAmino;
}
export interface QueryLastValsetRequestsRequestSDKType {}
export interface QueryLastValsetRequestsResponse {
  valsets: Valset[];
}
export interface QueryLastValsetRequestsResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryLastValsetRequestsResponse";
  value: Uint8Array;
}
export interface QueryLastValsetRequestsResponseAmino {
  valsets: ValsetAmino[];
}
export interface QueryLastValsetRequestsResponseAminoMsg {
  type: "/gravity.v1.QueryLastValsetRequestsResponse";
  value: QueryLastValsetRequestsResponseAmino;
}
export interface QueryLastValsetRequestsResponseSDKType {
  valsets: ValsetSDKType[];
}
export interface QueryLastPendingValsetRequestByAddrRequest {
  address: string;
}
export interface QueryLastPendingValsetRequestByAddrRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryLastPendingValsetRequestByAddrRequest";
  value: Uint8Array;
}
export interface QueryLastPendingValsetRequestByAddrRequestAmino {
  address: string;
}
export interface QueryLastPendingValsetRequestByAddrRequestAminoMsg {
  type: "/gravity.v1.QueryLastPendingValsetRequestByAddrRequest";
  value: QueryLastPendingValsetRequestByAddrRequestAmino;
}
export interface QueryLastPendingValsetRequestByAddrRequestSDKType {
  address: string;
}
export interface QueryLastPendingValsetRequestByAddrResponse {
  valsets: Valset[];
}
export interface QueryLastPendingValsetRequestByAddrResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryLastPendingValsetRequestByAddrResponse";
  value: Uint8Array;
}
export interface QueryLastPendingValsetRequestByAddrResponseAmino {
  valsets: ValsetAmino[];
}
export interface QueryLastPendingValsetRequestByAddrResponseAminoMsg {
  type: "/gravity.v1.QueryLastPendingValsetRequestByAddrResponse";
  value: QueryLastPendingValsetRequestByAddrResponseAmino;
}
export interface QueryLastPendingValsetRequestByAddrResponseSDKType {
  valsets: ValsetSDKType[];
}
export interface QueryBatchFeeRequest {}
export interface QueryBatchFeeRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryBatchFeeRequest";
  value: Uint8Array;
}
export interface QueryBatchFeeRequestAmino {}
export interface QueryBatchFeeRequestAminoMsg {
  type: "/gravity.v1.QueryBatchFeeRequest";
  value: QueryBatchFeeRequestAmino;
}
export interface QueryBatchFeeRequestSDKType {}
export interface QueryBatchFeeResponse {
  batchFees: BatchFees[];
}
export interface QueryBatchFeeResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryBatchFeeResponse";
  value: Uint8Array;
}
export interface QueryBatchFeeResponseAmino {
  batch_fees: BatchFeesAmino[];
}
export interface QueryBatchFeeResponseAminoMsg {
  type: "/gravity.v1.QueryBatchFeeResponse";
  value: QueryBatchFeeResponseAmino;
}
export interface QueryBatchFeeResponseSDKType {
  batch_fees: BatchFeesSDKType[];
}
export interface QueryLastPendingBatchRequestByAddrRequest {
  address: string;
}
export interface QueryLastPendingBatchRequestByAddrRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryLastPendingBatchRequestByAddrRequest";
  value: Uint8Array;
}
export interface QueryLastPendingBatchRequestByAddrRequestAmino {
  address: string;
}
export interface QueryLastPendingBatchRequestByAddrRequestAminoMsg {
  type: "/gravity.v1.QueryLastPendingBatchRequestByAddrRequest";
  value: QueryLastPendingBatchRequestByAddrRequestAmino;
}
export interface QueryLastPendingBatchRequestByAddrRequestSDKType {
  address: string;
}
export interface QueryLastPendingBatchRequestByAddrResponse {
  batch: OutgoingTxBatch[];
}
export interface QueryLastPendingBatchRequestByAddrResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryLastPendingBatchRequestByAddrResponse";
  value: Uint8Array;
}
export interface QueryLastPendingBatchRequestByAddrResponseAmino {
  batch: OutgoingTxBatchAmino[];
}
export interface QueryLastPendingBatchRequestByAddrResponseAminoMsg {
  type: "/gravity.v1.QueryLastPendingBatchRequestByAddrResponse";
  value: QueryLastPendingBatchRequestByAddrResponseAmino;
}
export interface QueryLastPendingBatchRequestByAddrResponseSDKType {
  batch: OutgoingTxBatchSDKType[];
}
export interface QueryLastPendingLogicCallByAddrRequest {
  address: string;
}
export interface QueryLastPendingLogicCallByAddrRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryLastPendingLogicCallByAddrRequest";
  value: Uint8Array;
}
export interface QueryLastPendingLogicCallByAddrRequestAmino {
  address: string;
}
export interface QueryLastPendingLogicCallByAddrRequestAminoMsg {
  type: "/gravity.v1.QueryLastPendingLogicCallByAddrRequest";
  value: QueryLastPendingLogicCallByAddrRequestAmino;
}
export interface QueryLastPendingLogicCallByAddrRequestSDKType {
  address: string;
}
export interface QueryLastPendingLogicCallByAddrResponse {
  call: OutgoingLogicCall[];
}
export interface QueryLastPendingLogicCallByAddrResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryLastPendingLogicCallByAddrResponse";
  value: Uint8Array;
}
export interface QueryLastPendingLogicCallByAddrResponseAmino {
  call: OutgoingLogicCallAmino[];
}
export interface QueryLastPendingLogicCallByAddrResponseAminoMsg {
  type: "/gravity.v1.QueryLastPendingLogicCallByAddrResponse";
  value: QueryLastPendingLogicCallByAddrResponseAmino;
}
export interface QueryLastPendingLogicCallByAddrResponseSDKType {
  call: OutgoingLogicCallSDKType[];
}
export interface QueryOutgoingTxBatchesRequest {}
export interface QueryOutgoingTxBatchesRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryOutgoingTxBatchesRequest";
  value: Uint8Array;
}
export interface QueryOutgoingTxBatchesRequestAmino {}
export interface QueryOutgoingTxBatchesRequestAminoMsg {
  type: "/gravity.v1.QueryOutgoingTxBatchesRequest";
  value: QueryOutgoingTxBatchesRequestAmino;
}
export interface QueryOutgoingTxBatchesRequestSDKType {}
export interface QueryOutgoingTxBatchesResponse {
  batches: OutgoingTxBatch[];
}
export interface QueryOutgoingTxBatchesResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryOutgoingTxBatchesResponse";
  value: Uint8Array;
}
export interface QueryOutgoingTxBatchesResponseAmino {
  batches: OutgoingTxBatchAmino[];
}
export interface QueryOutgoingTxBatchesResponseAminoMsg {
  type: "/gravity.v1.QueryOutgoingTxBatchesResponse";
  value: QueryOutgoingTxBatchesResponseAmino;
}
export interface QueryOutgoingTxBatchesResponseSDKType {
  batches: OutgoingTxBatchSDKType[];
}
export interface QueryOutgoingLogicCallsRequest {}
export interface QueryOutgoingLogicCallsRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryOutgoingLogicCallsRequest";
  value: Uint8Array;
}
export interface QueryOutgoingLogicCallsRequestAmino {}
export interface QueryOutgoingLogicCallsRequestAminoMsg {
  type: "/gravity.v1.QueryOutgoingLogicCallsRequest";
  value: QueryOutgoingLogicCallsRequestAmino;
}
export interface QueryOutgoingLogicCallsRequestSDKType {}
export interface QueryOutgoingLogicCallsResponse {
  calls: OutgoingLogicCall[];
}
export interface QueryOutgoingLogicCallsResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryOutgoingLogicCallsResponse";
  value: Uint8Array;
}
export interface QueryOutgoingLogicCallsResponseAmino {
  calls: OutgoingLogicCallAmino[];
}
export interface QueryOutgoingLogicCallsResponseAminoMsg {
  type: "/gravity.v1.QueryOutgoingLogicCallsResponse";
  value: QueryOutgoingLogicCallsResponseAmino;
}
export interface QueryOutgoingLogicCallsResponseSDKType {
  calls: OutgoingLogicCallSDKType[];
}
export interface QueryBatchRequestByNonceRequest {
  nonce: Long;
  contractAddress: string;
}
export interface QueryBatchRequestByNonceRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryBatchRequestByNonceRequest";
  value: Uint8Array;
}
export interface QueryBatchRequestByNonceRequestAmino {
  nonce: string;
  contract_address: string;
}
export interface QueryBatchRequestByNonceRequestAminoMsg {
  type: "/gravity.v1.QueryBatchRequestByNonceRequest";
  value: QueryBatchRequestByNonceRequestAmino;
}
export interface QueryBatchRequestByNonceRequestSDKType {
  nonce: Long;
  contract_address: string;
}
export interface QueryBatchRequestByNonceResponse {
  batch?: OutgoingTxBatch;
}
export interface QueryBatchRequestByNonceResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryBatchRequestByNonceResponse";
  value: Uint8Array;
}
export interface QueryBatchRequestByNonceResponseAmino {
  batch?: OutgoingTxBatchAmino;
}
export interface QueryBatchRequestByNonceResponseAminoMsg {
  type: "/gravity.v1.QueryBatchRequestByNonceResponse";
  value: QueryBatchRequestByNonceResponseAmino;
}
export interface QueryBatchRequestByNonceResponseSDKType {
  batch?: OutgoingTxBatchSDKType;
}
export interface QueryBatchConfirmsRequest {
  nonce: Long;
  contractAddress: string;
}
export interface QueryBatchConfirmsRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryBatchConfirmsRequest";
  value: Uint8Array;
}
export interface QueryBatchConfirmsRequestAmino {
  nonce: string;
  contract_address: string;
}
export interface QueryBatchConfirmsRequestAminoMsg {
  type: "/gravity.v1.QueryBatchConfirmsRequest";
  value: QueryBatchConfirmsRequestAmino;
}
export interface QueryBatchConfirmsRequestSDKType {
  nonce: Long;
  contract_address: string;
}
export interface QueryBatchConfirmsResponse {
  confirms: MsgConfirmBatch[];
}
export interface QueryBatchConfirmsResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryBatchConfirmsResponse";
  value: Uint8Array;
}
export interface QueryBatchConfirmsResponseAmino {
  confirms: MsgConfirmBatchAmino[];
}
export interface QueryBatchConfirmsResponseAminoMsg {
  type: "/gravity.v1.QueryBatchConfirmsResponse";
  value: QueryBatchConfirmsResponseAmino;
}
export interface QueryBatchConfirmsResponseSDKType {
  confirms: MsgConfirmBatchSDKType[];
}
export interface QueryLogicConfirmsRequest {
  invalidationId: Uint8Array;
  invalidationNonce: Long;
}
export interface QueryLogicConfirmsRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryLogicConfirmsRequest";
  value: Uint8Array;
}
export interface QueryLogicConfirmsRequestAmino {
  invalidation_id: Uint8Array;
  invalidation_nonce: string;
}
export interface QueryLogicConfirmsRequestAminoMsg {
  type: "/gravity.v1.QueryLogicConfirmsRequest";
  value: QueryLogicConfirmsRequestAmino;
}
export interface QueryLogicConfirmsRequestSDKType {
  invalidation_id: Uint8Array;
  invalidation_nonce: Long;
}
export interface QueryLogicConfirmsResponse {
  confirms: MsgConfirmLogicCall[];
}
export interface QueryLogicConfirmsResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryLogicConfirmsResponse";
  value: Uint8Array;
}
export interface QueryLogicConfirmsResponseAmino {
  confirms: MsgConfirmLogicCallAmino[];
}
export interface QueryLogicConfirmsResponseAminoMsg {
  type: "/gravity.v1.QueryLogicConfirmsResponse";
  value: QueryLogicConfirmsResponseAmino;
}
export interface QueryLogicConfirmsResponseSDKType {
  confirms: MsgConfirmLogicCallSDKType[];
}
export interface QueryLastEventNonceByAddrRequest {
  address: string;
}
export interface QueryLastEventNonceByAddrRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryLastEventNonceByAddrRequest";
  value: Uint8Array;
}
export interface QueryLastEventNonceByAddrRequestAmino {
  address: string;
}
export interface QueryLastEventNonceByAddrRequestAminoMsg {
  type: "/gravity.v1.QueryLastEventNonceByAddrRequest";
  value: QueryLastEventNonceByAddrRequestAmino;
}
export interface QueryLastEventNonceByAddrRequestSDKType {
  address: string;
}
export interface QueryLastEventNonceByAddrResponse {
  eventNonce: Long;
}
export interface QueryLastEventNonceByAddrResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryLastEventNonceByAddrResponse";
  value: Uint8Array;
}
export interface QueryLastEventNonceByAddrResponseAmino {
  event_nonce: string;
}
export interface QueryLastEventNonceByAddrResponseAminoMsg {
  type: "/gravity.v1.QueryLastEventNonceByAddrResponse";
  value: QueryLastEventNonceByAddrResponseAmino;
}
export interface QueryLastEventNonceByAddrResponseSDKType {
  event_nonce: Long;
}
export interface QueryERC20ToDenomRequest {
  erc20: string;
}
export interface QueryERC20ToDenomRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryERC20ToDenomRequest";
  value: Uint8Array;
}
export interface QueryERC20ToDenomRequestAmino {
  erc20: string;
}
export interface QueryERC20ToDenomRequestAminoMsg {
  type: "/gravity.v1.QueryERC20ToDenomRequest";
  value: QueryERC20ToDenomRequestAmino;
}
export interface QueryERC20ToDenomRequestSDKType {
  erc20: string;
}
export interface QueryERC20ToDenomResponse {
  denom: string;
  cosmosOriginated: boolean;
}
export interface QueryERC20ToDenomResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryERC20ToDenomResponse";
  value: Uint8Array;
}
export interface QueryERC20ToDenomResponseAmino {
  denom: string;
  cosmos_originated: boolean;
}
export interface QueryERC20ToDenomResponseAminoMsg {
  type: "/gravity.v1.QueryERC20ToDenomResponse";
  value: QueryERC20ToDenomResponseAmino;
}
export interface QueryERC20ToDenomResponseSDKType {
  denom: string;
  cosmos_originated: boolean;
}
export interface QueryDenomToERC20Request {
  denom: string;
}
export interface QueryDenomToERC20RequestProtoMsg {
  typeUrl: "/gravity.v1.QueryDenomToERC20Request";
  value: Uint8Array;
}
export interface QueryDenomToERC20RequestAmino {
  denom: string;
}
export interface QueryDenomToERC20RequestAminoMsg {
  type: "/gravity.v1.QueryDenomToERC20Request";
  value: QueryDenomToERC20RequestAmino;
}
export interface QueryDenomToERC20RequestSDKType {
  denom: string;
}
export interface QueryDenomToERC20Response {
  erc20: string;
  cosmosOriginated: boolean;
}
export interface QueryDenomToERC20ResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryDenomToERC20Response";
  value: Uint8Array;
}
export interface QueryDenomToERC20ResponseAmino {
  erc20: string;
  cosmos_originated: boolean;
}
export interface QueryDenomToERC20ResponseAminoMsg {
  type: "/gravity.v1.QueryDenomToERC20Response";
  value: QueryDenomToERC20ResponseAmino;
}
export interface QueryDenomToERC20ResponseSDKType {
  erc20: string;
  cosmos_originated: boolean;
}
/**
 * QueryLastObservedEthBlockRequest defines the request for getting the height of the
 * last applied Ethereum Event on the bridge. This is expected to lag the actual
 * Ethereum block height significantly due to 1. Ethereum Finality and
 *  2. Consensus mirroring the state on Ethereum
 */
export interface QueryLastObservedEthBlockRequest {
  /**
   * indicates whether to search for store data using the old Gravity v1 key "LastObservedEthereumBlockHeightKey"
   * Note that queries before the Mercury upgrade at height 1282013 must set this to true
   */
  useV1Key: boolean;
}
export interface QueryLastObservedEthBlockRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryLastObservedEthBlockRequest";
  value: Uint8Array;
}
/**
 * QueryLastObservedEthBlockRequest defines the request for getting the height of the
 * last applied Ethereum Event on the bridge. This is expected to lag the actual
 * Ethereum block height significantly due to 1. Ethereum Finality and
 *  2. Consensus mirroring the state on Ethereum
 */
export interface QueryLastObservedEthBlockRequestAmino {
  /**
   * indicates whether to search for store data using the old Gravity v1 key "LastObservedEthereumBlockHeightKey"
   * Note that queries before the Mercury upgrade at height 1282013 must set this to true
   */
  use_v1_key: boolean;
}
export interface QueryLastObservedEthBlockRequestAminoMsg {
  type: "/gravity.v1.QueryLastObservedEthBlockRequest";
  value: QueryLastObservedEthBlockRequestAmino;
}
/**
 * QueryLastObservedEthBlockRequest defines the request for getting the height of the
 * last applied Ethereum Event on the bridge. This is expected to lag the actual
 * Ethereum block height significantly due to 1. Ethereum Finality and
 *  2. Consensus mirroring the state on Ethereum
 */
export interface QueryLastObservedEthBlockRequestSDKType {
  use_v1_key: boolean;
}
export interface QueryLastObservedEthBlockResponse {
  /**
   * a response of 0 indicates that no Ethereum events have been observed, and thus
   * the bridge is inactive
   */
  block: Long;
}
export interface QueryLastObservedEthBlockResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryLastObservedEthBlockResponse";
  value: Uint8Array;
}
export interface QueryLastObservedEthBlockResponseAmino {
  /**
   * a response of 0 indicates that no Ethereum events have been observed, and thus
   * the bridge is inactive
   */
  block: string;
}
export interface QueryLastObservedEthBlockResponseAminoMsg {
  type: "/gravity.v1.QueryLastObservedEthBlockResponse";
  value: QueryLastObservedEthBlockResponseAmino;
}
export interface QueryLastObservedEthBlockResponseSDKType {
  block: Long;
}
/**
 * QueryLastObservedEthNonceRequest defines the request for getting the event nonce
 * of the last applied Ethereum Event on the bridge.
 * Note that this is likely to lag the last executed event a little
 * due to 1. Ethereum Finality and 2. Consensus mirroring the Ethereum state
 */
export interface QueryLastObservedEthNonceRequest {
  /**
   * indicates whether to search for store data using the old Gravity v1 key "LastObservedEventNonceKey"
   * Note that queries before the Mercury upgrade at height 1282013 must set this to true
   */
  useV1Key: boolean;
}
export interface QueryLastObservedEthNonceRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryLastObservedEthNonceRequest";
  value: Uint8Array;
}
/**
 * QueryLastObservedEthNonceRequest defines the request for getting the event nonce
 * of the last applied Ethereum Event on the bridge.
 * Note that this is likely to lag the last executed event a little
 * due to 1. Ethereum Finality and 2. Consensus mirroring the Ethereum state
 */
export interface QueryLastObservedEthNonceRequestAmino {
  /**
   * indicates whether to search for store data using the old Gravity v1 key "LastObservedEventNonceKey"
   * Note that queries before the Mercury upgrade at height 1282013 must set this to true
   */
  use_v1_key: boolean;
}
export interface QueryLastObservedEthNonceRequestAminoMsg {
  type: "/gravity.v1.QueryLastObservedEthNonceRequest";
  value: QueryLastObservedEthNonceRequestAmino;
}
/**
 * QueryLastObservedEthNonceRequest defines the request for getting the event nonce
 * of the last applied Ethereum Event on the bridge.
 * Note that this is likely to lag the last executed event a little
 * due to 1. Ethereum Finality and 2. Consensus mirroring the Ethereum state
 */
export interface QueryLastObservedEthNonceRequestSDKType {
  use_v1_key: boolean;
}
export interface QueryLastObservedEthNonceResponse {
  /**
   * a response of 0 indicates that no Ethereum events have been observed, and thus
   * the bridge is inactive
   */
  nonce: Long;
}
export interface QueryLastObservedEthNonceResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryLastObservedEthNonceResponse";
  value: Uint8Array;
}
export interface QueryLastObservedEthNonceResponseAmino {
  /**
   * a response of 0 indicates that no Ethereum events have been observed, and thus
   * the bridge is inactive
   */
  nonce: string;
}
export interface QueryLastObservedEthNonceResponseAminoMsg {
  type: "/gravity.v1.QueryLastObservedEthNonceResponse";
  value: QueryLastObservedEthNonceResponseAmino;
}
export interface QueryLastObservedEthNonceResponseSDKType {
  nonce: Long;
}
/**
 * QueryAttestationsRequest defines the request structure for getting recent
 * attestations with optional query parameters. By default, a limited set of
 * recent attestations will be returned, defined by 'limit'. These attestations
 * can be ordered ascending or descending by nonce, that defaults to ascending.
 * Filtering criteria may also be provided, including nonce, claim type, and
 * height. Note, that an attestation will be returned if it matches ANY of the
 * filter query parameters provided.
 */
export interface QueryAttestationsRequest {
  /** limit defines how many attestations to limit in the response. */
  limit: Long;
  /**
   * order_by provides ordering of atteststions by nonce in the response. Either
   * 'asc' or 'desc' can be provided. If no value is provided, it defaults to
   * 'asc'.
   */
  orderBy: string;
  /** claim_type allows filtering attestations by Ethereum claim type. */
  claimType: string;
  /** nonce allows filtering attestations by Ethereum claim nonce. */
  nonce: Long;
  /** height allows filtering attestations by Ethereum claim height. */
  height: Long;
  /**
   * indicates whether to search for store data using the old Gravity v1 key "OracleAttestationKey"
   * Note that queries before the Mercury upgrade at height 1282013 must set this to true
   */
  useV1Key: boolean;
}
export interface QueryAttestationsRequestProtoMsg {
  typeUrl: "/gravity.v1.QueryAttestationsRequest";
  value: Uint8Array;
}
/**
 * QueryAttestationsRequest defines the request structure for getting recent
 * attestations with optional query parameters. By default, a limited set of
 * recent attestations will be returned, defined by 'limit'. These attestations
 * can be ordered ascending or descending by nonce, that defaults to ascending.
 * Filtering criteria may also be provided, including nonce, claim type, and
 * height. Note, that an attestation will be returned if it matches ANY of the
 * filter query parameters provided.
 */
export interface QueryAttestationsRequestAmino {
  /** limit defines how many attestations to limit in the response. */
  limit: string;
  /**
   * order_by provides ordering of atteststions by nonce in the response. Either
   * 'asc' or 'desc' can be provided. If no value is provided, it defaults to
   * 'asc'.
   */
  order_by: string;
  /** claim_type allows filtering attestations by Ethereum claim type. */
  claim_type: string;
  /** nonce allows filtering attestations by Ethereum claim nonce. */
  nonce: string;
  /** height allows filtering attestations by Ethereum claim height. */
  height: string;
  /**
   * indicates whether to search for store data using the old Gravity v1 key "OracleAttestationKey"
   * Note that queries before the Mercury upgrade at height 1282013 must set this to true
   */
  use_v1_key: boolean;
}
export interface QueryAttestationsRequestAminoMsg {
  type: "/gravity.v1.QueryAttestationsRequest";
  value: QueryAttestationsRequestAmino;
}
/**
 * QueryAttestationsRequest defines the request structure for getting recent
 * attestations with optional query parameters. By default, a limited set of
 * recent attestations will be returned, defined by 'limit'. These attestations
 * can be ordered ascending or descending by nonce, that defaults to ascending.
 * Filtering criteria may also be provided, including nonce, claim type, and
 * height. Note, that an attestation will be returned if it matches ANY of the
 * filter query parameters provided.
 */
export interface QueryAttestationsRequestSDKType {
  limit: Long;
  order_by: string;
  claim_type: string;
  nonce: Long;
  height: Long;
  use_v1_key: boolean;
}
export interface QueryAttestationsResponse {
  attestations: Attestation[];
}
export interface QueryAttestationsResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryAttestationsResponse";
  value: Uint8Array;
}
export interface QueryAttestationsResponseAmino {
  attestations: AttestationAmino[];
}
export interface QueryAttestationsResponseAminoMsg {
  type: "/gravity.v1.QueryAttestationsResponse";
  value: QueryAttestationsResponseAmino;
}
export interface QueryAttestationsResponseSDKType {
  attestations: AttestationSDKType[];
}
export interface QueryDelegateKeysByValidatorAddress {
  validatorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressProtoMsg {
  typeUrl: "/gravity.v1.QueryDelegateKeysByValidatorAddress";
  value: Uint8Array;
}
export interface QueryDelegateKeysByValidatorAddressAmino {
  validator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressAminoMsg {
  type: "/gravity.v1.QueryDelegateKeysByValidatorAddress";
  value: QueryDelegateKeysByValidatorAddressAmino;
}
export interface QueryDelegateKeysByValidatorAddressSDKType {
  validator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressResponse {
  ethAddress: string;
  orchestratorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryDelegateKeysByValidatorAddressResponse";
  value: Uint8Array;
}
export interface QueryDelegateKeysByValidatorAddressResponseAmino {
  eth_address: string;
  orchestrator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressResponseAminoMsg {
  type: "/gravity.v1.QueryDelegateKeysByValidatorAddressResponse";
  value: QueryDelegateKeysByValidatorAddressResponseAmino;
}
export interface QueryDelegateKeysByValidatorAddressResponseSDKType {
  eth_address: string;
  orchestrator_address: string;
}
export interface QueryDelegateKeysByEthAddress {
  ethAddress: string;
}
export interface QueryDelegateKeysByEthAddressProtoMsg {
  typeUrl: "/gravity.v1.QueryDelegateKeysByEthAddress";
  value: Uint8Array;
}
export interface QueryDelegateKeysByEthAddressAmino {
  eth_address: string;
}
export interface QueryDelegateKeysByEthAddressAminoMsg {
  type: "/gravity.v1.QueryDelegateKeysByEthAddress";
  value: QueryDelegateKeysByEthAddressAmino;
}
export interface QueryDelegateKeysByEthAddressSDKType {
  eth_address: string;
}
export interface QueryDelegateKeysByEthAddressResponse {
  validatorAddress: string;
  orchestratorAddress: string;
}
export interface QueryDelegateKeysByEthAddressResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryDelegateKeysByEthAddressResponse";
  value: Uint8Array;
}
export interface QueryDelegateKeysByEthAddressResponseAmino {
  validator_address: string;
  orchestrator_address: string;
}
export interface QueryDelegateKeysByEthAddressResponseAminoMsg {
  type: "/gravity.v1.QueryDelegateKeysByEthAddressResponse";
  value: QueryDelegateKeysByEthAddressResponseAmino;
}
export interface QueryDelegateKeysByEthAddressResponseSDKType {
  validator_address: string;
  orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddress {
  orchestratorAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressProtoMsg {
  typeUrl: "/gravity.v1.QueryDelegateKeysByOrchestratorAddress";
  value: Uint8Array;
}
export interface QueryDelegateKeysByOrchestratorAddressAmino {
  orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressAminoMsg {
  type: "/gravity.v1.QueryDelegateKeysByOrchestratorAddress";
  value: QueryDelegateKeysByOrchestratorAddressAmino;
}
export interface QueryDelegateKeysByOrchestratorAddressSDKType {
  orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponse {
  validatorAddress: string;
  ethAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse";
  value: Uint8Array;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseAmino {
  validator_address: string;
  eth_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseAminoMsg {
  type: "/gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse";
  value: QueryDelegateKeysByOrchestratorAddressResponseAmino;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseSDKType {
  validator_address: string;
  eth_address: string;
}
export interface QueryPendingSendToEth {
  senderAddress: string;
}
export interface QueryPendingSendToEthProtoMsg {
  typeUrl: "/gravity.v1.QueryPendingSendToEth";
  value: Uint8Array;
}
export interface QueryPendingSendToEthAmino {
  sender_address: string;
}
export interface QueryPendingSendToEthAminoMsg {
  type: "/gravity.v1.QueryPendingSendToEth";
  value: QueryPendingSendToEthAmino;
}
export interface QueryPendingSendToEthSDKType {
  sender_address: string;
}
export interface QueryPendingSendToEthResponse {
  transfersInBatches: OutgoingTransferTx[];
  unbatchedTransfers: OutgoingTransferTx[];
}
export interface QueryPendingSendToEthResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryPendingSendToEthResponse";
  value: Uint8Array;
}
export interface QueryPendingSendToEthResponseAmino {
  transfers_in_batches: OutgoingTransferTxAmino[];
  unbatched_transfers: OutgoingTransferTxAmino[];
}
export interface QueryPendingSendToEthResponseAminoMsg {
  type: "/gravity.v1.QueryPendingSendToEthResponse";
  value: QueryPendingSendToEthResponseAmino;
}
export interface QueryPendingSendToEthResponseSDKType {
  transfers_in_batches: OutgoingTransferTxSDKType[];
  unbatched_transfers: OutgoingTransferTxSDKType[];
}
export interface QueryPendingIbcAutoForwards {
  /** limit defines the number of pending forwards to return, in order of their SendToCosmos.EventNonce */
  limit: Long;
}
export interface QueryPendingIbcAutoForwardsProtoMsg {
  typeUrl: "/gravity.v1.QueryPendingIbcAutoForwards";
  value: Uint8Array;
}
export interface QueryPendingIbcAutoForwardsAmino {
  /** limit defines the number of pending forwards to return, in order of their SendToCosmos.EventNonce */
  limit: string;
}
export interface QueryPendingIbcAutoForwardsAminoMsg {
  type: "/gravity.v1.QueryPendingIbcAutoForwards";
  value: QueryPendingIbcAutoForwardsAmino;
}
export interface QueryPendingIbcAutoForwardsSDKType {
  limit: Long;
}
export interface QueryPendingIbcAutoForwardsResponse {
  pendingIbcAutoForwards: PendingIbcAutoForward[];
}
export interface QueryPendingIbcAutoForwardsResponseProtoMsg {
  typeUrl: "/gravity.v1.QueryPendingIbcAutoForwardsResponse";
  value: Uint8Array;
}
export interface QueryPendingIbcAutoForwardsResponseAmino {
  pending_ibc_auto_forwards: PendingIbcAutoForwardAmino[];
}
export interface QueryPendingIbcAutoForwardsResponseAminoMsg {
  type: "/gravity.v1.QueryPendingIbcAutoForwardsResponse";
  value: QueryPendingIbcAutoForwardsResponseAmino;
}
export interface QueryPendingIbcAutoForwardsResponseSDKType {
  pending_ibc_auto_forwards: PendingIbcAutoForwardSDKType[];
}
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
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
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
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentValsetRequest(): QueryCurrentValsetRequest {
  return {};
}
export const QueryCurrentValsetRequest = {
  encode(_: QueryCurrentValsetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentValsetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentValsetRequest();
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
  fromJSON(_: any): QueryCurrentValsetRequest {
    return {};
  },
  toJSON(_: QueryCurrentValsetRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryCurrentValsetRequest>): QueryCurrentValsetRequest {
    const message = createBaseQueryCurrentValsetRequest();
    return message;
  },
  fromAmino(_: QueryCurrentValsetRequestAmino): QueryCurrentValsetRequest {
    return {};
  },
  toAmino(_: QueryCurrentValsetRequest): QueryCurrentValsetRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCurrentValsetRequestAminoMsg): QueryCurrentValsetRequest {
    return QueryCurrentValsetRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentValsetRequestProtoMsg): QueryCurrentValsetRequest {
    return QueryCurrentValsetRequest.decode(message.value);
  },
  toProto(message: QueryCurrentValsetRequest): Uint8Array {
    return QueryCurrentValsetRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentValsetRequest): QueryCurrentValsetRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryCurrentValsetRequest",
      value: QueryCurrentValsetRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentValsetResponse(): QueryCurrentValsetResponse {
  return {
    valset: undefined
  };
}
export const QueryCurrentValsetResponse = {
  encode(message: QueryCurrentValsetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valset !== undefined) {
      Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentValsetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentValsetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valset = Valset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCurrentValsetResponse {
    return {
      valset: isSet(object.valset) ? Valset.fromJSON(object.valset) : undefined
    };
  },
  toJSON(message: QueryCurrentValsetResponse): unknown {
    const obj: any = {};
    message.valset !== undefined && (obj.valset = message.valset ? Valset.toJSON(message.valset) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryCurrentValsetResponse>): QueryCurrentValsetResponse {
    const message = createBaseQueryCurrentValsetResponse();
    message.valset = object.valset !== undefined && object.valset !== null ? Valset.fromPartial(object.valset) : undefined;
    return message;
  },
  fromAmino(object: QueryCurrentValsetResponseAmino): QueryCurrentValsetResponse {
    return {
      valset: object?.valset ? Valset.fromAmino(object.valset) : undefined
    };
  },
  toAmino(message: QueryCurrentValsetResponse): QueryCurrentValsetResponseAmino {
    const obj: any = {};
    obj.valset = message.valset ? Valset.toAmino(message.valset) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentValsetResponseAminoMsg): QueryCurrentValsetResponse {
    return QueryCurrentValsetResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentValsetResponseProtoMsg): QueryCurrentValsetResponse {
    return QueryCurrentValsetResponse.decode(message.value);
  },
  toProto(message: QueryCurrentValsetResponse): Uint8Array {
    return QueryCurrentValsetResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentValsetResponse): QueryCurrentValsetResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryCurrentValsetResponse",
      value: QueryCurrentValsetResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValsetRequestRequest(): QueryValsetRequestRequest {
  return {
    nonce: Long.UZERO
  };
}
export const QueryValsetRequestRequest = {
  encode(message: QueryValsetRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValsetRequestRequest {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO
    };
  },
  toJSON(message: QueryValsetRequestRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryValsetRequestRequest>): QueryValsetRequestRequest {
    const message = createBaseQueryValsetRequestRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryValsetRequestRequestAmino): QueryValsetRequestRequest {
    return {
      nonce: Long.fromString(object.nonce)
    };
  },
  toAmino(message: QueryValsetRequestRequest): QueryValsetRequestRequestAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValsetRequestRequestAminoMsg): QueryValsetRequestRequest {
    return QueryValsetRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetRequestRequestProtoMsg): QueryValsetRequestRequest {
    return QueryValsetRequestRequest.decode(message.value);
  },
  toProto(message: QueryValsetRequestRequest): Uint8Array {
    return QueryValsetRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetRequestRequest): QueryValsetRequestRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryValsetRequestRequest",
      value: QueryValsetRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValsetRequestResponse(): QueryValsetRequestResponse {
  return {
    valset: undefined
  };
}
export const QueryValsetRequestResponse = {
  encode(message: QueryValsetRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valset !== undefined) {
      Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valset = Valset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValsetRequestResponse {
    return {
      valset: isSet(object.valset) ? Valset.fromJSON(object.valset) : undefined
    };
  },
  toJSON(message: QueryValsetRequestResponse): unknown {
    const obj: any = {};
    message.valset !== undefined && (obj.valset = message.valset ? Valset.toJSON(message.valset) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryValsetRequestResponse>): QueryValsetRequestResponse {
    const message = createBaseQueryValsetRequestResponse();
    message.valset = object.valset !== undefined && object.valset !== null ? Valset.fromPartial(object.valset) : undefined;
    return message;
  },
  fromAmino(object: QueryValsetRequestResponseAmino): QueryValsetRequestResponse {
    return {
      valset: object?.valset ? Valset.fromAmino(object.valset) : undefined
    };
  },
  toAmino(message: QueryValsetRequestResponse): QueryValsetRequestResponseAmino {
    const obj: any = {};
    obj.valset = message.valset ? Valset.toAmino(message.valset) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValsetRequestResponseAminoMsg): QueryValsetRequestResponse {
    return QueryValsetRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetRequestResponseProtoMsg): QueryValsetRequestResponse {
    return QueryValsetRequestResponse.decode(message.value);
  },
  toProto(message: QueryValsetRequestResponse): Uint8Array {
    return QueryValsetRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetRequestResponse): QueryValsetRequestResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryValsetRequestResponse",
      value: QueryValsetRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValsetConfirmRequest(): QueryValsetConfirmRequest {
  return {
    nonce: Long.UZERO,
    address: ""
  };
}
export const QueryValsetConfirmRequest = {
  encode(message: QueryValsetConfirmRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = (reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValsetConfirmRequest {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryValsetConfirmRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryValsetConfirmRequest>): QueryValsetConfirmRequest {
    const message = createBaseQueryValsetConfirmRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryValsetConfirmRequestAmino): QueryValsetConfirmRequest {
    return {
      nonce: Long.fromString(object.nonce),
      address: object.address
    };
  },
  toAmino(message: QueryValsetConfirmRequest): QueryValsetConfirmRequestAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryValsetConfirmRequestAminoMsg): QueryValsetConfirmRequest {
    return QueryValsetConfirmRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetConfirmRequestProtoMsg): QueryValsetConfirmRequest {
    return QueryValsetConfirmRequest.decode(message.value);
  },
  toProto(message: QueryValsetConfirmRequest): Uint8Array {
    return QueryValsetConfirmRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetConfirmRequest): QueryValsetConfirmRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryValsetConfirmRequest",
      value: QueryValsetConfirmRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValsetConfirmResponse(): QueryValsetConfirmResponse {
  return {
    confirm: undefined
  };
}
export const QueryValsetConfirmResponse = {
  encode(message: QueryValsetConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.confirm !== undefined) {
      MsgValsetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirm = MsgValsetConfirm.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValsetConfirmResponse {
    return {
      confirm: isSet(object.confirm) ? MsgValsetConfirm.fromJSON(object.confirm) : undefined
    };
  },
  toJSON(message: QueryValsetConfirmResponse): unknown {
    const obj: any = {};
    message.confirm !== undefined && (obj.confirm = message.confirm ? MsgValsetConfirm.toJSON(message.confirm) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryValsetConfirmResponse>): QueryValsetConfirmResponse {
    const message = createBaseQueryValsetConfirmResponse();
    message.confirm = object.confirm !== undefined && object.confirm !== null ? MsgValsetConfirm.fromPartial(object.confirm) : undefined;
    return message;
  },
  fromAmino(object: QueryValsetConfirmResponseAmino): QueryValsetConfirmResponse {
    return {
      confirm: object?.confirm ? MsgValsetConfirm.fromAmino(object.confirm) : undefined
    };
  },
  toAmino(message: QueryValsetConfirmResponse): QueryValsetConfirmResponseAmino {
    const obj: any = {};
    obj.confirm = message.confirm ? MsgValsetConfirm.toAmino(message.confirm) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValsetConfirmResponseAminoMsg): QueryValsetConfirmResponse {
    return QueryValsetConfirmResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetConfirmResponseProtoMsg): QueryValsetConfirmResponse {
    return QueryValsetConfirmResponse.decode(message.value);
  },
  toProto(message: QueryValsetConfirmResponse): Uint8Array {
    return QueryValsetConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetConfirmResponse): QueryValsetConfirmResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryValsetConfirmResponse",
      value: QueryValsetConfirmResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValsetConfirmsByNonceRequest(): QueryValsetConfirmsByNonceRequest {
  return {
    nonce: Long.UZERO
  };
}
export const QueryValsetConfirmsByNonceRequest = {
  encode(message: QueryValsetConfirmsByNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmsByNonceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmsByNonceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValsetConfirmsByNonceRequest {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO
    };
  },
  toJSON(message: QueryValsetConfirmsByNonceRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryValsetConfirmsByNonceRequest>): QueryValsetConfirmsByNonceRequest {
    const message = createBaseQueryValsetConfirmsByNonceRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryValsetConfirmsByNonceRequestAmino): QueryValsetConfirmsByNonceRequest {
    return {
      nonce: Long.fromString(object.nonce)
    };
  },
  toAmino(message: QueryValsetConfirmsByNonceRequest): QueryValsetConfirmsByNonceRequestAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValsetConfirmsByNonceRequestAminoMsg): QueryValsetConfirmsByNonceRequest {
    return QueryValsetConfirmsByNonceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetConfirmsByNonceRequestProtoMsg): QueryValsetConfirmsByNonceRequest {
    return QueryValsetConfirmsByNonceRequest.decode(message.value);
  },
  toProto(message: QueryValsetConfirmsByNonceRequest): Uint8Array {
    return QueryValsetConfirmsByNonceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetConfirmsByNonceRequest): QueryValsetConfirmsByNonceRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryValsetConfirmsByNonceRequest",
      value: QueryValsetConfirmsByNonceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValsetConfirmsByNonceResponse(): QueryValsetConfirmsByNonceResponse {
  return {
    confirms: []
  };
}
export const QueryValsetConfirmsByNonceResponse = {
  encode(message: QueryValsetConfirmsByNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.confirms) {
      MsgValsetConfirm.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmsByNonceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmsByNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirms.push(MsgValsetConfirm.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValsetConfirmsByNonceResponse {
    return {
      confirms: Array.isArray(object?.confirms) ? object.confirms.map((e: any) => MsgValsetConfirm.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryValsetConfirmsByNonceResponse): unknown {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map(e => e ? MsgValsetConfirm.toJSON(e) : undefined);
    } else {
      obj.confirms = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryValsetConfirmsByNonceResponse>): QueryValsetConfirmsByNonceResponse {
    const message = createBaseQueryValsetConfirmsByNonceResponse();
    message.confirms = object.confirms?.map(e => MsgValsetConfirm.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryValsetConfirmsByNonceResponseAmino): QueryValsetConfirmsByNonceResponse {
    return {
      confirms: Array.isArray(object?.confirms) ? object.confirms.map((e: any) => MsgValsetConfirm.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryValsetConfirmsByNonceResponse): QueryValsetConfirmsByNonceResponseAmino {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map(e => e ? MsgValsetConfirm.toAmino(e) : undefined);
    } else {
      obj.confirms = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryValsetConfirmsByNonceResponseAminoMsg): QueryValsetConfirmsByNonceResponse {
    return QueryValsetConfirmsByNonceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValsetConfirmsByNonceResponseProtoMsg): QueryValsetConfirmsByNonceResponse {
    return QueryValsetConfirmsByNonceResponse.decode(message.value);
  },
  toProto(message: QueryValsetConfirmsByNonceResponse): Uint8Array {
    return QueryValsetConfirmsByNonceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValsetConfirmsByNonceResponse): QueryValsetConfirmsByNonceResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryValsetConfirmsByNonceResponse",
      value: QueryValsetConfirmsByNonceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLastValsetRequestsRequest(): QueryLastValsetRequestsRequest {
  return {};
}
export const QueryLastValsetRequestsRequest = {
  encode(_: QueryLastValsetRequestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastValsetRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastValsetRequestsRequest();
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
  fromJSON(_: any): QueryLastValsetRequestsRequest {
    return {};
  },
  toJSON(_: QueryLastValsetRequestsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryLastValsetRequestsRequest>): QueryLastValsetRequestsRequest {
    const message = createBaseQueryLastValsetRequestsRequest();
    return message;
  },
  fromAmino(_: QueryLastValsetRequestsRequestAmino): QueryLastValsetRequestsRequest {
    return {};
  },
  toAmino(_: QueryLastValsetRequestsRequest): QueryLastValsetRequestsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLastValsetRequestsRequestAminoMsg): QueryLastValsetRequestsRequest {
    return QueryLastValsetRequestsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastValsetRequestsRequestProtoMsg): QueryLastValsetRequestsRequest {
    return QueryLastValsetRequestsRequest.decode(message.value);
  },
  toProto(message: QueryLastValsetRequestsRequest): Uint8Array {
    return QueryLastValsetRequestsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastValsetRequestsRequest): QueryLastValsetRequestsRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryLastValsetRequestsRequest",
      value: QueryLastValsetRequestsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLastValsetRequestsResponse(): QueryLastValsetRequestsResponse {
  return {
    valsets: []
  };
}
export const QueryLastValsetRequestsResponse = {
  encode(message: QueryLastValsetRequestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastValsetRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastValsetRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valsets.push(Valset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLastValsetRequestsResponse {
    return {
      valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryLastValsetRequestsResponse): unknown {
    const obj: any = {};
    if (message.valsets) {
      obj.valsets = message.valsets.map(e => e ? Valset.toJSON(e) : undefined);
    } else {
      obj.valsets = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryLastValsetRequestsResponse>): QueryLastValsetRequestsResponse {
    const message = createBaseQueryLastValsetRequestsResponse();
    message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryLastValsetRequestsResponseAmino): QueryLastValsetRequestsResponse {
    return {
      valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryLastValsetRequestsResponse): QueryLastValsetRequestsResponseAmino {
    const obj: any = {};
    if (message.valsets) {
      obj.valsets = message.valsets.map(e => e ? Valset.toAmino(e) : undefined);
    } else {
      obj.valsets = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryLastValsetRequestsResponseAminoMsg): QueryLastValsetRequestsResponse {
    return QueryLastValsetRequestsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastValsetRequestsResponseProtoMsg): QueryLastValsetRequestsResponse {
    return QueryLastValsetRequestsResponse.decode(message.value);
  },
  toProto(message: QueryLastValsetRequestsResponse): Uint8Array {
    return QueryLastValsetRequestsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastValsetRequestsResponse): QueryLastValsetRequestsResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryLastValsetRequestsResponse",
      value: QueryLastValsetRequestsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLastPendingValsetRequestByAddrRequest(): QueryLastPendingValsetRequestByAddrRequest {
  return {
    address: ""
  };
}
export const QueryLastPendingValsetRequestByAddrRequest = {
  encode(message: QueryLastPendingValsetRequestByAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
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
  fromJSON(object: any): QueryLastPendingValsetRequestByAddrRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryLastPendingValsetRequestByAddrRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryLastPendingValsetRequestByAddrRequest>): QueryLastPendingValsetRequestByAddrRequest {
    const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryLastPendingValsetRequestByAddrRequestAmino): QueryLastPendingValsetRequestByAddrRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryLastPendingValsetRequestByAddrRequest): QueryLastPendingValsetRequestByAddrRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryLastPendingValsetRequestByAddrRequestAminoMsg): QueryLastPendingValsetRequestByAddrRequest {
    return QueryLastPendingValsetRequestByAddrRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastPendingValsetRequestByAddrRequestProtoMsg): QueryLastPendingValsetRequestByAddrRequest {
    return QueryLastPendingValsetRequestByAddrRequest.decode(message.value);
  },
  toProto(message: QueryLastPendingValsetRequestByAddrRequest): Uint8Array {
    return QueryLastPendingValsetRequestByAddrRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastPendingValsetRequestByAddrRequest): QueryLastPendingValsetRequestByAddrRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryLastPendingValsetRequestByAddrRequest",
      value: QueryLastPendingValsetRequestByAddrRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLastPendingValsetRequestByAddrResponse(): QueryLastPendingValsetRequestByAddrResponse {
  return {
    valsets: []
  };
}
export const QueryLastPendingValsetRequestByAddrResponse = {
  encode(message: QueryLastPendingValsetRequestByAddrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valsets.push(Valset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLastPendingValsetRequestByAddrResponse {
    return {
      valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryLastPendingValsetRequestByAddrResponse): unknown {
    const obj: any = {};
    if (message.valsets) {
      obj.valsets = message.valsets.map(e => e ? Valset.toJSON(e) : undefined);
    } else {
      obj.valsets = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryLastPendingValsetRequestByAddrResponse>): QueryLastPendingValsetRequestByAddrResponse {
    const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
    message.valsets = object.valsets?.map(e => Valset.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryLastPendingValsetRequestByAddrResponseAmino): QueryLastPendingValsetRequestByAddrResponse {
    return {
      valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryLastPendingValsetRequestByAddrResponse): QueryLastPendingValsetRequestByAddrResponseAmino {
    const obj: any = {};
    if (message.valsets) {
      obj.valsets = message.valsets.map(e => e ? Valset.toAmino(e) : undefined);
    } else {
      obj.valsets = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryLastPendingValsetRequestByAddrResponseAminoMsg): QueryLastPendingValsetRequestByAddrResponse {
    return QueryLastPendingValsetRequestByAddrResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastPendingValsetRequestByAddrResponseProtoMsg): QueryLastPendingValsetRequestByAddrResponse {
    return QueryLastPendingValsetRequestByAddrResponse.decode(message.value);
  },
  toProto(message: QueryLastPendingValsetRequestByAddrResponse): Uint8Array {
    return QueryLastPendingValsetRequestByAddrResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastPendingValsetRequestByAddrResponse): QueryLastPendingValsetRequestByAddrResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryLastPendingValsetRequestByAddrResponse",
      value: QueryLastPendingValsetRequestByAddrResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBatchFeeRequest(): QueryBatchFeeRequest {
  return {};
}
export const QueryBatchFeeRequest = {
  encode(_: QueryBatchFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchFeeRequest();
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
  fromJSON(_: any): QueryBatchFeeRequest {
    return {};
  },
  toJSON(_: QueryBatchFeeRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryBatchFeeRequest>): QueryBatchFeeRequest {
    const message = createBaseQueryBatchFeeRequest();
    return message;
  },
  fromAmino(_: QueryBatchFeeRequestAmino): QueryBatchFeeRequest {
    return {};
  },
  toAmino(_: QueryBatchFeeRequest): QueryBatchFeeRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBatchFeeRequestAminoMsg): QueryBatchFeeRequest {
    return QueryBatchFeeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchFeeRequestProtoMsg): QueryBatchFeeRequest {
    return QueryBatchFeeRequest.decode(message.value);
  },
  toProto(message: QueryBatchFeeRequest): Uint8Array {
    return QueryBatchFeeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchFeeRequest): QueryBatchFeeRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryBatchFeeRequest",
      value: QueryBatchFeeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBatchFeeResponse(): QueryBatchFeeResponse {
  return {
    batchFees: []
  };
}
export const QueryBatchFeeResponse = {
  encode(message: QueryBatchFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.batchFees) {
      BatchFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchFees.push(BatchFees.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBatchFeeResponse {
    return {
      batchFees: Array.isArray(object?.batchFees) ? object.batchFees.map((e: any) => BatchFees.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryBatchFeeResponse): unknown {
    const obj: any = {};
    if (message.batchFees) {
      obj.batchFees = message.batchFees.map(e => e ? BatchFees.toJSON(e) : undefined);
    } else {
      obj.batchFees = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryBatchFeeResponse>): QueryBatchFeeResponse {
    const message = createBaseQueryBatchFeeResponse();
    message.batchFees = object.batchFees?.map(e => BatchFees.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBatchFeeResponseAmino): QueryBatchFeeResponse {
    return {
      batchFees: Array.isArray(object?.batch_fees) ? object.batch_fees.map((e: any) => BatchFees.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryBatchFeeResponse): QueryBatchFeeResponseAmino {
    const obj: any = {};
    if (message.batchFees) {
      obj.batch_fees = message.batchFees.map(e => e ? BatchFees.toAmino(e) : undefined);
    } else {
      obj.batch_fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryBatchFeeResponseAminoMsg): QueryBatchFeeResponse {
    return QueryBatchFeeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchFeeResponseProtoMsg): QueryBatchFeeResponse {
    return QueryBatchFeeResponse.decode(message.value);
  },
  toProto(message: QueryBatchFeeResponse): Uint8Array {
    return QueryBatchFeeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchFeeResponse): QueryBatchFeeResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryBatchFeeResponse",
      value: QueryBatchFeeResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLastPendingBatchRequestByAddrRequest(): QueryLastPendingBatchRequestByAddrRequest {
  return {
    address: ""
  };
}
export const QueryLastPendingBatchRequestByAddrRequest = {
  encode(message: QueryLastPendingBatchRequestByAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
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
  fromJSON(object: any): QueryLastPendingBatchRequestByAddrRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryLastPendingBatchRequestByAddrRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryLastPendingBatchRequestByAddrRequest>): QueryLastPendingBatchRequestByAddrRequest {
    const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryLastPendingBatchRequestByAddrRequestAmino): QueryLastPendingBatchRequestByAddrRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryLastPendingBatchRequestByAddrRequest): QueryLastPendingBatchRequestByAddrRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryLastPendingBatchRequestByAddrRequestAminoMsg): QueryLastPendingBatchRequestByAddrRequest {
    return QueryLastPendingBatchRequestByAddrRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastPendingBatchRequestByAddrRequestProtoMsg): QueryLastPendingBatchRequestByAddrRequest {
    return QueryLastPendingBatchRequestByAddrRequest.decode(message.value);
  },
  toProto(message: QueryLastPendingBatchRequestByAddrRequest): Uint8Array {
    return QueryLastPendingBatchRequestByAddrRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastPendingBatchRequestByAddrRequest): QueryLastPendingBatchRequestByAddrRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryLastPendingBatchRequestByAddrRequest",
      value: QueryLastPendingBatchRequestByAddrRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLastPendingBatchRequestByAddrResponse(): QueryLastPendingBatchRequestByAddrResponse {
  return {
    batch: []
  };
}
export const QueryLastPendingBatchRequestByAddrResponse = {
  encode(message: QueryLastPendingBatchRequestByAddrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.batch) {
      OutgoingTxBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batch.push(OutgoingTxBatch.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLastPendingBatchRequestByAddrResponse {
    return {
      batch: Array.isArray(object?.batch) ? object.batch.map((e: any) => OutgoingTxBatch.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryLastPendingBatchRequestByAddrResponse): unknown {
    const obj: any = {};
    if (message.batch) {
      obj.batch = message.batch.map(e => e ? OutgoingTxBatch.toJSON(e) : undefined);
    } else {
      obj.batch = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryLastPendingBatchRequestByAddrResponse>): QueryLastPendingBatchRequestByAddrResponse {
    const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
    message.batch = object.batch?.map(e => OutgoingTxBatch.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryLastPendingBatchRequestByAddrResponseAmino): QueryLastPendingBatchRequestByAddrResponse {
    return {
      batch: Array.isArray(object?.batch) ? object.batch.map((e: any) => OutgoingTxBatch.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryLastPendingBatchRequestByAddrResponse): QueryLastPendingBatchRequestByAddrResponseAmino {
    const obj: any = {};
    if (message.batch) {
      obj.batch = message.batch.map(e => e ? OutgoingTxBatch.toAmino(e) : undefined);
    } else {
      obj.batch = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryLastPendingBatchRequestByAddrResponseAminoMsg): QueryLastPendingBatchRequestByAddrResponse {
    return QueryLastPendingBatchRequestByAddrResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastPendingBatchRequestByAddrResponseProtoMsg): QueryLastPendingBatchRequestByAddrResponse {
    return QueryLastPendingBatchRequestByAddrResponse.decode(message.value);
  },
  toProto(message: QueryLastPendingBatchRequestByAddrResponse): Uint8Array {
    return QueryLastPendingBatchRequestByAddrResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastPendingBatchRequestByAddrResponse): QueryLastPendingBatchRequestByAddrResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryLastPendingBatchRequestByAddrResponse",
      value: QueryLastPendingBatchRequestByAddrResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLastPendingLogicCallByAddrRequest(): QueryLastPendingLogicCallByAddrRequest {
  return {
    address: ""
  };
}
export const QueryLastPendingLogicCallByAddrRequest = {
  encode(message: QueryLastPendingLogicCallByAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingLogicCallByAddrRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingLogicCallByAddrRequest();
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
  fromJSON(object: any): QueryLastPendingLogicCallByAddrRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryLastPendingLogicCallByAddrRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryLastPendingLogicCallByAddrRequest>): QueryLastPendingLogicCallByAddrRequest {
    const message = createBaseQueryLastPendingLogicCallByAddrRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryLastPendingLogicCallByAddrRequestAmino): QueryLastPendingLogicCallByAddrRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryLastPendingLogicCallByAddrRequest): QueryLastPendingLogicCallByAddrRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryLastPendingLogicCallByAddrRequestAminoMsg): QueryLastPendingLogicCallByAddrRequest {
    return QueryLastPendingLogicCallByAddrRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastPendingLogicCallByAddrRequestProtoMsg): QueryLastPendingLogicCallByAddrRequest {
    return QueryLastPendingLogicCallByAddrRequest.decode(message.value);
  },
  toProto(message: QueryLastPendingLogicCallByAddrRequest): Uint8Array {
    return QueryLastPendingLogicCallByAddrRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastPendingLogicCallByAddrRequest): QueryLastPendingLogicCallByAddrRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryLastPendingLogicCallByAddrRequest",
      value: QueryLastPendingLogicCallByAddrRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLastPendingLogicCallByAddrResponse(): QueryLastPendingLogicCallByAddrResponse {
  return {
    call: []
  };
}
export const QueryLastPendingLogicCallByAddrResponse = {
  encode(message: QueryLastPendingLogicCallByAddrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.call) {
      OutgoingLogicCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingLogicCallByAddrResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingLogicCallByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.call.push(OutgoingLogicCall.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLastPendingLogicCallByAddrResponse {
    return {
      call: Array.isArray(object?.call) ? object.call.map((e: any) => OutgoingLogicCall.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryLastPendingLogicCallByAddrResponse): unknown {
    const obj: any = {};
    if (message.call) {
      obj.call = message.call.map(e => e ? OutgoingLogicCall.toJSON(e) : undefined);
    } else {
      obj.call = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryLastPendingLogicCallByAddrResponse>): QueryLastPendingLogicCallByAddrResponse {
    const message = createBaseQueryLastPendingLogicCallByAddrResponse();
    message.call = object.call?.map(e => OutgoingLogicCall.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryLastPendingLogicCallByAddrResponseAmino): QueryLastPendingLogicCallByAddrResponse {
    return {
      call: Array.isArray(object?.call) ? object.call.map((e: any) => OutgoingLogicCall.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryLastPendingLogicCallByAddrResponse): QueryLastPendingLogicCallByAddrResponseAmino {
    const obj: any = {};
    if (message.call) {
      obj.call = message.call.map(e => e ? OutgoingLogicCall.toAmino(e) : undefined);
    } else {
      obj.call = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryLastPendingLogicCallByAddrResponseAminoMsg): QueryLastPendingLogicCallByAddrResponse {
    return QueryLastPendingLogicCallByAddrResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastPendingLogicCallByAddrResponseProtoMsg): QueryLastPendingLogicCallByAddrResponse {
    return QueryLastPendingLogicCallByAddrResponse.decode(message.value);
  },
  toProto(message: QueryLastPendingLogicCallByAddrResponse): Uint8Array {
    return QueryLastPendingLogicCallByAddrResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastPendingLogicCallByAddrResponse): QueryLastPendingLogicCallByAddrResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryLastPendingLogicCallByAddrResponse",
      value: QueryLastPendingLogicCallByAddrResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOutgoingTxBatchesRequest(): QueryOutgoingTxBatchesRequest {
  return {};
}
export const QueryOutgoingTxBatchesRequest = {
  encode(_: QueryOutgoingTxBatchesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingTxBatchesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutgoingTxBatchesRequest();
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
  fromJSON(_: any): QueryOutgoingTxBatchesRequest {
    return {};
  },
  toJSON(_: QueryOutgoingTxBatchesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryOutgoingTxBatchesRequest>): QueryOutgoingTxBatchesRequest {
    const message = createBaseQueryOutgoingTxBatchesRequest();
    return message;
  },
  fromAmino(_: QueryOutgoingTxBatchesRequestAmino): QueryOutgoingTxBatchesRequest {
    return {};
  },
  toAmino(_: QueryOutgoingTxBatchesRequest): QueryOutgoingTxBatchesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryOutgoingTxBatchesRequestAminoMsg): QueryOutgoingTxBatchesRequest {
    return QueryOutgoingTxBatchesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutgoingTxBatchesRequestProtoMsg): QueryOutgoingTxBatchesRequest {
    return QueryOutgoingTxBatchesRequest.decode(message.value);
  },
  toProto(message: QueryOutgoingTxBatchesRequest): Uint8Array {
    return QueryOutgoingTxBatchesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOutgoingTxBatchesRequest): QueryOutgoingTxBatchesRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryOutgoingTxBatchesRequest",
      value: QueryOutgoingTxBatchesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOutgoingTxBatchesResponse(): QueryOutgoingTxBatchesResponse {
  return {
    batches: []
  };
}
export const QueryOutgoingTxBatchesResponse = {
  encode(message: QueryOutgoingTxBatchesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.batches) {
      OutgoingTxBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingTxBatchesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutgoingTxBatchesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOutgoingTxBatchesResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => OutgoingTxBatch.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryOutgoingTxBatchesResponse): unknown {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? OutgoingTxBatch.toJSON(e) : undefined);
    } else {
      obj.batches = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryOutgoingTxBatchesResponse>): QueryOutgoingTxBatchesResponse {
    const message = createBaseQueryOutgoingTxBatchesResponse();
    message.batches = object.batches?.map(e => OutgoingTxBatch.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryOutgoingTxBatchesResponseAmino): QueryOutgoingTxBatchesResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => OutgoingTxBatch.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryOutgoingTxBatchesResponse): QueryOutgoingTxBatchesResponseAmino {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map(e => e ? OutgoingTxBatch.toAmino(e) : undefined);
    } else {
      obj.batches = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryOutgoingTxBatchesResponseAminoMsg): QueryOutgoingTxBatchesResponse {
    return QueryOutgoingTxBatchesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutgoingTxBatchesResponseProtoMsg): QueryOutgoingTxBatchesResponse {
    return QueryOutgoingTxBatchesResponse.decode(message.value);
  },
  toProto(message: QueryOutgoingTxBatchesResponse): Uint8Array {
    return QueryOutgoingTxBatchesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOutgoingTxBatchesResponse): QueryOutgoingTxBatchesResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryOutgoingTxBatchesResponse",
      value: QueryOutgoingTxBatchesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOutgoingLogicCallsRequest(): QueryOutgoingLogicCallsRequest {
  return {};
}
export const QueryOutgoingLogicCallsRequest = {
  encode(_: QueryOutgoingLogicCallsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingLogicCallsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutgoingLogicCallsRequest();
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
  fromJSON(_: any): QueryOutgoingLogicCallsRequest {
    return {};
  },
  toJSON(_: QueryOutgoingLogicCallsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryOutgoingLogicCallsRequest>): QueryOutgoingLogicCallsRequest {
    const message = createBaseQueryOutgoingLogicCallsRequest();
    return message;
  },
  fromAmino(_: QueryOutgoingLogicCallsRequestAmino): QueryOutgoingLogicCallsRequest {
    return {};
  },
  toAmino(_: QueryOutgoingLogicCallsRequest): QueryOutgoingLogicCallsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryOutgoingLogicCallsRequestAminoMsg): QueryOutgoingLogicCallsRequest {
    return QueryOutgoingLogicCallsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutgoingLogicCallsRequestProtoMsg): QueryOutgoingLogicCallsRequest {
    return QueryOutgoingLogicCallsRequest.decode(message.value);
  },
  toProto(message: QueryOutgoingLogicCallsRequest): Uint8Array {
    return QueryOutgoingLogicCallsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOutgoingLogicCallsRequest): QueryOutgoingLogicCallsRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryOutgoingLogicCallsRequest",
      value: QueryOutgoingLogicCallsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOutgoingLogicCallsResponse(): QueryOutgoingLogicCallsResponse {
  return {
    calls: []
  };
}
export const QueryOutgoingLogicCallsResponse = {
  encode(message: QueryOutgoingLogicCallsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      OutgoingLogicCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingLogicCallsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutgoingLogicCallsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.calls.push(OutgoingLogicCall.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOutgoingLogicCallsResponse {
    return {
      calls: Array.isArray(object?.calls) ? object.calls.map((e: any) => OutgoingLogicCall.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryOutgoingLogicCallsResponse): unknown {
    const obj: any = {};
    if (message.calls) {
      obj.calls = message.calls.map(e => e ? OutgoingLogicCall.toJSON(e) : undefined);
    } else {
      obj.calls = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryOutgoingLogicCallsResponse>): QueryOutgoingLogicCallsResponse {
    const message = createBaseQueryOutgoingLogicCallsResponse();
    message.calls = object.calls?.map(e => OutgoingLogicCall.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryOutgoingLogicCallsResponseAmino): QueryOutgoingLogicCallsResponse {
    return {
      calls: Array.isArray(object?.calls) ? object.calls.map((e: any) => OutgoingLogicCall.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryOutgoingLogicCallsResponse): QueryOutgoingLogicCallsResponseAmino {
    const obj: any = {};
    if (message.calls) {
      obj.calls = message.calls.map(e => e ? OutgoingLogicCall.toAmino(e) : undefined);
    } else {
      obj.calls = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryOutgoingLogicCallsResponseAminoMsg): QueryOutgoingLogicCallsResponse {
    return QueryOutgoingLogicCallsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOutgoingLogicCallsResponseProtoMsg): QueryOutgoingLogicCallsResponse {
    return QueryOutgoingLogicCallsResponse.decode(message.value);
  },
  toProto(message: QueryOutgoingLogicCallsResponse): Uint8Array {
    return QueryOutgoingLogicCallsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOutgoingLogicCallsResponse): QueryOutgoingLogicCallsResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryOutgoingLogicCallsResponse",
      value: QueryOutgoingLogicCallsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBatchRequestByNonceRequest(): QueryBatchRequestByNonceRequest {
  return {
    nonce: Long.UZERO,
    contractAddress: ""
  };
}
export const QueryBatchRequestByNonceRequest = {
  encode(message: QueryBatchRequestByNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequestByNonceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchRequestByNonceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = (reader.uint64() as Long);
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBatchRequestByNonceRequest {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  toJSON(message: QueryBatchRequestByNonceRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryBatchRequestByNonceRequest>): QueryBatchRequestByNonceRequest {
    const message = createBaseQueryBatchRequestByNonceRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryBatchRequestByNonceRequestAmino): QueryBatchRequestByNonceRequest {
    return {
      nonce: Long.fromString(object.nonce),
      contractAddress: object.contract_address
    };
  },
  toAmino(message: QueryBatchRequestByNonceRequest): QueryBatchRequestByNonceRequestAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryBatchRequestByNonceRequestAminoMsg): QueryBatchRequestByNonceRequest {
    return QueryBatchRequestByNonceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchRequestByNonceRequestProtoMsg): QueryBatchRequestByNonceRequest {
    return QueryBatchRequestByNonceRequest.decode(message.value);
  },
  toProto(message: QueryBatchRequestByNonceRequest): Uint8Array {
    return QueryBatchRequestByNonceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchRequestByNonceRequest): QueryBatchRequestByNonceRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryBatchRequestByNonceRequest",
      value: QueryBatchRequestByNonceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBatchRequestByNonceResponse(): QueryBatchRequestByNonceResponse {
  return {
    batch: undefined
  };
}
export const QueryBatchRequestByNonceResponse = {
  encode(message: QueryBatchRequestByNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batch !== undefined) {
      OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequestByNonceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchRequestByNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batch = OutgoingTxBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBatchRequestByNonceResponse {
    return {
      batch: isSet(object.batch) ? OutgoingTxBatch.fromJSON(object.batch) : undefined
    };
  },
  toJSON(message: QueryBatchRequestByNonceResponse): unknown {
    const obj: any = {};
    message.batch !== undefined && (obj.batch = message.batch ? OutgoingTxBatch.toJSON(message.batch) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryBatchRequestByNonceResponse>): QueryBatchRequestByNonceResponse {
    const message = createBaseQueryBatchRequestByNonceResponse();
    message.batch = object.batch !== undefined && object.batch !== null ? OutgoingTxBatch.fromPartial(object.batch) : undefined;
    return message;
  },
  fromAmino(object: QueryBatchRequestByNonceResponseAmino): QueryBatchRequestByNonceResponse {
    return {
      batch: object?.batch ? OutgoingTxBatch.fromAmino(object.batch) : undefined
    };
  },
  toAmino(message: QueryBatchRequestByNonceResponse): QueryBatchRequestByNonceResponseAmino {
    const obj: any = {};
    obj.batch = message.batch ? OutgoingTxBatch.toAmino(message.batch) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBatchRequestByNonceResponseAminoMsg): QueryBatchRequestByNonceResponse {
    return QueryBatchRequestByNonceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchRequestByNonceResponseProtoMsg): QueryBatchRequestByNonceResponse {
    return QueryBatchRequestByNonceResponse.decode(message.value);
  },
  toProto(message: QueryBatchRequestByNonceResponse): Uint8Array {
    return QueryBatchRequestByNonceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchRequestByNonceResponse): QueryBatchRequestByNonceResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryBatchRequestByNonceResponse",
      value: QueryBatchRequestByNonceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBatchConfirmsRequest(): QueryBatchConfirmsRequest {
  return {
    nonce: Long.UZERO,
    contractAddress: ""
  };
}
export const QueryBatchConfirmsRequest = {
  encode(message: QueryBatchConfirmsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchConfirmsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchConfirmsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = (reader.uint64() as Long);
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBatchConfirmsRequest {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  toJSON(message: QueryBatchConfirmsRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryBatchConfirmsRequest>): QueryBatchConfirmsRequest {
    const message = createBaseQueryBatchConfirmsRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryBatchConfirmsRequestAmino): QueryBatchConfirmsRequest {
    return {
      nonce: Long.fromString(object.nonce),
      contractAddress: object.contract_address
    };
  },
  toAmino(message: QueryBatchConfirmsRequest): QueryBatchConfirmsRequestAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryBatchConfirmsRequestAminoMsg): QueryBatchConfirmsRequest {
    return QueryBatchConfirmsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchConfirmsRequestProtoMsg): QueryBatchConfirmsRequest {
    return QueryBatchConfirmsRequest.decode(message.value);
  },
  toProto(message: QueryBatchConfirmsRequest): Uint8Array {
    return QueryBatchConfirmsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchConfirmsRequest): QueryBatchConfirmsRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryBatchConfirmsRequest",
      value: QueryBatchConfirmsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBatchConfirmsResponse(): QueryBatchConfirmsResponse {
  return {
    confirms: []
  };
}
export const QueryBatchConfirmsResponse = {
  encode(message: QueryBatchConfirmsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.confirms) {
      MsgConfirmBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchConfirmsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchConfirmsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBatchConfirmsResponse {
    return {
      confirms: Array.isArray(object?.confirms) ? object.confirms.map((e: any) => MsgConfirmBatch.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryBatchConfirmsResponse): unknown {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map(e => e ? MsgConfirmBatch.toJSON(e) : undefined);
    } else {
      obj.confirms = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryBatchConfirmsResponse>): QueryBatchConfirmsResponse {
    const message = createBaseQueryBatchConfirmsResponse();
    message.confirms = object.confirms?.map(e => MsgConfirmBatch.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBatchConfirmsResponseAmino): QueryBatchConfirmsResponse {
    return {
      confirms: Array.isArray(object?.confirms) ? object.confirms.map((e: any) => MsgConfirmBatch.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryBatchConfirmsResponse): QueryBatchConfirmsResponseAmino {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map(e => e ? MsgConfirmBatch.toAmino(e) : undefined);
    } else {
      obj.confirms = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryBatchConfirmsResponseAminoMsg): QueryBatchConfirmsResponse {
    return QueryBatchConfirmsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBatchConfirmsResponseProtoMsg): QueryBatchConfirmsResponse {
    return QueryBatchConfirmsResponse.decode(message.value);
  },
  toProto(message: QueryBatchConfirmsResponse): Uint8Array {
    return QueryBatchConfirmsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBatchConfirmsResponse): QueryBatchConfirmsResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryBatchConfirmsResponse",
      value: QueryBatchConfirmsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLogicConfirmsRequest(): QueryLogicConfirmsRequest {
  return {
    invalidationId: new Uint8Array(),
    invalidationNonce: Long.UZERO
  };
}
export const QueryLogicConfirmsRequest = {
  encode(message: QueryLogicConfirmsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.invalidationId.length !== 0) {
      writer.uint32(10).bytes(message.invalidationId);
    }
    if (!message.invalidationNonce.isZero()) {
      writer.uint32(16).uint64(message.invalidationNonce);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLogicConfirmsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLogicConfirmsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invalidationId = reader.bytes();
          break;
        case 2:
          message.invalidationNonce = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLogicConfirmsRequest {
    return {
      invalidationId: isSet(object.invalidationId) ? bytesFromBase64(object.invalidationId) : new Uint8Array(),
      invalidationNonce: isSet(object.invalidationNonce) ? Long.fromValue(object.invalidationNonce) : Long.UZERO
    };
  },
  toJSON(message: QueryLogicConfirmsRequest): unknown {
    const obj: any = {};
    message.invalidationId !== undefined && (obj.invalidationId = base64FromBytes(message.invalidationId !== undefined ? message.invalidationId : new Uint8Array()));
    message.invalidationNonce !== undefined && (obj.invalidationNonce = (message.invalidationNonce || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryLogicConfirmsRequest>): QueryLogicConfirmsRequest {
    const message = createBaseQueryLogicConfirmsRequest();
    message.invalidationId = object.invalidationId ?? new Uint8Array();
    message.invalidationNonce = object.invalidationNonce !== undefined && object.invalidationNonce !== null ? Long.fromValue(object.invalidationNonce) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryLogicConfirmsRequestAmino): QueryLogicConfirmsRequest {
    return {
      invalidationId: object.invalidation_id,
      invalidationNonce: Long.fromString(object.invalidation_nonce)
    };
  },
  toAmino(message: QueryLogicConfirmsRequest): QueryLogicConfirmsRequestAmino {
    const obj: any = {};
    obj.invalidation_id = message.invalidationId;
    obj.invalidation_nonce = message.invalidationNonce ? message.invalidationNonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLogicConfirmsRequestAminoMsg): QueryLogicConfirmsRequest {
    return QueryLogicConfirmsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLogicConfirmsRequestProtoMsg): QueryLogicConfirmsRequest {
    return QueryLogicConfirmsRequest.decode(message.value);
  },
  toProto(message: QueryLogicConfirmsRequest): Uint8Array {
    return QueryLogicConfirmsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLogicConfirmsRequest): QueryLogicConfirmsRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryLogicConfirmsRequest",
      value: QueryLogicConfirmsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLogicConfirmsResponse(): QueryLogicConfirmsResponse {
  return {
    confirms: []
  };
}
export const QueryLogicConfirmsResponse = {
  encode(message: QueryLogicConfirmsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.confirms) {
      MsgConfirmLogicCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLogicConfirmsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLogicConfirmsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirms.push(MsgConfirmLogicCall.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLogicConfirmsResponse {
    return {
      confirms: Array.isArray(object?.confirms) ? object.confirms.map((e: any) => MsgConfirmLogicCall.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryLogicConfirmsResponse): unknown {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map(e => e ? MsgConfirmLogicCall.toJSON(e) : undefined);
    } else {
      obj.confirms = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryLogicConfirmsResponse>): QueryLogicConfirmsResponse {
    const message = createBaseQueryLogicConfirmsResponse();
    message.confirms = object.confirms?.map(e => MsgConfirmLogicCall.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryLogicConfirmsResponseAmino): QueryLogicConfirmsResponse {
    return {
      confirms: Array.isArray(object?.confirms) ? object.confirms.map((e: any) => MsgConfirmLogicCall.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryLogicConfirmsResponse): QueryLogicConfirmsResponseAmino {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map(e => e ? MsgConfirmLogicCall.toAmino(e) : undefined);
    } else {
      obj.confirms = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryLogicConfirmsResponseAminoMsg): QueryLogicConfirmsResponse {
    return QueryLogicConfirmsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLogicConfirmsResponseProtoMsg): QueryLogicConfirmsResponse {
    return QueryLogicConfirmsResponse.decode(message.value);
  },
  toProto(message: QueryLogicConfirmsResponse): Uint8Array {
    return QueryLogicConfirmsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLogicConfirmsResponse): QueryLogicConfirmsResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryLogicConfirmsResponse",
      value: QueryLogicConfirmsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLastEventNonceByAddrRequest(): QueryLastEventNonceByAddrRequest {
  return {
    address: ""
  };
}
export const QueryLastEventNonceByAddrRequest = {
  encode(message: QueryLastEventNonceByAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastEventNonceByAddrRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastEventNonceByAddrRequest();
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
  fromJSON(object: any): QueryLastEventNonceByAddrRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryLastEventNonceByAddrRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryLastEventNonceByAddrRequest>): QueryLastEventNonceByAddrRequest {
    const message = createBaseQueryLastEventNonceByAddrRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryLastEventNonceByAddrRequestAmino): QueryLastEventNonceByAddrRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryLastEventNonceByAddrRequest): QueryLastEventNonceByAddrRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryLastEventNonceByAddrRequestAminoMsg): QueryLastEventNonceByAddrRequest {
    return QueryLastEventNonceByAddrRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastEventNonceByAddrRequestProtoMsg): QueryLastEventNonceByAddrRequest {
    return QueryLastEventNonceByAddrRequest.decode(message.value);
  },
  toProto(message: QueryLastEventNonceByAddrRequest): Uint8Array {
    return QueryLastEventNonceByAddrRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastEventNonceByAddrRequest): QueryLastEventNonceByAddrRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryLastEventNonceByAddrRequest",
      value: QueryLastEventNonceByAddrRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLastEventNonceByAddrResponse(): QueryLastEventNonceByAddrResponse {
  return {
    eventNonce: Long.UZERO
  };
}
export const QueryLastEventNonceByAddrResponse = {
  encode(message: QueryLastEventNonceByAddrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.eventNonce.isZero()) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastEventNonceByAddrResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastEventNonceByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLastEventNonceByAddrResponse {
    return {
      eventNonce: isSet(object.eventNonce) ? Long.fromValue(object.eventNonce) : Long.UZERO
    };
  },
  toJSON(message: QueryLastEventNonceByAddrResponse): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = (message.eventNonce || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryLastEventNonceByAddrResponse>): QueryLastEventNonceByAddrResponse {
    const message = createBaseQueryLastEventNonceByAddrResponse();
    message.eventNonce = object.eventNonce !== undefined && object.eventNonce !== null ? Long.fromValue(object.eventNonce) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryLastEventNonceByAddrResponseAmino): QueryLastEventNonceByAddrResponse {
    return {
      eventNonce: Long.fromString(object.event_nonce)
    };
  },
  toAmino(message: QueryLastEventNonceByAddrResponse): QueryLastEventNonceByAddrResponseAmino {
    const obj: any = {};
    obj.event_nonce = message.eventNonce ? message.eventNonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLastEventNonceByAddrResponseAminoMsg): QueryLastEventNonceByAddrResponse {
    return QueryLastEventNonceByAddrResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastEventNonceByAddrResponseProtoMsg): QueryLastEventNonceByAddrResponse {
    return QueryLastEventNonceByAddrResponse.decode(message.value);
  },
  toProto(message: QueryLastEventNonceByAddrResponse): Uint8Array {
    return QueryLastEventNonceByAddrResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastEventNonceByAddrResponse): QueryLastEventNonceByAddrResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryLastEventNonceByAddrResponse",
      value: QueryLastEventNonceByAddrResponse.encode(message).finish()
    };
  }
};
function createBaseQueryERC20ToDenomRequest(): QueryERC20ToDenomRequest {
  return {
    erc20: ""
  };
}
export const QueryERC20ToDenomRequest = {
  encode(message: QueryERC20ToDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryERC20ToDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryERC20ToDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20 = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryERC20ToDenomRequest {
    return {
      erc20: isSet(object.erc20) ? String(object.erc20) : ""
    };
  },
  toJSON(message: QueryERC20ToDenomRequest): unknown {
    const obj: any = {};
    message.erc20 !== undefined && (obj.erc20 = message.erc20);
    return obj;
  },
  fromPartial(object: Partial<QueryERC20ToDenomRequest>): QueryERC20ToDenomRequest {
    const message = createBaseQueryERC20ToDenomRequest();
    message.erc20 = object.erc20 ?? "";
    return message;
  },
  fromAmino(object: QueryERC20ToDenomRequestAmino): QueryERC20ToDenomRequest {
    return {
      erc20: object.erc20
    };
  },
  toAmino(message: QueryERC20ToDenomRequest): QueryERC20ToDenomRequestAmino {
    const obj: any = {};
    obj.erc20 = message.erc20;
    return obj;
  },
  fromAminoMsg(object: QueryERC20ToDenomRequestAminoMsg): QueryERC20ToDenomRequest {
    return QueryERC20ToDenomRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryERC20ToDenomRequestProtoMsg): QueryERC20ToDenomRequest {
    return QueryERC20ToDenomRequest.decode(message.value);
  },
  toProto(message: QueryERC20ToDenomRequest): Uint8Array {
    return QueryERC20ToDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryERC20ToDenomRequest): QueryERC20ToDenomRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryERC20ToDenomRequest",
      value: QueryERC20ToDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryERC20ToDenomResponse(): QueryERC20ToDenomResponse {
  return {
    denom: "",
    cosmosOriginated: false
  };
}
export const QueryERC20ToDenomResponse = {
  encode(message: QueryERC20ToDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.cosmosOriginated === true) {
      writer.uint32(16).bool(message.cosmosOriginated);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryERC20ToDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryERC20ToDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.cosmosOriginated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryERC20ToDenomResponse {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      cosmosOriginated: isSet(object.cosmosOriginated) ? Boolean(object.cosmosOriginated) : false
    };
  },
  toJSON(message: QueryERC20ToDenomResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.cosmosOriginated !== undefined && (obj.cosmosOriginated = message.cosmosOriginated);
    return obj;
  },
  fromPartial(object: Partial<QueryERC20ToDenomResponse>): QueryERC20ToDenomResponse {
    const message = createBaseQueryERC20ToDenomResponse();
    message.denom = object.denom ?? "";
    message.cosmosOriginated = object.cosmosOriginated ?? false;
    return message;
  },
  fromAmino(object: QueryERC20ToDenomResponseAmino): QueryERC20ToDenomResponse {
    return {
      denom: object.denom,
      cosmosOriginated: object.cosmos_originated
    };
  },
  toAmino(message: QueryERC20ToDenomResponse): QueryERC20ToDenomResponseAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.cosmos_originated = message.cosmosOriginated;
    return obj;
  },
  fromAminoMsg(object: QueryERC20ToDenomResponseAminoMsg): QueryERC20ToDenomResponse {
    return QueryERC20ToDenomResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryERC20ToDenomResponseProtoMsg): QueryERC20ToDenomResponse {
    return QueryERC20ToDenomResponse.decode(message.value);
  },
  toProto(message: QueryERC20ToDenomResponse): Uint8Array {
    return QueryERC20ToDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryERC20ToDenomResponse): QueryERC20ToDenomResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryERC20ToDenomResponse",
      value: QueryERC20ToDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDenomToERC20Request(): QueryDenomToERC20Request {
  return {
    denom: ""
  };
}
export const QueryDenomToERC20Request = {
  encode(message: QueryDenomToERC20Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomToERC20Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomToERC20Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomToERC20Request {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryDenomToERC20Request): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<QueryDenomToERC20Request>): QueryDenomToERC20Request {
    const message = createBaseQueryDenomToERC20Request();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryDenomToERC20RequestAmino): QueryDenomToERC20Request {
    return {
      denom: object.denom
    };
  },
  toAmino(message: QueryDenomToERC20Request): QueryDenomToERC20RequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryDenomToERC20RequestAminoMsg): QueryDenomToERC20Request {
    return QueryDenomToERC20Request.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomToERC20RequestProtoMsg): QueryDenomToERC20Request {
    return QueryDenomToERC20Request.decode(message.value);
  },
  toProto(message: QueryDenomToERC20Request): Uint8Array {
    return QueryDenomToERC20Request.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomToERC20Request): QueryDenomToERC20RequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryDenomToERC20Request",
      value: QueryDenomToERC20Request.encode(message).finish()
    };
  }
};
function createBaseQueryDenomToERC20Response(): QueryDenomToERC20Response {
  return {
    erc20: "",
    cosmosOriginated: false
  };
}
export const QueryDenomToERC20Response = {
  encode(message: QueryDenomToERC20Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    if (message.cosmosOriginated === true) {
      writer.uint32(16).bool(message.cosmosOriginated);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomToERC20Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomToERC20Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20 = reader.string();
          break;
        case 2:
          message.cosmosOriginated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDenomToERC20Response {
    return {
      erc20: isSet(object.erc20) ? String(object.erc20) : "",
      cosmosOriginated: isSet(object.cosmosOriginated) ? Boolean(object.cosmosOriginated) : false
    };
  },
  toJSON(message: QueryDenomToERC20Response): unknown {
    const obj: any = {};
    message.erc20 !== undefined && (obj.erc20 = message.erc20);
    message.cosmosOriginated !== undefined && (obj.cosmosOriginated = message.cosmosOriginated);
    return obj;
  },
  fromPartial(object: Partial<QueryDenomToERC20Response>): QueryDenomToERC20Response {
    const message = createBaseQueryDenomToERC20Response();
    message.erc20 = object.erc20 ?? "";
    message.cosmosOriginated = object.cosmosOriginated ?? false;
    return message;
  },
  fromAmino(object: QueryDenomToERC20ResponseAmino): QueryDenomToERC20Response {
    return {
      erc20: object.erc20,
      cosmosOriginated: object.cosmos_originated
    };
  },
  toAmino(message: QueryDenomToERC20Response): QueryDenomToERC20ResponseAmino {
    const obj: any = {};
    obj.erc20 = message.erc20;
    obj.cosmos_originated = message.cosmosOriginated;
    return obj;
  },
  fromAminoMsg(object: QueryDenomToERC20ResponseAminoMsg): QueryDenomToERC20Response {
    return QueryDenomToERC20Response.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDenomToERC20ResponseProtoMsg): QueryDenomToERC20Response {
    return QueryDenomToERC20Response.decode(message.value);
  },
  toProto(message: QueryDenomToERC20Response): Uint8Array {
    return QueryDenomToERC20Response.encode(message).finish();
  },
  toProtoMsg(message: QueryDenomToERC20Response): QueryDenomToERC20ResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryDenomToERC20Response",
      value: QueryDenomToERC20Response.encode(message).finish()
    };
  }
};
function createBaseQueryLastObservedEthBlockRequest(): QueryLastObservedEthBlockRequest {
  return {
    useV1Key: false
  };
}
export const QueryLastObservedEthBlockRequest = {
  encode(message: QueryLastObservedEthBlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.useV1Key === true) {
      writer.uint32(8).bool(message.useV1Key);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastObservedEthBlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastObservedEthBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.useV1Key = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLastObservedEthBlockRequest {
    return {
      useV1Key: isSet(object.useV1Key) ? Boolean(object.useV1Key) : false
    };
  },
  toJSON(message: QueryLastObservedEthBlockRequest): unknown {
    const obj: any = {};
    message.useV1Key !== undefined && (obj.useV1Key = message.useV1Key);
    return obj;
  },
  fromPartial(object: Partial<QueryLastObservedEthBlockRequest>): QueryLastObservedEthBlockRequest {
    const message = createBaseQueryLastObservedEthBlockRequest();
    message.useV1Key = object.useV1Key ?? false;
    return message;
  },
  fromAmino(object: QueryLastObservedEthBlockRequestAmino): QueryLastObservedEthBlockRequest {
    return {
      useV1Key: object.use_v1_key
    };
  },
  toAmino(message: QueryLastObservedEthBlockRequest): QueryLastObservedEthBlockRequestAmino {
    const obj: any = {};
    obj.use_v1_key = message.useV1Key;
    return obj;
  },
  fromAminoMsg(object: QueryLastObservedEthBlockRequestAminoMsg): QueryLastObservedEthBlockRequest {
    return QueryLastObservedEthBlockRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastObservedEthBlockRequestProtoMsg): QueryLastObservedEthBlockRequest {
    return QueryLastObservedEthBlockRequest.decode(message.value);
  },
  toProto(message: QueryLastObservedEthBlockRequest): Uint8Array {
    return QueryLastObservedEthBlockRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastObservedEthBlockRequest): QueryLastObservedEthBlockRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryLastObservedEthBlockRequest",
      value: QueryLastObservedEthBlockRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLastObservedEthBlockResponse(): QueryLastObservedEthBlockResponse {
  return {
    block: Long.UZERO
  };
}
export const QueryLastObservedEthBlockResponse = {
  encode(message: QueryLastObservedEthBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.block.isZero()) {
      writer.uint32(8).uint64(message.block);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastObservedEthBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastObservedEthBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLastObservedEthBlockResponse {
    return {
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.UZERO
    };
  },
  toJSON(message: QueryLastObservedEthBlockResponse): unknown {
    const obj: any = {};
    message.block !== undefined && (obj.block = (message.block || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryLastObservedEthBlockResponse>): QueryLastObservedEthBlockResponse {
    const message = createBaseQueryLastObservedEthBlockResponse();
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryLastObservedEthBlockResponseAmino): QueryLastObservedEthBlockResponse {
    return {
      block: Long.fromString(object.block)
    };
  },
  toAmino(message: QueryLastObservedEthBlockResponse): QueryLastObservedEthBlockResponseAmino {
    const obj: any = {};
    obj.block = message.block ? message.block.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLastObservedEthBlockResponseAminoMsg): QueryLastObservedEthBlockResponse {
    return QueryLastObservedEthBlockResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastObservedEthBlockResponseProtoMsg): QueryLastObservedEthBlockResponse {
    return QueryLastObservedEthBlockResponse.decode(message.value);
  },
  toProto(message: QueryLastObservedEthBlockResponse): Uint8Array {
    return QueryLastObservedEthBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastObservedEthBlockResponse): QueryLastObservedEthBlockResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryLastObservedEthBlockResponse",
      value: QueryLastObservedEthBlockResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLastObservedEthNonceRequest(): QueryLastObservedEthNonceRequest {
  return {
    useV1Key: false
  };
}
export const QueryLastObservedEthNonceRequest = {
  encode(message: QueryLastObservedEthNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.useV1Key === true) {
      writer.uint32(8).bool(message.useV1Key);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastObservedEthNonceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastObservedEthNonceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.useV1Key = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLastObservedEthNonceRequest {
    return {
      useV1Key: isSet(object.useV1Key) ? Boolean(object.useV1Key) : false
    };
  },
  toJSON(message: QueryLastObservedEthNonceRequest): unknown {
    const obj: any = {};
    message.useV1Key !== undefined && (obj.useV1Key = message.useV1Key);
    return obj;
  },
  fromPartial(object: Partial<QueryLastObservedEthNonceRequest>): QueryLastObservedEthNonceRequest {
    const message = createBaseQueryLastObservedEthNonceRequest();
    message.useV1Key = object.useV1Key ?? false;
    return message;
  },
  fromAmino(object: QueryLastObservedEthNonceRequestAmino): QueryLastObservedEthNonceRequest {
    return {
      useV1Key: object.use_v1_key
    };
  },
  toAmino(message: QueryLastObservedEthNonceRequest): QueryLastObservedEthNonceRequestAmino {
    const obj: any = {};
    obj.use_v1_key = message.useV1Key;
    return obj;
  },
  fromAminoMsg(object: QueryLastObservedEthNonceRequestAminoMsg): QueryLastObservedEthNonceRequest {
    return QueryLastObservedEthNonceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastObservedEthNonceRequestProtoMsg): QueryLastObservedEthNonceRequest {
    return QueryLastObservedEthNonceRequest.decode(message.value);
  },
  toProto(message: QueryLastObservedEthNonceRequest): Uint8Array {
    return QueryLastObservedEthNonceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastObservedEthNonceRequest): QueryLastObservedEthNonceRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryLastObservedEthNonceRequest",
      value: QueryLastObservedEthNonceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLastObservedEthNonceResponse(): QueryLastObservedEthNonceResponse {
  return {
    nonce: Long.UZERO
  };
}
export const QueryLastObservedEthNonceResponse = {
  encode(message: QueryLastObservedEthNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nonce.isZero()) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastObservedEthNonceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastObservedEthNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLastObservedEthNonceResponse {
    return {
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO
    };
  },
  toJSON(message: QueryLastObservedEthNonceResponse): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryLastObservedEthNonceResponse>): QueryLastObservedEthNonceResponse {
    const message = createBaseQueryLastObservedEthNonceResponse();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryLastObservedEthNonceResponseAmino): QueryLastObservedEthNonceResponse {
    return {
      nonce: Long.fromString(object.nonce)
    };
  },
  toAmino(message: QueryLastObservedEthNonceResponse): QueryLastObservedEthNonceResponseAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLastObservedEthNonceResponseAminoMsg): QueryLastObservedEthNonceResponse {
    return QueryLastObservedEthNonceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLastObservedEthNonceResponseProtoMsg): QueryLastObservedEthNonceResponse {
    return QueryLastObservedEthNonceResponse.decode(message.value);
  },
  toProto(message: QueryLastObservedEthNonceResponse): Uint8Array {
    return QueryLastObservedEthNonceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastObservedEthNonceResponse): QueryLastObservedEthNonceResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryLastObservedEthNonceResponse",
      value: QueryLastObservedEthNonceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAttestationsRequest(): QueryAttestationsRequest {
  return {
    limit: Long.UZERO,
    orderBy: "",
    claimType: "",
    nonce: Long.UZERO,
    height: Long.UZERO,
    useV1Key: false
  };
}
export const QueryAttestationsRequest = {
  encode(message: QueryAttestationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.limit.isZero()) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.orderBy !== "") {
      writer.uint32(18).string(message.orderBy);
    }
    if (message.claimType !== "") {
      writer.uint32(26).string(message.claimType);
    }
    if (!message.nonce.isZero()) {
      writer.uint32(32).uint64(message.nonce);
    }
    if (!message.height.isZero()) {
      writer.uint32(40).uint64(message.height);
    }
    if (message.useV1Key === true) {
      writer.uint32(48).bool(message.useV1Key);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = (reader.uint64() as Long);
          break;
        case 2:
          message.orderBy = reader.string();
          break;
        case 3:
          message.claimType = reader.string();
          break;
        case 4:
          message.nonce = (reader.uint64() as Long);
          break;
        case 5:
          message.height = (reader.uint64() as Long);
          break;
        case 6:
          message.useV1Key = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAttestationsRequest {
    return {
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO,
      orderBy: isSet(object.orderBy) ? String(object.orderBy) : "",
      claimType: isSet(object.claimType) ? String(object.claimType) : "",
      nonce: isSet(object.nonce) ? Long.fromValue(object.nonce) : Long.UZERO,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
      useV1Key: isSet(object.useV1Key) ? Boolean(object.useV1Key) : false
    };
  },
  toJSON(message: QueryAttestationsRequest): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = (message.limit || Long.UZERO).toString());
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    message.claimType !== undefined && (obj.claimType = message.claimType);
    message.nonce !== undefined && (obj.nonce = (message.nonce || Long.UZERO).toString());
    message.height !== undefined && (obj.height = (message.height || Long.UZERO).toString());
    message.useV1Key !== undefined && (obj.useV1Key = message.useV1Key);
    return obj;
  },
  fromPartial(object: Partial<QueryAttestationsRequest>): QueryAttestationsRequest {
    const message = createBaseQueryAttestationsRequest();
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    message.orderBy = object.orderBy ?? "";
    message.claimType = object.claimType ?? "";
    message.nonce = object.nonce !== undefined && object.nonce !== null ? Long.fromValue(object.nonce) : Long.UZERO;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.useV1Key = object.useV1Key ?? false;
    return message;
  },
  fromAmino(object: QueryAttestationsRequestAmino): QueryAttestationsRequest {
    return {
      limit: Long.fromString(object.limit),
      orderBy: object.order_by,
      claimType: object.claim_type,
      nonce: Long.fromString(object.nonce),
      height: Long.fromString(object.height),
      useV1Key: object.use_v1_key
    };
  },
  toAmino(message: QueryAttestationsRequest): QueryAttestationsRequestAmino {
    const obj: any = {};
    obj.limit = message.limit ? message.limit.toString() : undefined;
    obj.order_by = message.orderBy;
    obj.claim_type = message.claimType;
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.use_v1_key = message.useV1Key;
    return obj;
  },
  fromAminoMsg(object: QueryAttestationsRequestAminoMsg): QueryAttestationsRequest {
    return QueryAttestationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAttestationsRequestProtoMsg): QueryAttestationsRequest {
    return QueryAttestationsRequest.decode(message.value);
  },
  toProto(message: QueryAttestationsRequest): Uint8Array {
    return QueryAttestationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAttestationsRequest): QueryAttestationsRequestProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryAttestationsRequest",
      value: QueryAttestationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAttestationsResponse(): QueryAttestationsResponse {
  return {
    attestations: []
  };
}
export const QueryAttestationsResponse = {
  encode(message: QueryAttestationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attestations) {
      Attestation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestations.push(Attestation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAttestationsResponse {
    return {
      attestations: Array.isArray(object?.attestations) ? object.attestations.map((e: any) => Attestation.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryAttestationsResponse): unknown {
    const obj: any = {};
    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? Attestation.toJSON(e) : undefined);
    } else {
      obj.attestations = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryAttestationsResponse>): QueryAttestationsResponse {
    const message = createBaseQueryAttestationsResponse();
    message.attestations = object.attestations?.map(e => Attestation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAttestationsResponseAmino): QueryAttestationsResponse {
    return {
      attestations: Array.isArray(object?.attestations) ? object.attestations.map((e: any) => Attestation.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryAttestationsResponse): QueryAttestationsResponseAmino {
    const obj: any = {};
    if (message.attestations) {
      obj.attestations = message.attestations.map(e => e ? Attestation.toAmino(e) : undefined);
    } else {
      obj.attestations = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAttestationsResponseAminoMsg): QueryAttestationsResponse {
    return QueryAttestationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAttestationsResponseProtoMsg): QueryAttestationsResponse {
    return QueryAttestationsResponse.decode(message.value);
  },
  toProto(message: QueryAttestationsResponse): Uint8Array {
    return QueryAttestationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAttestationsResponse): QueryAttestationsResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryAttestationsResponse",
      value: QueryAttestationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegateKeysByValidatorAddress(): QueryDelegateKeysByValidatorAddress {
  return {
    validatorAddress: ""
  };
}
export const QueryDelegateKeysByValidatorAddress = {
  encode(message: QueryDelegateKeysByValidatorAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByValidatorAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegateKeysByValidatorAddress {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  toJSON(message: QueryDelegateKeysByValidatorAddress): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegateKeysByValidatorAddress>): QueryDelegateKeysByValidatorAddress {
    const message = createBaseQueryDelegateKeysByValidatorAddress();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByValidatorAddressAmino): QueryDelegateKeysByValidatorAddress {
    return {
      validatorAddress: object.validator_address
    };
  },
  toAmino(message: QueryDelegateKeysByValidatorAddress): QueryDelegateKeysByValidatorAddressAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByValidatorAddressAminoMsg): QueryDelegateKeysByValidatorAddress {
    return QueryDelegateKeysByValidatorAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByValidatorAddressProtoMsg): QueryDelegateKeysByValidatorAddress {
    return QueryDelegateKeysByValidatorAddress.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByValidatorAddress): Uint8Array {
    return QueryDelegateKeysByValidatorAddress.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByValidatorAddress): QueryDelegateKeysByValidatorAddressProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryDelegateKeysByValidatorAddress",
      value: QueryDelegateKeysByValidatorAddress.encode(message).finish()
    };
  }
};
function createBaseQueryDelegateKeysByValidatorAddressResponse(): QueryDelegateKeysByValidatorAddressResponse {
  return {
    ethAddress: "",
    orchestratorAddress: ""
  };
}
export const QueryDelegateKeysByValidatorAddressResponse = {
  encode(message: QueryDelegateKeysByValidatorAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByValidatorAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ethAddress = reader.string();
          break;
        case 2:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegateKeysByValidatorAddressResponse {
    return {
      ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
      orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : ""
    };
  },
  toJSON(message: QueryDelegateKeysByValidatorAddressResponse): unknown {
    const obj: any = {};
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegateKeysByValidatorAddressResponse>): QueryDelegateKeysByValidatorAddressResponse {
    const message = createBaseQueryDelegateKeysByValidatorAddressResponse();
    message.ethAddress = object.ethAddress ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByValidatorAddressResponseAmino): QueryDelegateKeysByValidatorAddressResponse {
    return {
      ethAddress: object.eth_address,
      orchestratorAddress: object.orchestrator_address
    };
  },
  toAmino(message: QueryDelegateKeysByValidatorAddressResponse): QueryDelegateKeysByValidatorAddressResponseAmino {
    const obj: any = {};
    obj.eth_address = message.ethAddress;
    obj.orchestrator_address = message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByValidatorAddressResponseAminoMsg): QueryDelegateKeysByValidatorAddressResponse {
    return QueryDelegateKeysByValidatorAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByValidatorAddressResponseProtoMsg): QueryDelegateKeysByValidatorAddressResponse {
    return QueryDelegateKeysByValidatorAddressResponse.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByValidatorAddressResponse): Uint8Array {
    return QueryDelegateKeysByValidatorAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByValidatorAddressResponse): QueryDelegateKeysByValidatorAddressResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryDelegateKeysByValidatorAddressResponse",
      value: QueryDelegateKeysByValidatorAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegateKeysByEthAddress(): QueryDelegateKeysByEthAddress {
  return {
    ethAddress: ""
  };
}
export const QueryDelegateKeysByEthAddress = {
  encode(message: QueryDelegateKeysByEthAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ethAddress !== "") {
      writer.uint32(10).string(message.ethAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByEthAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByEthAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ethAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegateKeysByEthAddress {
    return {
      ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : ""
    };
  },
  toJSON(message: QueryDelegateKeysByEthAddress): unknown {
    const obj: any = {};
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegateKeysByEthAddress>): QueryDelegateKeysByEthAddress {
    const message = createBaseQueryDelegateKeysByEthAddress();
    message.ethAddress = object.ethAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByEthAddressAmino): QueryDelegateKeysByEthAddress {
    return {
      ethAddress: object.eth_address
    };
  },
  toAmino(message: QueryDelegateKeysByEthAddress): QueryDelegateKeysByEthAddressAmino {
    const obj: any = {};
    obj.eth_address = message.ethAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByEthAddressAminoMsg): QueryDelegateKeysByEthAddress {
    return QueryDelegateKeysByEthAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByEthAddressProtoMsg): QueryDelegateKeysByEthAddress {
    return QueryDelegateKeysByEthAddress.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByEthAddress): Uint8Array {
    return QueryDelegateKeysByEthAddress.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByEthAddress): QueryDelegateKeysByEthAddressProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryDelegateKeysByEthAddress",
      value: QueryDelegateKeysByEthAddress.encode(message).finish()
    };
  }
};
function createBaseQueryDelegateKeysByEthAddressResponse(): QueryDelegateKeysByEthAddressResponse {
  return {
    validatorAddress: "",
    orchestratorAddress: ""
  };
}
export const QueryDelegateKeysByEthAddressResponse = {
  encode(message: QueryDelegateKeysByEthAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.orchestratorAddress !== "") {
      writer.uint32(18).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByEthAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByEthAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegateKeysByEthAddressResponse {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : ""
    };
  },
  toJSON(message: QueryDelegateKeysByEthAddressResponse): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegateKeysByEthAddressResponse>): QueryDelegateKeysByEthAddressResponse {
    const message = createBaseQueryDelegateKeysByEthAddressResponse();
    message.validatorAddress = object.validatorAddress ?? "";
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByEthAddressResponseAmino): QueryDelegateKeysByEthAddressResponse {
    return {
      validatorAddress: object.validator_address,
      orchestratorAddress: object.orchestrator_address
    };
  },
  toAmino(message: QueryDelegateKeysByEthAddressResponse): QueryDelegateKeysByEthAddressResponseAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.orchestrator_address = message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByEthAddressResponseAminoMsg): QueryDelegateKeysByEthAddressResponse {
    return QueryDelegateKeysByEthAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByEthAddressResponseProtoMsg): QueryDelegateKeysByEthAddressResponse {
    return QueryDelegateKeysByEthAddressResponse.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByEthAddressResponse): Uint8Array {
    return QueryDelegateKeysByEthAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByEthAddressResponse): QueryDelegateKeysByEthAddressResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryDelegateKeysByEthAddressResponse",
      value: QueryDelegateKeysByEthAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegateKeysByOrchestratorAddress(): QueryDelegateKeysByOrchestratorAddress {
  return {
    orchestratorAddress: ""
  };
}
export const QueryDelegateKeysByOrchestratorAddress = {
  encode(message: QueryDelegateKeysByOrchestratorAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orchestratorAddress !== "") {
      writer.uint32(10).string(message.orchestratorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByOrchestratorAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orchestratorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegateKeysByOrchestratorAddress {
    return {
      orchestratorAddress: isSet(object.orchestratorAddress) ? String(object.orchestratorAddress) : ""
    };
  },
  toJSON(message: QueryDelegateKeysByOrchestratorAddress): unknown {
    const obj: any = {};
    message.orchestratorAddress !== undefined && (obj.orchestratorAddress = message.orchestratorAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegateKeysByOrchestratorAddress>): QueryDelegateKeysByOrchestratorAddress {
    const message = createBaseQueryDelegateKeysByOrchestratorAddress();
    message.orchestratorAddress = object.orchestratorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByOrchestratorAddressAmino): QueryDelegateKeysByOrchestratorAddress {
    return {
      orchestratorAddress: object.orchestrator_address
    };
  },
  toAmino(message: QueryDelegateKeysByOrchestratorAddress): QueryDelegateKeysByOrchestratorAddressAmino {
    const obj: any = {};
    obj.orchestrator_address = message.orchestratorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByOrchestratorAddressAminoMsg): QueryDelegateKeysByOrchestratorAddress {
    return QueryDelegateKeysByOrchestratorAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByOrchestratorAddressProtoMsg): QueryDelegateKeysByOrchestratorAddress {
    return QueryDelegateKeysByOrchestratorAddress.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByOrchestratorAddress): Uint8Array {
    return QueryDelegateKeysByOrchestratorAddress.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByOrchestratorAddress): QueryDelegateKeysByOrchestratorAddressProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryDelegateKeysByOrchestratorAddress",
      value: QueryDelegateKeysByOrchestratorAddress.encode(message).finish()
    };
  }
};
function createBaseQueryDelegateKeysByOrchestratorAddressResponse(): QueryDelegateKeysByOrchestratorAddressResponse {
  return {
    validatorAddress: "",
    ethAddress: ""
  };
}
export const QueryDelegateKeysByOrchestratorAddressResponse = {
  encode(message: QueryDelegateKeysByOrchestratorAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.ethAddress !== "") {
      writer.uint32(18).string(message.ethAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegateKeysByOrchestratorAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.ethAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegateKeysByOrchestratorAddressResponse {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : ""
    };
  },
  toJSON(message: QueryDelegateKeysByOrchestratorAddressResponse): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegateKeysByOrchestratorAddressResponse>): QueryDelegateKeysByOrchestratorAddressResponse {
    const message = createBaseQueryDelegateKeysByOrchestratorAddressResponse();
    message.validatorAddress = object.validatorAddress ?? "";
    message.ethAddress = object.ethAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegateKeysByOrchestratorAddressResponseAmino): QueryDelegateKeysByOrchestratorAddressResponse {
    return {
      validatorAddress: object.validator_address,
      ethAddress: object.eth_address
    };
  },
  toAmino(message: QueryDelegateKeysByOrchestratorAddressResponse): QueryDelegateKeysByOrchestratorAddressResponseAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.eth_address = message.ethAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegateKeysByOrchestratorAddressResponseAminoMsg): QueryDelegateKeysByOrchestratorAddressResponse {
    return QueryDelegateKeysByOrchestratorAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegateKeysByOrchestratorAddressResponseProtoMsg): QueryDelegateKeysByOrchestratorAddressResponse {
    return QueryDelegateKeysByOrchestratorAddressResponse.decode(message.value);
  },
  toProto(message: QueryDelegateKeysByOrchestratorAddressResponse): Uint8Array {
    return QueryDelegateKeysByOrchestratorAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegateKeysByOrchestratorAddressResponse): QueryDelegateKeysByOrchestratorAddressResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse",
      value: QueryDelegateKeysByOrchestratorAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPendingSendToEth(): QueryPendingSendToEth {
  return {
    senderAddress: ""
  };
}
export const QueryPendingSendToEth = {
  encode(message: QueryPendingSendToEth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingSendToEth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPendingSendToEth {
    return {
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : ""
    };
  },
  toJSON(message: QueryPendingSendToEth): unknown {
    const obj: any = {};
    message.senderAddress !== undefined && (obj.senderAddress = message.senderAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryPendingSendToEth>): QueryPendingSendToEth {
    const message = createBaseQueryPendingSendToEth();
    message.senderAddress = object.senderAddress ?? "";
    return message;
  },
  fromAmino(object: QueryPendingSendToEthAmino): QueryPendingSendToEth {
    return {
      senderAddress: object.sender_address
    };
  },
  toAmino(message: QueryPendingSendToEth): QueryPendingSendToEthAmino {
    const obj: any = {};
    obj.sender_address = message.senderAddress;
    return obj;
  },
  fromAminoMsg(object: QueryPendingSendToEthAminoMsg): QueryPendingSendToEth {
    return QueryPendingSendToEth.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingSendToEthProtoMsg): QueryPendingSendToEth {
    return QueryPendingSendToEth.decode(message.value);
  },
  toProto(message: QueryPendingSendToEth): Uint8Array {
    return QueryPendingSendToEth.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingSendToEth): QueryPendingSendToEthProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryPendingSendToEth",
      value: QueryPendingSendToEth.encode(message).finish()
    };
  }
};
function createBaseQueryPendingSendToEthResponse(): QueryPendingSendToEthResponse {
  return {
    transfersInBatches: [],
    unbatchedTransfers: []
  };
}
export const QueryPendingSendToEthResponse = {
  encode(message: QueryPendingSendToEthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transfersInBatches) {
      OutgoingTransferTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.unbatchedTransfers) {
      OutgoingTransferTx.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingSendToEthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingSendToEthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transfersInBatches.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPendingSendToEthResponse {
    return {
      transfersInBatches: Array.isArray(object?.transfersInBatches) ? object.transfersInBatches.map((e: any) => OutgoingTransferTx.fromJSON(e)) : [],
      unbatchedTransfers: Array.isArray(object?.unbatchedTransfers) ? object.unbatchedTransfers.map((e: any) => OutgoingTransferTx.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryPendingSendToEthResponse): unknown {
    const obj: any = {};
    if (message.transfersInBatches) {
      obj.transfersInBatches = message.transfersInBatches.map(e => e ? OutgoingTransferTx.toJSON(e) : undefined);
    } else {
      obj.transfersInBatches = [];
    }
    if (message.unbatchedTransfers) {
      obj.unbatchedTransfers = message.unbatchedTransfers.map(e => e ? OutgoingTransferTx.toJSON(e) : undefined);
    } else {
      obj.unbatchedTransfers = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryPendingSendToEthResponse>): QueryPendingSendToEthResponse {
    const message = createBaseQueryPendingSendToEthResponse();
    message.transfersInBatches = object.transfersInBatches?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    message.unbatchedTransfers = object.unbatchedTransfers?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPendingSendToEthResponseAmino): QueryPendingSendToEthResponse {
    return {
      transfersInBatches: Array.isArray(object?.transfers_in_batches) ? object.transfers_in_batches.map((e: any) => OutgoingTransferTx.fromAmino(e)) : [],
      unbatchedTransfers: Array.isArray(object?.unbatched_transfers) ? object.unbatched_transfers.map((e: any) => OutgoingTransferTx.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryPendingSendToEthResponse): QueryPendingSendToEthResponseAmino {
    const obj: any = {};
    if (message.transfersInBatches) {
      obj.transfers_in_batches = message.transfersInBatches.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
    } else {
      obj.transfers_in_batches = [];
    }
    if (message.unbatchedTransfers) {
      obj.unbatched_transfers = message.unbatchedTransfers.map(e => e ? OutgoingTransferTx.toAmino(e) : undefined);
    } else {
      obj.unbatched_transfers = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryPendingSendToEthResponseAminoMsg): QueryPendingSendToEthResponse {
    return QueryPendingSendToEthResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingSendToEthResponseProtoMsg): QueryPendingSendToEthResponse {
    return QueryPendingSendToEthResponse.decode(message.value);
  },
  toProto(message: QueryPendingSendToEthResponse): Uint8Array {
    return QueryPendingSendToEthResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingSendToEthResponse): QueryPendingSendToEthResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryPendingSendToEthResponse",
      value: QueryPendingSendToEthResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPendingIbcAutoForwards(): QueryPendingIbcAutoForwards {
  return {
    limit: Long.UZERO
  };
}
export const QueryPendingIbcAutoForwards = {
  encode(message: QueryPendingIbcAutoForwards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.limit.isZero()) {
      writer.uint32(8).uint64(message.limit);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingIbcAutoForwards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingIbcAutoForwards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPendingIbcAutoForwards {
    return {
      limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO
    };
  },
  toJSON(message: QueryPendingIbcAutoForwards): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = (message.limit || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryPendingIbcAutoForwards>): QueryPendingIbcAutoForwards {
    const message = createBaseQueryPendingIbcAutoForwards();
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryPendingIbcAutoForwardsAmino): QueryPendingIbcAutoForwards {
    return {
      limit: Long.fromString(object.limit)
    };
  },
  toAmino(message: QueryPendingIbcAutoForwards): QueryPendingIbcAutoForwardsAmino {
    const obj: any = {};
    obj.limit = message.limit ? message.limit.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPendingIbcAutoForwardsAminoMsg): QueryPendingIbcAutoForwards {
    return QueryPendingIbcAutoForwards.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingIbcAutoForwardsProtoMsg): QueryPendingIbcAutoForwards {
    return QueryPendingIbcAutoForwards.decode(message.value);
  },
  toProto(message: QueryPendingIbcAutoForwards): Uint8Array {
    return QueryPendingIbcAutoForwards.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingIbcAutoForwards): QueryPendingIbcAutoForwardsProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryPendingIbcAutoForwards",
      value: QueryPendingIbcAutoForwards.encode(message).finish()
    };
  }
};
function createBaseQueryPendingIbcAutoForwardsResponse(): QueryPendingIbcAutoForwardsResponse {
  return {
    pendingIbcAutoForwards: []
  };
}
export const QueryPendingIbcAutoForwardsResponse = {
  encode(message: QueryPendingIbcAutoForwardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pendingIbcAutoForwards) {
      PendingIbcAutoForward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingIbcAutoForwardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingIbcAutoForwardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingIbcAutoForwards.push(PendingIbcAutoForward.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryPendingIbcAutoForwardsResponse {
    return {
      pendingIbcAutoForwards: Array.isArray(object?.pendingIbcAutoForwards) ? object.pendingIbcAutoForwards.map((e: any) => PendingIbcAutoForward.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryPendingIbcAutoForwardsResponse): unknown {
    const obj: any = {};
    if (message.pendingIbcAutoForwards) {
      obj.pendingIbcAutoForwards = message.pendingIbcAutoForwards.map(e => e ? PendingIbcAutoForward.toJSON(e) : undefined);
    } else {
      obj.pendingIbcAutoForwards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryPendingIbcAutoForwardsResponse>): QueryPendingIbcAutoForwardsResponse {
    const message = createBaseQueryPendingIbcAutoForwardsResponse();
    message.pendingIbcAutoForwards = object.pendingIbcAutoForwards?.map(e => PendingIbcAutoForward.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPendingIbcAutoForwardsResponseAmino): QueryPendingIbcAutoForwardsResponse {
    return {
      pendingIbcAutoForwards: Array.isArray(object?.pending_ibc_auto_forwards) ? object.pending_ibc_auto_forwards.map((e: any) => PendingIbcAutoForward.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryPendingIbcAutoForwardsResponse): QueryPendingIbcAutoForwardsResponseAmino {
    const obj: any = {};
    if (message.pendingIbcAutoForwards) {
      obj.pending_ibc_auto_forwards = message.pendingIbcAutoForwards.map(e => e ? PendingIbcAutoForward.toAmino(e) : undefined);
    } else {
      obj.pending_ibc_auto_forwards = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryPendingIbcAutoForwardsResponseAminoMsg): QueryPendingIbcAutoForwardsResponse {
    return QueryPendingIbcAutoForwardsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPendingIbcAutoForwardsResponseProtoMsg): QueryPendingIbcAutoForwardsResponse {
    return QueryPendingIbcAutoForwardsResponse.decode(message.value);
  },
  toProto(message: QueryPendingIbcAutoForwardsResponse): Uint8Array {
    return QueryPendingIbcAutoForwardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPendingIbcAutoForwardsResponse): QueryPendingIbcAutoForwardsResponseProtoMsg {
    return {
      typeUrl: "/gravity.v1.QueryPendingIbcAutoForwardsResponse",
      value: QueryPendingIbcAutoForwardsResponse.encode(message).finish()
    };
  }
};