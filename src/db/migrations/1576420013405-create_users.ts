import {MigrationInterface, QueryRunner} from "typeorm";

export class createUsers1576420013405 implements MigrationInterface {
    name = 'createUsers1576420013405'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `first_name` varchar(500) NOT NULL, `last_name` varchar(500) NOT NULL, `age` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `users`", undefined);
    }

}
