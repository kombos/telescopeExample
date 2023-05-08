import * as _110 from "./downtime-detector/v1beta1/downtime_duration";
import * as _111 from "./downtime-detector/v1beta1/genesis";
import * as _112 from "./downtime-detector/v1beta1/query";
import * as _113 from "./epochs/genesis";
import * as _114 from "./epochs/query";
import * as _115 from "./gamm/pool-models/balancer/balancerPool";
import * as _116 from "./gamm/v1beta1/genesis";
import * as _117 from "./gamm/v1beta1/query";
import * as _118 from "./gamm/v1beta1/tx";
import * as _119 from "./gamm/pool-models/balancer/tx/tx";
import * as _120 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _121 from "./gamm/pool-models/stableswap/tx";
import * as _122 from "./gamm/v2/query";
import * as _123 from "./ibc-rate-limit/v1beta1/params";
import * as _124 from "./ibc-rate-limit/v1beta1/query";
import * as _125 from "./incentives/gauge";
import * as _126 from "./incentives/genesis";
import * as _127 from "./incentives/params";
import * as _128 from "./incentives/query";
import * as _129 from "./incentives/tx";
import * as _130 from "./lockup/genesis";
import * as _131 from "./lockup/lock";
import * as _132 from "./lockup/params";
import * as _133 from "./lockup/query";
import * as _134 from "./lockup/tx";
import * as _135 from "./mint/v1beta1/genesis";
import * as _136 from "./mint/v1beta1/mint";
import * as _137 from "./mint/v1beta1/query";
import * as _138 from "./pool-incentives/v1beta1/genesis";
import * as _139 from "./pool-incentives/v1beta1/gov";
import * as _140 from "./pool-incentives/v1beta1/incentives";
import * as _141 from "./pool-incentives/v1beta1/query";
import * as _142 from "./protorev/v1beta1/genesis";
import * as _143 from "./protorev/v1beta1/gov";
import * as _144 from "./protorev/v1beta1/params";
import * as _145 from "./protorev/v1beta1/protorev";
import * as _146 from "./protorev/v1beta1/query";
import * as _147 from "./protorev/v1beta1/tx";
import * as _148 from "./sumtree/v1beta1/tree";
import * as _149 from "./superfluid/genesis";
import * as _150 from "./superfluid/params";
import * as _151 from "./superfluid/query";
import * as _152 from "./superfluid/superfluid";
import * as _153 from "./superfluid/tx";
import * as _154 from "./swaprouter/v1beta1/genesis";
import * as _155 from "./swaprouter/v1beta1/module_route";
import * as _156 from "./swaprouter/v1beta1/query";
import * as _157 from "./swaprouter/v1beta1/swap_route";
import * as _158 from "./swaprouter/v1beta1/tx";
import * as _159 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _160 from "./tokenfactory/v1beta1/genesis";
import * as _161 from "./tokenfactory/v1beta1/params";
import * as _162 from "./tokenfactory/v1beta1/query";
import * as _163 from "./tokenfactory/v1beta1/tx";
import * as _164 from "./twap/v1beta1/genesis";
import * as _165 from "./twap/v1beta1/query";
import * as _166 from "./twap/v1beta1/twap_record";
import * as _167 from "./txfees/v1beta1/feetoken";
import * as _168 from "./txfees/v1beta1/genesis";
import * as _169 from "./txfees/v1beta1/gov";
import * as _170 from "./txfees/v1beta1/query";
import * as _171 from "./valset-pref/v1beta1/query";
import * as _172 from "./valset-pref/v1beta1/state";
import * as _173 from "./valset-pref/v1beta1/tx";
import * as _249 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _250 from "./gamm/pool-models/stableswap/tx.amino";
import * as _251 from "./gamm/v1beta1/tx.amino";
import * as _252 from "./incentives/tx.amino";
import * as _253 from "./lockup/tx.amino";
import * as _254 from "./protorev/v1beta1/tx.amino";
import * as _255 from "./superfluid/tx.amino";
import * as _256 from "./swaprouter/v1beta1/tx.amino";
import * as _257 from "./tokenfactory/v1beta1/tx.amino";
import * as _258 from "./valset-pref/v1beta1/tx.amino";
import * as _259 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _260 from "./gamm/pool-models/stableswap/tx.registry";
import * as _261 from "./gamm/v1beta1/tx.registry";
import * as _262 from "./incentives/tx.registry";
import * as _263 from "./lockup/tx.registry";
import * as _264 from "./protorev/v1beta1/tx.registry";
import * as _265 from "./superfluid/tx.registry";
import * as _266 from "./swaprouter/v1beta1/tx.registry";
import * as _267 from "./tokenfactory/v1beta1/tx.registry";
import * as _268 from "./valset-pref/v1beta1/tx.registry";
import * as _269 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _270 from "./epochs/query.rpc.Query";
import * as _271 from "./gamm/v1beta1/query.rpc.Query";
import * as _272 from "./gamm/v2/query.rpc.Query";
import * as _273 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _274 from "./incentives/query.rpc.Query";
import * as _275 from "./lockup/query.rpc.Query";
import * as _276 from "./mint/v1beta1/query.rpc.Query";
import * as _277 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _278 from "./protorev/v1beta1/query.rpc.Query";
import * as _279 from "./superfluid/query.rpc.Query";
import * as _280 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _281 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _282 from "./twap/v1beta1/query.rpc.Query";
import * as _283 from "./txfees/v1beta1/query.rpc.Query";
import * as _284 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _285 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _286 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _287 from "./gamm/v1beta1/tx.rpc.msg";
import * as _288 from "./incentives/tx.rpc.msg";
import * as _289 from "./lockup/tx.rpc.msg";
import * as _290 from "./protorev/v1beta1/tx.rpc.msg";
import * as _291 from "./superfluid/tx.rpc.msg";
import * as _292 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _293 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _294 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _299 from "./rpc.query";
import * as _300 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = {
      ..._110,
      ..._111,
      ..._112,
      ..._269
    };
  }
  export namespace epochs {
    export const v1beta1 = {
      ..._113,
      ..._114,
      ..._270
    };
  }
  export namespace gamm {
    export const v1beta1 = {
      ..._115,
      ..._116,
      ..._117,
      ..._118,
      ..._251,
      ..._261,
      ..._271,
      ..._287
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = {
          ..._119,
          ..._249,
          ..._259,
          ..._285
        };
      }
      export namespace stableswap {
        export const v1beta1 = {
          ..._120,
          ..._121,
          ..._250,
          ..._260,
          ..._286
        };
      }
    }
    export const v2 = {
      ..._122,
      ..._272
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = {
      ..._123,
      ..._124,
      ..._273
    };
  }
  export const incentives = {
    ..._125,
    ..._126,
    ..._127,
    ..._128,
    ..._129,
    ..._252,
    ..._262,
    ..._274,
    ..._288
  };
  export const lockup = {
    ..._130,
    ..._131,
    ..._132,
    ..._133,
    ..._134,
    ..._253,
    ..._263,
    ..._275,
    ..._289
  };
  export namespace mint {
    export const v1beta1 = {
      ..._135,
      ..._136,
      ..._137,
      ..._276
    };
  }
  export namespace poolincentives {
    export const v1beta1 = {
      ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._277
    };
  }
  export namespace protorev {
    export const v1beta1 = {
      ..._142,
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._147,
      ..._254,
      ..._264,
      ..._278,
      ..._290
    };
  }
  export namespace store {
    export const v1beta1 = {
      ..._148
    };
  }
  export const superfluid = {
    ..._149,
    ..._150,
    ..._151,
    ..._152,
    ..._153,
    ..._255,
    ..._265,
    ..._279,
    ..._291
  };
  export namespace swaprouter {
    export const v1beta1 = {
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._256,
      ..._266,
      ..._280,
      ..._292
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = {
      ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._257,
      ..._267,
      ..._281,
      ..._293
    };
  }
  export namespace twap {
    export const v1beta1 = {
      ..._164,
      ..._165,
      ..._166,
      ..._282
    };
  }
  export namespace txfees {
    export const v1beta1 = {
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._283
    };
  }
  export namespace valsetpref {
    export const v1beta1 = {
      ..._171,
      ..._172,
      ..._173,
      ..._258,
      ..._268,
      ..._284,
      ..._294
    };
  }
  export const ClientFactory = {
    ..._299,
    ..._300
  };
}