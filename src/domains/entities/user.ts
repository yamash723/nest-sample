import { Result, Ok, Err } from 'src/domains/objects/std/result';
import { UserName } from '../objects/user/name';
import { ApplicationError } from '../objects/std/error';

export class UserEntityProperty {
    public id: number;
    public firstName: string;
    public lastName: string;
    public age: number;
}

export class UserEntity {
    constructor(
        public readonly id: number,
        public readonly firstName: UserName,
        public readonly lastName: UserName,
        public readonly age: number,
    ) { }

    static new(props: UserEntityProperty): Result<UserEntity, InitializeUserError> {
        const firstNameResult = UserName.new(props.firstName);
        const lastNameResult = UserName.new(props.lastName);

        if (firstNameResult.isErr()) {
            const errorValue = new InitializeUserError(firstNameResult.err().value.toString());
            return new Err(errorValue);
        }

        if (lastNameResult.isErr()) {
            const errorValue = new InitializeUserError(lastNameResult.err().value.toString());
            return new Err(errorValue);
        }

        const firstName = firstNameResult.ok().value as UserName;
        const lastName = lastNameResult.ok().value as UserName;

        const user = new UserEntity(
            props.id,
            firstName,
            lastName,
            props.age,
        );

        return new Ok(user);
    }
}

export class InitializeUserError extends ApplicationError {
    public readonly name = 'InitializeUserError';
}
