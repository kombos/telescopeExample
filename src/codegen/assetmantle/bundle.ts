import * as _1 from "./assets/internal/genesis/genesis.v1";
import * as _2 from "./assets/internal/key/key.v1";
import * as _3 from "./assets/internal/mappable/mappable.v1";
import * as _4 from "./base/data/internal/accAddressData.v1";
import * as _5 from "./base/data/internal/anyData.v1";
import * as _6 from "./base/data/internal/booleanData.v1";
import * as _7 from "./base/data/internal/decData.v1";
import * as _8 from "./base/data/internal/heightData.v1";
import * as _9 from "./base/data/internal/idData.v1";
import * as _10 from "./base/data/internal/numberData.v1";
import * as _11 from "./base/data/internal/stringData.v1";
import * as _12 from "./base/documents/internal/document.v1";
import * as _13 from "./base/ids/internal/anyID.v1";
import * as _14 from "./base/ids/internal/anyOwnableID.v1";
import * as _15 from "./base/ids/internal/assetID.v1";
import * as _16 from "./base/ids/internal/classificationID.v1";
import * as _17 from "./base/ids/internal/coinID.v1";
import * as _18 from "./base/ids/internal/dataID.v1";
import * as _19 from "./base/ids/internal/hashID.v1";
import * as _20 from "./base/ids/internal/identityID.v1";
import * as _21 from "./base/ids/internal/maintainerID.v1";
import * as _22 from "./base/ids/internal/orderID.v1";
import * as _23 from "./base/ids/internal/propertyID.v1";
import * as _24 from "./base/ids/internal/splitID.v1";
import * as _25 from "./base/ids/internal/stringID.v1";
import * as _26 from "./base/lists/internal/idList.v1";
import * as _27 from "./base/lists/internal/propertyList.v1";
import * as _28 from "./base/parameters/internal/parameter.v1";
import * as _29 from "./base/properties/internal/anyProperty.v1";
import * as _30 from "./base/properties/internal/mesaProperty.v1";
import * as _31 from "./base/properties/internal/metaProperty.v1";
import * as _32 from "./base/qualified/internal/immutables.v1";
import * as _33 from "./base/qualified/internal/mutables.v1";
import * as _34 from "./base/types/internal/height.v1";
import * as _35 from "./base/types/internal/split.v1";
import * as _36 from "./classifications/internal/genesis/genesis.v1";
import * as _37 from "./classifications/internal/key/key.v1";
import * as _38 from "./classifications/internal/mappable/mappable.v1";
import * as _39 from "./identities/internal/genesis/genesis.v1";
import * as _40 from "./identities/internal/key/key.v1";
import * as _41 from "./identities/internal/mappable/mappable.v1";
import * as _42 from "./maintainers/internal/genesis/genesis.v1";
import * as _43 from "./maintainers/internal/key/key.v1";
import * as _44 from "./maintainers/internal/mappable/mappable.v1";
import * as _45 from "./metas/internal/genesis/genesis.v1";
import * as _46 from "./metas/internal/key/key.v1";
import * as _47 from "./metas/internal/mappable/mappable.v1";
import * as _48 from "./orders/internal/genesis/genesis.v1";
import * as _49 from "./orders/internal/key/key.v1";
import * as _50 from "./orders/internal/mappable/mappable.v1";
import * as _51 from "./splits/internal/genesis/genesis.v1";
import * as _52 from "./splits/internal/key/key.v1";
import * as _53 from "./splits/internal/mappable/mappable.v1";
import * as _315 from "./rpc.query";
export namespace assetmantle {
  export const assets = { ..._1,
    ..._2,
    ..._3
  };
  export namespace base {
    export const data = { ..._4,
      ..._5,
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11
    };
    export const documents = { ..._12
    };
    export const ids = { ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._17,
      ..._18,
      ..._19,
      ..._20,
      ..._21,
      ..._22,
      ..._23,
      ..._24,
      ..._25
    };
    export const lists = { ..._26,
      ..._27
    };
    export const parameters = { ..._28
    };
    export const properties = { ..._29,
      ..._30,
      ..._31
    };
    export const qualified = { ..._32,
      ..._33
    };
    export const types = { ..._34,
      ..._35
    };
  }
  export const classifications = { ..._36,
    ..._37,
    ..._38
  };
  export const identities = { ..._39,
    ..._40,
    ..._41
  };
  export const maintainers = { ..._42,
    ..._43,
    ..._44
  };
  export const metas = { ..._45,
    ..._46,
    ..._47
  };
  export const orders = { ..._48,
    ..._49,
    ..._50
  };
  export const splits = { ..._51,
    ..._52,
    ..._53
  };
  export const ClientFactory = { ..._315
  };
}