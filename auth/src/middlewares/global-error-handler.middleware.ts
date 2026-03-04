import type { NextFunction, Request, Response } from 'express';

import CustomError from '../errors/custom-error';

const globalErrorHandler = async (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    if(err instanceof CustomError){
        return res.status(err.statusCode).json({
            errors: err.serializeErrors()
        });
    }
    
    
    return res.status(500).json({
        errors: [{
            message: err.message
        }]
    })
}

export default globalErrorHandler;