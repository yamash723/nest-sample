import { Option } from 'src/domains/objects/std/option';
import { Ok } from './ok';
import { Err } from './err';

export interface IResult<T, E> {
    isOk(): boolean;
    isErr(): boolean;
    ok(): Option<T>;
    err(): Option<E>;
}

export type Result<T, E> = Ok<T, E> | Err<T, E>;
export {
    Ok,
    Err,
};
