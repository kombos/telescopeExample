import * as _163 from "./applications/transfer/v1/genesis";
import * as _164 from "./applications/transfer/v1/query";
import * as _165 from "./applications/transfer/v1/transfer";
import * as _166 from "./applications/transfer/v1/tx";
import * as _167 from "./applications/transfer/v2/packet";
import * as _168 from "./core/channel/v1/channel";
import * as _169 from "./core/channel/v1/genesis";
import * as _170 from "./core/channel/v1/query";
import * as _171 from "./core/channel/v1/tx";
import * as _172 from "./core/client/v1/client";
import * as _173 from "./core/client/v1/genesis";
import * as _174 from "./core/client/v1/query";
import * as _175 from "./core/client/v1/tx";
import * as _176 from "./core/commitment/v1/commitment";
import * as _177 from "./core/connection/v1/connection";
import * as _178 from "./core/connection/v1/genesis";
import * as _179 from "./core/connection/v1/query";
import * as _180 from "./core/connection/v1/tx";
import * as _181 from "./core/port/v1/query";
import * as _182 from "./core/types/v1/genesis";
import * as _183 from "./lightclients/localhost/v1/localhost";
import * as _184 from "./lightclients/solomachine/v1/solomachine";
import * as _185 from "./lightclients/solomachine/v2/solomachine";
import * as _186 from "./lightclients/tendermint/v1/tendermint";
import * as _298 from "./applications/transfer/v1/tx.amino";
import * as _299 from "./core/channel/v1/tx.amino";
import * as _300 from "./core/client/v1/tx.amino";
import * as _301 from "./core/connection/v1/tx.amino";
import * as _302 from "./applications/transfer/v1/tx.registry";
import * as _303 from "./core/channel/v1/tx.registry";
import * as _304 from "./core/client/v1/tx.registry";
import * as _305 from "./core/connection/v1/tx.registry";
import * as _306 from "./applications/transfer/v1/query.rpc.Query";
import * as _307 from "./core/channel/v1/query.rpc.Query";
import * as _308 from "./core/client/v1/query.rpc.Query";
import * as _309 from "./core/connection/v1/query.rpc.Query";
import * as _310 from "./core/port/v1/query.rpc.Query";
import * as _311 from "./applications/transfer/v1/tx.rpc.msg";
import * as _312 from "./core/channel/v1/tx.rpc.msg";
import * as _313 from "./core/client/v1/tx.rpc.msg";
import * as _314 from "./core/connection/v1/tx.rpc.msg";
import * as _326 from "./rpc.query";
import * as _327 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._163,
        ..._164,
        ..._165,
        ..._166,
        ..._298,
        ..._302,
        ..._306,
        ..._311
      };
      export const v2 = { ..._167
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._168,
        ..._169,
        ..._170,
        ..._171,
        ..._299,
        ..._303,
        ..._307,
        ..._312
      };
    }
    export namespace client {
      export const v1 = { ..._172,
        ..._173,
        ..._174,
        ..._175,
        ..._300,
        ..._304,
        ..._308,
        ..._313
      };
    }
    export namespace commitment {
      export const v1 = { ..._176
      };
    }
    export namespace connection {
      export const v1 = { ..._177,
        ..._178,
        ..._179,
        ..._180,
        ..._301,
        ..._305,
        ..._309,
        ..._314
      };
    }
    export namespace port {
      export const v1 = { ..._181,
        ..._310
      };
    }
    export namespace types {
      export const v1 = { ..._182
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._183
      };
    }
    export namespace solomachine {
      export const v1 = { ..._184
      };
      export const v2 = { ..._185
      };
    }
    export namespace tendermint {
      export const v1 = { ..._186
      };
    }
  }
  export const ClientFactory = { ..._326,
    ..._327
  };
}