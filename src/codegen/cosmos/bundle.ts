import * as _59 from "./app/v1alpha1/config";
import * as _60 from "./app/v1alpha1/module";
import * as _61 from "./app/v1alpha1/query";
import * as _62 from "./auth/v1beta1/auth";
import * as _63 from "./auth/v1beta1/genesis";
import * as _64 from "./auth/v1beta1/query";
import * as _65 from "./authz/v1beta1/authz";
import * as _66 from "./authz/v1beta1/event";
import * as _67 from "./authz/v1beta1/genesis";
import * as _68 from "./authz/v1beta1/query";
import * as _69 from "./authz/v1beta1/tx";
import * as _70 from "./bank/v1beta1/authz";
import * as _71 from "./bank/v1beta1/bank";
import * as _72 from "./bank/v1beta1/genesis";
import * as _73 from "./bank/v1beta1/query";
import * as _74 from "./bank/v1beta1/tx";
import * as _75 from "./base/abci/v1beta1/abci";
import * as _76 from "./base/kv/v1beta1/kv";
import * as _77 from "./base/query/v1beta1/pagination";
import * as _78 from "./base/reflection/v1beta1/reflection";
import * as _79 from "./base/reflection/v2alpha1/reflection";
import * as _80 from "./base/snapshots/v1beta1/snapshot";
import * as _81 from "./base/store/v1beta1/commit_info";
import * as _82 from "./base/store/v1beta1/listening";
import * as _83 from "./base/tendermint/v1beta1/query";
import * as _84 from "./base/v1beta1/coin";
import * as _85 from "./capability/v1beta1/capability";
import * as _86 from "./capability/v1beta1/genesis";
import * as _87 from "./crisis/v1beta1/genesis";
import * as _88 from "./crisis/v1beta1/tx";
import * as _89 from "./crypto/ed25519/keys";
import * as _90 from "./crypto/hd/v1/hd";
import * as _91 from "./crypto/keyring/v1/record";
import * as _92 from "./crypto/multisig/keys";
import * as _93 from "./crypto/secp256k1/keys";
import * as _94 from "./crypto/secp256r1/keys";
import * as _95 from "./distribution/v1beta1/distribution";
import * as _96 from "./distribution/v1beta1/genesis";
import * as _97 from "./distribution/v1beta1/query";
import * as _98 from "./distribution/v1beta1/tx";
import * as _99 from "./evidence/v1beta1/evidence";
import * as _100 from "./evidence/v1beta1/genesis";
import * as _101 from "./evidence/v1beta1/query";
import * as _102 from "./evidence/v1beta1/tx";
import * as _103 from "./feegrant/v1beta1/feegrant";
import * as _104 from "./feegrant/v1beta1/genesis";
import * as _105 from "./feegrant/v1beta1/query";
import * as _106 from "./feegrant/v1beta1/tx";
import * as _107 from "./genutil/v1beta1/genesis";
import * as _108 from "./gov/v1/genesis";
import * as _109 from "./gov/v1/gov";
import * as _110 from "./gov/v1/query";
import * as _111 from "./gov/v1/tx";
import * as _112 from "./gov/v1beta1/genesis";
import * as _113 from "./gov/v1beta1/gov";
import * as _114 from "./gov/v1beta1/query";
import * as _115 from "./gov/v1beta1/tx";
import * as _116 from "./group/v1/events";
import * as _117 from "./group/v1/genesis";
import * as _118 from "./group/v1/query";
import * as _119 from "./group/v1/tx";
import * as _120 from "./group/v1/types";
import * as _121 from "./mint/v1beta1/genesis";
import * as _122 from "./mint/v1beta1/mint";
import * as _123 from "./mint/v1beta1/query";
import * as _124 from "./msg/v1/msg";
import * as _125 from "./nft/v1beta1/event";
import * as _126 from "./nft/v1beta1/genesis";
import * as _127 from "./nft/v1beta1/nft";
import * as _128 from "./nft/v1beta1/query";
import * as _129 from "./nft/v1beta1/tx";
import * as _130 from "./orm/v1/orm";
import * as _131 from "./orm/v1alpha1/schema";
import * as _132 from "./params/v1beta1/params";
import * as _133 from "./params/v1beta1/query";
import * as _134 from "./slashing/v1beta1/genesis";
import * as _135 from "./slashing/v1beta1/query";
import * as _136 from "./slashing/v1beta1/slashing";
import * as _137 from "./slashing/v1beta1/tx";
import * as _138 from "./staking/v1beta1/authz";
import * as _139 from "./staking/v1beta1/genesis";
import * as _140 from "./staking/v1beta1/query";
import * as _141 from "./staking/v1beta1/staking";
import * as _142 from "./staking/v1beta1/tx";
import * as _143 from "./tx/signing/v1beta1/signing";
import * as _144 from "./tx/v1beta1/service";
import * as _145 from "./tx/v1beta1/tx";
import * as _146 from "./upgrade/v1beta1/query";
import * as _147 from "./upgrade/v1beta1/tx";
import * as _148 from "./upgrade/v1beta1/upgrade";
import * as _149 from "./vesting/v1beta1/tx";
import * as _150 from "./vesting/v1beta1/vesting";
import * as _237 from "./authz/v1beta1/tx.amino";
import * as _238 from "./bank/v1beta1/tx.amino";
import * as _239 from "./crisis/v1beta1/tx.amino";
import * as _240 from "./distribution/v1beta1/tx.amino";
import * as _241 from "./evidence/v1beta1/tx.amino";
import * as _242 from "./feegrant/v1beta1/tx.amino";
import * as _243 from "./gov/v1/tx.amino";
import * as _244 from "./gov/v1beta1/tx.amino";
import * as _245 from "./group/v1/tx.amino";
import * as _246 from "./nft/v1beta1/tx.amino";
import * as _247 from "./slashing/v1beta1/tx.amino";
import * as _248 from "./staking/v1beta1/tx.amino";
import * as _249 from "./upgrade/v1beta1/tx.amino";
import * as _250 from "./vesting/v1beta1/tx.amino";
import * as _251 from "./authz/v1beta1/tx.registry";
import * as _252 from "./bank/v1beta1/tx.registry";
import * as _253 from "./crisis/v1beta1/tx.registry";
import * as _254 from "./distribution/v1beta1/tx.registry";
import * as _255 from "./evidence/v1beta1/tx.registry";
import * as _256 from "./feegrant/v1beta1/tx.registry";
import * as _257 from "./gov/v1/tx.registry";
import * as _258 from "./gov/v1beta1/tx.registry";
import * as _259 from "./group/v1/tx.registry";
import * as _260 from "./nft/v1beta1/tx.registry";
import * as _261 from "./slashing/v1beta1/tx.registry";
import * as _262 from "./staking/v1beta1/tx.registry";
import * as _263 from "./upgrade/v1beta1/tx.registry";
import * as _264 from "./vesting/v1beta1/tx.registry";
import * as _265 from "./app/v1alpha1/query.rpc.Query";
import * as _266 from "./auth/v1beta1/query.rpc.Query";
import * as _267 from "./authz/v1beta1/query.rpc.Query";
import * as _268 from "./bank/v1beta1/query.rpc.Query";
import * as _269 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _270 from "./distribution/v1beta1/query.rpc.Query";
import * as _271 from "./evidence/v1beta1/query.rpc.Query";
import * as _272 from "./feegrant/v1beta1/query.rpc.Query";
import * as _273 from "./gov/v1/query.rpc.Query";
import * as _274 from "./gov/v1beta1/query.rpc.Query";
import * as _275 from "./group/v1/query.rpc.Query";
import * as _276 from "./mint/v1beta1/query.rpc.Query";
import * as _277 from "./nft/v1beta1/query.rpc.Query";
import * as _278 from "./params/v1beta1/query.rpc.Query";
import * as _279 from "./slashing/v1beta1/query.rpc.Query";
import * as _280 from "./staking/v1beta1/query.rpc.Query";
import * as _281 from "./tx/v1beta1/service.rpc.Service";
import * as _282 from "./upgrade/v1beta1/query.rpc.Query";
import * as _283 from "./authz/v1beta1/tx.rpc.msg";
import * as _284 from "./bank/v1beta1/tx.rpc.msg";
import * as _285 from "./crisis/v1beta1/tx.rpc.msg";
import * as _286 from "./distribution/v1beta1/tx.rpc.msg";
import * as _287 from "./evidence/v1beta1/tx.rpc.msg";
import * as _288 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _289 from "./gov/v1/tx.rpc.msg";
import * as _290 from "./gov/v1beta1/tx.rpc.msg";
import * as _291 from "./group/v1/tx.rpc.msg";
import * as _292 from "./nft/v1beta1/tx.rpc.msg";
import * as _293 from "./slashing/v1beta1/tx.rpc.msg";
import * as _294 from "./staking/v1beta1/tx.rpc.msg";
import * as _295 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _296 from "./vesting/v1beta1/tx.rpc.msg";
import * as _325 from "./rpc.query";
import * as _326 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = { ..._59,
      ..._60,
      ..._61,
      ..._265
    };
  }
  export namespace auth {
    export const v1beta1 = { ..._62,
      ..._63,
      ..._64,
      ..._266
    };
  }
  export namespace authz {
    export const v1beta1 = { ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._237,
      ..._251,
      ..._267,
      ..._283
    };
  }
  export namespace bank {
    export const v1beta1 = { ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._74,
      ..._238,
      ..._252,
      ..._268,
      ..._284
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = { ..._75
      };
    }
    export namespace kv {
      export const v1beta1 = { ..._76
      };
    }
    export namespace query {
      export const v1beta1 = { ..._77
      };
    }
    export namespace reflection {
      export const v1beta1 = { ..._78
      };
      export const v2alpha1 = { ..._79
      };
    }
    export namespace snapshots {
      export const v1beta1 = { ..._80
      };
    }
    export namespace store {
      export const v1beta1 = { ..._81,
        ..._82
      };
    }
    export namespace tendermint {
      export const v1beta1 = { ..._83,
        ..._269
      };
    }
    export const v1beta1 = { ..._84
    };
  }
  export namespace capability {
    export const v1beta1 = { ..._85,
      ..._86
    };
  }
  export namespace crisis {
    export const v1beta1 = { ..._87,
      ..._88,
      ..._239,
      ..._253,
      ..._285
    };
  }
  export namespace crypto {
    export const ed25519 = { ..._89
    };
    export namespace hd {
      export const v1 = { ..._90
      };
    }
    export namespace keyring {
      export const v1 = { ..._91
      };
    }
    export const multisig = { ..._92
    };
    export const secp256k1 = { ..._93
    };
    export const secp256r1 = { ..._94
    };
  }
  export namespace distribution {
    export const v1beta1 = { ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._240,
      ..._254,
      ..._270,
      ..._286
    };
  }
  export namespace evidence {
    export const v1beta1 = { ..._99,
      ..._100,
      ..._101,
      ..._102,
      ..._241,
      ..._255,
      ..._271,
      ..._287
    };
  }
  export namespace feegrant {
    export const v1beta1 = { ..._103,
      ..._104,
      ..._105,
      ..._106,
      ..._242,
      ..._256,
      ..._272,
      ..._288
    };
  }
  export namespace genutil {
    export const v1beta1 = { ..._107
    };
  }
  export namespace gov {
    export const v1 = { ..._108,
      ..._109,
      ..._110,
      ..._111,
      ..._243,
      ..._257,
      ..._273,
      ..._289
    };
    export const v1beta1 = { ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._244,
      ..._258,
      ..._274,
      ..._290
    };
  }
  export namespace group {
    export const v1 = { ..._116,
      ..._117,
      ..._118,
      ..._119,
      ..._120,
      ..._245,
      ..._259,
      ..._275,
      ..._291
    };
  }
  export namespace mint {
    export const v1beta1 = { ..._121,
      ..._122,
      ..._123,
      ..._276
    };
  }
  export namespace msg {
    export const v1 = { ..._124
    };
  }
  export namespace nft {
    export const v1beta1 = { ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._246,
      ..._260,
      ..._277,
      ..._292
    };
  }
  export namespace orm {
    export const v1 = { ..._130
    };
    export const v1alpha1 = { ..._131
    };
  }
  export namespace params {
    export const v1beta1 = { ..._132,
      ..._133,
      ..._278
    };
  }
  export namespace slashing {
    export const v1beta1 = { ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._247,
      ..._261,
      ..._279,
      ..._293
    };
  }
  export namespace staking {
    export const v1beta1 = { ..._138,
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._248,
      ..._262,
      ..._280,
      ..._294
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = { ..._143
      };
    }
    export const v1beta1 = { ..._144,
      ..._145,
      ..._281
    };
  }
  export namespace upgrade {
    export const v1beta1 = { ..._146,
      ..._147,
      ..._148,
      ..._249,
      ..._263,
      ..._282,
      ..._295
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._149,
      ..._150,
      ..._250,
      ..._264,
      ..._296
    };
  }
  export const ClientFactory = { ..._325,
    ..._326
  };
}