import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntityDto } from 'src/db/entities/users.entity';
import { Repository } from 'typeorm';
import { UserEntity, UserEntityProperty, InitializeUserError } from 'src/domains/entities/user';
import { Result, Err, Ok } from 'src/domains/objects/std/result';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntityDto)
        private readonly userEntityDtoRepository: Repository<UserEntityDto>,
    ) { }

    async findById(id: number): Promise<Result<UserEntity | undefined, InitializeUserError>> {
        const user = await this.userEntityDtoRepository.findOne(id);
        if (!user) {
            return new Ok(undefined);
        }

        return UsersService.toUserDomainEntity(user);
    }

    async findAll(): Promise<Result<UserEntity[], InitializeUserError>> {
        const dtoUsers = await this.userEntityDtoRepository.find();
        return UsersService.toUserListDomainEntity(dtoUsers);
    }

    static toUserDomainEntity(user: UserEntityDto): Result<UserEntity, InitializeUserError> {
        const props = new UserEntityProperty();
        props.id = user.id;
        props.firstName = user.firstName;
        props.lastName = user.lastName;
        props.age = user.age;

        return UserEntity.new(props);
    }

    static toUserListDomainEntity(users: UserEntityDto[]): Result<UserEntity[], InitializeUserError> {
        const results = users.map(UsersService.toUserDomainEntity);
        const errors = results.filter(r => r.isErr());
        if (errors.length > 0) {
            return new Err(new InitializeUserError(errors.map(e => e.err().value).join()));
        }

        return new Ok(results.map(r => r.ok().value as UserEntity));
    }
}
