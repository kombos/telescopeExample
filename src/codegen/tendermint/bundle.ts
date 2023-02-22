import * as _190 from "./abci/types";
import * as _191 from "./crypto/keys";
import * as _192 from "./crypto/proof";
import * as _193 from "./libs/bits/types";
import * as _194 from "./p2p/types";
import * as _195 from "./types/block";
import * as _196 from "./types/evidence";
import * as _197 from "./types/params";
import * as _198 from "./types/types";
import * as _199 from "./types/validator";
import * as _200 from "./version/types";
export namespace tendermint {
  export const abci = { ..._190
  };
  export const crypto = { ..._191,
    ..._192
  };
  export namespace libs {
    export const bits = { ..._193
    };
  }
  export const p2p = { ..._194
  };
  export const types = { ..._195,
    ..._196,
    ..._197,
    ..._198,
    ..._199
  };
  export const version = { ..._200
  };
}