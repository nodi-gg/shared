import { LnPubKey } from '../../types/lightning/ln-pub-key.interface';
import { LnChannelFee } from './ln-channel-fee.interface';

export interface LnChannel {
  channelId: number;
  shortChannelId: string;
  source: LnPubKey;
  destination: LnPubKey;
  source_fee: LnChannelFee;
  destination_fee: LnChannelFee;
  isActive: boolean;
  isPublic: boolean;
  delay: number; // Time Lock Delta
  lastUpdate: Date;
  capacity: number;
  htlcMinimum?: number;
  htlcMaximum?: number;
}
