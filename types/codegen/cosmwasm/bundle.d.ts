import * as _151 from "./wasm/v1/authz";
import * as _152 from "./wasm/v1/genesis";
import * as _153 from "./wasm/v1/ibc";
import * as _154 from "./wasm/v1/proposal";
import * as _155 from "./wasm/v1/query";
import * as _156 from "./wasm/v1/tx";
import * as _157 from "./wasm/v1/types";
import * as _299 from "./wasm/v1/query.rpc.Query";
import * as _300 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _300.MsgClientImpl;
            QueryClientImpl: typeof _299.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _155.QueryContractInfoRequest): Promise<_155.QueryContractInfoResponse>;
                contractHistory(request: _155.QueryContractHistoryRequest): Promise<_155.QueryContractHistoryResponse>;
                contractsByCode(request: _155.QueryContractsByCodeRequest): Promise<_155.QueryContractsByCodeResponse>;
                allContractState(request: _155.QueryAllContractStateRequest): Promise<_155.QueryAllContractStateResponse>;
                rawContractState(request: _155.QueryRawContractStateRequest): Promise<_155.QueryRawContractStateResponse>;
                smartContractState(request: _155.QuerySmartContractStateRequest): Promise<_155.QuerySmartContractStateResponse>;
                code(request: _155.QueryCodeRequest): Promise<_155.QueryCodeResponse>;
                codes(request?: _155.QueryCodesRequest): Promise<_155.QueryCodesResponse>;
                pinnedCodes(request?: _155.QueryPinnedCodesRequest): Promise<_155.QueryPinnedCodesResponse>;
                params(request?: _155.QueryParamsRequest): Promise<_155.QueryParamsResponse>;
                contractsByCreator(request: _155.QueryContractsByCreatorRequest): Promise<_155.QueryContractsByCreatorResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _156.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _156.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _156.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _156.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _156.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _156.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _156.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _156.MsgStoreCode): {
                        typeUrl: string;
                        value: _156.MsgStoreCode;
                    };
                    instantiateContract(value: _156.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _156.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _156.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _156.MsgInstantiateContract2;
                    };
                    executeContract(value: _156.MsgExecuteContract): {
                        typeUrl: string;
                        value: _156.MsgExecuteContract;
                    };
                    migrateContract(value: _156.MsgMigrateContract): {
                        typeUrl: string;
                        value: _156.MsgMigrateContract;
                    };
                    updateAdmin(value: _156.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _156.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _156.MsgClearAdmin): {
                        typeUrl: string;
                        value: _156.MsgClearAdmin;
                    };
                };
                toJSON: {
                    storeCode(value: _156.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _156.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract2(value: _156.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _156.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _156.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _156.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _156.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _156.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _156.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _156.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _156.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _156.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _156.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _156.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _156.MsgStoreCode): {
                        typeUrl: string;
                        value: _156.MsgStoreCode;
                    };
                    instantiateContract(value: _156.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _156.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _156.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _156.MsgInstantiateContract2;
                    };
                    executeContract(value: _156.MsgExecuteContract): {
                        typeUrl: string;
                        value: _156.MsgExecuteContract;
                    };
                    migrateContract(value: _156.MsgMigrateContract): {
                        typeUrl: string;
                        value: _156.MsgMigrateContract;
                    };
                    updateAdmin(value: _156.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _156.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _156.MsgClearAdmin): {
                        typeUrl: string;
                        value: _156.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _156.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                    }) => _156.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _156.MsgInstantiateContract) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _156.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds, salt, fixMsg }: _156.MsgInstantiateContract2) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        salt: Uint8Array;
                        fix_msg: boolean;
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds, salt, fix_msg }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        salt: Uint8Array;
                        fix_msg: boolean;
                    }) => _156.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _156.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _156.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _156.MsgMigrateContract) => {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, code_id, msg }: {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    }) => _156.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _156.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _156.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _156.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _156.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _157.AccessType;
            accessTypeToJSON(object: _157.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _157.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _157.ContractCodeHistoryOperationType): string;
            AccessType: typeof _157.AccessType;
            AccessTypeSDKType: typeof _157.AccessTypeSDKType;
            ContractCodeHistoryOperationType: typeof _157.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _157.ContractCodeHistoryOperationTypeSDKType;
            AccessTypeParam: {
                encode(message: _157.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccessTypeParam;
                fromJSON(object: any): _157.AccessTypeParam;
                toJSON(message: _157.AccessTypeParam): unknown;
                fromPartial(object: Partial<_157.AccessTypeParam>): _157.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _157.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AccessConfig;
                fromJSON(object: any): _157.AccessConfig;
                toJSON(message: _157.AccessConfig): unknown;
                fromPartial(object: Partial<_157.AccessConfig>): _157.AccessConfig;
            };
            Params: {
                encode(message: _157.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Params;
                fromJSON(object: any): _157.Params;
                toJSON(message: _157.Params): unknown;
                fromPartial(object: Partial<_157.Params>): _157.Params;
            };
            CodeInfo: {
                encode(message: _157.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.CodeInfo;
                fromJSON(object: any): _157.CodeInfo;
                toJSON(message: _157.CodeInfo): unknown;
                fromPartial(object: Partial<_157.CodeInfo>): _157.CodeInfo;
            };
            ContractInfo: {
                encode(message: _157.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ContractInfo;
                fromJSON(object: any): _157.ContractInfo;
                toJSON(message: _157.ContractInfo): unknown;
                fromPartial(object: Partial<_157.ContractInfo>): _157.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _157.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ContractCodeHistoryEntry;
                fromJSON(object: any): _157.ContractCodeHistoryEntry;
                toJSON(message: _157.ContractCodeHistoryEntry): unknown;
                fromPartial(object: Partial<_157.ContractCodeHistoryEntry>): _157.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _157.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.AbsoluteTxPosition;
                fromJSON(object: any): _157.AbsoluteTxPosition;
                toJSON(message: _157.AbsoluteTxPosition): unknown;
                fromPartial(object: Partial<_157.AbsoluteTxPosition>): _157.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _157.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Model;
                fromJSON(object: any): _157.Model;
                toJSON(message: _157.Model): unknown;
                fromPartial(object: Partial<_157.Model>): _157.Model;
            };
            MsgStoreCode: {
                encode(message: _156.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgStoreCode;
                fromJSON(object: any): _156.MsgStoreCode;
                toJSON(message: _156.MsgStoreCode): unknown;
                fromPartial(object: Partial<_156.MsgStoreCode>): _156.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _156.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgStoreCodeResponse;
                fromJSON(object: any): _156.MsgStoreCodeResponse;
                toJSON(message: _156.MsgStoreCodeResponse): unknown;
                fromPartial(object: Partial<_156.MsgStoreCodeResponse>): _156.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _156.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgInstantiateContract;
                fromJSON(object: any): _156.MsgInstantiateContract;
                toJSON(message: _156.MsgInstantiateContract): unknown;
                fromPartial(object: Partial<_156.MsgInstantiateContract>): _156.MsgInstantiateContract;
            };
            MsgInstantiateContract2: {
                encode(message: _156.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgInstantiateContract2;
                fromJSON(object: any): _156.MsgInstantiateContract2;
                toJSON(message: _156.MsgInstantiateContract2): unknown;
                fromPartial(object: Partial<_156.MsgInstantiateContract2>): _156.MsgInstantiateContract2;
            };
            MsgInstantiateContractResponse: {
                encode(message: _156.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgInstantiateContractResponse;
                fromJSON(object: any): _156.MsgInstantiateContractResponse;
                toJSON(message: _156.MsgInstantiateContractResponse): unknown;
                fromPartial(object: Partial<_156.MsgInstantiateContractResponse>): _156.MsgInstantiateContractResponse;
            };
            MsgInstantiateContract2Response: {
                encode(message: _156.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgInstantiateContract2Response;
                fromJSON(object: any): _156.MsgInstantiateContract2Response;
                toJSON(message: _156.MsgInstantiateContract2Response): unknown;
                fromPartial(object: Partial<_156.MsgInstantiateContract2Response>): _156.MsgInstantiateContract2Response;
            };
            MsgExecuteContract: {
                encode(message: _156.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgExecuteContract;
                fromJSON(object: any): _156.MsgExecuteContract;
                toJSON(message: _156.MsgExecuteContract): unknown;
                fromPartial(object: Partial<_156.MsgExecuteContract>): _156.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _156.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgExecuteContractResponse;
                fromJSON(object: any): _156.MsgExecuteContractResponse;
                toJSON(message: _156.MsgExecuteContractResponse): unknown;
                fromPartial(object: Partial<_156.MsgExecuteContractResponse>): _156.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _156.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgMigrateContract;
                fromJSON(object: any): _156.MsgMigrateContract;
                toJSON(message: _156.MsgMigrateContract): unknown;
                fromPartial(object: Partial<_156.MsgMigrateContract>): _156.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _156.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgMigrateContractResponse;
                fromJSON(object: any): _156.MsgMigrateContractResponse;
                toJSON(message: _156.MsgMigrateContractResponse): unknown;
                fromPartial(object: Partial<_156.MsgMigrateContractResponse>): _156.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _156.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgUpdateAdmin;
                fromJSON(object: any): _156.MsgUpdateAdmin;
                toJSON(message: _156.MsgUpdateAdmin): unknown;
                fromPartial(object: Partial<_156.MsgUpdateAdmin>): _156.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _156.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgUpdateAdminResponse;
                fromJSON(_: any): _156.MsgUpdateAdminResponse;
                toJSON(_: _156.MsgUpdateAdminResponse): unknown;
                fromPartial(_: Partial<_156.MsgUpdateAdminResponse>): _156.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _156.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgClearAdmin;
                fromJSON(object: any): _156.MsgClearAdmin;
                toJSON(message: _156.MsgClearAdmin): unknown;
                fromPartial(object: Partial<_156.MsgClearAdmin>): _156.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _156.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.MsgClearAdminResponse;
                fromJSON(_: any): _156.MsgClearAdminResponse;
                toJSON(_: _156.MsgClearAdminResponse): unknown;
                fromPartial(_: Partial<_156.MsgClearAdminResponse>): _156.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _155.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryContractInfoRequest;
                fromJSON(object: any): _155.QueryContractInfoRequest;
                toJSON(message: _155.QueryContractInfoRequest): unknown;
                fromPartial(object: Partial<_155.QueryContractInfoRequest>): _155.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _155.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryContractInfoResponse;
                fromJSON(object: any): _155.QueryContractInfoResponse;
                toJSON(message: _155.QueryContractInfoResponse): unknown;
                fromPartial(object: Partial<_155.QueryContractInfoResponse>): _155.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _155.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryContractHistoryRequest;
                fromJSON(object: any): _155.QueryContractHistoryRequest;
                toJSON(message: _155.QueryContractHistoryRequest): unknown;
                fromPartial(object: Partial<_155.QueryContractHistoryRequest>): _155.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _155.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryContractHistoryResponse;
                fromJSON(object: any): _155.QueryContractHistoryResponse;
                toJSON(message: _155.QueryContractHistoryResponse): unknown;
                fromPartial(object: Partial<_155.QueryContractHistoryResponse>): _155.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _155.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryContractsByCodeRequest;
                fromJSON(object: any): _155.QueryContractsByCodeRequest;
                toJSON(message: _155.QueryContractsByCodeRequest): unknown;
                fromPartial(object: Partial<_155.QueryContractsByCodeRequest>): _155.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _155.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryContractsByCodeResponse;
                fromJSON(object: any): _155.QueryContractsByCodeResponse;
                toJSON(message: _155.QueryContractsByCodeResponse): unknown;
                fromPartial(object: Partial<_155.QueryContractsByCodeResponse>): _155.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _155.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryAllContractStateRequest;
                fromJSON(object: any): _155.QueryAllContractStateRequest;
                toJSON(message: _155.QueryAllContractStateRequest): unknown;
                fromPartial(object: Partial<_155.QueryAllContractStateRequest>): _155.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _155.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryAllContractStateResponse;
                fromJSON(object: any): _155.QueryAllContractStateResponse;
                toJSON(message: _155.QueryAllContractStateResponse): unknown;
                fromPartial(object: Partial<_155.QueryAllContractStateResponse>): _155.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _155.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryRawContractStateRequest;
                fromJSON(object: any): _155.QueryRawContractStateRequest;
                toJSON(message: _155.QueryRawContractStateRequest): unknown;
                fromPartial(object: Partial<_155.QueryRawContractStateRequest>): _155.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _155.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryRawContractStateResponse;
                fromJSON(object: any): _155.QueryRawContractStateResponse;
                toJSON(message: _155.QueryRawContractStateResponse): unknown;
                fromPartial(object: Partial<_155.QueryRawContractStateResponse>): _155.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _155.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QuerySmartContractStateRequest;
                fromJSON(object: any): _155.QuerySmartContractStateRequest;
                toJSON(message: _155.QuerySmartContractStateRequest): unknown;
                fromPartial(object: Partial<_155.QuerySmartContractStateRequest>): _155.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _155.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QuerySmartContractStateResponse;
                fromJSON(object: any): _155.QuerySmartContractStateResponse;
                toJSON(message: _155.QuerySmartContractStateResponse): unknown;
                fromPartial(object: Partial<_155.QuerySmartContractStateResponse>): _155.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _155.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryCodeRequest;
                fromJSON(object: any): _155.QueryCodeRequest;
                toJSON(message: _155.QueryCodeRequest): unknown;
                fromPartial(object: Partial<_155.QueryCodeRequest>): _155.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _155.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.CodeInfoResponse;
                fromJSON(object: any): _155.CodeInfoResponse;
                toJSON(message: _155.CodeInfoResponse): unknown;
                fromPartial(object: Partial<_155.CodeInfoResponse>): _155.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _155.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryCodeResponse;
                fromJSON(object: any): _155.QueryCodeResponse;
                toJSON(message: _155.QueryCodeResponse): unknown;
                fromPartial(object: Partial<_155.QueryCodeResponse>): _155.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _155.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryCodesRequest;
                fromJSON(object: any): _155.QueryCodesRequest;
                toJSON(message: _155.QueryCodesRequest): unknown;
                fromPartial(object: Partial<_155.QueryCodesRequest>): _155.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _155.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryCodesResponse;
                fromJSON(object: any): _155.QueryCodesResponse;
                toJSON(message: _155.QueryCodesResponse): unknown;
                fromPartial(object: Partial<_155.QueryCodesResponse>): _155.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _155.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryPinnedCodesRequest;
                fromJSON(object: any): _155.QueryPinnedCodesRequest;
                toJSON(message: _155.QueryPinnedCodesRequest): unknown;
                fromPartial(object: Partial<_155.QueryPinnedCodesRequest>): _155.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _155.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryPinnedCodesResponse;
                fromJSON(object: any): _155.QueryPinnedCodesResponse;
                toJSON(message: _155.QueryPinnedCodesResponse): unknown;
                fromPartial(object: Partial<_155.QueryPinnedCodesResponse>): _155.QueryPinnedCodesResponse;
            };
            QueryParamsRequest: {
                encode(_: _155.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryParamsRequest;
                fromJSON(_: any): _155.QueryParamsRequest;
                toJSON(_: _155.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_155.QueryParamsRequest>): _155.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _155.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryParamsResponse;
                fromJSON(object: any): _155.QueryParamsResponse;
                toJSON(message: _155.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_155.QueryParamsResponse>): _155.QueryParamsResponse;
            };
            QueryContractsByCreatorRequest: {
                encode(message: _155.QueryContractsByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryContractsByCreatorRequest;
                fromJSON(object: any): _155.QueryContractsByCreatorRequest;
                toJSON(message: _155.QueryContractsByCreatorRequest): unknown;
                fromPartial(object: Partial<_155.QueryContractsByCreatorRequest>): _155.QueryContractsByCreatorRequest;
            };
            QueryContractsByCreatorResponse: {
                encode(message: _155.QueryContractsByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryContractsByCreatorResponse;
                fromJSON(object: any): _155.QueryContractsByCreatorResponse;
                toJSON(message: _155.QueryContractsByCreatorResponse): unknown;
                fromPartial(object: Partial<_155.QueryContractsByCreatorResponse>): _155.QueryContractsByCreatorResponse;
            };
            StoreCodeProposal: {
                encode(message: _154.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.StoreCodeProposal;
                fromJSON(object: any): _154.StoreCodeProposal;
                toJSON(message: _154.StoreCodeProposal): unknown;
                fromPartial(object: Partial<_154.StoreCodeProposal>): _154.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _154.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.InstantiateContractProposal;
                fromJSON(object: any): _154.InstantiateContractProposal;
                toJSON(message: _154.InstantiateContractProposal): unknown;
                fromPartial(object: Partial<_154.InstantiateContractProposal>): _154.InstantiateContractProposal;
            };
            InstantiateContract2Proposal: {
                encode(message: _154.InstantiateContract2Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.InstantiateContract2Proposal;
                fromJSON(object: any): _154.InstantiateContract2Proposal;
                toJSON(message: _154.InstantiateContract2Proposal): unknown;
                fromPartial(object: Partial<_154.InstantiateContract2Proposal>): _154.InstantiateContract2Proposal;
            };
            MigrateContractProposal: {
                encode(message: _154.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MigrateContractProposal;
                fromJSON(object: any): _154.MigrateContractProposal;
                toJSON(message: _154.MigrateContractProposal): unknown;
                fromPartial(object: Partial<_154.MigrateContractProposal>): _154.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _154.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.SudoContractProposal;
                fromJSON(object: any): _154.SudoContractProposal;
                toJSON(message: _154.SudoContractProposal): unknown;
                fromPartial(object: Partial<_154.SudoContractProposal>): _154.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _154.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.ExecuteContractProposal;
                fromJSON(object: any): _154.ExecuteContractProposal;
                toJSON(message: _154.ExecuteContractProposal): unknown;
                fromPartial(object: Partial<_154.ExecuteContractProposal>): _154.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _154.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.UpdateAdminProposal;
                fromJSON(object: any): _154.UpdateAdminProposal;
                toJSON(message: _154.UpdateAdminProposal): unknown;
                fromPartial(object: Partial<_154.UpdateAdminProposal>): _154.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _154.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.ClearAdminProposal;
                fromJSON(object: any): _154.ClearAdminProposal;
                toJSON(message: _154.ClearAdminProposal): unknown;
                fromPartial(object: Partial<_154.ClearAdminProposal>): _154.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _154.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.PinCodesProposal;
                fromJSON(object: any): _154.PinCodesProposal;
                toJSON(message: _154.PinCodesProposal): unknown;
                fromPartial(object: Partial<_154.PinCodesProposal>): _154.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _154.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.UnpinCodesProposal;
                fromJSON(object: any): _154.UnpinCodesProposal;
                toJSON(message: _154.UnpinCodesProposal): unknown;
                fromPartial(object: Partial<_154.UnpinCodesProposal>): _154.UnpinCodesProposal;
            };
            AccessConfigUpdate: {
                encode(message: _154.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.AccessConfigUpdate;
                fromJSON(object: any): _154.AccessConfigUpdate;
                toJSON(message: _154.AccessConfigUpdate): unknown;
                fromPartial(object: Partial<_154.AccessConfigUpdate>): _154.AccessConfigUpdate;
            };
            UpdateInstantiateConfigProposal: {
                encode(message: _154.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.UpdateInstantiateConfigProposal;
                fromJSON(object: any): _154.UpdateInstantiateConfigProposal;
                toJSON(message: _154.UpdateInstantiateConfigProposal): unknown;
                fromPartial(object: Partial<_154.UpdateInstantiateConfigProposal>): _154.UpdateInstantiateConfigProposal;
            };
            StoreAndInstantiateContractProposal: {
                encode(message: _154.StoreAndInstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.StoreAndInstantiateContractProposal;
                fromJSON(object: any): _154.StoreAndInstantiateContractProposal;
                toJSON(message: _154.StoreAndInstantiateContractProposal): unknown;
                fromPartial(object: Partial<_154.StoreAndInstantiateContractProposal>): _154.StoreAndInstantiateContractProposal;
            };
            MsgIBCSend: {
                encode(message: _153.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgIBCSend;
                fromJSON(object: any): _153.MsgIBCSend;
                toJSON(message: _153.MsgIBCSend): unknown;
                fromPartial(object: Partial<_153.MsgIBCSend>): _153.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _153.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgIBCCloseChannel;
                fromJSON(object: any): _153.MsgIBCCloseChannel;
                toJSON(message: _153.MsgIBCCloseChannel): unknown;
                fromPartial(object: Partial<_153.MsgIBCCloseChannel>): _153.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _152.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GenesisState;
                fromJSON(object: any): _152.GenesisState;
                toJSON(message: _152.GenesisState): unknown;
                fromPartial(object: Partial<_152.GenesisState>): _152.GenesisState;
            };
            Code: {
                encode(message: _152.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Code;
                fromJSON(object: any): _152.Code;
                toJSON(message: _152.Code): unknown;
                fromPartial(object: Partial<_152.Code>): _152.Code;
            };
            Contract: {
                encode(message: _152.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Contract;
                fromJSON(object: any): _152.Contract;
                toJSON(message: _152.Contract): unknown;
                fromPartial(object: Partial<_152.Contract>): _152.Contract;
            };
            Sequence: {
                encode(message: _152.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Sequence;
                fromJSON(object: any): _152.Sequence;
                toJSON(message: _152.Sequence): unknown;
                fromPartial(object: Partial<_152.Sequence>): _152.Sequence;
            };
            ContractExecutionAuthorization: {
                encode(message: _151.ContractExecutionAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ContractExecutionAuthorization;
                fromJSON(object: any): _151.ContractExecutionAuthorization;
                toJSON(message: _151.ContractExecutionAuthorization): unknown;
                fromPartial(object: Partial<_151.ContractExecutionAuthorization>): _151.ContractExecutionAuthorization;
            };
            ContractMigrationAuthorization: {
                encode(message: _151.ContractMigrationAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ContractMigrationAuthorization;
                fromJSON(object: any): _151.ContractMigrationAuthorization;
                toJSON(message: _151.ContractMigrationAuthorization): unknown;
                fromPartial(object: Partial<_151.ContractMigrationAuthorization>): _151.ContractMigrationAuthorization;
            };
            ContractGrant: {
                encode(message: _151.ContractGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ContractGrant;
                fromJSON(object: any): _151.ContractGrant;
                toJSON(message: _151.ContractGrant): unknown;
                fromPartial(object: Partial<_151.ContractGrant>): _151.ContractGrant;
            };
            MaxCallsLimit: {
                encode(message: _151.MaxCallsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MaxCallsLimit;
                fromJSON(object: any): _151.MaxCallsLimit;
                toJSON(message: _151.MaxCallsLimit): unknown;
                fromPartial(object: Partial<_151.MaxCallsLimit>): _151.MaxCallsLimit;
            };
            MaxFundsLimit: {
                encode(message: _151.MaxFundsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.MaxFundsLimit;
                fromJSON(object: any): _151.MaxFundsLimit;
                toJSON(message: _151.MaxFundsLimit): unknown;
                fromPartial(object: Partial<_151.MaxFundsLimit>): _151.MaxFundsLimit;
            };
            CombinedLimit: {
                encode(message: _151.CombinedLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.CombinedLimit;
                fromJSON(object: any): _151.CombinedLimit;
                toJSON(message: _151.CombinedLimit): unknown;
                fromPartial(object: Partial<_151.CombinedLimit>): _151.CombinedLimit;
            };
            AllowAllMessagesFilter: {
                encode(_: _151.AllowAllMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AllowAllMessagesFilter;
                fromJSON(_: any): _151.AllowAllMessagesFilter;
                toJSON(_: _151.AllowAllMessagesFilter): unknown;
                fromPartial(_: Partial<_151.AllowAllMessagesFilter>): _151.AllowAllMessagesFilter;
            };
            AcceptedMessageKeysFilter: {
                encode(message: _151.AcceptedMessageKeysFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AcceptedMessageKeysFilter;
                fromJSON(object: any): _151.AcceptedMessageKeysFilter;
                toJSON(message: _151.AcceptedMessageKeysFilter): unknown;
                fromPartial(object: Partial<_151.AcceptedMessageKeysFilter>): _151.AcceptedMessageKeysFilter;
            };
            AcceptedMessagesFilter: {
                encode(message: _151.AcceptedMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AcceptedMessagesFilter;
                fromJSON(object: any): _151.AcceptedMessagesFilter;
                toJSON(message: _151.AcceptedMessagesFilter): unknown;
                fromPartial(object: Partial<_151.AcceptedMessagesFilter>): _151.AcceptedMessagesFilter;
            };
        };
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
            cosmwasm: {
                wasm: {
                    v1: _300.MsgClientImpl;
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
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _155.QueryContractInfoRequest): Promise<_155.QueryContractInfoResponse>;
                        contractHistory(request: _155.QueryContractHistoryRequest): Promise<_155.QueryContractHistoryResponse>;
                        contractsByCode(request: _155.QueryContractsByCodeRequest): Promise<_155.QueryContractsByCodeResponse>;
                        allContractState(request: _155.QueryAllContractStateRequest): Promise<_155.QueryAllContractStateResponse>;
                        rawContractState(request: _155.QueryRawContractStateRequest): Promise<_155.QueryRawContractStateResponse>;
                        smartContractState(request: _155.QuerySmartContractStateRequest): Promise<_155.QuerySmartContractStateResponse>;
                        code(request: _155.QueryCodeRequest): Promise<_155.QueryCodeResponse>;
                        codes(request?: _155.QueryCodesRequest): Promise<_155.QueryCodesResponse>;
                        pinnedCodes(request?: _155.QueryPinnedCodesRequest): Promise<_155.QueryPinnedCodesResponse>;
                        params(request?: _155.QueryParamsRequest): Promise<_155.QueryParamsResponse>;
                        contractsByCreator(request: _155.QueryContractsByCreatorRequest): Promise<_155.QueryContractsByCreatorResponse>;
                    };
                };
            };
        }>;
    };
}
