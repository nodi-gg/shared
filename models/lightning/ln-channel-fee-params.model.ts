import { LnChannelParamsInterface } from '../../interfaces/lightning/ln-channel-params.interface';
import { LnChannelFeeInterface } from '../../interfaces/lightning/ln-channel-fee.interface';
import { LnPubKey } from '../../types/lightning/ln-pub-key.interface';

export class LnChannelFeeParamsModel implements LnChannelParamsInterface {
  balance: number;
  csv: number;
  dust: number;
  fee: LnChannelFeeInterface;
  given: number;
  maxHtlcs: number;
  maxPendingMtokens: number;
  minHtlcMtokens: number;
  pubkey: LnPubKey;
  reseve: number;

}