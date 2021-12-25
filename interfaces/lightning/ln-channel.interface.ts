import {LnChannelParamsInterface} from "./ln-channel-params.interface";
import {BitcoinTransaction} from "../bitcoin/bitcoin-transaction.interface";
import {LnChannelStateEnum} from "./ln-channel-state.enum";

export interface LnChannelInterface {
    capacity: number;
    commitTransactionFee: number;
    commitTransactionWeight: number;
    channelId: string;
    channelState: LnChannelStateEnum;
    isPartnerInitiated: boolean;
    isPrivate: boolean;
    localParams: LnChannelParamsInterface;
    remoteParams: LnChannelParamsInterface;
    pastStates: number;
    paymentsPending: any[] // TODO: ln-payment inteface
    received: number;
    sent: number;
    timeOffline: number;
    timeOnline: number;
    fundingTransaction: string;
    transactionVout: number;
    unsettledBalance: number;
}
