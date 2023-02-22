import * as _166 from "./applications/transfer/v1/genesis";
import * as _167 from "./applications/transfer/v1/query";
import * as _168 from "./applications/transfer/v1/transfer";
import * as _169 from "./applications/transfer/v1/tx";
import * as _170 from "./applications/transfer/v2/packet";
import * as _171 from "./core/channel/v1/channel";
import * as _172 from "./core/channel/v1/genesis";
import * as _173 from "./core/channel/v1/query";
import * as _174 from "./core/channel/v1/tx";
import * as _175 from "./core/client/v1/client";
import * as _176 from "./core/client/v1/genesis";
import * as _177 from "./core/client/v1/query";
import * as _178 from "./core/client/v1/tx";
import * as _179 from "./core/commitment/v1/commitment";
import * as _180 from "./core/connection/v1/connection";
import * as _181 from "./core/connection/v1/genesis";
import * as _182 from "./core/connection/v1/query";
import * as _183 from "./core/connection/v1/tx";
import * as _184 from "./core/port/v1/query";
import * as _185 from "./core/types/v1/genesis";
import * as _186 from "./lightclients/localhost/v1/localhost";
import * as _187 from "./lightclients/solomachine/v1/solomachine";
import * as _188 from "./lightclients/solomachine/v2/solomachine";
import * as _189 from "./lightclients/tendermint/v1/tendermint";
import * as _301 from "./applications/transfer/v1/tx.amino";
import * as _302 from "./core/channel/v1/tx.amino";
import * as _303 from "./core/client/v1/tx.amino";
import * as _304 from "./core/connection/v1/tx.amino";
import * as _305 from "./applications/transfer/v1/tx.registry";
import * as _306 from "./core/channel/v1/tx.registry";
import * as _307 from "./core/client/v1/tx.registry";
import * as _308 from "./core/connection/v1/tx.registry";
import * as _309 from "./applications/transfer/v1/query.rpc.Query";
import * as _310 from "./core/channel/v1/query.rpc.Query";
import * as _311 from "./core/client/v1/query.rpc.Query";
import * as _312 from "./core/connection/v1/query.rpc.Query";
import * as _313 from "./core/port/v1/query.rpc.Query";
import * as _314 from "./applications/transfer/v1/tx.rpc.msg";
import * as _315 from "./core/channel/v1/tx.rpc.msg";
import * as _316 from "./core/client/v1/tx.rpc.msg";
import * as _317 from "./core/connection/v1/tx.rpc.msg";
import * as _329 from "./rpc.query";
import * as _330 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = { ..._166,
        ..._167,
        ..._168,
        ..._169,
        ..._301,
        ..._305,
        ..._309,
        ..._314
      };
      export const v2 = { ..._170
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._171,
        ..._172,
        ..._173,
        ..._174,
        ..._302,
        ..._306,
        ..._310,
        ..._315
      };
    }
    export namespace client {
      export const v1 = { ..._175,
        ..._176,
        ..._177,
        ..._178,
        ..._303,
        ..._307,
        ..._311,
        ..._316
      };
    }
    export namespace commitment {
      export const v1 = { ..._179
      };
    }
    export namespace connection {
      export const v1 = { ..._180,
        ..._181,
        ..._182,
        ..._183,
        ..._304,
        ..._308,
        ..._312,
        ..._317
      };
    }
    export namespace port {
      export const v1 = { ..._184,
        ..._313
      };
    }
    export namespace types {
      export const v1 = { ..._185
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._186
      };
    }
    export namespace solomachine {
      export const v1 = { ..._187
      };
      export const v2 = { ..._188
      };
    }
    export namespace tendermint {
      export const v1 = { ..._189
      };
    }
  }
  export const ClientFactory = { ..._329,
    ..._330
  };
}