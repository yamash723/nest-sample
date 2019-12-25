import { Ok } from './ok';
import { IsNone } from '../option';
import { ApplicationError } from '../error';

describe('Ok', () => {
    let ok: Ok<string, ApplicationError>;
    const testValue = 'test word';

    beforeEach(async () => {
        ok = new Ok(testValue);
    });

    it('isOk should return true', () => {
        expect(ok.isOk()).toBeTruthy();
    });

    it('isErr should return false', () => {
        expect(ok.isErr()).toBeFalsy();
    });

    it('ok() should return value', () => {
        expect(ok.ok().value).toBe(testValue);
    });

    it('err() should return IsNone', () => {
        expect(ok.err()).toBe(IsNone);
    });
});
