import { Option } from 'src/domains/objects/std/option';
import { Ok } from './ok';
import { Err } from './err';
import { IError } from '../error';

export interface IResult<T, E extends IError> {
    isOk(): boolean;
    isErr(): boolean;
    ok(): Option<T>;
    err(): Option<E>;
}

export type Result<T, E extends IError> = Ok<T, E> | Err<T, E>;
export {
    Ok,
    Err,
};
