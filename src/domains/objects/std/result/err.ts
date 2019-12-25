import { Option, Some, IsNone } from 'src/domains/objects/std/option';
import { IResult } from '.';
import { IError } from '../error';

export class Err<T, E extends IError> implements IResult<T, E> {
    private readonly error: E;

    constructor(e: E) {
        this.error = e;
    }

    isOk(): boolean {
        return false;
    }

    isErr(): boolean {
        return true;
    }

    ok(): Option<T> {
        return IsNone;
    }

    err(): Option<E> {
        return new Some(this.error);
    }
}
