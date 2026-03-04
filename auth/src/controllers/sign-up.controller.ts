import type { Request, Response, NextFunction } from "express";

const signup = async (req: Request, res: Response, next: NextFunction) => {
    
    return res.status(201).json({
        message: 'User created successfully',
        data: [{}],
    });
}

export { signup };