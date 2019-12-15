import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from './users.resolver';

describe('UsersResolver', () => {
  let resolver: UsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersResolver],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should have first user', () => {
    expect(resolver.user(1)).toStrictEqual({ id: 1, firstName: 'Shuhei', lastName: 'Yamashita', age: 10 });
  });

  it('should have 2 users', () => {
    expect(resolver.users()).toHaveLength(2);
  });
});
