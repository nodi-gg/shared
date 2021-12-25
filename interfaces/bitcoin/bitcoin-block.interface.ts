import { BitcoinTransaction } from './bitcoin-transaction.interface';

export interface BitcoinBlock {
  hash: string;
  confirmations: number;
  size: number;
  weight: number;
  height: number;
  version: number;
  merkleRoot: string;
  tx: BitcoinTransaction[];
  time: number;
  nonce: number;
  bits: string;
  difficulty: number;
  previousBlockhash: string;
  nextBlockhash;
  string;
}
