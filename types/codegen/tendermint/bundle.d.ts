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
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _190.CheckTxType;
        checkTxTypeToJSON(object: _190.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _190.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _190.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _190.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _190.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _190.EvidenceType;
        evidenceTypeToJSON(object: _190.EvidenceType): string;
        CheckTxType: typeof _190.CheckTxType;
        CheckTxTypeSDKType: typeof _190.CheckTxTypeSDKType;
        ResponseOfferSnapshot_Result: typeof _190.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _190.ResponseOfferSnapshot_ResultSDKType;
        ResponseApplySnapshotChunk_Result: typeof _190.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _190.ResponseApplySnapshotChunk_ResultSDKType;
        EvidenceType: typeof _190.EvidenceType;
        EvidenceTypeSDKType: typeof _190.EvidenceTypeSDKType;
        Request: {
            encode(message: _190.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.Request;
            fromJSON(object: any): _190.Request;
            toJSON(message: _190.Request): unknown;
            fromPartial(object: Partial<_190.Request>): _190.Request;
        };
        RequestEcho: {
            encode(message: _190.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.RequestEcho;
            fromJSON(object: any): _190.RequestEcho;
            toJSON(message: _190.RequestEcho): unknown;
            fromPartial(object: Partial<_190.RequestEcho>): _190.RequestEcho;
        };
        RequestFlush: {
            encode(_: _190.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.RequestFlush;
            fromJSON(_: any): _190.RequestFlush;
            toJSON(_: _190.RequestFlush): unknown;
            fromPartial(_: Partial<_190.RequestFlush>): _190.RequestFlush;
        };
        RequestInfo: {
            encode(message: _190.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.RequestInfo;
            fromJSON(object: any): _190.RequestInfo;
            toJSON(message: _190.RequestInfo): unknown;
            fromPartial(object: Partial<_190.RequestInfo>): _190.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _190.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.RequestSetOption;
            fromJSON(object: any): _190.RequestSetOption;
            toJSON(message: _190.RequestSetOption): unknown;
            fromPartial(object: Partial<_190.RequestSetOption>): _190.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _190.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.RequestInitChain;
            fromJSON(object: any): _190.RequestInitChain;
            toJSON(message: _190.RequestInitChain): unknown;
            fromPartial(object: Partial<_190.RequestInitChain>): _190.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _190.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.RequestQuery;
            fromJSON(object: any): _190.RequestQuery;
            toJSON(message: _190.RequestQuery): unknown;
            fromPartial(object: Partial<_190.RequestQuery>): _190.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _190.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.RequestBeginBlock;
            fromJSON(object: any): _190.RequestBeginBlock;
            toJSON(message: _190.RequestBeginBlock): unknown;
            fromPartial(object: Partial<_190.RequestBeginBlock>): _190.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _190.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.RequestCheckTx;
            fromJSON(object: any): _190.RequestCheckTx;
            toJSON(message: _190.RequestCheckTx): unknown;
            fromPartial(object: Partial<_190.RequestCheckTx>): _190.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _190.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.RequestDeliverTx;
            fromJSON(object: any): _190.RequestDeliverTx;
            toJSON(message: _190.RequestDeliverTx): unknown;
            fromPartial(object: Partial<_190.RequestDeliverTx>): _190.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _190.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.RequestEndBlock;
            fromJSON(object: any): _190.RequestEndBlock;
            toJSON(message: _190.RequestEndBlock): unknown;
            fromPartial(object: Partial<_190.RequestEndBlock>): _190.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _190.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.RequestCommit;
            fromJSON(_: any): _190.RequestCommit;
            toJSON(_: _190.RequestCommit): unknown;
            fromPartial(_: Partial<_190.RequestCommit>): _190.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _190.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.RequestListSnapshots;
            fromJSON(_: any): _190.RequestListSnapshots;
            toJSON(_: _190.RequestListSnapshots): unknown;
            fromPartial(_: Partial<_190.RequestListSnapshots>): _190.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _190.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.RequestOfferSnapshot;
            fromJSON(object: any): _190.RequestOfferSnapshot;
            toJSON(message: _190.RequestOfferSnapshot): unknown;
            fromPartial(object: Partial<_190.RequestOfferSnapshot>): _190.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _190.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.RequestLoadSnapshotChunk;
            fromJSON(object: any): _190.RequestLoadSnapshotChunk;
            toJSON(message: _190.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_190.RequestLoadSnapshotChunk>): _190.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _190.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.RequestApplySnapshotChunk;
            fromJSON(object: any): _190.RequestApplySnapshotChunk;
            toJSON(message: _190.RequestApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_190.RequestApplySnapshotChunk>): _190.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _190.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.Response;
            fromJSON(object: any): _190.Response;
            toJSON(message: _190.Response): unknown;
            fromPartial(object: Partial<_190.Response>): _190.Response;
        };
        ResponseException: {
            encode(message: _190.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ResponseException;
            fromJSON(object: any): _190.ResponseException;
            toJSON(message: _190.ResponseException): unknown;
            fromPartial(object: Partial<_190.ResponseException>): _190.ResponseException;
        };
        ResponseEcho: {
            encode(message: _190.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ResponseEcho;
            fromJSON(object: any): _190.ResponseEcho;
            toJSON(message: _190.ResponseEcho): unknown;
            fromPartial(object: Partial<_190.ResponseEcho>): _190.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _190.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ResponseFlush;
            fromJSON(_: any): _190.ResponseFlush;
            toJSON(_: _190.ResponseFlush): unknown;
            fromPartial(_: Partial<_190.ResponseFlush>): _190.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _190.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ResponseInfo;
            fromJSON(object: any): _190.ResponseInfo;
            toJSON(message: _190.ResponseInfo): unknown;
            fromPartial(object: Partial<_190.ResponseInfo>): _190.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _190.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ResponseSetOption;
            fromJSON(object: any): _190.ResponseSetOption;
            toJSON(message: _190.ResponseSetOption): unknown;
            fromPartial(object: Partial<_190.ResponseSetOption>): _190.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _190.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ResponseInitChain;
            fromJSON(object: any): _190.ResponseInitChain;
            toJSON(message: _190.ResponseInitChain): unknown;
            fromPartial(object: Partial<_190.ResponseInitChain>): _190.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _190.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ResponseQuery;
            fromJSON(object: any): _190.ResponseQuery;
            toJSON(message: _190.ResponseQuery): unknown;
            fromPartial(object: Partial<_190.ResponseQuery>): _190.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _190.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ResponseBeginBlock;
            fromJSON(object: any): _190.ResponseBeginBlock;
            toJSON(message: _190.ResponseBeginBlock): unknown;
            fromPartial(object: Partial<_190.ResponseBeginBlock>): _190.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _190.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ResponseCheckTx;
            fromJSON(object: any): _190.ResponseCheckTx;
            toJSON(message: _190.ResponseCheckTx): unknown;
            fromPartial(object: Partial<_190.ResponseCheckTx>): _190.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _190.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ResponseDeliverTx;
            fromJSON(object: any): _190.ResponseDeliverTx;
            toJSON(message: _190.ResponseDeliverTx): unknown;
            fromPartial(object: Partial<_190.ResponseDeliverTx>): _190.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _190.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ResponseEndBlock;
            fromJSON(object: any): _190.ResponseEndBlock;
            toJSON(message: _190.ResponseEndBlock): unknown;
            fromPartial(object: Partial<_190.ResponseEndBlock>): _190.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _190.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ResponseCommit;
            fromJSON(object: any): _190.ResponseCommit;
            toJSON(message: _190.ResponseCommit): unknown;
            fromPartial(object: Partial<_190.ResponseCommit>): _190.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _190.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ResponseListSnapshots;
            fromJSON(object: any): _190.ResponseListSnapshots;
            toJSON(message: _190.ResponseListSnapshots): unknown;
            fromPartial(object: Partial<_190.ResponseListSnapshots>): _190.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _190.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ResponseOfferSnapshot;
            fromJSON(object: any): _190.ResponseOfferSnapshot;
            toJSON(message: _190.ResponseOfferSnapshot): unknown;
            fromPartial(object: Partial<_190.ResponseOfferSnapshot>): _190.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _190.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _190.ResponseLoadSnapshotChunk;
            toJSON(message: _190.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: Partial<_190.ResponseLoadSnapshotChunk>): _190.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _190.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ResponseApplySnapshotChunk;
            fromJSON(object: any): _190.ResponseApplySnapshotChunk;
            toJSON(message: _190.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: Partial<_190.ResponseApplySnapshotChunk>): _190.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _190.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ConsensusParams;
            fromJSON(object: any): _190.ConsensusParams;
            toJSON(message: _190.ConsensusParams): unknown;
            fromPartial(object: Partial<_190.ConsensusParams>): _190.ConsensusParams;
        };
        BlockParams: {
            encode(message: _190.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.BlockParams;
            fromJSON(object: any): _190.BlockParams;
            toJSON(message: _190.BlockParams): unknown;
            fromPartial(object: Partial<_190.BlockParams>): _190.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _190.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.LastCommitInfo;
            fromJSON(object: any): _190.LastCommitInfo;
            toJSON(message: _190.LastCommitInfo): unknown;
            fromPartial(object: Partial<_190.LastCommitInfo>): _190.LastCommitInfo;
        };
        Event: {
            encode(message: _190.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.Event;
            fromJSON(object: any): _190.Event;
            toJSON(message: _190.Event): unknown;
            fromPartial(object: Partial<_190.Event>): _190.Event;
        };
        EventAttribute: {
            encode(message: _190.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.EventAttribute;
            fromJSON(object: any): _190.EventAttribute;
            toJSON(message: _190.EventAttribute): unknown;
            fromPartial(object: Partial<_190.EventAttribute>): _190.EventAttribute;
        };
        TxResult: {
            encode(message: _190.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.TxResult;
            fromJSON(object: any): _190.TxResult;
            toJSON(message: _190.TxResult): unknown;
            fromPartial(object: Partial<_190.TxResult>): _190.TxResult;
        };
        Validator: {
            encode(message: _190.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.Validator;
            fromJSON(object: any): _190.Validator;
            toJSON(message: _190.Validator): unknown;
            fromPartial(object: Partial<_190.Validator>): _190.Validator;
        };
        ValidatorUpdate: {
            encode(message: _190.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ValidatorUpdate;
            fromJSON(object: any): _190.ValidatorUpdate;
            toJSON(message: _190.ValidatorUpdate): unknown;
            fromPartial(object: Partial<_190.ValidatorUpdate>): _190.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _190.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.VoteInfo;
            fromJSON(object: any): _190.VoteInfo;
            toJSON(message: _190.VoteInfo): unknown;
            fromPartial(object: Partial<_190.VoteInfo>): _190.VoteInfo;
        };
        Evidence: {
            encode(message: _190.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.Evidence;
            fromJSON(object: any): _190.Evidence;
            toJSON(message: _190.Evidence): unknown;
            fromPartial(object: Partial<_190.Evidence>): _190.Evidence;
        };
        Snapshot: {
            encode(message: _190.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.Snapshot;
            fromJSON(object: any): _190.Snapshot;
            toJSON(message: _190.Snapshot): unknown;
            fromPartial(object: Partial<_190.Snapshot>): _190.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _192.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.Proof;
            fromJSON(object: any): _192.Proof;
            toJSON(message: _192.Proof): unknown;
            fromPartial(object: Partial<_192.Proof>): _192.Proof;
        };
        ValueOp: {
            encode(message: _192.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.ValueOp;
            fromJSON(object: any): _192.ValueOp;
            toJSON(message: _192.ValueOp): unknown;
            fromPartial(object: Partial<_192.ValueOp>): _192.ValueOp;
        };
        DominoOp: {
            encode(message: _192.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.DominoOp;
            fromJSON(object: any): _192.DominoOp;
            toJSON(message: _192.DominoOp): unknown;
            fromPartial(object: Partial<_192.DominoOp>): _192.DominoOp;
        };
        ProofOp: {
            encode(message: _192.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.ProofOp;
            fromJSON(object: any): _192.ProofOp;
            toJSON(message: _192.ProofOp): unknown;
            fromPartial(object: Partial<_192.ProofOp>): _192.ProofOp;
        };
        ProofOps: {
            encode(message: _192.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.ProofOps;
            fromJSON(object: any): _192.ProofOps;
            toJSON(message: _192.ProofOps): unknown;
            fromPartial(object: Partial<_192.ProofOps>): _192.ProofOps;
        };
        PublicKey: {
            encode(message: _191.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.PublicKey;
            fromJSON(object: any): _191.PublicKey;
            toJSON(message: _191.PublicKey): unknown;
            fromPartial(object: Partial<_191.PublicKey>): _191.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _193.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.BitArray;
                fromJSON(object: any): _193.BitArray;
                toJSON(message: _193.BitArray): unknown;
                fromPartial(object: Partial<_193.BitArray>): _193.BitArray;
            };
        };
    }
    const p2p: {
        ProtocolVersion: {
            encode(message: _194.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.ProtocolVersion;
            fromJSON(object: any): _194.ProtocolVersion;
            toJSON(message: _194.ProtocolVersion): unknown;
            fromPartial(object: Partial<_194.ProtocolVersion>): _194.ProtocolVersion;
        };
        NodeInfo: {
            encode(message: _194.NodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.NodeInfo;
            fromJSON(object: any): _194.NodeInfo;
            toJSON(message: _194.NodeInfo): unknown;
            fromPartial(object: Partial<_194.NodeInfo>): _194.NodeInfo;
        };
        NodeInfoOther: {
            encode(message: _194.NodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.NodeInfoOther;
            fromJSON(object: any): _194.NodeInfoOther;
            toJSON(message: _194.NodeInfoOther): unknown;
            fromPartial(object: Partial<_194.NodeInfoOther>): _194.NodeInfoOther;
        };
        PeerInfo: {
            encode(message: _194.PeerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.PeerInfo;
            fromJSON(object: any): _194.PeerInfo;
            toJSON(message: _194.PeerInfo): unknown;
            fromPartial(object: Partial<_194.PeerInfo>): _194.PeerInfo;
        };
        PeerAddressInfo: {
            encode(message: _194.PeerAddressInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.PeerAddressInfo;
            fromJSON(object: any): _194.PeerAddressInfo;
            toJSON(message: _194.PeerAddressInfo): unknown;
            fromPartial(object: Partial<_194.PeerAddressInfo>): _194.PeerAddressInfo;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _199.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.ValidatorSet;
            fromJSON(object: any): _199.ValidatorSet;
            toJSON(message: _199.ValidatorSet): unknown;
            fromPartial(object: Partial<_199.ValidatorSet>): _199.ValidatorSet;
        };
        Validator: {
            encode(message: _199.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Validator;
            fromJSON(object: any): _199.Validator;
            toJSON(message: _199.Validator): unknown;
            fromPartial(object: Partial<_199.Validator>): _199.Validator;
        };
        SimpleValidator: {
            encode(message: _199.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.SimpleValidator;
            fromJSON(object: any): _199.SimpleValidator;
            toJSON(message: _199.SimpleValidator): unknown;
            fromPartial(object: Partial<_199.SimpleValidator>): _199.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _198.BlockIDFlag;
        blockIDFlagToJSON(object: _198.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _198.SignedMsgType;
        signedMsgTypeToJSON(object: _198.SignedMsgType): string;
        BlockIDFlag: typeof _198.BlockIDFlag;
        BlockIDFlagSDKType: typeof _198.BlockIDFlagSDKType;
        SignedMsgType: typeof _198.SignedMsgType;
        SignedMsgTypeSDKType: typeof _198.SignedMsgTypeSDKType;
        PartSetHeader: {
            encode(message: _198.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.PartSetHeader;
            fromJSON(object: any): _198.PartSetHeader;
            toJSON(message: _198.PartSetHeader): unknown;
            fromPartial(object: Partial<_198.PartSetHeader>): _198.PartSetHeader;
        };
        Part: {
            encode(message: _198.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Part;
            fromJSON(object: any): _198.Part;
            toJSON(message: _198.Part): unknown;
            fromPartial(object: Partial<_198.Part>): _198.Part;
        };
        BlockID: {
            encode(message: _198.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.BlockID;
            fromJSON(object: any): _198.BlockID;
            toJSON(message: _198.BlockID): unknown;
            fromPartial(object: Partial<_198.BlockID>): _198.BlockID;
        };
        Header: {
            encode(message: _198.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Header;
            fromJSON(object: any): _198.Header;
            toJSON(message: _198.Header): unknown;
            fromPartial(object: Partial<_198.Header>): _198.Header;
        };
        Data: {
            encode(message: _198.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Data;
            fromJSON(object: any): _198.Data;
            toJSON(message: _198.Data): unknown;
            fromPartial(object: Partial<_198.Data>): _198.Data;
        };
        Vote: {
            encode(message: _198.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Vote;
            fromJSON(object: any): _198.Vote;
            toJSON(message: _198.Vote): unknown;
            fromPartial(object: Partial<_198.Vote>): _198.Vote;
        };
        Commit: {
            encode(message: _198.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Commit;
            fromJSON(object: any): _198.Commit;
            toJSON(message: _198.Commit): unknown;
            fromPartial(object: Partial<_198.Commit>): _198.Commit;
        };
        CommitSig: {
            encode(message: _198.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.CommitSig;
            fromJSON(object: any): _198.CommitSig;
            toJSON(message: _198.CommitSig): unknown;
            fromPartial(object: Partial<_198.CommitSig>): _198.CommitSig;
        };
        Proposal: {
            encode(message: _198.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Proposal;
            fromJSON(object: any): _198.Proposal;
            toJSON(message: _198.Proposal): unknown;
            fromPartial(object: Partial<_198.Proposal>): _198.Proposal;
        };
        SignedHeader: {
            encode(message: _198.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.SignedHeader;
            fromJSON(object: any): _198.SignedHeader;
            toJSON(message: _198.SignedHeader): unknown;
            fromPartial(object: Partial<_198.SignedHeader>): _198.SignedHeader;
        };
        LightBlock: {
            encode(message: _198.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.LightBlock;
            fromJSON(object: any): _198.LightBlock;
            toJSON(message: _198.LightBlock): unknown;
            fromPartial(object: Partial<_198.LightBlock>): _198.LightBlock;
        };
        BlockMeta: {
            encode(message: _198.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.BlockMeta;
            fromJSON(object: any): _198.BlockMeta;
            toJSON(message: _198.BlockMeta): unknown;
            fromPartial(object: Partial<_198.BlockMeta>): _198.BlockMeta;
        };
        TxProof: {
            encode(message: _198.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.TxProof;
            fromJSON(object: any): _198.TxProof;
            toJSON(message: _198.TxProof): unknown;
            fromPartial(object: Partial<_198.TxProof>): _198.TxProof;
        };
        ConsensusParams: {
            encode(message: _197.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.ConsensusParams;
            fromJSON(object: any): _197.ConsensusParams;
            toJSON(message: _197.ConsensusParams): unknown;
            fromPartial(object: Partial<_197.ConsensusParams>): _197.ConsensusParams;
        };
        BlockParams: {
            encode(message: _197.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.BlockParams;
            fromJSON(object: any): _197.BlockParams;
            toJSON(message: _197.BlockParams): unknown;
            fromPartial(object: Partial<_197.BlockParams>): _197.BlockParams;
        };
        EvidenceParams: {
            encode(message: _197.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.EvidenceParams;
            fromJSON(object: any): _197.EvidenceParams;
            toJSON(message: _197.EvidenceParams): unknown;
            fromPartial(object: Partial<_197.EvidenceParams>): _197.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _197.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.ValidatorParams;
            fromJSON(object: any): _197.ValidatorParams;
            toJSON(message: _197.ValidatorParams): unknown;
            fromPartial(object: Partial<_197.ValidatorParams>): _197.ValidatorParams;
        };
        VersionParams: {
            encode(message: _197.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.VersionParams;
            fromJSON(object: any): _197.VersionParams;
            toJSON(message: _197.VersionParams): unknown;
            fromPartial(object: Partial<_197.VersionParams>): _197.VersionParams;
        };
        HashedParams: {
            encode(message: _197.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.HashedParams;
            fromJSON(object: any): _197.HashedParams;
            toJSON(message: _197.HashedParams): unknown;
            fromPartial(object: Partial<_197.HashedParams>): _197.HashedParams;
        };
        Evidence: {
            encode(message: _196.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Evidence;
            fromJSON(object: any): _196.Evidence;
            toJSON(message: _196.Evidence): unknown;
            fromPartial(object: Partial<_196.Evidence>): _196.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _196.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.DuplicateVoteEvidence;
            fromJSON(object: any): _196.DuplicateVoteEvidence;
            toJSON(message: _196.DuplicateVoteEvidence): unknown;
            fromPartial(object: Partial<_196.DuplicateVoteEvidence>): _196.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _196.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.LightClientAttackEvidence;
            fromJSON(object: any): _196.LightClientAttackEvidence;
            toJSON(message: _196.LightClientAttackEvidence): unknown;
            fromPartial(object: Partial<_196.LightClientAttackEvidence>): _196.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _196.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.EvidenceList;
            fromJSON(object: any): _196.EvidenceList;
            toJSON(message: _196.EvidenceList): unknown;
            fromPartial(object: Partial<_196.EvidenceList>): _196.EvidenceList;
        };
        Block: {
            encode(message: _195.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.Block;
            fromJSON(object: any): _195.Block;
            toJSON(message: _195.Block): unknown;
            fromPartial(object: Partial<_195.Block>): _195.Block;
        };
    };
    const version: {
        App: {
            encode(message: _200.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.App;
            fromJSON(object: any): _200.App;
            toJSON(message: _200.App): unknown;
            fromPartial(object: Partial<_200.App>): _200.App;
        };
        Consensus: {
            encode(message: _200.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Consensus;
            fromJSON(object: any): _200.Consensus;
            toJSON(message: _200.Consensus): unknown;
            fromPartial(object: Partial<_200.Consensus>): _200.Consensus;
        };
    };
}
