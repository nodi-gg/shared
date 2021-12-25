import {LnChannelInterface} from "../../interfaces/lightning/ln-channel.interface";
import {LnChannelStateEnum} from "../../interfaces/lightning/ln-channel-state.enum";
import {LnChannelParamsInterface} from "../../interfaces/lightning/ln-channel-params.interface";
import {LNDChannelInterface} from "../../interfaces/lightning/LND/LND-channel.interface";
import {LnChannelFeeParamsModel} from "../../models/lightning/ln-channel-fee-params.model";

export class LndToLightningAdapter implements LnChannelInterface{
    LNDChannel: LNDChannelInterface;

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
        this.capacity = this.LNDChannel.capacity;
        this.channelId = this.LNDChannel.id;
        this.commitTransactionFee = this.LNDChannel.commit_transaction_fee;
        this.commitTransactionWeight = this.LNDChannel.commit_transaction_weight;
        this.fundingTransaction = this.LNDChannel.transaction_id;
        this.isPartnerInitiated = this.LNDChannel.is_partner_initiated;
        this.isPrivate = this.LNDChannel.is_private;
        this.localParams = new LnChannelFeeParamsModel();
        //local params
        this.localParams.balance = this.LNDChannel.local_balance;
        this.localParams.csv = this.LNDChannel.local_csv;
        this.localParams.dust = this.LNDChannel.local_dust;
        this.localParams.given = this.LNDChannel.local_given;
        this.localParams.maxHtlcs = this.LNDChannel.local_max_htlcs;
        this.localParams.maxPendingMtokens = Number(this.LNDChannel.local_max_pending_mtokens);
        this.localParams.minHtlcMtokens = Number(this.LNDChannel.local_min_htlc_mtokens);
        this.localParams.reseve = this.LNDChannel.local_reserve;
        this.pastStates = this.LNDChannel.past_states;
        this.received = this.LNDChannel.received;
        //remote params
        this.remoteParams = new LnChannelFeeParamsModel();
        this.remoteParams.balance = this.LNDChannel.remote_balance;
        this.remoteParams.csv = this.LNDChannel.remote_csv;
        this.remoteParams.dust = this.LNDChannel.remote_dust;
        this.remoteParams.given = this.LNDChannel.remote_given;
        this.remoteParams.maxHtlcs = this.LNDChannel.remote_max_htlcs;
        this.remoteParams.maxPendingMtokens = Number(this.LNDChannel.remote_max_pending_mtokens);
        this.remoteParams.minHtlcMtokens = Number(this.LNDChannel.remote_min_htlc_mtokens);
        this.remoteParams.reseve = this.LNDChannel.remote_reserve;
        this.sent = this.LNDChannel.sent;
        this.timeOffline = this.LNDChannel.time_offline;
        this.timeOnline = this.LNDChannel.time_online;
        this.transactionVout = this.LNDChannel.transaction_vout;
        this.unsettledBalance = this.LNDChannel.unsettled_balance;

        if (this.LNDChannel.is_active){
            this.channelState = LnChannelStateEnum.ACTIVE
        }else if (this.LNDChannel.is_closing){
            this.channelState = LnChannelStateEnum.CLOSING
        }else if (this.LNDChannel.is_opening){
            this.channelState = LnChannelStateEnum.OPENING
        }
    }
}