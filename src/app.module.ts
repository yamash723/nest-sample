import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersResolver } from './apps/resolvers/users.resolver';
import { UsersModule } from './apps/modules/users.module';
import { UsersService } from './apps/services/users.service';
import { UserEntityDto } from './db/entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
    UsersModule,
  ],
})
export class AppModule { }
