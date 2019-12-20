import { OptionType } from './option';

export interface ISome<T> {
    type: OptionType.Some;
    value: T;
}

export class Some<T> implements ISome<T> {
    public readonly value: T;
    public readonly type: OptionType.Some;

    constructor(v: T) {
        this.value = v;
    }
}
