import { LnPubKey } from '../../types/lightning/ln-pub-key.interface';
import { LnChannelFeeInterface } from './ln-channel-fee.interface';

export interface LnChannelParamsInterface {
  pubkey: LnPubKey;
  balance: number;
  csv: number;
  dust: number;
  given: number;
  maxHtlcs: number;
  maxPendingMtokens: number;
  minHtlcMtokens: number;
  reseve: number;
  fee: LnChannelFeeInterface;
}