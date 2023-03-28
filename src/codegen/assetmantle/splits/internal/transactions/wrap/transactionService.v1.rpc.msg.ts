import { Rpc } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Message } from "./message.v1";
import { TransactionResponse } from "./transactionResponse.v1";
export interface Msg {
  wrap(request: Message): Promise<TransactionResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.wrap = this.wrap.bind(this);
  }

  wrap(request: Message): Promise<TransactionResponse> {
    const data = Message.encode(request).finish();
    const promise = this.rpc.request("assetmantle.splits.v1beta1.transactions.wrap.Msg", "Wrap", data);
    return promise.then(data => TransactionResponse.decode(new _m0.Reader(data)));
  }

}