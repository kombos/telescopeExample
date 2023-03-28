import * as _148 from "./wasm/v1/authz";
import * as _149 from "./wasm/v1/genesis";
import * as _150 from "./wasm/v1/ibc";
import * as _151 from "./wasm/v1/proposal";
import * as _152 from "./wasm/v1/query";
import * as _153 from "./wasm/v1/tx";
import * as _154 from "./wasm/v1/types";
import * as _309 from "./wasm/v1/tx.amino";
import * as _310 from "./wasm/v1/tx.registry";
import * as _311 from "./wasm/v1/query.rpc.Query";
import * as _312 from "./wasm/v1/tx.rpc.msg";
import * as _334 from "./rpc.query";
import * as _335 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._309,
      ..._310,
      ..._311,
      ..._312
    };
  }
  export const ClientFactory = { ..._334,
    ..._335
  };
}