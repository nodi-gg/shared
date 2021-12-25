import { LnNodeAddress } from '../../types/lightning/ln-node-address.interface';
import { LnPubKey } from '../../types/lightning/ln-pub-key.interface';
import { LnChannelInterface } from './ln-channel.interface';

export interface LnNode {
  nodeId: LnPubKey;
  alias: string;
  color?: string;
  addresses: LnNodeAddress[];
  lastUpdate: Date;
  channels?: LnChannelInterface[];
}
