import { INone } from './none';
import { ISome } from './some';

export enum OptionType {
    Some = 'Some',
    None = 'None',
}

export type Option<T> = ISome<T> | INone;
