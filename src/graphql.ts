
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export abstract class IQuery {
    abstract user(id?: number): User | Promise<User>;

    abstract users(): User[] | Promise<User[]>;
}

export class User {
    id?: number;
    firstName?: string;
    lastName?: string;
    age: number;
}
