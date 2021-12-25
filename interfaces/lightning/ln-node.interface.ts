import { LnNodeAddress } from '../types/ln-node-address.interface';
import { LnPubKey } from '../types/ln-pub-key.interface';
import { LnChannel } from './ln-channel.interface';

export interface LnNode {
  nodeId: LnPubKey;
  alias: string;
  color?: string;
  addresses: LnNodeAddress[];
  lastUpdate: Date;
  channels?: LnChannel[];
}
