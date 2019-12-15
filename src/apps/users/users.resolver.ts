import { Resolver, Query, Args } from '@nestjs/graphql';
import { User } from 'src/graphql';

@Resolver('Users')
export class UsersResolver {
    private readonly usersData: User[] = [
        { id: 1, firstName: 'Shuhei', lastName: 'Yamashita', age: 10},
        { id: 2, firstName: 'Shin', lastName: 'Kajiwara', age: 20},
    ];

    @Query()
    user(@Args('id') id: number): User {
        return this.usersData.find(user => user.id === id);
    }

    @Query()
    users(): User[] {
        return this.usersData;
    }
}
