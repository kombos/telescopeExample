import * as _59 from "./app/v1alpha1/config";
import * as _60 from "./app/v1alpha1/module";
import * as _61 from "./app/v1alpha1/query";
import * as _62 from "./auth/v1beta1/auth";
import * as _63 from "./auth/v1beta1/genesis";
import * as _64 from "./auth/v1beta1/query";
import * as _65 from "./authz/v1beta1/authz";
import * as _66 from "./authz/v1beta1/event";
import * as _67 from "./authz/v1beta1/genesis";
import * as _68 from "./authz/v1beta1/query";
import * as _69 from "./authz/v1beta1/tx";
import * as _70 from "./bank/v1beta1/authz";
import * as _71 from "./bank/v1beta1/bank";
import * as _72 from "./bank/v1beta1/genesis";
import * as _73 from "./bank/v1beta1/query";
import * as _74 from "./bank/v1beta1/tx";
import * as _75 from "./base/abci/v1beta1/abci";
import * as _76 from "./base/kv/v1beta1/kv";
import * as _77 from "./base/query/v1beta1/pagination";
import * as _78 from "./base/reflection/v1beta1/reflection";
import * as _79 from "./base/reflection/v2alpha1/reflection";
import * as _80 from "./base/snapshots/v1beta1/snapshot";
import * as _81 from "./base/store/v1beta1/commit_info";
import * as _82 from "./base/store/v1beta1/listening";
import * as _83 from "./base/tendermint/v1beta1/query";
import * as _84 from "./base/v1beta1/coin";
import * as _85 from "./capability/v1beta1/capability";
import * as _86 from "./capability/v1beta1/genesis";
import * as _87 from "./crisis/v1beta1/genesis";
import * as _88 from "./crisis/v1beta1/tx";
import * as _89 from "./crypto/ed25519/keys";
import * as _90 from "./crypto/hd/v1/hd";
import * as _91 from "./crypto/keyring/v1/record";
import * as _92 from "./crypto/multisig/keys";
import * as _93 from "./crypto/secp256k1/keys";
import * as _94 from "./crypto/secp256r1/keys";
import * as _95 from "./distribution/v1beta1/distribution";
import * as _96 from "./distribution/v1beta1/genesis";
import * as _97 from "./distribution/v1beta1/query";
import * as _98 from "./distribution/v1beta1/tx";
import * as _99 from "./evidence/v1beta1/evidence";
import * as _100 from "./evidence/v1beta1/genesis";
import * as _101 from "./evidence/v1beta1/query";
import * as _102 from "./evidence/v1beta1/tx";
import * as _103 from "./feegrant/v1beta1/feegrant";
import * as _104 from "./feegrant/v1beta1/genesis";
import * as _105 from "./feegrant/v1beta1/query";
import * as _106 from "./feegrant/v1beta1/tx";
import * as _107 from "./genutil/v1beta1/genesis";
import * as _108 from "./gov/v1/genesis";
import * as _109 from "./gov/v1/gov";
import * as _110 from "./gov/v1/query";
import * as _111 from "./gov/v1/tx";
import * as _112 from "./gov/v1beta1/genesis";
import * as _113 from "./gov/v1beta1/gov";
import * as _114 from "./gov/v1beta1/query";
import * as _115 from "./gov/v1beta1/tx";
import * as _116 from "./group/v1/events";
import * as _117 from "./group/v1/genesis";
import * as _118 from "./group/v1/query";
import * as _119 from "./group/v1/tx";
import * as _120 from "./group/v1/types";
import * as _121 from "./mint/v1beta1/genesis";
import * as _122 from "./mint/v1beta1/mint";
import * as _123 from "./mint/v1beta1/query";
import * as _125 from "./nft/v1beta1/event";
import * as _126 from "./nft/v1beta1/genesis";
import * as _127 from "./nft/v1beta1/nft";
import * as _128 from "./nft/v1beta1/query";
import * as _129 from "./nft/v1beta1/tx";
import * as _130 from "./orm/v1/orm";
import * as _131 from "./orm/v1alpha1/schema";
import * as _132 from "./params/v1beta1/params";
import * as _133 from "./params/v1beta1/query";
import * as _134 from "./slashing/v1beta1/genesis";
import * as _135 from "./slashing/v1beta1/query";
import * as _136 from "./slashing/v1beta1/slashing";
import * as _137 from "./slashing/v1beta1/tx";
import * as _138 from "./staking/v1beta1/authz";
import * as _139 from "./staking/v1beta1/genesis";
import * as _140 from "./staking/v1beta1/query";
import * as _141 from "./staking/v1beta1/staking";
import * as _142 from "./staking/v1beta1/tx";
import * as _143 from "./tx/signing/v1beta1/signing";
import * as _144 from "./tx/v1beta1/service";
import * as _145 from "./tx/v1beta1/tx";
import * as _146 from "./upgrade/v1beta1/query";
import * as _147 from "./upgrade/v1beta1/tx";
import * as _148 from "./upgrade/v1beta1/upgrade";
import * as _149 from "./vesting/v1beta1/tx";
import * as _150 from "./vesting/v1beta1/vesting";
import * as _265 from "./app/v1alpha1/query.rpc.Query";
import * as _266 from "./auth/v1beta1/query.rpc.Query";
import * as _267 from "./authz/v1beta1/query.rpc.Query";
import * as _268 from "./bank/v1beta1/query.rpc.Query";
import * as _269 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _270 from "./distribution/v1beta1/query.rpc.Query";
import * as _271 from "./evidence/v1beta1/query.rpc.Query";
import * as _272 from "./feegrant/v1beta1/query.rpc.Query";
import * as _273 from "./gov/v1/query.rpc.Query";
import * as _274 from "./gov/v1beta1/query.rpc.Query";
import * as _275 from "./group/v1/query.rpc.Query";
import * as _276 from "./mint/v1beta1/query.rpc.Query";
import * as _277 from "./nft/v1beta1/query.rpc.Query";
import * as _278 from "./params/v1beta1/query.rpc.Query";
import * as _279 from "./slashing/v1beta1/query.rpc.Query";
import * as _280 from "./staking/v1beta1/query.rpc.Query";
import * as _281 from "./tx/v1beta1/service.rpc.Service";
import * as _282 from "./upgrade/v1beta1/query.rpc.Query";
import * as _283 from "./authz/v1beta1/tx.rpc.msg";
import * as _284 from "./bank/v1beta1/tx.rpc.msg";
import * as _285 from "./crisis/v1beta1/tx.rpc.msg";
import * as _286 from "./distribution/v1beta1/tx.rpc.msg";
import * as _287 from "./evidence/v1beta1/tx.rpc.msg";
import * as _288 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _289 from "./gov/v1/tx.rpc.msg";
import * as _290 from "./gov/v1beta1/tx.rpc.msg";
import * as _291 from "./group/v1/tx.rpc.msg";
import * as _292 from "./nft/v1beta1/tx.rpc.msg";
import * as _293 from "./slashing/v1beta1/tx.rpc.msg";
import * as _294 from "./staking/v1beta1/tx.rpc.msg";
import * as _295 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _296 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _265.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _61.QueryConfigRequest): Promise<_61.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _61.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryConfigRequest;
                fromJSON(_: any): _61.QueryConfigRequest;
                toJSON(_: _61.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_61.QueryConfigRequest>): _61.QueryConfigRequest;
            };
            QueryConfigResponse: {
                encode(message: _61.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryConfigResponse;
                fromJSON(object: any): _61.QueryConfigResponse;
                toJSON(message: _61.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_61.QueryConfigResponse>): _61.QueryConfigResponse;
            };
            ModuleDescriptor: {
                encode(message: _60.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.ModuleDescriptor;
                fromJSON(object: any): _60.ModuleDescriptor;
                toJSON(message: _60.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_60.ModuleDescriptor>): _60.ModuleDescriptor;
            };
            PackageReference: {
                encode(message: _60.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.PackageReference;
                fromJSON(object: any): _60.PackageReference;
                toJSON(message: _60.PackageReference): unknown;
                fromPartial(object: Partial<_60.PackageReference>): _60.PackageReference;
            };
            MigrateFromInfo: {
                encode(message: _60.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.MigrateFromInfo;
                fromJSON(object: any): _60.MigrateFromInfo;
                toJSON(message: _60.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_60.MigrateFromInfo>): _60.MigrateFromInfo;
            };
            Config: {
                encode(message: _59.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.Config;
                fromJSON(object: any): _59.Config;
                toJSON(message: _59.Config): unknown;
                fromPartial(object: Partial<_59.Config>): _59.Config;
            };
            ModuleConfig: {
                encode(message: _59.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ModuleConfig;
                fromJSON(object: any): _59.ModuleConfig;
                toJSON(message: _59.ModuleConfig): unknown;
                fromPartial(object: Partial<_59.ModuleConfig>): _59.ModuleConfig;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _266.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _64.QueryAccountsRequest): Promise<_64.QueryAccountsResponse>;
                account(request: _64.QueryAccountRequest): Promise<_64.QueryAccountResponse>;
                params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                moduleAccounts(request?: _64.QueryModuleAccountsRequest): Promise<_64.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _64.Bech32PrefixRequest): Promise<_64.Bech32PrefixResponse>;
                addressBytesToString(request: _64.AddressBytesToStringRequest): Promise<_64.AddressBytesToStringResponse>;
                addressStringToBytes(request: _64.AddressStringToBytesRequest): Promise<_64.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _64.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryAccountsRequest;
                fromJSON(object: any): _64.QueryAccountsRequest;
                toJSON(message: _64.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_64.QueryAccountsRequest>): _64.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _64.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryAccountsResponse;
                fromJSON(object: any): _64.QueryAccountsResponse;
                toJSON(message: _64.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_64.QueryAccountsResponse>): _64.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _64.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryAccountRequest;
                fromJSON(object: any): _64.QueryAccountRequest;
                toJSON(message: _64.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_64.QueryAccountRequest>): _64.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _64.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryModuleAccountsRequest;
                fromJSON(_: any): _64.QueryModuleAccountsRequest;
                toJSON(_: _64.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_64.QueryModuleAccountsRequest>): _64.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _64.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryParamsResponse;
                fromJSON(object: any): _64.QueryParamsResponse;
                toJSON(message: _64.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_64.QueryParamsResponse>): _64.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _64.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryAccountResponse;
                fromJSON(object: any): _64.QueryAccountResponse;
                toJSON(message: _64.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_64.QueryAccountResponse>): _64.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _64.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryParamsRequest;
                fromJSON(_: any): _64.QueryParamsRequest;
                toJSON(_: _64.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_64.QueryParamsRequest>): _64.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _64.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.QueryModuleAccountsResponse;
                fromJSON(object: any): _64.QueryModuleAccountsResponse;
                toJSON(message: _64.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_64.QueryModuleAccountsResponse>): _64.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _64.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Bech32PrefixRequest;
                fromJSON(_: any): _64.Bech32PrefixRequest;
                toJSON(_: _64.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_64.Bech32PrefixRequest>): _64.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _64.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Bech32PrefixResponse;
                fromJSON(object: any): _64.Bech32PrefixResponse;
                toJSON(message: _64.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_64.Bech32PrefixResponse>): _64.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _64.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.AddressBytesToStringRequest;
                fromJSON(object: any): _64.AddressBytesToStringRequest;
                toJSON(message: _64.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_64.AddressBytesToStringRequest>): _64.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _64.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.AddressBytesToStringResponse;
                fromJSON(object: any): _64.AddressBytesToStringResponse;
                toJSON(message: _64.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_64.AddressBytesToStringResponse>): _64.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _64.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.AddressStringToBytesRequest;
                fromJSON(object: any): _64.AddressStringToBytesRequest;
                toJSON(message: _64.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_64.AddressStringToBytesRequest>): _64.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _64.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.AddressStringToBytesResponse;
                fromJSON(object: any): _64.AddressStringToBytesResponse;
                toJSON(message: _64.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_64.AddressStringToBytesResponse>): _64.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _63.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.GenesisState;
                fromJSON(object: any): _63.GenesisState;
                toJSON(message: _63.GenesisState): unknown;
                fromPartial(object: Partial<_63.GenesisState>): _63.GenesisState;
            };
            BaseAccount: {
                encode(message: _62.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.BaseAccount;
                fromJSON(object: any): _62.BaseAccount;
                toJSON(message: _62.BaseAccount): unknown;
                fromPartial(object: Partial<_62.BaseAccount>): _62.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _62.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ModuleAccount;
                fromJSON(object: any): _62.ModuleAccount;
                toJSON(message: _62.ModuleAccount): unknown;
                fromPartial(object: Partial<_62.ModuleAccount>): _62.ModuleAccount;
            };
            Params: {
                encode(message: _62.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Params;
                fromJSON(object: any): _62.Params;
                toJSON(message: _62.Params): unknown;
                fromPartial(object: Partial<_62.Params>): _62.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _283.MsgClientImpl;
            QueryClientImpl: typeof _267.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _68.QueryGrantsRequest): Promise<_68.QueryGrantsResponse>;
                granterGrants(request: _68.QueryGranterGrantsRequest): Promise<_68.QueryGranterGrantsResponse>;
                granteeGrants(request: _68.QueryGranteeGrantsRequest): Promise<_68.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _69.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _69.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _69.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _69.MsgGrant): {
                        typeUrl: string;
                        value: _69.MsgGrant;
                    };
                    exec(value: _69.MsgExec): {
                        typeUrl: string;
                        value: _69.MsgExec;
                    };
                    revoke(value: _69.MsgRevoke): {
                        typeUrl: string;
                        value: _69.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _69.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _69.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _69.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _69.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _69.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _69.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _69.MsgGrant): {
                        typeUrl: string;
                        value: _69.MsgGrant;
                    };
                    exec(value: _69.MsgExec): {
                        typeUrl: string;
                        value: _69.MsgExec;
                    };
                    revoke(value: _69.MsgRevoke): {
                        typeUrl: string;
                        value: _69.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _69.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _69.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _69.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _69.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _69.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _69.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _69.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgGrant;
                fromJSON(object: any): _69.MsgGrant;
                toJSON(message: _69.MsgGrant): unknown;
                fromPartial(object: Partial<_69.MsgGrant>): _69.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _69.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgExecResponse;
                fromJSON(object: any): _69.MsgExecResponse;
                toJSON(message: _69.MsgExecResponse): unknown;
                fromPartial(object: Partial<_69.MsgExecResponse>): _69.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _69.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgExec;
                fromJSON(object: any): _69.MsgExec;
                toJSON(message: _69.MsgExec): unknown;
                fromPartial(object: Partial<_69.MsgExec>): _69.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _69.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgGrantResponse;
                fromJSON(_: any): _69.MsgGrantResponse;
                toJSON(_: _69.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_69.MsgGrantResponse>): _69.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _69.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgRevoke;
                fromJSON(object: any): _69.MsgRevoke;
                toJSON(message: _69.MsgRevoke): unknown;
                fromPartial(object: Partial<_69.MsgRevoke>): _69.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _69.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgRevokeResponse;
                fromJSON(_: any): _69.MsgRevokeResponse;
                toJSON(_: _69.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_69.MsgRevokeResponse>): _69.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _68.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGrantsRequest;
                fromJSON(object: any): _68.QueryGrantsRequest;
                toJSON(message: _68.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_68.QueryGrantsRequest>): _68.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _68.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGrantsResponse;
                fromJSON(object: any): _68.QueryGrantsResponse;
                toJSON(message: _68.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_68.QueryGrantsResponse>): _68.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _68.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGranterGrantsRequest;
                fromJSON(object: any): _68.QueryGranterGrantsRequest;
                toJSON(message: _68.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_68.QueryGranterGrantsRequest>): _68.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _68.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGranterGrantsResponse;
                fromJSON(object: any): _68.QueryGranterGrantsResponse;
                toJSON(message: _68.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_68.QueryGranterGrantsResponse>): _68.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _68.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGranteeGrantsRequest;
                fromJSON(object: any): _68.QueryGranteeGrantsRequest;
                toJSON(message: _68.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_68.QueryGranteeGrantsRequest>): _68.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _68.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.QueryGranteeGrantsResponse;
                fromJSON(object: any): _68.QueryGranteeGrantsResponse;
                toJSON(message: _68.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_68.QueryGranteeGrantsResponse>): _68.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _67.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.GenesisState;
                fromJSON(object: any): _67.GenesisState;
                toJSON(message: _67.GenesisState): unknown;
                fromPartial(object: Partial<_67.GenesisState>): _67.GenesisState;
            };
            EventGrant: {
                encode(message: _66.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventGrant;
                fromJSON(object: any): _66.EventGrant;
                toJSON(message: _66.EventGrant): unknown;
                fromPartial(object: Partial<_66.EventGrant>): _66.EventGrant;
            };
            EventRevoke: {
                encode(message: _66.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.EventRevoke;
                fromJSON(object: any): _66.EventRevoke;
                toJSON(message: _66.EventRevoke): unknown;
                fromPartial(object: Partial<_66.EventRevoke>): _66.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _65.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GenericAuthorization;
                fromJSON(object: any): _65.GenericAuthorization;
                toJSON(message: _65.GenericAuthorization): unknown;
                fromPartial(object: Partial<_65.GenericAuthorization>): _65.GenericAuthorization;
            };
            Grant: {
                encode(message: _65.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.Grant;
                fromJSON(object: any): _65.Grant;
                toJSON(message: _65.Grant): unknown;
                fromPartial(object: Partial<_65.Grant>): _65.Grant;
            };
            GrantAuthorization: {
                encode(message: _65.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GrantAuthorization;
                fromJSON(object: any): _65.GrantAuthorization;
                toJSON(message: _65.GrantAuthorization): unknown;
                fromPartial(object: Partial<_65.GrantAuthorization>): _65.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _65.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GrantQueueItem;
                fromJSON(object: any): _65.GrantQueueItem;
                toJSON(message: _65.GrantQueueItem): unknown;
                fromPartial(object: Partial<_65.GrantQueueItem>): _65.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _284.MsgClientImpl;
            QueryClientImpl: typeof _268.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _73.QueryBalanceRequest): Promise<_73.QueryBalanceResponse>;
                allBalances(request: _73.QueryAllBalancesRequest): Promise<_73.QueryAllBalancesResponse>;
                spendableBalances(request: _73.QuerySpendableBalancesRequest): Promise<_73.QuerySpendableBalancesResponse>;
                totalSupply(request?: _73.QueryTotalSupplyRequest): Promise<_73.QueryTotalSupplyResponse>;
                supplyOf(request: _73.QuerySupplyOfRequest): Promise<_73.QuerySupplyOfResponse>;
                params(request?: _73.QueryParamsRequest): Promise<_73.QueryParamsResponse>;
                denomMetadata(request: _73.QueryDenomMetadataRequest): Promise<_73.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _73.QueryDenomsMetadataRequest): Promise<_73.QueryDenomsMetadataResponse>;
                denomOwners(request: _73.QueryDenomOwnersRequest): Promise<_73.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _74.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _74.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _74.MsgSend): {
                        typeUrl: string;
                        value: _74.MsgSend;
                    };
                    multiSend(value: _74.MsgMultiSend): {
                        typeUrl: string;
                        value: _74.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _74.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _74.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _74.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _74.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _74.MsgSend): {
                        typeUrl: string;
                        value: _74.MsgSend;
                    };
                    multiSend(value: _74.MsgMultiSend): {
                        typeUrl: string;
                        value: _74.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _74.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _74.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _74.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _74.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _74.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgSend;
                fromJSON(object: any): _74.MsgSend;
                toJSON(message: _74.MsgSend): unknown;
                fromPartial(object: Partial<_74.MsgSend>): _74.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _74.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgSendResponse;
                fromJSON(_: any): _74.MsgSendResponse;
                toJSON(_: _74.MsgSendResponse): unknown;
                fromPartial(_: Partial<_74.MsgSendResponse>): _74.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _74.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgMultiSend;
                fromJSON(object: any): _74.MsgMultiSend;
                toJSON(message: _74.MsgMultiSend): unknown;
                fromPartial(object: Partial<_74.MsgMultiSend>): _74.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _74.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgMultiSendResponse;
                fromJSON(_: any): _74.MsgMultiSendResponse;
                toJSON(_: _74.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_74.MsgMultiSendResponse>): _74.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _73.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryBalanceRequest;
                fromJSON(object: any): _73.QueryBalanceRequest;
                toJSON(message: _73.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_73.QueryBalanceRequest>): _73.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _73.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryBalanceResponse;
                fromJSON(object: any): _73.QueryBalanceResponse;
                toJSON(message: _73.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_73.QueryBalanceResponse>): _73.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _73.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryAllBalancesRequest;
                fromJSON(object: any): _73.QueryAllBalancesRequest;
                toJSON(message: _73.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_73.QueryAllBalancesRequest>): _73.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _73.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryAllBalancesResponse;
                fromJSON(object: any): _73.QueryAllBalancesResponse;
                toJSON(message: _73.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_73.QueryAllBalancesResponse>): _73.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _73.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QuerySpendableBalancesRequest;
                fromJSON(object: any): _73.QuerySpendableBalancesRequest;
                toJSON(message: _73.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_73.QuerySpendableBalancesRequest>): _73.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _73.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QuerySpendableBalancesResponse;
                fromJSON(object: any): _73.QuerySpendableBalancesResponse;
                toJSON(message: _73.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_73.QuerySpendableBalancesResponse>): _73.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _73.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryTotalSupplyRequest;
                fromJSON(object: any): _73.QueryTotalSupplyRequest;
                toJSON(message: _73.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_73.QueryTotalSupplyRequest>): _73.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _73.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryTotalSupplyResponse;
                fromJSON(object: any): _73.QueryTotalSupplyResponse;
                toJSON(message: _73.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_73.QueryTotalSupplyResponse>): _73.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _73.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QuerySupplyOfRequest;
                fromJSON(object: any): _73.QuerySupplyOfRequest;
                toJSON(message: _73.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_73.QuerySupplyOfRequest>): _73.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _73.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QuerySupplyOfResponse;
                fromJSON(object: any): _73.QuerySupplyOfResponse;
                toJSON(message: _73.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_73.QuerySupplyOfResponse>): _73.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _73.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryParamsRequest;
                fromJSON(_: any): _73.QueryParamsRequest;
                toJSON(_: _73.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_73.QueryParamsRequest>): _73.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _73.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryParamsResponse;
                fromJSON(object: any): _73.QueryParamsResponse;
                toJSON(message: _73.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_73.QueryParamsResponse>): _73.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _73.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryDenomsMetadataRequest;
                fromJSON(object: any): _73.QueryDenomsMetadataRequest;
                toJSON(message: _73.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_73.QueryDenomsMetadataRequest>): _73.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _73.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryDenomsMetadataResponse;
                fromJSON(object: any): _73.QueryDenomsMetadataResponse;
                toJSON(message: _73.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_73.QueryDenomsMetadataResponse>): _73.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _73.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryDenomMetadataRequest;
                fromJSON(object: any): _73.QueryDenomMetadataRequest;
                toJSON(message: _73.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_73.QueryDenomMetadataRequest>): _73.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _73.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryDenomMetadataResponse;
                fromJSON(object: any): _73.QueryDenomMetadataResponse;
                toJSON(message: _73.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_73.QueryDenomMetadataResponse>): _73.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _73.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryDenomOwnersRequest;
                fromJSON(object: any): _73.QueryDenomOwnersRequest;
                toJSON(message: _73.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_73.QueryDenomOwnersRequest>): _73.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _73.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.DenomOwner;
                fromJSON(object: any): _73.DenomOwner;
                toJSON(message: _73.DenomOwner): unknown;
                fromPartial(object: Partial<_73.DenomOwner>): _73.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _73.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryDenomOwnersResponse;
                fromJSON(object: any): _73.QueryDenomOwnersResponse;
                toJSON(message: _73.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_73.QueryDenomOwnersResponse>): _73.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _72.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.GenesisState;
                fromJSON(object: any): _72.GenesisState;
                toJSON(message: _72.GenesisState): unknown;
                fromPartial(object: Partial<_72.GenesisState>): _72.GenesisState;
            };
            Balance: {
                encode(message: _72.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Balance;
                fromJSON(object: any): _72.Balance;
                toJSON(message: _72.Balance): unknown;
                fromPartial(object: Partial<_72.Balance>): _72.Balance;
            };
            Params: {
                encode(message: _71.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Params;
                fromJSON(object: any): _71.Params;
                toJSON(message: _71.Params): unknown;
                fromPartial(object: Partial<_71.Params>): _71.Params;
            };
            SendEnabled: {
                encode(message: _71.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.SendEnabled;
                fromJSON(object: any): _71.SendEnabled;
                toJSON(message: _71.SendEnabled): unknown;
                fromPartial(object: Partial<_71.SendEnabled>): _71.SendEnabled;
            };
            Input: {
                encode(message: _71.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Input;
                fromJSON(object: any): _71.Input;
                toJSON(message: _71.Input): unknown;
                fromPartial(object: Partial<_71.Input>): _71.Input;
            };
            Output: {
                encode(message: _71.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Output;
                fromJSON(object: any): _71.Output;
                toJSON(message: _71.Output): unknown;
                fromPartial(object: Partial<_71.Output>): _71.Output;
            };
            Supply: {
                encode(message: _71.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Supply;
                fromJSON(object: any): _71.Supply;
                toJSON(message: _71.Supply): unknown;
                fromPartial(object: Partial<_71.Supply>): _71.Supply;
            };
            DenomUnit: {
                encode(message: _71.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.DenomUnit;
                fromJSON(object: any): _71.DenomUnit;
                toJSON(message: _71.DenomUnit): unknown;
                fromPartial(object: Partial<_71.DenomUnit>): _71.DenomUnit;
            };
            Metadata: {
                encode(message: _71.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.Metadata;
                fromJSON(object: any): _71.Metadata;
                toJSON(message: _71.Metadata): unknown;
                fromPartial(object: Partial<_71.Metadata>): _71.Metadata;
            };
            SendAuthorization: {
                encode(message: _70.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.SendAuthorization;
                fromJSON(object: any): _70.SendAuthorization;
                toJSON(message: _70.SendAuthorization): unknown;
                fromPartial(object: Partial<_70.SendAuthorization>): _70.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _75.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.TxResponse;
                    fromJSON(object: any): _75.TxResponse;
                    toJSON(message: _75.TxResponse): unknown;
                    fromPartial(object: Partial<_75.TxResponse>): _75.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _75.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.ABCIMessageLog;
                    fromJSON(object: any): _75.ABCIMessageLog;
                    toJSON(message: _75.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_75.ABCIMessageLog>): _75.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _75.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.StringEvent;
                    fromJSON(object: any): _75.StringEvent;
                    toJSON(message: _75.StringEvent): unknown;
                    fromPartial(object: Partial<_75.StringEvent>): _75.StringEvent;
                };
                Attribute: {
                    encode(message: _75.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Attribute;
                    fromJSON(object: any): _75.Attribute;
                    toJSON(message: _75.Attribute): unknown;
                    fromPartial(object: Partial<_75.Attribute>): _75.Attribute;
                };
                GasInfo: {
                    encode(message: _75.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.GasInfo;
                    fromJSON(object: any): _75.GasInfo;
                    toJSON(message: _75.GasInfo): unknown;
                    fromPartial(object: Partial<_75.GasInfo>): _75.GasInfo;
                };
                Result: {
                    encode(message: _75.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Result;
                    fromJSON(object: any): _75.Result;
                    toJSON(message: _75.Result): unknown;
                    fromPartial(object: Partial<_75.Result>): _75.Result;
                };
                SimulationResponse: {
                    encode(message: _75.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.SimulationResponse;
                    fromJSON(object: any): _75.SimulationResponse;
                    toJSON(message: _75.SimulationResponse): unknown;
                    fromPartial(object: Partial<_75.SimulationResponse>): _75.SimulationResponse;
                };
                MsgData: {
                    encode(message: _75.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.MsgData;
                    fromJSON(object: any): _75.MsgData;
                    toJSON(message: _75.MsgData): unknown;
                    fromPartial(object: Partial<_75.MsgData>): _75.MsgData;
                };
                TxMsgData: {
                    encode(message: _75.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.TxMsgData;
                    fromJSON(object: any): _75.TxMsgData;
                    toJSON(message: _75.TxMsgData): unknown;
                    fromPartial(object: Partial<_75.TxMsgData>): _75.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _75.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.SearchTxsResult;
                    fromJSON(object: any): _75.SearchTxsResult;
                    toJSON(message: _75.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_75.SearchTxsResult>): _75.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _76.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Pairs;
                    fromJSON(object: any): _76.Pairs;
                    toJSON(message: _76.Pairs): unknown;
                    fromPartial(object: Partial<_76.Pairs>): _76.Pairs;
                };
                Pair: {
                    encode(message: _76.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Pair;
                    fromJSON(object: any): _76.Pair;
                    toJSON(message: _76.Pair): unknown;
                    fromPartial(object: Partial<_76.Pair>): _76.Pair;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _77.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.PageRequest;
                    fromJSON(object: any): _77.PageRequest;
                    toJSON(message: _77.PageRequest): unknown;
                    fromPartial(object: Partial<_77.PageRequest>): _77.PageRequest;
                };
                PageResponse: {
                    encode(message: _77.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.PageResponse;
                    fromJSON(object: any): _77.PageResponse;
                    toJSON(message: _77.PageResponse): unknown;
                    fromPartial(object: Partial<_77.PageResponse>): _77.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _78.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ListAllInterfacesRequest;
                    fromJSON(_: any): _78.ListAllInterfacesRequest;
                    toJSON(_: _78.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_78.ListAllInterfacesRequest>): _78.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _78.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ListAllInterfacesResponse;
                    fromJSON(object: any): _78.ListAllInterfacesResponse;
                    toJSON(message: _78.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_78.ListAllInterfacesResponse>): _78.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _78.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ListImplementationsRequest;
                    fromJSON(object: any): _78.ListImplementationsRequest;
                    toJSON(message: _78.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_78.ListImplementationsRequest>): _78.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _78.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.ListImplementationsResponse;
                    fromJSON(object: any): _78.ListImplementationsResponse;
                    toJSON(message: _78.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_78.ListImplementationsResponse>): _78.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _79.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.AppDescriptor;
                    fromJSON(object: any): _79.AppDescriptor;
                    toJSON(message: _79.AppDescriptor): unknown;
                    fromPartial(object: Partial<_79.AppDescriptor>): _79.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _79.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.TxDescriptor;
                    fromJSON(object: any): _79.TxDescriptor;
                    toJSON(message: _79.TxDescriptor): unknown;
                    fromPartial(object: Partial<_79.TxDescriptor>): _79.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _79.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.AuthnDescriptor;
                    fromJSON(object: any): _79.AuthnDescriptor;
                    toJSON(message: _79.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_79.AuthnDescriptor>): _79.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _79.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.SigningModeDescriptor;
                    fromJSON(object: any): _79.SigningModeDescriptor;
                    toJSON(message: _79.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_79.SigningModeDescriptor>): _79.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _79.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ChainDescriptor;
                    fromJSON(object: any): _79.ChainDescriptor;
                    toJSON(message: _79.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_79.ChainDescriptor>): _79.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _79.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.CodecDescriptor;
                    fromJSON(object: any): _79.CodecDescriptor;
                    toJSON(message: _79.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_79.CodecDescriptor>): _79.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _79.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.InterfaceDescriptor;
                    fromJSON(object: any): _79.InterfaceDescriptor;
                    toJSON(message: _79.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_79.InterfaceDescriptor>): _79.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _79.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _79.InterfaceImplementerDescriptor;
                    toJSON(message: _79.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_79.InterfaceImplementerDescriptor>): _79.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _79.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _79.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _79.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_79.InterfaceAcceptingMessageDescriptor>): _79.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _79.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ConfigurationDescriptor;
                    fromJSON(object: any): _79.ConfigurationDescriptor;
                    toJSON(message: _79.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_79.ConfigurationDescriptor>): _79.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _79.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.MsgDescriptor;
                    fromJSON(object: any): _79.MsgDescriptor;
                    toJSON(message: _79.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_79.MsgDescriptor>): _79.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _79.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _79.GetAuthnDescriptorRequest;
                    toJSON(_: _79.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_79.GetAuthnDescriptorRequest>): _79.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _79.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _79.GetAuthnDescriptorResponse;
                    toJSON(message: _79.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_79.GetAuthnDescriptorResponse>): _79.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _79.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetChainDescriptorRequest;
                    fromJSON(_: any): _79.GetChainDescriptorRequest;
                    toJSON(_: _79.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_79.GetChainDescriptorRequest>): _79.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _79.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetChainDescriptorResponse;
                    fromJSON(object: any): _79.GetChainDescriptorResponse;
                    toJSON(message: _79.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_79.GetChainDescriptorResponse>): _79.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _79.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetCodecDescriptorRequest;
                    fromJSON(_: any): _79.GetCodecDescriptorRequest;
                    toJSON(_: _79.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_79.GetCodecDescriptorRequest>): _79.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _79.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetCodecDescriptorResponse;
                    fromJSON(object: any): _79.GetCodecDescriptorResponse;
                    toJSON(message: _79.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_79.GetCodecDescriptorResponse>): _79.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _79.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _79.GetConfigurationDescriptorRequest;
                    toJSON(_: _79.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_79.GetConfigurationDescriptorRequest>): _79.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _79.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _79.GetConfigurationDescriptorResponse;
                    toJSON(message: _79.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_79.GetConfigurationDescriptorResponse>): _79.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _79.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _79.GetQueryServicesDescriptorRequest;
                    toJSON(_: _79.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_79.GetQueryServicesDescriptorRequest>): _79.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _79.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _79.GetQueryServicesDescriptorResponse;
                    toJSON(message: _79.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_79.GetQueryServicesDescriptorResponse>): _79.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _79.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetTxDescriptorRequest;
                    fromJSON(_: any): _79.GetTxDescriptorRequest;
                    toJSON(_: _79.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_79.GetTxDescriptorRequest>): _79.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _79.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.GetTxDescriptorResponse;
                    fromJSON(object: any): _79.GetTxDescriptorResponse;
                    toJSON(message: _79.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_79.GetTxDescriptorResponse>): _79.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _79.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryServicesDescriptor;
                    fromJSON(object: any): _79.QueryServicesDescriptor;
                    toJSON(message: _79.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_79.QueryServicesDescriptor>): _79.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _79.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryServiceDescriptor;
                    fromJSON(object: any): _79.QueryServiceDescriptor;
                    toJSON(message: _79.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_79.QueryServiceDescriptor>): _79.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _79.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryMethodDescriptor;
                    fromJSON(object: any): _79.QueryMethodDescriptor;
                    toJSON(message: _79.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_79.QueryMethodDescriptor>): _79.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _80.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Snapshot;
                    fromJSON(object: any): _80.Snapshot;
                    toJSON(message: _80.Snapshot): unknown;
                    fromPartial(object: Partial<_80.Snapshot>): _80.Snapshot;
                };
                Metadata: {
                    encode(message: _80.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Metadata;
                    fromJSON(object: any): _80.Metadata;
                    toJSON(message: _80.Metadata): unknown;
                    fromPartial(object: Partial<_80.Metadata>): _80.Metadata;
                };
                SnapshotItem: {
                    encode(message: _80.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.SnapshotItem;
                    fromJSON(object: any): _80.SnapshotItem;
                    toJSON(message: _80.SnapshotItem): unknown;
                    fromPartial(object: Partial<_80.SnapshotItem>): _80.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _80.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.SnapshotStoreItem;
                    fromJSON(object: any): _80.SnapshotStoreItem;
                    toJSON(message: _80.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_80.SnapshotStoreItem>): _80.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _80.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.SnapshotIAVLItem;
                    fromJSON(object: any): _80.SnapshotIAVLItem;
                    toJSON(message: _80.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_80.SnapshotIAVLItem>): _80.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _80.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.SnapshotExtensionMeta;
                    fromJSON(object: any): _80.SnapshotExtensionMeta;
                    toJSON(message: _80.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_80.SnapshotExtensionMeta>): _80.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _80.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.SnapshotExtensionPayload;
                    fromJSON(object: any): _80.SnapshotExtensionPayload;
                    toJSON(message: _80.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_80.SnapshotExtensionPayload>): _80.SnapshotExtensionPayload;
                };
                SnapshotKVItem: {
                    encode(message: _80.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.SnapshotKVItem;
                    fromJSON(object: any): _80.SnapshotKVItem;
                    toJSON(message: _80.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_80.SnapshotKVItem>): _80.SnapshotKVItem;
                };
                SnapshotSchema: {
                    encode(message: _80.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.SnapshotSchema;
                    fromJSON(object: any): _80.SnapshotSchema;
                    toJSON(message: _80.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_80.SnapshotSchema>): _80.SnapshotSchema;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _82.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.StoreKVPair;
                    fromJSON(object: any): _82.StoreKVPair;
                    toJSON(message: _82.StoreKVPair): unknown;
                    fromPartial(object: Partial<_82.StoreKVPair>): _82.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _81.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.CommitInfo;
                    fromJSON(object: any): _81.CommitInfo;
                    toJSON(message: _81.CommitInfo): unknown;
                    fromPartial(object: Partial<_81.CommitInfo>): _81.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _81.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.StoreInfo;
                    fromJSON(object: any): _81.StoreInfo;
                    toJSON(message: _81.StoreInfo): unknown;
                    fromPartial(object: Partial<_81.StoreInfo>): _81.StoreInfo;
                };
                CommitID: {
                    encode(message: _81.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.CommitID;
                    fromJSON(object: any): _81.CommitID;
                    toJSON(message: _81.CommitID): unknown;
                    fromPartial(object: Partial<_81.CommitID>): _81.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _269.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _83.GetNodeInfoRequest): Promise<_83.GetNodeInfoResponse>;
                    getSyncing(request?: _83.GetSyncingRequest): Promise<_83.GetSyncingResponse>;
                    getLatestBlock(request?: _83.GetLatestBlockRequest): Promise<_83.GetLatestBlockResponse>;
                    getBlockByHeight(request: _83.GetBlockByHeightRequest): Promise<_83.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _83.GetLatestValidatorSetRequest): Promise<_83.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _83.GetValidatorSetByHeightRequest): Promise<_83.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _83.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _83.GetValidatorSetByHeightRequest;
                    toJSON(message: _83.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_83.GetValidatorSetByHeightRequest>): _83.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _83.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _83.GetValidatorSetByHeightResponse;
                    toJSON(message: _83.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_83.GetValidatorSetByHeightResponse>): _83.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _83.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _83.GetLatestValidatorSetRequest;
                    toJSON(message: _83.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_83.GetLatestValidatorSetRequest>): _83.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _83.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _83.GetLatestValidatorSetResponse;
                    toJSON(message: _83.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_83.GetLatestValidatorSetResponse>): _83.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _83.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Validator;
                    fromJSON(object: any): _83.Validator;
                    toJSON(message: _83.Validator): unknown;
                    fromPartial(object: Partial<_83.Validator>): _83.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _83.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GetBlockByHeightRequest;
                    fromJSON(object: any): _83.GetBlockByHeightRequest;
                    toJSON(message: _83.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_83.GetBlockByHeightRequest>): _83.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _83.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GetBlockByHeightResponse;
                    fromJSON(object: any): _83.GetBlockByHeightResponse;
                    toJSON(message: _83.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_83.GetBlockByHeightResponse>): _83.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _83.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GetLatestBlockRequest;
                    fromJSON(_: any): _83.GetLatestBlockRequest;
                    toJSON(_: _83.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_83.GetLatestBlockRequest>): _83.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _83.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GetLatestBlockResponse;
                    fromJSON(object: any): _83.GetLatestBlockResponse;
                    toJSON(message: _83.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_83.GetLatestBlockResponse>): _83.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _83.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GetSyncingRequest;
                    fromJSON(_: any): _83.GetSyncingRequest;
                    toJSON(_: _83.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_83.GetSyncingRequest>): _83.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _83.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GetSyncingResponse;
                    fromJSON(object: any): _83.GetSyncingResponse;
                    toJSON(message: _83.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_83.GetSyncingResponse>): _83.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _83.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GetNodeInfoRequest;
                    fromJSON(_: any): _83.GetNodeInfoRequest;
                    toJSON(_: _83.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_83.GetNodeInfoRequest>): _83.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _83.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.GetNodeInfoResponse;
                    fromJSON(object: any): _83.GetNodeInfoResponse;
                    toJSON(message: _83.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_83.GetNodeInfoResponse>): _83.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _83.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.VersionInfo;
                    fromJSON(object: any): _83.VersionInfo;
                    toJSON(message: _83.VersionInfo): unknown;
                    fromPartial(object: Partial<_83.VersionInfo>): _83.VersionInfo;
                };
                Module: {
                    encode(message: _83.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Module;
                    fromJSON(object: any): _83.Module;
                    toJSON(message: _83.Module): unknown;
                    fromPartial(object: Partial<_83.Module>): _83.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _84.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Coin;
                fromJSON(object: any): _84.Coin;
                toJSON(message: _84.Coin): unknown;
                fromPartial(object: Partial<_84.Coin>): _84.Coin;
            };
            DecCoin: {
                encode(message: _84.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.DecCoin;
                fromJSON(object: any): _84.DecCoin;
                toJSON(message: _84.DecCoin): unknown;
                fromPartial(object: Partial<_84.DecCoin>): _84.DecCoin;
            };
            IntProto: {
                encode(message: _84.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.IntProto;
                fromJSON(object: any): _84.IntProto;
                toJSON(message: _84.IntProto): unknown;
                fromPartial(object: Partial<_84.IntProto>): _84.IntProto;
            };
            DecProto: {
                encode(message: _84.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.DecProto;
                fromJSON(object: any): _84.DecProto;
                toJSON(message: _84.DecProto): unknown;
                fromPartial(object: Partial<_84.DecProto>): _84.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _86.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GenesisOwners;
                fromJSON(object: any): _86.GenesisOwners;
                toJSON(message: _86.GenesisOwners): unknown;
                fromPartial(object: Partial<_86.GenesisOwners>): _86.GenesisOwners;
            };
            GenesisState: {
                encode(message: _86.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GenesisState;
                fromJSON(object: any): _86.GenesisState;
                toJSON(message: _86.GenesisState): unknown;
                fromPartial(object: Partial<_86.GenesisState>): _86.GenesisState;
            };
            Capability: {
                encode(message: _85.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Capability;
                fromJSON(object: any): _85.Capability;
                toJSON(message: _85.Capability): unknown;
                fromPartial(object: Partial<_85.Capability>): _85.Capability;
            };
            Owner: {
                encode(message: _85.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Owner;
                fromJSON(object: any): _85.Owner;
                toJSON(message: _85.Owner): unknown;
                fromPartial(object: Partial<_85.Owner>): _85.Owner;
            };
            CapabilityOwners: {
                encode(message: _85.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.CapabilityOwners;
                fromJSON(object: any): _85.CapabilityOwners;
                toJSON(message: _85.CapabilityOwners): unknown;
                fromPartial(object: Partial<_85.CapabilityOwners>): _85.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _285.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _88.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _88.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _88.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _88.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _88.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _88.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _88.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _88.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _88.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _88.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgVerifyInvariant;
                fromJSON(object: any): _88.MsgVerifyInvariant;
                toJSON(message: _88.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_88.MsgVerifyInvariant>): _88.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _88.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgVerifyInvariantResponse;
                fromJSON(_: any): _88.MsgVerifyInvariantResponse;
                toJSON(_: _88.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_88.MsgVerifyInvariantResponse>): _88.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _87.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.GenesisState;
                fromJSON(object: any): _87.GenesisState;
                toJSON(message: _87.GenesisState): unknown;
                fromPartial(object: Partial<_87.GenesisState>): _87.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _89.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.PubKey;
                fromJSON(object: any): _89.PubKey;
                toJSON(message: _89.PubKey): unknown;
                fromPartial(object: Partial<_89.PubKey>): _89.PubKey;
            };
            PrivKey: {
                encode(message: _89.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.PrivKey;
                fromJSON(object: any): _89.PrivKey;
                toJSON(message: _89.PrivKey): unknown;
                fromPartial(object: Partial<_89.PrivKey>): _89.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _90.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.BIP44Params;
                    fromJSON(object: any): _90.BIP44Params;
                    toJSON(message: _90.BIP44Params): unknown;
                    fromPartial(object: Partial<_90.BIP44Params>): _90.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _91.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Record;
                    fromJSON(object: any): _91.Record;
                    toJSON(message: _91.Record): unknown;
                    fromPartial(object: Partial<_91.Record>): _91.Record;
                };
                Record_Local: {
                    encode(message: _91.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Record_Local;
                    fromJSON(object: any): _91.Record_Local;
                    toJSON(message: _91.Record_Local): unknown;
                    fromPartial(object: Partial<_91.Record_Local>): _91.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _91.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Record_Ledger;
                    fromJSON(object: any): _91.Record_Ledger;
                    toJSON(message: _91.Record_Ledger): unknown;
                    fromPartial(object: Partial<_91.Record_Ledger>): _91.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _91.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Record_Multi;
                    fromJSON(_: any): _91.Record_Multi;
                    toJSON(_: _91.Record_Multi): unknown;
                    fromPartial(_: Partial<_91.Record_Multi>): _91.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _91.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Record_Offline;
                    fromJSON(_: any): _91.Record_Offline;
                    toJSON(_: _91.Record_Offline): unknown;
                    fromPartial(_: Partial<_91.Record_Offline>): _91.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _92.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.LegacyAminoPubKey;
                fromJSON(object: any): _92.LegacyAminoPubKey;
                toJSON(message: _92.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_92.LegacyAminoPubKey>): _92.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _93.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.PubKey;
                fromJSON(object: any): _93.PubKey;
                toJSON(message: _93.PubKey): unknown;
                fromPartial(object: Partial<_93.PubKey>): _93.PubKey;
            };
            PrivKey: {
                encode(message: _93.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.PrivKey;
                fromJSON(object: any): _93.PrivKey;
                toJSON(message: _93.PrivKey): unknown;
                fromPartial(object: Partial<_93.PrivKey>): _93.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _94.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PubKey;
                fromJSON(object: any): _94.PubKey;
                toJSON(message: _94.PubKey): unknown;
                fromPartial(object: Partial<_94.PubKey>): _94.PubKey;
            };
            PrivKey: {
                encode(message: _94.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.PrivKey;
                fromJSON(object: any): _94.PrivKey;
                toJSON(message: _94.PrivKey): unknown;
                fromPartial(object: Partial<_94.PrivKey>): _94.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _286.MsgClientImpl;
            QueryClientImpl: typeof _270.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _97.QueryParamsRequest): Promise<_97.QueryParamsResponse>;
                validatorOutstandingRewards(request: _97.QueryValidatorOutstandingRewardsRequest): Promise<_97.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _97.QueryValidatorCommissionRequest): Promise<_97.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _97.QueryValidatorSlashesRequest): Promise<_97.QueryValidatorSlashesResponse>;
                delegationRewards(request: _97.QueryDelegationRewardsRequest): Promise<_97.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _97.QueryDelegationTotalRewardsRequest): Promise<_97.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _97.QueryDelegatorValidatorsRequest): Promise<_97.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _97.QueryDelegatorWithdrawAddressRequest): Promise<_97.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _97.QueryCommunityPoolRequest): Promise<_97.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _98.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _98.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _98.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _98.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _98.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _98.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _98.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _98.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _98.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _98.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _98.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _98.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _98.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _98.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _98.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _98.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _98.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _98.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _98.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _98.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _98.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _98.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _98.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _98.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _98.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _98.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _98.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _98.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _98.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _98.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _98.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _98.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _98.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _98.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _98.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _98.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _98.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgSetWithdrawAddress;
                fromJSON(object: any): _98.MsgSetWithdrawAddress;
                toJSON(message: _98.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_98.MsgSetWithdrawAddress>): _98.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _98.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _98.MsgSetWithdrawAddressResponse;
                toJSON(_: _98.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_98.MsgSetWithdrawAddressResponse>): _98.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _98.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _98.MsgWithdrawDelegatorReward;
                toJSON(message: _98.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_98.MsgWithdrawDelegatorReward>): _98.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _98.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _98.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _98.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_98.MsgWithdrawDelegatorRewardResponse>): _98.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _98.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _98.MsgWithdrawValidatorCommission;
                toJSON(message: _98.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_98.MsgWithdrawValidatorCommission>): _98.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _98.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _98.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _98.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_98.MsgWithdrawValidatorCommissionResponse>): _98.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _98.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgFundCommunityPool;
                fromJSON(object: any): _98.MsgFundCommunityPool;
                toJSON(message: _98.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_98.MsgFundCommunityPool>): _98.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _98.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _98.MsgFundCommunityPoolResponse;
                toJSON(_: _98.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_98.MsgFundCommunityPoolResponse>): _98.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _97.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryParamsRequest;
                fromJSON(_: any): _97.QueryParamsRequest;
                toJSON(_: _97.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_97.QueryParamsRequest>): _97.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _97.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryParamsResponse;
                fromJSON(object: any): _97.QueryParamsResponse;
                toJSON(message: _97.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_97.QueryParamsResponse>): _97.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _97.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _97.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _97.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_97.QueryValidatorOutstandingRewardsRequest>): _97.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _97.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _97.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _97.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_97.QueryValidatorOutstandingRewardsResponse>): _97.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _97.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryValidatorCommissionRequest;
                fromJSON(object: any): _97.QueryValidatorCommissionRequest;
                toJSON(message: _97.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_97.QueryValidatorCommissionRequest>): _97.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _97.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryValidatorCommissionResponse;
                fromJSON(object: any): _97.QueryValidatorCommissionResponse;
                toJSON(message: _97.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_97.QueryValidatorCommissionResponse>): _97.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _97.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryValidatorSlashesRequest;
                fromJSON(object: any): _97.QueryValidatorSlashesRequest;
                toJSON(message: _97.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_97.QueryValidatorSlashesRequest>): _97.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _97.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryValidatorSlashesResponse;
                fromJSON(object: any): _97.QueryValidatorSlashesResponse;
                toJSON(message: _97.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_97.QueryValidatorSlashesResponse>): _97.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _97.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryDelegationRewardsRequest;
                fromJSON(object: any): _97.QueryDelegationRewardsRequest;
                toJSON(message: _97.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_97.QueryDelegationRewardsRequest>): _97.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _97.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryDelegationRewardsResponse;
                fromJSON(object: any): _97.QueryDelegationRewardsResponse;
                toJSON(message: _97.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_97.QueryDelegationRewardsResponse>): _97.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _97.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _97.QueryDelegationTotalRewardsRequest;
                toJSON(message: _97.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_97.QueryDelegationTotalRewardsRequest>): _97.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _97.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _97.QueryDelegationTotalRewardsResponse;
                toJSON(message: _97.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_97.QueryDelegationTotalRewardsResponse>): _97.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _97.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _97.QueryDelegatorValidatorsRequest;
                toJSON(message: _97.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_97.QueryDelegatorValidatorsRequest>): _97.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _97.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _97.QueryDelegatorValidatorsResponse;
                toJSON(message: _97.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_97.QueryDelegatorValidatorsResponse>): _97.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _97.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _97.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _97.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_97.QueryDelegatorWithdrawAddressRequest>): _97.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _97.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _97.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _97.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_97.QueryDelegatorWithdrawAddressResponse>): _97.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _97.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCommunityPoolRequest;
                fromJSON(_: any): _97.QueryCommunityPoolRequest;
                toJSON(_: _97.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_97.QueryCommunityPoolRequest>): _97.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _97.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryCommunityPoolResponse;
                fromJSON(object: any): _97.QueryCommunityPoolResponse;
                toJSON(message: _97.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_97.QueryCommunityPoolResponse>): _97.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _96.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.DelegatorWithdrawInfo;
                fromJSON(object: any): _96.DelegatorWithdrawInfo;
                toJSON(message: _96.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_96.DelegatorWithdrawInfo>): _96.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _96.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _96.ValidatorOutstandingRewardsRecord;
                toJSON(message: _96.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_96.ValidatorOutstandingRewardsRecord>): _96.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _96.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _96.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _96.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_96.ValidatorAccumulatedCommissionRecord>): _96.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _96.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _96.ValidatorHistoricalRewardsRecord;
                toJSON(message: _96.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_96.ValidatorHistoricalRewardsRecord>): _96.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _96.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _96.ValidatorCurrentRewardsRecord;
                toJSON(message: _96.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_96.ValidatorCurrentRewardsRecord>): _96.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _96.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.DelegatorStartingInfoRecord;
                fromJSON(object: any): _96.DelegatorStartingInfoRecord;
                toJSON(message: _96.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_96.DelegatorStartingInfoRecord>): _96.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _96.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ValidatorSlashEventRecord;
                fromJSON(object: any): _96.ValidatorSlashEventRecord;
                toJSON(message: _96.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_96.ValidatorSlashEventRecord>): _96.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _96.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GenesisState;
                fromJSON(object: any): _96.GenesisState;
                toJSON(message: _96.GenesisState): unknown;
                fromPartial(object: Partial<_96.GenesisState>): _96.GenesisState;
            };
            Params: {
                encode(message: _95.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Params;
                fromJSON(object: any): _95.Params;
                toJSON(message: _95.Params): unknown;
                fromPartial(object: Partial<_95.Params>): _95.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _95.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ValidatorHistoricalRewards;
                fromJSON(object: any): _95.ValidatorHistoricalRewards;
                toJSON(message: _95.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_95.ValidatorHistoricalRewards>): _95.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _95.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ValidatorCurrentRewards;
                fromJSON(object: any): _95.ValidatorCurrentRewards;
                toJSON(message: _95.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_95.ValidatorCurrentRewards>): _95.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _95.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ValidatorAccumulatedCommission;
                fromJSON(object: any): _95.ValidatorAccumulatedCommission;
                toJSON(message: _95.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_95.ValidatorAccumulatedCommission>): _95.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _95.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ValidatorOutstandingRewards;
                fromJSON(object: any): _95.ValidatorOutstandingRewards;
                toJSON(message: _95.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_95.ValidatorOutstandingRewards>): _95.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _95.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ValidatorSlashEvent;
                fromJSON(object: any): _95.ValidatorSlashEvent;
                toJSON(message: _95.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_95.ValidatorSlashEvent>): _95.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _95.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.ValidatorSlashEvents;
                fromJSON(object: any): _95.ValidatorSlashEvents;
                toJSON(message: _95.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_95.ValidatorSlashEvents>): _95.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _95.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.FeePool;
                fromJSON(object: any): _95.FeePool;
                toJSON(message: _95.FeePool): unknown;
                fromPartial(object: Partial<_95.FeePool>): _95.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _95.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.CommunityPoolSpendProposal;
                fromJSON(object: any): _95.CommunityPoolSpendProposal;
                toJSON(message: _95.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_95.CommunityPoolSpendProposal>): _95.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _95.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.DelegatorStartingInfo;
                fromJSON(object: any): _95.DelegatorStartingInfo;
                toJSON(message: _95.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_95.DelegatorStartingInfo>): _95.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _95.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.DelegationDelegatorReward;
                fromJSON(object: any): _95.DelegationDelegatorReward;
                toJSON(message: _95.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_95.DelegationDelegatorReward>): _95.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _95.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _95.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _95.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_95.CommunityPoolSpendProposalWithDeposit>): _95.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _287.MsgClientImpl;
            QueryClientImpl: typeof _271.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _101.QueryEvidenceRequest): Promise<_101.QueryEvidenceResponse>;
                allEvidence(request?: _101.QueryAllEvidenceRequest): Promise<_101.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _102.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _102.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _102.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _102.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _102.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _102.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _102.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _102.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _102.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _102.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgSubmitEvidence;
                fromJSON(object: any): _102.MsgSubmitEvidence;
                toJSON(message: _102.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_102.MsgSubmitEvidence>): _102.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _102.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _102.MsgSubmitEvidenceResponse;
                toJSON(message: _102.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_102.MsgSubmitEvidenceResponse>): _102.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _101.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryEvidenceRequest;
                fromJSON(object: any): _101.QueryEvidenceRequest;
                toJSON(message: _101.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_101.QueryEvidenceRequest>): _101.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _101.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryEvidenceResponse;
                fromJSON(object: any): _101.QueryEvidenceResponse;
                toJSON(message: _101.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_101.QueryEvidenceResponse>): _101.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _101.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryAllEvidenceRequest;
                fromJSON(object: any): _101.QueryAllEvidenceRequest;
                toJSON(message: _101.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_101.QueryAllEvidenceRequest>): _101.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _101.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryAllEvidenceResponse;
                fromJSON(object: any): _101.QueryAllEvidenceResponse;
                toJSON(message: _101.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_101.QueryAllEvidenceResponse>): _101.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _100.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.GenesisState;
                fromJSON(object: any): _100.GenesisState;
                toJSON(message: _100.GenesisState): unknown;
                fromPartial(object: Partial<_100.GenesisState>): _100.GenesisState;
            };
            Equivocation: {
                encode(message: _99.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Equivocation;
                fromJSON(object: any): _99.Equivocation;
                toJSON(message: _99.Equivocation): unknown;
                fromPartial(object: Partial<_99.Equivocation>): _99.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _288.MsgClientImpl;
            QueryClientImpl: typeof _272.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _105.QueryAllowanceRequest): Promise<_105.QueryAllowanceResponse>;
                allowances(request: _105.QueryAllowancesRequest): Promise<_105.QueryAllowancesResponse>;
                allowancesByGranter(request: _105.QueryAllowancesByGranterRequest): Promise<_105.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _106.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _106.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _106.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _106.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _106.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _106.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _106.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _106.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _106.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _106.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _106.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _106.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _106.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _106.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _106.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _106.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _106.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _106.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _106.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgGrantAllowance;
                fromJSON(object: any): _106.MsgGrantAllowance;
                toJSON(message: _106.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_106.MsgGrantAllowance>): _106.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _106.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgGrantAllowanceResponse;
                fromJSON(_: any): _106.MsgGrantAllowanceResponse;
                toJSON(_: _106.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_106.MsgGrantAllowanceResponse>): _106.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _106.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgRevokeAllowance;
                fromJSON(object: any): _106.MsgRevokeAllowance;
                toJSON(message: _106.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_106.MsgRevokeAllowance>): _106.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _106.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _106.MsgRevokeAllowanceResponse;
                toJSON(_: _106.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_106.MsgRevokeAllowanceResponse>): _106.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _105.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryAllowanceRequest;
                fromJSON(object: any): _105.QueryAllowanceRequest;
                toJSON(message: _105.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_105.QueryAllowanceRequest>): _105.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _105.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryAllowanceResponse;
                fromJSON(object: any): _105.QueryAllowanceResponse;
                toJSON(message: _105.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_105.QueryAllowanceResponse>): _105.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _105.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryAllowancesRequest;
                fromJSON(object: any): _105.QueryAllowancesRequest;
                toJSON(message: _105.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_105.QueryAllowancesRequest>): _105.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _105.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryAllowancesResponse;
                fromJSON(object: any): _105.QueryAllowancesResponse;
                toJSON(message: _105.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_105.QueryAllowancesResponse>): _105.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _105.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _105.QueryAllowancesByGranterRequest;
                toJSON(message: _105.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_105.QueryAllowancesByGranterRequest>): _105.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _105.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _105.QueryAllowancesByGranterResponse;
                toJSON(message: _105.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_105.QueryAllowancesByGranterResponse>): _105.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _104.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GenesisState;
                fromJSON(object: any): _104.GenesisState;
                toJSON(message: _104.GenesisState): unknown;
                fromPartial(object: Partial<_104.GenesisState>): _104.GenesisState;
            };
            BasicAllowance: {
                encode(message: _103.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.BasicAllowance;
                fromJSON(object: any): _103.BasicAllowance;
                toJSON(message: _103.BasicAllowance): unknown;
                fromPartial(object: Partial<_103.BasicAllowance>): _103.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _103.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.PeriodicAllowance;
                fromJSON(object: any): _103.PeriodicAllowance;
                toJSON(message: _103.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_103.PeriodicAllowance>): _103.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _103.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.AllowedMsgAllowance;
                fromJSON(object: any): _103.AllowedMsgAllowance;
                toJSON(message: _103.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_103.AllowedMsgAllowance>): _103.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _103.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Grant;
                fromJSON(object: any): _103.Grant;
                toJSON(message: _103.Grant): unknown;
                fromPartial(object: Partial<_103.Grant>): _103.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _107.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.GenesisState;
                fromJSON(object: any): _107.GenesisState;
                toJSON(message: _107.GenesisState): unknown;
                fromPartial(object: Partial<_107.GenesisState>): _107.GenesisState;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _289.MsgClientImpl;
            QueryClientImpl: typeof _273.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _110.QueryProposalRequest): Promise<_110.QueryProposalResponse>;
                proposals(request: _110.QueryProposalsRequest): Promise<_110.QueryProposalsResponse>;
                vote(request: _110.QueryVoteRequest): Promise<_110.QueryVoteResponse>;
                votes(request: _110.QueryVotesRequest): Promise<_110.QueryVotesResponse>;
                params(request: _110.QueryParamsRequest): Promise<_110.QueryParamsResponse>;
                deposit(request: _110.QueryDepositRequest): Promise<_110.QueryDepositResponse>;
                deposits(request: _110.QueryDepositsRequest): Promise<_110.QueryDepositsResponse>;
                tallyResult(request: _110.QueryTallyResultRequest): Promise<_110.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _111.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _111.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _111.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _111.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _111.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _111.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _111.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _111.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _111.MsgExecLegacyContent;
                    };
                    vote(value: _111.MsgVote): {
                        typeUrl: string;
                        value: _111.MsgVote;
                    };
                    voteWeighted(value: _111.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _111.MsgVoteWeighted;
                    };
                    deposit(value: _111.MsgDeposit): {
                        typeUrl: string;
                        value: _111.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _111.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _111.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _111.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _111.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _111.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _111.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _111.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _111.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _111.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _111.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _111.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _111.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _111.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _111.MsgExecLegacyContent;
                    };
                    vote(value: _111.MsgVote): {
                        typeUrl: string;
                        value: _111.MsgVote;
                    };
                    voteWeighted(value: _111.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _111.MsgVoteWeighted;
                    };
                    deposit(value: _111.MsgDeposit): {
                        typeUrl: string;
                        value: _111.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _111.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _111.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _111.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _111.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _111.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _111.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _111.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _111.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _111.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _111.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _111.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgSubmitProposal;
                fromJSON(object: any): _111.MsgSubmitProposal;
                toJSON(message: _111.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_111.MsgSubmitProposal>): _111.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _111.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgSubmitProposalResponse;
                fromJSON(object: any): _111.MsgSubmitProposalResponse;
                toJSON(message: _111.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_111.MsgSubmitProposalResponse>): _111.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _111.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgExecLegacyContent;
                fromJSON(object: any): _111.MsgExecLegacyContent;
                toJSON(message: _111.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_111.MsgExecLegacyContent>): _111.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _111.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgExecLegacyContentResponse;
                fromJSON(_: any): _111.MsgExecLegacyContentResponse;
                toJSON(_: _111.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_111.MsgExecLegacyContentResponse>): _111.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _111.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgVote;
                fromJSON(object: any): _111.MsgVote;
                toJSON(message: _111.MsgVote): unknown;
                fromPartial(object: Partial<_111.MsgVote>): _111.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _111.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgVoteResponse;
                fromJSON(_: any): _111.MsgVoteResponse;
                toJSON(_: _111.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_111.MsgVoteResponse>): _111.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _111.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgVoteWeighted;
                fromJSON(object: any): _111.MsgVoteWeighted;
                toJSON(message: _111.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_111.MsgVoteWeighted>): _111.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _111.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgVoteWeightedResponse;
                fromJSON(_: any): _111.MsgVoteWeightedResponse;
                toJSON(_: _111.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_111.MsgVoteWeightedResponse>): _111.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _111.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgDeposit;
                fromJSON(object: any): _111.MsgDeposit;
                toJSON(message: _111.MsgDeposit): unknown;
                fromPartial(object: Partial<_111.MsgDeposit>): _111.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _111.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.MsgDepositResponse;
                fromJSON(_: any): _111.MsgDepositResponse;
                toJSON(_: _111.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_111.MsgDepositResponse>): _111.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _110.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryProposalRequest;
                fromJSON(object: any): _110.QueryProposalRequest;
                toJSON(message: _110.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_110.QueryProposalRequest>): _110.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _110.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryProposalResponse;
                fromJSON(object: any): _110.QueryProposalResponse;
                toJSON(message: _110.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_110.QueryProposalResponse>): _110.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _110.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryProposalsRequest;
                fromJSON(object: any): _110.QueryProposalsRequest;
                toJSON(message: _110.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_110.QueryProposalsRequest>): _110.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _110.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryProposalsResponse;
                fromJSON(object: any): _110.QueryProposalsResponse;
                toJSON(message: _110.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_110.QueryProposalsResponse>): _110.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _110.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryVoteRequest;
                fromJSON(object: any): _110.QueryVoteRequest;
                toJSON(message: _110.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_110.QueryVoteRequest>): _110.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _110.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryVoteResponse;
                fromJSON(object: any): _110.QueryVoteResponse;
                toJSON(message: _110.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_110.QueryVoteResponse>): _110.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _110.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryVotesRequest;
                fromJSON(object: any): _110.QueryVotesRequest;
                toJSON(message: _110.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_110.QueryVotesRequest>): _110.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _110.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryVotesResponse;
                fromJSON(object: any): _110.QueryVotesResponse;
                toJSON(message: _110.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_110.QueryVotesResponse>): _110.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _110.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryParamsRequest;
                fromJSON(object: any): _110.QueryParamsRequest;
                toJSON(message: _110.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_110.QueryParamsRequest>): _110.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _110.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryParamsResponse;
                fromJSON(object: any): _110.QueryParamsResponse;
                toJSON(message: _110.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_110.QueryParamsResponse>): _110.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _110.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryDepositRequest;
                fromJSON(object: any): _110.QueryDepositRequest;
                toJSON(message: _110.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_110.QueryDepositRequest>): _110.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _110.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryDepositResponse;
                fromJSON(object: any): _110.QueryDepositResponse;
                toJSON(message: _110.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_110.QueryDepositResponse>): _110.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _110.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryDepositsRequest;
                fromJSON(object: any): _110.QueryDepositsRequest;
                toJSON(message: _110.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_110.QueryDepositsRequest>): _110.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _110.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryDepositsResponse;
                fromJSON(object: any): _110.QueryDepositsResponse;
                toJSON(message: _110.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_110.QueryDepositsResponse>): _110.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _110.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryTallyResultRequest;
                fromJSON(object: any): _110.QueryTallyResultRequest;
                toJSON(message: _110.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_110.QueryTallyResultRequest>): _110.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _110.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.QueryTallyResultResponse;
                fromJSON(object: any): _110.QueryTallyResultResponse;
                toJSON(message: _110.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_110.QueryTallyResultResponse>): _110.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _109.VoteOption;
            voteOptionToJSON(object: _109.VoteOption): string;
            proposalStatusFromJSON(object: any): _109.ProposalStatus;
            proposalStatusToJSON(object: _109.ProposalStatus): string;
            VoteOption: typeof _109.VoteOption;
            VoteOptionSDKType: typeof _109.VoteOptionSDKType;
            ProposalStatus: typeof _109.ProposalStatus;
            ProposalStatusSDKType: typeof _109.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _109.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.WeightedVoteOption;
                fromJSON(object: any): _109.WeightedVoteOption;
                toJSON(message: _109.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_109.WeightedVoteOption>): _109.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _109.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Deposit;
                fromJSON(object: any): _109.Deposit;
                toJSON(message: _109.Deposit): unknown;
                fromPartial(object: Partial<_109.Deposit>): _109.Deposit;
            };
            Proposal: {
                encode(message: _109.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Proposal;
                fromJSON(object: any): _109.Proposal;
                toJSON(message: _109.Proposal): unknown;
                fromPartial(object: Partial<_109.Proposal>): _109.Proposal;
            };
            TallyResult: {
                encode(message: _109.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.TallyResult;
                fromJSON(object: any): _109.TallyResult;
                toJSON(message: _109.TallyResult): unknown;
                fromPartial(object: Partial<_109.TallyResult>): _109.TallyResult;
            };
            Vote: {
                encode(message: _109.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Vote;
                fromJSON(object: any): _109.Vote;
                toJSON(message: _109.Vote): unknown;
                fromPartial(object: Partial<_109.Vote>): _109.Vote;
            };
            DepositParams: {
                encode(message: _109.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.DepositParams;
                fromJSON(object: any): _109.DepositParams;
                toJSON(message: _109.DepositParams): unknown;
                fromPartial(object: Partial<_109.DepositParams>): _109.DepositParams;
            };
            VotingParams: {
                encode(message: _109.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.VotingParams;
                fromJSON(object: any): _109.VotingParams;
                toJSON(message: _109.VotingParams): unknown;
                fromPartial(object: Partial<_109.VotingParams>): _109.VotingParams;
            };
            TallyParams: {
                encode(message: _109.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.TallyParams;
                fromJSON(object: any): _109.TallyParams;
                toJSON(message: _109.TallyParams): unknown;
                fromPartial(object: Partial<_109.TallyParams>): _109.TallyParams;
            };
            GenesisState: {
                encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GenesisState;
                fromJSON(object: any): _108.GenesisState;
                toJSON(message: _108.GenesisState): unknown;
                fromPartial(object: Partial<_108.GenesisState>): _108.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _290.MsgClientImpl;
            QueryClientImpl: typeof _274.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _114.QueryProposalRequest): Promise<_114.QueryProposalResponse>;
                proposals(request: _114.QueryProposalsRequest): Promise<_114.QueryProposalsResponse>;
                vote(request: _114.QueryVoteRequest): Promise<_114.QueryVoteResponse>;
                votes(request: _114.QueryVotesRequest): Promise<_114.QueryVotesResponse>;
                params(request: _114.QueryParamsRequest): Promise<_114.QueryParamsResponse>;
                deposit(request: _114.QueryDepositRequest): Promise<_114.QueryDepositResponse>;
                deposits(request: _114.QueryDepositsRequest): Promise<_114.QueryDepositsResponse>;
                tallyResult(request: _114.QueryTallyResultRequest): Promise<_114.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _115.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _115.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _115.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _115.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _115.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _115.MsgSubmitProposal;
                    };
                    vote(value: _115.MsgVote): {
                        typeUrl: string;
                        value: _115.MsgVote;
                    };
                    voteWeighted(value: _115.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _115.MsgVoteWeighted;
                    };
                    deposit(value: _115.MsgDeposit): {
                        typeUrl: string;
                        value: _115.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _115.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _115.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _115.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _115.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _115.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _115.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _115.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _115.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _115.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _115.MsgSubmitProposal;
                    };
                    vote(value: _115.MsgVote): {
                        typeUrl: string;
                        value: _115.MsgVote;
                    };
                    voteWeighted(value: _115.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _115.MsgVoteWeighted;
                    };
                    deposit(value: _115.MsgDeposit): {
                        typeUrl: string;
                        value: _115.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _115.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _115.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _115.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _115.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _115.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _115.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _115.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _115.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _115.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgSubmitProposal;
                fromJSON(object: any): _115.MsgSubmitProposal;
                toJSON(message: _115.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_115.MsgSubmitProposal>): _115.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _115.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgSubmitProposalResponse;
                fromJSON(object: any): _115.MsgSubmitProposalResponse;
                toJSON(message: _115.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_115.MsgSubmitProposalResponse>): _115.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _115.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgVote;
                fromJSON(object: any): _115.MsgVote;
                toJSON(message: _115.MsgVote): unknown;
                fromPartial(object: Partial<_115.MsgVote>): _115.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _115.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgVoteResponse;
                fromJSON(_: any): _115.MsgVoteResponse;
                toJSON(_: _115.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_115.MsgVoteResponse>): _115.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _115.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgVoteWeighted;
                fromJSON(object: any): _115.MsgVoteWeighted;
                toJSON(message: _115.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_115.MsgVoteWeighted>): _115.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _115.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgVoteWeightedResponse;
                fromJSON(_: any): _115.MsgVoteWeightedResponse;
                toJSON(_: _115.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_115.MsgVoteWeightedResponse>): _115.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _115.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgDeposit;
                fromJSON(object: any): _115.MsgDeposit;
                toJSON(message: _115.MsgDeposit): unknown;
                fromPartial(object: Partial<_115.MsgDeposit>): _115.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _115.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MsgDepositResponse;
                fromJSON(_: any): _115.MsgDepositResponse;
                toJSON(_: _115.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_115.MsgDepositResponse>): _115.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _114.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryProposalRequest;
                fromJSON(object: any): _114.QueryProposalRequest;
                toJSON(message: _114.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_114.QueryProposalRequest>): _114.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _114.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryProposalResponse;
                fromJSON(object: any): _114.QueryProposalResponse;
                toJSON(message: _114.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_114.QueryProposalResponse>): _114.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _114.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryProposalsRequest;
                fromJSON(object: any): _114.QueryProposalsRequest;
                toJSON(message: _114.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_114.QueryProposalsRequest>): _114.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _114.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryProposalsResponse;
                fromJSON(object: any): _114.QueryProposalsResponse;
                toJSON(message: _114.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_114.QueryProposalsResponse>): _114.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _114.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryVoteRequest;
                fromJSON(object: any): _114.QueryVoteRequest;
                toJSON(message: _114.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_114.QueryVoteRequest>): _114.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _114.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryVoteResponse;
                fromJSON(object: any): _114.QueryVoteResponse;
                toJSON(message: _114.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_114.QueryVoteResponse>): _114.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _114.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryVotesRequest;
                fromJSON(object: any): _114.QueryVotesRequest;
                toJSON(message: _114.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_114.QueryVotesRequest>): _114.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _114.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryVotesResponse;
                fromJSON(object: any): _114.QueryVotesResponse;
                toJSON(message: _114.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_114.QueryVotesResponse>): _114.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _114.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryParamsRequest;
                fromJSON(object: any): _114.QueryParamsRequest;
                toJSON(message: _114.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_114.QueryParamsRequest>): _114.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _114.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryParamsResponse;
                fromJSON(object: any): _114.QueryParamsResponse;
                toJSON(message: _114.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_114.QueryParamsResponse>): _114.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _114.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryDepositRequest;
                fromJSON(object: any): _114.QueryDepositRequest;
                toJSON(message: _114.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_114.QueryDepositRequest>): _114.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _114.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryDepositResponse;
                fromJSON(object: any): _114.QueryDepositResponse;
                toJSON(message: _114.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_114.QueryDepositResponse>): _114.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _114.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryDepositsRequest;
                fromJSON(object: any): _114.QueryDepositsRequest;
                toJSON(message: _114.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_114.QueryDepositsRequest>): _114.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _114.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryDepositsResponse;
                fromJSON(object: any): _114.QueryDepositsResponse;
                toJSON(message: _114.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_114.QueryDepositsResponse>): _114.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _114.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryTallyResultRequest;
                fromJSON(object: any): _114.QueryTallyResultRequest;
                toJSON(message: _114.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_114.QueryTallyResultRequest>): _114.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _114.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryTallyResultResponse;
                fromJSON(object: any): _114.QueryTallyResultResponse;
                toJSON(message: _114.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_114.QueryTallyResultResponse>): _114.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _113.VoteOption;
            voteOptionToJSON(object: _113.VoteOption): string;
            proposalStatusFromJSON(object: any): _113.ProposalStatus;
            proposalStatusToJSON(object: _113.ProposalStatus): string;
            VoteOption: typeof _113.VoteOption;
            VoteOptionSDKType: typeof _113.VoteOptionSDKType;
            ProposalStatus: typeof _113.ProposalStatus;
            ProposalStatusSDKType: typeof _113.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _113.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.WeightedVoteOption;
                fromJSON(object: any): _113.WeightedVoteOption;
                toJSON(message: _113.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_113.WeightedVoteOption>): _113.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _113.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.TextProposal;
                fromJSON(object: any): _113.TextProposal;
                toJSON(message: _113.TextProposal): unknown;
                fromPartial(object: Partial<_113.TextProposal>): _113.TextProposal;
            };
            Deposit: {
                encode(message: _113.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Deposit;
                fromJSON(object: any): _113.Deposit;
                toJSON(message: _113.Deposit): unknown;
                fromPartial(object: Partial<_113.Deposit>): _113.Deposit;
            };
            Proposal: {
                encode(message: _113.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Proposal;
                fromJSON(object: any): _113.Proposal;
                toJSON(message: _113.Proposal): unknown;
                fromPartial(object: Partial<_113.Proposal>): _113.Proposal;
            };
            TallyResult: {
                encode(message: _113.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.TallyResult;
                fromJSON(object: any): _113.TallyResult;
                toJSON(message: _113.TallyResult): unknown;
                fromPartial(object: Partial<_113.TallyResult>): _113.TallyResult;
            };
            Vote: {
                encode(message: _113.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Vote;
                fromJSON(object: any): _113.Vote;
                toJSON(message: _113.Vote): unknown;
                fromPartial(object: Partial<_113.Vote>): _113.Vote;
            };
            DepositParams: {
                encode(message: _113.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.DepositParams;
                fromJSON(object: any): _113.DepositParams;
                toJSON(message: _113.DepositParams): unknown;
                fromPartial(object: Partial<_113.DepositParams>): _113.DepositParams;
            };
            VotingParams: {
                encode(message: _113.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.VotingParams;
                fromJSON(object: any): _113.VotingParams;
                toJSON(message: _113.VotingParams): unknown;
                fromPartial(object: Partial<_113.VotingParams>): _113.VotingParams;
            };
            TallyParams: {
                encode(message: _113.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.TallyParams;
                fromJSON(object: any): _113.TallyParams;
                toJSON(message: _113.TallyParams): unknown;
                fromPartial(object: Partial<_113.TallyParams>): _113.TallyParams;
            };
            GenesisState: {
                encode(message: _112.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GenesisState;
                fromJSON(object: any): _112.GenesisState;
                toJSON(message: _112.GenesisState): unknown;
                fromPartial(object: Partial<_112.GenesisState>): _112.GenesisState;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _291.MsgClientImpl;
            QueryClientImpl: typeof _275.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _118.QueryGroupInfoRequest): Promise<_118.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _118.QueryGroupPolicyInfoRequest): Promise<_118.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _118.QueryGroupMembersRequest): Promise<_118.QueryGroupMembersResponse>;
                groupsByAdmin(request: _118.QueryGroupsByAdminRequest): Promise<_118.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _118.QueryGroupPoliciesByGroupRequest): Promise<_118.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _118.QueryGroupPoliciesByAdminRequest): Promise<_118.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _118.QueryProposalRequest): Promise<_118.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _118.QueryProposalsByGroupPolicyRequest): Promise<_118.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _118.QueryVoteByProposalVoterRequest): Promise<_118.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _118.QueryVotesByProposalRequest): Promise<_118.QueryVotesByProposalResponse>;
                votesByVoter(request: _118.QueryVotesByVoterRequest): Promise<_118.QueryVotesByVoterResponse>;
                groupsByMember(request: _118.QueryGroupsByMemberRequest): Promise<_118.QueryGroupsByMemberResponse>;
                tallyResult(request: _118.QueryTallyResultRequest): Promise<_118.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _119.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _119.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _119.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _119.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _119.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _119.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _119.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _119.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _119.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _119.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _119.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _119.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _119.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _119.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _119.MsgCreateGroup): {
                        typeUrl: string;
                        value: _119.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _119.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _119.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _119.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _119.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _119.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _119.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _119.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _119.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _119.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _119.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _119.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _119.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _119.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _119.MsgWithdrawProposal;
                    };
                    vote(value: _119.MsgVote): {
                        typeUrl: string;
                        value: _119.MsgVote;
                    };
                    exec(value: _119.MsgExec): {
                        typeUrl: string;
                        value: _119.MsgExec;
                    };
                    leaveGroup(value: _119.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _119.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _119.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _119.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _119.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _119.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _119.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _119.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _119.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _119.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _119.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _119.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _119.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _119.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _119.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _119.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _119.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _119.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _119.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _119.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _119.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _119.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _119.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _119.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _119.MsgCreateGroup): {
                        typeUrl: string;
                        value: _119.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _119.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _119.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _119.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _119.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _119.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _119.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _119.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _119.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _119.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _119.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _119.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _119.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _119.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _119.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _119.MsgWithdrawProposal;
                    };
                    vote(value: _119.MsgVote): {
                        typeUrl: string;
                        value: _119.MsgVote;
                    };
                    exec(value: _119.MsgExec): {
                        typeUrl: string;
                        value: _119.MsgExec;
                    };
                    leaveGroup(value: _119.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _119.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: ({ admin, members, metadata }: _119.MsgCreateGroup) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ admin, members, metadata }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        metadata: string;
                    }) => _119.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, memberUpdates }: _119.MsgUpdateGroupMembers) => {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    };
                    fromAmino: ({ admin, group_id, member_updates }: {
                        admin: string;
                        group_id: string;
                        member_updates: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                    }) => _119.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, newAdmin }: _119.MsgUpdateGroupAdmin) => {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, group_id, new_admin }: {
                        admin: string;
                        group_id: string;
                        new_admin: string;
                    }) => _119.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata }: _119.MsgUpdateGroupMetadata) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, group_id, metadata }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                    }) => _119.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, groupId, metadata, decisionPolicy }: _119.MsgCreateGroupPolicy) => {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, group_id, metadata, decision_policy }: {
                        admin: string;
                        group_id: string;
                        metadata: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _119.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: _119.MsgCreateGroupWithPolicy) => {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: {
                        admin: string;
                        members: {
                            address: string;
                            weight: string;
                            metadata: string;
                            added_at: {
                                seconds: string;
                                nanos: number;
                            };
                        }[];
                        group_metadata: string;
                        group_policy_metadata: string;
                        group_policy_as_admin: boolean;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _119.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: ({ admin, address, newAdmin }: _119.MsgUpdateGroupPolicyAdmin) => {
                        admin: string;
                        address: string;
                        new_admin: string;
                    };
                    fromAmino: ({ admin, address, new_admin }: {
                        admin: string;
                        address: string;
                        new_admin: string;
                    }) => _119.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: ({ admin, address, decisionPolicy }: _119.MsgUpdateGroupPolicyDecisionPolicy) => {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ admin, address, decision_policy }: {
                        admin: string;
                        address: string;
                        decision_policy: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _119.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: ({ admin, address, metadata }: _119.MsgUpdateGroupPolicyMetadata) => {
                        admin: string;
                        address: string;
                        metadata: string;
                    };
                    fromAmino: ({ admin, address, metadata }: {
                        admin: string;
                        address: string;
                        metadata: string;
                    }) => _119.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ address, proposers, metadata, messages, exec }: _119.MsgSubmitProposal) => {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    };
                    fromAmino: ({ address, proposers, metadata, messages, exec }: {
                        address: string;
                        proposers: string[];
                        metadata: string;
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        exec: number;
                    }) => _119.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: ({ proposalId, address }: _119.MsgWithdrawProposal) => {
                        proposal_id: string;
                        address: string;
                    };
                    fromAmino: ({ proposal_id, address }: {
                        proposal_id: string;
                        address: string;
                    }) => _119.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata, exec }: _119.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata, exec }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                        exec: number;
                    }) => _119.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ proposalId, signer }: _119.MsgExec) => {
                        proposal_id: string;
                        signer: string;
                    };
                    fromAmino: ({ proposal_id, signer }: {
                        proposal_id: string;
                        signer: string;
                    }) => _119.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: ({ address, groupId }: _119.MsgLeaveGroup) => {
                        address: string;
                        group_id: string;
                    };
                    fromAmino: ({ address, group_id }: {
                        address: string;
                        group_id: string;
                    }) => _119.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _120.VoteOption;
            voteOptionToJSON(object: _120.VoteOption): string;
            proposalStatusFromJSON(object: any): _120.ProposalStatus;
            proposalStatusToJSON(object: _120.ProposalStatus): string;
            proposalResultFromJSON(object: any): _120.ProposalResult;
            proposalResultToJSON(object: _120.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _120.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _120.ProposalExecutorResult): string;
            VoteOption: typeof _120.VoteOption;
            VoteOptionSDKType: typeof _120.VoteOptionSDKType;
            ProposalStatus: typeof _120.ProposalStatus;
            ProposalStatusSDKType: typeof _120.ProposalStatusSDKType;
            ProposalResult: typeof _120.ProposalResult;
            ProposalResultSDKType: typeof _120.ProposalResultSDKType;
            ProposalExecutorResult: typeof _120.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _120.ProposalExecutorResultSDKType;
            Member: {
                encode(message: _120.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Member;
                fromJSON(object: any): _120.Member;
                toJSON(message: _120.Member): unknown;
                fromPartial(object: Partial<_120.Member>): _120.Member;
            };
            Members: {
                encode(message: _120.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Members;
                fromJSON(object: any): _120.Members;
                toJSON(message: _120.Members): unknown;
                fromPartial(object: Partial<_120.Members>): _120.Members;
            };
            ThresholdDecisionPolicy: {
                encode(message: _120.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.ThresholdDecisionPolicy;
                fromJSON(object: any): _120.ThresholdDecisionPolicy;
                toJSON(message: _120.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_120.ThresholdDecisionPolicy>): _120.ThresholdDecisionPolicy;
            };
            PercentageDecisionPolicy: {
                encode(message: _120.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.PercentageDecisionPolicy;
                fromJSON(object: any): _120.PercentageDecisionPolicy;
                toJSON(message: _120.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_120.PercentageDecisionPolicy>): _120.PercentageDecisionPolicy;
            };
            DecisionPolicyWindows: {
                encode(message: _120.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.DecisionPolicyWindows;
                fromJSON(object: any): _120.DecisionPolicyWindows;
                toJSON(message: _120.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_120.DecisionPolicyWindows>): _120.DecisionPolicyWindows;
            };
            GroupInfo: {
                encode(message: _120.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GroupInfo;
                fromJSON(object: any): _120.GroupInfo;
                toJSON(message: _120.GroupInfo): unknown;
                fromPartial(object: Partial<_120.GroupInfo>): _120.GroupInfo;
            };
            GroupMember: {
                encode(message: _120.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GroupMember;
                fromJSON(object: any): _120.GroupMember;
                toJSON(message: _120.GroupMember): unknown;
                fromPartial(object: Partial<_120.GroupMember>): _120.GroupMember;
            };
            GroupPolicyInfo: {
                encode(message: _120.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GroupPolicyInfo;
                fromJSON(object: any): _120.GroupPolicyInfo;
                toJSON(message: _120.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_120.GroupPolicyInfo>): _120.GroupPolicyInfo;
            };
            Proposal: {
                encode(message: _120.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Proposal;
                fromJSON(object: any): _120.Proposal;
                toJSON(message: _120.Proposal): unknown;
                fromPartial(object: Partial<_120.Proposal>): _120.Proposal;
            };
            TallyResult: {
                encode(message: _120.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.TallyResult;
                fromJSON(object: any): _120.TallyResult;
                toJSON(message: _120.TallyResult): unknown;
                fromPartial(object: Partial<_120.TallyResult>): _120.TallyResult;
            };
            Vote: {
                encode(message: _120.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Vote;
                fromJSON(object: any): _120.Vote;
                toJSON(message: _120.Vote): unknown;
                fromPartial(object: Partial<_120.Vote>): _120.Vote;
            };
            execFromJSON(object: any): _119.Exec;
            execToJSON(object: _119.Exec): string;
            Exec: typeof _119.Exec;
            ExecSDKType: typeof _119.ExecSDKType;
            MsgCreateGroup: {
                encode(message: _119.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgCreateGroup;
                fromJSON(object: any): _119.MsgCreateGroup;
                toJSON(message: _119.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_119.MsgCreateGroup>): _119.MsgCreateGroup;
            };
            MsgCreateGroupResponse: {
                encode(message: _119.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgCreateGroupResponse;
                fromJSON(object: any): _119.MsgCreateGroupResponse;
                toJSON(message: _119.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_119.MsgCreateGroupResponse>): _119.MsgCreateGroupResponse;
            };
            MsgUpdateGroupMembers: {
                encode(message: _119.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgUpdateGroupMembers;
                fromJSON(object: any): _119.MsgUpdateGroupMembers;
                toJSON(message: _119.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_119.MsgUpdateGroupMembers>): _119.MsgUpdateGroupMembers;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _119.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _119.MsgUpdateGroupMembersResponse;
                toJSON(_: _119.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_119.MsgUpdateGroupMembersResponse>): _119.MsgUpdateGroupMembersResponse;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _119.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgUpdateGroupAdmin;
                fromJSON(object: any): _119.MsgUpdateGroupAdmin;
                toJSON(message: _119.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_119.MsgUpdateGroupAdmin>): _119.MsgUpdateGroupAdmin;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _119.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _119.MsgUpdateGroupAdminResponse;
                toJSON(_: _119.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_119.MsgUpdateGroupAdminResponse>): _119.MsgUpdateGroupAdminResponse;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _119.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgUpdateGroupMetadata;
                fromJSON(object: any): _119.MsgUpdateGroupMetadata;
                toJSON(message: _119.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_119.MsgUpdateGroupMetadata>): _119.MsgUpdateGroupMetadata;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _119.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _119.MsgUpdateGroupMetadataResponse;
                toJSON(_: _119.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_119.MsgUpdateGroupMetadataResponse>): _119.MsgUpdateGroupMetadataResponse;
            };
            MsgCreateGroupPolicy: {
                encode(message: _119.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgCreateGroupPolicy;
                fromJSON(object: any): _119.MsgCreateGroupPolicy;
                toJSON(message: _119.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_119.MsgCreateGroupPolicy>): _119.MsgCreateGroupPolicy;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _119.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _119.MsgCreateGroupPolicyResponse;
                toJSON(message: _119.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_119.MsgCreateGroupPolicyResponse>): _119.MsgCreateGroupPolicyResponse;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _119.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _119.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _119.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_119.MsgUpdateGroupPolicyAdmin>): _119.MsgUpdateGroupPolicyAdmin;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _119.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _119.MsgCreateGroupWithPolicy;
                toJSON(message: _119.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_119.MsgCreateGroupWithPolicy>): _119.MsgCreateGroupWithPolicy;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _119.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _119.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _119.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_119.MsgCreateGroupWithPolicyResponse>): _119.MsgCreateGroupWithPolicyResponse;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _119.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _119.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _119.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_119.MsgUpdateGroupPolicyAdminResponse>): _119.MsgUpdateGroupPolicyAdminResponse;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _119.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _119.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _119.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_119.MsgUpdateGroupPolicyDecisionPolicy>): _119.MsgUpdateGroupPolicyDecisionPolicy;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _119.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _119.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _119.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_119.MsgUpdateGroupPolicyDecisionPolicyResponse>): _119.MsgUpdateGroupPolicyDecisionPolicyResponse;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _119.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _119.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _119.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_119.MsgUpdateGroupPolicyMetadata>): _119.MsgUpdateGroupPolicyMetadata;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _119.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _119.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _119.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_119.MsgUpdateGroupPolicyMetadataResponse>): _119.MsgUpdateGroupPolicyMetadataResponse;
            };
            MsgSubmitProposal: {
                encode(message: _119.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgSubmitProposal;
                fromJSON(object: any): _119.MsgSubmitProposal;
                toJSON(message: _119.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_119.MsgSubmitProposal>): _119.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _119.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgSubmitProposalResponse;
                fromJSON(object: any): _119.MsgSubmitProposalResponse;
                toJSON(message: _119.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_119.MsgSubmitProposalResponse>): _119.MsgSubmitProposalResponse;
            };
            MsgWithdrawProposal: {
                encode(message: _119.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgWithdrawProposal;
                fromJSON(object: any): _119.MsgWithdrawProposal;
                toJSON(message: _119.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_119.MsgWithdrawProposal>): _119.MsgWithdrawProposal;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _119.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgWithdrawProposalResponse;
                fromJSON(_: any): _119.MsgWithdrawProposalResponse;
                toJSON(_: _119.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_119.MsgWithdrawProposalResponse>): _119.MsgWithdrawProposalResponse;
            };
            MsgVote: {
                encode(message: _119.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgVote;
                fromJSON(object: any): _119.MsgVote;
                toJSON(message: _119.MsgVote): unknown;
                fromPartial(object: Partial<_119.MsgVote>): _119.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _119.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgVoteResponse;
                fromJSON(_: any): _119.MsgVoteResponse;
                toJSON(_: _119.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_119.MsgVoteResponse>): _119.MsgVoteResponse;
            };
            MsgExec: {
                encode(message: _119.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgExec;
                fromJSON(object: any): _119.MsgExec;
                toJSON(message: _119.MsgExec): unknown;
                fromPartial(object: Partial<_119.MsgExec>): _119.MsgExec;
            };
            MsgExecResponse: {
                encode(_: _119.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgExecResponse;
                fromJSON(_: any): _119.MsgExecResponse;
                toJSON(_: _119.MsgExecResponse): unknown;
                fromPartial(_: Partial<_119.MsgExecResponse>): _119.MsgExecResponse;
            };
            MsgLeaveGroup: {
                encode(message: _119.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgLeaveGroup;
                fromJSON(object: any): _119.MsgLeaveGroup;
                toJSON(message: _119.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_119.MsgLeaveGroup>): _119.MsgLeaveGroup;
            };
            MsgLeaveGroupResponse: {
                encode(_: _119.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgLeaveGroupResponse;
                fromJSON(_: any): _119.MsgLeaveGroupResponse;
                toJSON(_: _119.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_119.MsgLeaveGroupResponse>): _119.MsgLeaveGroupResponse;
            };
            QueryGroupInfoRequest: {
                encode(message: _118.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryGroupInfoRequest;
                fromJSON(object: any): _118.QueryGroupInfoRequest;
                toJSON(message: _118.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_118.QueryGroupInfoRequest>): _118.QueryGroupInfoRequest;
            };
            QueryGroupInfoResponse: {
                encode(message: _118.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryGroupInfoResponse;
                fromJSON(object: any): _118.QueryGroupInfoResponse;
                toJSON(message: _118.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_118.QueryGroupInfoResponse>): _118.QueryGroupInfoResponse;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _118.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _118.QueryGroupPolicyInfoRequest;
                toJSON(message: _118.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_118.QueryGroupPolicyInfoRequest>): _118.QueryGroupPolicyInfoRequest;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _118.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _118.QueryGroupPolicyInfoResponse;
                toJSON(message: _118.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_118.QueryGroupPolicyInfoResponse>): _118.QueryGroupPolicyInfoResponse;
            };
            QueryGroupMembersRequest: {
                encode(message: _118.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryGroupMembersRequest;
                fromJSON(object: any): _118.QueryGroupMembersRequest;
                toJSON(message: _118.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_118.QueryGroupMembersRequest>): _118.QueryGroupMembersRequest;
            };
            QueryGroupMembersResponse: {
                encode(message: _118.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryGroupMembersResponse;
                fromJSON(object: any): _118.QueryGroupMembersResponse;
                toJSON(message: _118.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_118.QueryGroupMembersResponse>): _118.QueryGroupMembersResponse;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _118.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryGroupsByAdminRequest;
                fromJSON(object: any): _118.QueryGroupsByAdminRequest;
                toJSON(message: _118.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_118.QueryGroupsByAdminRequest>): _118.QueryGroupsByAdminRequest;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _118.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryGroupsByAdminResponse;
                fromJSON(object: any): _118.QueryGroupsByAdminResponse;
                toJSON(message: _118.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_118.QueryGroupsByAdminResponse>): _118.QueryGroupsByAdminResponse;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _118.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _118.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _118.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_118.QueryGroupPoliciesByGroupRequest>): _118.QueryGroupPoliciesByGroupRequest;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _118.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _118.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _118.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_118.QueryGroupPoliciesByGroupResponse>): _118.QueryGroupPoliciesByGroupResponse;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _118.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _118.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _118.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_118.QueryGroupPoliciesByAdminRequest>): _118.QueryGroupPoliciesByAdminRequest;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _118.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _118.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _118.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_118.QueryGroupPoliciesByAdminResponse>): _118.QueryGroupPoliciesByAdminResponse;
            };
            QueryProposalRequest: {
                encode(message: _118.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryProposalRequest;
                fromJSON(object: any): _118.QueryProposalRequest;
                toJSON(message: _118.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_118.QueryProposalRequest>): _118.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _118.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryProposalResponse;
                fromJSON(object: any): _118.QueryProposalResponse;
                toJSON(message: _118.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_118.QueryProposalResponse>): _118.QueryProposalResponse;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _118.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _118.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _118.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_118.QueryProposalsByGroupPolicyRequest>): _118.QueryProposalsByGroupPolicyRequest;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _118.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _118.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _118.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_118.QueryProposalsByGroupPolicyResponse>): _118.QueryProposalsByGroupPolicyResponse;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _118.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _118.QueryVoteByProposalVoterRequest;
                toJSON(message: _118.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_118.QueryVoteByProposalVoterRequest>): _118.QueryVoteByProposalVoterRequest;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _118.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _118.QueryVoteByProposalVoterResponse;
                toJSON(message: _118.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_118.QueryVoteByProposalVoterResponse>): _118.QueryVoteByProposalVoterResponse;
            };
            QueryVotesByProposalRequest: {
                encode(message: _118.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryVotesByProposalRequest;
                fromJSON(object: any): _118.QueryVotesByProposalRequest;
                toJSON(message: _118.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_118.QueryVotesByProposalRequest>): _118.QueryVotesByProposalRequest;
            };
            QueryVotesByProposalResponse: {
                encode(message: _118.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryVotesByProposalResponse;
                fromJSON(object: any): _118.QueryVotesByProposalResponse;
                toJSON(message: _118.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_118.QueryVotesByProposalResponse>): _118.QueryVotesByProposalResponse;
            };
            QueryVotesByVoterRequest: {
                encode(message: _118.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryVotesByVoterRequest;
                fromJSON(object: any): _118.QueryVotesByVoterRequest;
                toJSON(message: _118.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_118.QueryVotesByVoterRequest>): _118.QueryVotesByVoterRequest;
            };
            QueryVotesByVoterResponse: {
                encode(message: _118.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryVotesByVoterResponse;
                fromJSON(object: any): _118.QueryVotesByVoterResponse;
                toJSON(message: _118.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_118.QueryVotesByVoterResponse>): _118.QueryVotesByVoterResponse;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _118.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryGroupsByMemberRequest;
                fromJSON(object: any): _118.QueryGroupsByMemberRequest;
                toJSON(message: _118.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_118.QueryGroupsByMemberRequest>): _118.QueryGroupsByMemberRequest;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _118.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryGroupsByMemberResponse;
                fromJSON(object: any): _118.QueryGroupsByMemberResponse;
                toJSON(message: _118.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_118.QueryGroupsByMemberResponse>): _118.QueryGroupsByMemberResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _118.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryTallyResultRequest;
                fromJSON(object: any): _118.QueryTallyResultRequest;
                toJSON(message: _118.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_118.QueryTallyResultRequest>): _118.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _118.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryTallyResultResponse;
                fromJSON(object: any): _118.QueryTallyResultResponse;
                toJSON(message: _118.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_118.QueryTallyResultResponse>): _118.QueryTallyResultResponse;
            };
            GenesisState: {
                encode(message: _117.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.GenesisState;
                fromJSON(object: any): _117.GenesisState;
                toJSON(message: _117.GenesisState): unknown;
                fromPartial(object: Partial<_117.GenesisState>): _117.GenesisState;
            };
            EventCreateGroup: {
                encode(message: _116.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.EventCreateGroup;
                fromJSON(object: any): _116.EventCreateGroup;
                toJSON(message: _116.EventCreateGroup): unknown;
                fromPartial(object: Partial<_116.EventCreateGroup>): _116.EventCreateGroup;
            };
            EventUpdateGroup: {
                encode(message: _116.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.EventUpdateGroup;
                fromJSON(object: any): _116.EventUpdateGroup;
                toJSON(message: _116.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_116.EventUpdateGroup>): _116.EventUpdateGroup;
            };
            EventCreateGroupPolicy: {
                encode(message: _116.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.EventCreateGroupPolicy;
                fromJSON(object: any): _116.EventCreateGroupPolicy;
                toJSON(message: _116.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_116.EventCreateGroupPolicy>): _116.EventCreateGroupPolicy;
            };
            EventUpdateGroupPolicy: {
                encode(message: _116.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.EventUpdateGroupPolicy;
                fromJSON(object: any): _116.EventUpdateGroupPolicy;
                toJSON(message: _116.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_116.EventUpdateGroupPolicy>): _116.EventUpdateGroupPolicy;
            };
            EventSubmitProposal: {
                encode(message: _116.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.EventSubmitProposal;
                fromJSON(object: any): _116.EventSubmitProposal;
                toJSON(message: _116.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_116.EventSubmitProposal>): _116.EventSubmitProposal;
            };
            EventWithdrawProposal: {
                encode(message: _116.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.EventWithdrawProposal;
                fromJSON(object: any): _116.EventWithdrawProposal;
                toJSON(message: _116.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_116.EventWithdrawProposal>): _116.EventWithdrawProposal;
            };
            EventVote: {
                encode(message: _116.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.EventVote;
                fromJSON(object: any): _116.EventVote;
                toJSON(message: _116.EventVote): unknown;
                fromPartial(object: Partial<_116.EventVote>): _116.EventVote;
            };
            EventExec: {
                encode(message: _116.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.EventExec;
                fromJSON(object: any): _116.EventExec;
                toJSON(message: _116.EventExec): unknown;
                fromPartial(object: Partial<_116.EventExec>): _116.EventExec;
            };
            EventLeaveGroup: {
                encode(message: _116.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.EventLeaveGroup;
                fromJSON(object: any): _116.EventLeaveGroup;
                toJSON(message: _116.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_116.EventLeaveGroup>): _116.EventLeaveGroup;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _276.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _123.QueryParamsRequest): Promise<_123.QueryParamsResponse>;
                inflation(request?: _123.QueryInflationRequest): Promise<_123.QueryInflationResponse>;
                annualProvisions(request?: _123.QueryAnnualProvisionsRequest): Promise<_123.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _123.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryParamsRequest;
                fromJSON(_: any): _123.QueryParamsRequest;
                toJSON(_: _123.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_123.QueryParamsRequest>): _123.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _123.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryParamsResponse;
                fromJSON(object: any): _123.QueryParamsResponse;
                toJSON(message: _123.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_123.QueryParamsResponse>): _123.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _123.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryInflationRequest;
                fromJSON(_: any): _123.QueryInflationRequest;
                toJSON(_: _123.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_123.QueryInflationRequest>): _123.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _123.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryInflationResponse;
                fromJSON(object: any): _123.QueryInflationResponse;
                toJSON(message: _123.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_123.QueryInflationResponse>): _123.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _123.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _123.QueryAnnualProvisionsRequest;
                toJSON(_: _123.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_123.QueryAnnualProvisionsRequest>): _123.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _123.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _123.QueryAnnualProvisionsResponse;
                toJSON(message: _123.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_123.QueryAnnualProvisionsResponse>): _123.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _122.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Minter;
                fromJSON(object: any): _122.Minter;
                toJSON(message: _122.Minter): unknown;
                fromPartial(object: Partial<_122.Minter>): _122.Minter;
            };
            Params: {
                encode(message: _122.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Params;
                fromJSON(object: any): _122.Params;
                toJSON(message: _122.Params): unknown;
                fromPartial(object: Partial<_122.Params>): _122.Params;
            };
            GenesisState: {
                encode(message: _121.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.GenesisState;
                fromJSON(object: any): _121.GenesisState;
                toJSON(message: _121.GenesisState): unknown;
                fromPartial(object: Partial<_121.GenesisState>): _121.GenesisState;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _292.MsgClientImpl;
            QueryClientImpl: typeof _277.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _128.QueryBalanceRequest): Promise<_128.QueryBalanceResponse>;
                owner(request: _128.QueryOwnerRequest): Promise<_128.QueryOwnerResponse>;
                supply(request: _128.QuerySupplyRequest): Promise<_128.QuerySupplyResponse>;
                nFTs(request: _128.QueryNFTsRequest): Promise<_128.QueryNFTsResponse>;
                nFT(request: _128.QueryNFTRequest): Promise<_128.QueryNFTResponse>;
                class(request: _128.QueryClassRequest): Promise<_128.QueryClassResponse>;
                classes(request?: _128.QueryClassesRequest): Promise<_128.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _129.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _129.MsgSend): {
                        typeUrl: string;
                        value: _129.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _129.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _129.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _129.MsgSend): {
                        typeUrl: string;
                        value: _129.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ classId, id, sender, receiver }: _129.MsgSend) => {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    };
                    fromAmino: ({ class_id, id, sender, receiver }: {
                        class_id: string;
                        id: string;
                        sender: string;
                        receiver: string;
                    }) => _129.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _129.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgSend;
                fromJSON(object: any): _129.MsgSend;
                toJSON(message: _129.MsgSend): unknown;
                fromPartial(object: Partial<_129.MsgSend>): _129.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _129.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgSendResponse;
                fromJSON(_: any): _129.MsgSendResponse;
                toJSON(_: _129.MsgSendResponse): unknown;
                fromPartial(_: Partial<_129.MsgSendResponse>): _129.MsgSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _128.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryBalanceRequest;
                fromJSON(object: any): _128.QueryBalanceRequest;
                toJSON(message: _128.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_128.QueryBalanceRequest>): _128.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _128.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryBalanceResponse;
                fromJSON(object: any): _128.QueryBalanceResponse;
                toJSON(message: _128.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_128.QueryBalanceResponse>): _128.QueryBalanceResponse;
            };
            QueryOwnerRequest: {
                encode(message: _128.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryOwnerRequest;
                fromJSON(object: any): _128.QueryOwnerRequest;
                toJSON(message: _128.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_128.QueryOwnerRequest>): _128.QueryOwnerRequest;
            };
            QueryOwnerResponse: {
                encode(message: _128.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryOwnerResponse;
                fromJSON(object: any): _128.QueryOwnerResponse;
                toJSON(message: _128.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_128.QueryOwnerResponse>): _128.QueryOwnerResponse;
            };
            QuerySupplyRequest: {
                encode(message: _128.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QuerySupplyRequest;
                fromJSON(object: any): _128.QuerySupplyRequest;
                toJSON(message: _128.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_128.QuerySupplyRequest>): _128.QuerySupplyRequest;
            };
            QuerySupplyResponse: {
                encode(message: _128.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QuerySupplyResponse;
                fromJSON(object: any): _128.QuerySupplyResponse;
                toJSON(message: _128.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_128.QuerySupplyResponse>): _128.QuerySupplyResponse;
            };
            QueryNFTsRequest: {
                encode(message: _128.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryNFTsRequest;
                fromJSON(object: any): _128.QueryNFTsRequest;
                toJSON(message: _128.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_128.QueryNFTsRequest>): _128.QueryNFTsRequest;
            };
            QueryNFTsResponse: {
                encode(message: _128.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryNFTsResponse;
                fromJSON(object: any): _128.QueryNFTsResponse;
                toJSON(message: _128.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_128.QueryNFTsResponse>): _128.QueryNFTsResponse;
            };
            QueryNFTRequest: {
                encode(message: _128.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryNFTRequest;
                fromJSON(object: any): _128.QueryNFTRequest;
                toJSON(message: _128.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_128.QueryNFTRequest>): _128.QueryNFTRequest;
            };
            QueryNFTResponse: {
                encode(message: _128.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryNFTResponse;
                fromJSON(object: any): _128.QueryNFTResponse;
                toJSON(message: _128.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_128.QueryNFTResponse>): _128.QueryNFTResponse;
            };
            QueryClassRequest: {
                encode(message: _128.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryClassRequest;
                fromJSON(object: any): _128.QueryClassRequest;
                toJSON(message: _128.QueryClassRequest): unknown;
                fromPartial(object: Partial<_128.QueryClassRequest>): _128.QueryClassRequest;
            };
            QueryClassResponse: {
                encode(message: _128.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryClassResponse;
                fromJSON(object: any): _128.QueryClassResponse;
                toJSON(message: _128.QueryClassResponse): unknown;
                fromPartial(object: Partial<_128.QueryClassResponse>): _128.QueryClassResponse;
            };
            QueryClassesRequest: {
                encode(message: _128.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryClassesRequest;
                fromJSON(object: any): _128.QueryClassesRequest;
                toJSON(message: _128.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_128.QueryClassesRequest>): _128.QueryClassesRequest;
            };
            QueryClassesResponse: {
                encode(message: _128.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryClassesResponse;
                fromJSON(object: any): _128.QueryClassesResponse;
                toJSON(message: _128.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_128.QueryClassesResponse>): _128.QueryClassesResponse;
            };
            Class: {
                encode(message: _127.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Class;
                fromJSON(object: any): _127.Class;
                toJSON(message: _127.Class): unknown;
                fromPartial(object: Partial<_127.Class>): _127.Class;
            };
            NFT: {
                encode(message: _127.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.NFT;
                fromJSON(object: any): _127.NFT;
                toJSON(message: _127.NFT): unknown;
                fromPartial(object: Partial<_127.NFT>): _127.NFT;
            };
            GenesisState: {
                encode(message: _126.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.GenesisState;
                fromJSON(object: any): _126.GenesisState;
                toJSON(message: _126.GenesisState): unknown;
                fromPartial(object: Partial<_126.GenesisState>): _126.GenesisState;
            };
            Entry: {
                encode(message: _126.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.Entry;
                fromJSON(object: any): _126.Entry;
                toJSON(message: _126.Entry): unknown;
                fromPartial(object: Partial<_126.Entry>): _126.Entry;
            };
            EventSend: {
                encode(message: _125.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.EventSend;
                fromJSON(object: any): _125.EventSend;
                toJSON(message: _125.EventSend): unknown;
                fromPartial(object: Partial<_125.EventSend>): _125.EventSend;
            };
            EventMint: {
                encode(message: _125.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.EventMint;
                fromJSON(object: any): _125.EventMint;
                toJSON(message: _125.EventMint): unknown;
                fromPartial(object: Partial<_125.EventMint>): _125.EventMint;
            };
            EventBurn: {
                encode(message: _125.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.EventBurn;
                fromJSON(object: any): _125.EventBurn;
                toJSON(message: _125.EventBurn): unknown;
                fromPartial(object: Partial<_125.EventBurn>): _125.EventBurn;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _130.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.TableDescriptor;
                fromJSON(object: any): _130.TableDescriptor;
                toJSON(message: _130.TableDescriptor): unknown;
                fromPartial(object: Partial<_130.TableDescriptor>): _130.TableDescriptor;
            };
            PrimaryKeyDescriptor: {
                encode(message: _130.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.PrimaryKeyDescriptor;
                fromJSON(object: any): _130.PrimaryKeyDescriptor;
                toJSON(message: _130.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_130.PrimaryKeyDescriptor>): _130.PrimaryKeyDescriptor;
            };
            SecondaryIndexDescriptor: {
                encode(message: _130.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.SecondaryIndexDescriptor;
                fromJSON(object: any): _130.SecondaryIndexDescriptor;
                toJSON(message: _130.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_130.SecondaryIndexDescriptor>): _130.SecondaryIndexDescriptor;
            };
            SingletonDescriptor: {
                encode(message: _130.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.SingletonDescriptor;
                fromJSON(object: any): _130.SingletonDescriptor;
                toJSON(message: _130.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_130.SingletonDescriptor>): _130.SingletonDescriptor;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _131.StorageType;
            storageTypeToJSON(object: _131.StorageType): string;
            StorageType: typeof _131.StorageType;
            StorageTypeSDKType: typeof _131.StorageTypeSDKType;
            ModuleSchemaDescriptor: {
                encode(message: _131.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ModuleSchemaDescriptor;
                fromJSON(object: any): _131.ModuleSchemaDescriptor;
                toJSON(message: _131.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_131.ModuleSchemaDescriptor>): _131.ModuleSchemaDescriptor;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _131.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _131.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _131.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_131.ModuleSchemaDescriptor_FileEntry>): _131.ModuleSchemaDescriptor_FileEntry;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _278.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _133.QueryParamsRequest): Promise<_133.QueryParamsResponse>;
                subspaces(request?: _133.QuerySubspacesRequest): Promise<_133.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _133.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryParamsRequest;
                fromJSON(object: any): _133.QueryParamsRequest;
                toJSON(message: _133.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_133.QueryParamsRequest>): _133.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _133.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryParamsResponse;
                fromJSON(object: any): _133.QueryParamsResponse;
                toJSON(message: _133.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_133.QueryParamsResponse>): _133.QueryParamsResponse;
            };
            QuerySubspacesRequest: {
                encode(_: _133.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QuerySubspacesRequest;
                fromJSON(_: any): _133.QuerySubspacesRequest;
                toJSON(_: _133.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_133.QuerySubspacesRequest>): _133.QuerySubspacesRequest;
            };
            QuerySubspacesResponse: {
                encode(message: _133.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QuerySubspacesResponse;
                fromJSON(object: any): _133.QuerySubspacesResponse;
                toJSON(message: _133.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_133.QuerySubspacesResponse>): _133.QuerySubspacesResponse;
            };
            Subspace: {
                encode(message: _133.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Subspace;
                fromJSON(object: any): _133.Subspace;
                toJSON(message: _133.Subspace): unknown;
                fromPartial(object: Partial<_133.Subspace>): _133.Subspace;
            };
            ParameterChangeProposal: {
                encode(message: _132.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ParameterChangeProposal;
                fromJSON(object: any): _132.ParameterChangeProposal;
                toJSON(message: _132.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_132.ParameterChangeProposal>): _132.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _132.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.ParamChange;
                fromJSON(object: any): _132.ParamChange;
                toJSON(message: _132.ParamChange): unknown;
                fromPartial(object: Partial<_132.ParamChange>): _132.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _293.MsgClientImpl;
            QueryClientImpl: typeof _279.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _135.QueryParamsRequest): Promise<_135.QueryParamsResponse>;
                signingInfo(request: _135.QuerySigningInfoRequest): Promise<_135.QuerySigningInfoResponse>;
                signingInfos(request?: _135.QuerySigningInfosRequest): Promise<_135.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _137.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _137.MsgUnjail): {
                        typeUrl: string;
                        value: _137.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _137.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _137.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _137.MsgUnjail): {
                        typeUrl: string;
                        value: _137.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _137.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _137.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _137.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUnjail;
                fromJSON(object: any): _137.MsgUnjail;
                toJSON(message: _137.MsgUnjail): unknown;
                fromPartial(object: Partial<_137.MsgUnjail>): _137.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _137.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.MsgUnjailResponse;
                fromJSON(_: any): _137.MsgUnjailResponse;
                toJSON(_: _137.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_137.MsgUnjailResponse>): _137.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _136.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ValidatorSigningInfo;
                fromJSON(object: any): _136.ValidatorSigningInfo;
                toJSON(message: _136.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_136.ValidatorSigningInfo>): _136.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _136.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Params;
                fromJSON(object: any): _136.Params;
                toJSON(message: _136.Params): unknown;
                fromPartial(object: Partial<_136.Params>): _136.Params;
            };
            QueryParamsRequest: {
                encode(_: _135.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryParamsRequest;
                fromJSON(_: any): _135.QueryParamsRequest;
                toJSON(_: _135.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_135.QueryParamsRequest>): _135.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _135.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QueryParamsResponse;
                fromJSON(object: any): _135.QueryParamsResponse;
                toJSON(message: _135.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_135.QueryParamsResponse>): _135.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _135.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QuerySigningInfoRequest;
                fromJSON(object: any): _135.QuerySigningInfoRequest;
                toJSON(message: _135.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_135.QuerySigningInfoRequest>): _135.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _135.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QuerySigningInfoResponse;
                fromJSON(object: any): _135.QuerySigningInfoResponse;
                toJSON(message: _135.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_135.QuerySigningInfoResponse>): _135.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _135.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QuerySigningInfosRequest;
                fromJSON(object: any): _135.QuerySigningInfosRequest;
                toJSON(message: _135.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_135.QuerySigningInfosRequest>): _135.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _135.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.QuerySigningInfosResponse;
                fromJSON(object: any): _135.QuerySigningInfosResponse;
                toJSON(message: _135.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_135.QuerySigningInfosResponse>): _135.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _134.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.GenesisState;
                fromJSON(object: any): _134.GenesisState;
                toJSON(message: _134.GenesisState): unknown;
                fromPartial(object: Partial<_134.GenesisState>): _134.GenesisState;
            };
            SigningInfo: {
                encode(message: _134.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.SigningInfo;
                fromJSON(object: any): _134.SigningInfo;
                toJSON(message: _134.SigningInfo): unknown;
                fromPartial(object: Partial<_134.SigningInfo>): _134.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _134.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.ValidatorMissedBlocks;
                fromJSON(object: any): _134.ValidatorMissedBlocks;
                toJSON(message: _134.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_134.ValidatorMissedBlocks>): _134.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _134.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.MissedBlock;
                fromJSON(object: any): _134.MissedBlock;
                toJSON(message: _134.MissedBlock): unknown;
                fromPartial(object: Partial<_134.MissedBlock>): _134.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _294.MsgClientImpl;
            QueryClientImpl: typeof _280.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _140.QueryValidatorsRequest): Promise<_140.QueryValidatorsResponse>;
                validator(request: _140.QueryValidatorRequest): Promise<_140.QueryValidatorResponse>;
                validatorDelegations(request: _140.QueryValidatorDelegationsRequest): Promise<_140.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _140.QueryValidatorUnbondingDelegationsRequest): Promise<_140.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _140.QueryDelegationRequest): Promise<_140.QueryDelegationResponse>;
                unbondingDelegation(request: _140.QueryUnbondingDelegationRequest): Promise<_140.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _140.QueryDelegatorDelegationsRequest): Promise<_140.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _140.QueryDelegatorUnbondingDelegationsRequest): Promise<_140.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _140.QueryRedelegationsRequest): Promise<_140.QueryRedelegationsResponse>;
                delegatorValidators(request: _140.QueryDelegatorValidatorsRequest): Promise<_140.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _140.QueryDelegatorValidatorRequest): Promise<_140.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _140.QueryHistoricalInfoRequest): Promise<_140.QueryHistoricalInfoResponse>;
                pool(request?: _140.QueryPoolRequest): Promise<_140.QueryPoolResponse>;
                params(request?: _140.QueryParamsRequest): Promise<_140.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _142.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _142.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _142.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _142.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _142.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _142.MsgCreateValidator): {
                        typeUrl: string;
                        value: _142.MsgCreateValidator;
                    };
                    editValidator(value: _142.MsgEditValidator): {
                        typeUrl: string;
                        value: _142.MsgEditValidator;
                    };
                    delegate(value: _142.MsgDelegate): {
                        typeUrl: string;
                        value: _142.MsgDelegate;
                    };
                    beginRedelegate(value: _142.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _142.MsgBeginRedelegate;
                    };
                    undelegate(value: _142.MsgUndelegate): {
                        typeUrl: string;
                        value: _142.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _142.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _142.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _142.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _142.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _142.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _142.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _142.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _142.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _142.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _142.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _142.MsgCreateValidator): {
                        typeUrl: string;
                        value: _142.MsgCreateValidator;
                    };
                    editValidator(value: _142.MsgEditValidator): {
                        typeUrl: string;
                        value: _142.MsgEditValidator;
                    };
                    delegate(value: _142.MsgDelegate): {
                        typeUrl: string;
                        value: _142.MsgDelegate;
                    };
                    beginRedelegate(value: _142.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _142.MsgBeginRedelegate;
                    };
                    undelegate(value: _142.MsgUndelegate): {
                        typeUrl: string;
                        value: _142.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _142.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _142.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _142.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _142.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _142.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _142.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _142.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _142.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _142.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _142.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _142.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgCreateValidator;
                fromJSON(object: any): _142.MsgCreateValidator;
                toJSON(message: _142.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_142.MsgCreateValidator>): _142.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _142.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgCreateValidatorResponse;
                fromJSON(_: any): _142.MsgCreateValidatorResponse;
                toJSON(_: _142.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_142.MsgCreateValidatorResponse>): _142.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _142.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgEditValidator;
                fromJSON(object: any): _142.MsgEditValidator;
                toJSON(message: _142.MsgEditValidator): unknown;
                fromPartial(object: Partial<_142.MsgEditValidator>): _142.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _142.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgEditValidatorResponse;
                fromJSON(_: any): _142.MsgEditValidatorResponse;
                toJSON(_: _142.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_142.MsgEditValidatorResponse>): _142.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _142.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgDelegate;
                fromJSON(object: any): _142.MsgDelegate;
                toJSON(message: _142.MsgDelegate): unknown;
                fromPartial(object: Partial<_142.MsgDelegate>): _142.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _142.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgDelegateResponse;
                fromJSON(_: any): _142.MsgDelegateResponse;
                toJSON(_: _142.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_142.MsgDelegateResponse>): _142.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _142.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgBeginRedelegate;
                fromJSON(object: any): _142.MsgBeginRedelegate;
                toJSON(message: _142.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_142.MsgBeginRedelegate>): _142.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _142.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgBeginRedelegateResponse;
                fromJSON(object: any): _142.MsgBeginRedelegateResponse;
                toJSON(message: _142.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_142.MsgBeginRedelegateResponse>): _142.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _142.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgUndelegate;
                fromJSON(object: any): _142.MsgUndelegate;
                toJSON(message: _142.MsgUndelegate): unknown;
                fromPartial(object: Partial<_142.MsgUndelegate>): _142.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _142.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MsgUndelegateResponse;
                fromJSON(object: any): _142.MsgUndelegateResponse;
                toJSON(message: _142.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_142.MsgUndelegateResponse>): _142.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _141.BondStatus;
            bondStatusToJSON(object: _141.BondStatus): string;
            BondStatus: typeof _141.BondStatus;
            BondStatusSDKType: typeof _141.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _141.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.HistoricalInfo;
                fromJSON(object: any): _141.HistoricalInfo;
                toJSON(message: _141.HistoricalInfo): unknown;
                fromPartial(object: Partial<_141.HistoricalInfo>): _141.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _141.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.CommissionRates;
                fromJSON(object: any): _141.CommissionRates;
                toJSON(message: _141.CommissionRates): unknown;
                fromPartial(object: Partial<_141.CommissionRates>): _141.CommissionRates;
            };
            Commission: {
                encode(message: _141.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Commission;
                fromJSON(object: any): _141.Commission;
                toJSON(message: _141.Commission): unknown;
                fromPartial(object: Partial<_141.Commission>): _141.Commission;
            };
            Description: {
                encode(message: _141.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Description;
                fromJSON(object: any): _141.Description;
                toJSON(message: _141.Description): unknown;
                fromPartial(object: Partial<_141.Description>): _141.Description;
            };
            Validator: {
                encode(message: _141.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Validator;
                fromJSON(object: any): _141.Validator;
                toJSON(message: _141.Validator): unknown;
                fromPartial(object: Partial<_141.Validator>): _141.Validator;
            };
            ValAddresses: {
                encode(message: _141.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.ValAddresses;
                fromJSON(object: any): _141.ValAddresses;
                toJSON(message: _141.ValAddresses): unknown;
                fromPartial(object: Partial<_141.ValAddresses>): _141.ValAddresses;
            };
            DVPair: {
                encode(message: _141.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.DVPair;
                fromJSON(object: any): _141.DVPair;
                toJSON(message: _141.DVPair): unknown;
                fromPartial(object: Partial<_141.DVPair>): _141.DVPair;
            };
            DVPairs: {
                encode(message: _141.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.DVPairs;
                fromJSON(object: any): _141.DVPairs;
                toJSON(message: _141.DVPairs): unknown;
                fromPartial(object: Partial<_141.DVPairs>): _141.DVPairs;
            };
            DVVTriplet: {
                encode(message: _141.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.DVVTriplet;
                fromJSON(object: any): _141.DVVTriplet;
                toJSON(message: _141.DVVTriplet): unknown;
                fromPartial(object: Partial<_141.DVVTriplet>): _141.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _141.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.DVVTriplets;
                fromJSON(object: any): _141.DVVTriplets;
                toJSON(message: _141.DVVTriplets): unknown;
                fromPartial(object: Partial<_141.DVVTriplets>): _141.DVVTriplets;
            };
            Delegation: {
                encode(message: _141.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Delegation;
                fromJSON(object: any): _141.Delegation;
                toJSON(message: _141.Delegation): unknown;
                fromPartial(object: Partial<_141.Delegation>): _141.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _141.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.UnbondingDelegation;
                fromJSON(object: any): _141.UnbondingDelegation;
                toJSON(message: _141.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_141.UnbondingDelegation>): _141.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _141.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.UnbondingDelegationEntry;
                fromJSON(object: any): _141.UnbondingDelegationEntry;
                toJSON(message: _141.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_141.UnbondingDelegationEntry>): _141.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _141.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.RedelegationEntry;
                fromJSON(object: any): _141.RedelegationEntry;
                toJSON(message: _141.RedelegationEntry): unknown;
                fromPartial(object: Partial<_141.RedelegationEntry>): _141.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _141.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Redelegation;
                fromJSON(object: any): _141.Redelegation;
                toJSON(message: _141.Redelegation): unknown;
                fromPartial(object: Partial<_141.Redelegation>): _141.Redelegation;
            };
            Params: {
                encode(message: _141.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Params;
                fromJSON(object: any): _141.Params;
                toJSON(message: _141.Params): unknown;
                fromPartial(object: Partial<_141.Params>): _141.Params;
            };
            DelegationResponse: {
                encode(message: _141.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.DelegationResponse;
                fromJSON(object: any): _141.DelegationResponse;
                toJSON(message: _141.DelegationResponse): unknown;
                fromPartial(object: Partial<_141.DelegationResponse>): _141.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _141.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.RedelegationEntryResponse;
                fromJSON(object: any): _141.RedelegationEntryResponse;
                toJSON(message: _141.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_141.RedelegationEntryResponse>): _141.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _141.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.RedelegationResponse;
                fromJSON(object: any): _141.RedelegationResponse;
                toJSON(message: _141.RedelegationResponse): unknown;
                fromPartial(object: Partial<_141.RedelegationResponse>): _141.RedelegationResponse;
            };
            Pool: {
                encode(message: _141.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Pool;
                fromJSON(object: any): _141.Pool;
                toJSON(message: _141.Pool): unknown;
                fromPartial(object: Partial<_141.Pool>): _141.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _140.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryValidatorsRequest;
                fromJSON(object: any): _140.QueryValidatorsRequest;
                toJSON(message: _140.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_140.QueryValidatorsRequest>): _140.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _140.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryValidatorsResponse;
                fromJSON(object: any): _140.QueryValidatorsResponse;
                toJSON(message: _140.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_140.QueryValidatorsResponse>): _140.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _140.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryValidatorRequest;
                fromJSON(object: any): _140.QueryValidatorRequest;
                toJSON(message: _140.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_140.QueryValidatorRequest>): _140.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _140.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryValidatorResponse;
                fromJSON(object: any): _140.QueryValidatorResponse;
                toJSON(message: _140.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_140.QueryValidatorResponse>): _140.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _140.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _140.QueryValidatorDelegationsRequest;
                toJSON(message: _140.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_140.QueryValidatorDelegationsRequest>): _140.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _140.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _140.QueryValidatorDelegationsResponse;
                toJSON(message: _140.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_140.QueryValidatorDelegationsResponse>): _140.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _140.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _140.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _140.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_140.QueryValidatorUnbondingDelegationsRequest>): _140.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _140.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _140.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _140.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_140.QueryValidatorUnbondingDelegationsResponse>): _140.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _140.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryDelegationRequest;
                fromJSON(object: any): _140.QueryDelegationRequest;
                toJSON(message: _140.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_140.QueryDelegationRequest>): _140.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _140.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryDelegationResponse;
                fromJSON(object: any): _140.QueryDelegationResponse;
                toJSON(message: _140.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_140.QueryDelegationResponse>): _140.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _140.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _140.QueryUnbondingDelegationRequest;
                toJSON(message: _140.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_140.QueryUnbondingDelegationRequest>): _140.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _140.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _140.QueryUnbondingDelegationResponse;
                toJSON(message: _140.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_140.QueryUnbondingDelegationResponse>): _140.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _140.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _140.QueryDelegatorDelegationsRequest;
                toJSON(message: _140.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_140.QueryDelegatorDelegationsRequest>): _140.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _140.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _140.QueryDelegatorDelegationsResponse;
                toJSON(message: _140.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_140.QueryDelegatorDelegationsResponse>): _140.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _140.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _140.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _140.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_140.QueryDelegatorUnbondingDelegationsRequest>): _140.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _140.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _140.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _140.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_140.QueryDelegatorUnbondingDelegationsResponse>): _140.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _140.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryRedelegationsRequest;
                fromJSON(object: any): _140.QueryRedelegationsRequest;
                toJSON(message: _140.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_140.QueryRedelegationsRequest>): _140.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _140.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryRedelegationsResponse;
                fromJSON(object: any): _140.QueryRedelegationsResponse;
                toJSON(message: _140.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_140.QueryRedelegationsResponse>): _140.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _140.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _140.QueryDelegatorValidatorsRequest;
                toJSON(message: _140.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_140.QueryDelegatorValidatorsRequest>): _140.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _140.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _140.QueryDelegatorValidatorsResponse;
                toJSON(message: _140.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_140.QueryDelegatorValidatorsResponse>): _140.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _140.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _140.QueryDelegatorValidatorRequest;
                toJSON(message: _140.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_140.QueryDelegatorValidatorRequest>): _140.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _140.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _140.QueryDelegatorValidatorResponse;
                toJSON(message: _140.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_140.QueryDelegatorValidatorResponse>): _140.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _140.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryHistoricalInfoRequest;
                fromJSON(object: any): _140.QueryHistoricalInfoRequest;
                toJSON(message: _140.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_140.QueryHistoricalInfoRequest>): _140.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _140.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryHistoricalInfoResponse;
                fromJSON(object: any): _140.QueryHistoricalInfoResponse;
                toJSON(message: _140.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_140.QueryHistoricalInfoResponse>): _140.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _140.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryPoolRequest;
                fromJSON(_: any): _140.QueryPoolRequest;
                toJSON(_: _140.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_140.QueryPoolRequest>): _140.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _140.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryPoolResponse;
                fromJSON(object: any): _140.QueryPoolResponse;
                toJSON(message: _140.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_140.QueryPoolResponse>): _140.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _140.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryParamsRequest;
                fromJSON(_: any): _140.QueryParamsRequest;
                toJSON(_: _140.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_140.QueryParamsRequest>): _140.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _140.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryParamsResponse;
                fromJSON(object: any): _140.QueryParamsResponse;
                toJSON(message: _140.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_140.QueryParamsResponse>): _140.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _139.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.GenesisState;
                fromJSON(object: any): _139.GenesisState;
                toJSON(message: _139.GenesisState): unknown;
                fromPartial(object: Partial<_139.GenesisState>): _139.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _139.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.LastValidatorPower;
                fromJSON(object: any): _139.LastValidatorPower;
                toJSON(message: _139.LastValidatorPower): unknown;
                fromPartial(object: Partial<_139.LastValidatorPower>): _139.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _138.AuthorizationType;
            authorizationTypeToJSON(object: _138.AuthorizationType): string;
            AuthorizationType: typeof _138.AuthorizationType;
            AuthorizationTypeSDKType: typeof _138.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _138.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.StakeAuthorization;
                fromJSON(object: any): _138.StakeAuthorization;
                toJSON(message: _138.StakeAuthorization): unknown;
                fromPartial(object: Partial<_138.StakeAuthorization>): _138.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _138.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.StakeAuthorization_Validators;
                fromJSON(object: any): _138.StakeAuthorization_Validators;
                toJSON(message: _138.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_138.StakeAuthorization_Validators>): _138.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _143.SignMode;
                signModeToJSON(object: _143.SignMode): string;
                SignMode: typeof _143.SignMode;
                SignModeSDKType: typeof _143.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _143.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.SignatureDescriptors;
                    fromJSON(object: any): _143.SignatureDescriptors;
                    toJSON(message: _143.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_143.SignatureDescriptors>): _143.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _143.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.SignatureDescriptor;
                    fromJSON(object: any): _143.SignatureDescriptor;
                    toJSON(message: _143.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_143.SignatureDescriptor>): _143.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _143.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.SignatureDescriptor_Data;
                    fromJSON(object: any): _143.SignatureDescriptor_Data;
                    toJSON(message: _143.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_143.SignatureDescriptor_Data>): _143.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _143.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _143.SignatureDescriptor_Data_Single;
                    toJSON(message: _143.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_143.SignatureDescriptor_Data_Single>): _143.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _143.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _143.SignatureDescriptor_Data_Multi;
                    toJSON(message: _143.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_143.SignatureDescriptor_Data_Multi>): _143.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _281.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _144.SimulateRequest): Promise<_144.SimulateResponse>;
                getTx(request: _144.GetTxRequest): Promise<_144.GetTxResponse>;
                broadcastTx(request: _144.BroadcastTxRequest): Promise<_144.BroadcastTxResponse>;
                getTxsEvent(request: _144.GetTxsEventRequest): Promise<_144.GetTxsEventResponse>;
                getBlockWithTxs(request: _144.GetBlockWithTxsRequest): Promise<_144.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _145.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Tx;
                fromJSON(object: any): _145.Tx;
                toJSON(message: _145.Tx): unknown;
                fromPartial(object: Partial<_145.Tx>): _145.Tx;
            };
            TxRaw: {
                encode(message: _145.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.TxRaw;
                fromJSON(object: any): _145.TxRaw;
                toJSON(message: _145.TxRaw): unknown;
                fromPartial(object: Partial<_145.TxRaw>): _145.TxRaw;
            };
            SignDoc: {
                encode(message: _145.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.SignDoc;
                fromJSON(object: any): _145.SignDoc;
                toJSON(message: _145.SignDoc): unknown;
                fromPartial(object: Partial<_145.SignDoc>): _145.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _145.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.SignDocDirectAux;
                fromJSON(object: any): _145.SignDocDirectAux;
                toJSON(message: _145.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_145.SignDocDirectAux>): _145.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _145.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.TxBody;
                fromJSON(object: any): _145.TxBody;
                toJSON(message: _145.TxBody): unknown;
                fromPartial(object: Partial<_145.TxBody>): _145.TxBody;
            };
            AuthInfo: {
                encode(message: _145.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.AuthInfo;
                fromJSON(object: any): _145.AuthInfo;
                toJSON(message: _145.AuthInfo): unknown;
                fromPartial(object: Partial<_145.AuthInfo>): _145.AuthInfo;
            };
            SignerInfo: {
                encode(message: _145.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.SignerInfo;
                fromJSON(object: any): _145.SignerInfo;
                toJSON(message: _145.SignerInfo): unknown;
                fromPartial(object: Partial<_145.SignerInfo>): _145.SignerInfo;
            };
            ModeInfo: {
                encode(message: _145.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ModeInfo;
                fromJSON(object: any): _145.ModeInfo;
                toJSON(message: _145.ModeInfo): unknown;
                fromPartial(object: Partial<_145.ModeInfo>): _145.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _145.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ModeInfo_Single;
                fromJSON(object: any): _145.ModeInfo_Single;
                toJSON(message: _145.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_145.ModeInfo_Single>): _145.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _145.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.ModeInfo_Multi;
                fromJSON(object: any): _145.ModeInfo_Multi;
                toJSON(message: _145.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_145.ModeInfo_Multi>): _145.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _145.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Fee;
                fromJSON(object: any): _145.Fee;
                toJSON(message: _145.Fee): unknown;
                fromPartial(object: Partial<_145.Fee>): _145.Fee;
            };
            Tip: {
                encode(message: _145.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Tip;
                fromJSON(object: any): _145.Tip;
                toJSON(message: _145.Tip): unknown;
                fromPartial(object: Partial<_145.Tip>): _145.Tip;
            };
            AuxSignerData: {
                encode(message: _145.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.AuxSignerData;
                fromJSON(object: any): _145.AuxSignerData;
                toJSON(message: _145.AuxSignerData): unknown;
                fromPartial(object: Partial<_145.AuxSignerData>): _145.AuxSignerData;
            };
            orderByFromJSON(object: any): _144.OrderBy;
            orderByToJSON(object: _144.OrderBy): string;
            broadcastModeFromJSON(object: any): _144.BroadcastMode;
            broadcastModeToJSON(object: _144.BroadcastMode): string;
            OrderBy: typeof _144.OrderBy;
            OrderBySDKType: typeof _144.OrderBySDKType;
            BroadcastMode: typeof _144.BroadcastMode;
            BroadcastModeSDKType: typeof _144.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _144.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GetTxsEventRequest;
                fromJSON(object: any): _144.GetTxsEventRequest;
                toJSON(message: _144.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_144.GetTxsEventRequest>): _144.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _144.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GetTxsEventResponse;
                fromJSON(object: any): _144.GetTxsEventResponse;
                toJSON(message: _144.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_144.GetTxsEventResponse>): _144.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _144.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.BroadcastTxRequest;
                fromJSON(object: any): _144.BroadcastTxRequest;
                toJSON(message: _144.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_144.BroadcastTxRequest>): _144.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _144.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.BroadcastTxResponse;
                fromJSON(object: any): _144.BroadcastTxResponse;
                toJSON(message: _144.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_144.BroadcastTxResponse>): _144.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _144.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.SimulateRequest;
                fromJSON(object: any): _144.SimulateRequest;
                toJSON(message: _144.SimulateRequest): unknown;
                fromPartial(object: Partial<_144.SimulateRequest>): _144.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _144.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.SimulateResponse;
                fromJSON(object: any): _144.SimulateResponse;
                toJSON(message: _144.SimulateResponse): unknown;
                fromPartial(object: Partial<_144.SimulateResponse>): _144.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _144.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GetTxRequest;
                fromJSON(object: any): _144.GetTxRequest;
                toJSON(message: _144.GetTxRequest): unknown;
                fromPartial(object: Partial<_144.GetTxRequest>): _144.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _144.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GetTxResponse;
                fromJSON(object: any): _144.GetTxResponse;
                toJSON(message: _144.GetTxResponse): unknown;
                fromPartial(object: Partial<_144.GetTxResponse>): _144.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _144.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GetBlockWithTxsRequest;
                fromJSON(object: any): _144.GetBlockWithTxsRequest;
                toJSON(message: _144.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_144.GetBlockWithTxsRequest>): _144.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _144.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GetBlockWithTxsResponse;
                fromJSON(object: any): _144.GetBlockWithTxsResponse;
                toJSON(message: _144.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_144.GetBlockWithTxsResponse>): _144.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _295.MsgClientImpl;
            QueryClientImpl: typeof _282.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _146.QueryCurrentPlanRequest): Promise<_146.QueryCurrentPlanResponse>;
                appliedPlan(request: _146.QueryAppliedPlanRequest): Promise<_146.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _146.QueryUpgradedConsensusStateRequest): Promise<_146.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _146.QueryModuleVersionsRequest): Promise<_146.QueryModuleVersionsResponse>;
                authority(request?: _146.QueryAuthorityRequest): Promise<_146.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _147.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _147.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _147.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _147.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _147.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _147.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _147.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _147.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _147.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _147.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _147.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _147.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _147.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _147.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _147.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _147.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _147.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _147.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _148.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Plan;
                fromJSON(object: any): _148.Plan;
                toJSON(message: _148.Plan): unknown;
                fromPartial(object: Partial<_148.Plan>): _148.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _148.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SoftwareUpgradeProposal;
                fromJSON(object: any): _148.SoftwareUpgradeProposal;
                toJSON(message: _148.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_148.SoftwareUpgradeProposal>): _148.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _148.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _148.CancelSoftwareUpgradeProposal;
                toJSON(message: _148.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_148.CancelSoftwareUpgradeProposal>): _148.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _148.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.ModuleVersion;
                fromJSON(object: any): _148.ModuleVersion;
                toJSON(message: _148.ModuleVersion): unknown;
                fromPartial(object: Partial<_148.ModuleVersion>): _148.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _147.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgSoftwareUpgrade;
                fromJSON(object: any): _147.MsgSoftwareUpgrade;
                toJSON(message: _147.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_147.MsgSoftwareUpgrade>): _147.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _147.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _147.MsgSoftwareUpgradeResponse;
                toJSON(_: _147.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_147.MsgSoftwareUpgradeResponse>): _147.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _147.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCancelUpgrade;
                fromJSON(object: any): _147.MsgCancelUpgrade;
                toJSON(message: _147.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_147.MsgCancelUpgrade>): _147.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _147.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCancelUpgradeResponse;
                fromJSON(_: any): _147.MsgCancelUpgradeResponse;
                toJSON(_: _147.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_147.MsgCancelUpgradeResponse>): _147.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _146.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryCurrentPlanRequest;
                fromJSON(_: any): _146.QueryCurrentPlanRequest;
                toJSON(_: _146.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_146.QueryCurrentPlanRequest>): _146.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _146.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryCurrentPlanResponse;
                fromJSON(object: any): _146.QueryCurrentPlanResponse;
                toJSON(message: _146.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_146.QueryCurrentPlanResponse>): _146.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _146.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryAppliedPlanRequest;
                fromJSON(object: any): _146.QueryAppliedPlanRequest;
                toJSON(message: _146.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_146.QueryAppliedPlanRequest>): _146.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _146.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryAppliedPlanResponse;
                fromJSON(object: any): _146.QueryAppliedPlanResponse;
                toJSON(message: _146.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_146.QueryAppliedPlanResponse>): _146.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _146.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _146.QueryUpgradedConsensusStateRequest;
                toJSON(message: _146.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_146.QueryUpgradedConsensusStateRequest>): _146.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _146.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _146.QueryUpgradedConsensusStateResponse;
                toJSON(message: _146.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_146.QueryUpgradedConsensusStateResponse>): _146.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _146.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryModuleVersionsRequest;
                fromJSON(object: any): _146.QueryModuleVersionsRequest;
                toJSON(message: _146.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_146.QueryModuleVersionsRequest>): _146.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _146.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryModuleVersionsResponse;
                fromJSON(object: any): _146.QueryModuleVersionsResponse;
                toJSON(message: _146.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_146.QueryModuleVersionsResponse>): _146.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _146.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryAuthorityRequest;
                fromJSON(_: any): _146.QueryAuthorityRequest;
                toJSON(_: _146.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_146.QueryAuthorityRequest>): _146.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _146.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryAuthorityResponse;
                fromJSON(object: any): _146.QueryAuthorityResponse;
                toJSON(message: _146.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_146.QueryAuthorityResponse>): _146.QueryAuthorityResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _296.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _149.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _149.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _149.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _149.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _149.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _149.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _149.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _149.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _149.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _149.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _149.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _149.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _149.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _149.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _149.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _149.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _149.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _149.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _149.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _149.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _149.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _149.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _149.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _149.MsgCreatePermanentLockedAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _149.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods }: _149.MsgCreatePeriodicVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, start_time, vesting_periods }: {
                        from_address: string;
                        to_address: string;
                        start_time: string;
                        vesting_periods: {
                            length: string;
                            amount: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _149.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _150.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.BaseVestingAccount;
                fromJSON(object: any): _150.BaseVestingAccount;
                toJSON(message: _150.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_150.BaseVestingAccount>): _150.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _150.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ContinuousVestingAccount;
                fromJSON(object: any): _150.ContinuousVestingAccount;
                toJSON(message: _150.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_150.ContinuousVestingAccount>): _150.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _150.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.DelayedVestingAccount;
                fromJSON(object: any): _150.DelayedVestingAccount;
                toJSON(message: _150.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_150.DelayedVestingAccount>): _150.DelayedVestingAccount;
            };
            Period: {
                encode(message: _150.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.Period;
                fromJSON(object: any): _150.Period;
                toJSON(message: _150.Period): unknown;
                fromPartial(object: Partial<_150.Period>): _150.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _150.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.PeriodicVestingAccount;
                fromJSON(object: any): _150.PeriodicVestingAccount;
                toJSON(message: _150.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_150.PeriodicVestingAccount>): _150.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _150.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.PermanentLockedAccount;
                fromJSON(object: any): _150.PermanentLockedAccount;
                toJSON(message: _150.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_150.PermanentLockedAccount>): _150.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _149.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreateVestingAccount;
                fromJSON(object: any): _149.MsgCreateVestingAccount;
                toJSON(message: _149.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_149.MsgCreateVestingAccount>): _149.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _149.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _149.MsgCreateVestingAccountResponse;
                toJSON(_: _149.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_149.MsgCreateVestingAccountResponse>): _149.MsgCreateVestingAccountResponse;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _149.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _149.MsgCreatePermanentLockedAccount;
                toJSON(message: _149.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_149.MsgCreatePermanentLockedAccount>): _149.MsgCreatePermanentLockedAccount;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _149.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _149.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _149.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_149.MsgCreatePermanentLockedAccountResponse>): _149.MsgCreatePermanentLockedAccountResponse;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _149.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _149.MsgCreatePeriodicVestingAccount;
                toJSON(message: _149.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_149.MsgCreatePeriodicVestingAccount>): _149.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _149.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _149.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _149.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_149.MsgCreatePeriodicVestingAccountResponse>): _149.MsgCreatePeriodicVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _283.MsgClientImpl;
                };
                bank: {
                    v1beta1: _284.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _285.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _286.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _287.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _288.MsgClientImpl;
                };
                gov: {
                    v1: _289.MsgClientImpl;
                    v1beta1: _290.MsgClientImpl;
                };
                group: {
                    v1: _291.MsgClientImpl;
                };
                nft: {
                    v1beta1: _292.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _293.MsgClientImpl;
                };
                staking: {
                    v1beta1: _294.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _295.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _296.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _61.QueryConfigRequest): Promise<_61.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _64.QueryAccountsRequest): Promise<_64.QueryAccountsResponse>;
                        account(request: _64.QueryAccountRequest): Promise<_64.QueryAccountResponse>;
                        params(request?: _64.QueryParamsRequest): Promise<_64.QueryParamsResponse>;
                        moduleAccounts(request?: _64.QueryModuleAccountsRequest): Promise<_64.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _64.Bech32PrefixRequest): Promise<_64.Bech32PrefixResponse>;
                        addressBytesToString(request: _64.AddressBytesToStringRequest): Promise<_64.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _64.AddressStringToBytesRequest): Promise<_64.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _68.QueryGrantsRequest): Promise<_68.QueryGrantsResponse>;
                        granterGrants(request: _68.QueryGranterGrantsRequest): Promise<_68.QueryGranterGrantsResponse>;
                        granteeGrants(request: _68.QueryGranteeGrantsRequest): Promise<_68.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _73.QueryBalanceRequest): Promise<_73.QueryBalanceResponse>;
                        allBalances(request: _73.QueryAllBalancesRequest): Promise<_73.QueryAllBalancesResponse>;
                        spendableBalances(request: _73.QuerySpendableBalancesRequest): Promise<_73.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _73.QueryTotalSupplyRequest): Promise<_73.QueryTotalSupplyResponse>;
                        supplyOf(request: _73.QuerySupplyOfRequest): Promise<_73.QuerySupplyOfResponse>;
                        params(request?: _73.QueryParamsRequest): Promise<_73.QueryParamsResponse>;
                        denomMetadata(request: _73.QueryDenomMetadataRequest): Promise<_73.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _73.QueryDenomsMetadataRequest): Promise<_73.QueryDenomsMetadataResponse>;
                        denomOwners(request: _73.QueryDenomOwnersRequest): Promise<_73.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _83.GetNodeInfoRequest): Promise<_83.GetNodeInfoResponse>;
                            getSyncing(request?: _83.GetSyncingRequest): Promise<_83.GetSyncingResponse>;
                            getLatestBlock(request?: _83.GetLatestBlockRequest): Promise<_83.GetLatestBlockResponse>;
                            getBlockByHeight(request: _83.GetBlockByHeightRequest): Promise<_83.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _83.GetLatestValidatorSetRequest): Promise<_83.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _83.GetValidatorSetByHeightRequest): Promise<_83.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _97.QueryParamsRequest): Promise<_97.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _97.QueryValidatorOutstandingRewardsRequest): Promise<_97.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _97.QueryValidatorCommissionRequest): Promise<_97.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _97.QueryValidatorSlashesRequest): Promise<_97.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _97.QueryDelegationRewardsRequest): Promise<_97.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _97.QueryDelegationTotalRewardsRequest): Promise<_97.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _97.QueryDelegatorValidatorsRequest): Promise<_97.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _97.QueryDelegatorWithdrawAddressRequest): Promise<_97.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _97.QueryCommunityPoolRequest): Promise<_97.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _101.QueryEvidenceRequest): Promise<_101.QueryEvidenceResponse>;
                        allEvidence(request?: _101.QueryAllEvidenceRequest): Promise<_101.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _105.QueryAllowanceRequest): Promise<_105.QueryAllowanceResponse>;
                        allowances(request: _105.QueryAllowancesRequest): Promise<_105.QueryAllowancesResponse>;
                        allowancesByGranter(request: _105.QueryAllowancesByGranterRequest): Promise<_105.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _110.QueryProposalRequest): Promise<_110.QueryProposalResponse>;
                        proposals(request: _110.QueryProposalsRequest): Promise<_110.QueryProposalsResponse>;
                        vote(request: _110.QueryVoteRequest): Promise<_110.QueryVoteResponse>;
                        votes(request: _110.QueryVotesRequest): Promise<_110.QueryVotesResponse>;
                        params(request: _110.QueryParamsRequest): Promise<_110.QueryParamsResponse>;
                        deposit(request: _110.QueryDepositRequest): Promise<_110.QueryDepositResponse>;
                        deposits(request: _110.QueryDepositsRequest): Promise<_110.QueryDepositsResponse>;
                        tallyResult(request: _110.QueryTallyResultRequest): Promise<_110.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _114.QueryProposalRequest): Promise<_114.QueryProposalResponse>;
                        proposals(request: _114.QueryProposalsRequest): Promise<_114.QueryProposalsResponse>;
                        vote(request: _114.QueryVoteRequest): Promise<_114.QueryVoteResponse>;
                        votes(request: _114.QueryVotesRequest): Promise<_114.QueryVotesResponse>;
                        params(request: _114.QueryParamsRequest): Promise<_114.QueryParamsResponse>;
                        deposit(request: _114.QueryDepositRequest): Promise<_114.QueryDepositResponse>;
                        deposits(request: _114.QueryDepositsRequest): Promise<_114.QueryDepositsResponse>;
                        tallyResult(request: _114.QueryTallyResultRequest): Promise<_114.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _118.QueryGroupInfoRequest): Promise<_118.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _118.QueryGroupPolicyInfoRequest): Promise<_118.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _118.QueryGroupMembersRequest): Promise<_118.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _118.QueryGroupsByAdminRequest): Promise<_118.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _118.QueryGroupPoliciesByGroupRequest): Promise<_118.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _118.QueryGroupPoliciesByAdminRequest): Promise<_118.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _118.QueryProposalRequest): Promise<_118.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _118.QueryProposalsByGroupPolicyRequest): Promise<_118.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _118.QueryVoteByProposalVoterRequest): Promise<_118.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _118.QueryVotesByProposalRequest): Promise<_118.QueryVotesByProposalResponse>;
                        votesByVoter(request: _118.QueryVotesByVoterRequest): Promise<_118.QueryVotesByVoterResponse>;
                        groupsByMember(request: _118.QueryGroupsByMemberRequest): Promise<_118.QueryGroupsByMemberResponse>;
                        tallyResult(request: _118.QueryTallyResultRequest): Promise<_118.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _123.QueryParamsRequest): Promise<_123.QueryParamsResponse>;
                        inflation(request?: _123.QueryInflationRequest): Promise<_123.QueryInflationResponse>;
                        annualProvisions(request?: _123.QueryAnnualProvisionsRequest): Promise<_123.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _128.QueryBalanceRequest): Promise<_128.QueryBalanceResponse>;
                        owner(request: _128.QueryOwnerRequest): Promise<_128.QueryOwnerResponse>;
                        supply(request: _128.QuerySupplyRequest): Promise<_128.QuerySupplyResponse>;
                        nFTs(request: _128.QueryNFTsRequest): Promise<_128.QueryNFTsResponse>;
                        nFT(request: _128.QueryNFTRequest): Promise<_128.QueryNFTResponse>;
                        class(request: _128.QueryClassRequest): Promise<_128.QueryClassResponse>;
                        classes(request?: _128.QueryClassesRequest): Promise<_128.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _133.QueryParamsRequest): Promise<_133.QueryParamsResponse>;
                        subspaces(request?: _133.QuerySubspacesRequest): Promise<_133.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _135.QueryParamsRequest): Promise<_135.QueryParamsResponse>;
                        signingInfo(request: _135.QuerySigningInfoRequest): Promise<_135.QuerySigningInfoResponse>;
                        signingInfos(request?: _135.QuerySigningInfosRequest): Promise<_135.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _140.QueryValidatorsRequest): Promise<_140.QueryValidatorsResponse>;
                        validator(request: _140.QueryValidatorRequest): Promise<_140.QueryValidatorResponse>;
                        validatorDelegations(request: _140.QueryValidatorDelegationsRequest): Promise<_140.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _140.QueryValidatorUnbondingDelegationsRequest): Promise<_140.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _140.QueryDelegationRequest): Promise<_140.QueryDelegationResponse>;
                        unbondingDelegation(request: _140.QueryUnbondingDelegationRequest): Promise<_140.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _140.QueryDelegatorDelegationsRequest): Promise<_140.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _140.QueryDelegatorUnbondingDelegationsRequest): Promise<_140.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _140.QueryRedelegationsRequest): Promise<_140.QueryRedelegationsResponse>;
                        delegatorValidators(request: _140.QueryDelegatorValidatorsRequest): Promise<_140.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _140.QueryDelegatorValidatorRequest): Promise<_140.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _140.QueryHistoricalInfoRequest): Promise<_140.QueryHistoricalInfoResponse>;
                        pool(request?: _140.QueryPoolRequest): Promise<_140.QueryPoolResponse>;
                        params(request?: _140.QueryParamsRequest): Promise<_140.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _144.SimulateRequest): Promise<_144.SimulateResponse>;
                        getTx(request: _144.GetTxRequest): Promise<_144.GetTxResponse>;
                        broadcastTx(request: _144.BroadcastTxRequest): Promise<_144.BroadcastTxResponse>;
                        getTxsEvent(request: _144.GetTxsEventRequest): Promise<_144.GetTxsEventResponse>;
                        getBlockWithTxs(request: _144.GetBlockWithTxsRequest): Promise<_144.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _146.QueryCurrentPlanRequest): Promise<_146.QueryCurrentPlanResponse>;
                        appliedPlan(request: _146.QueryAppliedPlanRequest): Promise<_146.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _146.QueryUpgradedConsensusStateRequest): Promise<_146.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _146.QueryModuleVersionsRequest): Promise<_146.QueryModuleVersionsResponse>;
                        authority(request?: _146.QueryAuthorityRequest): Promise<_146.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
