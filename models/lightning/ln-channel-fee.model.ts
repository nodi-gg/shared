import {LnChannelFeeInterface} from "../../interfaces/lightning/ln-channel-fee.interface";

export class LnChannelFeeModel implements LnChannelFeeInterface{
    base: number;
    ppm: number;

    constructor(base:number, ppm:number) {
        this.base = base;
        this.ppm = ppm;
    }
}