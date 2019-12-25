import { UserName, UserNameError } from './name';

describe('UserName', () => {
    it('UserName should return value string', () => {
        const validString = 'username';
        const username = UserName.new(validString);

        expect(username.isOk()).toBeTruthy();
        expect(username.ok().value.toString()).toEqual(validString);
    });

    it('UserName should not have over 32 string', () => {
        const over32String = '012345678901234567890123456789012';
        expect(UserName.new(over32String).isErr()).toBeTruthy();
        expect(UserName.new(over32String).err().value).toBeInstanceOf(UserNameError);
    });

    it('UserName should not have blank', () => {
        const blank = '';
        expect(UserName.new(blank).isErr()).toBeTruthy();
        expect(UserName.new(blank).err().value).toBeInstanceOf(UserNameError);
    });
});
