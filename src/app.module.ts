import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersResolver } from './apps/users/users.resolver';
import { UsersModule } from './apps/users/users.module';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
    UsersModule,
  ],
  providers: [UsersResolver],
})
export class AppModule {}
