import CustomError from "./custom-error";

class UnauthorizedError extends CustomError {
    statusCode = 401;

    constructor(message: string = "You are not authorized") {
        super(message);

        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }

    serializeErrors() {
        return [{message: this.message}]
    }
}

export default UnauthorizedError;