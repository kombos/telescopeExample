import { Rpc } from "../../../../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryRequest } from "./queryRequest.v1";
import { QueryResponse } from "./queryResponse.v1";
export interface Service {
    handle(request: QueryRequest): Promise<QueryResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    handle(request: QueryRequest): Promise<QueryResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    handle(request: QueryRequest): Promise<QueryResponse>;
};
