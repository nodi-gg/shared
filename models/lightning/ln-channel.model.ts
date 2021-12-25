import {LnChannelInterface} from "../../interfaces/lightning/ln-channel.interface";
import {LnChannelStateEnum} from "../../interfaces/lightning/ln-channel-state.enum";
import {BitcoinTransaction} from "../../interfaces/bitcoin/bitcoin-transaction.interface";
import {LnChannelParamsInterface} from "../../interfaces/lightning/ln-channel-params.interface";

export class LnChannelModel implements LnChannelInterface {
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

}