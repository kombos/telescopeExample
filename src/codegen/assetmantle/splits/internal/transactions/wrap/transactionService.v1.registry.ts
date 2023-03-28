import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { Message } from "./message.v1";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/assetmantle.splits.v1beta1.transactions.wrap.Message", Message]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    wrap(value: Message) {
      return {
        typeUrl: "/assetmantle.splits.v1beta1.transactions.wrap.Message",
        value: Message.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    wrap(value: Message) {
      return {
        typeUrl: "/assetmantle.splits.v1beta1.transactions.wrap.Message",
        value
      };
    }

  },
  toJSON: {
    wrap(value: Message) {
      return {
        typeUrl: "/assetmantle.splits.v1beta1.transactions.wrap.Message",
        value: Message.toJSON(value)
      };
    }

  },
  fromJSON: {
    wrap(value: any) {
      return {
        typeUrl: "/assetmantle.splits.v1beta1.transactions.wrap.Message",
        value: Message.fromJSON(value)
      };
    }

  },
  fromPartial: {
    wrap(value: Message) {
      return {
        typeUrl: "/assetmantle.splits.v1beta1.transactions.wrap.Message",
        value: Message.fromPartial(value)
      };
    }

  }
};