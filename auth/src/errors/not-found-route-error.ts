import CustomError from "./custom-error";

class NotFoundRouteError extends CustomError {
    statusCode = 404;
    
    constructor() {
        super("Route not found");
        Object.setPrototypeOf(this, NotFoundRouteError.prototype);
    }

    serializeErrors(): { message: string; field?: string; }[] {
        return [
            { message: "Route not found" }
        ];
    }
}

export default NotFoundRouteError;