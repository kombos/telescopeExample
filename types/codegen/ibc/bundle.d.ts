import * as _166 from "./applications/transfer/v1/genesis";
import * as _167 from "./applications/transfer/v1/query";
import * as _168 from "./applications/transfer/v1/transfer";
import * as _169 from "./applications/transfer/v1/tx";
import * as _170 from "./applications/transfer/v2/packet";
import * as _171 from "./core/channel/v1/channel";
import * as _172 from "./core/channel/v1/genesis";
import * as _173 from "./core/channel/v1/query";
import * as _174 from "./core/channel/v1/tx";
import * as _175 from "./core/client/v1/client";
import * as _176 from "./core/client/v1/genesis";
import * as _177 from "./core/client/v1/query";
import * as _178 from "./core/client/v1/tx";
import * as _179 from "./core/commitment/v1/commitment";
import * as _180 from "./core/connection/v1/connection";
import * as _181 from "./core/connection/v1/genesis";
import * as _182 from "./core/connection/v1/query";
import * as _183 from "./core/connection/v1/tx";
import * as _184 from "./core/port/v1/query";
import * as _185 from "./core/types/v1/genesis";
import * as _186 from "./lightclients/localhost/v1/localhost";
import * as _187 from "./lightclients/solomachine/v1/solomachine";
import * as _188 from "./lightclients/solomachine/v2/solomachine";
import * as _189 from "./lightclients/tendermint/v1/tendermint";
import * as _309 from "./applications/transfer/v1/query.rpc.Query";
import * as _310 from "./core/channel/v1/query.rpc.Query";
import * as _311 from "./core/client/v1/query.rpc.Query";
import * as _312 from "./core/connection/v1/query.rpc.Query";
import * as _313 from "./core/port/v1/query.rpc.Query";
import * as _314 from "./applications/transfer/v1/tx.rpc.msg";
import * as _315 from "./core/channel/v1/tx.rpc.msg";
import * as _316 from "./core/client/v1/tx.rpc.msg";
import * as _317 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _314.MsgClientImpl;
                QueryClientImpl: typeof _309.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _167.QueryDenomTraceRequest): Promise<_167.QueryDenomTraceResponse>;
                    denomTraces(request?: _167.QueryDenomTracesRequest): Promise<_167.QueryDenomTracesResponse>;
                    params(request?: _167.QueryParamsRequest): Promise<_167.QueryParamsResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _169.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _169.MsgTransfer): {
                            typeUrl: string;
                            value: _169.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _169.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _169.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _169.MsgTransfer): {
                            typeUrl: string;
                            value: _169.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _169.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _169.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _169.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgTransfer;
                    fromJSON(object: any): _169.MsgTransfer;
                    toJSON(message: _169.MsgTransfer): unknown;
                    fromPartial(object: Partial<_169.MsgTransfer>): _169.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _169.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgTransferResponse;
                    fromJSON(_: any): _169.MsgTransferResponse;
                    toJSON(_: _169.MsgTransferResponse): unknown;
                    fromPartial(_: Partial<_169.MsgTransferResponse>): _169.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _168.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.DenomTrace;
                    fromJSON(object: any): _168.DenomTrace;
                    toJSON(message: _168.DenomTrace): unknown;
                    fromPartial(object: Partial<_168.DenomTrace>): _168.DenomTrace;
                };
                Params: {
                    encode(message: _168.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Params;
                    fromJSON(object: any): _168.Params;
                    toJSON(message: _168.Params): unknown;
                    fromPartial(object: Partial<_168.Params>): _168.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _167.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryDenomTraceRequest;
                    fromJSON(object: any): _167.QueryDenomTraceRequest;
                    toJSON(message: _167.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_167.QueryDenomTraceRequest>): _167.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _167.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryDenomTraceResponse;
                    fromJSON(object: any): _167.QueryDenomTraceResponse;
                    toJSON(message: _167.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_167.QueryDenomTraceResponse>): _167.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _167.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryDenomTracesRequest;
                    fromJSON(object: any): _167.QueryDenomTracesRequest;
                    toJSON(message: _167.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_167.QueryDenomTracesRequest>): _167.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _167.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryDenomTracesResponse;
                    fromJSON(object: any): _167.QueryDenomTracesResponse;
                    toJSON(message: _167.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_167.QueryDenomTracesResponse>): _167.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _167.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryParamsRequest;
                    fromJSON(_: any): _167.QueryParamsRequest;
                    toJSON(_: _167.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_167.QueryParamsRequest>): _167.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _167.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryParamsResponse;
                    fromJSON(object: any): _167.QueryParamsResponse;
                    toJSON(message: _167.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_167.QueryParamsResponse>): _167.QueryParamsResponse;
                };
                GenesisState: {
                    encode(message: _166.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.GenesisState;
                    fromJSON(object: any): _166.GenesisState;
                    toJSON(message: _166.GenesisState): unknown;
                    fromPartial(object: Partial<_166.GenesisState>): _166.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _170.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.FungibleTokenPacketData;
                    fromJSON(object: any): _170.FungibleTokenPacketData;
                    toJSON(message: _170.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_170.FungibleTokenPacketData>): _170.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _315.MsgClientImpl;
                QueryClientImpl: typeof _310.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _173.QueryChannelRequest): Promise<_173.QueryChannelResponse>;
                    channels(request?: _173.QueryChannelsRequest): Promise<_173.QueryChannelsResponse>;
                    connectionChannels(request: _173.QueryConnectionChannelsRequest): Promise<_173.QueryConnectionChannelsResponse>;
                    channelClientState(request: _173.QueryChannelClientStateRequest): Promise<_173.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _173.QueryChannelConsensusStateRequest): Promise<_173.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _173.QueryPacketCommitmentRequest): Promise<_173.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _173.QueryPacketCommitmentsRequest): Promise<_173.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _173.QueryPacketReceiptRequest): Promise<_173.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _173.QueryPacketAcknowledgementRequest): Promise<_173.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _173.QueryPacketAcknowledgementsRequest): Promise<_173.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _173.QueryUnreceivedPacketsRequest): Promise<_173.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _173.QueryUnreceivedAcksRequest): Promise<_173.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _173.QueryNextSequenceReceiveRequest): Promise<_173.QueryNextSequenceReceiveResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _174.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _174.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _174.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _174.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _174.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _174.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _174.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _174.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _174.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _174.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _174.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _174.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _174.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _174.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _174.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _174.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _174.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _174.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _174.MsgRecvPacket): {
                            typeUrl: string;
                            value: _174.MsgRecvPacket;
                        };
                        timeout(value: _174.MsgTimeout): {
                            typeUrl: string;
                            value: _174.MsgTimeout;
                        };
                        timeoutOnClose(value: _174.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _174.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _174.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _174.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _174.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _174.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _174.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _174.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _174.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _174.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _174.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _174.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _174.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _174.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _174.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _174.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _174.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _174.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _174.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _174.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _174.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _174.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _174.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _174.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _174.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _174.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _174.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _174.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _174.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _174.MsgRecvPacket): {
                            typeUrl: string;
                            value: _174.MsgRecvPacket;
                        };
                        timeout(value: _174.MsgTimeout): {
                            typeUrl: string;
                            value: _174.MsgTimeout;
                        };
                        timeoutOnClose(value: _174.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _174.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _174.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _174.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _174.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _174.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _174.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _174.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _174.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _174.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _174.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _174.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _174.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _174.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _174.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _174.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _174.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _174.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _174.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _174.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _174.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _174.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _174.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _174.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    encode(message: _174.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgChannelOpenInit;
                    fromJSON(object: any): _174.MsgChannelOpenInit;
                    toJSON(message: _174.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_174.MsgChannelOpenInit>): _174.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(_: _174.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _174.MsgChannelOpenInitResponse;
                    toJSON(_: _174.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: Partial<_174.MsgChannelOpenInitResponse>): _174.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _174.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgChannelOpenTry;
                    fromJSON(object: any): _174.MsgChannelOpenTry;
                    toJSON(message: _174.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_174.MsgChannelOpenTry>): _174.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(_: _174.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _174.MsgChannelOpenTryResponse;
                    toJSON(_: _174.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: Partial<_174.MsgChannelOpenTryResponse>): _174.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _174.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgChannelOpenAck;
                    fromJSON(object: any): _174.MsgChannelOpenAck;
                    toJSON(message: _174.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_174.MsgChannelOpenAck>): _174.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _174.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _174.MsgChannelOpenAckResponse;
                    toJSON(_: _174.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_174.MsgChannelOpenAckResponse>): _174.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _174.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgChannelOpenConfirm;
                    fromJSON(object: any): _174.MsgChannelOpenConfirm;
                    toJSON(message: _174.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_174.MsgChannelOpenConfirm>): _174.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _174.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _174.MsgChannelOpenConfirmResponse;
                    toJSON(_: _174.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_174.MsgChannelOpenConfirmResponse>): _174.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _174.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgChannelCloseInit;
                    fromJSON(object: any): _174.MsgChannelCloseInit;
                    toJSON(message: _174.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_174.MsgChannelCloseInit>): _174.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _174.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _174.MsgChannelCloseInitResponse;
                    toJSON(_: _174.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_174.MsgChannelCloseInitResponse>): _174.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _174.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgChannelCloseConfirm;
                    fromJSON(object: any): _174.MsgChannelCloseConfirm;
                    toJSON(message: _174.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_174.MsgChannelCloseConfirm>): _174.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _174.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _174.MsgChannelCloseConfirmResponse;
                    toJSON(_: _174.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_174.MsgChannelCloseConfirmResponse>): _174.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _174.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgRecvPacket;
                    fromJSON(object: any): _174.MsgRecvPacket;
                    toJSON(message: _174.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_174.MsgRecvPacket>): _174.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(_: _174.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgRecvPacketResponse;
                    fromJSON(_: any): _174.MsgRecvPacketResponse;
                    toJSON(_: _174.MsgRecvPacketResponse): unknown;
                    fromPartial(_: Partial<_174.MsgRecvPacketResponse>): _174.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _174.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgTimeout;
                    fromJSON(object: any): _174.MsgTimeout;
                    toJSON(message: _174.MsgTimeout): unknown;
                    fromPartial(object: Partial<_174.MsgTimeout>): _174.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(_: _174.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgTimeoutResponse;
                    fromJSON(_: any): _174.MsgTimeoutResponse;
                    toJSON(_: _174.MsgTimeoutResponse): unknown;
                    fromPartial(_: Partial<_174.MsgTimeoutResponse>): _174.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _174.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgTimeoutOnClose;
                    fromJSON(object: any): _174.MsgTimeoutOnClose;
                    toJSON(message: _174.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_174.MsgTimeoutOnClose>): _174.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(_: _174.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _174.MsgTimeoutOnCloseResponse;
                    toJSON(_: _174.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: Partial<_174.MsgTimeoutOnCloseResponse>): _174.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _174.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgAcknowledgement;
                    fromJSON(object: any): _174.MsgAcknowledgement;
                    toJSON(message: _174.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_174.MsgAcknowledgement>): _174.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(_: _174.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.MsgAcknowledgementResponse;
                    fromJSON(_: any): _174.MsgAcknowledgementResponse;
                    toJSON(_: _174.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: Partial<_174.MsgAcknowledgementResponse>): _174.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _173.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryChannelRequest;
                    fromJSON(object: any): _173.QueryChannelRequest;
                    toJSON(message: _173.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_173.QueryChannelRequest>): _173.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _173.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryChannelResponse;
                    fromJSON(object: any): _173.QueryChannelResponse;
                    toJSON(message: _173.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_173.QueryChannelResponse>): _173.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _173.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryChannelsRequest;
                    fromJSON(object: any): _173.QueryChannelsRequest;
                    toJSON(message: _173.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_173.QueryChannelsRequest>): _173.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _173.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryChannelsResponse;
                    fromJSON(object: any): _173.QueryChannelsResponse;
                    toJSON(message: _173.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_173.QueryChannelsResponse>): _173.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _173.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _173.QueryConnectionChannelsRequest;
                    toJSON(message: _173.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_173.QueryConnectionChannelsRequest>): _173.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _173.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _173.QueryConnectionChannelsResponse;
                    toJSON(message: _173.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_173.QueryConnectionChannelsResponse>): _173.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _173.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryChannelClientStateRequest;
                    fromJSON(object: any): _173.QueryChannelClientStateRequest;
                    toJSON(message: _173.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_173.QueryChannelClientStateRequest>): _173.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _173.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryChannelClientStateResponse;
                    fromJSON(object: any): _173.QueryChannelClientStateResponse;
                    toJSON(message: _173.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_173.QueryChannelClientStateResponse>): _173.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _173.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _173.QueryChannelConsensusStateRequest;
                    toJSON(message: _173.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_173.QueryChannelConsensusStateRequest>): _173.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _173.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _173.QueryChannelConsensusStateResponse;
                    toJSON(message: _173.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_173.QueryChannelConsensusStateResponse>): _173.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _173.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _173.QueryPacketCommitmentRequest;
                    toJSON(message: _173.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_173.QueryPacketCommitmentRequest>): _173.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _173.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _173.QueryPacketCommitmentResponse;
                    toJSON(message: _173.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_173.QueryPacketCommitmentResponse>): _173.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _173.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _173.QueryPacketCommitmentsRequest;
                    toJSON(message: _173.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_173.QueryPacketCommitmentsRequest>): _173.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _173.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _173.QueryPacketCommitmentsResponse;
                    toJSON(message: _173.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_173.QueryPacketCommitmentsResponse>): _173.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _173.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryPacketReceiptRequest;
                    fromJSON(object: any): _173.QueryPacketReceiptRequest;
                    toJSON(message: _173.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_173.QueryPacketReceiptRequest>): _173.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _173.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryPacketReceiptResponse;
                    fromJSON(object: any): _173.QueryPacketReceiptResponse;
                    toJSON(message: _173.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_173.QueryPacketReceiptResponse>): _173.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _173.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _173.QueryPacketAcknowledgementRequest;
                    toJSON(message: _173.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_173.QueryPacketAcknowledgementRequest>): _173.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _173.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _173.QueryPacketAcknowledgementResponse;
                    toJSON(message: _173.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_173.QueryPacketAcknowledgementResponse>): _173.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _173.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _173.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _173.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_173.QueryPacketAcknowledgementsRequest>): _173.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _173.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _173.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _173.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_173.QueryPacketAcknowledgementsResponse>): _173.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _173.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _173.QueryUnreceivedPacketsRequest;
                    toJSON(message: _173.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_173.QueryUnreceivedPacketsRequest>): _173.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _173.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _173.QueryUnreceivedPacketsResponse;
                    toJSON(message: _173.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_173.QueryUnreceivedPacketsResponse>): _173.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _173.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _173.QueryUnreceivedAcksRequest;
                    toJSON(message: _173.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_173.QueryUnreceivedAcksRequest>): _173.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _173.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _173.QueryUnreceivedAcksResponse;
                    toJSON(message: _173.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_173.QueryUnreceivedAcksResponse>): _173.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _173.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _173.QueryNextSequenceReceiveRequest;
                    toJSON(message: _173.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_173.QueryNextSequenceReceiveRequest>): _173.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _173.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _173.QueryNextSequenceReceiveResponse;
                    toJSON(message: _173.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_173.QueryNextSequenceReceiveResponse>): _173.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _172.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.GenesisState;
                    fromJSON(object: any): _172.GenesisState;
                    toJSON(message: _172.GenesisState): unknown;
                    fromPartial(object: Partial<_172.GenesisState>): _172.GenesisState;
                };
                PacketSequence: {
                    encode(message: _172.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.PacketSequence;
                    fromJSON(object: any): _172.PacketSequence;
                    toJSON(message: _172.PacketSequence): unknown;
                    fromPartial(object: Partial<_172.PacketSequence>): _172.PacketSequence;
                };
                stateFromJSON(object: any): _171.State;
                stateToJSON(object: _171.State): string;
                orderFromJSON(object: any): _171.Order;
                orderToJSON(object: _171.Order): string;
                State: typeof _171.State;
                StateSDKType: typeof _171.StateSDKType;
                Order: typeof _171.Order;
                OrderSDKType: typeof _171.OrderSDKType;
                Channel: {
                    encode(message: _171.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Channel;
                    fromJSON(object: any): _171.Channel;
                    toJSON(message: _171.Channel): unknown;
                    fromPartial(object: Partial<_171.Channel>): _171.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _171.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.IdentifiedChannel;
                    fromJSON(object: any): _171.IdentifiedChannel;
                    toJSON(message: _171.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_171.IdentifiedChannel>): _171.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _171.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Counterparty;
                    fromJSON(object: any): _171.Counterparty;
                    toJSON(message: _171.Counterparty): unknown;
                    fromPartial(object: Partial<_171.Counterparty>): _171.Counterparty;
                };
                Packet: {
                    encode(message: _171.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Packet;
                    fromJSON(object: any): _171.Packet;
                    toJSON(message: _171.Packet): unknown;
                    fromPartial(object: Partial<_171.Packet>): _171.Packet;
                };
                PacketState: {
                    encode(message: _171.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.PacketState;
                    fromJSON(object: any): _171.PacketState;
                    toJSON(message: _171.PacketState): unknown;
                    fromPartial(object: Partial<_171.PacketState>): _171.PacketState;
                };
                Acknowledgement: {
                    encode(message: _171.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Acknowledgement;
                    fromJSON(object: any): _171.Acknowledgement;
                    toJSON(message: _171.Acknowledgement): unknown;
                    fromPartial(object: Partial<_171.Acknowledgement>): _171.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _316.MsgClientImpl;
                QueryClientImpl: typeof _311.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _177.QueryClientStateRequest): Promise<_177.QueryClientStateResponse>;
                    clientStates(request?: _177.QueryClientStatesRequest): Promise<_177.QueryClientStatesResponse>;
                    consensusState(request: _177.QueryConsensusStateRequest): Promise<_177.QueryConsensusStateResponse>;
                    consensusStates(request: _177.QueryConsensusStatesRequest): Promise<_177.QueryConsensusStatesResponse>;
                    clientStatus(request: _177.QueryClientStatusRequest): Promise<_177.QueryClientStatusResponse>;
                    clientParams(request?: _177.QueryClientParamsRequest): Promise<_177.QueryClientParamsResponse>;
                    upgradedClientState(request?: _177.QueryUpgradedClientStateRequest): Promise<_177.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _177.QueryUpgradedConsensusStateRequest): Promise<_177.QueryUpgradedConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _178.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _178.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _178.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _178.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _178.MsgCreateClient): {
                            typeUrl: string;
                            value: _178.MsgCreateClient;
                        };
                        updateClient(value: _178.MsgUpdateClient): {
                            typeUrl: string;
                            value: _178.MsgUpdateClient;
                        };
                        upgradeClient(value: _178.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _178.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _178.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _178.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _178.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _178.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _178.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _178.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _178.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _178.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _178.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _178.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _178.MsgCreateClient): {
                            typeUrl: string;
                            value: _178.MsgCreateClient;
                        };
                        updateClient(value: _178.MsgUpdateClient): {
                            typeUrl: string;
                            value: _178.MsgUpdateClient;
                        };
                        upgradeClient(value: _178.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _178.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _178.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _178.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _178.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _178.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _178.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _178.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _178.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _178.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _178.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _178.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _178.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MsgCreateClient;
                    fromJSON(object: any): _178.MsgCreateClient;
                    toJSON(message: _178.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_178.MsgCreateClient>): _178.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _178.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MsgCreateClientResponse;
                    fromJSON(_: any): _178.MsgCreateClientResponse;
                    toJSON(_: _178.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_178.MsgCreateClientResponse>): _178.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _178.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MsgUpdateClient;
                    fromJSON(object: any): _178.MsgUpdateClient;
                    toJSON(message: _178.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_178.MsgUpdateClient>): _178.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _178.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MsgUpdateClientResponse;
                    fromJSON(_: any): _178.MsgUpdateClientResponse;
                    toJSON(_: _178.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_178.MsgUpdateClientResponse>): _178.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _178.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MsgUpgradeClient;
                    fromJSON(object: any): _178.MsgUpgradeClient;
                    toJSON(message: _178.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_178.MsgUpgradeClient>): _178.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _178.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MsgUpgradeClientResponse;
                    fromJSON(_: any): _178.MsgUpgradeClientResponse;
                    toJSON(_: _178.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_178.MsgUpgradeClientResponse>): _178.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _178.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _178.MsgSubmitMisbehaviour;
                    toJSON(message: _178.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_178.MsgSubmitMisbehaviour>): _178.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _178.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _178.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _178.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_178.MsgSubmitMisbehaviourResponse>): _178.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _177.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryClientStateRequest;
                    fromJSON(object: any): _177.QueryClientStateRequest;
                    toJSON(message: _177.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_177.QueryClientStateRequest>): _177.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _177.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryClientStateResponse;
                    fromJSON(object: any): _177.QueryClientStateResponse;
                    toJSON(message: _177.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_177.QueryClientStateResponse>): _177.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _177.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryClientStatesRequest;
                    fromJSON(object: any): _177.QueryClientStatesRequest;
                    toJSON(message: _177.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_177.QueryClientStatesRequest>): _177.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _177.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryClientStatesResponse;
                    fromJSON(object: any): _177.QueryClientStatesResponse;
                    toJSON(message: _177.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_177.QueryClientStatesResponse>): _177.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _177.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryConsensusStateRequest;
                    fromJSON(object: any): _177.QueryConsensusStateRequest;
                    toJSON(message: _177.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_177.QueryConsensusStateRequest>): _177.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _177.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryConsensusStateResponse;
                    fromJSON(object: any): _177.QueryConsensusStateResponse;
                    toJSON(message: _177.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_177.QueryConsensusStateResponse>): _177.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _177.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryConsensusStatesRequest;
                    fromJSON(object: any): _177.QueryConsensusStatesRequest;
                    toJSON(message: _177.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_177.QueryConsensusStatesRequest>): _177.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _177.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryConsensusStatesResponse;
                    fromJSON(object: any): _177.QueryConsensusStatesResponse;
                    toJSON(message: _177.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_177.QueryConsensusStatesResponse>): _177.QueryConsensusStatesResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _177.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryClientStatusRequest;
                    fromJSON(object: any): _177.QueryClientStatusRequest;
                    toJSON(message: _177.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_177.QueryClientStatusRequest>): _177.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _177.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryClientStatusResponse;
                    fromJSON(object: any): _177.QueryClientStatusResponse;
                    toJSON(message: _177.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_177.QueryClientStatusResponse>): _177.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _177.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryClientParamsRequest;
                    fromJSON(_: any): _177.QueryClientParamsRequest;
                    toJSON(_: _177.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_177.QueryClientParamsRequest>): _177.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _177.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryClientParamsResponse;
                    fromJSON(object: any): _177.QueryClientParamsResponse;
                    toJSON(message: _177.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_177.QueryClientParamsResponse>): _177.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _177.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _177.QueryUpgradedClientStateRequest;
                    toJSON(_: _177.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_177.QueryUpgradedClientStateRequest>): _177.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _177.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _177.QueryUpgradedClientStateResponse;
                    toJSON(message: _177.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_177.QueryUpgradedClientStateResponse>): _177.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _177.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _177.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _177.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_177.QueryUpgradedConsensusStateRequest>): _177.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _177.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _177.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _177.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_177.QueryUpgradedConsensusStateResponse>): _177.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _176.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GenesisState;
                    fromJSON(object: any): _176.GenesisState;
                    toJSON(message: _176.GenesisState): unknown;
                    fromPartial(object: Partial<_176.GenesisState>): _176.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _176.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GenesisMetadata;
                    fromJSON(object: any): _176.GenesisMetadata;
                    toJSON(message: _176.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_176.GenesisMetadata>): _176.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _176.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _176.IdentifiedGenesisMetadata;
                    toJSON(message: _176.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_176.IdentifiedGenesisMetadata>): _176.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _175.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.IdentifiedClientState;
                    fromJSON(object: any): _175.IdentifiedClientState;
                    toJSON(message: _175.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_175.IdentifiedClientState>): _175.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _175.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ConsensusStateWithHeight;
                    fromJSON(object: any): _175.ConsensusStateWithHeight;
                    toJSON(message: _175.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_175.ConsensusStateWithHeight>): _175.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _175.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ClientConsensusStates;
                    fromJSON(object: any): _175.ClientConsensusStates;
                    toJSON(message: _175.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_175.ClientConsensusStates>): _175.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _175.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ClientUpdateProposal;
                    fromJSON(object: any): _175.ClientUpdateProposal;
                    toJSON(message: _175.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_175.ClientUpdateProposal>): _175.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _175.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.UpgradeProposal;
                    fromJSON(object: any): _175.UpgradeProposal;
                    toJSON(message: _175.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_175.UpgradeProposal>): _175.UpgradeProposal;
                };
                Height: {
                    encode(message: _175.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Height;
                    fromJSON(object: any): _175.Height;
                    toJSON(message: _175.Height): unknown;
                    fromPartial(object: Partial<_175.Height>): _175.Height;
                };
                Params: {
                    encode(message: _175.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Params;
                    fromJSON(object: any): _175.Params;
                    toJSON(message: _175.Params): unknown;
                    fromPartial(object: Partial<_175.Params>): _175.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _179.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MerkleRoot;
                    fromJSON(object: any): _179.MerkleRoot;
                    toJSON(message: _179.MerkleRoot): unknown;
                    fromPartial(object: Partial<_179.MerkleRoot>): _179.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _179.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MerklePrefix;
                    fromJSON(object: any): _179.MerklePrefix;
                    toJSON(message: _179.MerklePrefix): unknown;
                    fromPartial(object: Partial<_179.MerklePrefix>): _179.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _179.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MerklePath;
                    fromJSON(object: any): _179.MerklePath;
                    toJSON(message: _179.MerklePath): unknown;
                    fromPartial(object: Partial<_179.MerklePath>): _179.MerklePath;
                };
                MerkleProof: {
                    encode(message: _179.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MerkleProof;
                    fromJSON(object: any): _179.MerkleProof;
                    toJSON(message: _179.MerkleProof): unknown;
                    fromPartial(object: Partial<_179.MerkleProof>): _179.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _317.MsgClientImpl;
                QueryClientImpl: typeof _312.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _182.QueryConnectionRequest): Promise<_182.QueryConnectionResponse>;
                    connections(request?: _182.QueryConnectionsRequest): Promise<_182.QueryConnectionsResponse>;
                    clientConnections(request: _182.QueryClientConnectionsRequest): Promise<_182.QueryClientConnectionsResponse>;
                    connectionClientState(request: _182.QueryConnectionClientStateRequest): Promise<_182.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _182.QueryConnectionConsensusStateRequest): Promise<_182.QueryConnectionConsensusStateResponse>;
                };
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _183.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _183.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _183.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _183.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _183.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _183.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _183.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _183.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _183.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _183.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _183.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _183.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _183.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _183.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _183.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _183.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _183.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _183.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _183.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _183.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _183.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _183.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _183.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _183.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _183.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _183.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgConnectionOpenInit;
                    fromJSON(object: any): _183.MsgConnectionOpenInit;
                    toJSON(message: _183.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_183.MsgConnectionOpenInit>): _183.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _183.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _183.MsgConnectionOpenInitResponse;
                    toJSON(_: _183.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_183.MsgConnectionOpenInitResponse>): _183.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _183.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgConnectionOpenTry;
                    fromJSON(object: any): _183.MsgConnectionOpenTry;
                    toJSON(message: _183.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_183.MsgConnectionOpenTry>): _183.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _183.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _183.MsgConnectionOpenTryResponse;
                    toJSON(_: _183.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_183.MsgConnectionOpenTryResponse>): _183.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _183.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgConnectionOpenAck;
                    fromJSON(object: any): _183.MsgConnectionOpenAck;
                    toJSON(message: _183.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_183.MsgConnectionOpenAck>): _183.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _183.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _183.MsgConnectionOpenAckResponse;
                    toJSON(_: _183.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_183.MsgConnectionOpenAckResponse>): _183.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _183.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _183.MsgConnectionOpenConfirm;
                    toJSON(message: _183.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_183.MsgConnectionOpenConfirm>): _183.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _183.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _183.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _183.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_183.MsgConnectionOpenConfirmResponse>): _183.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _182.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryConnectionRequest;
                    fromJSON(object: any): _182.QueryConnectionRequest;
                    toJSON(message: _182.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_182.QueryConnectionRequest>): _182.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _182.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryConnectionResponse;
                    fromJSON(object: any): _182.QueryConnectionResponse;
                    toJSON(message: _182.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_182.QueryConnectionResponse>): _182.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _182.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryConnectionsRequest;
                    fromJSON(object: any): _182.QueryConnectionsRequest;
                    toJSON(message: _182.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_182.QueryConnectionsRequest>): _182.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _182.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryConnectionsResponse;
                    fromJSON(object: any): _182.QueryConnectionsResponse;
                    toJSON(message: _182.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_182.QueryConnectionsResponse>): _182.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _182.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryClientConnectionsRequest;
                    fromJSON(object: any): _182.QueryClientConnectionsRequest;
                    toJSON(message: _182.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_182.QueryClientConnectionsRequest>): _182.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _182.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryClientConnectionsResponse;
                    fromJSON(object: any): _182.QueryClientConnectionsResponse;
                    toJSON(message: _182.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_182.QueryClientConnectionsResponse>): _182.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _182.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _182.QueryConnectionClientStateRequest;
                    toJSON(message: _182.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_182.QueryConnectionClientStateRequest>): _182.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _182.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _182.QueryConnectionClientStateResponse;
                    toJSON(message: _182.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_182.QueryConnectionClientStateResponse>): _182.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _182.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _182.QueryConnectionConsensusStateRequest;
                    toJSON(message: _182.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_182.QueryConnectionConsensusStateRequest>): _182.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _182.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _182.QueryConnectionConsensusStateResponse;
                    toJSON(message: _182.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_182.QueryConnectionConsensusStateResponse>): _182.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _181.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.GenesisState;
                    fromJSON(object: any): _181.GenesisState;
                    toJSON(message: _181.GenesisState): unknown;
                    fromPartial(object: Partial<_181.GenesisState>): _181.GenesisState;
                };
                stateFromJSON(object: any): _180.State;
                stateToJSON(object: _180.State): string;
                State: typeof _180.State;
                StateSDKType: typeof _180.StateSDKType;
                ConnectionEnd: {
                    encode(message: _180.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ConnectionEnd;
                    fromJSON(object: any): _180.ConnectionEnd;
                    toJSON(message: _180.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_180.ConnectionEnd>): _180.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _180.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.IdentifiedConnection;
                    fromJSON(object: any): _180.IdentifiedConnection;
                    toJSON(message: _180.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_180.IdentifiedConnection>): _180.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _180.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Counterparty;
                    fromJSON(object: any): _180.Counterparty;
                    toJSON(message: _180.Counterparty): unknown;
                    fromPartial(object: Partial<_180.Counterparty>): _180.Counterparty;
                };
                ClientPaths: {
                    encode(message: _180.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ClientPaths;
                    fromJSON(object: any): _180.ClientPaths;
                    toJSON(message: _180.ClientPaths): unknown;
                    fromPartial(object: Partial<_180.ClientPaths>): _180.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _180.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.ConnectionPaths;
                    fromJSON(object: any): _180.ConnectionPaths;
                    toJSON(message: _180.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_180.ConnectionPaths>): _180.ConnectionPaths;
                };
                Version: {
                    encode(message: _180.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Version;
                    fromJSON(object: any): _180.Version;
                    toJSON(message: _180.Version): unknown;
                    fromPartial(object: Partial<_180.Version>): _180.Version;
                };
                Params: {
                    encode(message: _180.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Params;
                    fromJSON(object: any): _180.Params;
                    toJSON(message: _180.Params): unknown;
                    fromPartial(object: Partial<_180.Params>): _180.Params;
                };
            };
        }
        namespace port {
            const v1: {
                QueryClientImpl: typeof _313.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    appVersion(request: _184.QueryAppVersionRequest): Promise<_184.QueryAppVersionResponse>;
                };
                QueryAppVersionRequest: {
                    encode(message: _184.QueryAppVersionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.QueryAppVersionRequest;
                    fromJSON(object: any): _184.QueryAppVersionRequest;
                    toJSON(message: _184.QueryAppVersionRequest): unknown;
                    fromPartial(object: Partial<_184.QueryAppVersionRequest>): _184.QueryAppVersionRequest;
                };
                QueryAppVersionResponse: {
                    encode(message: _184.QueryAppVersionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.QueryAppVersionResponse;
                    fromJSON(object: any): _184.QueryAppVersionResponse;
                    toJSON(message: _184.QueryAppVersionResponse): unknown;
                    fromPartial(object: Partial<_184.QueryAppVersionResponse>): _184.QueryAppVersionResponse;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _185.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.GenesisState;
                    fromJSON(object: any): _185.GenesisState;
                    toJSON(message: _185.GenesisState): unknown;
                    fromPartial(object: Partial<_185.GenesisState>): _185.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _186.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.ClientState;
                    fromJSON(object: any): _186.ClientState;
                    toJSON(message: _186.ClientState): unknown;
                    fromPartial(object: Partial<_186.ClientState>): _186.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _187.DataType;
                dataTypeToJSON(object: _187.DataType): string;
                DataType: typeof _187.DataType;
                DataTypeSDKType: typeof _187.DataTypeSDKType;
                ClientState: {
                    encode(message: _187.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ClientState;
                    fromJSON(object: any): _187.ClientState;
                    toJSON(message: _187.ClientState): unknown;
                    fromPartial(object: Partial<_187.ClientState>): _187.ClientState;
                };
                ConsensusState: {
                    encode(message: _187.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ConsensusState;
                    fromJSON(object: any): _187.ConsensusState;
                    toJSON(message: _187.ConsensusState): unknown;
                    fromPartial(object: Partial<_187.ConsensusState>): _187.ConsensusState;
                };
                Header: {
                    encode(message: _187.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Header;
                    fromJSON(object: any): _187.Header;
                    toJSON(message: _187.Header): unknown;
                    fromPartial(object: Partial<_187.Header>): _187.Header;
                };
                Misbehaviour: {
                    encode(message: _187.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.Misbehaviour;
                    fromJSON(object: any): _187.Misbehaviour;
                    toJSON(message: _187.Misbehaviour): unknown;
                    fromPartial(object: Partial<_187.Misbehaviour>): _187.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _187.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.SignatureAndData;
                    fromJSON(object: any): _187.SignatureAndData;
                    toJSON(message: _187.SignatureAndData): unknown;
                    fromPartial(object: Partial<_187.SignatureAndData>): _187.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _187.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.TimestampedSignatureData;
                    fromJSON(object: any): _187.TimestampedSignatureData;
                    toJSON(message: _187.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_187.TimestampedSignatureData>): _187.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _187.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.SignBytes;
                    fromJSON(object: any): _187.SignBytes;
                    toJSON(message: _187.SignBytes): unknown;
                    fromPartial(object: Partial<_187.SignBytes>): _187.SignBytes;
                };
                HeaderData: {
                    encode(message: _187.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.HeaderData;
                    fromJSON(object: any): _187.HeaderData;
                    toJSON(message: _187.HeaderData): unknown;
                    fromPartial(object: Partial<_187.HeaderData>): _187.HeaderData;
                };
                ClientStateData: {
                    encode(message: _187.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ClientStateData;
                    fromJSON(object: any): _187.ClientStateData;
                    toJSON(message: _187.ClientStateData): unknown;
                    fromPartial(object: Partial<_187.ClientStateData>): _187.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _187.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ConsensusStateData;
                    fromJSON(object: any): _187.ConsensusStateData;
                    toJSON(message: _187.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_187.ConsensusStateData>): _187.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _187.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ConnectionStateData;
                    fromJSON(object: any): _187.ConnectionStateData;
                    toJSON(message: _187.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_187.ConnectionStateData>): _187.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _187.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.ChannelStateData;
                    fromJSON(object: any): _187.ChannelStateData;
                    toJSON(message: _187.ChannelStateData): unknown;
                    fromPartial(object: Partial<_187.ChannelStateData>): _187.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _187.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.PacketCommitmentData;
                    fromJSON(object: any): _187.PacketCommitmentData;
                    toJSON(message: _187.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_187.PacketCommitmentData>): _187.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _187.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.PacketAcknowledgementData;
                    fromJSON(object: any): _187.PacketAcknowledgementData;
                    toJSON(message: _187.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_187.PacketAcknowledgementData>): _187.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _187.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.PacketReceiptAbsenceData;
                    fromJSON(object: any): _187.PacketReceiptAbsenceData;
                    toJSON(message: _187.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_187.PacketReceiptAbsenceData>): _187.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _187.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.NextSequenceRecvData;
                    fromJSON(object: any): _187.NextSequenceRecvData;
                    toJSON(message: _187.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_187.NextSequenceRecvData>): _187.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _188.DataType;
                dataTypeToJSON(object: _188.DataType): string;
                DataType: typeof _188.DataType;
                DataTypeSDKType: typeof _188.DataTypeSDKType;
                ClientState: {
                    encode(message: _188.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.ClientState;
                    fromJSON(object: any): _188.ClientState;
                    toJSON(message: _188.ClientState): unknown;
                    fromPartial(object: Partial<_188.ClientState>): _188.ClientState;
                };
                ConsensusState: {
                    encode(message: _188.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.ConsensusState;
                    fromJSON(object: any): _188.ConsensusState;
                    toJSON(message: _188.ConsensusState): unknown;
                    fromPartial(object: Partial<_188.ConsensusState>): _188.ConsensusState;
                };
                Header: {
                    encode(message: _188.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Header;
                    fromJSON(object: any): _188.Header;
                    toJSON(message: _188.Header): unknown;
                    fromPartial(object: Partial<_188.Header>): _188.Header;
                };
                Misbehaviour: {
                    encode(message: _188.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Misbehaviour;
                    fromJSON(object: any): _188.Misbehaviour;
                    toJSON(message: _188.Misbehaviour): unknown;
                    fromPartial(object: Partial<_188.Misbehaviour>): _188.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _188.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.SignatureAndData;
                    fromJSON(object: any): _188.SignatureAndData;
                    toJSON(message: _188.SignatureAndData): unknown;
                    fromPartial(object: Partial<_188.SignatureAndData>): _188.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _188.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.TimestampedSignatureData;
                    fromJSON(object: any): _188.TimestampedSignatureData;
                    toJSON(message: _188.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_188.TimestampedSignatureData>): _188.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _188.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.SignBytes;
                    fromJSON(object: any): _188.SignBytes;
                    toJSON(message: _188.SignBytes): unknown;
                    fromPartial(object: Partial<_188.SignBytes>): _188.SignBytes;
                };
                HeaderData: {
                    encode(message: _188.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.HeaderData;
                    fromJSON(object: any): _188.HeaderData;
                    toJSON(message: _188.HeaderData): unknown;
                    fromPartial(object: Partial<_188.HeaderData>): _188.HeaderData;
                };
                ClientStateData: {
                    encode(message: _188.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.ClientStateData;
                    fromJSON(object: any): _188.ClientStateData;
                    toJSON(message: _188.ClientStateData): unknown;
                    fromPartial(object: Partial<_188.ClientStateData>): _188.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _188.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.ConsensusStateData;
                    fromJSON(object: any): _188.ConsensusStateData;
                    toJSON(message: _188.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_188.ConsensusStateData>): _188.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _188.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.ConnectionStateData;
                    fromJSON(object: any): _188.ConnectionStateData;
                    toJSON(message: _188.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_188.ConnectionStateData>): _188.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _188.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.ChannelStateData;
                    fromJSON(object: any): _188.ChannelStateData;
                    toJSON(message: _188.ChannelStateData): unknown;
                    fromPartial(object: Partial<_188.ChannelStateData>): _188.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _188.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.PacketCommitmentData;
                    fromJSON(object: any): _188.PacketCommitmentData;
                    toJSON(message: _188.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_188.PacketCommitmentData>): _188.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _188.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.PacketAcknowledgementData;
                    fromJSON(object: any): _188.PacketAcknowledgementData;
                    toJSON(message: _188.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_188.PacketAcknowledgementData>): _188.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _188.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.PacketReceiptAbsenceData;
                    fromJSON(object: any): _188.PacketReceiptAbsenceData;
                    toJSON(message: _188.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_188.PacketReceiptAbsenceData>): _188.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _188.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.NextSequenceRecvData;
                    fromJSON(object: any): _188.NextSequenceRecvData;
                    toJSON(message: _188.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_188.NextSequenceRecvData>): _188.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _189.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.ClientState;
                    fromJSON(object: any): _189.ClientState;
                    toJSON(message: _189.ClientState): unknown;
                    fromPartial(object: Partial<_189.ClientState>): _189.ClientState;
                };
                ConsensusState: {
                    encode(message: _189.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.ConsensusState;
                    fromJSON(object: any): _189.ConsensusState;
                    toJSON(message: _189.ConsensusState): unknown;
                    fromPartial(object: Partial<_189.ConsensusState>): _189.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _189.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.Misbehaviour;
                    fromJSON(object: any): _189.Misbehaviour;
                    toJSON(message: _189.Misbehaviour): unknown;
                    fromPartial(object: Partial<_189.Misbehaviour>): _189.Misbehaviour;
                };
                Header: {
                    encode(message: _189.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.Header;
                    fromJSON(object: any): _189.Header;
                    toJSON(message: _189.Header): unknown;
                    fromPartial(object: Partial<_189.Header>): _189.Header;
                };
                Fraction: {
                    encode(message: _189.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.Fraction;
                    fromJSON(object: any): _189.Fraction;
                    toJSON(message: _189.Fraction): unknown;
                    fromPartial(object: Partial<_189.Fraction>): _189.Fraction;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _314.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _315.MsgClientImpl;
                    };
                    client: {
                        v1: _316.MsgClientImpl;
                    };
                    connection: {
                        v1: _317.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: {
                            denomTrace(request: _167.QueryDenomTraceRequest): Promise<_167.QueryDenomTraceResponse>;
                            denomTraces(request?: _167.QueryDenomTracesRequest): Promise<_167.QueryDenomTracesResponse>;
                            params(request?: _167.QueryParamsRequest): Promise<_167.QueryParamsResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _173.QueryChannelRequest): Promise<_173.QueryChannelResponse>;
                            channels(request?: _173.QueryChannelsRequest): Promise<_173.QueryChannelsResponse>;
                            connectionChannels(request: _173.QueryConnectionChannelsRequest): Promise<_173.QueryConnectionChannelsResponse>;
                            channelClientState(request: _173.QueryChannelClientStateRequest): Promise<_173.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _173.QueryChannelConsensusStateRequest): Promise<_173.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _173.QueryPacketCommitmentRequest): Promise<_173.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _173.QueryPacketCommitmentsRequest): Promise<_173.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _173.QueryPacketReceiptRequest): Promise<_173.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _173.QueryPacketAcknowledgementRequest): Promise<_173.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _173.QueryPacketAcknowledgementsRequest): Promise<_173.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _173.QueryUnreceivedPacketsRequest): Promise<_173.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _173.QueryUnreceivedAcksRequest): Promise<_173.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _173.QueryNextSequenceReceiveRequest): Promise<_173.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _177.QueryClientStateRequest): Promise<_177.QueryClientStateResponse>;
                            clientStates(request?: _177.QueryClientStatesRequest): Promise<_177.QueryClientStatesResponse>;
                            consensusState(request: _177.QueryConsensusStateRequest): Promise<_177.QueryConsensusStateResponse>;
                            consensusStates(request: _177.QueryConsensusStatesRequest): Promise<_177.QueryConsensusStatesResponse>;
                            clientStatus(request: _177.QueryClientStatusRequest): Promise<_177.QueryClientStatusResponse>;
                            clientParams(request?: _177.QueryClientParamsRequest): Promise<_177.QueryClientParamsResponse>;
                            upgradedClientState(request?: _177.QueryUpgradedClientStateRequest): Promise<_177.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _177.QueryUpgradedConsensusStateRequest): Promise<_177.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _182.QueryConnectionRequest): Promise<_182.QueryConnectionResponse>;
                            connections(request?: _182.QueryConnectionsRequest): Promise<_182.QueryConnectionsResponse>;
                            clientConnections(request: _182.QueryClientConnectionsRequest): Promise<_182.QueryClientConnectionsResponse>;
                            connectionClientState(request: _182.QueryConnectionClientStateRequest): Promise<_182.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _182.QueryConnectionConsensusStateRequest): Promise<_182.QueryConnectionConsensusStateResponse>;
                        };
                    };
                    port: {
                        v1: {
                            appVersion(request: _184.QueryAppVersionRequest): Promise<_184.QueryAppVersionResponse>;
                        };
                    };
                };
            };
        }>;
    };
}
