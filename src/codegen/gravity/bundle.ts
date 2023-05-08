import * as _102 from "./v1/attestation";
import * as _103 from "./v1/batch";
import * as _104 from "./v1/ethereum_signer";
import * as _105 from "./v1/genesis";
import * as _106 from "./v1/msgs";
import * as _107 from "./v1/pool";
import * as _108 from "./v1/query";
import * as _109 from "./v1/types";
import * as _245 from "./v1/msgs.amino";
import * as _246 from "./v1/msgs.registry";
import * as _247 from "./v1/query.rpc.Query";
import * as _248 from "./v1/msgs.rpc.msg";
import * as _297 from "./rpc.query";
import * as _298 from "./rpc.tx";
export namespace gravity {
  export const v1 = {
    ..._102,
    ..._103,
    ..._104,
    ..._105,
    ..._106,
    ..._107,
    ..._108,
    ..._109,
    ..._245,
    ..._246,
    ..._247,
    ..._248
  };
  export const ClientFactory = {
    ..._297,
    ..._298
  };
}