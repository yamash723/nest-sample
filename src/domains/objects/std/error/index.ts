export interface IError {
    name: string;
    message: string;
}

export class ApplicationError implements Error {
    public name = 'ApplicationError';

    constructor(public readonly message: string) {
        if (typeof console !== 'undefined') {
            // tslint:disable-next-line: no-console
            console.log(`name: ${this.name}, message: ${this.message}`)
        }
    }

    toString() {
        return `${this.name}: ${this.message}`;
    }
}
