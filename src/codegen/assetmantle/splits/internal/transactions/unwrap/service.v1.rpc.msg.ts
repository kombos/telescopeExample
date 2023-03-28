import { Rpc } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Message } from "./message.v1";
import { Response } from "./response.v1";
export interface Msg {
  handle(request: Message): Promise<Response>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.handle = this.handle.bind(this);
  }

  handle(request: Message): Promise<Response> {
    const data = Message.encode(request).finish();
    const promise = this.rpc.request("assetmantle.splits.v1beta1.transactions.unwrap.Msg", "Handle", data);
    return promise.then(data => Response.decode(new _m0.Reader(data)));
  }

}