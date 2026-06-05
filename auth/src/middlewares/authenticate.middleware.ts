import type { NextFunction, Request, Response } from "express";

import JWT from "../services/JWT";

import { UnauthorizedError } from "../errors/index..errors";
import type { currentUserPayload } from "../config/types";



const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    let payload = null;

    if(req.session?.token){
        try {
            payload = JWT.verify(req.session.token, process.env.JWT_SECRET!) as currentUserPayload;
            req.currentUser = payload;
            return next();
        }
        catch(err){
            req.session = null;
            throw new UnauthorizedError("Invalid token, please sign in again");
        }
    }else{
        req.session = null;
        throw new UnauthorizedError("You are not authenticated, please sign in");
    }
};

export default authenticate;
