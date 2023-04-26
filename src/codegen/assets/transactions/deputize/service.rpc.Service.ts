import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { Message } from "./message";
import { TransactionResponse } from "./transaction_response";
export interface Service {
  handle(request: Message): Promise<TransactionResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.handle = this.handle.bind(this);
  }
  handle(request: Message): Promise<TransactionResponse> {
    const data = Message.encode(request).finish();
    const promise = this.rpc.request("assetmantle.modules.assets.transactions.deputize.Service", "Handle", data);
    return promise.then(data => TransactionResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    handle(request: Message): Promise<TransactionResponse> {
      return queryService.handle(request);
    }
  };
};