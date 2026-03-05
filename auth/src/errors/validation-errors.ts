import CustomError from "./custom-error";

class ValidationError extends CustomError {
    statusCode = 422;
    
    constructor(public errors: any) {
        super("Validation Error");
        Object.setPrototypeOf(this, ValidationError.prototype);
    }


    serializeErrors() {        
        return this.errors;
    }
}

export default ValidationError;