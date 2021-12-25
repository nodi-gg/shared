export interface BitcoinTransaction {
  amount: number;
  fee: number;
  confirmations: number;
  blockHash: string;
  blockHeight: number;
  blockIndex: number;
  blockTime: number;
  txId: string;
  time: number;
  timeReceived: number;
  hex: string;
  isRbf: boolean;
}
