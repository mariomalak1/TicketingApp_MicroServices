type ErrorType = { 
    message: string, 
    field?: string,
};

abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeErrors(): ErrorType[];

}

export default CustomError;