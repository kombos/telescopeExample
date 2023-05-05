import { Message } from "./message";
export declare const AminoConverter: {
    "/assetmantle.modules.splits.transactions.send.Message": {
        aminoType: string;
        toAmino: (message: Message) => import("./message").MessageAmino;
        fromAmino: (object: import("./message").MessageAmino) => Message;
    };
};
