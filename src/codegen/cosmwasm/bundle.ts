import * as _151 from "./wasm/v1/authz";
import * as _152 from "./wasm/v1/genesis";
import * as _153 from "./wasm/v1/ibc";
import * as _154 from "./wasm/v1/proposal";
import * as _155 from "./wasm/v1/query";
import * as _156 from "./wasm/v1/tx";
import * as _157 from "./wasm/v1/types";
import * as _297 from "./wasm/v1/tx.amino";
import * as _298 from "./wasm/v1/tx.registry";
import * as _299 from "./wasm/v1/query.rpc.Query";
import * as _300 from "./wasm/v1/tx.rpc.msg";
import * as _327 from "./rpc.query";
import * as _328 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._297,
      ..._298,
      ..._299,
      ..._300
    };
  }
  export const ClientFactory = { ..._327,
    ..._328
  };
}