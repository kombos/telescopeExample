import { Rpc } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { Message } from "./message.v1";
import { Response } from "./response.v1";
export interface Service {
  handle(request: Message): Promise<Response>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.handle = this.handle.bind(this);
  }

  handle(request: Message): Promise<Response> {
    const data = Message.encode(request).finish();
    const promise = this.rpc.request("assetmantle.orders.transactions.modify.Service", "Handle", data);
    return promise.then(data => Response.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    handle(request: Message): Promise<Response> {
      return queryService.handle(request);
    }

  };
};