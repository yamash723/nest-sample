import { OptionType } from './option';

export interface INone {
    type: OptionType.None;
    value: OptionType.None;
}

export class None implements INone {
    public readonly value: OptionType.None;
    public readonly type: OptionType.None;
}

export const IsNone = new None();
