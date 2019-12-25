import { Module } from '@nestjs/common';
import { UsersResolver } from '../resolvers/users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntityDto } from 'src/db/entities/users.entity';
import { UsersService } from '../services/users.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntityDto]),
    ],
    providers: [
        UsersService,
        UsersResolver,
    ],
})
export class UsersModule { }
