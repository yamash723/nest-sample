import { Result, Err, Ok } from '../std/result';
import { ApplicationError } from '../std/error';

// WIP: 可能であればconstructorをprivateにして例外を排除した強固な型にしたいが、まだ試行錯誤中
export class UserName {
    constructor(private readonly value: string) { }

    toString(): string {
        return this.value;
    }

    static new(value: string): Result<UserName, UserNameError> {
        const maxLength = 32;
        if (value.length > 32) {
            return new Err(new UserNameError('user name is too long(maximum is 32)'));
        }

        if (value.length === 0) {
            return new Err(new UserNameError('user name can\'t be blank'));
        }

        return new Ok(new UserName(value));
    }
}

export class UserNameError extends ApplicationError {
    public readonly name = 'UserNameError';
}
