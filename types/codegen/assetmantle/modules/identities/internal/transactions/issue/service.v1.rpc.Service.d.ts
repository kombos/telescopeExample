import { Rpc } from "../../../../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { Message } from "./message.v1";
import { Response } from "./response.v1";
export interface Service {
    handle(request: Message): Promise<Response>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    handle(request: Message): Promise<Response>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    handle(request: Message): Promise<Response>;
};
