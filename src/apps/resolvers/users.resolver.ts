import { Resolver, Query, Args } from '@nestjs/graphql';
import { User } from 'src/graphql';
import { UsersService } from '../services/users.service';
import { InternalServerErrorException } from '@nestjs/common';
import { UserEntity, InitializeUserError } from 'src/domains/entities/user';

@Resolver('Users')
export class UsersResolver {
    constructor(
        private readonly usersService: UsersService,
    ) { }

    @Query()
    async user(@Args('id') id: number): Promise<User | undefined> {
        const result = await this.usersService.findById(id);

        if (result instanceof InitializeUserError) {
            throw new InternalServerErrorException();
        }

        const user = result.ok().value;
        if (user instanceof UserEntity) {
            return UsersResolver.toUserEntity(user);
        } else {
            return undefined;
        }
    }

    @Query()
    async users(): Promise<User[]> {
        const result = await this.usersService.findAll();

        if (result.isErr()) {
            throw new InternalServerErrorException();
        }

        const users = result.ok().value as UserEntity[];
        return UsersResolver.toUserListEntity(users);
    }

    static toUserEntity(user: UserEntity): User {
        const u = new User();
        u.id = user.id;
        u.firstName = user.firstName.toString();
        u.lastName = user.lastName.toString();
        u.age = user.age;

        return u;
    }

    static toUserListEntity(users: UserEntity[]): User[] {
        return users.map(this.toUserEntity);
    }
}
