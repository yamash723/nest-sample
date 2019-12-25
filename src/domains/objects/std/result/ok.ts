import { Option, Some, IsNone } from 'src/domains/objects/std/option';
import { IResult } from '.';
import { IError } from '../error';

export class Ok<T, E extends IError> implements IResult<T, E> {
    private readonly value: T;

    constructor(t: T) {
        this.value = t;
    }

    isOk(): boolean {
        return true;
    }

    isErr(): boolean {
        return false;
    }

    ok(): Option<T> {
        return new Some(this.value);
    }

    err(): Option<E> {
        return IsNone;
    }
}
