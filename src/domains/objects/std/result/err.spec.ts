import { Err } from './err';
import { IsNone } from '../option';
import { ApplicationError } from '../error';

describe('Err', () => {
    let err: Err<string, ApplicationError>;
    const testValue = new ApplicationError('errorMessage');

    beforeEach(async () => {
        err = new Err(testValue);
    });

    it('isOk should return false', () => {
        expect(err.isOk()).toBeFalsy();
    });

    it('isErr should return false', () => {
        expect(err.isErr()).toBeTruthy();
    });

    it('ok() should return IsNone', () => {
        expect(err.ok()).toBe(IsNone);
    });

    it('err() should return value', () => {
        expect(err.err().value).toStrictEqual(testValue);
    });
});
