import * as _148 from "./wasm/v1/authz";
import * as _149 from "./wasm/v1/genesis";
import * as _150 from "./wasm/v1/ibc";
import * as _151 from "./wasm/v1/proposal";
import * as _152 from "./wasm/v1/query";
import * as _153 from "./wasm/v1/tx";
import * as _154 from "./wasm/v1/types";
import * as _294 from "./wasm/v1/tx.amino";
import * as _295 from "./wasm/v1/tx.registry";
import * as _296 from "./wasm/v1/query.rpc.Query";
import * as _297 from "./wasm/v1/tx.rpc.msg";
import * as _318 from "./rpc.query";
import * as _319 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._153,
      ..._154,
      ..._294,
      ..._295,
      ..._296,
      ..._297
    };
  }
  export const ClientFactory = { ..._318,
    ..._319
  };
}