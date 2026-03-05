import type { NextFunction, Request, Response } from 'express';

import ValidationError from '../errors/validation-errors';

const validate = (schema: any, options?: Object) => {
    const defaultOptions = {
        abortEarly: false,
        allowUnknown: false,
        convert: true,
        ...options,
    }

    return (req: Request, res: Response, next: NextFunction) => {
        try{
            const keys = Object.keys(schema);
            const errors = [];

            for (const key of keys) {
                const { error, value } = schema[key].validate((req as any)[key], defaultOptions);

                if (error) {
                    const propertyErrors = error.details.map((detail: any) => ({
                        field: detail.path.join('.'),
                        message: detail.message.replace(/"/g, ''),
                    }))
                    errors.push(...propertyErrors)
                }
            }            

            if(errors.length > 0){
                next(new ValidationError(errors))
            }

            next();
        }
        catch (e) {
            next(e);
        }
    }
}

export default validate;