import {LnChannelInterface} from "../../interfaces/lightning/ln-channel.interface";
import {LnChannelStateEnum} from "../../interfaces/lightning/ln-channel-state.enum";
import {LnChannelParamsInterface} from "../../interfaces/lightning/ln-channel-params.interface";
import {LNDChannelInterface} from "../../interfaces/lightning/LND/LND-channel.interface";
import {LnChannelFeeParamsModel} from "../../models/lightning/ln-channel-fee-params.model";

export class LndToLightningAdapter implements LnChannelInterface{
    capacity: number;
    channelId: string;
    channelState: LnChannelStateEnum;
    commitTransactionFee: number;
    commitTransactionWeight: number;
    fundingTransaction: string;
    isPartnerInitiated: boolean;
    isPrivate: boolean;
    localParams: LnChannelParamsInterface;
    pastStates: number;
    paymentsPending: any[];
    received: number;
    remoteParams: LnChannelParamsInterface;
    sent: number;
    timeOffline: number;
    timeOnline: number;
    transactionVout: number;
    unsettledBalance: number;

    constructor(LNDChannel: LNDChannelInterface) {
        this.capacity = LNDChannel.capacity;
        this.channelId = LNDChannel.id;
        this.commitTransactionFee = LNDChannel.commit_transaction_fee;
        this.commitTransactionWeight = LNDChannel.commit_transaction_weight;
        this.fundingTransaction = LNDChannel.transaction_id;
        this.isPartnerInitiated = LNDChannel.is_partner_initiated;
        this.isPrivate = LNDChannel.is_private;
        this.localParams = new LnChannelFeeParamsModel();
        //local params
        this.localParams.balance = LNDChannel.local_balance;
        this.localParams.csv = LNDChannel.local_csv;
        this.localParams.dust = LNDChannel.local_dust;
        this.localParams.given = LNDChannel.local_given;
        this.localParams.maxHtlcs = LNDChannel.local_max_htlcs;
        this.localParams.maxPendingMtokens = Number(LNDChannel.local_max_pending_mtokens);
        this.localParams.minHtlcMtokens = Number(LNDChannel.local_min_htlc_mtokens);
        this.localParams.reseve = LNDChannel.local_reserve;
        this.pastStates = LNDChannel.past_states;
        this.received = LNDChannel.received;
        //remote params
        this.remoteParams = new LnChannelFeeParamsModel();
        this.remoteParams.balance = LNDChannel.remote_balance;
        this.remoteParams.csv = LNDChannel.remote_csv;
        this.remoteParams.dust = LNDChannel.remote_dust;
        this.remoteParams.given = LNDChannel.remote_given;
        this.remoteParams.maxHtlcs = LNDChannel.remote_max_htlcs;
        this.remoteParams.maxPendingMtokens = Number(LNDChannel.remote_max_pending_mtokens);
        this.remoteParams.minHtlcMtokens = Number(LNDChannel.remote_min_htlc_mtokens);
        this.remoteParams.reseve = LNDChannel.remote_reserve;
        this.sent = LNDChannel.sent;
        this.timeOffline = LNDChannel.time_offline;
        this.timeOnline = LNDChannel.time_online;
        this.transactionVout = LNDChannel.transaction_vout;
        this.unsettledBalance = LNDChannel.unsettled_balance;

        if (LNDChannel.is_active){
            this.channelState = LnChannelStateEnum.ACTIVE
        }else if (LNDChannel.is_closing){
            this.channelState = LnChannelStateEnum.CLOSING
        }else if (LNDChannel.is_opening){
            this.channelState = LnChannelStateEnum.OPENING
        }
    }
}